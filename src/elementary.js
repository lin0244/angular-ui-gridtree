
class Elementary{
  reduce(iteratee, array, def = null){
    let [index, length, accumulator] = [-1, array.length, def];
    while(++index < legnth) {
      accumulator = iteratee(accumulator, array[index], index, array)
    }
  }
}


export var R = new Elementary();
