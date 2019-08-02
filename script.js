
		
		$(document).ready(function(){
		
	
			FillDOM();
		
			checkCookies();
				
			$('input:button').click(function(){
				
				getValues();
				
				StoreCookies();

			})
			

			
			
		});
		
		function FillDOM(){
		
			AvailHouses = ["Ruby", "Emerald", "Topaz"];
		
						
		}
		
		function checkCookies(){
		
			
			
		}
		
		function getValues(){
					
		
		};
		
		function StoreCookies(){
			
			
		}
		
		function updateTextInput(val) {
     		document.getElementById('textInput').innerHTML = val+"metres"; 
			
		}

//Cookies Functions//

		function setCookie(cookieName,value,exdays){
			var exdate=new Date();
			exdate.setDate(exdate.getDate() + exdays);
			var  cookieValue=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
			document.cookie=cookieName + "=" + cookieValue;
		}
		
		function doesCookieExist(cookieName) {
			var value=getCookie(cookieName);
			if (value!=null && value!="") {
				return true;
			} else {
				return false;
			}
		}
		
		function getCookieValue(cookieName) {
			var value=getCookie(cookieName);
			if (value!=null && value!="") {
				return value.split(",")[0];
			} else {
				return null;
			}
		}
		
		function deleteCookie(cookieName) {
			setCookie(cookieName, "", -1);	
		}
		
		function getCookie(cookieName) {
			var cookie = document.cookie;
			var c_start = cookie.indexOf(" " + cookieName + "=");
			if (c_start == -1) {
				c_start = cookie.indexOf(cookieName + "=");
			}
			
			if (c_start == -1) {
				cookie = null;
			} else {
				c_start = cookie.indexOf("=", c_start) + 1;
				var c_end = cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = cookie.length;
				}
				cookie = unescape(cookie.substring(c_start,c_end));
			}
			
			return cookie;
		}

