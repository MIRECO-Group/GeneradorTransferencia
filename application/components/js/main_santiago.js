$(document).ready(function ()
{
    $(".blackout, .popup").hide();


    $('button').click(function()
    {
        $('.blackout, .popup').fadeIn("fast");
    });

    $(".blackout, .popup").click(function()
    {
        $(".blackout, .popup").fadeOut("fast");
    });
});
