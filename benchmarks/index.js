/**
 * @author Xiaodong Zhao<zhaoxiaodong@zju.edu.cn> and Jiacheng Pan <panjiacheng@zju.edu.cn>
 * @description benchmark, FPS of NetV.js
 */

import { STEP, TEST_FUNCS_INDEX } from './configs'
import testNetV from './netv'
import { reloadPage } from './lib/utils'
import testStardust from './stardust'
import { TestCase } from './TestCase'

const numbersOfNodes = [1e2, 5e2, 1e3].reverse() // , 2e3, 4e3, 8e3
const density = 20

const testFuncs = [
    {
        name: 'NetV',
        func: testNetV
    },
    {
        name: 'stardust',
        func: testStardust
    }
]

const step = localStorage.getItem(STEP)
let testFuncsIndex = localStorage.getItem(TEST_FUNCS_INDEX)

if (!step) {
    if (testFuncsIndex === undefined || testFuncsIndex === null) {
        testFuncsIndex = 0
    } else {
        testFuncsIndex = Number(testFuncsIndex)
        testFuncsIndex += 1
    }
}

localStorage.setItem(TEST_FUNCS_INDEX, testFuncsIndex.toString())

const testFunc = testFuncs[testFuncsIndex].func

const testCase = new TestCase({
    numbersOfNodes,
    numbersOfLinks: numbersOfNodes.map((n) => n * density),
    name: testFuncs[testFuncsIndex].name
})

test(testCase, testFunc)

async function test(testCase, testFunc) {
    await testFunc(testCase)
    testCase.finish()

    // if not reload
    if (Number(testFuncsIndex) + 1 >= testFuncs.length) {
        localStorage.clear()
    } else {
        reloadPage()
    }
}
