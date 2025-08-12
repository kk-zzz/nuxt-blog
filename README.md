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

### 2. 使用 @nuxt/content

[@nuxt/content](https://content.nuxt.com/docs/getting-started/installation)

⚠️注意：`content` 文件夹 位于 根目录第一层。

- 1. 安装

  ```bash
  pnpm add @nuxt/content
  ```

- 2. nuxt.config.ts 注册 modules
  ```ts
  export default defineNuxtConfig({
    //...
    modules: ['@nuxt/content']
  })
  ```

- 3. 创建 `content.config.ts`
  ```ts
  // content.config.ts
  import { defineContentConfig, defineCollection } from '@nuxt/content'

  export default defineContentConfig({
    collections: {
      content: defineCollection({
        type: 'page',
        source: '**/*.md'
      })
    }
  })
  ```

- 4. 在 `content/**.md` 中使用vue component

    - 1. 需要在 app/components 创建 `content` 文件夹
    - 2. **.md 不支持 pathPrefix 所以需要在 `nuxt.config.ts` components 关闭 pathPrefix
      ```ts
      export default defineNuxtConfig({
        //... 其他配置
        components: [
          // default: true, BaseFooButton, 若是 false，则要使用 Button
          { path: '~/components/', pathPrefix: true, ignore: ['content'] },
          { path: '~/components/content/', pathPrefix: false }
        ]})
      ```

      - 3. 使用方式参考[vue-components](https://content.nuxt.com/docs/files/markdown#vue-components)


