test
# About
This project is made by Poul Rosenberg as [the Virtual White Board case](https://github.com/ibmcicdk/CIC-HIRING-TEST/tree/master/VirtualWhiteBoard) for IBM CIC.

It is made in Vue.js with Vuetify. Here the Vuetify components "cards" serves as the fundamentals of items on the board. The board can consist of thre types of cards: <em>text</em> (displaying a title and a text), <em>img</em> (displaying a title and an image), and <em>vid</em> (displaying a title and a playable youtube video).

The img type needs an image url the will be shown, and the vid needs an youtube ID, e.g. <em>dQw4w9WgXcQ</em> to show video https://youtu.be/dQw4w9WgXcQ, thus NOT the full youtube link.

# To do
The intention was to have Firebase handle both authorization and the database, however the firebase is not installed or implemented properly, and does not work in the current state. Thus, to advance this must be solved.

Firstly, get the authorization to work such that Sam and Bertha are able to log in.

Secondly, create a sidebar on the left side of the page with CRUD tools.

Finally, optimize and deploy.

E.g. make a script to generate Youtube ID from Youtube link, create moderator abilities to users, etc. 


# v-board

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
