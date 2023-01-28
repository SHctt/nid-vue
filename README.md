# Vue.js 项目实践：24-重构内容创建

未解决的问题：
1-在 user-avatar 分支，上传头像的动作，服务器端报错，但是在使用 insomnia 测试上传服务端 API 时是没有问题的

2-切换主题的图标没有实时响应的问题---(在项目练习全部完成后，尝试其他生命周期方法例如 updated)

3-出现错误，页面刷新后，post-show 页面，toolebar 上的导航箭头消失了---15.4

4-在 22.7 时发现的错误：由于之前操作，添加了非常多不含媒体文件的内容，因此，由于首页过滤展示没有媒体文件的内容，所以首页初始加载的第一页内容都没有显示，由于没有内容，滚动页面也无法翻页，因此表现出来的首页内容列表消失了；这个问题留待后续解决

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

## 24.1-修正参数的类型错误

## 24.2-把创建内容组件里的数据放在 Store 模块里

## 24.3-创建内容标题字段组件

yarn gc -- post-title-field --path post/components --parent post/create/post-create --vuex mapGetters,mapMutations

## 24.4-创建内容正文字段组件

yarn gc -- post-content-field --path post/components --parent post/create/post-create --vuex mapGetters,mapMutations

## 24.5-改进：创建内容页面上的创建动作

先创建 post-actions 组件：
yarn gc -- post-actions --path post/components --parent post/create/post-create --vuex
再改进相关组件

## 24.6-改进：用 input 事件触发 dirty 事件

dirty 事件，就时表示的输入的内容没有被保存时，发布或者更新按钮的样式会变成 outline 样式

## 24.7-准备删除内容按钮

## 24.8-删除按钮自动恢复状态

## 24.9-定义删除内容 Store 模块

yarn gs -- post-destroy --path post/destory --parent post --method delete --action deletePost --module destroy

## 24.10-定义内容元数据组件

yarn gc -- post-meta --path post/components --parent post/create/post-create
