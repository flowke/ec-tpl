# ec-tpl

Electron + TypeScript + Vite + React 模板

## 脚本
- `npm run dev`：并行启动 TypeScript 主进程编译、Vite 前端与 Electron。
- `npm run build`：打包主进程、渲染进程并使用 electron-builder 产出安装包。
- `npm run lint` / `npm run format`：基础规范检查与格式化。

## 目录
- `src/main`：主进程与 preload。
- `src/renderer`：React 渲染端。
- `src/types`：共享类型（如 preload 暴露的 API）。
- `dist/main`：主进程编译输出。
- `dist/renderer`：渲染端构建输出（Vite）。
- `release`：electron-builder 生成的安装包目录。

## 开发
1. （建议）切换到 Node 20 LTS，避免部分 native 依赖的构建问题。
2. 安装依赖：`npm install`（若遇 `fsevents` 构建问题，可加 `--no-optional`）。
3. 启动：`npm run dev`，默认打开 `http://localhost:5173` 渲染端并附带 Electron。

## 打包
`npm run build`，产物位于 `release/`。如需自定义图标，在 `resources/` 放置对应平台的图标并更新 `electron-builder.yml`。
