# Opendatacam website


**Development mode**

```bash
npm install
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

**Production build (static in github pages)**

```bash
npm install
npm run export

# Static files are in docs/ directory

git add .
git push
```

NOTE: very important to have a `.nojekyll` file in the docs/ directory so Github pages doesn't ignore the `_next` directory. This file should be created automaticly with `npm run export`

NOTE2: need also to have a `CNAME` file in the `docs/` with the custom domaine `opendata.cam` , it should be generated at build time. This file should be created automaticly with `npm run export`