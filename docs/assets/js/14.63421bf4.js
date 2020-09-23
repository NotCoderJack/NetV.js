(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{749:function(t,s,a){"use strict";a.r(s);var n=a(103),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"开发指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发指南"}},[t._v("#")]),t._v(" 开发指南")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/development-guide.html"}},[t._v("English Version")])],1),t._v(" "),a("ul",[a("li",[a("ul",[a("li",[t._v("我们希望我们的开发人员和审阅者考虑如何编写漂亮的代码。 它与研究一样重要，因为出色的研究工作需要落地和应用才能使他人受益。 此外，出色的工程能力也有助于我们的职业发展。")]),t._v(" "),a("li",[t._v("研究是科学，而工程更像艺术。 优秀的软件开发工程师应该从可用代码发展为健壮，可靠和宽容的代码。 "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/25595871",target:"_blank",rel:"noopener noreferrer"}},[t._v("推荐阅读:为什么你的前端工作经验不值钱？"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("p",[t._v("配置")]),t._v(" "),a("ul",[a("li",[t._v("我们使用了"),a("a",{attrs:{href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://prettier.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prettier"),a("OutboundLink")],1),t._v("来统一代码风格，保证代码质量，但是"),a("strong",[t._v("我们希望开发者能够理解一些值得注意的规则")]),t._v("。")]),t._v(" "),a("li",[t._v("仍有一些规则不在我们的linter范围内，我们希望开发者和维护者都能努力执行这些规则。我们从"),a("a",{attrs:{href:"https://google.github.io/styleguide/jsguide.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google JavaScript Style Guide"),a("OutboundLink")],1),t._v("中总结了一些规则如下。")])])])]),t._v(" "),a("h2",{attrs:{id:"_1-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件"}},[t._v("#")]),t._v(" 1 文件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("文件名必须小写，可以包含虚线（"),a("code",[t._v("-")]),t._v("），但不要乱加其他标点符号（除非特殊需要）")])]),t._v(" "),a("li",[a("p",[t._v("文件必须包括一个文件信息，包括：作者，描述，用途，文件依赖，示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @fileoverview Utilities for handling textareas.\n * Provide a series of functions.\n * Based on d3.js, lodash.js.\n * @author Ran Chen <crcrcry.hello@gmail.com>\n */")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("README.md")]),t._v("中提供组件组织结构。示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" todolist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" todolist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" todolist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" search"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" search"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("navigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" search"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("button"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("README")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("md\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_2-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-模块"}},[t._v("#")]),t._v(" 2 模块")]),t._v(" "),a("ol",[a("li",[t._v("引入模块时，需要有模块的扩展名；")])]),t._v(" "),a("ul",[a("li",[t._v("注意：当前的TypeScript (3.9.3) 不支持引入带拓展名的ts文件，所以引入"),a("code",[t._v(".ts")]),t._v("文件时不需要加拓展名。")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("命名引入的模块\n"),a("ol",[a("li",[t._v("使用"),a("code",[t._v("import * as name")]),t._v("时，"),a("code",[t._v("name")]),t._v("应该用首字母小写的驼峰规则（lowerCamelCase）对文件名进行重写。")]),t._v(" "),a("li",[t._v("引入"),a("code",[t._v("default")]),t._v("模块时，命名应直接源自原模块，并且应该根据对象类型使命名符合[命名规则](# 4 命名)。")]),t._v(" "),a("li",[t._v("引入带名字的模块时，应该保持原名。重命名的话需要最好打上警告。")])])]),t._v(" "),a("li",[t._v("不要循环引用")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fileOne "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../file-one.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyClass "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../my-class.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SimpleComponent "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../simple-component.vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SearchBar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../search-bar'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addTwoNumbers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mySqrt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../my-math.js'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SOME_CONSTANT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../constant.js'")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-语言"}},[t._v("#")]),t._v(" 3 语言")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("变量：为结构复杂的变量加上注释；")])]),t._v(" "),a("li",[a("p",[t._v("对象：")]),t._v(" "),a("ol",[a("li",[t._v("对象的方法最好能够使用shorthand模式，但它并不适用于所有情况；")]),t._v(" "),a("li",[t._v("在某些情形下可以用一个"),a("code",[t._v("const")]),t._v("对象来表达枚举变量")])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" myObject "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shorthandMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// instead of")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// method: function () {")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Method shorthand is worse herein.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enumerations")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Option "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The option used shall have been the first.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIRST_OPTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The second among two options.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECOND_OPTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("类型")]),t._v(" "),a("ol",[a("li",[t._v("私有域应该要以"),a("code",[t._v("$_")]),t._v("开头；")]),t._v(" "),a("li",[t._v("在构造函数"),a("code",[t._v("constructor")]),t._v("完成后，不应该再添加或者删除属性；")]),t._v(" "),a("li",[t._v("不要使用和操作 "),a("code",[t._v("prototype")]),t._v("，推荐使用"),a("code",[t._v("class")])]),t._v(" "),a("li",[t._v("不推荐使用"),a("code",[t._v("getter")]),t._v("和"),a("code",[t._v("setter")]),t._v("，原因很复杂，请使用普通方法；")])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// private method")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$_computeBar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// public method")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("函数")]),t._v(" "),a("ol",[a("li",[t._v("推荐在大部分情况下使用箭头函数，因为箭头函数更简洁，并且简化了"),a("code",[t._v("this")]),t._v("的作用域；")]),t._v(" "),a("li",[t._v("使用“剩余函数”（rest parameter）而非直接使用"),a("code",[t._v("arguments")]),t._v("。剩余函数可以用"),a("code",[t._v("...")]),t._v("进行解构。")])])]),t._v(" "),a("li",[a("p",[t._v("流程控制")]),t._v(" "),a("ol",[a("li",[t._v("循环\n"),a("ol",[a("li",[t._v("推荐使用"),a("code",[t._v("forEach")]),t._v("等一系列循环操作；")]),t._v(" "),a("li",[t._v("需要提升性能时，使用"),a("code",[t._v("for ... of")]),t._v("操作是最高效的")]),t._v(" "),a("li",[a("code",[t._v("for ... in")]),t._v("循环只能在"),a("code",[t._v("dict")]),t._v("这一类的对象上用")])])]),t._v(" "),a("li",[t._v("异常（Exception）：自定义异常提供了一种传达其他错误信息的好方法。 应该在原生“错误”类型不足的地方定义和使用它们。")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-命名"}},[t._v("#")]),t._v(" 4 命名")]),t._v(" "),a("ol",[a("li",[t._v("标识符：ASCII码字母和数字，下划线以及美元符号；")]),t._v(" "),a("li",[t._v("给出一个描述性的名称。不要担心节省水平空间。")]),t._v(" "),a("li",[t._v("不要使用你的项目之外的读者不熟悉的缩写，也不要删除单词中的字母。")])]),t._v(" "),a("p",[t._v("举例：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Bad")]),t._v("\nn "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Meaningless.")]),t._v("\nnErr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ambiguous abbreviation.")]),t._v("\nnCompConns "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Ambiguous abbreviation.")]),t._v("\nwgcConnections "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only your group knows what this stands for.")]),t._v("\npcReader "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Lots of things can be abbreviated "pc".')]),t._v("\ncstmrId "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Deletes internal letters.")]),t._v("\nkSecondsPerDay "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do not use Hungarian notation.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Good")]),t._v("\nerrorCount "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No abbreviation.")]),t._v("\ndnsConnectionIndex "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Most people know what "DNS" stands for.')]),t._v("\nreferrerUrl "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Ditto for "URL".')]),t._v("\ncustomerId "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Id" is both ubiquitous and unlikely to be misunderstood.')]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-1-命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-命名规则"}},[t._v("#")]),t._v(" 4.1 命名规则")]),t._v(" "),a("ol",[a("li",[t._v("类名：\n"),a("ol",[a("li",[t._v("首字母大写的驼峰规则")]),t._v(" "),a("li",[t._v("名称应该用名词或者名词短语")])])]),t._v(" "),a("li",[t._v("方法名：\n"),a("ol",[a("li",[t._v("首字母小写的驼峰规则")]),t._v(" "),a("li",[t._v("名称应该用动词或动词短语")])])]),t._v(" "),a("li",[t._v("枚举名：\n"),a("ol",[a("li",[t._v("首字母大写的驼峰规则")]),t._v(" "),a("li",[t._v("名称应该用单数名词，每个枚举变量中的枚举量应该被命名为这种风格："),a("code",[t._v("CONSTANT_CASE")])])])]),t._v(" "),a("li",[t._v("常量名：\n"),a("ol",[a("li",[a("code",[t._v("CONSTANT_CASE")]),t._v("，单词大写并用下划线分隔")]),t._v(" "),a("li",[t._v("名称通常为名词，或者名词短语")]),t._v(" "),a("li",[t._v("深度不变的变量是常量，类似"),a("code",[t._v("const array = []")]),t._v(" 并不属于常量；")]),t._v(" "),a("li",[t._v("推荐使用 "),a("a",{attrs:{href:"https://immutable-js.github.io/immutable-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("immutable-js"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[t._v("其他\n"),a("ol",[a("li",[t._v("首字母小写的驼峰规则")]),t._v(" "),a("li",[t._v("包括非常量、参数、局部变量等")])])])]),t._v(" "),a("h3",{attrs:{id:"_4-2-命名方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-命名方法"}},[t._v("#")]),t._v(" 4.2 命名方法")]),t._v(" "),a("p",[t._v("驼峰命名法")]),t._v(" "),a("ol",[a("li",[t._v("先将结果转化成多个词：比如"),a("code",[t._v("YouTube")]),t._v("先拆开为"),a("code",[t._v("You Tube")])]),t._v(" "),a("li",[t._v("除了第一个词以外，其余每个词的首字母为大写，其他字母都转化为小写。")]),t._v(" "),a("li",[t._v("串联")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XML HTTP request'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XmlHttpRequest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'XMLHTTPRequest'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new customer ID'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'newCustomerId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'newCustomerID'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'supports IPv6 on iOS'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'supportsIpv6OnIos'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'supportsIPv6OnIOS'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YouTube importer'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YouTubeImporter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" not "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YoutubeImporter'")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-注释"}},[t._v("#")]),t._v(" 5 注释")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("类/组件的注释风格：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Description of class\n * @implements {Iterable<string>}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyFancyTarget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventTarget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * @param {string} arg1 An argument that makes this more interesting.\n     * @param {Array<number>} arg2 List of numbers to be processed.\n     */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("函数注释风格：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Description of function\n * @param {number} arg1 The first argument.\n * @param {number} arg2 The second argument.\n * @param {...number} rest The remainder of arguments are all numbers.\n * @returns {number} The result\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("rest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("块注释风格")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xxx")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// yyy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("变量注释风格")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * Some description.\n * @type {Array<number>}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * An enum with two options.\n * @enum {number}\n */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Option "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FIRST_OPTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SECOND_OPTION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("弃用")]),t._v(" "),a("ol",[a("li",[t._v("弃用的类/接口应该用"),a("code",[t._v("@deprecated")]),t._v("进行标注")]),t._v(" "),a("li",[t._v("弃用评论必须包含简单明了的指导，以便人们修复调用栈。")])])])]),t._v(" "),a("h2",{attrs:{id:"_6-pull-requests"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-pull-requests"}},[t._v("#")]),t._v(" 6 Pull Requests")]),t._v(" "),a("p",[t._v("在发起Pull Requests的同时，需要按照以下模板填写当前PR的描述：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("### This is a ...\n\n- [ ] New feature (addNodes/addLinks)\n- [ ] Other (documents)\n\n### Description\n\n\n### Self check\n- [x] Test passed or not need\n- [x] Doc is ready or not need\n- [x] Demo is provided or not need\n\n### Additional Plan?\n> If this PR related with other PR or following info. You can type here.\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);