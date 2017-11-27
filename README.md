## 注意

项目使用 **tinypng** 进行图片压缩,所以上线之前先把静态  **images图片** 拷贝一份到跟目录,然后在 **gulpfile.js**里面配置需要替换图片的输出目的地址,最后执行 `npm run imagemin` 再 `npm run build`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# compress images
npm run imagemin

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

## postcss autoprefixer config

package.json:

"browserslist": [
    "> 5%",
    "last 2 versions",
    "not ie <= 8"
]


