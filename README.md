# Vector Analytics

Minimal alternative to Google Analytics based on Vue.js and MongoDB.

## About the Project

This project does not use semantic versioning until v1 is officially released, so please check the changelog carefully before each upgrade to see if it is still working properly.

Vue.js is in the transition phase from v2 to v3, and the project will continue to be based on v2 temporarily because the adaptation of the community ecosystem is not stable yet.

## Environment Variables

The varibales below are available both in development mode and production mode:

```
SERVER_PORT=3000  # control panel server port
DATABASE_URL="mongodb://localhost:27017/goosedb_preview" # database url (mongodb)
VUE_APP_TRACKER_FILENAME="goose.min.js" # tracker script file name
VUE_APP_TITLE="Vector Analytics" # app title on control panel
```

### Production

Production mode needs `npm run build` first. Both the API server and website files built are provided by express.js on port `SERVER_PORT`.

```
VUE_APP_BASE_URL="/"
```

### Development

In development mode, the website itself is provided by Vue CLI on `SERVER_PORT`.

Difference is that the API server is deployed on `SERVER_API_PORT` without static file provider, then proxyed by Vue CLI's webpack-dev-server to the same port as `SERVER_PORT`.

```
SERVER_API_PORT=3001
```

## Bypass Blocker Extensions

Add `VUE_APP_TRACKER_FILENAME` environment variable to customize the tracker script name, for example:

```
VUE_APP_TRACKER_FILENAME="jquery.min.js"
```

## Contribute

First you need to fork this repo and clone it.

Then create a `.env.development` then set the development environment variables above. Check the [Environment Variables](#environment-variables) section for more details.

After these, you can simply:

```bash
npm install
npm run dev
```

Local MongoDB Server is also needed.

### Code Style

This project uses [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to format source code, so the git commands may be slow due to the [Prettier](https://prettier.io) formatting workflow.

#### Options API Props Order

```
render
name => components
props => data => computed => watch
lifecycle functions
methods
```

#### SCSS Scopes

All basic components in `@/components` should not use scoped styles, styles of those needs to be named like `v-component-ctx`.

Alternatively, all view components in `@/views` should use scoped styles.

## License

This project is released under `Apache License 2.0`, for more information read the [LICENSE](https://github.com/dsrkafuu/vector-analytics/blob/main/LICENSE).

**Copyright © 2020-present DSRKafuU (https://dsrkafuu.su)**
