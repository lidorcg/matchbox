import { Meteor } from 'meteor/meteor';

import '../node_modules/framework7/dist/css/framework7.ios.min.css'
import '../node_modules/framework7/dist/css/framework7.ios.colors.min.css';
import '../node_modules/framework7/dist/js/framework7.min.js'

import '../imports/ui/pages/login.html'

if (Meteor.isClient) {
  // Initialize app
  var myApp = new Framework7();

  // If we need to use custom DOM library, let's save it to $$ variable:
  var $$ = Dom7;
}