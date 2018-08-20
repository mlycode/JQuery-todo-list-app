//Check off todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		if(todoText.length > 0){
			$(this).val("");
			$("ul").append("<li><span><i class='far fa-trash-alt'></i> </span>" + todoText + "</li>");
		} else {
			alert("You must enter a todo first!");
		}
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});