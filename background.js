document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  var inspirationArray = [
    'Getting a coffee.', 'Doing the same step twice.', 'Using a different file format.', 'Screenrecording your process.'
  ];
  if(checkPageButton){
    checkPageButton.addEventListener('click', function() {
      var random = inspirationArray[Math.floor(Math.random()*inspirationArray.length)];
      alert(random);
    }, false);
  }
}, false);
