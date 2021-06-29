# Hook

## 简介

ReactHook是什么？
React官网是这么介绍的：Hook是React16.8的新增特性。它可以让你在不编写class的情况下使用state以及其他的React特性。

- 完全可选的你无需重写任何已有代码就可以在一些组件中尝试Hook。但是如果你不想，你不必现在就去学习或使用Hook。

- 100%向后兼容的Hook不包含任何破坏性改动。

- 现在可用Hook已发布于v16.8.0。

- 没有计划从React中移除class你可以在本页底部的章节读到更多关于Hook的渐进策略。

- Hook不会影响你对React概念的理解恰恰相反，Hook为已知的React概念提供了更直接的API：props，state，context，refs以及生命周期。稍后我们将看到，Hook还提供了一种更强大的方式来组合他们。


## 动机

  Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识。

- 在组件之间复用状态逻辑很难
  React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）。如果你使用过 React 一段时间，你也许会熟悉一些解决此类问题的方案，比如 render props 和 高阶组件。但是这类方案需要重新组织你的组件结构，这可能会很麻烦，使你的代码难以理解。如果你在 React DevTools 中观察过 React 应用，你会发现由 providers，consumers，高阶组件，render props 等其他抽象层组成的组件会形成“嵌套地狱”。尽管我们可以在 DevTools 过滤掉它们，但这说明了一个更深层次的问题：React 需要为共享状态逻辑提供更好的原生途径。

  你可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。

  > 理解:
  提取公用逻辑(class组件也可以,作为纯碎的逻辑组件不返回任何试图,以函数回调的方式返回逻辑之后的代码,但是看起来更加奇怪而已);

  ```
    class fetchData extends React.Component {
      componentDidMount(){
        fetch(url).then(res => {
          this.props.fetchDataSuccess(res);
        })
      }

      render(){
        return null;
      }
    }
  ```

- 复杂组件变得难以理解
  我们经常维护一些组件，组件起初很简单，但是逐渐会被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。例如，组件常常在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。

  在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。同时，这也是很多人将 React 与状态管理库结合使用的原因之一。但是，这往往会引入了很多抽象概念，需要你在不同的文件之间来回切换，使得复用变得更加困难。

  为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。

    > 理解:
    1.合并/分离生命周期中代码逻辑 便于管理和维护
    2.替代那些逻辑复杂的状态管理插件(redux), 把视图和逻辑代码完美解耦

- 难以理解的 class
  除了代码复用和代码管理会遇到困难外，我们还发现 class 是学习 React 的一大屏障。你必须去理解 JavaScript 中 this 的工作方式，这与其他语言存在巨大差异。还不能忘记绑定事件处理器。没有稳定的语法提案，这些代码非常冗余。大家可以很好地理解 props，state 和自顶向下的数据流，但对 class 却一筹莫展。即便在有经验的 React 开发者之间，对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景。

  另外，React 已经发布五年了，我们希望它能在下一个五年也与时俱进。就像 Svelte，Angular，Glimmer等其它的库展示的那样，组件预编译会带来巨大的潜力。尤其是在它不局限于模板的时候。最近，我们一直在使用 Prepack 来试验 component folding，也取得了初步成效。但是我们发现使用 class 组件会无意中鼓励开发者使用一些让优化措施无效的方案。class 也给目前的工具带来了一些问题。例如，class 不能很好的压缩，并且会使热重载出现不稳定的情况。因此，我们想提供一个使代码更易于优化的 API。

  为了解决这些问题，Hook 使你在非 class 的情况下可以使用更多的 React 特性。 从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。

  > 理解
  1.便于非web开发人员(理解不了class,如果改成方法这种形式,和java,c等汇编遇见无缝接洽？)
  2.未来想要换个编译器？更高效的编译代码？(webpack很大很废？)
  3.class创建的类不好优化？(class本身是硬让JS有类的概念而诞生的东西)
  4.全面拥抱函数式开发(让后台更容易看懂前台的代码？让前端下岗？)


## 基本API

- useState
设置和改变state，代替原来的state和setState.
生命多个变量就写多个.

  ```
    const [arg, setArgFun] = useState(defaultValue);
  ```

- useEffect
  代替原来的生命周期，componentDidMount，componentDidUpdate 和 componentWillUnmount 的合并版, 不同的是useEffect可以写多个.

  ```
    dialog = props => {
      useEffect(
        () => {
          // componentDidMount + componentDidUpdate 第一次渲染和更新时都会调用
          return () => {
            // componentWillUnmount 组件卸载时调用
          }
        },
        [props.name] // 如果是空数组,useEffect只执行一次,更新时不触发
                    // 如果有值 值为props中的参数,则只有对应的参数发生变化时才会调用 
      );

      return (null);
    }
  ```

- useLayoutEffect	与 useEffect 作用相同，但它会同步调用 effect
- useMemo	控制组件更新条件，可根据状态变化控制方法执行,优化传值
- useCallback	useMemo优化传值，usecallback优化传的方法，是否更新
- useRef	跟以前的ref，一样，只是更简洁了

- useContext	上下文爷孙及更深组件传值
  更加方便的订阅context

  ```
    const locale = useContext(Color);
  ```

- useReducer	代替原来redux里的reducer,配合useContext一起使用(尽量别用redux)
  const [todos, dispatch] = useReducer(todosReducer);

- useDebugValue	在 React 开发者工具中显示自定义 hook 的标签，调试使用。
- useImperativeHandle	可以让你在使用 ref 时自定义暴露给父组件的实例值。


  > 注意:
  1.hook的api不能在class组件中访问
  2.hook的api可以同时写多个
  3.hook的api不能写到条件语句中,只能在顶层执行.(执行顺序影响取值逻辑)
  4.只能在react中调用hook


