//Mikey Code Begins
var enabled = false;
$(".closeIt").on('click',Hide); 
$("#register").on('click',Show);

function Show() {
    if ($(".login-card").css("display") == "none"){ 
        $(".login-card").css("display","block");
        $("#firstName").focus();
	}
}
function Hide() {
    if ($(".login-card").css("display") == "block"){
        $(".login-card").css("display","none");
	}
}

$(document).on('keydown', function (e) {
    if (e.keyCode === 27) { // ESC
        Hide();
    }
    else if (e.keyCode === 13 && !e.shiftKey && ($("#welcome").css("display") == "block")) { // ESC
        window.location = "machine.html";
    }
});

$(".inputText").focus(function() {
    var $this = $(this);
    $this.select();
	// Work around Chrome's little problem
    $this.mouseup(function() {
        // Prevent further mouseup intervention
        $this.unbind("mouseup");
        return false;
    });
});

//Enter key to login -mb
$('.loginText').keypress(function (e) {
    if (e.which == 13 && !e.shiftKey) {
    	e.preventDefault();
		cookieTest();
    	$(this).blur();
    }
});

//Enter key to register -mb
$('.registerText').keypress(function (e) {
    if (e.which == 13 && !e.shiftKey) {
    	e.preventDefault();
		cookieSave();
    	$(this).blur();
    }
});

//Mikey Code Ends

//Possesom Code Begins

$("#continue_button").click(function(event){
event.preventDefault();
window.location = "machine.html";
});


//Possesom Code Ends