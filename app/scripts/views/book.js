/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var BookView = Backbone.View.extend({
    template: JST['app/scripts/templates/book.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {},

    initialize: function () {
      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      // console.log('calling toJSON');
      // console.log(this.model.toJSON())
      // console.log(this.template(this.model.toJSON()));
      this.$el.html(this.template(this.model.toJSON()));
    }
  });

  return BookView;
});
