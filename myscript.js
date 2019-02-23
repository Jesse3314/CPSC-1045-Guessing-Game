//Group 1, CPSC 1045-002, Group Project

var currentQuestion; //This variable keeps track of the question the user needs to answer.
var stage; //This variable indicates at which step we're while drawing an image
var hintsUsed; // Number of hints used in a question
var attemptsToAnswer; // Number of times the user tried to answer a question (MAX 3)

var totalPoints; //This variable will calculate the total points that user gets.
var answerList = ["six","england","brazil","mario","mouse","icecream","ladybug","robot", "dubai", "d3h26j1"]; //This array contains the answer to the 10 questions.
var questionsPoints = [50, 50, 50, 100, 100, 100, 100, 100, 175, 175];
var xPos = 400; //This variable sets the position of the image from question 10
var yPos = 250; //This variable sets the position of the image from question 10

//This function will save the user's name from index1.html and store it.
function saveUserName() {
  var userName = document.getElementById("userName1").value;
  window.localStorage.setItem("userName", userName);
}

//This function will get the user's name from the storage and return it.
function getUserName() {
  var userName = window.localStorage.getItem("userName");
  return userName;
}

//This function will run when the user clicks on "Start Game".
//It will call saveUserName() to store the user's name and go to the next hmtl page with questions.
function startGame() {
  saveUserName();
  window.location.href = 'index2.html';
}

//This function will run automatically when index2.html finishes loading.
//It will call showQuestion() and show the first question.
function setup() {
  var userName = getUserName();
  totalPoints = 0;

  //This variable will contain an array with the levels1 of the game.
  var levelButtons1 = document.getElementsByClassName("level1");
  //This loop will go throught the array of levels 1.
  for (var i = 0; i < levelButtons1.length; i++) {
    levelButtons1[i].addEventListener('click', alertLevel1);
  }

  //This variable will contain an array with the levels2 of the game.
  var levelButtons2 = document.getElementsByClassName("level2");
  //This loop will go throught the array of levels 1.
  for (var i = 0; i < levelButtons2.length; i++) {
    levelButtons2[i].addEventListener('click', alertLevel2);
  }

  var levelButtons3 = document.getElementsByClassName("level3");
  //This loop will go throught the array of levels 1.
  for (var i = 0; i < levelButtons3.length; i++) {
    levelButtons3[i].addEventListener('click', alertLevel3);
  }

  currentQuestion = 0;
  attemptsToAnswer = 0;
  numHintsUsed = 0;

  showQuestion(currentQuestion);
}

//This function will show an alert box with information about level 1.
function alertLevel1() {
  alert("You are on the Level 1 of the game.\nThis level has 3 questions and no hints because it is the easiest level.\nGood luck!")
}

//This function will show an alert box with information about level 2.
function alertLevel2() {
  alert("Congratulations, you are on the Level 2 of the game!\nThis level has 5 questions and some of them have hints.\nWhen available, you will see a button named Hint.\nGood luck!");
}

//This function will show an alert box with information about level 3.
function alertLevel3() {
  alert("Congratulations, you are on the Level 3 of the game!\nThis is the last level and it has 2 questions and 1 hint!.\nGood job, you are almost done!");
}

//This function will show the question with the ID "question" + question number.
function showQuestion(questionNumber) {
  var question = document.getElementById("question" + questionNumber);
  question.style.display = "block";

  stage = 0;
  hintsUsed = 0;

  // Question setup
  switch (questionNumber) {
    case 3:
      marioShadow();
      break;
    case 4:
      drawMouse(stage);
      stage++;
      break;
    case 5:
      drawIceCream(stage);
      stage++;
      break;
    case 6:
      drawLadybug(stage);
      stage++;
      break;
    case 7:
      drawRobot(stage);
      stage++;
      break;
    case 9:
      drawSquares();
      onloadImage(400,250);
      break;
    case 10:
      var userName = getUserName();
      document.getElementById("showUserName").innerHTML = userName;
      document.getElementById("totalPoints").innerHTML = parseFloat(totalPoints).toFixed(0);
  }
}

//This function will hide the question with the ID "question" + question number.
function hideQuestion(questionNumber) {
  var question = document.getElementById("question" + questionNumber);
  question.style.display = "none";
}

