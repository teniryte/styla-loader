# styla-loader
Styla Webpack Loader

```js
module.exports = {

  // ...

  module: {

    rules: [
      {
        test: /\.styl$/,
        use: [
          {
            loader: 'styla-loader',
            options: {
              compress: true,
              imports: ['./lib/styles.styl'],
            },
          }
        ],
      },
    ],

  },

  // ...

};
```
