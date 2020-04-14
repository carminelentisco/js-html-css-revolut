jQuery(document).ready( function($) {

    console.log('JS');
    var dropDown = $('.menu-list-right .with-dropdown');
    var dropLink = dropDown.children('a'); // link menù
    var subMenu = dropDown.children('.submenu'); // Sotto menù

    dropLink.click(function (event) { 
        
        event.preventDefault(); // Per bloccare il flusso

        var actualMenu = $(this).next('.submenu');

        actualMenu.toggle();

    });

}); // <--- End Page