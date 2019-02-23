//Check off todo list by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

// Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation(); // to stop event bubble
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing input text
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}
});

// toggle the list
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
