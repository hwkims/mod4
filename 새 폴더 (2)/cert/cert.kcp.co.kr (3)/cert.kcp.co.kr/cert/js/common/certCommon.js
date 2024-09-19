// URL 정보
var TELCOM_SELECT_URL       = "";
                                 
                                 
var MO_PUSH_ACTION_URL      = "";
var MO_PASS_ACTION_URL      = "";
                                 
var MO_SMS_ACTION_URL       = "";
var MO_OTP_FORM_URL         = "";
var MO_PUSH_CONFIRM_URL     = "";
                                 
var MO_SMS_FAIL_URL         = "";
var MO_PASS_FAIL_URL        = "";
                                 
var MO_PASS_APP_INSTALL     = "";
                                 
var MO_MVNO_TELCOM          = "";
                                 
                                 
                                 
var PC_MVNO_TELCOM          = "";
                                 
var PC_PUSH_QR_ACTION_URL   = "";
var PC_PUSH_CONFIRM_URL     = "";
var PC_PUSH_QR_FAIL_URL     = "";
                                 
var PC_SMS_ACTION_URL       = "";
var PC_OTP_FORM_URL         = "";
var PC_SMS_FAIL_URL         = "";
                                 
var PC_PASS_APP_INSTALL     = "";
                                 
                                 
var CERT_RESULT_URL         = "";


try{ TELCOM_SELECT_URL       =  TELCOM_SELECT_URL_RW   }catch(e){ TELCOM_SELECT_URL      =   "telcomSelect.jsp"    }
                                                                                                                          
                                                                                                              
try{ MO_PUSH_ACTION_URL      =  MO_PUSH_ACTION_URL_RW  }catch(e){ MO_PUSH_ACTION_URL      =  "pushForm.jsp"         }
try{ MO_PASS_ACTION_URL      =  MO_PASS_ACTION_URL_RW  }catch(e){ MO_PASS_ACTION_URL      =  "passConfrim.jsp"      }
                                                                                                                          
try{ MO_SMS_ACTION_URL       =  MO_SMS_ACTION_URL_RW   }catch(e){ MO_SMS_ACTION_URL       =  "smsForm.jsp"          }
try{ MO_OTP_FORM_URL         =  MO_OTP_FORM_URL_RW     }catch(e){ MO_OTP_FORM_URL         =  "smsOtpForm.jsp"       }
try{ MO_PUSH_CONFIRM_URL     =  MO_PUSH_CONFIRM_URL_RW }catch(e){ MO_PUSH_CONFIRM_URL     =  "pushConfirm.jsp"      }
                                                                                                                          
try{ MO_SMS_FAIL_URL         =  MO_SMS_FAIL_URL_RW     }catch(e){ MO_SMS_FAIL_URL         =  "smsFail.jsp"          }
try{ MO_PASS_FAIL_URL        =  MO_PASS_FAIL_URL_RW    }catch(e){ MO_PASS_FAIL_URL        =  "passFail.jsp"         }
                                                                                                                          
try{ MO_PASS_APP_INSTALL     =  MO_PASS_APP_INSTALL_RW }catch(e){ MO_PASS_APP_INSTALL     =  "passInstall.jsp"      }

try{ MO_CERT_TELCOM          =  MO_CERT_TELCOM_RW      }catch(e){ mo_CERT_TELCOM          =  "../proc/m_cert_telcom.jsp" }
try{ MO_CERT_OTP_TX          =  MO_CERT_OTP_TX_RW      }catch(e){ mo_CERT_OTP_TX          =  "../proc/m_cert_otp_tx.jsp" }

try{ MO_MVNO_TELCOM          =  MO_MVNO_TELCOM_RW      }catch(e){ MO_MVNO_TELCOM          =  "mvnoTelcomConfirm.jsp"}
                                                                                                                          
                                                                                                               
                                                                                                                          
try{ PC_MVNO_TELCOM          =  PC_MVNO_TELCOM_RW          }catch(e){ PC_MVNO_TELCOM          =  "mvnoTelcomConfirm.jsp"             }
                                                                                                                          
