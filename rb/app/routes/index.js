import Ember from 'ember';
import KeyboardShortcuts from 'ember-keyboard-shortcuts/mixins/route';

export default Ember.Route.extend(
  KeyboardShortcuts,

  {
    actions: {
      one: function() {
        this.transitionTo('beaches');
      },
      two: function() {
        this.transitionTo('surfing');
      },
      three: function() {
        this.transitionTo('apparel');
      },
      four: function() {
        this.transitionTo('eat-drink');
      },
      five: function() {
        this.transitionTo('places-to-stay');
      },
      six: function() {
        this.transitionTo('other-activities');
      }
    },

    keyboardShortcuts: {
      '1' : 'one',
      '2' : 'two',
      '3' : 'three',
      '4' : 'four',
      '5' : 'five',
      '6' : 'six'
    }
  }
);
