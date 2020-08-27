// custom java script and jquery
$(document).ready(function(){

	// flash messages slide up
    $(".flash-area").delay(2500).slideUp(300);

    // when 'my orders' button clicked on profile page
    $('#button_orders').click(function(){
        //show or hide (toggle) orders table
        $('#orders_hidden').slideToggle();
        // if page is at top scroll down a little
        if($(window).scrollTop() === 0) {
            $('html,body').animate({
               scrollTop: $(window).scrollTop() + 120
            });                 
        }
        // toggle 'my orders' and 'hide orders' accordingly
        if($(this).html() == 'see orders'){
            $('#button_orders').html('hide orders');
        }else{
            $('#button_orders').html('see orders');
        }
    });
    
});