# 展务系统 HTML 原型 → 高质量可编辑 Figma 结构

本插件用于把当前已生成的展务系统 HTML 原型，重建为适合设计师二次编辑的 Figma 文件结构。

重点：本插件不会把页面截图成图片，而是用 Figma 原生 Frame、Text、Auto Layout、SVG、Fill、Stroke、Shadow 重建页面结构。

## 文件说明

- `manifest.json`：Figma 插件入口配置。
- `code.js`：核心生成逻辑，已重写布局引擎。
- `ui.html`：插件操作面板。
- `design-tokens.json`：设计变量，包括颜色、字号、圆角、间距、阴影。
- `README.md`：当前说明文档。

原 HTML 预览版本仍保留在上一级 `outputs/` 目录，不会被覆盖。

## 如何在 Figma 中导入

1. 打开 Figma 桌面端。
2. 进入 `Plugins` → `Development` → `Import plugin from manifest...`。
3. 选择本目录下的：

   `manifest.json`

4. 导入后运行：

   `Plugins` → `Development` → `展务系统 HTML 原型转 Figma 可编辑稿`

5. 点击插件面板中的“生成全部页面”。

## 新版结构修复点

### 1. 页面 Frame 化

所有页面都以独立 Frame 生成，不会在 Canvas 上散落零碎元素。

PC 页面尺寸：

- `1440 × 1024`

小程序页面尺寸：

- `375 × 812`

### 2. Auto Layout 布局

所有页面内部使用 Auto Layout 组织，包括：

- 左侧导航
- 顶部栏
- 页面内容区
- 卡片列表
- 表单
- 表格行
- 上传模块
- 底部导航
- 小程序卡片

插件不再使用“绝对定位作为主布局”。

### 3. 避免遮罩错位

Modal / Popup 不再放进普通页面中。

弹窗统一生成在独立页面：

- `05 Overlays / 弹窗`

每个弹窗 Frame 都带有 `[Overlay]` 命名标记，例如：

- `Overlay-驳回原因弹窗-Frame [Overlay]`
- `Overlay-资料截止配置弹窗-Frame [Overlay]`

这样不会出现遮罩层覆盖正常页面的问题。

### 4. 图层命名规范

所有图层按可读规则命名，例如：

- `PC-后台-企业资料审核-Table-Header`
- `PC-企业端-展位信息确认-Form-企业名称`
- `MiniProgram-首页-Card-我的展位`
- `MiniProgram-报到通知书页-Button-预览 / 下载`

避免默认命名如：

- `Frame 1`
- `Rectangle 23`
- `Group 5`

## 页面覆盖范围

### PC 管理后台

- 总览
- 展务管理
- 展商信息管理
- 企业资料审核
- 报到通知书生成
- 数据列表页
- 详情页-详情表单
- 系统设置

### PC 企业端

- 首页
- 展商信息管理
- 文件/资质上传
- 展位信息确认
- 绿搭详情
- 光地详情
- 报到通知书

### PC 供应商端

- 绿搭审核
- 标展审核
- 光地审核

### 小程序端

- 首页
- 企业信息填写页
- 展品信息页
- 资质上传页
- 展位确认页
- 报到通知书页
- 分享页
- 个人中心页
- 进度详情页

## 设计变量

`design-tokens.json` 包含：

- Color palette：
  - primary
  - success
  - warning
  - danger
  - bg
  - surface
  - border
  - text
- Font sizes：
  - 12
  - 14
  - 16
  - 18
  - 24
- Radius：
  - 4
  - 8
  - 12
- Spacing：
  - 4
  - 8
  - 12
  - 16
  - 24
  - 32
- Shadow：
  - card
  - popup

这些 token 已在 `code.js` 中统一应用。

## 可编辑性说明

以下内容均为可编辑图层：

- 文本
- 标题
- 按钮
- 表单项
- 输入框
- 卡片
- 表格行和单元格
- 状态标签
- 上传区域
- 左侧导航
- 顶部栏
- 小程序底部导航
- 弹窗

## 近似还原说明

HTML 中部分复杂内容无法一比一转换为 Figma 原生结构，已使用可编辑近似效果：

1. CSS 渐变、阴影、虚线边框  
   转换为 Figma Fill、Stroke、Drop Shadow。

2. 图标  
   使用 SVG 占位图标，后续可由设计师替换为正式图标库。

3. 二维码  
   当前未生成真实二维码，仅保留扫码登录模块结构。

4. PDF / 图片 / 效果图预览  
   使用可编辑占位卡片表示，不导入截图。

5. 表格数据  
   使用静态示例数据构建表格结构，设计师可直接替换文本。

## 建议的设计师二次编辑流程

1. 运行插件生成全部页面。
2. 检查 `01 管理后台 PC`、`02 企业端 PC`、`03 供应商 PC`、`04 小程序端 375`。
3. 将高频模块抽为正式 Figma Component：
   - Button
   - Badge
   - Input
   - Card
   - Table Row
   - Sidebar Item
   - Mini Card
4. 根据实际视觉规范替换字体和图标。
5. 精修重点页面：
   - 企业资料审核
   - 展位信息确认
   - 文件/资质上传
   - 报到通知书生成
   - 小程序首页
   - 小程序报到通知书页
