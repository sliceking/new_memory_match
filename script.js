$(document).ready(function(){
    append_card_backs();

});

function append_card_backs(){
    for (var i=0;i<18;i++){
        var card_fronts=['images/bill.png','images/bill.png','images/dipper.png','images/dipper.png','images/ford.png','images/ford.png','images/gideon.png','images/gideon.png','images/gnome.png','images/gnome.png','images/mabel.jpg','images/mabel.jpg','images/soos.png','images/soos.png','images/unclestan.png','images/unclestan.png','images/wendy.png','images/wendy.png'];
        var game_area = $('.game_area');
        var card_div = $('<div>',{
            class:'card'
        });
        var card_back = $('<img>',{
            src:'images/cardBack.jpg'
        });
        var card_front = $('<img>',{
            src:card_fronts[i],
            class:'card_front'
        })
        $(card_div).append(card_front);
        $(card_div).append(card_back);
        $(game_area).append(card_div);
    }
}
