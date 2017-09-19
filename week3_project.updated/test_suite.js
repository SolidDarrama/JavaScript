QUnit.test( "Function A, donuts", function( assert ) {
	assert.equal( donuts(1), 'Number of donuts: 1', "Test 1" );
	assert.equal( donuts(9), 'Number of donuts: 9', "Test 2" );
	assert.equal( donuts(10), 'Number of donuts: many', "Test 3" );
	assert.equal( donuts(99), 'Number of donuts: many', "Test 4" );
});

QUnit.test( "Function B, both_ends", function( assert ) {
	assert.equal( both_ends('spring'), 'spng', "Test 1" );
	console.log("hi");
	assert.equal( both_ends('Hello'), 'Helo', "Test 2" );
	assert.equal( both_ends('a'), '', "Test 3" );
	assert.equal( both_ends('xyz'), 'xyyz', "Test 4" );
	}
);

QUnit.test( "Function C, fix_start", function( assert ) {	
	assert.equal( fix_start('babble'), 'ba**le', "Test 1" );
	assert.equal( fix_start('aardvark'), 'a*rdv*rk', "Test 2" );
	assert.equal( fix_start('google'), 'goo*le', "Test 3" );
	assert.equal( fix_start('donut'), 'donut', "Test 4" );
});

QUnit.test( "Function D, mix_up", function( assert ) {
	assert.equal( mix_up('mix', 'pod'), 'pox mid', "Test 1" );
	assert.equal( mix_up('dog', 'dinner'), 'dig donner', "Test 2" );
	assert.equal( mix_up('gnash', 'sport'), 'spash gnort', "Test 3" );
	assert.equal( mix_up('pezzy', 'firm'), 'fizzy perm', "Test 4" );
});

QUnit.test( "Function E, verbing", function( assert ) {
	assert.equal( verbing('hail'), 'hailing', "Test 1" );
	assert.equal( verbing('swiming'), 'swimingly', "Test 2" );
	assert.equal( verbing('do'), 'do', "Test 3" );
});

QUnit.test( "Function F, not_bad", function( assert ) {
	assert.equal( not_bad('This movie is not so bad'), 'This movie is good', "Test 1" );
	assert.equal( not_bad('This dinner is not that bad!'), 'This dinner is good!', "Test 2" );
	assert.equal( not_bad('This tea is not hot'), 'This tea is not hot', "Test 3" );
	assert.equal( not_bad("It's bad yet not"), "It's bad yet not", "Test 4" );
});

QUnit.test( "Function G, front_back", function( assert ) {
	assert.equal( front_back('abcd', 'xy'), 'abxcdy', "Test 1" );
	assert.equal( front_back('abcde', 'xyz'), 'abcxydez', "Test 2" );
	assert.equal( front_back('Kitten', 'Donut'), 'KitDontenut', "Test 3" );
});