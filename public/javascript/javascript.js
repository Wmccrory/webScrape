$(".addNote").on("click", function () {
	$("#modal").animate({right: '-100%'})
	console.log($(this).data("id"));
	$("#modal").empty();
	$("#modal").html("<h2>Add a note</h2><textarea id='submitText'></textarea><br><button class='noteSubmit' data-id='" + $(this).data("id") + "'>Submit new note</button>")
	setTimeout(function() {
		$("#modal").animate({right: '1%'})
	}, 100);
})

$(".viewNote").on("click", function () {
	var id = $(this).data("id");

	$.ajax({
		method: "GET",
		url: "/articles/" + id
	}).then(function(data) {
		console.log(data);
		if (data.note) {
			console.log(data.note.body);
			$("#modal").empty();
			$("#modal").html("<h2>Notes on this article: </h2><h3>" + data.note.body + "</h3>");
			$("#modal").animate({right: '1%'})
		}
		else if (!data.note) {
			$("#modal").empty();
			$("#modal").html("<h2>No notes on this article");
			$("#modal").animate({right: '1%'})
		}
	})

	// $("#modal").animate({right: '1%'})
})

$("#modal").on("click", ".noteSubmit", function () {
	var id = $(this).data("id");

	$.ajax({
		method: "POST",
		url: "/articles/" + id,
		data: {body: $("#submitText").val()}
	}).then(function() {
		$("#modal").empty();
		$("#modal").html("<h2>Your note has been submitted");
	})
})