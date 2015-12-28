/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  var TodoModel = Backbone.Model.extend({
    url: '',

    initialize: function() {
    },

    defaults: {
      title: "",
      timestamp: 0,
      completed: false
    },

    validate: function(attrs, options) {
      if (_.isEmpty(attrs.title)) {
        return "Missing Title";
      }
    },

    parse: function(response, options)  {
      return response;
    }
  });

  return TodoModel;
});
