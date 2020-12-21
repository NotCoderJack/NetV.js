/**
 * @author Xiaodong Zhao <zhaoxiaodong@zju.edu.cn>
 * @description interaction example, add global and element-wise event handler
 */

const testData = {
    nodes: [
        {
            id: '0',
            x: 300,
            y: 100,
            style: {
                shape: 'cross',
                // rotate: Math.PI / 4,
                strokeWidth: 4,
                innerWidth: 20,
                innerHeight: 20,
                fill: { r: 1, g: 0, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '1',
            x: 500,
            y: 100,
            style: {
                shape: 'triangle',
                fill: { r: 0, g: 1, b: 0, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        },
        {
            id: '2',
            x: 400,
            y: 400,
            style: {
                fill: { r: 0, g: 0, b: 1, a: 1 },
                strokeColor: { r: 1, g: 0, b: 1, a: 0.3 }
            }
        }
    ],
    links: [
        {
            source: '0',
            target: '2',
            style: {
                strokeWidth: 4
            }
        },
        {
            source: '1',
            target: '2',
            style: {
                strokeWidth: 4
            }
        }
    ]
}

const configs = {
    container: document.getElementById('main'),
    node: {
        style: {
            r: 25,
            width: 50,
            height: 50,
            vertexAlpha: { x: 0, y: -25 },
            vertexBeta: { x: -12.5 * Math.sqrt(3), y: 12.5 },
            vertexGamma: { x: 12.5 * Math.sqrt(3), y: 12.5 },
            strokeWidth: 5,
            fill: { r: 1, g: 0, b: 0, a: 0.8 }
        },
        clickCallback: (node) => {
            alert(`Node ${node.id()} clicked~`)
        }
    },
    link: {
        clickCallback: (link) => {
            link.strokeColor({
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                a: Math.random()
            })
            netv.draw()
            // alert(`Link ${link.source().id()}-${link.target().id()} clicked~`)
        }
    },
    width: 800,
    height: 600,
    backgroundColor: { r: 0.95, g: 0.98, b: 0.98, a: 1 },
    nodeLimit: 1000
}
const netv = new NetV(configs)

netv.data(testData)

netv.nodes()[0].on('mousedown', (e) => {
    console.log(e)
    const node = e.element
    node.fill({
        r: 1,
        g: 1,
        b: 1,
        a: 1
    })
    node.r(15)
    netv.draw()
})

netv.nodes()[0].on('mouseup', (e) => {
    console.log(e)
    const node = e.element
    node.fill({ r: 1, g: 0, b: 0, a: 1 })
    node.r(25)
    netv.draw()
})

netv.nodes()[0].on('mouseover', (e) => {
    const node = e.element
    console.log(`${node.id()} mouseover`)
})

netv.nodes().forEach((node) => {
    node.on('dragstart')
    node.on('dragging')
    node.on('dragend')
})

netv.links()[0].on('click', (e) => {
    console.log(e)
    const link = e.element
    console.log(`${link.source().id()}-${link.target().id()} clicked`)
})

netv.links()[1].on('mouseout', (e) => {
    const link = e.element
    console.log(`${link.source().id()}-${link.target().id()} mouseout`)
})

netv.draw()

netv.on('zoom')
netv.on('pan')

const reverseBackgroundColor = () => {
    netv.backgroundColor({
        r: 1 - netv.backgroundColor().r,
        g: 1 - netv.backgroundColor().g,
        b: 1 - netv.backgroundColor().b,
        a: netv.backgroundColor().a
    })
    netv.draw()
}
netv.on('mousedown', reverseBackgroundColor)
netv.on('mouseup', reverseBackgroundColor)
netv.on('click', () => {
    console.log('Canvas is clicked!')
})
