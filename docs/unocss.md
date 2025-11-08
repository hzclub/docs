# unocss

## 配置使用

```json
npm install -D unocss
```

```js
// 根目录创建 `uno.config.ts` 文件
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

```js
// main.js
import 'virtual:uno.css'
```

```js
// vite.config.js
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

export default defineConfig(async ()=>{
  const UnoCSS = await import('unocss/vite').then(m => m.default)	// 异步导入

  return {
    plugins: [
      UnoCSS(),
      uni(),
    ]
  }
})
```





## 布局类

#### flex

```css
flex → display: flex
flex-col → flex-direction: column
items-center → align-items: center
justify-between → justify-content: space-between
```

#### 定位

```css
relative → position: relative
absolute → position: absolute
top-20rpx → top: 20rpx
```



## 尺寸类

#### 宽高

```css
w-full → width: 100%
h-[200px] → height: 200px
min-h-screen → min-height: 100vh
```

#### 边距与填充

```css
m-24rpx → margin: 24rpx
mx-auto → margin-left: auto; margin-right: auto
p-16rpx → padding: 16rpx
```



## 文本类

#### 字体样式

```css
text-24rpx → font-size: 24rpx
font-bold → font-weight: bold
c-#ff0000 → color: #ff0000
```

#### ‌文本修饰

```css
underline → text-decoration: underline
uppercase → text-transform: uppercase
text-center → text-align: center
```



## 边框与圆角

#### ‌边框

```css
border → border-width: 1px
border-red → border-color: red
border-dashed → border-style: dashed
```

#### 圆角

```css
rounded-24rpx → border-radius: 24rpx
rounded-tl-full → border-top-left-radius: 9999px
```



## 背景与特效

#### ‌背景

```css
bg-blue → background-color: blue
bg-[url(...)] → background-image: url(...)
bg-center → background-position: center
bg-[linear-gradient(270deg,#0080FF_0%,#00FFC2_100%)]
```

#### ‌渐变与阴影

```css
bg-gradient-to-r → background: linear-gradient(to right, ...)
shadow-md → box-shadow: 0 4px 6px rgba(0,0,0,0.1)
```



## 交互类

#### 光标与选择

```css
cursor-pointer → cursor: pointer
select-none → user-select: none
```

#### 过渡动画

```css
transition-all → transition-property: all
duration-300 → transition-duration: 300ms
```





## 自定义规则

可通过`uno.config.ts`扩展简写：

```js
rules: [
  [/^fl-(\d+)$/, ([, d]) => ({ flex: `${d}` })],  // 如fl-1 → flex:1
  ['img-f', { 'object-fit': 'contain' }]          // 自定义图片填充规则
]:ml-citation{ref="12,14" data="citationList"}
```









## 渐变字体

```html
<view class="text-42rpx font-bold bg-[linear-gradient(#E589FF_0%,#9897FF_100%)] bg-clip-text text-transparent">新手NFT卡牌</view>
```





## 文字描边

```html
<view class="text-42rpx text-center mb-20rpx c-transparent font-bold rotate--z-100 text-stroke-1rpx text-stroke-#fff">新手NFT卡牌</view>
.text-stroke {
    font-size: 60px;
    font-weight: bold;
    color: transparent;
    -webkit-text-stroke: 2px #ff0000;
  }
```

