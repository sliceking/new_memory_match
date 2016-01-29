

var first_card_clicked=null;
var second_card_clicked=null;
var c=null;
var d=null;
var total_possible_matches=9;
var match_counter=null;
var attempts=null;
//this is the card flip function that leads  into the compare cards function
$(document).ready(function(){
    $('.back').addClass('notFlipped');
    $('.back').click(function(){
        $(this).hide();
        if(first_card_clicked===null){
            first_card_clicked=$(this).prev().first().attr('src');
            console.log('first card clicked',first_card_clicked);
            c=$(this);
        } else {
            second_card_clicked=$(this).prev().first().attr('src');
            console.log('this is card 2',second_card_clicked);
            d = $(this);
            compare(first_card_clicked,second_card_clicked);
            first_card_clicked=null;
            second_card_clicked=null;
            console.log(first_card_clicked,second_card_clicked);
            c=null;
            d=null;
            console.log(c,d);
        }
    });
});

//this function compares the 2 selected cards and determines if they match or not and increment the match counter and attempts counter
function compare(a,b){
    if(a==b){
        console.log('match');
        $(c).removeClass('notFlipped');
        $(d).removeClass('notFlipped');
        match_counter++;
        matchDisplay();
    }else{
        console.log('no match');
        attempts++;
        failDisplay();
        setTimeout(function(){
            $('.notFlipped').show();
        }, 1000);
    }
}


function failDisplay(){
    $('.heading h1').text('Super Fail.');
    setTimeout(function(){
        $('.heading h1').text('Memory Match Mania!');
    },1000);
}

//this function displays if the user has a matched pair
function matchDisplay(){
    $('.heading h1').text('Nice Match!');
    setTimeout(function(){
        $('.heading h1').text('Memory Match Mania!');
    },1000);
    winCheck();
}

//this function comparees the match counter and total possible matches to display a win message
function winCheck(){
    if (match_counter == total_possible_matches){
        $('.heading h1').text('You\'re a Winner!');
    }
}

