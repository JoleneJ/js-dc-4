for(var i = 99; i > 0; i--)
{
  if(i === 1){
  console.log(i + ' bottle of beer on the wall,' + i + ' bottle of beer. \nTake one down and pass it around, no bottles of beer on the wall.');
  console.log('No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.');
}
else {
  console.log(i + ' bottles of beer on the wall,' + i + ' bottles of beer \nTake one down and pass it around,' + (i -1) + 'bottles of beer on the wall.');
}

}
