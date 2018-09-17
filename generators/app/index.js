const Generator = require('yeoman-generator')
// Const chalk = require('chalk')
// const yosay = require('yosay')
const stacks = require('./stacks.json')

module.exports = class extends Generator {
    async prompting() {
        let stack = stacks.skeleton
        let answer = null
        let prompts = []

        answer = await this.prompt([
            {
                type: 'list',
                name: 'set',
                message: 'Choose stack sets',
                choices: Object.keys(stacks.sets).concat('other')
            }
        ])

        if (answer.set !== 'other') {
            stack = Object.assign(stack, stacks.sets[answer.set])
            this.stack = stack
            return
        }

        for (let k of Object.keys(stacks.stacks)) {
            prompts.push({
                type: 'list',
                name: k,
                message: `Choose ${k} stack`,
                choices: stacks.stacks[k].concat('none')
            })
        }

        answer = await this.prompt(prompts)
        for (let k of Object.keys(answer)) {
            if (answer[k] === 'none') {
                answer[k] = null
            }
        }

        this.stack = answer
    }

    writing() {
        console.log(this.stack)
        // This.fs.copy(
        //     this.templatePath('dummyfile.txt'),
        //     this.destinationPath('dummyfile.txt')
        // )
    }

    install() {
        // This.installDependencies()
    }
}
