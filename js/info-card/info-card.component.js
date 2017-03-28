var app = angular.module('infoCard', []);

app.component('infoCard', {
  templateUrl: 'js/info-card/info-card.component.html',

  controller: function InfoCardController() {
    this.cards = [{
      title: 'Nintendo',
      name: 'Switch',
      year: 'Early 2017'
    }, {
      title: 'Playstation',
      name: '4 Pro',
      year: '2016'
    }, {
      title: 'Microsoft',
      name: 'Scorpio',
      year: 'Late 2017'
    }];

    this.thing = 'Matt';

    this.handleClick = function() {
      alert('YUP');
    }

    this.fromComponent = function(t, j) {
      console.warn('thing from below', t, j);
      this.thing = t;
    }
  }
});
