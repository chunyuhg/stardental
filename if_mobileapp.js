//function openClient(scheme_url, download_url, timeout = 600) {
/**************************************
detect if mobile{

	safari:use iframe
	google:settimeout
	chrome:settimeout
	}
***************************************/
function openClient(timeout = 600) {
	
    var startTime = Date.now();
    var ifr = document.createElement('iframe');
	ifr.id='ifr';
    ifr.src = 'fb://page/?id=274349595971533';
    ifr.style.display = 'none';
    document.body.appendChild(ifr);
	
	/*	
	var t = setTimeout(function() { //settimeout doesnt work in safari 
	
	var endTime = Date.now();
	//alert(startTime)
	if (!startTime || endTime - startTime < timeout + 200) {

		//未安裝應用程式執行部分
		//if (confirm("您未安裝 Line，要前往 Line 官網嗎？")) {
		window.open('https://facebook.com/274349595971533', "_blank");
		}
	}, timeout);
	
    */
	window.onblur = function() {
		var if_ifr=document.getElementById('ifr');
		
		if(if_ifr){
		
			if_ifr.remove();
			location.reload()
		
		}
	}
       
}
function _movbileapp(){
	//var u = navigator.userAgent;
	//var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	//var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	
	var browser={
		versions:function(){
			var u = navigator.userAgent, app = navigator.appVersion;
			//alert(u)
			//alert(app)
			return {
				//trident: u.indexOf('Trident') > -1, //IE内核
				//presto: u.indexOf('Presto') > -1, //opera内核
				//webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				//gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
				fb: u.indexOf('FBAV') >-1 || u.indexOf('FBAN') >-1,
				//fb:u.indexOf('FBAN') >-1 || u.indexOf('FBAV') >-1,
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				//webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
				//weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
				//qq: u.match(/\sQQ/i) == " qq" //是否QQ
			};
		}(),

	};

	
	

	if (browser.versions.ios || browser.versions.android ){
	
		window.open('fb://page/?id=274349595971533','_self');
		//alert(rtn)
			
		
	}
	if(rtn==null){
		window.open('https://facebook.com/274349595971533','_blank')
	}
		//return 0;
	//}
	//window.open('https://facebook.com/274349595971533','_self');	
	
};