# css-mq [![Build Status](https://travis-ci.org/morishitter/css-mq.svg)](https://travis-ci.org/morishitter/css-mq)

Analize CSS Media Queries

## Installation

```shell
$ npm install css-mq
```

## Example

```javascript
var mq = require('css-mq')
var css = "@media screen and (max-width: 1000px) {#container{width : 95%;}}"

mq.media(css)
// ["screen and (max-width: 1000px)"]

mq.borders(css)
// ["1000px"]
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
