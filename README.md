# FXStreet

<!-- TABLE OF CONTENTS -->

- [FXStreet](#fxstreet)
  - [Overview](#overview)
    - [Link](#link)
  - [Built With](#built-with)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Author](#author)

## Overview

The app is a dashboard page that fetch posts from an internal api and render the
content. The user can navigate between the latest and popular posts. The post
are order by date of publication and they includes all the information about the
author: like name, company name and profile image and the post information: like
feed, subfeeds, date of publication, title, and content. At the bottom of each
post there are three action button to like a post, save it or open a dialog menu
that show more actions.

The app is fully-responsive, in mobile version I change a lit bit the design,
like the sidebar that became a responsive with open close toggle menu.

I use redux to fetch the post and handle the state management for all the app,
so if this project grown the main structure is already set.

I also replaced the placeholder bars for some fake content just to place some
content to fill the space.

### Link

- Live Site URL:
  [Live site URL here](https://frontendmaster-todo-app.netlify.app/)

## Built With

- [REACT](https://reactjs.org/)
- [REDUX](https://redux.js.org/)
- [SASS](https://sass-lang.com/)
- [AXIOS](https://github.com/axios/axios)

### Prerequisites

This is an example of how to list things you need to use the software and how to
install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installing

To intalling and use this project you will need:

1. Clone the repo
   ```sh
   git clone https://github.com/fab-rvn/fxstreet.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app in your localhost
   ```sh
   npm start
   ```

## Author

**Fabrizio Ervini**

- Website - [faber](https://fabrizioervini.com)
- Twitter - [faber](https://twitter.com/faber_dev)
- Project Link:
  [https://github.com/fab-rvn/fxstreet.git](https://github.com/fab-rvn/fxstreet.git)
