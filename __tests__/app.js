const path = require('path')
const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const stacks = require(path.join(__dirname, '../generators/app/stacks.json'))
const _ = require('lodash')


_.forIn(stacks.stacks, (names, type) => {
    _.forIn(names, (files, name) => {
        let stack = {}
        stack[type] = name
        testStack(stack)
    })
})

function testStack(stack) {
    let one = _.omitBy(stack, (v) => v === null)
    let type = _.keys(stack)[0]
    let name = stack[type]

    describe(`${type}::${name}`, () => {
        beforeAll(() =>
            chooseStack(one)
        )

        it(`check files`, () => {
            let files = stacks.stacks[type][name]
            assert.file(files)
        })
    })
}

function chooseStack(stack) {
    return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts(stack)
}
