# Vue.js 项目实践：23-内容标签

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
