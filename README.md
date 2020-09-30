#double-path-prefix


This repo is to document an issue when using the `useLocation` hook of the @reach/router library.

## recreating the issue

1. `git clone` this repo
2. `cd double-path-prefix`
3. `yarn`
4. `yarn build --prefix-paths`
5. `npx http-server .`
6. Navigate to `localhost:8080/testPage`

Expected Result: The link in the anchor tag would contain the `prefixPath` specified in `gatsby-config.js` only once
Actual Result: The link in the anchor tag has `/public` twice at the beginning, leading to a 404

