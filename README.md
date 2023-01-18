# Vue.js 项目实践：18-评论回复列表

未解决的问题：
1-在 user-avatar 分支，上传头像的动作，服务器端报错，但是在使用 insomnia 测试上传服务端 API 时是没有问题的

2-切换主题的图标没有实时响应的问题---(在项目练习全部完成后，尝试其他生命周期方法例如 updated)

3-出现错误，页面刷新后，post-show 页面，toolebar 上的导航箭头消失了---15.4

4-评论列表的错误：

    17.8的错误，现在可以显示评论，但是在内容列表点击任意一个图标，似乎都显示了所有的评论

    错误诊断：在内容列表中，点击评论，传递过来的通过 layout.store 中 setSideSheetProps 这个 mutation 传递过来的{filter:{post:this.item.id}}这个参数对象为空；所以这里点击评论图标时，sideSheetProps.filter 这个过滤条件为空的对象；而在这个内容列表直接使用 sideSheetProps 这个参数时，内容列表上的评论边栏上显示的是所有的评论条目；
    目前没有找到比较好的解决办法，留待后续解决；

## 18.1-屏蔽 layout.store 里的 any 警告

## 18.2-创建评论回复 Store 模块