try{ PC_PUSH_QR_ACTION_URL   =  PC_PUSH_QR_ACTION_URL_RW   }catch(e){ PC_PUSH_QR_ACTION_URL   =  "pushQRForm.jsp"                    }
try{ PC_PUSH_CONFIRM_URL     =  PC_PUSH_CONFIRM_URL_RW     }catch(e){ PC_PUSH_CONFIRM_URL     =  "pushConfirm.jsp"                   }
try{ PC_PUSH_QR_FAIL_URL     =  PC_PUSH_QR_FAIL_URL_RW     }catch(e){ PC_PUSH_QR_FAIL_URL     =  "pushQRFail.jsp"                    }
                                                                                                                          
try{ PC_SMS_ACTION_URL       =  PC_SMS_ACTION_URL_RW       }catch(e){ PC_SMS_ACTION_URL       =  "smsForm.jsp"                       }
try{ PC_OTP_FORM_URL         =  PC_OTP_FORM_URL_RW         }catch(e){ PC_OTP_FORM_URL         =  "smsOtpForm.jsp"                    }
try{ PC_SMS_FAIL_URL         =  PC_SMS_FAIL_URL_RW         }catch(e){ PC_SMS_FAIL_URL         =  "smsFail.jsp"                       }
                                                                                                                          
try{ PC_PASS_APP_INSTALL     =  PC_PASS_APP_INSTALL_RW     }catch(e){ PC_PASS_APP_INSTALL     =  "passInstall.jsp"                   }
                                                                                                                     
try{ PC_CERT_TELCOM          =  PC_CERT_TELCOM_RW          }catch(e){ PC_CERT_TELCOM          =  "../proc/cert_telcom.jsp"           }
try{ PC_CERT_OTP_TX          =  PC_CERT_OTP_TX_RW          }catch(e){ PC_CERT_OTP_TX          =  "../proc/cert_otp_tx.jsp"           }
                                                                                                                          
try{ CERT_RESULT_URL         =  CERT_RESULT_URL_RW         }catch(e){ CERT_RESULT_URL         =  "../common/result.jsp"              }

try{ IFRAME_TX_APP_PROCESS   =  IFRAME_TX_APP_PROCESS_RW   }catch(e){ IFRAME_TX_APP_PROCESS   =  "../proc/iframe_tx_app_process.jsp" }

