var last_color = "#F1F2F5"; //otherwise last colour is the hover colour
var last_elem = null;
var last_border_bottom = null;

function openBookmark(selector) {
	$(selector).each(function(){
			//manu part
			if (last_elem!=null) {
			//	last_elem.css('background-color',last_color);
			//	last_elem.css('border-bottom',last_border_bottom);
			last_elem.removeClass('marked-bookmark');
			}
		
			last_elem=$(this);
			last_elem.addClass('marked-bookmark');
			//last_border_bottom=$(this).css('border-bottom');
			
			//$(this).css('background-color','#FFFFFF');
			//$(this).css('border-bottom','none');
			
			//fillup content part
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