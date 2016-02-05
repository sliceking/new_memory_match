var first_card_clicked=null;
var second_card_clicked=null;
var c=null;
var d=null;
var total_possible_matches=9;
var match_counter=0;
var attempts=0;
var clickable=true;
var gamesPlayed=0;
var count=45;
var bonus1=0;
//this is the card flip function that leads  into the compare cards function
$(document).ready(function(){
    $('.back').addClass('notFlipped');
    randomCards();
    startCountdown();
    $('.back').prev().addClass('front');
    $('.back').click(function(){
        if(count != 0){
            if(clickable==true){
                $(this).hide();
                if(first_card_clicked===null){
                    first_card_clicked=$(this).prev().attr('src');
                    c=$(this);
                } else {
                    clickable = false;
                    second_card_clicked=$(this).prev().attr('src');
                    d = $(this);
                    compare(first_card_clicked,second_card_clicked);
                    first_card_clicked=null;
                    second_card_clicked=null;
                    c=null;
                    d=null;
                    setTimeout(function(){
                        clickable = true;
                    },1000);
                }
            }
        } else{
            $('.timer .value').effect('highlight');
        }
    });
    $('button').click(function(){
        resetButton();
    });
});
//this function compares the 2 selected cards and determines if they match or not and increment the match counter and attempts counter
function compare(a,b){
    if(a==b){
        $(c).removeClass('notFlipped');
        $(d).removeClass('notFlipped');
        match_counter++;
        attempts++;
        attemptDisplay();
        matchDisplay();
        accuracyDisplay();
        if(bonus1 == 0 && match_counter == 4){
            count = count+5;
            bonusDisplay('5 Second Bonus!');
            bonus1++;
        }
    }else{
        attempts++;
        attemptDisplay();
        failDisplay();
        accuracyDisplay();
        setTimeout(function(){
            $('.notFlipped').show();
        }, 1000);
    }
}
//this function will display a fail message when a non-match happens
function failDisplay(){
    $('.display h1').text(randomFail());
    $('.display').show();
    setTimeout(function(){
        $('.display').hide();
    },1000);
}
//this function contains and returns the negative messages when a non-match happens
function randomFail(){
    var content =['Super Fail.','Are you stupid or something?','That was definitely wrong.','You\'re REALLY good at being Wrong.','Bad Guess.'];
    var i = Math.floor(Math.random()*5);
    return content[i];
}
//this function displays if the user has a matched pair and does a win check
function matchDisplay(){
    if (match_counter == total_possible_matches){
        gamesPlayed++;
        gamesPlayedDisplay();
        $('.display h1').text('You Win!!');
        $('.display').show();
        $('button').effect('pulsate');
    } else{
    $('.display h1').text(randomMatch());
    $('.display').show();
    setTimeout(function(){
        $('.display').hide();
    },1000);
    }
}
//this function contains and returns the positive messages when a match happens
function randomMatch(){
    var content = ['Nice Match!','Great!','You\'re Really Good at Remembering Stuff!','Amazing!','Good Job!'];
    var i = Math.floor(Math.random()*5);
    return content[i];
}

//this function control the reset button to show all backs of the cards
function resetButton(){
    //dan start
    //finds all the front card pictures and removes them from the DOM
    //this function randomizes and places the front card pictures back on the game board
    //adds a back class to all the newly placed front card pictures that aid in targeting
    //this resets a variable that flags if a card was already picked before the reset button is pressed
    //this resets a variable that flags if the 2nd card was already picked before the reset button is pressed
    //this resets a variable marker of the location of the first card clicked
    //this resets a variable marker of the location of the second card clicked
    //this removes the match or fail or win displays from the screen
    //this adds a class to the backs of all the cards. This helps the proper cards flip back over if 2 cards do not match, instead of flipping all the cards back over
    //this displays all the backs of the cards, so that none of the card fronts are showing
    //this resets the amount of matches a person has in a round variable
    //this resets the amount of attempted matches a person makes in a round variable
    //this resets the 4 match bonus variable
    //this function updates the display for the amount of attempts
    //this function updates the display for the accuracy of the player (matches/attempts)
    //this resets the timer display text back to 45 seconds
    //this stops the interval that runs the timer
    //this resets the variable counter for the timer back to 45 seconds
    //this function starts the counter

    //dan end
}
//this function changes the attempts text
function attemptDisplay(){
    $('.attempts .value').text(attempts);
}
//this function changes the games played text
function gamesPlayedDisplay(){
    $('.games-played .value').text(gamesPlayed);
}
//this function changes the accuracy display and takes /0 into account
function accuracyDisplay(){
    $('.accuracy .value').text(function(){
        if (attempts == 0){
            return 0;
        } else {
            return parseInt((match_counter/attempts)*100) + "%";
        }
    });
}
//this function applies the randomized cards to the right position
function randomCards(){
    var a = '<img src="images/bill.png">';
    var b = '<img src="images/dipper.png">';
    var c = '<img src="images/ford.png">';
    var d = '<img src="images/gideon.png">';
    var e = '<img src="images/gnome.png">';
    var f = '<img src="images/mabel.jpg">';
    var g = '<img src="images/soos.png">';
    var h = '<img src="images/unclestan.png">';
    var i = '<img src="images/wendy.png">';
    var pictureArray = [a,a,b,b,c,c,d,d,e,e,f,f,g,g,h,h,i,i];
    shuffleArray(pictureArray);
    shuffleArray(pictureArray);
    shuffleArray(pictureArray);
    for(i=0;i<pictureArray.length;i++){
        var x = '#'+(i+1);
        $(x).prepend(pictureArray[i]);
    }
}
//this function randomized the cards in the array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//heres the countdown timer
function startCountdown(){
    countdownId = setInterval('countdown()',1000);
}
function countdown(){
    if (count > 0){
        count = count - 1;
        $('.timer .value').text(count);
    } else{
        clearInterval(countdownId);
        $('.timer .value').effect('highlight');
    }
}
//this controls the bonus display
function bonusDisplay(a){
    $('.bonus h1').text(a);
    $('.bonus').show();
    setTimeout(function(){
        $('.bonus').hide();
    },1500);
}