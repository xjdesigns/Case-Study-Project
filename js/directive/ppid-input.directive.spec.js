describe('ppid input directive test::', function() {
  var $compile,
      $rootScope,
      element,
      a;

  beforeEach(module('ppidInput', 'app.templates'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $rootScope.myUnit = '5-55-5';

    element = $compile("<div ppid-input ng-model=\"mysUnit\"></div>")($rootScope);
    a = '4-44-4';
    $rootScope.$digest();
  }));

  it('Replaces the element with the appropriate content', function() {
    var input = element.find('input');
    expect(input).toBeDefined();
  });

  it('should change the id', function() {
    var iso = element.isolateScope();

    spyOn(iso, 'ppidValSet');
    iso.ppidValSet(a);
    expect(iso.ppidValSet).toHaveBeenCalledWith(a);
  });

  it('ppidValSet:: method', function() {
    var isoo = element.isolateScope();
    var val = '3-3-3';
    var newVal = isoo.ppidValSet(val);
    expect(newVal).toBe('003-03-003');
  });
});
