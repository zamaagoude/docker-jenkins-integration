var assert = require('assert')

function test() {
    assert.equal(2 + 2, 4);
}

if (module == require.main) require('src/test').run(test);