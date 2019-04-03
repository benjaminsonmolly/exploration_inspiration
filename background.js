document.addEventListener('DOMContentLoaded', function() {
  var inspireButton = document.getElementById('inspire');
  var inspirationOne = [
    'Go', 'Do', 'Use', 'Record', 'Resize', 'Invert', 'Click'
  ];
  var inspirationTwo = [
    ' the', ' your', ' a'
  ];
  var inspirationThree = [
    ' imagination.', ' same step twice.', ' different file format.', ' process.', ' browser window.', ' colors.', ' button three times.'
  ];
  if(inspireButton){
    inspireButton.addEventListener('click', function() {
      var randomOne = inspirationOne[Math.floor(Math.random()*inspirationOne.length)];
      var randomTwo = inspirationTwo[Math.floor(Math.random()*inspirationTwo.length)];
      var randomThree = inspirationThree[Math.floor(Math.random()*inspirationThree.length)];
      document.getElementById("result").innerHTML = randomOne + randomTwo + randomThree;
    }, false);
  }
}, false);
