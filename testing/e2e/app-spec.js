var app = 'http://localhost:4000';

describe('myRetail App Case Study::', function() {
  beforeAll(function() {
    browser.get(app);
  });

  it('should get the title', function() {
    var t = 'Title';
    t = browser.getTitle().then(function(title) {
      return title;
    })
    expect(t).toEqual('myRetail Product Page');
  });

  it('should get the product title', function() {
    var pt = element(by.css('[data-id=product-title]'));
    expect(pt.getText()).toEqual('Ninja™ Professional Blender with Single Serve Blending Cups');
  });

  it('should get the product price', function() {
    var pr = element(by.css('[data-id=product-price]'));
    expect(pr.getText()).toEqual('$139.99');
  });

  it('should change the up count twice', function() {
    var ct = element(by.css('[data-id=product-counter]'));
    var up = ct.element(by.css('[data-id=increment]'));
    var count = ct.element(by.css('[data-id=count]'));
    up.click().click();
    expect(count.getText()).toEqual('2');
  });

  it('should change the down count once', function() {
    var ct = element(by.css('[data-id=product-counter]'));
    var dwn = ct.element(by.css('[data-id=decrement]'));
    var count = ct.element(by.css('[data-id=count]'));
    dwn.click();
    expect(count.getText()).toEqual('1');
  });

  it('should check the image carousel', function() {
    var c = element(by.css('[data-id=product-carousel]'));
    var next = c.element(by.css('[data-id=next]'));
    var wrapper = c.element(by.css('[data-id=picker]'));
    next.click().click();
    browser.sleep(1000);
    expect(wrapper.getCssValue('margin-left')).toEqual('-126px');
  });

  it('should click on the 5th image and display', function() {
    var c = element(by.css('[data-id=product-carousel]'));
    var img = c.element(by.css('[data-id=product-image] img'));
    var pck = c.element(by.css('[data-id=picker] > div:nth-child(5)'));
    pck.click();
    browser.sleep(1000);
    expect(img.getAttribute('src')).toEqual('http://target.scene7.com/is/image/Target/14263758_Alt04');
  });

  it('should check products list for count', function() {
    var pl = element.all(by.repeater('img in $ctrl.altImgs'));
    expect(pl.count()).toEqual(8);
  });
});
