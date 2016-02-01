var first_card_clicked=null;
var second_card_clicked=null;
var c=null;
var d=null;
var total_possible_matches=9;
var match_counter=0;
var attempts=0;
var clickable=true;
//this is the card flip function that leads  into the compare cards function
$(document).ready(function(){
    $('.back').addClass('notFlipped');
    $('.back').click(function(){
        if(clickable==true){
            $(this).hide();
            if(first_card_clicked===null){
                first_card_clicked=$(this).prev().first().attr('src');
                console.log('first card clicked',first_card_clicked);
                c=$(this);
            } else {
                clickable = false;
                second_card_clicked=$(this).prev().first().attr('src');
                console.log('this is card 2',second_card_clicked);
                d = $(this);
                compare(first_card_clicked,second_card_clicked);
                first_card_clicked=null;
                second_card_clicked=null;
                console.log(first_card_clicked,second_card_clicked);
                c=null;
                d=null;
                setTimeout(function(){
                    clickable = true;
                },1000);
                console.log(c,d);
            }

        }
    });
    $('button').click(function(){
        resetButton();
        console.log('reset sent');
    });
});
//this function compares the 2 selected cards and determines if they match or not and increment the match counter and attempts counter
function compare(a,b){
    if(a==b){
        console.log('match');
        $(c).removeClass('notFlipped');
        $(d).removeClass('notFlipped');
        match_counter++;
        attempts++;
        attemptDisplay();
        matchDisplay();
        accuracyDisplay();
    }else{
        console.log('no match');
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
        $('.display h1').text('You Win!!');
        $('.display').show();
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
    $('.display').hide();
    console.log('reset recieved');
    $('.back').show();
    match_counter = 0;
    attempts = 0;
    attemptDisplay();
    accuracyDisplay();
}
//this function changes the attempts text
function attemptDisplay(){
    $('.attempts .value').text(attempts);
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

