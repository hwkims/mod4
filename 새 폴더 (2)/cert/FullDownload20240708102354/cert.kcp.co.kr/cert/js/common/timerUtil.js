/********************************************************/
/* timerUtil.js											*/
/********************************************************/
/* timer 사용시 반드시 err_form 있어야 합니다.			*/
/* 알뜰폰 인증 실패할 경우 intro 페이지로 이동 처리		*/
/********************************************************/
var DEFAULT_SMS_EXPR_TIME = 300; // SMS 인증시간 (접근성이슈로 변경)
var DEFAULT_SMS_RESEND_TIME = 120; // SMS 재전송 버튼 노출시간

var DEFAULT_QR_EXPR_TIME = 360;  // QR 인증시간
var DEFAULT_QR_RESEND_TIME = 120;  // QR 재전송 버튼 노출 시간

var checkSMSTime = DEFAULT_SMS_EXPR_TIME; //필요한 초만큼 입력
var checkQRTime = DEFAULT_QR_EXPR_TIME;   //필요한 초만큼 입력

var iSecond = 0;

var van_sms_yn = "";
var safe_guard_yn ="";

var iAuthTime         = 0;

function  fnTimeCheck(device)
{
    // 전연변수로 변경
    iSecond = checkSMSTime - ( ( Math.floor((new Date()).getTime() / 1000) ) - iAuthTime );
    var rMinute = parseInt(iSecond / 60);
    var rSecond = iSecond % 60;

    if(iSecond > 0) 
                {
//    	재전송 버튼시 횟수 제한기능을 DB(or redis)로 변경하기전 취약점이 발생합니다.
//        if (iSecond == DEFAULT_SMS_EXPR_TIME)
//        {
//        }
//        else
//        {
//            if( iSecond < DEFAULT_SMS_RESEND_TIME )
//            {
//                if ( $("#btn_resend").css("display") == "none" )
//                {
//                    $("#btn_resend").css("display","inline-block");
//                }
//            }
//        }

        $("#timeArea").text(Lpad(rMinute, 2) + ":" + Lpad(rSecond, 2));

        setTimeout("fnTimeCheck('"+device+"')", 1000); // 1초 간격으로 체크
    }
    else
    {
        $("#timeArea .num").text("0:00");
        $("#timeArea").text("0:00");

        setPageBlur();

        otp_timer_pay = true;

        alert( "승인유효시간이 초과하였습니다.\n다시 진행해 주시기 바랍니다.", function(){ fn_goIntro(); } );
        
        removePageBlur();
    }
}

//QR타임 은 PC 전용 함수
function  fnQRTimeCheck()
{
    // 전연변수로 변경
    iSecond = checkQRTime - ( ( Math.floor((new Date()).getTime() / 1000) ) - iAuthTime );
    var rMinute = parseInt(iSecond / 60);
    var rSecond = iSecond % 60;

    if(iSecond > 0) 
        {
            $("#timeArea").text(Lpad(rMinute, 2) + ":" + Lpad(rSecond, 2));      // PC

        setTimeout("fnQRTimeCheck()", 1000); // 1초 간격으로 체크
    }
    else
    {
        $("#timeArea").text("0:00");

        setPageBlur();

        otp_timer_pay = true;

        
        alert( "승인유효시간이 초과하였습니다.\n다시 진행해 주시기 바랍니다.",  function(){ pop_close(); } );
        
        removePageBlur();
    }
}

Lpad=function(str, len) {
    str = str + "";

    while(str.length < len) {
        str = "0"+str;
    }
    return str;
}


$(document).ready(function() {

    // 유효시간 리셋
    $('body').on('click', '#timeReset', function() {
    	// TODO : 해당 기능 노출시 현재 무한 연장이 가능한 취약점이 계속 확인되어
    	// redis 도입후 1회만 연장 가능하게 구현가능할때 오픈하세요

    	//checkTime = 180;
        // otp_extension_cnt++;
        //
        // clearTimeout(timerchecker);
        //
        // iAuthTime = Math.floor( (new Date()).getTime() / 1000 );
        //
        // initTimer();
        //
        // otp_timer_pay = false;
        // otp_auth_cnt  = 0;
        //
        // otp_ajax_flag = true;

    });

});

// 딜레이
function fn_timer(delay){
    var currentTimeSecMs = Date.now();
    do{
        var compareTimeSecMs = Date.now();
    }while( currentTimeSecMs+delay > compareTimeSecMs ){
    }
}

