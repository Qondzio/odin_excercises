const capitalize = require('./capitalize.js')
const reverseString = require('./reverseString.js')
const calculator = require('./calculator.js')
const caesarCipher = require('./caesarCipher.js')
const analyzeArray = require('./analyzeArray.js')

it('Capitalize', ()=>
    expect(capitalize('barcelona')).toBe('Barcelona')
)

it('ReverseString', ()=>
    expect(reverseString('barcelona')).toBe('anolecrab')
)

it('Calculator adds a numbers', ()=>
    expect(calculator.add(5,6)).toBe(11)
)

it('Calculator subtracts a numbers', ()=>
    expect(calculator.subtract(6,2)).toBe(4)
)

it('Calculator multiplies a numbers', ()=>
    expect(calculator.multiply(66,2)).toBe(132)
)

it('Calculator divides a numbers', ()=>
    expect(calculator.divide(10,2)).toBe(5)
)

it('CaesarCipher', ()=>
    expect (caesarCipher('abc',3)).toBe('def')
)

it('CaesarCipher xyz', ()=>
    expect (caesarCipher('xyz',3)).toBe('abc')
)

it('CaesarCipher case preservation', ()=>
    expect (caesarCipher('HeLLo',3)).toBe('KhOOr')
)

it('CaesarCipher punctuation', ()=>
    expect (caesarCipher('Hello, World!',3)).toBe('Khoor, Zruog!')
)

it('AnalyzeArray', ()=>
    expect(analyzeArray([1,8,3,4,2,6]))
    .toEqual(
    {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    }))