window.info = {
	msg: {
		//0-정상, 99-유저키 없음, 98-이벤트 날짜 만료, 90-서버 점검중, 201-유저키 검증 실패, 301-선착순 마감
		login: '로그인 후 게임 플레이가 가능합니다.', // 99
		maintenance: '서비스 점검중입니다.', // 90
		endEvent: '종료된 이벤트 입니다.', // 98
		availableFail: '정상적인 경로로 접속해주세요.', // 201
		fail: '현재 접속이 원활하지 않습니다. 잠시후 다시 시도해 주세요!', // -1
		fullHeart:'기회가 가득찼습니다',
		emptyShare:'공유하기 정보가 없습니다',
		fbShareOver:'',
		kakaoShareOver:'',
		smsShareOver:'',
		endgift:'상품이 모두 소진되었습니다.',
		emptyHeart:'기회가 모두 소진되었습니다.',
	},
	data: null
}

$(document).ready(function() {
	$("#top_back,[BackBTNact]").on("click", function () {
		BackProcessACTION();
		return;
	});
	$("#top_close").on("click", function () {
		closeAPPS();
		return;
	});

	if(typeof $("[skmPOPUP_TXT]").attr("skmPOPUP_TXT")!="undefined") {
		$("[skmPOPUP_TXT]").each(function() {
			if($(this).attr("skmPOPUP_TXT")=="Y") {
				$(this).attr('cVC',"_END");
			} else {
				$(this).attr('cVC',"");
			}
			if($(this).attr("stCK")=="ON") {
				skmPOPUP_VIEWER($(this).attr('value').toUpperCase());
			}
		});
	};

	$('.bodyLoading').fadeOut(function(){$('.bodyview').fadeIn();});
	/*
	window.history.pushState(null,'','');
	window.onpopstate = () =>{
		BackProcessACTION();
	}
	window.onpageshow = function(event){
		//window.location="./home?bkc="+gplay;
		if(window.performance.navigation.type == 2){
			window.location.reload();
		}
	}
	*/
	//document.querySelector('#replaceState').addEventListener('click', () => {
		//history.replaceState({ data: 'testData2' }, null, '/replacepage')
	//})

	//history.replaceState(null, null, './home?gplay='+gplay);
});

function sendDATA_chk(val) {
	window.console.log( val );
}
function sendDATA_process(send_url,sdata,cb) {
    if (window.location.origin.indexOf("file") != -1) {
        console.log("로컬이므로 로딩없어짐");
        window.setTimeout(function() {
            $('#loadingWrap').addClass('hide');
        }, 1500);
        return;
    }
    $.ajax({
        url : send_url,
        type : 'POST',
        data : sdata,
        success:function(rs){
			$("#gameProcDIV").html(rs);
        },
        fail: function(data){
            alert("현재 접속이 원할하지 않습니다.\n잠시후 다시 시도해 주세요.");
        }
    });
}


function BackProcessACTION(){
	if(locationCK()=="home") {
		closeAPPS();
	} else {
		var moveBack="N";
		if($("[popviewbox]").attr("popviewbox") == "open") {
			ACT_hidePOP();
			return;
		}
		if($("#content[TABS_MOVE] > section").length>0) {
			$("#content section").each(function(e) {
				var tmp = $(this).children('.mx700').not('.hide').attr('id');
				switch(tmp) {
					case  "main_view" :
						window.location.replace("./home?bkc="+gplay);
						break;
					default :
						clickNavTab('main');
						break;
				}
			});
			return;
		}
		if(moveBack=="N"){
			window.location.replace("./home?bkc="+gplay);
		}
	}
}
function closeAPPS(){
	//alert(userAgentCHK());
	switch(userAgentCHK()) {
		case "AOS"  :
			android.goBack();
			//history.go(-2);
			// 또는 history.back(); 도 사용 가능합니다.
			// 히스토리를 지우면서 현재 페이지를 새로고침하려면 다음 코드를 사용합니다.
			//location.replace(document.referrer);
			//history.back(history.length);
			//
			break;
		case "IOS"  : location.href = "goBack://"; break;
		default		:
			if(locationCK()!="home") window.location.replace("./home?bkc="+gplay);
			else					 alert('제일 첫페이지입니다/'+history.length );
			break;
	}
}

