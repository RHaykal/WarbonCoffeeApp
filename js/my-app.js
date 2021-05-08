var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: false,
    },
    views: {
      stackPages: true,
    },
    // Add default routes
    routes: [
      {
        path: '/home/',
        pageName: 'home',
      },

      {
        path: '/category-page/',
        pageName: 'category-page',
      },

      {
        path: '/product-page/',
        pageName: 'product-page',
      },
    ],
    // ... other parameters
  });

//create popup
// DOM events for About popup
$$('.popup-about').on('popup:open', function (e) {
  console.log('About popup open');
});
$$('.popup-about').on('popup:opened', function (e) {
  console.log('About popup opened');
});

// Create Popup with swipe to close
var swipeToClosePopup = app.popup.create({
  el: '.popup-swipe-to-close',
  swipeToClose: true,
});

  // create searchbar
  var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
      search(sb, query, previousQuery) {
        console.log(query, previousQuery);
      }
    }
  });

    // DOM events for my-sheet sheet
    $$('.my-sheet').on('sheet:open', function (e) {
      console.log('my-sheet open');
    });
    $$('.my-sheet').on('sheet:opened', function (e) {
      console.log('my-sheet opened');
    });

    // Create swipe-to-step Sheet
    app.sheet.create({
      el: '.my-sheet-swipe-to-step',
      swipeToClose: true,
      swipeToStep: true,
      backdrop: true,
    });


var mainView = app.views.create('.view-main');