/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var BookModel = Backbone.Model.extend({
    url: '',

    initialize: function() {
    },

    defaults: {
      title: '',
      author: '',
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return BookModel;
});
