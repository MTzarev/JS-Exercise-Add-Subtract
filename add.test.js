let {expect} = require(`chai`);
crateCalculator = require(`./add.js`);

describe(`createCalculator`, ()=>{
    it (`return true for symmetric 2 nums`,()=>{
        expect(add(2)).to.equals(3);
    });
});