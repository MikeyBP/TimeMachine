/*Mikey Code Begins*/
var cookieString = document.cookie;
var usrNameFrom = cookieString.indexOf("First_Name_");
var usrNameToo = cookieString.indexOf("Last_Name_");
var usrName = cookieString.substring(usrNameFrom+11, usrNameToo);
var origPos;
var origId;
var welcomeMsg = "Welcome to the Time-Machine, " + usrName;
var togglePost = false;
var toggleShrink = false;
var lastYear = cookieYearGet();
var yearsWarped = 0;
var fullYear = cookieYearGet();

if (isNaN(fullYear)){
	fullYear = 2015;
}

if (isNaN(lastYear)){
	lastYear = 2015;
}

var yearString = String(fullYear);
$("#y1000").val(yearString.charAt(0));
$("#y100").val(yearString.charAt(1));
$("#y10").val(yearString.charAt(2));
$("#y1").val(yearString.charAt(3));

checkYear();
playIfYear();

//User Welcome -mb
$("#userWelcome").text(welcomeMsg);
document.getElementById("replyA").value = ("Welcome to our Time Machine. You are in the year "+fullYear+"!");
document.getElementById("replyB").value = ("Let's get started by selecting a year to travel to using the nearby buttons.");

//KH code Below
$.ajax ({
			url: 'Resources/events.json',
			datatype: 'json',
			success: function (outputfromserver) {
				if (typeof outputfromserver != "undefined") {
					var currentYear = fullYear;
					var currentYearArr = outputfromserver[currentYear];
					$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
					$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
					$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
					$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
					$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
					$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
				}
			}
});


$("#ipodText").hover(function(){ //TL code Below
	$("#ipod").css("display", "inline");
	$("#casette").css("display", "inline");
}, function() {
	$("#ipod").css("display", "none");
	$("#casette").css("display", "none");
	
});

//Show/Hide post box -mb
$("#showPost").on("click", function(){
	if (togglePost == false){
		$(this).animate({top: "62.5%"}, 500);
		$("#postWrap").animate({top: "64%"}, 500);
		togglePost = true;
	}
	else if (togglePost == true){
		$(this).animate({top: "78.5%"}, 500);
		$("#postWrap").animate({top: "80%"}, 500);		
		togglePost = false;
	}
});

