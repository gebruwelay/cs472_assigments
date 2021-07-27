"use strict"

describe ("sum", () => {
    describe ("sum of array numbers", ()=>{
        let expected = 1+2+3+4;
        it(`Output of sum([1,2,3,4]) is ${expected}`, ()=>{
              assert.equal(sum([1,2,3,4]),expected);
        });
    });
});

describe ("multiply", ()=>{
    describe("product of array numbers", ()=> {
        let Expected = 1*2*3*4;
        it(`Output of multiply ([1,2,3,4]) is ${Expected}`, ()=>{
            assert.equal(multiply([1,2,3,4]),Expected);
        });
  });
});

describe ("reverse", ()=>{
    describe("string reverse", ()=> {
        let expected = "ratset gaj";
        it(`output of reverse (jag testar) is  ${expected}`, ()=>{
            assert.equal(reverse("jag testar"),expected);
        });
  });
});

describe ("filterLongWords", ()=>{
    describe("long words", ()=> {
        let expected = ["three", "four"];
        it(`output of filterLongWords(three, one, two,four)  ${expected}`, ()=>{
            assert.deepEqual(filterLongWords(["one","two","three","four"]),expected);
        });
  });
});