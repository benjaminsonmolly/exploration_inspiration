document.addEventListener('DOMContentLoaded', function() {
  var inspireButton = document.getElementById('inspire');
  var inspirationArray = [
    'Go get a coffee.', 'Do the same step twice.', 'Use a different file format.', 'Screenrecord your process.'
  ];
  if(inspireButton){
    inspireButton.addEventListener('click', function() {
      var random = inspirationArray[Math.floor(Math.random()*inspirationArray.length)];
      document.getElementById("result").innerHTML = random
    }, false);
  }
}, false);
