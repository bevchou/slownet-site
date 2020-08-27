

window.addEventListener('load', function () {

  console.log('hey ;)');

  let zine = document.getElementById('zine');

  //allow user to scroll w/ arrow keys  
  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 39) {
      zine.scrollBy(100, 0);
    } else if (e.keyCode === 37) {
      zine.scrollBy(-100, 0);
    }
  });

  //save content
  let originalContent = zine.innerHTML;

  //create warning message
  let offlineWarn = document.createElement("DIV");
  for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
      offlineWarn.innerHTML += "<div class='warn'>GO OFFLINE TO READ!</div>";
    } else {
      offlineWarn.innerHTML += "<div class='warn'>TURN OFF YOUR WI-FI!</div>";
    }
  }
  offlineWarn.style.paddingTop = "40px";

  //hide content if user is connect to wifi
  if (navigator.onLine) {
    zine.innerHTML = "";
    zine.appendChild(offlineWarn);
  }
  window.addEventListener('online', function () {
    console.log('turn off your wifi (:');
    zine.innerHTML = "";
    zine.appendChild(offlineWarn);
  });

  //show content if user is offline
  window.addEventListener('offline', function () {
    console.log('read on!');
    zine.innerHTML = originalContent;
  });
});

