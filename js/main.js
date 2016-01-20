$(document).ready(function ()
{   
    angular.element(document).ready(function ()
    { 
        console.log("Fuck your ass off");
        /*Mantiene el alto de una imagen con clase "img_simple_org" dependiendo del ancho.*/
        $('div.img_simple_org').on('resize', function ()
        {
            var container_width = $(this).width();
            console.log(container_width);
            $(this).height(container_width);
            console.log("Hey, fuck you");
        });
    });
    
    
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
    $("footer > ul#right_buttons > li:nth-child(3) > input[type='button']").click(function ()
    {        
        if (!$("footer > ul#right_buttons > li:nth-child(1) > input[type='button']").is(":visible"))
        {
            if ($("footer > ul#right_buttons > li:nth-child(3) > input[type='button']").hasClass('closed'))
            {
                $("ul#smart_menu").slideDown("slow");
                $(this).removeClass('closed');
                $(this).addClass('opened');
            }
            else if ($("footer > ul#right_buttons > li:nth-child(3) > input[type='button']").hasClass('opened'))
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

    /*Muestra los tooltips del menú superior*/
    $("header > ul:nth-child(3) > li p").mouseenter(function ()
    {
        $(this).siblings('span').fadeIn("fast");
    }).mouseleave(function ()
    {
        $(this).siblings('span').fadeOut("fast");
    });
    
    /*Muestra los tooltips de los botones inferiores de la izquierda y derecha*/
    $("footer > ul#left_buttons > li input[type='button'], footer > ul#right_buttons > li input[type='button']").mouseenter(function ()
    {        
        $(this).siblings('span').fadeIn("fast");
    }).mouseleave(function ()
    {
        $(this).siblings('span:not(".divition_bot_span")').fadeOut("fast");
    });

    $(window).resize(function ()
    {
        $("header ul:nth-child(3)").css('top', $("header div:nth-child(1)").height() + 10);
        $("footer > div#center_buttons > ul#smart_menu").css('bottom', $("footer").height() + 7);

        if ($(window).width() <= 700)
        {
            $("header > ul:nth-child(3) > li p").unbind();
            $("footer > ul#right_buttons > li::nth-child(3) > input[type='button']").attr('value', 'q');
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
            $("footer > ul#right_buttons > li:nth-child(3) > input[type='button']").attr('value', '-');
            $("footer > div#center_buttons > ul#smart_menu li:last-child span").text('q');
        }                
    });

    if ($(window).width() <= 700)
    {
        $("header > ul:nth-child(3) > li p").unbind();
        $("footer > ul#right_buttons > li:nth-child(4) > input[type='button']").attr('value', 'q');
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
        $("footer > ul#right_buttons > li:nth-child(3) > input[type='button']").attr('value', '-');
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
    $("footer > ul#right_buttons > li:nth-child(1) > input[type='button'], footer > div#center_buttons > ul#smart_menu li:nth-child(2)").click(function()
    {
        $("section#popups, #popup_mapa_conceptual").show();
    });
    
    /*Acción: mostrar pop-up de Accesibilidad*/
    $("header ul:nth-child(3) li:nth-child(5)").click(function()
    {
        $("section#popups, #popup_accesibilidad").show();
    });
    
    /*Acción: mostrar pop-up de Glosario*/
    $("footer > ul#left_buttons > li:nth-child(3) > input[type='button'], footer > div#center_buttons > ul#smart_menu li:nth-child(3)").click(function()
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
    $("footer > ul#right_buttons > li:nth-child(2) > input[type='button'], footer > div#center_buttons > ul#smart_menu li:nth-child(1)").click(function()
    {
        $("section#popups, #popup_PDF").show();
    });
      
     /*Acción: mostrar pop-up de Bibliografía*/
    $("footer > ul#left_buttons > li:nth-child(2) > input[type='button'], footer > div#center_buttons > ul#smart_menu li:nth-child(4)").click(function()
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