var first_card=null; //global variable to track a clicked card
var second_card=null; //global variable to track a second clicked card
$(document).ready(function(){
    append_cards_to_gameboard(); //appends cards to the gameboard
    $('.card_back').click(function(){ //on clicking the back of the card it fires the show card function
        show_card(this);
    })
});

function append_cards_to_gameboard(){
    for (var i=0;i<18;i++){
        var card_fronts=['images/bill.png','images/bill.png','images/dipper.png','images/dipper.png','images/ford.png','images/ford.png','images/gideon.png','images/gideon.png','images/gnome.png','images/gnome.png','images/mabel.jpg','images/mabel.jpg','images/soos.png','images/soos.png','images/unclestan.png','images/unclestan.png','images/wendy.png','images/wendy.png'];
        var game_area = $('.game_area');
        var card_div = $('<div>',{
            class:'card'
        });
        var card_back = $('<img>',{
            src:'images/cardBack.jpg',
            class:'card_back'
        });
        var card_front = $('<img>',{
            src:card_fronts[i],
            class:'card_front'
        });
        $(card_div).append(card_front);
        $(card_div).append(card_back);
        $(game_area).append(card_div);
    }
}
function show_card(card){
    var inside = $(card).prev(); //variable stores the information about the front of the card
    $(card).hide(); //hides the back of the card
    console.log('show card fired');
    compare_cards(inside); //uses the front of the card as a parameter to pass into the compare cards func
}
function compare_cards(card){
    if (first_card == null){
        first_card = card; // if the first_card variable is null, it sets first_card to the card clicked
    }else if(second_card == null) {
        second_card = card; // if the second_card variable is null, it sets second_card to the card clicked
        if (first_card.attr('src') == second_card.attr('src')) {
            cards_match(); // if the src attribute on both cards match, the cards match function is fired
        } else {
            cards_dont_match(); // if the src attribute on both cards dont match, the cards_dont_match function is fired
        }
    }
}

function cards_match(){
    console.log('cards match');
    var score = $('#score').text();
    score = Number(score);
    score += 10;
    $('#score').text(score);
    console.log(score);
    first_card.next().removeClass('card_back');
    second_card.next().removeClass('card_back');
    first_card = null;
    second_card = null;
}

function cards_dont_match(){
    console.log('cards dont match');
    setTimeout(function(){
        $('.card_back').show();
    },1000);
    first_card = null;
    second_card = null;
}
