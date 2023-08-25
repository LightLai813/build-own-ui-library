---
theme: apple-basic
background: 'https://www.vpon.com/wp-content/uploads/2022/06/vision.jpg'
class: text-center
highlighter: shiki
lineNumbers: false
transition: fade-out
title: Building Your Own UI Library from Scratch
---

# Building Your Own UI Library from Scratch

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# Outline

- **Development** - Storybook + React
- ~~Testing - Jest~~
- **Documentation** - ~~doc.mdx~~ Storybook autodoc
- **Packaging** - Rollup
- **Release** - npm
- **Reflections**

---

# Init Storybook
[Tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react/zh-TW/get-started/)
```
# Clone the template
npx degit chromaui/intro-storybook-react-template ui-library

cd ui-library

# Install dependencies
npm install

# Start the component explorer on port 6006:
npm run storybook
```

---

## Tips - 相同的 layout 共用 component

---

## Tips - 使用大家習慣的 props 命名

---

## Tips - 保留 otherProps 設定

---

# Write Document

---

# Packaging with Rollup

---

# Release

---

# Reflections

### Pros
- 可以在多個 Repo 使用相同 component
- 擴充調整需求相對彈性
- 面試非常非常加分 
<br />
<br />

---

# Reflections

### Cons
- 修改完後，要發佈之後，其他專案才可以使用 -> monorepo
- UIUX 也是一門專業知識，若沒有專業 UI designer 配合，產出的 Component 可能不符合大眾使用習慣
- 更新迭代不如第三方套件快

<img src="images/1692939084413.png" style="height: 300px;" />

---


# Reference
- [30 天擁有一套自己手刻的 React UI 元件庫](https://ithelp.ithome.com.tw/2020-12th-ironman/articles/3999)
- [32K star 的 Chakra UI，以及未来的展望](https://juejin.cn/post/7249286405024776249?utm_source=gold_browser_extension)
- [Material UI Guideline](https://m3.material.io/components)
---

