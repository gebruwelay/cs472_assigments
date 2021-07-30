"use strict";
/* global describe */
/* global it */
/* global assert */
/* global pow */

describe("test", function () {

    describe("filter bad words", function () {

            let expected = "This house is nice!";
            it(`expected is ${expected}`, function () {
                assert.equal("This house is not nice!".filter(["not","bad"]), expected);
            });
        

    });

    describe  ("bubble sort", function(){
        let expected = [-2,0,1,3,4,6];
        it(`expected is ${expected}`, function() {
            assert.deepEqual([6,4,0,3,-2,1].bubbleSort(),expected);
        });
    });

    describe ("teacher", function () {
        let expected = "Gebru is now teaching JS";
        var teacher = new Teacher();
        teacher.initialize("Gebru",28);
        it(`expected is ${expected}`, function(){
            assert.equal(teacher.teach("JS"),expected)
        });

    });

});