var PASS_APP_DIRECT_TX_TYPE = "2800";

    // 숫자만 입력 가능하도록
	function setOnlyNumber(e) {

        try{
            var keycode;
            var e = event || window.event;
            
            if( window.event ){
                e = window.event;
                keycode = e.keyCode;
                if(keycode == undefined){
                    keycode = e.charCode;
                }
            }else{
                try{
                    keycode = e.keyCode;
                }catch (e) {
					void(0);
                }
                if(keycode == undefined){
                    keycode = e.charCode;
                }
            }       
            
            if (!(  (keycode > 47 && keycode < 58) 
//                 || (keycode > 95 && keycode < 106) 
                 || (keycode == 0 || keycode == 9 || keycode == 8)
                 )
               )
            {
                try {
                    e.returnValue = false;
                    e.preventDefault();
                }catch(e){
                    try {
                        e.preventDefault();
                        e.returnValue = false;
                    }catch(e){ void(0); }
                }
            }           
        }catch(e){ void(0); }
		
    }

    function nocontextmenu()
    {
	    try{
		    event.cancelBubble = true 
		    event.returnValue = false; 
		    return false;
	    }catch(e){ void(0); }
	} 

	function norightclick(e) 
	{
		try{
			if (window.Event) { 
				if (e.which == 2 || e.which == 3) 
					return false; 
			} else { 
				if (event.button == 2 || event.button == 3){ 
		            event.cancelBubble = true 
		            event.returnValue = false; 
		            return false; 
		        }
			}
		}catch(e){ void(0); }
	} 

	function processKey() 
	{
		try{
		    
		    var keycode;
		    var e = event || window.event;
		    
		    if( window.event ){
		        e = window.event;
		        keycode = e.keyCode;
		        if(keycode == undefined){
		            keycode = e.charCode;
		        }
		    }else{
		        try{
		            keycode = e.keyCode;
		        }catch (e) {
					void(0);
		        }
		        if(keycode == undefined){
		            keycode = e.charCode;
		        }
		    }		
			
			// 기본적인 불가 키입력 막기
			try{
    			if( 
    				(e.ctrlKey == true && (keycode == 78 || keycode == 82)) 
    				|| (e.ctrlKey == true && (keycode == 68 || keycode == 86))
    				|| (keycode >= 112 && keycode <= 123) 
    		      ) 
    		    { 
    				e.keyCode = 0; 
    				e.cancelBubble = true; 
    				e.returnValue = false;
    				e.preventDefault();
    		    }
            }catch(e){ void(0); }

            // 이벤트 발생 타겟 감지		    
            var target = e.target || e.srcElement 

            // 백스패이스 막기(제외 : INPUT 필드)
            try{
    			if(target.nodeName != "INPUT"){
    
    			    if(keycode === 8){    
    					e.keyCode = 0; 
    					e.cancelBubble = true; 
    					e.returnValue = false;
    					e.preventDefault();
    			    }    
    			}
			}catch(e){ void(0); }

            // 스패이스 키 막기(제외 : radio, checkbox, 카드 닉네임)
            try{
    			if( target.nodeName == "INPUT" ) {
                    if( target.type != "radio" && target.type != "checkbox" && target.type != "text" ){
        			    if(keycode === 32){    
        					e.keyCode = 0; 
        					e.cancelBubble = true; 
        					e.returnValue = false;
        					e.preventDefault();
        			    }
        			}
    			}
			}catch(e){ void(0); }
			
			
		}catch(e){
			void(0);
		}
	}
	
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	/**
	 * maxlength 체크 : for 크롬, 사파리
	 */	
	function maxLengthCheck(object){
        if (object.value.length > object.maxLength){
            object.value = object.value.slice(0, object.maxLength);
        }    
	}
	
	/**
	 * 자동 포커스 이동(현재객체, 이동객체, MaxLength)
	 */
	function autoFocus(input1, input2, maxLen) {
	    if(input1.value.length == maxLen && event.keyCode != 9 && event.keyCode != 16) input2.focus() ;
	}

	/**
	 * select readonly 처리 : 옵션을 한개만 남김
	 */
    function readonlySelect(obj, value, text){
        obj.length = 0;
        obj.options[0] = new Option(value, text);
    }	
	
    /**
     * text 타입의 마스킹 처리
     * 조건> 
     * view_id : 화면에 보이는 [input:text] 의 아이디
     * id      : 실제 값이 넘어가는 [input:hidden] 의 아이디
     */
    function setMaskPw( view_id, id ){
    	
    	var inputTxt;
    	
    	var viewVal = document.getElementById(view_id).value;
    	
    	if( viewVal.length==1 )
    	{
    		document.getElementById(id).value = "";
    	}
    	
    	var idVal = document.getElementById(id).value;
    	var viewLength;
    	
    	if( idVal.length < document.getElementById(view_id).maxLength )
    	{
            inputTxt = viewVal.substring(viewVal.length-1);
            
            idVal = idVal + inputTxt;
            
            viewLength = viewVal.length;
            viewVal = "";
            
            if( viewLength==document.getElementById(view_id).maxLength )
            {
                for (var k = 0; k < viewLength; k++) {
                    viewVal += "*"; 
                }            	
            }
            else
            {
                for (var k = 0; k < viewLength-1; k++) {
                    viewVal += "*"; 
                }
                viewVal += inputTxt;	
            }
            
            document.getElementById(id).value = idVal;            
            document.getElementById(view_id).value  = viewVal;
    	}
    }
    
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/**
	 * maxlength 체크후 키패드 삭제처리
	 */
    function checkLastInput(obj){
        if (obj.value.length == obj.maxLength){
            try{npVCtrl.hideAll();}catch(e){ void(0); }
        }
    }
    
	// iframe 전문 통신
	function IframeRequest(url, form, callback, flag)
	{
		
		if( document.getElementById("requestIframe")==undefined )
		{

			var target_iframe = document.createElement('iframe');
	        
	        target_iframe.id     = 'requestIframe';
	        target_iframe.name   = 'requestIframe';
	        target_iframe.width  = "0";
	        target_iframe.height = "0";
	        
	        try{
	        	target_iframe.style.visibility = "hidden";
	        	target_iframe.style.display    = "none";
	        }catch(e){
	        	target_iframe.style.left = "0px";
	        	target_iframe.style.top = "-100px";
	        }
	        
	        document.body.appendChild(target_iframe);
	        
	        // IE7 iframe name 값 할당
	        try{ window.frames["requestIframe"].name = 'requestIframe'; }catch(e){ void(0); }
		}
		
		form.target = "requestIframe";
		form.action = url + "?fn_callback=" + callback;
		
		form.id = form.name;
		
		// 키패드 삭제
		try{npVCtrl.hideAll();}catch(e){ void(0); }
		
		// 잉카 서브밋
		//npPfsCtrl.waitSubmit(function(){
			form.submit();
		//});	
		
//		form.submit();
	}
	
    function setPageBlur()
    {
		try{
			// grid-layer 존재 여부 체크
			if($(".grid-layer").length)
			{
				$(".grid-layer").removeClass("is-hide")
			}
		}catch(e){
			console.log( e.toString() );
		}
    }

    function removePageBlur()
    {
		try{
			// grid-layer 존재 여부 체크
			if($(".grid-layer").length)
			{
				$(".grid-layer").addClass("is-hide")
			}
		}catch(e){ void(0); }
    }
    
    
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    /******** 즉시 실행 스크립트 ********/
    
	/* Register Event Listener For FireFox */
	try{
	
	    if( navigator.userAgent.indexOf('Firefox') >= 0 ) {
	
	    	var eventNames = ["mousedown", "mouseover", "mouseout", 
	                          "mousemove", "mousedrag", "click", "dblclick",
	                          "keydown", "keypress", "keyup" ];
	    	
	    	for( var i = 0 ; i < eventNames.length; i++ ) {
	    		window.addEventListener( eventNames[i], function(e) { window.event = e;}, true );
	    	}
	    }
	}catch(e){ void(0); }
	
	
	/* document check */
	try{
			document.onkeydown      = processKey;  
			document.oncontextmenu  = nocontextmenu; 
			document.onmousedown    = norightclick; 
			document.onselectstart  = new Function("return false"); 
			document.ondragstart    = new Function("return false"); 
		
		window.history.forward(0);
	}catch(e){ void(0); }
	
	
	// form_auth 로 통일
	// form_auth 를 "_self" 를 다음페이지로 이동
	function fn_goNext( actionURL )
	{
		// TODO : form_auth 없을때 예외 처리 추가 필요
		if ( actionURL != "" )
		{
			$("#form_auth").attr("target","_self");
			$("#form_auth").attr("action", actionURL);
			$("#form_auth").attr("onsubmit",""); // 고객의 enter 입력으로 인한 submit 방지 해제
			$("#form_auth").submit();
		}
	}

	// form_auth 로 통일
	// form_auth 를 "_self" 를 다음페이지로 이동
	function fn_goErrForm( actionURL )
	{
		// TODO : form_auth 없을때 예외 처리 추가 필요
		if ( actionURL != "" )
		{
			$("#err_form").attr("target","_self");
			$("#err_form").attr("action", actionURL);
			$("#err_form").attr("onsubmit",""); // 고객의 enter 입력으로 인한 submit 방지 해제
			$("#err_form").submit();
		}
	}

	// 실패시 err_form 을 통신사 선택페이지로 이동
	function fn_goIntro()
	{
		document.err_form.method = "post";
		document.err_form.action = TELCOM_SELECT_URL;
		document.err_form.target = "_self";
		document.err_form.submit();
	}

	function iOS_version()
	{
		if(navigator.userAgent.match(/ipad|iphone|ipod/i)){ //if the current device is an iDevice
			var ios_info ={};
			ios_info.User_Agent=navigator.userAgent;
			ios_info.As_Reported=(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0];
			ios_info.Major_Release=(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0];
			ios_info.Full_Release=(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g,".");
			ios_info.Major_Release_Numeric=+(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace("OS ","");
			ios_info.Full_Release_Numeric=+(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace("_",".").replace("_","").replace("OS ","");

			return(ios_info);
		}

		return {};
	}

	function fn_goCancel()
	{
		confirm( '인증을 취소 하시겠습니까?', function(isOk){
			if( isOk )
			{
				if(typeof  MOBILE_FLAG != "undefined" && MOBILE_FLAG == "MOBILE")
				{
					fn_cancelReturn();
				}
				else
				{
					fn_goInitTelcomSelect();
				}
			}		
			else
			{
				$("#btnCancel").focus();
			}
		});

	}

function fn_goInitTelcomSelect()
{
	fieldReset(document.form_auth);

	fn_goNext( TELCOM_SELECT_URL );
}

// 실패시 취소 눌러서 닫는경우
function fn_goFailCancel()
{
	confirm( '인증을 취소 하시겠습니까?', function(isOk){
		if( isOk )
		{
			fn_cancelReturn();
		}
	});
}

function fn_cancelReturn()
{
	// 초기화전 임시 저장
	var Ret_URL = document.form_auth.Ret_URL.value;
	var ruhs = document.form_auth.ruhs.value;
	var site_cd = document.form_auth.site_cd.value;
	var ordr_idxx = document.form_auth.ordr_idxx.value;
	var accessTime = document.form_auth.accessTime.value;

	fieldCancelReset(document.form_auth);

	document.form_auth.res_cd.value  = "9999";
	document.form_auth.res_msg.value = "cancel";
	document.form_auth.Ret_URL.value = Ret_URL;
	document.form_auth.ruhs.value = ruhs;
	document.form_auth.site_cd.value = site_cd;
	document.form_auth.ordr_idxx.value = ordr_idxx;
	document.form_auth.accessTime.value = accessTime;

	document.form_auth.method = "post";
	document.form_auth.action = "../common/result.jsp";
	document.form_auth.target = "_self";
	document.form_auth.submit();
}

// PC 엔터 이벤트 치환
function fn_enterEvent()
{
	$( "div,li,a" ).keypress( function (e) {
		if( e.which == 13 ) {
			$(this).trigger("click");
		}
	});
}

// 약관 표기 처리
function fn_inAgreeContent(device, mobileco, agreeNo)
{
	var url = "_agree_0";
	var comm_id = "";
	var post_url = ".html"

	if( agreeNo != 2 &&  agreeNo != 3 )
	{
		// 이통사별 약관호출
		if (mobileco == "SKT" || mobileco == "SKM")
		{
			comm_id = "_skt";
		}
		else if (mobileco == "KTF" || mobileco == "KTM")
		{
			comm_id = "_kt";
		}
		else if (mobileco == "LGT" || mobileco == "LGM")
		{
			comm_id = "_lgu";
		}
	}

	return device + url + agreeNo + comm_id + post_url;
}

// 약관 타이틀 처리
function fn_inAgreeTitle(device, mobileco, agreeNo)
{
	var title = "";
	var comm_id = "";
	if( agreeNo != 2 &&  agreeNo != 3 )
	{
		// 이통사별 약관호출
		if (mobileco == "SKT" || mobileco == "SKM")
		{
			comm_id = "(SKT)";
		}
		else if (mobileco == "KTF" || mobileco == "KTM")
		{
			comm_id = "(KT)";
		}
		else if (mobileco == "LGT" || mobileco == "LGM")
		{
			comm_id = "(LG U+)";
		}
	}

	switch (agreeNo) {
		case "1" :
			title = "개인정보이용동의";
			break;
		case "2":
			title = "고유식별정보처리동의";
			break;
		case "3":
			title = "서비스이용약관동의";
			break;
		case "4":
			title = "통신사이용약관동의";
			break;
		case "5":
			title = "광고성 정보 수신 동의";
			break;
		case "6":
			title = "개인정보제3자정보제공동의";
			break;
	}
	return title + comm_id;
}

function fn_pcPageSetting()
{
//<![CDATA[
// 페이지 설정
	document.oncontextmenu = function() {
		return false;
	}
	document.ondragstart = function() {
		return false;
	}
//]]>
}






