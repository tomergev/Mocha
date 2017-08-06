var assert = require('chai').assert
var expect = require('chai').expect

var request = require('request')
var baseUrl = 'http://swapi.co/api'

var add = require('../app/add')
var lowerCase = require('../app/lowerCase')
var longestWord = require('../app/longestWord')
var rockPaperScissor = require('../app/rockPaperScissor')
var translate = require('../app/translate')

describe('Checking that all the files exist', function () {
    it('add.js', function () {
        expect(add).to.exist
    })
    it('lowerCase.js', function () {
        expect(lowerCase).to.exist
    })
    it('longestWord.js', function () {
        expect(longestWord).to.exist
    })
    it('rockPaperScissor.js', function () {
        expect(rockPaperScissor).to.exist
    })
    it('translate.js', function () {
        expect(translate).to.exist
    })
})

describe('Adding two numbers', function () {
    it('add', function () {
        assert.equal(add(1, 1), 2)
        assert.equal(add(100,100), 200)
        assert.typeOf(add(1,1), 'number')

        expect(add(1,1)).to.not.equal(0)
        expect(add(100,100)).to.not.equal(300)
    })
    it('Strict equal', function () {
        assert.strictEqual(156 + 217, 373)
    })
    it('Not strict equal', function () {
        assert.equal(1 + 1, '2')
    })
    it('Not equal', function () {
        assert.notEqual(1 + 1, '0')
    })
})

describe('String to all lower case letters', function () {
    it('lowerCase', function () {
        var input = 'HELLO WORLD'
        var output = lowerCase(input)
        expect(output).to.equal('hello world')
        expect(output).to.not.equal('HELLO WORLD')
        expect(output).to.be.a('string')
        // Refactored these five lines of code to the three lines of code below

        expect(lowerCase('HELLO WORLD')).to.equal('hello world')
        expect(lowerCase('HELLO WORLD')).to.be.a('string')
        expect(lowerCase('HELLO WORLD')).to.not.equal('HELLO WORLD')
        // Refactored the 'equal-to' and 'to-be-a' expects to asserts

        assert(lowerCase('HELLO WORLD'), 'hello world')
        assert.typeOf(lowerCase('HELLO WORLD'), 'string')
    })
})

describe('Returns the longest word in the sentence', function () {
    it('longestWord', function () {
        var sentence1 = 'Ring around the rosy'
        var senteceOutput1 = longestWord(sentence1)
        var sentence2 = 'Who let the dogs out? WHO?? WHO??!!'
        var senteceOutput2 = longestWord(sentence2)
        expect(senteceOutput1).to.equal('around')
        expect(senteceOutput1).to.not.equal('rosy')
        expect(senteceOutput2).to.equal('dogs')
        // Refactored the code above to the code below

        expect(longestWord('Ring around the rosy'))
            .to.equal('around')
        expect(longestWord('Ring around the rosy'))
            .to.not.equal('rosy')
        expect(longestWord('Who let the dogs out? WHO?? WHO??!!'))
            .to.equal('dogs')

        // Refactored the 'equal-to' expects to asserts
        assert(longestWord('Ring around the rosy'), 'around')
        assert(longestWord('Who let the dogs out? WHO?? WHO??!!'), 'dogs')
    })
})


describe('Rock, Paper, Scissors', function () {
    it('rockPaperScissor', function () {
        var rock = 'rock'
        var paper = 'paper'
        var rockPaper = rockPaperScissor(rock, paper)
        var rockRock = rockPaperScissor(rock, rock)
        expect(rockPaper).to.equal('paper wins')
        expect(rockRock).to.equal("It's a tie!")
        // Refactored the 6 lines of code above into two lines

        expect(rockPaperScissor('rock', 'paper')).to.equal('paper wins')
        expect(rockPaperScissor('rock', 'rock')).to.equal("It's a tie!")

        // Refactored the 'equal-to' expects to asserts
        assert(rockPaperScissor('rock', 'paper'), 'paper wins')
        assert(rockPaperScissor('rock', 'rock'), "It's a tie!")

        // Additional Testing
        assert.typeOf(rockPaperScissor('paper', 'paper'), 'string')
        assert(rockPaperScissor('rock', 'scissors'), 'rock wins')
        assert(rockPaperScissor('paper', 'scissors'), 'scissors win')
    })
})

describe("Translating the words: 'hello' & 'beer' to Spanish", function () {
    it('translate with lang', function () {
        assert(translate('hello', 'es'), 'hola')
        assert(translate('beer', 'es'), 'cervesa')
        assert(translate('hello', 'en'), 'hello')
        assert(translate('beer', 'es'), 'cervesa')
    })
    it('translate without lang', function () {
        assert(translate('hello'), 'hello')
        assert(translate('beer'), 'beer')
        assert(translate('hola'), 'hola')
        assert(translate('cervesa'), 'cervesa')

        assert(translate('foo'), 'foo')
    })
})

describe('test the order of Mocha hooks', function () {
    before(function () { console.log('before') })
    after(function () { console.log('after') })

    beforeEach(function () { console.log('beforeEach') })
    afterEach(function () { console.log('afterEach') })

    it('test 1', function () { console.log('1') })
    it('test 2', function () { console.log('2') })

})

// Testing the Star War's API
describe('Star Wars API', function () {
    it('Returns Data on Luke Skywalker', function (done) {
        request.get({ url: baseUrl + '/people/1' },
            function (error, response, body) {
                var bodyObj = JSON.parse(body)
                expect(bodyObj.name).to.equal('Luke Skywalker')

                expect(response.statusCode).to.equal(200)
                expect(response.statusCode).to.not.equal(500)
                expect(response.statusCode).to.not.equal(404)
                console.log(bodyObj)
                done()
            }
        )
    })
    it('Return Data on Darth Vader', function (done) {
        request.get({ url: baseUrl + '/people/4' },
            function (error, response, body) {
                var bodyObject = JSON.parse(body)
                expect(bodyObject.name).to.equal('Darth Vader')
                expect(bodyObject.birth_year).to.equal('41.9BBY')

                expect(response.statusCode).to.equal(200)
                expect(response.statusCode).to.not.equal(500)
                expect(response.statusCode).to.not.equal(404)
                console.log(bodyObject)
                done()
            }
        )
    })
})