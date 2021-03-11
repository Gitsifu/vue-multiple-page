module.exports = {
    pages: {
        pc: {
            // page 的入口
            entry: 'src/entry/pc.js',
            // 模板来源
            template: 'public/pc.html',
            // 在 dist/index.html 的输出
            filename: 'pc.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'pc端',
            chunks: ['chunk-vendors', 'chunk-common', 'pc']
        },
        mobile: {
            // page 的入口
            entry: 'src/entry/mobile.js',
            // 模板来源
            template: 'public/mobile.html',
            // 在 dist/index.html 的输出
            filename: 'mobile.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '移动端',
            chunks: ['chunk-vendors', 'chunk-common', 'mobile']
        },
    },
}
