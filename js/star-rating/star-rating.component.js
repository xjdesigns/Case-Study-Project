var star = angular.module('starRating', []);

star.component('starRating', {
  templateUrl: 'js/star-rating/star-rating.component.html',
  controller: StarRatingComponent,bindings: {
    rating: "<"
  }
});

function StarRatingComponent() {
  var st = this;
  st.rating = 'myr-star-review--1';

  this.$onInit = function() {
    st.rating = 'myr-star-review--' + this.rating;
  }
}
