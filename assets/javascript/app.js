
$(document).ready(function() {

    var yourMatchingNumber = 0;
    var randomNum = randomNumGen();
    var wins = 0;
    var losses = 0;
    var currentScore = 0;
    var targetScore = 0;

    var crystals = {
  
        multi: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/multipurple.png"
        },
        orange: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/multiorange.png"
        },
        gold: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/gold.jpeg"
        },
        purple: {
          points: Math.floor(Math.random() * 12) + 1,
          imageUrl: "assets/images/softpurple.png"
        }
      };

   

    var getRandom = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      var startGame = function() {
        currentScore = 0; 
        $("#your-score").text(currentScore);
        $("#target-score").text(targetScore);      
      


      crystal.multi.value = getRandom(1, 12);
      crystal.orange.value = getRandom(1, 12);
      crystal.gold.value = getRandom(1, 12);
      crystal.purple.value = getRandom(1, 12);
    

      startGame();

      $("#multi").click(function() {
        addValues(crystal.multi);
      });
      
      $("#gold").click(function() {
        addValues(crystal.gold);
      });
      
      $("#purple").click(function() {
        addValues(crystal.purple);
      });
      
      $("#orange").click(function() {
        addValues(crystal.orange);
      });

      
      var checkWin = function() {


        if (currentScore > targetScore) {
          alert("Sorry. You lost!");
          console.log("You Lost");
      
          lossCount++;
    
          $("#loss-area").text(lossCount);
          startGame();
        }
      
        else if (currentScore === targetScore) {
            alert("Congratulations! You Won!");
        console.log("You Won!");
            winCount++;
            $("#win-area").text(winCount);
            startGame();
          }
        
        };
    
