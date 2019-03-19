document.addEventListener('DOMContentLoaded', function() {
  var inspireButton = document.getElementById('inspire');
  var inspirationArray = [
    'Go get a coffee.', 'Do the same step twice.', 'Use a different file format.', 'Screenrecord your process.', 'Resize your browser window.', 'Invert all the colors.', 'Click every button three times in a row.'
  ];
  if(inspireButton){
    inspireButton.addEventListener('click', function() {
      var random = inspirationArray[Math.floor(Math.random()*inspirationArray.length)];
      document.getElementById("result").innerHTML = random
    }, false);
  }
}, false);
