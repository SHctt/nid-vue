# Vue.js 项目实践：21-用户评论的回复

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

## 21.1-添加评论回复按钮

## 21.1-创建评论回复组件

yarn gc -- reply-create --parent comment-list-item --vuex mapGetters,mapActions,mapMutations
