# Leucotron Design System
Design system made for an application that is going to be developed for the selective process. It was made with React, Typescript and deployed with Storybook for documentation.

## Table of Contents
- [Leucotron Design System](#leucotron-design-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Quick run](#quick-run)
  - [Links](#links)
  
## Features

- [x] Documentation with storybook
- [x] Accessibility plugin
- [x] All components stylized with stitches
- [x] Interactive documentation for all components
- [x] Turbo Repo with cache for faster run time

## Quick run

It's possible that you will have to downgrade Node version to 16, it presents some bugs with the latest version. Upgrading storybook may resolve these issues, but it's implementation with builder-vite may not work.

```bash
git clone GIT_REPO
cd GIT_REPO
nvm use 16
npm i
npm run dev
```

## Links

- Storybook: http://localhost:6006