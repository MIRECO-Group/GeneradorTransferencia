$(document).ready(function()
{
	$("header > div:nth-child(1) > input[type='button']").click(function()
	{
		if($("header > div:nth-child(1) > input[type='button']").hasClass('closed'))
		{
			$("header > ul:nth-child(3)").slideDown("slow");
			$(this).removeClass('closed');
			$(this).addClass('opened');
		}
		else if($("header > div:nth-child(1) > input[type='button']").hasClass('opened'))
		{
			$("header > ul:nth-child(3)").slideUp("slow");
			$(this).removeClass('opened');
			$(this).addClass('closed');
		}
	});
	
	$("header > ul:nth-child(3) > li p").mouseenter(function()
	{
		$(this).siblings('span').fadeIn("fast");
	}).mouseleave(function()
	{
		$(this).siblings('span').fadeOut("fast");
	});

	$("#unit_span").click(function()
		{
			if($("#extended_descrip_leccion").is(":visible"))
			{
				$("#extended_descrip_leccion").slideUp("fast");
				$("#extended_descrip_leccion").removeClass("visible_me");
			}

			if($("#extended_descrip_unidad").hasClass("visible_me"))
			{
				$("#extended_descrip_unidad").slideUp("slow");
				$("#extended_descrip_unidad").removeClass("visible_me");
			}
			else
			{
				$("#extended_descrip_unidad").slideDown("slow");
				$("#extended_descrip_unidad").addClass("visible_me");
			}			
		});

	$("#lesson_span").click(function()
		{
			if($("#extended_descrip_unidad").is(":visible"))
			{
				$("#extended_descrip_unidad").slideUp("fast");
				$("#extended_descrip_unidad").removeClass("visible_me");
			}

			if($("#extended_descrip_leccion").hasClass("visible_me"))
			{
				$("#extended_descrip_leccion").slideUp("slow");
				$("#extended_descrip_leccion").removeClass("visible_me");
			}
			else
			{
				$("#extended_descrip_leccion").slideDown("slow");
				$("#extended_descrip_leccion").addClass("visible_me");
			}
		});

});