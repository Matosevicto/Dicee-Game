
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    
    var randomDiceImage1 ="dice" + randomNumber1 + ".png";

    var randomImageSource1 = "images/" + randomDiceImage1; 

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource1);

    var randomNumber2 = Math.floor(Math.random()*6)+1;

    var randomDiceImage2 ="dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomDiceImage2;

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);

    var winner = document.getElementById("winner");

    if(randomNumber1 > randomNumber2){
        
        winner.textContent = "Player 1 is winner!";
    }
    else if (randomNumber1 < randomNumber2){

        winner.textContent = "Player 2 is winner!";

    }
    else if(randomNumber1 === randomNumber2){
        winner.textContent = "Game is tie";
    }



    
    
    
    
    
    







    /*if (randomNumber1 = 1) {
        document.querySelector("img").setAttribute("images\dice1.png")
    }
    else if(randomNumber1 = 2) {
        document.querySelector("img").setAttribute("images\dice2.png")
    }
    else if(randomNumber1 = 3) {
        document.querySelector("img").setAttribute("images\dice3.png")
    }
    else if(randomNumber1 = 4) {
        document.querySelector("img").setAttribute("images\dice4.png")
    }
    else if(randomNumber1 = 5) {
        document.querySelector("img").setAttribute("images\dice5.png")
    }
    else if(randomNumber1 = 6) {
        document.querySelector("img").setAttribute("images\dice6.png")
    }*/



//console.log(randomNumber1);
