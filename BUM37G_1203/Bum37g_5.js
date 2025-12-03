$(document).ready(function() {
    $('#remove-box').click(function() {
        $('#box').fadeOut();
    });

    $('#clear-div').click(function() {
        $('#box-content').text(''); 
    });
});
