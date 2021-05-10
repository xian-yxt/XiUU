# xi-button 按钮
----

### 基础用法
使用```type```、```plain```和```round```属性来定义 Button 的样式。

<div class="demo-block">
  <div style="display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;">
    <xi-button><span slot="title">默认按钮</span></xi-button>
    <xi-button type="primary">主要按钮</xi-button>
    <xi-button type="success">成功按钮</xi-button>
    <xi-button type="info">信息按钮</xi-button>
    <xi-button type="warning">警告按钮</xi-button>
    <xi-button type="danger">危险按钮</xi-button>
  </div>
</div>

::: demo
```html
<div>
  <xi-button>默认按钮</xi-button>
  <xi-button type="primary">主要按钮</xi-button>
  <xi-button type="success">成功按钮</xi-button>
  <xi-button type="info">信息按钮</xi-button>
  <xi-button type="warning">警告按钮</xi-button>
  <xi-button type="danger">危险按钮</xi-button>
</div>
```
:::