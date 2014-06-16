var parse = require('css-parse')

module.exports.media = function (css) {
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
