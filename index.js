var parse = require('css-parse')

module.exports.media = media

function media (css) {
    var ast = parse(css)

    var media_list = []
    ast.stylesheet.rules.forEach(function (rule) {
        if (rule.type === "media") media_list.push(rule.media)
    })

    return media_list
}

module.exports.borders = function (css) {
    var ast = parse(css)

    var border_list = []
    ast.stylesheet.rules.forEach(function (rule) {
        if (rule.type === "media") {
            var width = rule.media.match(/width:\s*(\d+\D+)\)/)
            border_list.push(width[1])
        }
    })

    return border_list
}

module.exports.match = function (css, browserWidth) {
    var ast = parse(css)
    var media_list = media(css)
    var browserWidthNum =  +(browserWidth.match(/(\d+)\D+/)[1])
    var ret = []

    media_list.forEach(function (ml) {
        var match = ml.match(/(min|max)-width:\s*(\d+\D+)\)/)
        var max_or_min = match[1]
        var border = match[2]
        var borderNum = +(border.match(/(\d+)\D+/)[1])

        if (max_or_min === "max" && browserWidthNum < borderNum) {
            ret.push(ml)
        }
        else if (max_or_min === "min" && browserWidth > border) {
            ret.push(ml)
        }
    })

    return ret
}