function userAgentCHK(){
	var user = navigator.userAgent;
	if(user.indexOf("Android")>-1)	return "AOS";
	if(user.indexOf("iPhone")>-1)	return "IOS";
	return "WEB";
}

// POPVIEW setting
	function skmPOPUP_btn_check(tp,obj){
		var swCK = ($(obj).attr('ck')=="off")?"on":"off";
		$(obj).attr({"src":"./_plug/"+tp+"_"+swCK+".png","ck":swCK});
	}

	function skmPOPUP_VIEWER(tp) {
		$("#popup-box").removeClass("hide");
		$("[popCONNECT=BG]").show();

		var vNM = tp.toLowerCase();
		var popView = ($('[value='+vNM+'][skmPOPUP_TXT]').attr("cVC")!=undefined)?$('[value='+vNM+'][skmPOPUP_TXT]').attr("cVC"):"";

		$("[popView="+tp+popView+"_BOX]").removeClass('hide');
		$("[popCONNECT="+tp+"]").stop().slideDown(1);
	}
	function skmPOPUP_VIEWER_MESSAGE(tp,txt,cbFNC) {
		$("#popup-box").removeClass("hide");
		$("[popCONNECT=BG]").show();

		var vNM = tp.toLowerCase();
		var popView = ($('[value='+vNM+'][skmPOPUP_TXT]').attr("cVC")!=undefined)?$('[value='+vNM+'][skmPOPUP_TXT]').attr("cVC"):"";

		$("[popView="+tp+popView+"_BOX] [popMSG_TXT]").html(txt);
		$("[popView="+tp+popView+"_BOX]").removeClass('hide');
		$("[popCONNECT="+tp+"]").stop().slideDown(1);

		if(typeof cbFNC=="function") {
			cbFNC();
		}
	}

	function skmPOPUP_PROC(tp){
		var aData = $("#sendDATA").serializeArray();

		$("[popCONNECT="+tp+"] [btnCK]").each(function(){
			mKEY = $(this).attr("btnCK");
			mVAL = $(this).attr("ck");
			aData.push({"name":mKEY,"value":mVAL});
		});
		$.ajax({
			url: "./_gdata/GameResult.php",
			data: {tp:"sysRS","gplay":gplay,ck:aData},
			type: 'POST',
			success: function(rs){
				$("#gameProcDIV").html(rs);
				//if($(aTarget).prop('tagName')=="IFRAME") {
				$('button').button('reset');
			},
			error : function(rs){
				alert("\n관리자에게 문의해주세요");
				$('button').button('reset');
			}
		});
	}

	function skmPOPUP_TXT_SHOW(tp){
		$("[popView="+tp+"_BOX]").stop().slideUp(1);
		$("[popView="+tp+"_TXT]").stop().slideDown(1);
	}
	function skmPOPUP_TXT_CLOSE(tp){
		$("[popView="+tp+"_TXT]").stop().slideUp(1);
		$("[popView="+tp+"_BOX]").stop().slideDown(1);
	}
	function skmPOPUP_CLOSE(tp){
		$("[popCONNECT="+tp+"]").stop().slideUp(1,function(){
			$("[popCONNECT=BG]").hide();

			sdata  = {gplay:gplay,tp:"KAKAO_LOAD"};
			sendDATA_process("./_gdata/GameResult.php",sdata);
		});
	}
	function skmPOPUP_CLOSE_ONLY(tp){
		$("[popCONNECT="+tp+"]").stop().slideUp(1,function(){
			$("[popCONNECT=BG]").hide();
		});
	}
	function ACT_hidePOP(){
		$("[popviewbox]").attr("popviewbox","");
		scrollTopAni();
		if($("[popagree]").is(":hidden")){
			$(".popForm").slideUp(1,function(){
				$(this).addClass('hide'); });$('#modal').animate({"height":"0%"}).after(
				function(){}
			);
		} else {
			$("[popAgree]").fadeOut();
			$("[popForm]").fadeIn();
		}
	}
