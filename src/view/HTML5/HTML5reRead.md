# HTML5重读笔记

## HTML标签属性

- accesskey='k'
  *当点击快捷键+k按键时响应元素click事件，常用语设置表单的聚焦*

- contenteditable='true'
  *定义元素为可修改元素，若未设置则从父级继承*

- contextmenu
  *在元素上右键时将激活contextmenu事件*

- dir
  *规定元素中字符串的排版方向,类似word的左对齐or右对齐，参数：ltr/rtl*

- draggable
- dropzone
  *元素可拖放*

- hidden='true'
  *隐藏元素，相当于display：none*

- lang 
  *规定元素内容的语言类型，属性值详见[lang参数](https://tools.ietf.org/html/bcp47)*

- spellcheck
  *拼写检查，若元素可写，则检查拼写错误。错误拼写chrome显示红色波浪线,检查类型基于lang属性*

- tabindex
  *响应键盘事件的聚焦效果，按下tab键时从值为1开始依次递增*

- titile 
  *鼠标悬浮显示元素描述*

- 大小单位
  *绝对长度：pt，cm，in，mm，pc*
  *相对长度：vw, vh, gd, vm, ch, em, ex, rem, px, %*
  *计算值：calc()*

- 角度单位
  *deg度0-360， grad百分度0-400，rad弧度0-6.28，turn圆周1turn=360度*

- 时间
  *s，ms*

- error
  *{message, name默认为Error, number}*

- undefined/null判断
  *判断!obj == false则即是*

- 区分null和undefined
  *参考以下条件：null == undefined； null！=== undefined*

- HTML5新标签用法及特点
  *详情点击[HTML新标签](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5/HTML5_element_list)*

- base元素
  *用于解析DOM元素中的相对路径，img的路径则会被补全例子：*

        <head>
          <base href='https://a.com'>
        </head>
        <body>
          <img href='pig.png'/>
        </body>

-     <meta http-equiv='refresh' content='5；https：...'>
  *5s刷新一次界面*

- style media属性
  *定义不动设备的样式，例如打印的样式。*

- noscript元素
  *js被禁用或者不支持的浏览器会显示标签中内容*