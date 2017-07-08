/*pageone.html...*/
$(document).on("pagecreate", "#mypage1", function() {
	$("#mypage1").on("swipeleft", function() {
		window.location.href = "pagetwo.html";
	});
});
$(document).on("pagecreate", "#mypage2", function() {
	$("#mypage2").on("swipeleft", function() {
		window.location.href = "pagethree.html";
	});
});
$(document).on("pagecreate", "#mypage2", function() {
	$("#mypage2").on("swiperight", function() {
		window.location.href = "pageone.html";
	});
});
$(document).on("pagecreate", "#mypage3", function() {
	$("#mypage3").on("swipeleft", function() {
		window.location.href = "pagefour.html";
	});
});
$(document).on("pagecreate", "#mypage3", function() {
	$("#mypage3").on("swiperight", function() {
		window.location.href = "pagetwo.html";
	});
});

$(document).on("pagecreate", "#mypage4", function() {
	$("#mypage4").on("swiperight", function() {
		window.location.href = "pagethree.html";
	});
});