//Enter key to post comment -mb
$('#commentPost').keydown(function (e) {
    if (e.which == 13 && !e.shiftKey) {
    	e.preventDefault();
        var text = $("#commentPost").val();
		if (text == ""){
			alert("No Comment");
		}
		else {
			var date = new Date();
			date.toISOString().substring(0, 10);
			if (fullYear == 2015){
				$("#commentWrap15 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1960){
				$("#commentWrap60 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1961){
				$("#commentWrap61 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1962){
				$("#commentWrap62 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1963){
				$("#commentWrap63 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1964){
				$("#commentWrap64 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1965){
				$("#commentWrap65 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1966){
				$("#commentWrap66 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1967){
				$("#commentWrap67 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1968){
				$("#commentWrap68 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
			else if (fullYear == 1969){
				$("#commentWrap69 > textarea").prepend((date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getFullYear()+" | "+usrName+" :  "+text+"\n");
			}
		}
		document.getElementById("commentPost").value = "";
    }
});

//Button click calls enter key -mb
$("#submitComment").click(function () {
                var e = jQuery.Event('keydown');
                e.which = 13; // #13 = Enter key
                $("#commentPost").focus();
                $("#commentPost").trigger(e);
});
	
//Mikey's 1960 Interactable Item -mb
$("#map60").hover(function(){
	$("#smile").css("display", "inline");
	$("#zapp").css("display", "inline");
}, function() {
	$("#smile").css("display", "none");
	$("#zapp").css("display", "none");
});

//Individual "interactive element" - KH (This makes the football hover functions work as well as the click function)
$("#football").hover(function() {
	$("#quickread").css("display", "inline");
}, function() {
	$("#quickread").css("display", "none");
});

$("#football").click(function() {
	window.open("https://en.wikipedia.org/wiki/List_of_Super_Bowl_champions", "_blank");
});

//End of Kristian's Code for the interactive element

//Possesom's 1963 Interactable Item -PP

$("#phoneClickBox").click(function(){
    var audio = document.getElementById("audioPh");
    	audio.play();
    $("#phoneClickBox").fadeIn(1800);	
    $("#phoneInfoBox").css("display", "inline");
});


//Banner Enlarge and Shrink -mb
$(".banner").click(function(){
	toggleShrink = true;
	origId = "#" + ($(this).attr("id"));
	switch (origId){
		case "#ban1": origPos="0%";break;
		case "#ban2": origPos="16.8%";break;
		case "#ban3": origPos="33.6%";break;
		case "#ban4": origPos="50.4%";break;
		case "#ban5": origPos="67.2%";break;
		case "#ban6": origPos="84.0%";break;}
	$(".banner").css("pointer-events", "none");
	$(this).css("z-index", "3").animate({
		left: "0%",
		width: "100%"
	}, 1000);
	$("h2 span", this).css("display", "inline-block");  //KH code
		if (fullYear == 1960 && origId == "#ban3"){
			$("#map60").css("display", "inline");
		}
		if (fullYear == 1962 && origId == '#ban3'){ //TL code
			$('#ipodText').css("display", "inline");
		}
	$("h2", this).css("display", "inline-block");  //KH code
		if (fullYear == 1963 && origId == "#ban3"){ //PP code
			$("#phoneClickBox").fadeIn(1900);
			$("#phoneClickBox").css("display", "inline");
		}

		//I'm for the football to show up - KH
		if (fullYear == 1967 && origId == "#ban4") {
			$("#football").css("display", "inline");
		}
	$(".bannerClicked").delay(1000).queue(function (next) {$(this).css({"pointer-events": "auto", "z-index": "4"});next();});
});

// Visibility <h2> toggle initial class of banner_#, also used to toggle the class of year_img to year_img_s regarding resizing of the images with said classes. - KH

//Banner Shrink -mb
$(".bannerClicked").click(function(){
	toggleShrink = false;
	$(origId).animate({
		left: origPos,
		width: "16.8%"
	}, 1000).delay(200).queue(function (next) {$(this).css("z-index", "2");next();});
	$(".banner").delay(1000).queue(function (next) {$(this).css("pointer-events", "auto");next();});
	$(".bannerClicked").css({"pointer-events": "none", "z-index": "-1"});
	$("h2 span").css("display", "none");  //KH code
	$("#map60").css("display", "none");
	$("#ipodText").css("display", "none"); //TL code
	$("h2").css("display", "none");  //KH code
	//Makes the football remove when click on expanded banner
	$("#football").css("display", "none"); //KH code
	$("#phoneClickBox").css("display", "none"); //PP code
	$("#phoneInfoBox").css("display", "none");
});

//The Time Machine Dial and Various Buttons -mb
//THE TIME MACHINE DIAL -mb

function Reset(){
	document.getElementById("y1000").value = 2;
	document.getElementById("y100").value = 0;
	document.getElementById("y10").value = 1;
	document.getElementById("y1").value = 5;
	$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(224,243,250,1) 0%,rgba(216,240,252,1) 56%,rgba(184,226,246,1) 79%,rgba(182,223,253,1) 100%)");
	$(".year").css("color", "#242828");
}

function TimeWarp(){
	if (toggleShrink == true){
		toggleShrink = false;
		$(origId).animate({
		left: origPos,
		width: "16.8%"
		}, 500).delay(200).queue(function (next) {$(this).css("z-index", "2");next();});
		$(".banner").delay(200).queue(function (next) {$(this).css("pointer-events", "auto");next();});
		$(".bannerClicked").css({"pointer-events": "none", "z-index": "-1"});
		$("h2 span").css("display", "none");  //KH code
		$("#map60").css("display", "none");
		$("#football").css("display", "none"); //KH code
		$("#phoneClickBox").css("display", "none"); //PP code
		$("#phoneInfoBox").css("display", "none");
		$("#ipodText").css("display", "none"); //TL code
	}
	if (togglePost == true){
		$("#showPost").animate({top: "78.5%"}, 500);
		$("#postWrap").animate({top: "80%"}, 500);		
		togglePost = false;
	}

	document.getElementById("commentPost").value = "";
	fullYear = (1000 * parseInt(document.getElementById("y1000").value))
				+(100 * parseInt(document.getElementById("y100").value))
				+(10 * parseInt(document.getElementById("y10").value))
				+(parseInt(document.getElementById("y1").value));
	if (fullYear >= 1960 && fullYear <= 1969){
		document.getElementById("replyA").value = ("Welcome to the year "+fullYear+"!");
		if (fullYear >= lastYear){
			yearsWarped = fullYear - lastYear;
			if (yearsWarped == 0){
				document.getElementById("replyB").value = ("You do know how time travel works, right?");
			} else {
				document.getElementById("replyB").value = ("You've travelled "+yearsWarped+" year(s) in to the future from "+lastYear);
				
				cookieYearSave(fullYear);
				$("#showPost").css("pointer-events", "none");
				$(".banner").css("pointer-events", "none");
				$("#ban1").animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});
				$("#ban2").delay(1000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban3").delay(2000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban4").delay(3000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban5").delay(4000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban6").delay(5000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$(".bannerSpin").css("display", "block");
				$(".bannerSpin").css("-webkit-animation-play-state", "running");
				$("#bigRed").attr("disabled", true);
				$("#reset").attr("disabled", true);
				$(".tmButt").attr("disabled", true);
				setTimeout(ifYear, 8000);
				$(".commentWrap").css("display", "none");


				lastYear = fullYear;
			}
		}
		else if (fullYear < lastYear){
			yearsWarped = lastYear - fullYear;
			if (yearsWarped == 0){
				document.getElementById("replyB").value = ("You do know how time travel works, right?");
			} else {
				document.getElementById("replyB").value = ("You've travelled "+yearsWarped+" year(s) in to the past from "+lastYear);
				
				cookieYearSave(fullYear);
				$("#showPost").css("pointer-events", "none");
				$(".banner").css("pointer-events", "none");
				$("#ban1").animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});
				$("#ban2").delay(1000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban3").delay(2000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban4").delay(3000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban5").delay(4000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban6").delay(5000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$(".bannerSpin").css("display", "block");
				$(".bannerSpin").css("-webkit-animation-play-state", "running");
				$("#bigRed").attr("disabled", true);
				$("#reset").attr("disabled", true);
				$(".tmButt").attr("disabled", true);
				setTimeout(ifYear, 8000);
				$(".commentWrap").css("display", "none");

				lastYear = fullYear;
			}
		}
	}
	else if (fullYear == 2015){
		document.getElementById("replyA").value = ("Welcome to your Present Year: "+fullYear);
		yearsWarped = fullYear - lastYear;
		if (yearsWarped == 0){
			document.getElementById("replyB").value = ("You do know how time travel works, right?");
		} else {
			document.getElementById("replyB").value = ("You've travelled "+yearsWarped+" year(s) in to the future from "+lastYear);
			
			cookieYearSave(fullYear);
			$("#showPost").css("pointer-events", "none");
			$(".banner").css("pointer-events", "none");
			$("#ban1").animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});
				$("#ban2").delay(1000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban3").delay(2000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban4").delay(3000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban5").delay(4000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
				$("#ban6").delay(5000).queue(function (next) {$(this).animate({'top': '-2000'},
					{duration: 800, complete: function() {
            		$(this).css("z-index","1").animate({top: 0}, {
                	duration: 100});
        			}});next();});
			$(".bannerSpin").css("display", "block");
			$(".bannerSpin").css("-webkit-animation-play-state", "running");
			$("#bigRed").attr("disabled", true);
			$("#reset").attr("disabled", true);
			$(".tmButt").attr("disabled", true);
			setTimeout(ifYear, 8000); 
			$(".commentWrap").css("display", "none");

			lastYear = fullYear;
		}
	}
	else {
		document.getElementById("replyA").value = ("ERROR ERROR ERROR ERROR ERROR");
		document.getElementById("replyB").value = ("OUT OF BOUNDS TIME.\nSRSLY DONT DO THAT!!!");
		var rando = Math.floor(Math.random()*(3-1+1)+1);
		if (rando == 1)
		alert("OUTSIDE ASSIGNED RANGE:\nA timey-wimey malfunction has resulted in you killing an ancient butterfly.\n It's not very effective.");
		else if (rando == 2)
		alert("OUTSIDE ASSIGNED RANGE:\nA landing malfunction has resulted in the crushing end of your great great Grandfather.\n You cease to exist.");
		else
		alert("OUTSIDE ASSIGNED RANGE:\nAnother you barges in and gives you a mighty high-five.\n The Universe begins to unravel.");
	}
}

//YEAR SWITCH -mb

function ifYear(){
		if (fullYear == 1960){ 
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space60.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war60.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech60.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop60.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil60.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc60.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap60").css("display", "inline");
		}
		else if (fullYear == 1961){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space61.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war61.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech61.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop61.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil61.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc61.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap61").css("display", "inline");
		}
		else if (fullYear == 1962){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space62.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war62.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech62.jpg")');next();			});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop62.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil62.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc62.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap62").css("display", "inline");
		}
		else if (fullYear == 1963){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space63.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war63.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech63.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop63.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil63.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc63.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap63").css("display", "inline");
		}
		else if (fullYear == 1964){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space64.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war64.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech64.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop64.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil64.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc64.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap64").css("display", "inline");
		}
		else if (fullYear == 1965){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space65.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war65.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech65.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop65.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil65.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc65.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap65").css("display", "inline");
		}
		else if (fullYear == 1966){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space66.jpg")'); 
			$("#ban1").css("z-index", ''); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war66.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech66.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop66.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil66.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc66.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap66").css("display", "inline");
		}
		else if (fullYear == 1967){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space67.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war67.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech67.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop67.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil67.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc67.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap67").css("display", "inline");
		}
		else if (fullYear == 1968){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space68.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war68.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech68.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop68.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil68.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc68.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap68").css("display", "inline");
		}
		else if (fullYear == 1969){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space69.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war69.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech69.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop69.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil69.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc69.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600); 
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap69").css("display", "inline");
		}
		else if (fullYear == 2015){
			$.ajax ({
					url: 'Resources/events.json', //KH Ajax/Json code
					datatype: 'json',
					success: function (outputfromserver) {
					if (typeof outputfromserver != "undefined") {
						var currentYear = fullYear;
						var currentYearArr = outputfromserver[currentYear];
						$("#banText1").html("News: " + currentYearArr[0].text + " Year: " + currentYearArr[0].year);
						$("#banText2").html("News: " + currentYearArr[1].text + " Year: " + currentYearArr[1].year);
						$("#banText3").html("News: " + currentYearArr[2].text + " Year: " + currentYearArr[2].year);
						$("#banText4").html("News: " + currentYearArr[3].text + " Year: " + currentYearArr[3].year);
						$("#banText5").html("News: " + currentYearArr[4].text + " Year: " + currentYearArr[4].year);
						$("#banText6").html("News: " + currentYearArr[5].text + " Year: " + currentYearArr[5].year);
					}
					}
			});
			$("#ban1 img").css("content", 'url("pics/space15.jpg")'); 
			$("#ban1").css("z-index", '2'); 
			$("#ban1").css("top", '100%').animate({"top": "0"},500); 
			$("#ban1spin").delay(500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban2 img").delay(1000).queue(function (next) {$(this).css("content", 'url("pics/war15.jpg")');next();}); 
			$("#ban2").delay(800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban2").css("top", '100%').animate({"top": "0"},600); 
			$("#ban2spin").delay(1500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban3 img").delay(2000).queue(function (next) {$(this).css("content", 'url("pics/tech15.jpg")');next();});
			$("#ban3").delay(1800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban3").css("top", '100%').animate({"top": "0"},600);
			$("#ban3spin").delay(2500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban4 img").delay(3000).queue(function (next) {$(this).css("content", 'url("pics/pop15.jpg")');next();});
			$("#ban4").delay(2800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban4").css("top", '100%').animate({"top": "0"},600); 
			$("#ban4spin").delay(3500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban5 img").delay(4000).queue(function (next) {$(this).css("content", 'url("pics/civil15.jpg")');next();});  
			$("#ban5").delay(3800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban5").css("top", '100%').animate({"top": "0"},600); 
			$("#ban5spin").delay(4500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#ban6 img").delay(5000).queue(function (next) {$(this).css("content", 'url("pics/misc15.jpg")');next();});
			$("#ban6").delay(4800).queue(function (next) {$(this).css("z-index", '2');next();}); 
			$("#ban6").css("top", '100%').animate({"top": "0"},600);
			$("#ban6spin").delay(5500).queue(function (next) {$(this).css({"-webkit-animation-play-state":"paused","display":"none"});next();}); 
			$("#bigRed").delay(6000).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#reset").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$(".tmButt").delay(6500).queue(function (next) {$(this).removeAttr("disabled");next();});
			$("#ban6").delay(500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban5").delay(1500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban4").delay(2500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban3").delay(3500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban2").delay(4500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#ban1").delay(5500).queue(function (next) {$(this).css("pointer-events", "auto");next();});
			$("#commentWrap15").css("display", "inline");
		}
			$("#showPost").css("pointer-events", "auto");
			setTimeout(playIfYear, 5500);
}

function checkYear() {		

	if (fullYear >= 1960 && fullYear <= 1969){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(188,244,192,1) 0%,rgba(177,249,187,1) 56%,rgba(150,242,161,1) 79%,rgba(144,252,167,1) 100%)");
		$(".year").css("color", "#061204");
	}
	else if (fullYear == 2015){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(224,243,250,1) 0%,rgba(216,240,252,1) 56%,rgba(184,226,246,1) 79%,rgba(182,223,253,1) 100%)");
		$(".year").css("color", "#242828");
	}
	else {
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(252,184,170,1) 0%,rgba(253,184,163,1) 56%,rgba(251,157,131,1) 79%,rgba(254,172,134,1) 100%)");
		$(".year").css("color", "#5B5B5B");
	}

	if( fullYear == 1960){
		$("#ban1 img").css("content", "url('pics/space60.jpg')");
		$("#ban2 img").css("content", "url('pics/war60.jpg')");
		$("#ban3 img").css("content", "url('pics/tech60.jpg')");
		$("#ban4 img").css("content", "url('pics/pop60.jpg')");
		$("#ban5 img").css("content", "url('pics/civil60.jpg')");
		$("#ban6 img").css("content", "url('pics/misc60.jpg')");
		$("#commentWrap60").css("display", "inline");
	}
	else if (fullYear == 1961){
		$("#ban1 img").css("content", "url('pics/space61.jpg')");
		$("#ban2 img").css("content", "url('pics/war61.jpg')");
		$("#ban3 img").css("content", "url('pics/tech61.jpg')");
		$("#ban4 img").css("content", "url('pics/pop61.jpg')");
		$("#ban5 img").css("content", "url('pics/civil61.jpg')");
		$("#ban6 img").css("content", "url('pics/misc61.jpg')");
		$("#commentWrap61").css("display", "inline");
	}
	else if (fullYear == 1962){
		$("#ban1 img").css("content", "url('pics/space62.jpg')");
		$("#ban2 img").css("content", "url('pics/war62.jpg')");
		$("#ban3 img").css("content", "url('pics/tech62.jpg')");
		$("#ban4 img").css("content", "url('pics/pop62.jpg')");
		$("#ban5 img").css("content", "url('pics/civil62.jpg')");
		$("#ban6 img").css("content", "url('pics/misc62.jpg')");
		$("#commentWrap62").css("display", "inline");
	}
	else if (fullYear == 1963){
		$("#ban1 img").css("content", "url('pics/space63.jpg')");
		$("#ban2 img").css("content", "url('pics/war63.jpg')");
		$("#ban3 img").css("content", "url('pics/tech63.jpg')");
		$("#ban4 img").css("content", "url('pics/pop63.jpg')");
		$("#ban5 img").css("content", "url('pics/civil63.jpg')");
		$("#ban6 img").css("content", "url('pics/misc63.jpg')");
		$("#commentWrap63").css("display", "inline");
	}
	else if (fullYear == 1964){
		$("#ban1 img").css("content", "url('pics/space64.jpg')");
		$("#ban2 img").css("content", "url('pics/war64.jpg')");
		$("#ban3 img").css("content", "url('pics/tech64.jpg')");
		$("#ban4 img").css("content", "url('pics/pop64.jpg')");
		$("#ban5 img").css("content", "url('pics/civil64.jpg')");
		$("#ban6 img").css("content", "url('pics/misc64.jpg')");
		$("#commentWrap64").css("display", "inline");
	}
	else if (fullYear == 1965){
		$("#ban1 img").css("content", "url('pics/space65.jpg')");
		$("#ban2 img").css("content", "url('pics/war65.jpg')");
		$("#ban3 img").css("content", "url('pics/tech65.jpg')");
		$("#ban4 img").css("content", "url('pics/pop65.jpg')");
		$("#ban5 img").css("content", "url('pics/civil65.jpg')");
		$("#ban6 img").css("content", "url('pics/misc65.jpg')");
		$("#commentWrap65").css("display", "inline");
	}
	else if (fullYear == 1966){
		$("#ban1 img").css("content", "url('pics/space66.jpg')");
		$("#ban2 img").css("content", "url('pics/war66.jpg')");
		$("#ban3 img").css("content", "url('pics/tech66.jpg')");
		$("#ban4 img").css("content", "url('pics/pop66.jpg')");
		$("#ban5 img").css("content", "url('pics/civil66.jpg')");
		$("#ban6 img").css("content", "url('pics/misc66.jpg')");
		$("#commentWrap66").css("display", "inline");
	}
	else if (fullYear == 1967){
		$("#ban1 img").css("content", "url('pics/space67.jpg')");
		$("#ban2 img").css("content", "url('pics/war67.jpg')");
		$("#ban3 img").css("content", "url('pics/tech67.jpg')");
		$("#ban4 img").css("content", "url('pics/pop67.jpg')");
		$("#ban5 img").css("content", "url('pics/civil67.jpg')");
		$("#ban6 img").css("content", "url('pics/misc67.jpg')");
		$("#commentWrap67").css("display", "inline");
	}
	else if (fullYear == 1968){
		$("#ban1 img").css("content", "url('pics/space68.jpg')");
		$("#ban2 img").css("content", "url('pics/war68.jpg')");
		$("#ban3 img").css("content", "url('pics/tech68.jpg')");
		$("#ban4 img").css("content", "url('pics/pop68.jpg')");
		$("#ban5 img").css("content", "url('pics/civil68.jpg')");
		$("#ban6 img").css("content", "url('pics/misc68.jpg')");
		$("#commentWrap68").css("display", "inline");
	}
	else if (fullYear == 1969){
		$("#ban1 img").css("content", "url('pics/space69.jpg')");
		$("#ban2 img").css("content", "url('pics/war69.jpg')");
		$("#ban3 img").css("content", "url('pics/tech69.jpg')");
		$("#ban4 img").css("content", "url('pics/pop69.jpg')");
		$("#ban5 img").css("content", "url('pics/civil69.jpg')");
		$("#ban6 img").css("content", "url('pics/misc69.jpg')");
		$("#commentWrap69").css("display", "inline");
	}
	else if (fullYear == 2015){
		$("#ban1 img").css("content", "url('pics/space15.jpg')");
		$("#ban2 img").css("content", "url('pics/war15.jpg')");
		$("#ban3 img").css("content", "url('pics/tech15.jpg')");
		$("#ban4 img").css("content", "url('pics/pop15.jpg')");
		$("#ban5 img").css("content", "url('pics/civil15.jpg')");
		$("#ban6 img").css("content", "url('pics/misc15.jpg')");
		$("#commentWrap15").css("display", "inline");
	}
}
//More Buttons by Mikey!!
function Increment(check){
	if (check == 1000) {
		var year1000 = parseInt(document.getElementById("y1000").value);
		if (year1000 == 9){
			year1000 = 0;
			document.getElementById("y1000").value = year1000;
		} else {
			year1000++;
			document.getElementById("y1000").value = year1000;
		}
	}
	else if (check == 100) {
		var year100 = parseInt(document.getElementById("y100").value);
		if (year100 == 9){
			year100 = 0;
			document.getElementById("y100").value = year100;
		} else {
			year100++;
			document.getElementById("y100").value = year100;
		}
	}
	else if (check == 10) {
		var year10 = parseInt(document.getElementById("y10").value);
		if (year10 == 9){
			year10 = 0;
			document.getElementById("y10").value = year10;
		} else {
			year10++;
			document.getElementById("y10").value = year10;
		}
	}
	else if (check == 1) {
		var year1 = parseInt(document.getElementById("y1").value);
		if (year1 == 9){
			year1 = 0;
			document.getElementById("y1").value = year1;
		} else {
			year1++;
			document.getElementById("y1").value = year1;
		}
	}
	var fYear = (1000 * parseInt(document.getElementById("y1000").value))
				+(100 * parseInt(document.getElementById("y100").value))
				+(10 * parseInt(document.getElementById("y10").value))
				+(parseInt(document.getElementById("y1").value));
if (fYear >= 1960 && fYear <= 1969){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(188,244,192,1) 0%,rgba(177,249,187,1) 56%,rgba(150,242,161,1) 79%,rgba(144,252,167,1) 100%)");
		$(".year").css("color", "#061204");
	}
	else if (fYear == 2015){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(224,243,250,1) 0%,rgba(216,240,252,1) 56%,rgba(184,226,246,1) 79%,rgba(182,223,253,1) 100%)");
		$(".year").css("color", "#242828");
	}
	else {
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(252,184,170,1) 0%,rgba(253,184,163,1) 56%,rgba(251,157,131,1) 79%,rgba(254,172,134,1) 100%)");
		$(".year").css("color", "#5B5B5B");
	}
}

function Decrement(check){
	if (check == 1000) {
		var year1000 = parseInt(document.getElementById("y1000").value);
		if (year1000 == 0){
			year1000 = 9;
			document.getElementById("y1000").value = year1000;
		} else {
			year1000--;
			document.getElementById("y1000").value = year1000;
		}
	}
	else if (check == 100) {
		var year100 = parseInt(document.getElementById("y100").value);
		if (year100 == 0){
			year100 = 9;
			document.getElementById("y100").value = year100;
		} else {
			year100--;
			document.getElementById("y100").value = year100;
		}
	}
	else if (check == 10) {
		var year10 = parseInt(document.getElementById("y10").value);
		if (year10 == 0){
			year10 = 9;
			document.getElementById("y10").value = year10;
		} else {
			year10--;
			document.getElementById("y10").value = year10;
		}
	}
	else if (check == 1) {
		var year1 = parseInt(document.getElementById("y1").value);
		if (year1 == 0){
			year1 = 9;
			document.getElementById("y1").value = year1;
		} else {
			year1--;
			document.getElementById("y1").value = year1;
		}
	}
	var fYear = (1000 * parseInt(document.getElementById("y1000").value))
				+(100 * parseInt(document.getElementById("y100").value))
				+(10 * parseInt(document.getElementById("y10").value))
				+(parseInt(document.getElementById("y1").value));
if (fYear >= 1960 && fYear <= 1969){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(188,244,192,1) 0%,rgba(177,249,187,1) 56%,rgba(150,242,161,1) 79%,rgba(144,252,167,1) 100%)");
		$(".year").css("color", "#061204");
	}
	else if (fYear == 2015){
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(224,243,250,1) 0%,rgba(216,240,252,1) 56%,rgba(184,226,246,1) 79%,rgba(182,223,253,1) 100%)");
		$(".year").css("color", "#242828");
	}
	else {
		$(".year").css("background", "-webkit-radial-gradient(center, ellipse cover, rgba(252,184,170,1) 0%,rgba(253,184,163,1) 56%,rgba(251,157,131,1) 79%,rgba(254,172,134,1) 100%)");
		$(".year").css("color", "#5B5B5B");
	}
}


// MUSIC LOOPS PER YEAR -mb

function playIfYear(){

	if (fullYear == 1960){ 
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1960CCTTwistLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1961){    
    	var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1961BEKingStndByMeLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1962){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1962BookTGreen%20OnionsLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1963){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1963BobDBlowinWindLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}     
	else if (fullYear == 1964){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1964BBoysIGetAr.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}    
	else if (fullYear == 1965){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1965RStonesSatisfact.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1966){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1966STopLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1967){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1967FunkBrosAnNoMountHigh.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1968){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1968BeatlesHeyJudeLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 1969){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/1969TWhoPinWizLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
	else if (fullYear == 2015){    
        var audio = document.getElementById('audio');
        var source = document.getElementById('mp3Source');
        source.src="../aud/2015MajLazLeanOnLoop.mp3";

        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away 
	}
}

