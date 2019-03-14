document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  if(checkPageButton){
    checkPageButton.addEventListener('click', function() {
      alert("You've been inspired.");
    }, false);
  }
}, false);