/**/
// PlusOPTION
	var myLifeVal = 0;
	function myLife_plus(){
		$('.life_count > span').html(myLifeVal);
		$('.warp-box.life img').each(function(){
			if(myLifeVal>0) {
				$(this).attr('src','./res/img/life_on.png?gplay='+gplay);
			} else {
				$(this).attr('src','./res/img/life_off.png?gplay='+gplay);
			}
		});
	}
/**/
// KAKAO share
	var gsv="";
	function kakao_init(){
		if(window._data.share.limit=="E") {
			skmPOPUP_VIEWER('SHARE'); /**/
			return;
		}
		if(window._data.share.limit=="nK") {
			skmPOPUP_VIEWER('nKAKAO'); /**/
			return;
		}
		if(window._data.share.limit!="MM") {
			setTimeout(function(){ skmPOPUP_VIEWER('REALCOUNT')} ,2000);
		}
		//if(userAgentCHK()=="AOS" && (window._data.gcode=="S12" || window._data.gcode=="AD17") ) {
			//skmPOPUP_VIEWER('WAIT');
		//	return;
		//}
		kakaoBTN_name=(window._data.share.bname==""||window._data.share.bname==undefined)?"자세히 알아보기":window._data.share.bname;
		Kakao.Share.sendDefault({/*Link*/
			objectType: 'feed'
			,content: {
				title: window._data.share.title
				,description: window._data.share.desc
				,imageUrl: window._data.share.img
				,imageWidth: 600 ,imageHeight: 315
				,link: { mobileWebUrl: window._data.share.url, webUrl:window._data.share.url }
			},
			buttons: [{title: kakaoBTN_name, link: { mobileWebUrl: window._data.share.url, webUrl: window._data.share.url}}],
			installTalk: true,
			/*
			fail: function() {
			},
			success: function(msg) {
				setTimeout(Load_my_CNT, 5000);
			},
			callback: function() {
				setTimeout(Load_my_CNT, 1500);
			},*/

			serverCallbackArgs: {
				gtp : 'KAKAO'
				,gsv : window._data.share.gsv
				,gplay : gplay
			}
		});window.console.log( gplay );
	}
	function Load_my_CNT(){
		var aData = $("#sendDATA").serializeArray();
		$.ajax({
			url: "./_gdata/GameResult.php",
			data: {tp:"KAKAO_LOAD","gplay":gplay},
			type: 'POST',
			success: function(rs){
				$("#gameProcDIV").html(rs);
			},
			error : function(rs){
			}
		});
	}