//This function will draw a picture of Mario behind a shadow
function marioShadow(){
    var canvas = document.getElementById("myCanvas3");
    var ctx = canvas.getContext("2d");
    var heroImage = new Image();
    heroImage.src = "images/Shadow_Mario.jpg";//shadow image
    heroImage.onload = function() { //image for guessing
      ctx.drawImage(heroImage, 120, 0);
    }
}

//This function will show a hint in question 4 when the user clicks on the button hint
function hintQ3() {
  var canvas = document.getElementById("myCanvas3");
  var ctx = canvas.getContext("2d");
  var heroImage = new Image();
  heroImage.src = "images/mariohint.png";
  heroImage.onload = function() {
    ctx.drawImage(heroImage, 470, 150);
  }

  // Increase hints used
  hintsUsed++;

  // Disable button
  document.getElementById("hintQ3").disabled = true;
}

//This function will call the drawMouse(stage) and show the image step by step
function draw4() {
  drawMouse(stage);
  stage++;

  // Increase hints used
  hintsUsed++;
}

//This function will draw a mouse for question 5
function drawMouse(stage) {
  var canvas = document.getElementById("myCanvas4");
  var ctx = canvas.getContext("2d");

  switch (stage) {
    case 0:
      //face
      ctx.beginPath();
      ctx.arc(400, 200, 60, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#838783";
      ctx.stroke();
      ctx.fillStyle="#838783";
      ctx.fill();
      //right-eye
      ctx.beginPath();
      ctx.arc(380, 180, 6, 0, (Math.PI/180)*360);
      ctx.strokeStyle="white";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(380, 180, 3, 0, (Math.PI/180)*360);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="black";
      ctx.fill();
      //left-eye
      ctx.beginPath();
      ctx.arc(420, 180, 6, 0, (Math.PI/180)*360);
      ctx.strokeStyle="white";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(420, 180, 3, 0, (Math.PI/180)*360);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="black";
      ctx.fill();
      break;
    case 1:
      //mouth
      ctx.beginPath();
      ctx.arc(400, 220, 22, 0, (1*Math.PI));
      ctx.strokeStyle="black";
      ctx.stroke();
      //ears
      ctx.beginPath();
      ctx.arc(360, 135, 25, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4D4F4D";
      ctx.stroke();
      ctx.fillStyle="#4D4F4D";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(440, 135, 25, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4D4F4D";
      ctx.stroke();
      ctx.fillStyle="#4D4F4D";
      ctx.fill();
      break;
    case 2:
      //nose
      ctx.beginPath();
      ctx.arc(400, 205, 3, 0, (Math.PI/180)*360);
      ctx.strokeStyle="black";
      ctx.stroke()
      ctx.fillStyle="black";
      ctx.fill();
      //whiskers
      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(345, 198);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(345, 205);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(345, 213);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(455, 198);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(455, 205);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(400, 205);
      ctx.lineTo(455, 213);
      ctx.strokeStyle="black";
      ctx.stroke();

      // Disable button
      document.getElementById("draw4").disabled = true;

      break;
  }
}

//This function will show a hint in question 4 when the user clicks on the button hint
function hintQ4() {
  var canvas = document.getElementById("myCanvas4");
  var ctx = canvas.getContext("2d");

  var heroImage = new Image();
  heroImage.src = "images/cheese.jpg";
  heroImage.onload = function() {
    ctx.drawImage(heroImage, 510, 130);
  }

  // Increase hints used
  hintsUsed++;

  // Disable button
  document.getElementById("hintQ4").disabled = true;
}

//This function will call the drawIceCream(stage) and show the image step by step
function draw5() {
  drawIceCream(stage);
  stage++;

  // Increase hints used
  hintsUsed++;
}

//This function will draw an ice cream for question 5
function drawIceCream(stage) {
  var canvas = document.getElementById("myCanvas5");
  var ctx = canvas.getContext("2d");

  switch (stage) {
    case 0:
      //chocolate scoop
      ctx.beginPath();
      ctx.arc(400, 117, 40, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4A3831";
      ctx.stroke();
      ctx.fillStyle="#4A3831";
      ctx.fill();
      //strawberry scoop
      ctx.beginPath();
      ctx.arc(357, 170, 42, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#F582B2";
      ctx.stroke();
      ctx.fillStyle="#F582B2";
      ctx.fill();
      //blueberry scoop
      ctx.beginPath();
      ctx.arc(440, 170, 43, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#682685";
      ctx.stroke();
      ctx.fillStyle="#682685";
      ctx.fill();
      break;
    case 1:
      //cone rows
      ctx.beginPath();
      ctx.arc(355, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(385, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(415, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(445, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(370, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(400, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(430, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(385, 280, 14, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(413, 280, 14, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      break;
    case 2:
      //cone
      ctx.beginPath();
      ctx.moveTo(320, 190);
      ctx.lineTo(400, 335);
      ctx.lineTo(480, 190);
      ctx.fillStyle="#BA9658";
      ctx.fill();
      ctx.fillStyle="#BA9658";
      //cone rows
      ctx.beginPath();
      ctx.arc(355, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(385, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(415, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(445, 220, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(370, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(400, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(430, 250, 15, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(385, 280, 14, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(413, 280, 14, 0, (1*Math.PI));
      ctx.strokeStyle="#6F4907";
      ctx.stroke();
      //chocolate scoop
      ctx.beginPath();
      ctx.arc(400, 117, 40, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4A3831";
      ctx.stroke();
      ctx.fillStyle="#4A3831";
      ctx.fill();
      //strawberry scoop
      ctx.beginPath();
      ctx.arc(357, 170, 42, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#F582B2";
      ctx.stroke();
      ctx.fillStyle="#F582B2";
      ctx.fill();
      //blueberry scoop
      ctx.beginPath();
      ctx.arc(440, 170, 43, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#682685";
      ctx.stroke();
      ctx.fillStyle="#682685";
      ctx.fill();

      // Disable button
      document.getElementById("draw5").disabled = true;

      break;
  }
}

//This function will call the drawLadybug(stage) and show the image step by step
function draw6() {
  drawLadybug(stage);
  stage++;

  // Increase hints used
  hintsUsed++;
}

//This function will draw a ladybug for question 6
function drawLadybug(stage) {
  var canvas = document.getElementById("myCanvas6");
  var ctx = canvas.getContext("2d");

  switch (stage) {
    case 0:
      //head
      ctx.beginPath();
      ctx.arc(400, 130, 25, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#black";
      ctx.stroke();
      ctx.fillStyle="#black";
      ctx.fill();
      //legs left
      ctx.beginPath();
      ctx.arc(347, 182, 20, 1*Math.PI, 1.5*Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(337, 210, 20, 1*Math.PI, 1.5*Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(340, 238, 17, 1*Math.PI, 1.5*Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();
      //legs right
      ctx.beginPath();
      ctx.arc(453, 182, 20, 0, 1.5*Math.PI, true);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(464, 210, 20, 0, 1.5*Math.PI, true);
      ctx.strokeStyle="black";
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(461, 238, 17, 0, 1.5*Math.PI, true);
      ctx.strokeStyle="black";
      ctx.stroke();
      break;
    case 1:
      //antenna
      ctx.beginPath();
      ctx.arc(415, 98, 13, 0.5*Math.PI, 1.5*Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(383, 98, 13, 0.5*Math.PI, 1.5*Math.PI, true);
      ctx.stroke();
      //black circles left
      ctx.beginPath();
      ctx.arc(365, 200, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(378, 170, 12, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(378, 230, 10, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();
      //black circles right
      ctx.beginPath();
      ctx.arc(435, 200, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(422, 170, 12, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(422, 230, 10, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();
      break;
    case 2:
      //body
      ctx.beginPath();
      ctx.arc(400, 200, 65, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#B20B0B";
      ctx.stroke();
      ctx.fillStyle="#B20B0B";
      ctx.fill();

      ctx.beginPath();
      ctx.lineTo(400, 150);
      ctx.lineTo(400, 250);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      //black circles left
      ctx.beginPath();
      ctx.arc(365, 200, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(378, 170, 12, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(378, 230, 10, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();
      //black circles right
      ctx.beginPath();
      ctx.arc(435, 200, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(422, 170, 12, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      ctx.beginPath();
      ctx.arc(422, 230, 10, 0, (Math.PI/180)*360);
      ctx.strokeStyle="#4C0505";
      ctx.stroke();
      ctx.fillStyle="#4C0505";
      ctx.fill();

      // Disable button
      document.getElementById("draw6").disabled = true;

      break;
  }
}

//This function will show a hint in question 6 when the user clicks on the button hint
function hintQ6() {
  var canvas = document.getElementById("myCanvas6");
  var ctx = canvas.getContext("2d");

  var heroImage = new Image();
  heroImage.src = "images/insect.png";
  heroImage.onload = function() {
    ctx.drawImage(heroImage, 520, 150);
  }

  // Increase hints used
  hintsUsed++;

  // Disable button
  document.getElementById("hintQ6").disabled = true;
}

//This function will call the drawRobot(stage) and show the image step by step
function draw7() {
  drawRobot(stage);
  stage++;

  // Increase hints used
  hintsUsed++;
}

//This function will draw a robot for question 7
function drawRobot(stage) {
  var canvas = document.getElementById("myCanvas7");
  var ctx = canvas.getContext("2d");

  switch (stage) {
    case 0:
      //face
      ctx.beginPath();
      ctx.fillStyle = "#636260"
      ctx.fillRect(300, 145, 200, 110);
      //right-ear
      ctx.beginPath();
      ctx.fillStyle = "#989E9B"
      ctx.fillRect(280, 187, 20, 30);
      //left-ear
      ctx.beginPath();
      ctx.fillStyle = "#989E9B"
      ctx.fillRect(500, 187, 20, 30);
      break;
    case 1:
      //left-eye
      ctx.beginPath();
      ctx.arc(365, 180, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="white";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(365, 180, 7, 0, (Math.PI/180)*360);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="black";
      ctx.fill();
      //right-eye
      ctx.beginPath();
      ctx.arc(435, 180, 15, 0, (Math.PI/180)*360);
      ctx.strokeStyle="white";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      ctx.beginPath();
      ctx.arc(435, 180, 7, 0, (Math.PI/180)*360);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="black";
      ctx.fill();
      //mouth part1
      ctx.beginPath();
      ctx.rect(360,220,15,15);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      ctx.beginPath();
      ctx.rect(420,220,15,15);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      break;
    case 2:
      //antenna
      ctx.beginPath();
      ctx.lineTo(400, 145);
      ctx.lineTo(450, 105);
      ctx.strokeStyle="#989E9B";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(450, 105, 8, 0, (2*Math.PI));
      ctx.strokeStyle="#989E9B";
      ctx.stroke();
      ctx.fillStyle="#989E9B";
      ctx.fill();
      //mouth part2
      ctx.beginPath();
      ctx.rect(380,220,15,15);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      ctx.beginPath();
      ctx.rect(400,220,15,15);
      ctx.strokeStyle="black";
      ctx.stroke();
      ctx.fillStyle="white";
      ctx.fill();
      // Disable button
      document.getElementById("draw7").disabled = true;

      break;
  }
}

//This function will show the hint for question 8
function draw8() {
  var canvas = document.getElementById("myCanvas8");
  var ctx = canvas.getContext("2d");
  var hintimage;
  var x = Math.floor(Math.random() * 20);
  var y = Math.floor(Math.random() * 20);

  // Increase hints used
  hintsUsed++;

  // Disable button
  document.getElementById("hintQ8").disabled = true;

  var hintanswer = prompt("There is no such a thing as free lunch! Answer the following equation to see the hint:\nWhat is "+x+" + "+y+"?");
    for (var i=1; i<10; i++) {
      if (hintanswer == x + y) {
        hintimage = new Image();
        hintimage.src = "images/dubai.jpg";
        hintimage.onload = function() {
          ctx.drawImage(hintimage,0,0);
         }
      } else {
          hintanswer = prompt("Wrong answer! What is "+x+" + "+y+"?");
      }
  }
}

//This function will draw the image of squares for question 9.
function drawSquares() {
  var canvas = document.getElementById("myCanvas9");
  var ctx = canvas.getContext("2d");
  ctx.save();
  ctx.translate(50,100);

  ctx.fillStyle="green";
  ctx.fillRect(0,0,80,80);

  ctx.fillStyle="blue";
  ctx.fillRect(90,0,80,80);

  ctx.fillStyle="pink";
  ctx.fillRect(180,0,80,80);

  ctx.fillStyle="violet";
  ctx.fillRect(270,0,80,80);

  ctx.fillStyle="red";
  ctx.fillRect(360,0,80,80);

  ctx.fillStyle="grey";
  ctx.fillRect(450,0,80,80);

  ctx.fillStyle="yellow";
  ctx.fillRect(540,0,80,80);

  ctx.fillStyle="orange";
  ctx.fillRect(630,0,80,80);
  ctx.restore();
}

//This function will show an image of a redBlock.
function onloadImage(xPos,yPos) {
  var canvas = document.getElementById("myCanvas9");
  var ctx = canvas.getContext("2d");

  var squareImage = new Image();
  squareImage.src = "images/redBlock.JPG";
  squareImage.onload = function() {
    ctx.drawImage(squareImage, xPos, yPos);
  }

  document.onkeydown = move;
}

//This function will allow the image redBlock to move when the user press the arrow key.
function move(event){
  var canvas = document.getElementById("myCanvas9");
  var ctx = canvas.getContext("2d");

   if (event.keyCode ==37 ) {
     xPos -= 10;
   } else if (event.keyCode == 38) {
     yPos -= 10;
   } else if (event.keyCode == 39) {
     xPos += 10;
   } else if (event.keyCode == 40) {
     yPos += 10;
   }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSquares();
  var squareImage = new Image();
  squareImage.src = "images/redBlock.JPG";
  ctx.drawImage(squareImage, xPos, yPos);
  outOfRange(xPos, yPos);
}

//This function will show a keyword inside the canvas when the user places the redBlock on top of the other squares.
function outOfRange(x, y) {
  var canvas = document.getElementById("myCanvas9");
  var ctx = canvas.getContext("2d");

  if (x==50 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("d3h26j1",500,250);
  }
  if (x==140 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("4h0c29d",500,250);
  }
  if (x==230 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("4js0jf4",500,250);
  }
  if (x==320 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("dfds90kd",500,250);
  }
  if (x==410 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("s0jl32l",500,250);
  }
  if (x==500 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("2ls0hr4",500,250);
  }
  if (x==590 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("as92ljs",500,250);
  }
  if (x==680 && y==100) {
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("da0l2js",500,250);
  }
}


// calculatePoints returns the number of points a player should receive for
// answering a question based on how much the question is worth, the number of
// attemps, and the number of hints used.
function calculatePoints(questionNumber, numAttemptsUsed, numHintsUsed) {
  // Calculate how many points the question is worth based on number of attempts
  var points = questionsPoints[questionNumber] / numAttemptsUsed;
  var percentageLost = numHintsUsed * 0.1

  var pointsScored = points * (1.0 - percentageLost)
  // console.log("Question ", questionNumber, ": ", pointsScored, " (attempts: ", numAttemptsUsed, "; hints: ", numHintsUsed, ")");

  return pointsScored;
}

//This function will check the user's answer, give points accordinly, and go to the next question
function submit() {
  var answer = document.getElementById("answer" + currentQuestion).value;

  if (isNaN(answer) == false) {
    alert("Wrong input. Please, type your answer using letters only.");
    return;
  }

  //Convert answer to lower case.
  answer = answer.toLowerCase();

  // Remove whitespaces
  answer = answer.trim();
  answer = answer.replace(/ +/g, "");

  attemptsToAnswer++;

  // console.log("Player's answer: ", answer);
  // console.log("Right answer: ", answerList[currentQuestion])

  var answerIsRight = (answer == answerList[currentQuestion]);

  // Check if answer is right
  if (answerIsRight) {
    // Calculate points
    totalPoints += calculatePoints(currentQuestion, attemptsToAnswer, hintsUsed);

    // Show message to user
    switch (attemptsToAnswer) {
      case 1:
        alert("Congratulations! You got the correct answer on your first try!");
        break;
      case 2:
        alert("Good job! You got the correct answer on the second try!");
        break;
      case 3:
        alert("Great! You got the correct answer!");
        break;
    }
  } else {
    // Answer is wrong; Show message to user
    switch (attemptsToAnswer) {
      case 1:
        alert("Sorry, wrong answer! Try again.");
        break;
      case 2:
        alert("Sorry, wrong answer! Try again but be careful: you only have 1 more chance!");
        break;
      case 3:
        alert("Sorry, this was your last chance and you got it wrong. You're out of luck!");
        break;
    }

  }

  if (answerIsRight || attemptsToAnswer == 3) {
    // Go to next question
    attemptsToAnswer = 0;
    hintsUsed = 0;
    nextQuestion(currentQuestion);
    currentQuestion++;
  }
}

//This function will hide and show the previous and next question when the user clicks the submit button.
function nextQuestion(question) {
    hideQuestion(question);
    question++;
    showQuestion(question);
    // return currentQuestion;
}
