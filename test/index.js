var test = require('colored-tape');
var mq = require('..');

var css = "@media screen and (max-width: 1000px) {#container{width : 95%;}}"

test('mq.media', function (t) {
    var result = mq.media(css)
    var expected = ["screen and (max-width: 1000px)"]

    t.same(result, expected)

    t.end();
});

test('mq.borders', function (t) {
    var result = mq.borders(css)
    var expected = ["1000px"]

    t.same(result, expected)

    t.end();
});

test('mq.match', function (t) {
    var result = mq.match(css, '500px')
    var expected = [ 'screen and (max-width: 1000px)' ]

    t.same(result, expected)

    t.end();
})
