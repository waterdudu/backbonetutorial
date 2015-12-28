/*global require*/
'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'models/book',
  'views/book',
], function($, _, Backbone, BookModel, BookView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
      'book': 'showBook',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    
    app_router.on('route:showBook', function(){


        var book = new BookModel({
          title: 'JavaScript The Good Parts',
          author: 'Douglas Crockford'
        });

   
        // Call render on the module we loaded in via the dependency array
        var bookView = new BookView({model: book});
        bookView.render();

    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        // var homeView = new HomeView();
        // homeView.render();

        var book = new BookModel({
          title: 'JavaScript The Good Parts',
          author: 'Douglas Crockford'
        });

   
        // Call render on the module we loaded in via the dependency array
        var bookView = new BookView({model: book, el: $('#mybook')});
        bookView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.


    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});