suite('"About" Page Tests',function(){
    test('page should contain link to cotact page',function(){
      assert($('a[href="/contact"]').length);
    });
});
