# Gatsby-simplest-example

## Motivation

Reproduce and fix [issue #19543](https://github.com/gatsbyjs/gatsby/issues/19543)

## Failing case

```bash
yarn
yarn build
yarn serve
open http://localhost:9000/hello
```

Open the devtools > network panel, and refresh the page. You should notice a 301 redirect to `/hello/`.

## Working case

```bash
yarn
yarn develop
open http://localhost:8000/hello
```

Open the devtools > network panel, and refresh the page. You should not notice any redirection.

## Testing the fix

```bash
yarn patch-package
rm -rf .cache public
yarn build
yarn serve
open http://localhost:9000/hello
```

Open the devtools > network panel, and refresh the page. You should not notice any redirection.

## Notes

- All dependencies have been upgraded to their latest version
- Tests have been performed on latest Chrome and Safari
