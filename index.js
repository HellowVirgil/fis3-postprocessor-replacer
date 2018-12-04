/**
 * @file: index.js
 * @author: HellowVirgil
 */

module.exports = function (content, file, settings) {
    fis.util.map(settings.rules, function (key, str) {
        var reg = new RegExp(key, settings.flag || 'g');
        content = content.replace(reg, str);
    });

    return content;
};
