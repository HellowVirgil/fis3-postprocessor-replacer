[![NPM](https://nodei.co/npm/fis3-postprocessor-replacer.png?downloads=true)](https://nodei.co/npm/fis3-postprocessor-replacer/)

### 本插件将会根据配置在编译阶段根据正则替换字符串

安装

``` javascript
npm install fis3-postprocessor-replacer -g
```

参数说明

| 参数名        | 说明    |  类型  | 默认值 |
| --------   | -----:   | -----: | :----: |
| rules       | 替换规则，key 支持正则表达式或字符串，value 为替换后的字符串 |   Object    | {} |
| flag        | 等同于 RegExp 的修饰符，'i' 执行大小写不敏感的匹配，'g' 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止），'m' 执行多行匹配      |   String    | 'g' |

示例，在 fis-conf 中配置

``` javascript
fis.match('**.js', {
    postprocessor: fis.plugin('replacer', {
        rules: {
            'https://www.baidu.com/': 'http://test.baidu.com:8080/'
        }
    })
});
fis.match('**.tpl', {
    postprocessor: fis.plugin('replacer', {
        rules: {
            '{api-url}': 'http://127.0.0.1'
        },
        flag: 'ig'
    })
});
```

这样配置的话，将在编译阶段将 js 文件中的`https://www.baidu.com/`替换为`http://test.baidu.com:8080/`，同时将 tpl 文件中的`{api-url}`（匹配忽略大小写）替换为对应的`http://127.0.0.1`。