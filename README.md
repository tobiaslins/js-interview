## Javascript UI ↔ Server syncing

In order to run/test the app, please install all dependencies with `yarn
install` or `npm install`

### Run the test scenario from the task

```
# yarn test
```

### Run the test application

```
# yarn start
```

### How to fix this problem?

Just change in `sagas/index.js` the `takeEvery` to `takeLatest` and it will
cancel the first request and just use the second one.

This is only one of multiple solutions
