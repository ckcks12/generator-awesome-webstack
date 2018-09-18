const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
// Const stacks = require(path.join(__dirname, '../generators/app/stacks.json'))

describe('generator-awesome-webstack:app', () => {
    beforeAll(() => {
        return helpers
            .run(path.join(__dirname, '../generators/app'))
            .withPrompts({set: 'MySQL/Express'})
    })

    it('creates files', () => {
        assert.file(['express/package.json'])
    })
})
