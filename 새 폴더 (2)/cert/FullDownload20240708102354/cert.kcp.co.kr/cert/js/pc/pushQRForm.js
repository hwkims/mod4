
var clickNext = false;

var btn_popup_focus = ''; // PGWEBDEV-286 접근성 버튼 클릭후 돌아갈 포커스 

// 최초 시나리오 일반 -> 가상키패드
var vkeyUse = false;

var m_BackCallState = "FALSE"; // 뒤로가기 방지

var otp_ajax_flag     = true;
var qr_req_cont      = 0;

var mvno_per_cert_no = "";

var kcp_curr_page_name = "pushQRForm";

$(document).ready(function() {

    fn_pcPageSetting();
    // 이벤트 등록
    eventFunc();

    fn_popResize();

    fn_vKeyStart();

    // 캡챠 생성
    nonvolatile();
});

$(window).on("load", function(){

    fn_preCertFixedType();

    // 로컬스토리지에서 사용자 정보 불러오기
    fn_preSelectUserInfo(preSelectUserName , preSelectPhoneNo);

    fn_enterEvent();

    setPreInputData();
});

function  eventFunc() {


    // 초기화
    $("#mobileno").bind("keyup", function() {
        if ($.trim($(this).val()) == "") {
            $(".btn_skip").removeClass("on");
        } else {
            $(".btn_skip").addClass("on");
        }
    });


    // 초기화
    $('body').on('click', '.gnb_wrap li a', function() {
        if ($.trim($(this).val()) == "") {
            $(".btn_skip").removeClass("on");
        } else {
            $(".btn_skip").addClass("on");
        }
    });

    // 상단 메뉴 링크
    $('body').on('click', '.gnb_wrap li a', function() {
        var byId = $(this).attr("id");
        var mobile_auth_type = "";
        if (byId === "qr_auth") {
            mobile_auth_type = "QR";
        } else if (byId === "simple_auth") {
            return false;
        } else if (byId === "sms_auth") {
            mobile_auth_type = "SMS";
        }
    });

    // 인증요청
    $('body').on('click', '#btnSubmit', function() {

        // 중복 클릭 방지
        fn_btnDisp(true);


        if (clickNext === true)
        {
            fn_btnDisp(false); // 중복방지

            return;
        }

        // 입력데이터 체크
        if (fn_validation_value("PUSH", "PC" ) === false)
        {
            fn_btnDisp(false); // 중복방지

            return;
        }

        // 보안문자 체크
        if (fn_chkChatcha() === false)
        {
            fn_btnDisp(false); // 중복방지

            return;
        }

        fn_captcha_auth_req();

        clickNext = true;
    });

    // 인증요청
    $('body').on('click', '#btnQRSubmit', function() {

        // 중복 클릭 방지
        fn_btnDisp(true);


        if (clickNext === true)
        {
            fn_btnDisp(false); // 중복방지

            return;
        }

        // Polling 종료
        try { fn_cleanPassNotiLoop(); } catch(e){ void(0); } // pollingUtil.js
        
        fn_pass_qr_auth_req();

        clickNext = true;
    });

    $('body').on('click', '.btn-keypad', function() {

        $( "#phone_no_vKey" ).val("");
        $( "#phone_no_rKey" ).val("");

        if (vkeyUse)
        {
            // 일반키패드로 전환

            $(".btn-keypad").removeClass("is-on");
            $( ".btn-keypad span" ).text("보인키패드 전환");
            try{npVCtrl.hideAll();}catch(e){ void(0); } // 키패드 삭제

            $( "#phone_no_rKey" ).show();
            $( "#phone_no_vKey" ).hide();
            $( "#phone_no_rKey" ).focus();

            vkeyUse = false;
        }
        else
        {
            // 가상키패드로 전환
            $(".btn-keypad").addClass("is-on");
            $( ".btn-keypad span" ).text("일반키패드 전환");

            $( "#phone_no_rKey" ).hide();
            $( "#phone_no_vKey" ).show();
            $( "#phone_no_vKey" ).focus();

            vkeyUse = true;
        }

    });

    // 취소
    $('body').on('click', '#btnCancel', function() {
        // Polling 종료
    	try { fn_cleanPassNotiLoop(); } catch(e){ void(0); } // pollingUtil.js
        
        fn_goCancel();
    });

    // 취소
    $('body').on('click', '#btnQRCancel', function() {
        try { fn_cleanPassNotiLoop(); } catch(e){ void(0); } // pollingUtil.js

        pop_close();
    });

    $('body').on('click', '#btn_resend', function () {

        // 기획에는 무제한으로 처리 요청해서 무제한처리(NICE 가 무제한)
/* 연장기능 제거
            // 120 이하로 남았는지 체크
            if (iSecond < 120) {
            	
            	// polling 종료후 qr 요청
            	try { fn_cleanPassNotiLoop(); } catch(e){ void(0); } // pollingUtil.js
                
                fn_pass_qr_req();

                qr_req_cont++;
            } else {
            	btn_popup_focus = $(this);
            	
                alert("잠시후 다시 해주세요.", function() {
                    try {
                        btn_popup_focus.focus();
                    }catch(e){ void(0); }
                    
                });
            }
*/
    });

} // END - eventFunc


