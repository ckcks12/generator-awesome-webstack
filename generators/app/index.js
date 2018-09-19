const Generator = require('yeoman-generator')
const stacks = require('./stacks.json')
const chalk = require('chalk')
const _ = require('lodash')


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

        if (!_.isNil(answer.set) && answer.set !== 'other') {
            stack = Object.assign(stack, stacks.sets[answer.set])
            this.stack = stack
            return
        }

        for (let k of Object.keys(stacks.stacks)) {
            prompts.push({
                type: 'list',
                name: k,
                message: `Choose ${chalk.yellow(k)} stack`,
                choices: _.keys(stacks.stacks[k]).concat('none')
            })
        }

        answer = await this.prompt(prompts)
        answer = _.omitBy(answer, (v) => v === 'none')

        this.stack = answer
    }

    writing() {
        console.log(this.stack)
        for (let k of Object.keys(this.stack)) {
            let name = this.stack[k]

            if (k === 'css') continue
            if (!name) continue

            let files = stacks.stacks[k][name]
            if (files.length === 0) continue

            for (let file of files) {
                this.fs.copyTpl(
                    this.templatePath(file),
                    this.destinationPath(file),
                    this.stack
                )
            }
        }

        let commonFiles = ['bin/install.sh', 'bin/start.sh', 'bin/shutdown.sh', '.gitignore']
        for (let file of commonFiles) {
            this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(file),
                this.stack
            )
        }
    }

    install() {
    }
}
