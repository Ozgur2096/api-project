# The Name of The Application

description

## Demo

## Structure

```
public
src
└── pages
└── views
└── app.js
└── constants.js
└── data.js
index.html
```

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains all of our JavaScript code
  - `pages` this folder contains our functions that handle user interactions. You can also see it as the code that processes and updates the data or DOM
    it also contains our code that links up our handler code to the DOM.
  - `views` this contains code to define what the DOM will look like. They will create the DOM element and give it back. They should never read from/write to the dom, that is what the pages do.
  - `app.js` this file our initialisation code. Generally this code should only run once and starts the application
  - `data.js` this is our data model. Anything we need to store in the browser we place inside the data file

## Goal and Backlog

- [x] (must have) The app needs to be responsive.
- [x] (must have) The app needs to be a single page application.
- [x] (must have) The app needs to interact with an API to grab data.
- [x] (must have) The app needs to have loading/error handling for the interaction with the API and needs to show this to the user, not just a console.log.
- [x] (must have) The app needs some user interaction such that you need to grab different data from the API. So you cannot just grab everything from the API and store it locally with one fetch.
- [ ] (must have) Change the title
- [ ] (must have) Add a favicon
- [ ] (must have) Some crucial things.
- [ ] (nice to have) A
- [ ] (nice to have) A
- [ ] (nice to have) A
- [ ] (nice to have) A
- [ ] (nice to have) A
- [ ] (nice to have) A
