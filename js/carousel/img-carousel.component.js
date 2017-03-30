var img = angular.module('imgCarousel', []);

img.component('imgCarousel', {
  templateUrl: 'js/carousel/img-carousel.component.html',
  controller: ImageCarousel,
  bindings: {
    images: '<'
  }
});

function ImageCarousel() {
  var crsl = this;
  var imgs = {};
  var currentSlide = 0;
  crsl.currentImg;
  crsl.altImgs;

  this.$onInit = function() {
    imgs = crsl.images[0];
    crsl.currentImg = imgs.PrimaryImage[0].image;
    crsl.altImgs = imgs.AlternateImages;
    console.warn('this', imgs, this);
  }

  this.nextImage = function(idx) {
    console.warn('Image IDX::', idx);
  }
}
