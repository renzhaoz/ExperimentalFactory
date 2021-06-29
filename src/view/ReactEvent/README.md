# React Event

## 特点

- 驼峰命名
- 只能使用event.preventDefault()阻止
- 事件回调函数不会默认绑定this,需要指定this指向,或者使用bind方法,或者指定回调函数为箭头函数
  ```
    // 方法1
    handleClick(){};
    <Cpt onClick={this.handleClick.bind(this)} />
    <Cpt onClick={() => this.handleClick()} /> // 类似方法2

    // 方法2
    handleClick = () => {};
    <Cpt onClick={this.handleClick} />
  ```

- 传递参数时需要显式传递或者使用bind

```
   <Cpt onClick={(ev) => this.handleClick(ev, args)} />
    <Cpt onClick={this.handleClick.bind(this,args)} />
```
