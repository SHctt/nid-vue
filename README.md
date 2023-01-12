# Vue.js 项目实践：7-用户账户

## 7.1-修正，切换用户后，没有切换账户内容

删除本地 storeage 的数据后，重新换了一个账户登陆，发现，登陆后，user-show 的页面依然还是显示之前的那个账户的名字和头像，这个问题是由于绑定的 routes 不正确以及浏览器缓存了之前用户的数据，这里做一定的修正，先修正 routes，并使用一个 watch 属性去对比用户的变化

## 7.2-创建用户账户组件（UserAccount）

## 7.3-显示用户账户的菜单项

## 7.4-创建设置用户头像的组件（UserAccountSetAvatar）

## 7.5-定义文件表单字段组件（FileField）

## 7.6-文件表单字段组件样式

## 7.7-选择头像文件后预览用户头像

修正：修正了部分样式

## 7.8-定义用户账户 Store 模块（userAccountStoreModule）

## 7.9-上传用户头像（createAvatar），并在头像组件中实时显示上传的头像

错误未解决：上传头像失败，insomnia 测试可以成功，这里确认上传会显示错误

## 7.10-设置用户头像组件的选择文件与取消按钮

## 7.11-创建修改用户名的组件

## 7.12-更新用户账户数据
