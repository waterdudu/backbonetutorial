/*global define*/

define([
  'underscore',
  'backbone',
  'models/Todos'
], function (_, Backbone, TodosModel) {
  'use strict';

  var TodosCollection = Backbone.Collection.extend({
    model: TodosModel
  });

  return TodosCollection;
});
