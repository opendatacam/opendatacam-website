# Opendatacam website

| PROD                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![](<https://teamcity.tools.moovel.com/app/rest/builds/buildType:(id:Lab_WebsiteOpendatacamV2_Prod)/statusIcon>)](https://teamcity.tools.moovel.com/viewType.html?buildTypeId=Lab_WebsiteOpendatacamV2_Prod) |

**Development mode**

```bash
npm install
npm run dev
```

Go to [http://localhost:3000](http://localhost:3000)

**Production build (static)**

```bash
npm install
npm run export

# Static files are in out/ directory
```

**Production build (node.js server)**

```bash
npm install
npm run build
npm run start
```

Go to [http://localhost:3000](http://localhost:3000)
