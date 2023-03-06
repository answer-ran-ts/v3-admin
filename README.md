# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Git 提交规范

1. type 用于说明 commit 的类型，只允许使用下面 7 个标识
   1. feat: 新功能（feature）
   2. fix: 修补 Bug
   3. docs: 文档 （documention）
   4. style: 样式 （不影响代码运行的变动）
   5. refactor: 重构 （既不是新增功能，也不是修改 Bug 的代码变动）
   6. test: 增加测试
   7. chore: 构建过程或辅助工具的变动
2. scope 用于说明 commit 影响的范围，比如数据层、控制层、视图层等，视项目不同而不同
3. subject 是 commit 目的的简短描述，不超过 50 个字符
4. body 部分是对本次 commit 的详细描述，可以分成多行
5. footer 部分只用于两种情况
   1. 不兼容变动时，以 BREAKING CHANGE 开头，后面是对变动的描述以及变动理由和迁移方法
   2. 如果当前 commit 针对某个 issue ，那么可以在 footer 部分关闭这个 issue
