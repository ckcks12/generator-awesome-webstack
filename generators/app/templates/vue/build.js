const webpack = require('webpack')
const config = require('./webpack.config')
const path = require('path')
const rimraf = require('rimraf')

rimraf(path.resolve(__dirname, '../dist'), (err) => {
    if (err) throw err

    webpack(config, (err, stats) => {
        if (err) throw err

        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }))

        if (stats.hasErrors()) {
            console.log('Build failed with errors')
            process.exit(-1)
        }

        console.log('Build completed')
    })
})
