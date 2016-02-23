//var first_card_clicked=null;
//var second_card_clicked=null;
//var c=null;
//var d=null;
//var total_possible_matches=9;
//var match_counter=0;
//var attempts=0;
//var clickable=true;
//var gamesPlayed=0;
//var count=45;
//var bonus1=0;
//this is the card flip function that leads  into the compare cards function
var countDownId=null;

$(document).ready(function(){
    $('#button18cards').click(function(){
        var game18 = new game_board(18);
        game18.appendGameBoardStructure();
    });
    $('#button10cards').click(function(){
        var game10 = new game_board(10);
        game10.appendGameBoardStructure();
    })
});

var game_board = function(cardAmount){
    this.cardAmount = cardAmount;
    this.firstCardClicked=null;
    this.secondCardClicked=null;
    this.firstCardElement=null;
    this.secondCardElement=null;
    this.totalPossibleMatches=null;
    this.attempts=0;
    this.cardsClickable=true;
    this.gamesPlayed=0;
    this.timerCounter=60;
    this.startCountdown= function(){
        countDownId = setInterval(this.countdown(),1000);
    };
    this.countdown = function(){
        if (this.timerCounter > 0){
            this.timerCounter = this.timerCounter - 1;
        $('.timer .value').text(this.timerCounter);
    } else{
        clearInterval(countDownId);
        $('.timer .value').effect('highlight');
    }
    };
    this.bonus=0;
    this.appendGameBoardStructure=function(){
        $('.new_board_selector').hide('clip');
        var newGame = $('<section>',{
            class:"game-area floater"
        });
        var containerDiv = $("<div>",{
            class:"container-fluid"
        });
        var gameRow = $('<div>',{
            class:"row"
        });
        $('body').append(newGame);
        newGame.append(containerDiv);
        containerDiv.append(gameRow).append(gameRow).append(gameRow);
        this.startCountdown();
    };

};

var game_card = function(){
    this.cardFront = null;
    this.cardBack = null;
    this.DOMelement = null;

};

//$(document).ready(function(){
//    $('.back').addClass('notFlipped');
//    randomCards();
//    startCountdown();
//    $('.back').prev().addClass('front');
//    $('.back').click(function(){
//        if(count != 0){
//            if(clickable==true){
//                $(this).hide();
//                if(first_card_clicked===null){
//                    first_card_clicked=$(this).prev().attr('src');
//                    c=$(this);
//                } else {
//                    clickable = false;
//                    second_card_clicked=$(this).prev().attr('src');
//                    d = $(this);
//                    compare(first_card_clicked,second_card_clicked);
//                    first_card_clicked=null;
//                    second_card_clicked=null;
//                    c=null;
//                    d=null;
//                    setTimeout(function(){
//                        clickable = true;
//                    },1000);
//                }
//            }
//        } else{
//            $('.timer .value').effect('highlight');
//        }
//    });
//    //$('button').click(function(){
//    //    resetButton();
//    //});
//});
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
    $('img.front').remove();
    randomCards();
    $('.back').prev().addClass('front');
    first_card_clicked=null;
    second_card_clicked=null;
    c=null;
    d=null;
    $('.display').hide();
    $('.back').addClass('notFlipped');
    $('.back').show();
    match_counter = 0;
    attempts = 0;
    bonus1 = 0;
    attemptDisplay();
    accuracyDisplay();
    $('.timer .value').text('45');
    clearInterval(countdownId);
    count=45;
    startCountdown();
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
//function startCountdown(){
//    countdownId = setInterval('countdown()',1000);
//}
//function countdown(){
//    if (count > 0){
//        count = count - 1;
//        $('.timer .value').text(count);
//    } else{
//        clearInterval(countdownId);
//        $('.timer .value').effect('highlight');
//    }
//}
//this controls the bonus display
function bonusDisplay(a){
    $('.bonus h1').text(a);
    $('.bonus').show();
    setTimeout(function(){
        $('.bonus').hide();
    },1500);
}