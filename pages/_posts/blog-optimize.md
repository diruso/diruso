---
title: 关于博客优化的一点记录
layout: post
date: 2020-02-05 14:48
updated: 2020-02-05 15:00
categories:
  - 技术
tags:
  - 博客
  - 优化
assets:
  cover: ../_assets/uploads/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg
  feature: ../_assets/uploads/alexandru-zdrobau-4bmtMXGuVqo-unsplash.jpg
---

# 旧

我的博客始于2014年左右，但那时还只是一个初入前端领域的小白，博客全靠手写HTML完成，现在想来尤为可笑。之后便是 WordPress、Typecho，那句“念念不忘，必有回响”也曾深入我心。再后来，便是在 Jekyll、Ghost 和 Hexo 之间来回折腾，生态上还是 Hexo 更胜一筹。

# 新

最近把博客从 Hexo 迁移到了基于 Vue 和 Webpack 的 Saber。

![[Saber](https://saber.land)](https://github.com/saberland/saber/blob/master/website/static/img/icons/icon_256x256.png?raw=true)

近年来基于这些主流前端技术上的静态网站生成系统，如 Gatsby、Nuxt、VuePress，这些新生代的静态网站生成系统正在抢占基于模板字符串的 Hexo、Jekyll 这些前辈的市场，并已成为一种趋势。

## 图片懒加载

## 字体加载

### `font-display`

#### 字体显示时间轴
字体显示时间线基于一个计时器，该计时器在用户代理尝试使用给定下载字体的那一刻开始。时间线分为三个时间段，在这三个时间段中指定使用字体的元素的渲染行为。

**字体阻塞周期**
如果未加载字体，任何试图使用它的元素都必须渲染不可见的后备字体。如果在此期间字体表面已成功加载，则正常使用它。
**字体交换周期**
如果未加载字体，任何尝试使用它的元素都必须呈现后备字体。如果在此期间字体表面已成功加载，则正常使用它。
**字体失败周期**
如果未加载字体，用户代理将其视为导致正常字体回退的失败加载。
