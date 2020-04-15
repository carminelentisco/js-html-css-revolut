jQuery(document).ready( function($) {

    console.log('JS');
    var dropDown = $('.menu-list-right .with-dropdown');
    var dropLink = dropDown.children('a'); // link menù

    dropLink.click(function (event) { 
        
        $(this).parent().siblings().children('.submenu').hide();

        var actualMenu = $(this).next('.submenu');

        actualMenu.toggle();

    });

    $('.arrow').hover(

        function() {
            // mouse enter
            $('.fas').removeClass('fa-angle-down').addClass('fa-angle-up');
        },

        function() {
           // mouse leave
           $('.fas').removeClass('fa-angle-up').addClass('fa-angle-down');
        }

    );

}); // <--- End Page