/**/
//
	function post_encrypt(clearText,keyText) {
		cLength = clearText.length;
		var cKey10 = new Array(keyText.length);
		var cKey2 = new Array(keyText.length);
		var cKey2all = "";
		var cKeyList = "";

			for (t=0; t<keyText.length; t++) {
				cKey10[t] = keyText.charCodeAt(t);
				cKey2[t] = cKey10[t].toString(2);
				cKey2all += cKey2[t];
			}

		var cKeyLength = cKey2all.length;
		var cText10 = new Array(cLength);
		var cText2 = new Array(cLength);

		var cTextTemp = new Array(64);
		var cTextAll = "";
		for (var i=0;i<cLength;i++){
			cText10[i] = clearText.charCodeAt(i);
			cText2[i] = cText10[i].toString(2);
			while (cText2[i].length%16 != 0) {  cText2[i] = "0"+cText2[i]; };
			var cBinaryTemp = cText2[i];
			cTextAll += cBinaryTemp;
		}
		var cTextAllLength =cTextAll.length;
		var cAllQuot = Math.floor(cTextAll.length/cKeyLength);
		var cAllCyper =new Array(cAllQuot);
		var roundDisplay ="";

		for (j=0;j<cAllQuot;j++){
			for (k=0;k<cKeyLength;k++){
				cAllCyper[j*cKeyLength+k] = cTextAll.substring(j*cKeyLength+k,j*cKeyLength+k+1)^cKey2all.substring(k,k+1);
			}
		};

		var rest= 0;
		if (cTextAllLength%cKeyLength != 0){
			rest= cTextAllLength-cAllQuot*cKeyLength;
			for (j=0;j<rest;j++){
				cAllCyper[cAllQuot*cKeyLength+j] = cTextAll.substring(cAllQuot*cKeyLength+j,cAllQuot*cKeyLength+j+1)^cKey2all.substring(j,j+1);
			};
		};
		var CyperText3 = "";
		var CyperText4 = "";
		for (jj=0;jj<Math.floor(cTextAllLength/8);jj++){
			CyperText4=parseInt(cAllCyper.join("").substring(jj*8,jj*8+8),2).toString(16);

			if (CyperText4.length == 1){CyperText4 ="0"+CyperText4};
			CyperText3 += CyperText4;
		};
		return CyperText3;
	}
	function copyToClipboard(val) {
		var t = document.createElement('textarea');
		t.value = val;
		document.body.appendChild(t);
		t.select();
		document.execCommand('copy');
		document.body.removeChild(t);
	}
	function copy() {
		copyToClipboard(window.info.sns.url);
		alert("URL이 복사되었습니다.");
	}
	function scrollTopAni() { 	// scroll 상단 애니메이션
		$('html, body').animate({ scrollTop: 0}, 600)
	}
	function scrollBottom() { // scroll 아래로 애니메이션없이
		$(window).scrollTop($(document).height());
	}
	function get_query() {// 파라미터를 객체형식으로 가져오는 함수
		var url = document.location.href;
		var qs = url.substring(url.indexOf('?') + 1).split('&');
		for(var i = 0, result = {}; i < qs.length; i++){
			qs[i] = qs[i].split('=');
			result[qs[i][0]] = decodeURIComponent(qs[i][1]);
		}
		return result;
	}
	function locationCK(){
		var tmp = window.location.pathname.split('/');
		tmp = tmp[tmp.length-1];
		return tmp;
	}
	function isMobileSafari() {
		return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
	}
	function numberFormat(number, decimals = 0, decPoint = '.', thousandsSep = ',') {
		number = parseFloat(number).toFixed(decimals);

		let parts = number.split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);

		if (parts[1]) {
			return parts.join(decPoint);
		} else {
			return parts[0];
		}
	}


	function ajax_submit_proc(aTG,aURL,aTP,aVAL){
		$.ajax({
			url: aURL,
			data: {"gplay":gplay,"aTP":aTP,"aVAL":aVAL},
			type: 'POST',
			success: function(rs){
				$(aTG).html(rs);
				$('button').button('reset');
			},
			error : function(rs){
				alert("\n관리자에게 문의해주세요");
				$('button').button('reset');
			}
		});
	}
	function errMsg(code) {
		//window.console.log( code );
		var msg;
		switch (code) {
			case "A" :	msg = "서비스 점검중입니다.잠시후 이용해 주세요";	break;
			case 201:   msg = window.info.msg.availableFail; break;
			case 99: 	msg = window.info.msg.login;		 break;
			case 98: 	msg = window.info.msg.endEvent;		 break;
			case 96: 	msg = window.info.msg.fullHeart;	 break;
			case 95: 	msg = window.info.msg.emptyShare;	 break;
			case 94: 	msg = window.info.msg.fbShareOver;	 break;
			case 93: 	msg = window.info.msg.kakaoShareOver;break;
			case 92: 	msg = window.info.msg.smsShareOver;	 break;
			case 90: 	msg = window.info.msg.maintenance; 	 break;
			case 80: 	msg = window.info.msg.emptyShare; 	 break;
			case 70: 	msg = window.info.msg.endgift; 		 break;

			case -2: 	msg = window.info.msg.emptyHeart;	 break;
			case -1:
			default: 	msg = window.info.msg.fail; 		 break;
		}
		alert(msg);
	}
	function isMobile() {
		var user = navigator.userAgent;
		var is_mobile = false;
		if (user.indexOf("iPhone") > -1 || user.indexOf("Android") > -1) {
			is_mobile = true;
		}
		return is_mobile;
	}
	$(window).scroll(function() {
		if (isMobileSafari()) {
			var scrolledY = $(window).scrollTop();
			$('#content').css('background-position', 'left ' + ((scrolledY)+60) + 'px');
		}
	});
/**/