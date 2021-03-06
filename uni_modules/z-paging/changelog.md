## 1.8.5（2021-06-14）
新增极简写法并添加相关demo，可最大程度减少重复代码。
## 1.8.4（2021-06-11）
1.由V1.8.4起，支持使用v-model绑定for循环的list，之前的:list.sync依然有效。在新的项目中建议使用v-model，因为v-model是双向绑定的，修改页面中的list将同步修改z-paging中的list。  
2.i18n设置语言支持重置回：跟随系统语言。  
3.修复在nvue的聊天模式中，可能出现的新增聊天消息滚动到底部的位置不准确的问题。  
4.优化i18n繁体展示细节。 
## 1.8.3（2021-06-10）
1.修复在支付宝小程序的部分设备中，i18n默认识别为繁体的BUG。  
2.修复在部分低版本的安卓设备上，无法上滑滚动的BUG。  
3.修复在nvue中，空数图上下颠倒的BUG。
## 1.8.2（2021-06-10）
1.支付宝小程序安卓端细节优化处理。  
2.修复在nvue中使用聊天模式时，数据不满一页默认从底部开始的问题。  
3.修复在安卓中，猛然滚动到顶部偶现的无法下拉刷新的问题。  
4.修复在安卓中，猛然滚动到底部偶现的无法自动加载更多的问题。  
## 1.8.1（2021-06-06）
1.修复在vue的聊天记录模式中，无法滚动的问题。  
2.优化自定义下拉刷新细节。  
3.优化主动触发下拉刷新细节。
## 1.8.0（2021-06-05）
1.新增`@emptyViewReload`，支持处理点击空数据图reload按钮事件。  
2.简化nvue中`scrollToTop`和`scrollToBottom`配置。  
3.修复在nvue中使用页面滚动且包含`slot="top"`，点击返回顶部后，list被`slot=top`遮挡的问题。  
4.在nvue中支持主动触发下拉刷新动画。  
5.针对快速切换触发下拉刷新动画细节处理优化。  
6.略微调整在nvue安卓中下拉刷新loading的样式，优化nvue list展示细节。
## 1.7.9（2021-06-05）
V 1.7.9
## 1.7.8（2021-06-04）
1.新增基于z-paging封装个性化分页组件演示。  
2.修复修改text使用i18n配置无效的BUG。
## 1.7.7（2021-06-03）
1.修复在支付宝小程序中，自定义下拉刷新view未设置`slot-scope`时无效的问题。  
2.调整容器部分与空数据图的z-index，使容器盖在空数据图上方，以避免z-pagng中插入固定内容且展示空数据图时，插入的view无法点击的问题。  
3.修复loadingMoreDefault插入无效的问题。  
4.修复在支付宝小程序中，z-paging宽度可能不正确的问题。
## 1.7.6（2021-06-02）
1.支持全局错误处理，通过`uni.$emit('z-paging-error-emit');`可全局处理请求失败情况。  
2.提升在低版本webView中的兼容性。  
3.修复`empty-view-title-style`配置无效的问题。
## 1.7.5（2021-06-02）
1.支持全局错误处理，通过`uni.$emit('z-paging-error-emit');`可全局处理请求失败情况。  
2.提升在低版本webView中的兼容性。  
3.修复`empty-view-title-style`配置无效的问题。  
## 1.7.4（2021-06-02）
1.修复在ios中，因scroll-view bounce的影响，滚动到顶部无法立即下拉的问题。  
2.新增scroll-view 滚动到顶部事件监听；新增`scrollIntoViewByNodeTop`，支持传入节点top以滚动到指定节点位置。  
3.修复在支付宝/钉钉小程序中，下拉刷新时顶部有个灰色方块闪烁一下的BUG。  
4.修复`empty-view-img`配置无效的BUG。  
5.展示最后刷新时间，若非今日或昨日，则展示最后刷新日期+时间。  
6.新增`refresher-out-rate`，支持设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例。
## 1.7.3（2021-05-31）
1.在nvue中，支持页面滚动。  
2.在nvue中，支持点击返回顶部功能。  
3.修复在支付宝/钉钉小程序中，下拉刷新时顶部有个灰色方块闪烁一下的BUG。
