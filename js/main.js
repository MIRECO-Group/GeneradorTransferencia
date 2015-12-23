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

        if ($("ul#smart_menu").is(":visible"))
        {
            $("ul#smart_menu").slideUp("slow");
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").removeClass('opened');
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").addClass('closed');
        }
    });

    if ($(window).width() <= 701)
    {
        $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value', 'q');
        $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');
    }

    /*Funcionalidad del botón de contenido*/
    $("footer > div#right_buttons > input[type='button']:nth-child(4)").click(function ()
    {        
        if (!$("footer > div#right_buttons > input[type='button']:nth-child(1)").is(":visible"))
        {
            if ($("footer > div#right_buttons > input[type='button']:nth-child(4)").hasClass('closed'))
            {
                $("ul#smart_menu").slideDown("slow");
                $(this).removeClass('closed');
                $(this).addClass('opened');
            }
            else if ($("footer > div#right_buttons > input[type='button']:nth-child(4)").hasClass('opened'))
            {
                $("ul#smart_menu").slideUp("slow");
                $(this).removeClass('opened');
                $(this).addClass('closed');
            }
        }
        else
        {
            $("section#popups, #popup_tabla_de_contenido").show();
            $("ul#smart_menu").hide();
            $("ul#smart_menu").removeClass('opened').addClass('closed');
        }

        /*Esconde el menú desplegable de la plantilla en la parte superior si este está visible.*/
        if ($("header > ul:nth-child(3)").is(":visible"))
        {
            $("header > ul:nth-child(3)").slideUp("slow");
            $("header > div:nth-child(1) > input[type='button']").removeClass('opened');
            $("header > div:nth-child(1) > input[type='button']").addClass('closed');
        }

    });
    
    $("footer > div#center_buttons > ul#smart_menu li:nth-child(5)").click(function()
    {
        $("section#popups, #popup_tabla_de_contenido").show();
    });

    $("header > ul:nth-child(3) > li p").mouseenter(function ()
    {
        $(this).siblings('span').fadeIn("fast");
    }).mouseleave(function ()
    {
        $(this).siblings('span').fadeOut("fast");
    });

    $(window).resize(function ()
    {
        $("header ul:nth-child(3)").css('top', $("header div:nth-child(1)").height() + 10);
        $("footer > div#center_buttons > ul#smart_menu").css('bottom', $("footer").height() + 7);

        if ($(window).width() <= 700)
        {
            $("header > ul:nth-child(3) > li p").unbind();
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value', 'q');
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');

            if (!$("header > ul:nth-child(3) > li span").is(":visible"))
            {
                $("header > ul:nth-child(3) > li span").css('display', 'inline-block');
            }
        }
        else
        {
            $("header > ul:nth-child(3) > li p").bind({
                mouseenter: function ()
                {
                    $(this).siblings('span').fadeIn("fast");
                },
                mouseleave: function ()
                {
                    $(this).siblings('span').fadeOut("fast");
                }
            });
            $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value', '-');
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('q');
            $("header > ul:nth-child(3) > li span").css('display', 'none');
        }
    });

    if ($(window).width() <= 700)
    {
        $("header > ul:nth-child(3) > li p").unbind();
        $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value', 'q');
        $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('-');
    }
    else
    {
        $("header > ul:nth-child(3) > li p").bind({
            mouseenter: function ()
            {
                $(this).siblings('span').fadeIn("fast");
            },
            mouseleave: function ()
            {
                $(this).siblings('span').fadeOut("fast");
            }
        });
        $("footer > div#right_buttons > input[type='button']:nth-child(4)").attr('value', '-');
        $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('q');
    }
    
    /*Acción: realizar el fullscreen*/
    $(".fullScreen_off").click(function()
    {
        $("header ul:nth-child(3) li:nth-child(1)").removeClass("fullScreen_off").addClass("fullScreen_on");
        $(".fullScreen_on").bind("click",hideFullScreen);
        showFullScreen();
        return false;
    });
        
    function showFullScreen()
    {
        $('body').fullscreen();
    }
    
    function hideFullScreen()
    {
        $.fullscreen.exit();
    }
    /*Acción: mostrar pop-up de Mapa Conceptual*/
    $("footer > div#right_buttons > input[type='button']:nth-child(1), footer > div#center_buttons > ul#smart_menu li:nth-child(2)").click(function()
    {
        $("section#popups, #popup_mapa_conceptual").show();
    });
    
    /*Acción: mostrar pop-up de Accesibilidad*/
    $("header ul:nth-child(3) li:nth-child(5)").click(function()
    {
        $("section#popups, #popup_accesibilidad").show();
    });
    
    /*Acción: mostrar pop-up de Glosario*/
    $("footer > div#left_buttons > input[type='button']:nth-child(4), footer > div#center_buttons > ul#smart_menu li:nth-child(3)").click(function()
    {
        $("section#popups, #popup_glosario").show();
    });
    
    /*Acción: mostrar pop-up de Créditos*/
    $("header ul:nth-child(3) > li:nth-child(2)").click(function()
    {
        $("section#popups, #popup_creditos").show();
    });
    
     /*Acción: mostrar pop-up de ayuda*/
    $("header ul:nth-child(3) > li:nth-child(3)").click(function()
    {
        $("section#popups, #popup_ayuda").show();
    });
    
     /*Acción: mostrar pop-up de información*/
    $("header ul:nth-child(3) > li:nth-child(4)").click(function()
    {
        $("section#popups, #popup_informacion").show();
    });
    
    /*Acción: mostrar pop-up de PDF*/
    $("footer > div#right_buttons > input[type='button']:nth-child(3), footer > div#center_buttons > ul#smart_menu li:nth-child(1)").click(function()
    {
        $("section#popups, #popup_PDF").show();
    });
    
    
     /*Acción: mostrar pop-up de Bibliografía*/
    $("footer > div#left_buttons > input[type='button']:nth-child(2), footer > div#center_buttons > ul#smart_menu li:nth-child(4)").click(function()
    {
        $("section#popups, #popup_bibliografia").show();
    });
    
    
    $(".popup-btnCerrar").click(function()
    {
       $(this).parent().parent().hide();
       $("section#popups").hide();
    });
    
});

function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}

var shuffleArray = function (array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
};