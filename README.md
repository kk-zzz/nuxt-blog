# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## dependencies vs devDependencies

| 类型 | 用于 | 示例 |
|---------|---------|---------|
| dependencies | 生产运行时需要的库 | `vue`, `axios`, `vuex` |
| devDependencies | 构建/开发时用到的工具库或插件 | `vite`, `eslint`, `sass` |

## node_modules

### 1. 使用 UnoCss

[Nuxt-UnoCss](https://unocss.dev/integrations/nuxt)

- 1. 安装modules

  ```bash
  pnpm i unocss @unocss/nuxt -D
  ```

- 2. 配置 nuxt.config.ts

  ```ts
  export default defineNuxtConfig({
    //...
    modules: ['@unocss/nuxt'],
    unocss: {
      uno: true, // 启用 UnoCSS 的默认配置
      attributify: true, // 启用属性化模式
      icons: true, // 启用图标支持
    }
  })
  ```

- 3. 创建配置文件 uno.config.ts

  > presetUno 一定要存在，不然 style 不生效

  ```ts
  import { defineConfig, presetAttributify, presetUno } from 'unocss'

  export default defineConfig({
    presets: [
      presetUno(),
      presetAttributify(),
    ],
    theme: {
      colors: {
        primary: '#007aff',
      }
    }
  })
  ```
