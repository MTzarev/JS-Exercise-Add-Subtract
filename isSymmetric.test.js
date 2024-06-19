let {expect} = require(`chai`);
let isSymmetric = require(`./isSymmetric.js`);

describe(`isSymmetric`, ()=>{
    it (`return true for symmetric 2 nums`,()=>{
        expect(isSymmetric([1,1])).to.be.true;
    });
    it(`return true for sym 2 letters`,()=>{
        expect(isSymmetric([`a`,`a`])).to.be.true
    });
    it (`return true for 3 nums`, ()=>{
        expect(isSymmetric([1,1,1])).to.be.true
    });
    it (`return true for 4 same nums`,()=>{
        expect(isSymmetric([1,1,1,1])).to.be.true
    });
    it (`return true for 4 dif nums`, ()=>{
        expect(isSymmetric([1,2,2,1])).to.be.true
    });
    it (`return true for 5 diff nums`,()=>{
        expect(isSymmetric([1,1,2,1,1])).to.be.true
    });
    it (`return true for 3 letters`, ()=>{
        expect(isSymmetric(["a",`a`,`a`])).to.be.true
    });
    it (`return true for 3 letters`, ()=>{
        expect(isSymmetric(["a",`b`,`a`])).to.be.true
    });
    it (`return true for 3 nums`, ()=>{
        expect(isSymmetric([1,2,1])).to.be.true
    });
    it(`return false for diff arguments`, ()=>{
        expect(isSymmetric([`a`,1])).to.be.false
    });
    it(`returnt true for empty arr`,()=>{
        expect(isSymmetric([])).to.be.true
    });
    it (`return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]`,()=>{
        expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true
    });
});

//describe("isSymmetric(arr)", function () {
   

