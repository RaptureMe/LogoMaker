const Text = require('./classes/Text');
const { Shape, Circle, Triangle, Square } = require('./classes/Shape');
const Svg = require('./classes/Svg');

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

describe('Test Text', () => {
    test('Test Logo Characters', ()=>{
        const testLogoChar = new Text('123')
        expect(testLogoChar.logoCharacters).toBe('123')
    })
    test('Test Text Color', ()=>{
        const testLogoColor = new Text('','Blue')
        expect(testLogoColor.textColor).toBe('Blue')
    })
    test('Test Render', ()=> {
        const testText = new Text('123','Black')
        const expectedString = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="Black">123</text>`
        expect(testText.render()).toBe(expectedString)
    })
})