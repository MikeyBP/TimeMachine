//KH code mostly / Edited by TL and mb

			function phoneDashes() {
				var phoneNum = $("#phoneNumber").val();
				if (phoneNum.length == 10 && isFinite(String(phoneNum))){
					phoneNum = phoneNum.slice(0,3)+"-"+phoneNum.slice(3,6)+"-"+phoneNum.slice(6,10);
					$("#phoneNumber").val(phoneNum);
				}
				else if (phoneNum.length == 12){}
				else {
					$("#phoneNumber").val("");
				}
			}
			//Adds a dash where needed after the user clicks out of the phone number input text-box (onBlur). - KH
			// Edited by Mikey to eliminate check bugs

			function getCookie(NameOfCookie){

				if (document.cookie.length > 0) {
					begin = document.cookie.indexOf(NameOfCookie+"=");
					if (begin != -1) {
						begin += NameOfCookie.length+1;
						end = document.cookie.indexOf(";", begin);
						if (end == -1) end = document.cookie.length;
						return unescape(document.cookie.substring(begin, end));
						}
				}
				return null;

			}
			//This function here is used to check and see if a cookie is present on the page to verify if used had visited here before or not.  This is needed in cookieSave. - KH

			function setCookie(NameOfCookie, value, expiredays) {

				var ExpireDate = new Date ();
				ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
				document.cookie = NameOfCookie + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + ExpireDate.toUTCString());

			}
			//This function here is used to save the cookie after getCookie determines that a cookie has not yet been set.  This is needed in cookieSave. - KH

			function cookieSave() {

				var cookieString = document.cookie;
				//Finds the cookie document and assigns it to string cookieString. - KH

				var first = document.getElementById("firstName").value;
				var last = document.getElementById("lastName").value;
				var phone = document.getElementById("phoneNumber").value;
				var region = document.getElementById("province").value;
				var area = document.getElementById("city").value;
				//Creates 5 variables to hold my first name, last name, phone number, province, and city of the user input and further gives them the text values of the specified text inputted. - KH

				if (first=="" || last=="" || phone=="" || region=="" || area=="") {
					alert("Please fill out all 5 required fields");
				}
				else {
					username= "First_Name_"+first+"Last_Name_"+last+"Phone_Number_"+phone+"Province_"+region+"City_"+area+"__";
					setCookie('TimeMachineCookie',username,365);
					document.getElementById("firstName").value = "";
					document.getElementById("lastName").value = "";
					document.getElementById("phoneNumber").value = "";
					document.getElementById("province").value = "";
					document.getElementById("city").value = "";
					alert("User "+first+" "+last+" Registered");
					Hide(); //Mikey Adjusted
				}
				//Cookie expire date is set for 1 year (365 days) from current day. - KH
				//Checks if the username exists, if so the user is presented with a you have already created your account, if not the function will add the users first + last name and assign the concatenated value as the username (will also include phone number, province, and city). - KH
				//Tweaked this code and added the else if to check that the user didn't leave a field blank. - KH

			}


			//Mikey's cookie. don't touch!
			function cookieYearSave(fullYear) {
				document.cookie = ("FullYear_"+fullYear+"||");
			}

			function cookieYearGet(){
				var cookieString = document.cookie;
				var fy1 = cookieString.indexOf("FullYear_");
				var fy2 = cookieString.indexOf("||");
				var fyt = cookieString.substring(fy1+9, fy2);
				if (fyt == ""){
					fyt = 2015;
				}
				return fyt;
			}
			//End of Mikey Cookie

			function cookieTest() {

  				event.preventDefault();
				var cookieString = document.cookie;
				//Finds the cookie document and assigns it to string cookieString. - KH

				var fn1 = cookieString.indexOf("First_Name_");
				var fn2 = cookieString.indexOf("Last_Name_");
				var fnt = cookieString.substring(fn1+11, fn2);
				//Finds the First Name from the cookie document if it exists already. - KH

				var ln1 = cookieString.indexOf("Last_Name_");
				var ln2 = cookieString.indexOf("Phone_Number_");
				var lnt = cookieString.substring(ln1+10, ln2);
				//Finds the Last Name from the cookie document if it exists already. - KH

				var firstLogin = document.getElementById("firstNameLogin").value;
				var lastLogin = document.getElementById("lastNameLogin").value;
				//Create variables to pass the text fields for login to the function. - KH

				if (firstLogin == "" || lastLogin == "") {
					alert("Please enter a first name and last name for the site");
					Show(); //Mikey Adjusted
				}
				else if (firstLogin == "admin" && lastLogin == 1234) {
						var first = document.getElementById("firstNameLogin").value;
						var last = document.getElementById("lastNameLogin").value;
						username= ("First_Name_"+first+"Last_Name_"+last);
						setCookie('TimeMachineCookie',username,365);
						$('form').fadeOut(50);
						$('#welcome').fadeIn(400); //Added Time Machine Explination -PP
					}
				else if (fnt != firstLogin || lnt != lastLogin) {
						alert("Invalid information.\nPlease register.");
						Show(); //Mikey Adjusted
					}
				else {
						$('form').fadeOut(50);
						$('#welcome').fadeIn(400); //Added Time Machine Explination -PP
					}
				//If/else statement checks that the username fields have been populated and that the username is correct from the cookies following which will displays an alert accordingly (both for the first name and the last name).  If both the first name and last name are correct the user will be redirected to the main redirection page. - KH

			}
			//Wrote this function all by myself as well.  Function cookieTest is used to make sure the login page is reading from the cookie correctly and as well that there are no issues with the users login name. - KH


			$("#phoneNumber").attr("maxlength", 10);
			//This keeps the phone numbers text-box length below 10, to accommodate the phone number. - KH



//-001.04 - Not so much a bug, but would be nice to have the provinces presented as a drop down menu.
