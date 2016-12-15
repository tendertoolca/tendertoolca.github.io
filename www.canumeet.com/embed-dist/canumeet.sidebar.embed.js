window.CanumeetEmbed = window.CanumeetEmbed || {};
window.CanumeetEmbed.App = (function () {
	// css
	var containerCss = "#canumeet-emfa-container{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-smoothing:antialiased;font-family:Proxima Nova,sans-serif;color:#4D5055;font-size:14px;width:100%;background:#f9f9f9 none repeat scroll 0%}#canumeet-emfa-container .canumeet-launcher-container{position:fixed;bottom:20px;right:20px;z-index:2147483000}#canumeet-emfa-container .canumeet-launcher-container .canumeet-launcher-help-text{z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;cursor:pointer;position:absolute;color:#455a64;font-weight:500;font-size:14px;right:0px;bottom:64px;background-color:#fff;width:280px;border-radius:10px;border:1px solid rgba(0,0,0,.1);box-shadow:0 0 7px rgba(0,0,0,.08);padding:26px 20px}#canumeet-emfa-container .canumeet-launcher-container .canumeet-launcher-help-text:after{content:' ';height:0;position:absolute;width:0;border:10px solid transparent;border-top-color:#fff;top:100%;right:40px}#canumeet-emfa-container .canumeet-launcher-container .canumeet-launcher-help-text:before{content:' ';height:0;position:absolute;width:0;border:12px solid transparent;border-top-color:rgba(99, 99, 99, 0.08);top:100%;right:38px}#canumeet-emfa-container .canumeet-launcher-container .canumeet-launcher{z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;min-width:150px;height:48px;display:block;position:absolute;bottom:0px;right:0px;background:#7668a7;color:#fff;border-radius:30px;cursor:pointer;line-height:48px;text-align:center;box-shadow:0 6px 13px 0 rgba(0,0,0,.23);text-decoration:none;font-weight:bold;font-size:14px;white-space:nowrap;padding:0 15px}#canumeet-emfa-container .canumeet-sidebar{z-index:2147483000;background:#fafafb;background:rgba(250,250,251,.98);border-left:1px solid #dadee2;box-shadow:0 0 4px 1px rgba(0,0,0,.08);position:fixed;visibility:hidden}#canumeet-emfa-container .canumeet-sidebar-header{z-index:2147483002;box-shadow:0 1px 2px 0 rgba(0,0,0,.12);background:#fff;overflow:hidden;position:absolute;top:0;right:0;width:100%;height:48px}#canumeet-emfa-container .canumeet-sh-title-c{z-index:2147483000;position:absolute;left:0;top:0;width:100%;height:100%;text-align:center;-moz-text-align-last:center;text-align-last:center;pointer-events:none}#canumeet-emfa-container .canumeet-sidebar-header-title{line-height:48px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:15px;line-height:48px;font-weight:500;color:#465c66;letter-spacing:.2px;display:inline-block;max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#canumeet-emfa-container .canumeet-sidebar-header-control{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAq0lEQVR42o2RMQoCMRBFcwQ776C11upOekHEnaC47sQbWomIlWfRSm+wZiBFIAzfgYEw/PeKfLdYdyNiuSz5OHV/TLM9TTSvnPMsVx/ikPadBQh8aZ6C3Fyz62bp8SkFEOT4XQWZ670SaBCCeWwBBm0Bcb+xQSwYEFgLOO5L2LdyAEj9ObpGC7gOavuz0QLu0WoBgqhGCEJBOtwBWAly/qG1jInlWYJIoHnlfhcTzX2HEVUjAAAAAElFTkSuQmCC);background-size:13px 13px;background-repeat:no-repeat;width:16px;height:16px;opacity:.6;margin-top:17px;margin-right:15px}#canumeet-emfa-container .canumeet-sidebar-content{padding-top:48px;height:100%}#canumeet-emfa-container .canumeet-sidebar.right{height:100%;width:368px;bottom:0;right:0;-ms-transform:translate(100%, 0);-webkit-transform:translate(100%, 0);transform:translate(100%, 0);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}#canumeet-emfa-container .canumeet-sidebar.left{height:100%;width:368px;bottom:0;left:0;-ms-transform:translate(-100%, 0);-webkit-transform:translate(-100%, 0);transform:translate(-100%, 0);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}#canumeet-emfa-container .canumeet-sidebar.show-sidebar{-ms-transform:translate(0, 0);-webkit-transform:translate(0, 0);transform:translate(0, 0);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;visibility:visible}#canumeet-emfa-container .canumeet-sidebar-btn{font-size:14px;z-index:2147483000;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:fixed;opacity:0.95;text-decoration:none;color:white;-webkit-border-radius:0px;-moz-border-radius:0px;-o-border-radius:0px;-ms-border-radius:0px;border-radius:0px;background:#7668a7;padding:14px 15px 12px 12px;line-height:14px;float:none;text-shadow:none;margin-top:-35px;font-weight:bold}#canumeet-emfa-container .canumeet-sidebar-btn.canumeet-right{top:47%;padding:12px 15px 16px 15px;right:39px;border-top-left-radius:10px;border-top-right-radius:10px;-moz-transform-origin:right top;-webkit-transform-origin:right top;-o-transform-origin:right top;transform-origin:right top;-ms-transform-origin:right top;-webkit-transform:rotate(-90deg);-moz-transform:rotate(-90deg);-o-transform:rotate(-90deg);-ms-transform:rotate(-90deg)}#canumeet-emfa-container .canumeet-sidebar-btn.canumeet-left{top:47%;padding:12px 15px 16px 15px;left:39px;border-top-left-radius:10px;border-top-right-radius:10px;-moz-transform-origin:left top;-webkit-transform-origin:left top;-o-transform-origin:left top;transform-origin:left top;-ms-transform-origin:left top;-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);-o-transform:rotate(90deg);-ms-transform:rotate(90deg)}#canumeet-emfa-container .canumeet-sidebar-btn.canumeet-right:hover{right:41px;opacity:1}#canumeet-emfa-container .canumeet-sidebar-btn.canumeet-left:hover{left:41px;opacity:1}@media screen and (max-width: 500px){#canumeet-emfa-container .canumeet-sidebar.right,#canumeet-emfa-container .canumeet-sidebar.left{width:100% !important}}";
		// App Constants
	var APP_CONSTANT = {
		APP_CONTAINER: 'canumeet-emfa-container',
		BTN_TEXT: 'Request a Demo',
		BTN_TYPE: 'lnb',
		SIDEBAR_LOACTION: 'right',
		HOST: 'http://www.canumeet.com'
	};
    /* 
    	Initialize the application
		btnProperty.btnType: - sl (side left) , sr (side right, lnb (launch button bottom right)
		btnProperty.btnText: button text
		btnProperty.bgColor : button background color
		btnProperty.color : button text color
		btnProperty.showHelperText : true, false (only applicable for lnb type button)
		btnProperty.helperText : text to be shown
		btnProperty.btnTopPosition : values in % or px (only applicable for sl and sr type button)
		sidebarLoc: left , right - sidebar loaction
    */
    var canumeetContainer = '';
    var userKey = '';
    var globalHost = '';
    // helper method
    function hasClass(element, cls) {
	    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
	};
    var toggleApp = function() {
    	var sidebar = document.getElementById('canumeet-sidebar-em-app');
    	if (!hasClass(sidebar,'show-sidebar')) {
    		sidebar.className += ' show-sidebar'
    	} else {
    		sidebar.className = sidebar.className.replace( /(?:^|\s)show-sidebar(?!\S)/g , '' );
    	};
    };
    var goBack = function(event) {
    	event.stopPropagation();
    	var win = document.getElementById("canumeetEmbedWidgetNavListner").contentWindow;
    	win.postMessage(
	      "goBack",
	      globalHost
	    );
    };
    // Message from iframe
    function messageFromIframe(event) {
	    event.stopPropagation();
	    if (event.data && event.data == 'showBackButton') {
	    	document.getElementById('canumeetSidebarHeaderControlBackButton').style.display = 'block';
	    } else {
	    	document.getElementById('canumeetSidebarHeaderControlBackButton').style.display = 'none';
	    }
	}
    var setupApp = function(key, btnProperty, sidebarLoc, hostC) {
    	//Setup sidebar
    	var sidebarLoc = !!sidebarLoc ? sidebarLoc : APP_CONSTANT.SIDEBAR_LOACTION;
    	var btnText = (!!btnProperty && !!btnProperty.btnText) ? btnProperty.btnText : APP_CONSTANT.BTN_TEXT;
    	var btnType = (!!btnProperty && !!btnProperty.btnType) ? btnProperty.btnType : APP_CONSTANT.BTN_TYPE;
    	var btnTmplt = '';
    	var btnStyle = '';
    	var host = !!hostC ? hostC : APP_CONSTANT.HOST;
    	host = host + '/embed/' + key;
    	host = host + '?showBackButtonInFrame=no';
    	if (!!btnProperty) {
    		if (!!btnProperty.bColor) {
    			var background = 'background:'+ btnProperty.bColor +' !important;';
    			btnStyle += background;
    		};
    		if (!!btnProperty.color) {
    			var txtColor = 'color:'+ btnProperty.color +' !important;';
    			btnStyle += txtColor;
    		};
    		if (!!btnProperty.btnTopPosition && (btnType === 'sl' || btnType === 'sr')) {
    			var pos = 'top:'+ btnProperty.btnTopPosition +' !important;';
    			btnStyle += pos;
    		};
    	};
    	var template = '';
    	btnTmplt = '';
		if(btnType === 'sl' || btnType === 'sr') {
			btnTmplt = '<a href="" id="canumeet-sidebar-btn" onclick="CanumeetEmbed.App.toggleApp(event);return false;" class="canumeet-sidebar-btn canumeet-'+ sidebarLoc +'" style="'+ btnStyle +'">'+ btnText +'</a>'
		} else {
			btnTmplt = '<div id="canumeet-launcher-container" class="canumeet-launcher-container"><div id="canumeet-launcher-help-text" class="canumeet-launcher-help-text" style="display:none;"></div><div id="canumeet-launcher" class="canumeet-launcher" style="'+ btnStyle +'" onclick="CanumeetEmbed.App.toggleApp(event)">'+  btnText +'</div></div>';
		};
		template += btnTmplt;

    	template += '<div id="canumeet-sidebar-em-app" class="canumeet-sidebar ' + sidebarLoc +'">'+
							'<div class="canumeet-sidebar-header">'+
								'<div id="canumeetSidebarHeaderControlBackButton" onclick="CanumeetEmbed.App.goBack(event)" style="display:none;float:left;cursor:pointer;margin-top: 11px;margin-left: 12px;">' +
									'<img style="width:16px;height:16px;" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI4NC45MzUgMjg0LjkzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjg0LjkzNSAyODQuOTM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTExMC40ODgsMTQyLjQ2OEwyMjIuNjk0LDMwLjI2NGMxLjkwMi0xLjkwMywyLjg1NC00LjA5MywyLjg1NC02LjU2N2MwLTIuNDc0LTAuOTUxLTQuNjY0LTIuODU0LTYuNTYzTDIwOC40MTcsMi44NTcgICBDMjA2LjUxMywwLjk1NSwyMDQuMzI0LDAsMjAxLjg1NiwwYy0yLjQ3NSwwLTQuNjY0LDAuOTU1LTYuNTY3LDIuODU3TDYyLjI0LDEzNS45Yy0xLjkwMywxLjkwMy0yLjg1Miw0LjA5My0yLjg1Miw2LjU2NyAgIGMwLDIuNDc1LDAuOTQ5LDQuNjY0LDIuODUyLDYuNTY3bDEzMy4wNDIsMTMzLjA0M2MxLjkwNiwxLjkwNiw0LjA5NywyLjg1Nyw2LjU3MSwyLjg1N2MyLjQ3MSwwLDQuNjYtMC45NTEsNi41NjMtMi44NTcgICBsMTQuMjc3LTE0LjI2N2MxLjkwMi0xLjkwMywyLjg1MS00LjA5NCwyLjg1MS02LjU3YzAtMi40NzItMC45NDgtNC42NjEtMi44NTEtNi41NjRMMTEwLjQ4OCwxNDIuNDY4eiIgZmlsbD0iIzk4YTVhYiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />'+
								'</div>' +
								'<div class="canumeet-sh-title-c">' +
									'<div class="canumeet-sidebar-header-title">' + btnText + '</div>' + 
								'</div>' + 
								'<div onclick="CanumeetEmbed.App.toggleApp(event)" style="float:right;cursor:pointer;">' +
									'<div class="canumeet-sidebar-header-control"></div>' +
								'</div>' +	
							'</div>' +
							'<div class="canumeet-sidebar-content">' +
								'<iframe id="canumeetEmbedWidgetNavListner" src="'+ host +'"  frameborder="0" style="position: relative;width: 100%;height:100%;"></iframe>'+ 
							'</div>' +
						'</div>';
		var div = document.createElement("div");
		div.innerHTML = template;
		canumeetContainer.appendChild(div);
		// Message from iframe listener
	  	if (window.addEventListener){
	    	addEventListener("message", messageFromIframe, false)
	  	} else {
	    	attachEvent("onmessage", messageFromIframe)
	  	}
    };

    // For AJAX request
    var ajax = {};
	ajax.x = function () {
	    if (typeof XMLHttpRequest !== 'undefined') {
	        return new XMLHttpRequest();
	    }
	    var versions = [
	        "MSXML2.XmlHttp.6.0",
	        "MSXML2.XmlHttp.5.0",
	        "MSXML2.XmlHttp.4.0",
	        "MSXML2.XmlHttp.3.0",
	        "MSXML2.XmlHttp.2.0",
	        "Microsoft.XmlHttp"
	    ];

	    var xhr;
	    for (var i = 0; i < versions.length; i++) {
	        try {
	            xhr = new ActiveXObject(versions[i]);
	            break;
	        } catch (e) {
	        }
	    }
	    return xhr;
	};

	ajax.send = function (url, callback, method, data, async) {
	    if (async === undefined) {
	        async = true;
	    }
	    var x = ajax.x();
	    x.open(method, url, async);
	    x.onreadystatechange = function () {
	        if (x.readyState == 4) {
	            callback(x.responseText)
	        }
	    };
	    if (method == 'POST') {
	        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    }
	    x.send(data)
	};

	ajax.get = function (url, data, callback, async) {
	    var query = [];
	    for (var key in data) {
	        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	    }
	    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
	};

	ajax.post = function (url, data, callback, async) {
	    var query = [];
	    for (var key in data) {
	        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
	    }
	    ajax.send(url, callback, 'POST', query.join('&'), async)
	};

    var init = function (key,host) {
    	globalHost = host;
    	ajax.get(host + '/api/embed/settings', {key: key}, function(response) {
    		var resObj = JSON.parse(response);
    		if (!!!resObj.embedDetails) return;
    		if (!!resObj.embedDetails && (resObj.embedDetails === 'removed' || resObj.embedDetails === 'disabled')) return;
    		var canumeetContainerTmplt = document.createElement('div');
	    	canumeetContainerTmplt.id = APP_CONSTANT.APP_CONTAINER;
	    	canumeetContainerTmplt.innerHTML = '<style type="text/css">' + containerCss + '</style>';
	    	canumeetContainer = document.body.appendChild(canumeetContainerTmplt);
	    	if (resObj.embedDetails.events.length > 1) {
	    		userKey = 'profile/' + resObj.embedDetails.username + '/' + resObj.embedDetails._id;
	    	} else {
	    		userKey = 'event/' +resObj.embedDetails.username + '/' + resObj.embedDetails.events[0] + '/' + key;
	    	}
	        // setup app
	        setupApp(userKey,resObj.embedDetails.bSettings,resObj.embedDetails.wSettings.sidebarLoc,host);
    	});
    };
     
    // Return the public facing methods for the App
    return {
        init: init,
        toggleApp: toggleApp,
        goBack :goBack
    };
}());