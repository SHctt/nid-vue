# Vue.js 项目实践：20-创建、更新、删除评论

未解决的问题：
1-在 user-avatar 分支，上传头像的动作，服务器端报错，但是在使用 insomnia 测试上传服务端 API 时是没有问题的

2-切换主题的图标没有实时响应的问题---(在项目练习全部完成后，尝试其他生命周期方法例如 updated)

3-出现错误，页面刷新后，post-show 页面，toolebar 上的导航箭头消失了---15.4

## 20.1-创建评论的组件和 store 模块

yarn gs -- comment-create --path comment/create --module create --parent comment/comment
yarn gc -- comment-create --path comment/create --parent comment/components/comment-side-sheet

## 20.2-创建文本区域字段组件

## 20.3-修整创建评论的组件

## 20.4-设计创建评论组件样式

## 20.5-定义创建评论动作

## 20.6-发表评论

修正：修复了在 17.8 中，内容列表上点击评论按钮，边栏的评论列表显示不正确的问题

## 20.7-用按键组合发表评论

## 20.8-处理创建评论组件里的注册与登录按钮

## 20.9-让页面侧板可以滚动到底部

## 20.10-评论列表滚动到底部时加载更多

## 20.11-创建评论列表的骨架组件

修正：comment 的 index 中的 path 错误

## 20.12-点击评论内容显示删除按钮

## 20.13-定义删除评论的 sotre 模块

yarn gs -- comment-destroy --path comment/destroy --action deleteComment --method delete --parent comment --module destroy

## 20.14-删除评论

## 20.15-准备更新评论按钮

## 20.16-设计 Pill 按钮的样式

## 20.17-创建编辑评论的组件

yarn gc -- comment-edit --vuex mapActions

## 20.18-定义更新评论 Store 模块

yarn gs -- comment-edit --path comment/edit --action updateComment --method patch --parent comment --module edit

## 20.19-更新评论
