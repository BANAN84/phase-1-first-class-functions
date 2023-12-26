function cb(){
  console.log('hi')
}
function receivesAFunction(cb){
cb()
}


function returnsANamedFunction(){
  return function namedF(){ console.log('h')}
}

function returnsAnAnonymousFunction(){
  return function () {
    console.log('im an')
  }
}