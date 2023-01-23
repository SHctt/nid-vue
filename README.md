# Vue.js 项目实践：22-创建内容

未解决的问题：
1-在 user-avatar 分支，上传头像的动作，服务器端报错，但是在使用 insomnia 测试上传服务端 API 时是没有问题的

2-切换主题的图标没有实时响应的问题---(在项目练习全部完成后，尝试其他生命周期方法例如 updated)

3-出现错误，页面刷新后，post-show 页面，toolebar 上的导航箭头消失了---15.4

cli 应用范例：
yarn gs -- comment-create --path comment/create --module create --parent comment/comment
yarn gc -- comment-create --path comment/create --parent comment/components/comment-side-sheet
yarn gs -- comment-destroy --path comment/destroy --action deleteComment --method delete --parent comment --module destroy
yarn gc -- comment-edit --vuex mapActions
yarn gs -- comment-edit --path comment/edit --action updateComment --method patch --parent comment --module edit
yarn gc -- reply-create --parent comment-list-item --vuex mapGetters,mapActions,mapMutations
yarn gs -- reply-create --parent reply/reply --module create --action createReply --method post
yarn gc -- reply-list-item-actions --path reply/index/components --vuex mapGetters --parent reply-list-item

常用：
// eslint-disable-next-line --- 忽略下一行 any 类型错误

## 22.1-创建新建内容的组件

yarn gc -- post-create

## 22.2-添加标题和内容字段

## 22.3-在创建内容组件里添加提交按钮

## 22.4-定义创建内容的 Store 模块

## 22.5-在内容列表中过滤掉没有相关文件的项目

## 22.6-内容发布以后

加入 query 参数后，进行更新操作，会生成一个新的内容
