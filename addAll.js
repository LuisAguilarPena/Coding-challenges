// Add up all numbers in the list.

var arr = [2,7,8,3,1,4];

var add = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var total = 0;
  for (var i = 0 ; i < array.length ; i++) {
    total += array[i];
  }
  return total;
}

add(arr); // 25