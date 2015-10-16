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

});