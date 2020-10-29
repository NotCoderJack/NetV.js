import { RenderAttribute, ShaderSeries } from '../../interfaces'
import { createProgram, createArrayBuffer, extractAttributesFromShader } from '../../utils'
import { Transform } from '../../../interfaces'

export class RenderElementManager {
    protected gl: WebGL2RenderingContext
    // the capablity of the render manager,
    // which means how many elements can be rendered
    protected capacity: number
    protected count = 0
    protected width: number
    protected height: number
    protected pixelRatio: number

    protected program: WebGLProgram
    protected attributes: Map<string, RenderAttribute>

    // id shaders are design for mapping canvas pixels to elements
    protected idProgram: WebGLProgram
    protected idAttributes: Map<string, RenderAttribute>
    protected idTexture: WebGLTexture

    public constructor(
        gl: WebGL2RenderingContext,
        params: any,
        shaderSeries: ShaderSeries,
        idTexture: WebGLTexture
    ) {
        const { limit, width, height, instanceVerteces } = params
        this.gl = gl
        this.capacity = limit
        this.width = width
        this.height = height
        this.pixelRatio = window.devicePixelRatio || 1

        this.attributes = extractAttributesFromShader(shaderSeries.vertex)
        this.program = createProgram(
            this.gl,
            shaderSeries.vertex,
            shaderSeries.fragment,
            this.attributes
        )

        this.idAttributes = extractAttributesFromShader(shaderSeries.idVertex)
        this.idProgram = createProgram(
            this.gl,
            shaderSeries.idVertex,
            shaderSeries.idFragment,
            this.idAttributes
        )

        this.idTexture = idTexture

        // initial attributes arrays and buffers
        this.attributes.forEach((attr) => {
            if (!attr.isBuildIn) {
                attr.array = new Float32Array(attr.size * this.capacity)
            } else {
                // build in attribute: veteces positions
                // four verteces of one element (https://panjiacheng.site/wiki/2019/06/06/webGL/WebGL-BatchDraw%E4%BB%A3%E7%A0%81%E9%98%85%E8%AF%BB+%E7%90%86%E8%A7%A3/)
                // prettier-ignore
                attr.array = new Float32Array(instanceVerteces)
            }

            attr.buffer = createArrayBuffer(this.gl, attr.array)
        })

        // init id attributes and buffers
        this.idAttributes.forEach((attr, name) => {
            if (name === 'in_id') {
                // attr: in vec4 inId;
                // TODO: hardcode check, need refactor
                if (!attr.isBuildIn) attr.array = new Float32Array(attr.size * this.capacity)
                attr.buffer = createArrayBuffer(this.gl, attr.array)
            } else {
                this.idAttributes.set(name, this.attributes.get(name))
            }
        })

        // init uniforms
        this.gl.useProgram(this.program)
        // get uniform locations in Memory
        const projectionLocation = this.gl.getUniformLocation(this.program, 'projection')
        const scaleLocation = this.gl.getUniformLocation(this.program, 'scale')
        const translateLocation = this.gl.getUniformLocation(this.program, 'translate')
        const viewportLocation = this.gl.getUniformLocation(this.program, 'viewport')
        const pixelRatioLocation = this.gl.getUniformLocation(this.program, 'pixelRatio')

        // set uniform values
        // prettier-ignore
        const projection = new Float32Array([
            2 / this.width,                0, 0,
                         0, -2 / this.height, 0,
                        -1,                1, 1
        ])
        projectionLocation !== null &&
            this.gl.uniformMatrix3fv(projectionLocation, false, projection)

        const scale = new Float32Array([1, 1])
        scaleLocation !== null && this.gl.uniform2fv(scaleLocation, scale)

        const translate = new Float32Array([0, 0])
        translateLocation !== null && this.gl.uniform2fv(translateLocation, translate)

        const viewport = new Float32Array([this.width, this.height])
        viewportLocation !== null && this.gl.uniform2fv(viewportLocation, viewport)

        pixelRatioLocation !== null && this.gl.uniform1f(pixelRatioLocation, this.pixelRatio)

        // id uniforms, identical to node
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idProjectionLocation = this.gl.getUniformLocation(this.idProgram, 'projection')
        const idScaleLocation = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLocation = this.gl.getUniformLocation(this.idProgram, 'translate')
        const idViewportLocation = this.gl.getUniformLocation(this.idProgram, 'viewport')
        const idPixelRatioLocation = this.gl.getUniformLocation(this.idProgram, 'pixelRatio')

        idProjectionLocation !== null &&
            this.gl.uniformMatrix3fv(idProjectionLocation, false, projection)
        idScaleLocation !== null && this.gl.uniform2fv(idScaleLocation, scale)
        idTranslateLocation !== null && this.gl.uniform2fv(idTranslateLocation, translate)
        idViewportLocation !== null && this.gl.uniform2fv(idViewportLocation, viewport)
        idPixelRatioLocation !== null && this.gl.uniform1f(idPixelRatioLocation, this.pixelRatio)
    }

    /**
     * set Transform in Render Link
     * @param transform current transform(pan&zoom condition)
     */
    public setTransform(transform: Transform) {
        this.gl.useProgram(this.program)
        const scaleLoc = this.gl.getUniformLocation(this.program, 'scale')
        const translateLoc = this.gl.getUniformLocation(this.program, 'translate')

        const scale = new Float32Array([transform.k, transform.k])
        this.gl.uniform2fv(scaleLoc, scale)

        const translate = new Float32Array([transform.x, transform.y])
        this.gl.uniform2fv(translateLoc, translate)

        // id uniforms, identical to link
        // TODO: need refactor too
        this.gl.useProgram(this.idProgram)
        const idScaleLoc = this.gl.getUniformLocation(this.idProgram, 'scale')
        const idTranslateLoc = this.gl.getUniformLocation(this.idProgram, 'translate')

        this.gl.uniform2fv(idScaleLoc, scale)
        this.gl.uniform2fv(idTranslateLoc, translate)
    }

    public draw() {
        if (this.count > 0) {
            this.gl.enable(this.gl.BLEND)
            this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)

            this.gl.useProgram(this.program)
            this.attributes.forEach((attr) => {
                this.gl.enableVertexAttribArray(attr.location)
            })

            this.attributes.forEach((attr, i) => {
                this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
                this.gl.vertexAttribPointer(
                    attr.location,
                    attr.size,
                    this.gl.FLOAT,
                    false,
                    attr.size * attr.array.BYTES_PER_ELEMENT,
                    0
                )
                if (!attr.isBuildIn) this.gl.vertexAttribDivisor(attr.location, 1)
            })
        }

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)

        // draw id
        this.gl.blendFunc(this.gl.ONE, this.gl.ZERO)
        this.gl.useProgram(this.idProgram)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.idTexture)

        this.idAttributes.forEach((attr) => {
            this.gl.enableVertexAttribArray(attr.location)
        })

        const attr = this.idAttributes.get('in_id') // ! HARDCODE CHECK
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, attr.buffer)
        this.gl.vertexAttribPointer(
            attr.location,
            attr.size,
            this.gl.FLOAT,
            false,
            attr.size * attr.array.BYTES_PER_ELEMENT,
            0
        )
        this.gl.vertexAttribDivisor(attr.location, 1)

        this.gl.drawArraysInstanced(this.gl.TRIANGLE_STRIP, 0, 4, this.count)
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)

        this.gl.enable(this.gl.BLEND)
        this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA)
    }

    // public addData(elements: Element[]) {}
}