// QR 팝업 호출 함수
$(function() {
    // 숫자만
    function checkNumber(event) {
        if (event.key === '.' || event.key === '-' || event.key >= 0 && event.key <= 9) {
            return true;
        }
        return false;
    }

    $('.btn_popup').click(function() {

        // 시간 현재시간
        iAuthTime = Math.floor( (new Date()).getTime() / 1000 );

        fnQRTimeCheck();

        fn_pass_qr_req();

        setTimeout(function() {
            //$('.input').focus();
        	$('.qrCodePop').focus(); // QR 페이지로 포커스 이동
        }, 100);
    });

    $('.close').click(function() {
        setTimeout(function() {
            $('.qrCodeLink').focus();
        }, 100);
    });
});

// maxLength에 따른 키패드 자동 삭제처리
function checkLastInput(obj){
    if (obj.value.length == obj.maxLength){
        try{npVCtrl.hideAll();}catch(e){ void(0); }
    }
}

// 가상키패드 실행
function fn_vKeyStart()
{
    try
    {
        npPfsStartup(document.forms[0], false, false, false, true, "npkencrypt", "on");
    }
    catch(e)
    {
        void(0);
    }

    // 일반키패드로 전환

    $(".btn-keypad").removeClass("is-on");
    $( ".btn-keypad span" ).text("보안키패드 전환");
    try{npVCtrl.hideAll();}catch(e){ void(0); } // 키패드 삭제

    $( "#phone_no_rKey" ).show();
    $( "#phone_no_vKey" ).hide();
    //$( "#phone_no_rKey" ).focus();

    vkeyUse = false;
}




