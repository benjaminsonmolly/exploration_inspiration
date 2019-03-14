document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  var inspirationArray = [
    'Get a coffee.', 'Try the same step twice.', 'Use a PNG.', 'Take a screenrecording of your process.'
  ];
  if(checkPageButton){
    checkPageButton.addEventListener('click', function() {
      var random = inspirationArray[Math.floor(Math.random()*inspirationArray.length)];
      alert(random);
    }, false);
  }
}, false);
