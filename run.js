var mq = require('./')

var css = "@media screen and (max-width: 1000px) {#container{width : 95%;}}"

console.log(mq.match(css, "500px"))
