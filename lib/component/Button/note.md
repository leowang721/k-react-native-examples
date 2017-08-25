# Button

内置的 Button 能支持的东西很少，仅有 3 个属性是全支持的：

 * disabled {boolean} 是否禁用
 * onPress {Function} 点击处理句柄
 * title {string} 按钮文本

而属性 color 在 iOS 中是设置文本颜色，在 Android 却是设置 背景色。

综上，其实不建议直接使用它…… 不如使用 Touchable 系的东西自行定制，或者使用组件库
