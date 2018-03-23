console.log("Working");

$(".addNote").on("click", function () {
	$("#modal").animate({right: '-100%'})
	console.log($(this).data("id"));
	$("#modal").empty();
	$("#modal").html("<h2>Add a note</h2><form><textarea id='submitText'></textarea><br><button data-id='" + $(this).data("id") + "'>Submit new note</button></form>")
	setTimeout(function() {
		$("#modal").animate({right: '1%'})
	}, 100);
})

$(".viewNote").on("click", function () {
	console.log($(this).data("id"));
	$("#modal").animate({right: '1%'})
})