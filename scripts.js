let options = ["Rock", "Paper", "Scissors"]

var option = 0

var counter = 5;
var selection = 0

var randomValue = options[Math.floor(Math.random() * options.length)];

document.getElementById("rock-btn").addEventListener("click", function() {
    selection = options[0];
    document.getElementById('h3-ourSelection').innerHTML = 'Your selection is: ' + selection;
    
    var img = document.createElement('img');
    img.src = '/img/rock.jpg';
    document.getElementById('h3-ourSelection').appendChild(img);
  });
  
  document.getElementById("paper-btn").addEventListener("click", function() {
    selection = options[1];
    document.getElementById('h3-ourSelection').innerHTML = 'Your selection is: ' + selection;

    var img = document.createElement('img');
    img.src = '/img/paper.jpg';
    document.getElementById('h3-ourSelection').appendChild(img);
  });
  
  document.getElementById("scissors-btn").addEventListener("click", function() {
    selection = options[2];
    document.getElementById('h3-ourSelection').innerHTML = 'Your selection is: ' + selection;

    var img = document.createElement('img');
    img.src = '/img/scissors.jpg';
    document.getElementById('h3-ourSelection').appendChild(img);
  });

var interval = setInterval(function() {
  counter--;
  document.getElementById("counter").innerHTML = "<h2><strong>The game Starts in </strong></h2>" + "<h2><strong>" + counter + "</strong></h2>" + "<h2><strong> seconds </strong></h2>";
  if (counter === 0) {
    clearInterval(interval);
    //alert("¡Counter Done!");
    //console.log("Your selection is: " + selection + " Enemy Selection is: " + randomValue ) 

    var img = document.createElement('img');

    if (randomValue == 'Rock') {
    img.src = '/img/rock.jpg';
    } else if (randomValue == 'Paper') {
    img.src = '/img/paper.jpg';
    } else if (randomValue == 'Scissors') {
    img.src = '/img/scissors.jpg';
    }

    document.getElementById('h3-enemy').innerHTML = 'Enemy Selection is: ' + randomValue;
    document.getElementById('h3-enemy').appendChild(img);


    if (selection === randomValue) {
        setTimeout(function() {
          alert("¡Empate!");
        }, 1000);
      } else if (
        (selection === "Rock" && randomValue === "Scissors") ||
        (selection === "Paper" && randomValue === "Rock") ||
        (selection === "Scissors" && randomValue === "Paper")
      ) {
        setTimeout(function() {
          alert("¡You Won!");
        }, 1000);
      } else {
        setTimeout(function() {
          alert("¡You Lose!");
        }, 1000);
      }
    
  }


}, 1000);




