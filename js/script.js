$(document).ready(function() {
    /* pokaż menu */
    $('.btn-togglemenu').click(function(event) {
        event.preventDefault();
        $('.megamenu').animate({
            width: "toggle"
        });
        $('.btn-togglemenu span').toggle();
    });

   
    /* submenu */
    $('.sub-item').click(function(event) {
        event.preventDefault();
        var id = $(this).attr('data-id');
        $.ajax({
            method: 'get',
            url: 'content/content' + id + '.html',
            success: function(data) {
                    $('.sub-menu-content').html(data);
            }
        })
    })
});