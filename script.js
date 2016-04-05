var first_card=null;
var second_card=null;
$(document).ready(function(){
    append_card_backs();

    $('.card_back').click(function(){
        show_card(this);
    })
});

function append_card_backs(){
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
    var inside = $(card).prev().attr('src');
    console.log(inside);
    $(card).hide();
    console.log('show card fired');
    compare_cards(inside);
}
function compare_cards(card){
    if (first_card == null){
        first_card = card;
    }else if(second_card == null) {
        second_card = card;
        if (first_card == second_card) {
            console.log('cards match');
            first_card = null;
            second_card = null;
        } else {
            console.log('cards dont match');
            first_card = null;
            second_card = null;
        }
    }
}
