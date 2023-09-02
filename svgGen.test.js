const Text = require('./classes/Text');
const { Shape, Circle, Triangle, Square } = require('./classes/Shape');
const Svg = require('./classes/Svg');
const { describe } = require('yargs');

describe('Testing shapes', () => {
    test('Test Shape.js', () => {
        const testShape = new Shape('red')
        expect(testShape.shapeColor).toBe('red')
    })
    test('Test Circle', ()=>{
        const testCir= new Circle('red')
        const expectedString = `<circle cx="150" cy="100" r="80" fill="red" />`
        expect(testCir.render()).toBe(expectedString)
    })
    test('Test Triangle', ()=>{
        const testTriangle= new Triangle('red')
        const expectedString = `<polygon points="150, 18 244, 182 56, 182" fill="red"/>`
        expect(testTriangle.render()).toBe(expectedString)
    })
    test('Test Square', ()=>{
        const testSquare= new Square('red')
        const expectedString = `<rect x="90" y="40" width="120" height="120" fill="red"/>`
        expect(testSquare.render()).toBe(expectedString)
    })
})

describe('Test Text', ()+> {
    test('')
})