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
  var imgWidth = 63; // match the image widths, we know from our styling
  var slide = 0;
  crsl.currentSlide = 0;
  crsl.offset = 0;
  crsl.currentImg;
  crsl.altImgs;
  crsl.length;

  this.$onInit = function() {
    imgs = crsl.images[0];
    crsl.currentImg = imgs.PrimaryImage[0].image;
    crsl.altImgs = this.addPrimaryToAlt(imgs.AlternateImages, imgs.PrimaryImage[0]);
    crsl.length = crsl.altImgs.length;
  }

  this.addPrimaryToAlt = function(o, n) {
    o.unshift(n);
    return o;
  }

  this.selectImage = function(idx) {
    crsl.currentSlide = idx;
    crsl.currentImg = crsl.altImgs[crsl.currentSlide].image;
  }

  this.nextImage = function() {
    if (slide === (crsl.length - 3)) {
      return;
    }
    crsl.offset = crsl.offset + imgWidth;
    slide++;
  }
  this.previousImage = function() {
    if (slide === 0) {
      return;
    }
    crsl.offset = crsl.offset - imgWidth;
    slide--;
  }

  this.openZoomModal = function() {
    alert('ZOOM ZOOM');
  }
}
