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

常用：
// eslint-disable-next-line --- 忽略下一行 any 类型错误

## 21.1-添加评论回复按钮

## 21.2-创建评论回复组件

yarn gc -- reply-create --parent comment-list-item --vuex mapGetters,mapActions,mapMutations

## 21.3-创建回复 Store 模块

yarn gs -- reply-create --parent reply/reply --module create --action createReply --method post

## 21.4-创建回复

## 21.5-回复成功以后增加评论的回复数量

## 21.6-回复成功以后加载回复列表

## 21.7-定义回复列表项目动作组件

修正：回复成功后，执行 replied 事件，显示回复列表
修正：点击取消回复，删除当前评论的问题

yarn gc -- reply-list-item-actions --path reply/index/components --vuex mapGetters --parent reply-list-item

## 21.8-编辑回复

## 21.9-删除回复后减少评论回复数量

## 21.10-用户中心的评论列表

## 21.11-在用户评论列表项目里包含评论标题

## 21.12-用户评论列表分页

## 21.13-在用户回复列表里包含回复的评论

## 21.14-在用户回复列表中禁用回复按钮
