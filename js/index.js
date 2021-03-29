function hiddenNav() {
		var menu = document.getElementById("topNav");
		var blurBG = document.getElementById("blur");
		if (menu.className === "top-nav") {
			menu.className += " responsive";
			blurBG.className += " responsive";

		} else {
			menu.className = "top-nav-collaspe";
			blurBG.className = "parallax-blur-collaspe";
			setTimeout(function() {
				menu.className = "top-nav";
				blurBG.className = "parallax-blur";
			    }, 500);
		}	
	}