## 四、路由组件与一般组件

        1、写法不同：
        一般组件：<Demo />
        路由自组件：<Route path='/demo' component={Demo}>Demo</Route>
        2、存放位置不同
        一般组件：components
        路由组件：pages
        3、接收到的 props 不同
        一般组件：传递了什么就会接收到什么
        路由组件：接收到三个固定的属性
        history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
        location:
        hash: ""
        pathname: "/about"
        search: ""
        match:
        params: {}
        path: "/about"
        url: "/about"
## 五、path与component一般是配合使用
## 六、精准匹配 exact
## 七、Redirect重定向的使用
        1、一般注册在路由的最下方
## 八、路由传参
  1、params ：需要声明接收,this.props.match.params
  2、search：无需声明接收，正常注册路由即可,引入一个库叫querystring,qs.parse(this.props.location.search.slice(1))
  3、state参数,无需声明接收，正常注册路由即可,this.props.location.state;
## 九、push与replace
## 十、编程式路由导航
## 十一、BrowserRouter与HashRouter的区别
        1.底层原理不一样：
              BrowserRouter使用的是H5的history API不兼容ie9及一下版本
              HashRouter使用的url的哈希值
        2.url表现形式不一样
              BrowserRouter 的路径中没有#
              HashRouter的路径中有#号
        3.刷新后对路由state参数的影响
              BrowserRouter没有影响，因为state保存在history对象中
              HashRouter会丢失
        4.HashRouter可以用于解决一些路径错误的相关问题
## 十二、redux
        1、是一个专门用于状态管理的js库
        2、不是react插件库
        3、它可以与vue、angular、react配合使用，但是与react配合的最多
        4、集中管理react应用中多个组件共享状态
        5、redux独立所有组件存在的
什么情况需要用？一个组件需要改变另一个组件的状态
#### redux 三大核心
        1.action：
          1、动作的对象
          2、包含两个属性：
                type：标识属性，值为字符串，唯一，必要属性
                data：数据属性，任意类型，可选属性
        2.reducer
          1、用于初始化状态以及加工状态
          2、加工时，根据旧的state和action，产生新的state纯函数
        3.store
          1、将state、action、reducer联系在一起的对象
        
