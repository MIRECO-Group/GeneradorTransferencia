$(document).ready(function ()
{
    $("header > div:nth-child(1) > input[type='button']").click(function ()
    {
        if ($("header > div:nth-child(1) > input[type='button']").hasClass('closed'))
        {
            $("header > ul:nth-child(3)").slideDown("slow");
            $(this).removeClass('closed');
            $(this).addClass('opened');
        }
        else if ($("header > div:nth-child(1) > input[type='button']").hasClass('opened'))    
        {
            $("header > ul:nth-child(3)").slideUp("slow");
            $(this).removeClass('opened');
            $(this).addClass('closed');
        }

        if($("ul#smart_menu").is(":visible"))
        {
            $("ul#smart_menu").slideUp("slow");
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").removeClass('opened');
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").addClass('closed');
        }
    });

    if($(window).width() <= 701)
    {
        $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value','q');
        $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');
    }

    $("footer > div#right_buttons > input[type='button']:nth-child(4)").click(function()
    {
        if (!$("footer > div#right_buttons > input[type='button']:nth-child(1)").is(":visible"))
        {
            if ($("footer > div#right_buttons > input[type='button']:nth-child(4)").hasClass('closed'))
            {
                $("ul#smart_menu").slideDown("slow");
                $(this).removeClass('closed');
                $(this).addClass('opened');
            }
            else if($("footer > div#right_buttons > input[type='button']:nth-child(4)").hasClass('opened'))
            {
                $("ul#smart_menu").slideUp("slow");
                $(this).removeClass('opened');
                $(this).addClass('closed');
            }
        }
        else
        {
            $("ul#smart_menu").hide();
            $("ul#smart_menu").removeClass('opened').addClass('closed');
        }

        if($("header > ul:nth-child(3)").is(":visible"))
        {
            $("header > ul:nth-child(3)").slideUp("slow");
            $("header > div:nth-child(1) > input[type='button']").removeClass('opened');
            $("header > div:nth-child(1) > input[type='button']").addClass('closed');
        }
        
    });

    $("header > ul:nth-child(3) > li p").mouseenter(function ()
    {
        $(this).siblings('span').fadeIn("fast");
    }).mouseleave(function ()
    {
        $(this).siblings('span').fadeOut("fast");
    });

    $(window).resize(function()
    {
        $("header ul:nth-child(3)").css('top',$("header div:nth-child(1)").height()+10);
        $("footer > div#center_buttons > ul#smart_menu").css('bottom',$("footer").height()+7);

        if($(window).width() <= 700)
        {
            $("header > ul:nth-child(3) > li p").unbind();
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value','q');            
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');
        }
        else
        {
            $("header > ul:nth-child(3) > li p").bind({
                mouseenter: function()
                {
                    $(this).siblings('span').fadeIn("fast");
                },
                mouseleave: function()
                {
                    $(this).siblings('span').fadeOut("fast");
                }
            });
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value','-'); 
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('q');
        }
    });

    if($(window).width() <= 700)
        {
            $("header > ul:nth-child(3) > li p").unbind();
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value','q');            
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');
        }
        else
        {
            $("header > ul:nth-child(3) > li p").bind({
                mouseenter: function()
                {
                    $(this).siblings('span').fadeIn("fast");
                },
                mouseleave: function()
                {
                    $(this).siblings('span').fadeOut("fast");
                }
            });
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value','-'); 
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('q');
        }

});
