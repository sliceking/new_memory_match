

var first_card_clicked=null;
var second_card_clicked=null;
var c=null;
var d=null;
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

function compare(a,b){
    if(a==b){
        console.log('match');
        $(c).removeClass('notFlipped');
        $(d).removeClass('notFlipped');
    }else{
        console.log('no match');
        $('.notFlipped').show();
    }
}

