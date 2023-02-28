# Plant Finder

This application helps photographers, botanists or any adventurers who like to spend time in nature. With this application, you can find information about a plant you entered the name of and you can see the areas that the plant has been observed on the map. Enter the name of the plant, preferably scientific name, and explore nature.

## Demo

[https://subtle-taffy-e1ff0d.netlify.app/]

## Structure

```
public
src
└── features
  └── displayDataOnMap.js
  └── displayUserLocation.js
  └── loadPreview.js
└── pages
  └── infoPage.js
  └── mainPage.js
  └── welcomePage.js
└── views
  └── mainPageView.js
  └── previewView.js
  └── welcomeView.js
└── apiKeys.js
└── app.js
└── constants.js
index.html
```

## Goal and Backlog

- [x] (must have) The app needs to be responsive.
- [x] (must have) The app needs to be a single page application.
- [x] (must have) The app needs to interact with an API to grab data.
- [x] (must have) The app needs to have loading/error handling for the interaction with the API and needs to show this to the user, not just a console.log.
- [x] (must have) The app needs some user interaction such that you need to grab different data from the API. So you cannot just grab everything from the API and store it locally with one fetch.
- [x] (must have) Change the title
- [x] (must have) Add a favicon
- [x] (must have) Plant data must be displayed on the map.
- [x] (nice to have) User geo location can be displayed on the map.
- [x] (nice to have) When the user enter the common name of the plant, he/she can see the scientific names and the images of different species.
- [ ] (nice to have) More-Information window.
