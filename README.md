# 🐭 brian.md

my little corner of the web

> 🚧 **under construction**: beware!

built with [astro](https://astro.build/) ([react](https://react.dev/) + [tailwind](https://tailwindcss.com/)) and deployed on [vercel](https://vercel.com/)

typeset in [ibm plex mono](https://www.ibm.com/plex/) and [jetbrains mono](https://www.jetbrains.com/lp/mono/) (pixel accent font in [mondwest](https://pangrampangram.com/products/bitmap-fonts))

## 📁 project structure
```
/
├── public/
│   └── fonts/                   (various fonts used)
│   └── favicon.svg
├── src/
│   └── pages/                   (page routes)
│       └── index.astro
│       └── 404.astro
│   └── components/              (react/astro island components)
│   └── layouts/                 (header/footer + page skeleton)
│   └── main.css                 (global styles)
└── package.json
```

## 🪄 commands
| command                   | action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | installs dependencies                            |
| `npm run dev`             | starts local dev server at `localhost:3000`      |
| `npm run build`           | build your production site to `./dist/`          |
| `npm run preview`         | preview your build locally, before deploying     |
| `npm run astro ...`       | run cli commands like `astro add`, `astro check` |
| `npm run astro -- --help` | get help using the astro cli                     |

## 💭 website inspiration
- [nico.xyz](https://nico.xyz/) 
- [yihui.work](https://yihui.work/)
- [ryo.lu](https://ryo.lu/)

## 📚 references
- [astro docs](https://docs.astro.build/en/getting-started/)
- [tailwindcss docs](https://tailwindcss.com/docs/installation)
- [framer motion](https://www.framer.com/motion/)
- [react hot toast](https://react-hot-toast.com/)
- [date-fns](https://date-fns.org/)
- [partytown](https://partytown.builder.io/)
