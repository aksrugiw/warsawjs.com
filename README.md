# warsawjs.com

> Use `GitHub Pages` to host homepage: https://warsawjs.com/

## Wallpapers

* [javascript-2590x1517.jpg](https://warsawjs.com/assets/wallpapers/javascript-2590x1517.jpg)
* [warsawjs-black-1920x1080.jpg](https://warsawjs.com/assets/wallpapers/warsawjs-black-1920x1080.jpg)
* [warsawjs-white-1920x1080.jpg](https://warsawjs.com/assets/wallpapers/warsawjs-white-1920x1080.jpg)

## Development

You must pre-install `rvm`.

<kbd>Copy + paste</kbd>

```bash
rvm gemsets create www.warsawjs.com
rvm use 2.2.1@www.warsawjs.com
gem install bundler
bundle install
jekyll serve
```

## Deployment

<kbd>Copy + paste</kbd>

```bash
npm install
npm run deploy
```

## Sources

* https://blog.tersmitten.nl/slugify/ - build slug URL by presentation name
