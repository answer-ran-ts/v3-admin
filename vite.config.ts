import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// 加载环境变量（loadEnv）,loadEnv接收三个参数，第一个是.env后面的名字，第二个是绝对路径，第三个参数是你环境变量名的前缀，在vite中默认是VITE_。比如loadEnv(‘abc’, process.cwd(), 'ENV');
// const isProduction = process.env.NODE_ENV === 'production'
const resolve = (dir: any) => path.resolve(__dirname, dir)
// https://vitejs.dev/config/
// defineConfig是一个工具函数，不用 jsdoc 注解也可以获取类型提示
export default defineConfig(({ command, mode }) => {
  // const envParams = loadEnv(mode, __dirname) //__dirname表示当前文件所处目录
  return {
    // root: resolve('./src'), //  入口index.html，注意入口js应该与index.html 同一目录下（只能写到目录，不能写到具体文件）
    base: './',
    publicDir: resolve('static'), // 静态资源文件夹
    plugins: [vue()],
    // 添加配置如下
    css: {
      // 预处理器配置项
      preprocessorOptions: {
        less: {
          math: 'always',
          globalVars: {
            blue: '#1CC0FF'
          }
        }
      }
    },
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行npm install @types/node --save-dev
        '@': path.resolve(__dirname, 'src'),
        '@/assets': path.resolve(__dirname, 'src/assets'),
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/layout': path.resolve(__dirname, 'src/layout'),
        '@/views': path.resolve(__dirname, 'src/views'),
        '@/store': path.resolve(__dirname, 'src/store')
      },
      extensions: ['.mjs', 'cjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // 反向代理
    server: {
      host: '0.0.0.0', // 服务器ip地址
      port: 5566, // 本地端口
      fs: {
        strict: false //  支持引用除入口目录的文件
      },
      // open: true, // 是否自动在浏览器打开
      proxy: {
        '/szapi': {
          target: 'https://tradesz.test.api.qywgpo.com/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/szapi/, '')
        }
      }
    },
    build: {
      outDir: 'dist',
      // 9月更新
      assetsDir: 'assets', // 指定静态资源存放路径
      sourcemap: false, // 是否构建source map 文件
      // 10月更新
      minify: 'terser', // 混淆器，terser 构建后文件体积更小，'terser' | 'esbuild'
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制，默认500KB
      rollupOptions: {
        output: {
          // 最小化拆分包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
          chunkFileNames: 'js/[name].[hash].js' // 用于命名代码拆分时创建的共享块的输出命名，[name]表示文件名,[hash]表示该文件内容hash值
        }
      },
      terserOptions: {
        // 生产环境移除console
        compress: {
          drop_console: true,
          drop_debugger: true
        },
        // 10月更新
        output: {
          comments: true // 去掉注释内容
        }
      }
    }
  }
})