// 중복방지를 위한 함수 입니다
// 버튼 클릭시 false
// 버튼 해제시 true
function fn_btnDisp( bDisp )
{
    $("#btnCancel").attr("disabled", bDisp);
    $("#btnSubmit").attr("disabled",  bDisp);
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


// 보안 문자 체크함수
function fn_chkChatcha()
{
    // 캡챠 인증 성공
    if( _captcha ) {
        return true;
    }

    //  캡챠 번호 체크
    if( $("#captcha_no").val() == "" || $("#captcha_no").val().length != 5 )
    {
        alert("보안숫자를 입력해 주십시오.", function(){ $("#captcha_no").focus(); });
        removePageBlur();
        return false;
    }

    return true;
}

// 캡챠 인증 성공시 호출함수 - 함수명 고정 함수명 통일하기 위해 사용
function fn_succChatcha()
{
    var comm_id = $("input[name=comm_id]").val();

    if( comm_id == "KTM" || comm_id =="LGM" )
    {
        fn_mvnoTelcomConfirmReq();
    }
    else
    {
        fn_sendPush();
    }
}

function fn_mvnoTelcomConfirmReq()
{

    // 이름 앞뒤 공백 제거
    $("#user_name").val( $("#user_name").val().replace(/(^\s*)|(\s*$)/gi, "") );
    // 휴대폰번호 공백 제거
    $("#phone_no_rKey").val( $("#phone_no_rKey").val().replace(/ /gi, "") );

    document.form_auth.tx_type.value = "2700";

    setPageBlur();

    IframeRequest(IFRAME_TX_APP_PROCESS, document.form_auth, "fn_mvnoTelcomConfirmRes");
}

function fn_mvnoTelcomConfirmRes(jsonData)
{
    if(jsonData.res_cd == "0000")
    {
        mvno_per_cert_no = jsonData.per_cert_no;
        //$( "input[name=per_cert_no]" ).val( jsonData.per_cert_no );
        $( "input[name=van_tx_id]"   ).val( jsonData.van_tx_id   );
        $( "input[name=birth_day]"   ).val( jsonData.birth_day   );
        $( "input[name=mvno_name]"   ).val( jsonData.mvno_name   );

        // KT 알뜰폰 처리
        if( $( "input[name=comm_id]" ).val() == 'KTM' )
        {
            // per_cert_no 가 없을 경우 에러처리
            if( jsonData.per_cert_no == "" )
            {
                alert("KT 알뜰폰 번호가 아닙니다. 통신사를 다시 확인하여 주시기 바랍니다.", function(){ fn_goInitTelcomSelect();  });
                removePageBlur();
                return;
            }
        }

        // FORM 전달을 disable 삭제처리
        $("#secur").removeProp("disabled");

        //fn_goNext(PC_MVNO_TELCOM);
        fn_sendPush();
    }
    else
    {
        alert( jsonData.res_msg , function(){ fn_goInitTelcomSelect(); });
        removePageBlur();
        return;
    }
}


// PUSH 인증 요청
function fn_sendPush() {
    // TODO : 체크되서 넘어오므로 무시
    //if( !fn_validation_value() ) { removePageBlur(); return; }

    // 이름 앞뒤 공백 제거
    $("#user_name").val($("#user_name").val().replace(/(^\s*)|(\s*$)/gi, ""));
    // 휴대폰번호 공백 제거
    $("#phone_no_rKey").val($("#phone_no_rKey").val().replace(/ /gi, ""));

    setPageBlur();

    // 본인확인 QR -> PUSH 진행시 per_cert_no 가 넘어가 오류 발생하는것 확인되어 수정
    document.form_auth.per_cert_no.value = "";

    var comm_id = $("input[name=comm_id]").val();
    var per_tx_type = $("input[name=tx_type]").val();

    // 이전 단계가 mvno 사업자 확인인 경우만 설정
    if( (comm_id == "KTM" || comm_id =="LGM") && per_tx_type == "2700") 
    {
        document.form_auth.per_cert_no.value = mvno_per_cert_no;
    }

    // iframe_tx_app_process 호출시 tx_type 미리 설정
    document.form_auth.tx_type.value = "2500";

    m_BackCallState = "TRUE";

    $('#user_name,#phone_no' ).attr("disabled",false);

    IframeRequest(IFRAME_TX_APP_PROCESS, document.form_auth, "fn_sendPushRes");
}

// PUSH 인증요청 결과
function fn_sendPushRes(jsonData)
{
    // fn_app_auth_req실행후 온경우 m_BackCallState = TRUE
    // 뒤로가기로 온경우 m_BackCallState = FALSE
    if(jsonData.res_cd == "0000" && m_BackCallState == "TRUE" )
    {
        // 구분 필요 없음
        if(  document.form_auth.tx_type.value == "2500" )
        {
            document.form_auth.res_cd.value        = jsonData.res_cd;
            document.form_auth.res_msg.value       = jsonData.res_msg;

            //- 2018-10-31 긴급패치 - 김민수 -----------------------------------------------------------------
            try
            {
                if(jsonData.CI != undefined)
                {
                    document.form_auth.CI.value        = jsonData.CI;
                }
            }
            catch(e)
            {
                document.form_auth.CI.value        = jsonData.CI;
            }

            try
            {
                if(jsonData.DI != undefined)
                {
                    document.form_auth.DI.value        = jsonData.DI;
                }
            }
            catch(e)
            {
                document.form_auth.DI.value        = jsonData.DI;
            }

            try{
                if(jsonData.CI_URL != undefined)
                {
                    document.form_auth.CI_URL.value    = jsonData.CI_URL;
                }
            }
            catch(e)
            {
                document.form_auth.CI_URL.value    = jsonData.CI_URL;
            }

            try{
                if(jsonData.DI_URL != undefined)
                {
                    document.form_auth.DI_URL.value    = jsonData.DI_URL;
                }
            }
            catch(e)
            {
                document.form_auth.DI_URL.value    = jsonData.DI_URL;
            }
            //- 2018-10-31 긴급패치 - 김민수 -----------------------------------------------------------------

            document.form_auth.per_cert_no.value   = jsonData.per_cert_no;
            document.form_auth.auth_tx_id.value    = jsonData.auth_tx_id;

            //- 2018-10-31 긴급패치 - 김민수 -----------------------------------------------------------------
            try
            {
                if (jsonData.birth_day != undefined)
                {
                    document.form_auth.birth_day.value = jsonData.birth_day;
                }
            }
            catch(e)
            {
                document.form_auth.birth_day.value = jsonData.birth_day;
            }

            try
            {
                if(jsonData.sex_code != undefined)
                {
                    document.form_auth.sex_code.value  = jsonData.sex_code;
                }

            }
            catch(e)
            {
                document.form_auth.sex_code.value  = jsonData.sex_code;
            }

            try
            {
                if(jsonData.local_code != undefined)
                {
                    document.form_auth.local_code.value= jsonData.local_code;
                }

            }
            catch(e)
            {
                document.form_auth.local_code.value= jsonData.local_code;
            }
            //- 2018-10-31 긴급패치 - 김민수 -----------------------------------------------------------------

            try
            {
                if (jsonData.van_tx_id != undefined)
                {
                    document.form_auth.van_tx_id.value = jsonData.van_tx_id;
                }
            }
            catch(e)
            {
                document.form_auth.van_tx_id.value = jsonData.van_tx_id;
            }
           
            try
            {
                if (jsonData.session_id != undefined)
                {
                    document.form_auth.session_id.value = jsonData.session_id;
                }
            }
            catch(e)
            {
                document.form_auth.session_id.value = jsonData.session_id;
            }
            
            document.form_auth.safe_guard_yn.value = jsonData.safe_guard_yn;
            document.form_auth.dn_hash.value       = jsonData.dn_hash;


            fn_goNext( PC_PUSH_CONFIRM_URL );

            removePageBlur();
            return;

        } // if(  document.form_auth.tx_type.value == "2500" ) - END

    }
    else if(( jsonData.res_cd == "CTD4" || jsonData.res_cd == "CTD8" || jsonData.res_cd == "CTDC" ) && m_BackCallState == "TRUE" )
    {
        fn_goNext( PC_PASS_APP_INSTALL );

        removePageBlur();
    }
    else if( m_BackCallState == "FALSE" )
    {
        fn_goInitTelcomSelect();
    }
    else{
        try { setPreInputData(); } catch(e) { void(0); }

        if( clickNext )
        {
            alert(jsonData.res_msg.replace("\\n","\n") );
        }

       	fn_pushFailUiProc();

       	clickNext = false;

        removePageBlur();
    } // (jsonData.res_cd == "0000" && m_BackCallState == "TRUE" ) - END

    m_BackCallState = "FALSE";
}


// PUSH tx 실패시 호출함수
function fn_pushFailUiProc()
{
    // 버튼 활성화
    fn_btnDisp(false); // 중복방지

    // 캡챠 재생성
    $("#captcha_no").prop("disabled",false);
    $("#captcha_no").val("");
    nonvolatile();
}

// 캡챠 인증 실패시
function fn_failChatcha()
{
    // 확인버튼 활성화
    fn_btnDisp(false); // 중복방지

    clickNext = false;
}

// QR 요청
function fn_pass_qr_req()
{
    $("#btn_resend").hide();

    m_BackCallState = "TRUE";

    document.form_auth.tx_type.value = "3200";
    IframeRequest(IFRAME_TX_APP_PROCESS, document.form_auth, "fn_pass_qr_res");
}

function fn_pass_qr_res(jsonData)
{
    if(jsonData.res_cd == "0000") {
        qr_req_cont++;
        document.form_auth.session_id.value    = jsonData.session_id;
        document.form_auth.per_cert_no.value    = jsonData.per_cert_no;

       	document.form_auth.van_tx_id.value    = jsonData.van_tx_id;	

        // 타이머 동작

        otp_timer_pay     = false;
        otp_auth_cnt      = 0;
        otp_extension_cnt = 0;


        $("#gcDiv").empty(); // 시간 연장시 QR 코드 추가 방지

        //$("#gcDiv").append("<span class=\"ir\">QR인증용 QR코드</span>");
        // QR 생성
        $("#gcDiv").qrcode({
            render:"canvas",
            width:66,
            height:66,
            text :jsonData.app_token
        });

        $('.qrCodeNum input').val(jsonData.app_token);

        iAuthTime = Math.floor( (new Date()).getTime() / 1000 );
        
        // noti 확인요청
        // TEST BY PASS 하기 위하여
        if ( jsonData.app_token != "" )
        {
        	try { fn_pass_noti_recv_req(); } catch(e){ void(0); }
        }
        
    }
    else
    {
        alert("[" + jsonData.res_cd + "]" + jsonData.res_msg , function(){ pop_close(); });
        removePageBlur();
    }

    m_BackCallState = "FALSE";
}

function fn_pass_qr_auth_req() {
    if( otp_ajax_flag )
    {
        otp_ajax_flag = false;

        m_BackCallState = "TRUE";

        document.form_auth.tx_type.value = "3300";
        IframeRequest(IFRAME_TX_APP_PROCESS, document.form_auth, "fn_pass_qr_auth_res");
    }
}

function fn_pass_qr_auth_res(jsonData){

    if(jsonData.res_cd == "0000") {
        // 리턴 데이터 맞추기용
        var log_trace_no = document.form_auth.log_trace_no.value;

        fieldReset(document.form_auth);

        var comm_id       = jsonData.comm_id;
        var phone_no      = jsonData.phone_no;

        /* 유효키 매개변수 부정조작 방지 세팅.(KISA 웹 취약점 조치) - 2014.01.29 */
        //QR 인증 불필요 로직
//        var otp_hash_no   = $( "input[name='otp_hash_no']" ).val();
//        var comp_hash_no  = jsonData.comp_hash_no;

        //alert("otp : " +$( "input[name='otp_hash_no']"    ).val()+ ", end : " +jsonData.comp_hash_no+ "");
//        if( otp_hash_no != comp_hash_no )
//        {
//            alert("OTP인증시 매개변수가 부정조작되었습니다.\n인증불가합니다.");
//            window.close();
//        }

//                $( "input[name='site_url']"     ).val( site_url                      );

        document.form_auth.res_cd.value       = jsonData.res_cd;
        document.form_auth.res_msg.value      =  encodeURIComponent(jsonData.res_msg) ;

        document.form_auth.dn_hash.value      = jsonData.dn_hash;
        document.form_auth.ordr_idxx.value    = jsonData.ordr_idxx;
        document.form_auth.cert_no.value      = jsonData.cert_no;
        document.form_auth.per_cert_no.value  = jsonData.per_cert_no;

        document.form_auth.comm_id.value      = comm_id;
        document.form_auth.user_name.value    = jsonData.user_name;
    if (cert_enc_use == "E")
    {
        document.form_auth.enc_info.value     = jsonData.enc_info;
        document.form_auth.enc_data.value     = jsonData.enc_data;
        document.form_auth.CI.value           = jsonData.CI;
        document.form_auth.DI.value           = jsonData.DI;
        document.form_auth.CI_URL.value       = jsonData.CI_URL;
        document.form_auth.DI_URL.value       = jsonData.DI_URL;
    }
    else if(cert_enc_use_ext == "Y" )
    {
        document.form_auth.enc_cert_data2.value   = jsonData.enc_cert_data2 ;
    }
    else if( cert_enc_use == "Y" )
    {
        document.form_auth.enc_cert_data.value    = jsonData.enc_cert_data ;
    }
    else
    {
            document.form_auth.CI.value           = jsonData.CI;
            document.form_auth.DI.value           = jsonData.DI;
            document.form_auth.CI_URL.value       = jsonData.CI_URL;
            document.form_auth.DI_URL.value       = jsonData.DI_URL;
            document.form_auth.CI_ENC_YN.value    = jsonData.CI_ENC_YN;

            document.form_auth.phone_no.value     = phone_no;

    }
        document.form_auth.req_tx.value           = "otp_auth";
        //document.form_auth.cert_otp_use.value     = jsonData.cert_otp_use; //

        document.form_auth.cert_01_yn.value       = "Y";
        document.form_auth.cert_02_yn.value       = "Y";

        document.form_auth.tx_type.value = "3300"; // 응답데이터 맞추기용
        document.form_auth.cert_method.value = "01"; // 응답데이터 맞추기용
        document.form_auth.log_trace_no.value = log_trace_no; // 응답데이터 맞추기용


        // 1.5초 딜레이.
        var currentTimeSecMs = Date.now();
        do{
            var compareTimeSecMs = Date.now();
        }while( currentTimeSecMs+1500 > compareTimeSecMs ){
        }
        //alert("인증이 정상적으로 처리 되었습니다.");

        // TODO :  result.jsp 페이지로 수정
        //document.form_auth.action = "/common_pass/cert_result_pass.jsp?direct_result_yn=Y";
        document.form_auth.action = CERT_RESULT_URL;
        document.form_auth.target = "_self";
        document.form_auth.submit();

    }
    else if(( jsonData.res_cd == "CTD4" || jsonData.res_cd == "CTD8" || jsonData.res_cd == "CTDC" ) && m_BackCallState == "TRUE" )
    {
        fn_goNext( PC_PASS_APP_INSTALL );

        removePageBlur();
    }
    else
    {
        document.form_auth.res_cd.value  = jsonData.res_cd;
        document.form_auth.res_msg.value = encodeURIComponent(jsonData.res_msg);

        // TODO : 인증 실패시
        fn_goNext(PC_PUSH_QR_FAIL_URL);
    }

    m_BackCallState = "FALSE";
}

// PC 랑 모바일이랑 조금 다름
function fn_preSelectUserInfo(preSelectUserName, preSelectPhoneNo)
{
    if( preSelectUserName != "" && preSelectPhoneNo != "")
    {
        $("input[name=user_name]").val(preSelectUserName);
        // TODO : 초기값이 일반키패드
        $("input[name=phone_no_rKey]").val(preSelectPhoneNo);

        $("#myInfoSave").prop("checked",true);
        //$("#myInfoSave").addClass("checked");
        $("#myInfoSave").next('label').addClass('checked');
        //$("#myInfoSave").next('label').next('label').addClass('checked');
    }
}

function fn_captchaReload()
{
    nonvolatile();
}

function fn_captchaSoundPlay()
{
    sound_play();
}


function fn_preCertFixedType()
{
    try {
        if( PRE_USE_YN == "Y" )
        {
            $("li.myInfoSaveSelect").remove();

            if (PRE_CERT_FIXED_TYPE == "PCF3" )
            {
                $("ul.gnb_wrap").addClass("col-1")
                $("#sms_auth").parent().remove();
                $("#sms_auth").remove();
            }
        }
    }
    catch (e) { return; }
}