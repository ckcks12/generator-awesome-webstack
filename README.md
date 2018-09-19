# generator-awesome-webstack [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> setup development, production and testing environment at once

## Installation

First, install [Yeoman](http://yeoman.io) and generator-awesome-webstack using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-awesome-webstack
```

Then generate your new project:

```bash
yo awesome-webstack
```

## Available Web Stacks

These stacks are classified into 5 groups according to their rules.

```
proxy
    nginx
db
    mysql
middle
    express
js
    vue
css
    bootstrap
```

You can choose any combination you want to build. e.g., `nginx/mysql/express` or `apache/redis/tomcat`.

## Monitoring

The basic monitoring of `docker` would help you a little bit. Also there are a lot of tools out there so have a look ma boy XD.
```bash
docker stats
```

## Contribute

It's hard to implement every popular web stacks by myself. So give me your pull requests for adding web stacks. There are only three files to edit for adding new web stacks.

For example, `express`
```
express/
bin/start-express.sh
stacks.json
```

## License

MIT © [ckcks12](http://ckcks12.com)


[npm-image]: https://badge.fury.io/js/generator-awesome-webstack.svg
[npm-url]: https://npmjs.org/package/generator-awesome-webstack
[travis-image]: https://travis-ci.org/ckcks12/generator-awesome-webstack.svg?branch=master
[travis-url]: https://travis-ci.org/ckcks12/generator-awesome-webstack
[daviddm-image]: https://david-dm.org/ckcks12/generator-awesome-webstack.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ckcks12/generator-awesome-webstack
