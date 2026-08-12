# HappyAI · ZHL

Happy 的 AI 学习笔记、知识地图与实践记录。

网站使用 [Astro](https://astro.build/) 和 [Starlight](https://starlight.astro.build/) 构建，并通过 Vercel 自动部署。

## 添加一篇笔记

1. 在 `src/content/docs/` 中新建一个 `.md` 文件。
2. 在文件开头填写标题和说明：

   ```yaml
   ---
   title: 笔记标题
   description: 用一句话说明这篇笔记。
   ---
   ```

3. 使用 Markdown 编写正文。
4. 如果需要显示在左侧菜单，在 `astro.config.mjs` 的 `sidebar` 中添加它。
5. 提交并推送到 GitHub，Vercel 会自动重新部署。

## 本地预览

```powershell
npm install
npm run dev
```

浏览器打开 `http://localhost:4321`。

## 发布前检查

```powershell
npm run build
npm run preview
```

生产文件会生成在 `dist/` 目录。

## 内容边界

这个仓库是公开仓库，只应包含可以公开分享的个人学习总结；不要上传公司源码、内部文档、客户资料、密钥或个人敏感信息。
