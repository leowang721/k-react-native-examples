# ActivityIndicator

就是个 Loading 而已。

## 展现样式

可以通过属性来控制颜色 color 、大小 size

color 的值，具体查看 [文档](http://facebook.github.io/react-native/docs/colors.html)
 * hex:  #ff0 #ffff00
 * rgb, rgba: rgb(255, 255, 0) rgba(255, 255, 255, 1.0)
 * transparent
 * hsl, hsla
 * 颜色名称: red

size 这个通用的设置是 small | large，根据 API 只有 Android 才支持数字，不过这个意义不大。

## 展现与否

也可以通过属性来控制
 * animating 如果是 false 就不展现了