function spy(){ return 'hi';};
function receivesAFunction(p){
return p();
}
receivesAFunction(spy);

/*describe("returnsANamedFunction()", () => {
    var fn;
    before(() => {
      fn = returnsANamedFunction();
    });
    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });
    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    */
    function  namedfunc(){ console.log('hi');}
     function returnsANamedFunction(){
        
        return namedfunc;
     }
/*describe("", () => {
    var fn;
    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });
    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });*/

function returnsAnAnonymousFunction(){
return function (){ };
}

