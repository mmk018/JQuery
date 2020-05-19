$(document).ready(function() {
    console.log('Page loaded');

    let chooseTour = $('.main_btna'),
        getConsult = $('.main_btn'),
        tourSchedule = $('nav ul li :eq(1)');//vozvrasaem nuznuju nam ssilku iz vsego
        console.log(chooseTour);
        console.log(getConsult);
        console.log(tourSchedule);
    let buttons = [];
    buttons[0] = chooseTour[0];
    buttons[1] = getConsult[0];
    buttons[2] = tourSchedule[0];
    console.log(buttons);
    let close = $('.close');

    
    
        
        
        $(buttons).on('click', function() {
            console.log('click');
            $('.overlay').fadeIn("slow");//etot method kak display block v css
            $('.modal').slideDown(1000);


            
        });

        $(close).on('click', function () {
            $('.modal').slideUp(1000);
            $('.overlay').fadeOut("slow");

        });
    
});