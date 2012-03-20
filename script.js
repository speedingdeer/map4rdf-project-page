var last_color = "#F1F2F5"; //otherwise last colour is the hover colour
var last_elem = null;
var last_border_bottom = null;

function openBookmark(selector) {
	$(selector).each(function(){
			//manu part
			if (last_elem!=null) {
				last_elem.removeClass('marked-bookmark');
			}	
			last_elem=$(this);
			last_elem.addClass('marked-bookmark');
			$('#content').html($(selector+"_content").html());
			
		});
	}

$(window).load(function () {
	$(".bookmark").each(function(){
		$(this).click(function(){
			var selector = '#' + $(this).attr('id');
			openBookmark(selector);
		})
	});
	//site initialization
	openBookmark("#about");
});