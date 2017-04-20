import Ember from 'ember';

export default Ember.Controller.extend({
  range: Array.apply(null, {length: 1000}).map(Number.call, Number).map((o) => ({index: o}))
});
