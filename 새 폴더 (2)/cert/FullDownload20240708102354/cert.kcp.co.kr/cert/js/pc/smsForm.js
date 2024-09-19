
var clickNext = false; // 중복 결제 방지

// 최초 시나리오 일반 -> 가상키패드
var vkeyUse = false;

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



function eventFunc()
{
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
        if (fn_validation_value("SMS", "PC" ) === false)
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



    $('body').on('click', '.btn-keypad', function() {

        $( "#phone_no_vKey" ).val("");
        $( "#phone_no_rKey" ).val("");

        if (vkeyUse)
        {
            // 일반키패드로 전환

            $(".btn-keypad").removeClass("is-on");
            $( ".btn-keypad span" ).text("보안키패드 전환");
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
        fn_goCancel();
    });
    
} // END - eventFunc

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
        fn_sendOtpReq();
    }
}

// 캡챠 인증 실패시
function fn_failChatcha()
{
    // 확인버튼 활성화
    fn_btnDisp(false); // 중복방지

    clickNext = false;
}

function fn_mvnoTelcomConfirmReq()
{

    // 이름 앞뒤 공백 제거
    $("#user_name").val( $("#user_name").val().replace(/(^\s*)|(\s*$)/gi, "") );
    // 휴대폰번호 공백 제거
    $("#phone_no_rKey").val( $("#phone_no_rKey").val().replace(/ /gi, "") );

    document.form_auth.tx_type.value = "2400";

    setPageBlur();

    IframeRequest(IFRAME_TX_APP_PROCESS, document.form_auth, "fn_mvnoTelcomConfirmRes");
}

function fn_mvnoTelcomConfirmRes(jsonData)
{
    if(jsonData.res_cd == "0000")
    {
        $( "input[name=per_cert_no]" ).val( jsonData.per_cert_no );
        $( "input[name=van_tx_id]"   ).val( jsonData.van_tx_id   );
        $( "input[name=birth_day]"   ).val( jsonData.birth_day   );
        $( "input[name=mvno_name]"   ).val( jsonData.mvno_name   );

        // KT 알뜰폰 처리
        if( $( "input[name=comm_id]" ).val() == 'KTM' )
        {
            // per_cert_no 가 없을 경우 에러처리
            if( jsonData.per_cert_no == "" )
            {
                alert("KT 알뜰폰 번호가 아닙니다. 통신사를 다시 확인하여 주시기 바랍니다.", function(){ fn_goInitTelcomSelect(); });
                removePageBlur();
                return;
            }
        }

        // FORM 전달을 disable 삭제처리
        $("#secur").removeProp("disabled");

        //fn_goNext(PC_MVNO_TELCOM);
        fn_sendOtpReq();
    }
    else
    {
        alert( jsonData.res_msg , function(){ fn_goInitTelcomSelect(); });
        removePageBlur();
        return;
    }
}


// OTP 발송 요청
function fn_sendOtpReq()
{

    // 이름 앞뒤 공백 제거
    $("#user_name").val( $("#user_name").val().replace(/(^\s*)|(\s*$)/gi, "") );
    // 휴대폰번호 공백 제거
    $("#phone_no_rKey").val( $("#phone_no_rKey").val().replace(/ /gi, "") );

    setPageBlur();

    // TODO : 해당 경로 페이지 추후에 iframe_tx_app_process.jsp 와 같이 하나로 묶어서 처리될 예정입니다.
    IframeRequest(PC_CERT_TELCOM, document.form_auth, "fn_sendOtpRes");
}

// OTP 발송 결과
function fn_sendOtpRes(jsonData)
{
    if(jsonData.res_cd == "0000")
    {
        document.form_auth.CI.value            = jsonData.CI;
        document.form_auth.DI.value            = jsonData.DI;
        document.form_auth.CI_URL.value        = jsonData.CI_URL;
        document.form_auth.DI_URL.value        = jsonData.DI_URL;

        document.form_auth.birth_day.value     = jsonData.birth_day;
        document.form_auth.sex_code.value      = jsonData.sex_code;
        document.form_auth.local_code.value    = jsonData.local_code;

        document.form_auth.server_hash.value   = jsonData.server_hash;

        document.form_auth.cert_guard_yn.value = jsonData.cert_guard_yn;
        document.form_auth.safe_guard_yn.value = jsonData.safe_guard_yn;
        document.form_auth.cert_otp_use.value  = jsonData.cert_otp_use;
        document.form_auth.cert_no.value       = jsonData.cert_no;
        document.form_auth.per_cert_no.value   = jsonData.per_cert_no;

        document.form_auth.CI_ENC_YN.value     = jsonData.CI_ENC_YN;

        sms_ref_van_tx_id = jsonData.van_tx_id;
        sms_ref_phone_no = jsonData.phone_no;

        if ( document.form_auth.cert_enc_use_ext.value  == "Y" )
        {
            document.form_auth.enc_cert_data2.value = jsonData.enc_cert_data2;
        }
        else
        {
            document.form_auth.enc_cert_data.value = jsonData.enc_cert_data;
        }


        if ( jsonData.cert_otp_use == "Y" ){
            fn_otp_tx_req()
        }else{
            // TODO : 해당 로직은 타지 않을듯 합니다  로그로 체크 해서 추후 고도화때 삭제 합시다.
            // 리뉴얼때는 우선 기존 로직대로 처리
            document.form_auth.res_cd.value   = jsonData.res_cd;
            document.form_auth.res_msg.value   = jsonData.res_msg;

            alert('인증이 정상적으로 처리 되었습니다.', function(){ fn_goNext( PC_OTP_FORM_URL ); });
            removePageBlur();
        }

    }else{
        try { setPreInputData(); } catch(e) { void(0); }

        alert( jsonData.res_msg.replace("\\n","\n") , function(){ 

        	fn_smsFailUiProc();

        	clickNext = false;
        });
    	removePageBlur();

    }
}

function fn_otp_tx_req(){

    setPageBlur();

    document.form_auth.req_tx.value = "otp";

    // 이름 앞뒤 공백 제거
    $("#user_name").val( $("#user_name").val().replace(/(^\s*)|(\s*$)/gi, "") );
    // 휴대폰번호 공백 제거
    $("#phone_no_rKey").val( $("#phone_no_rKey").val().replace(/ /gi, "") );

    $('#user_name,#mynum1,#mynum2,#phone_no' ).attr("disabled",false);
    IframeRequest(PC_CERT_OTP_TX, document.form_auth, "fn_otp_tx_res");
}

function fn_otp_tx_res(jsonData){

    if(jsonData.res_cd == "0000")
    {
        document.form_auth.site_url.value   = jsonData.site_url;
        document.form_auth.cert_no.value    = jsonData.cert_no;

        document.form_auth.res_cd.value     = jsonData.res_cd;
        document.form_auth.res_msg.value    = jsonData.res_msg;

        document.form_auth.req_tx.value     = "otp_auth";

        /* [인증번호 재발송]유효키 매개변수 부정조작 방지 세팅.(KISA 웹 취약점 조치) - 2014.02.04 */
        document.form_hash.otp_hash_no.value  = jsonData.hash_cert_no;
        document.form_auth.otp_hash_no.value  = jsonData.hash_cert_no; // 기존 한페이지에서 2페이지로 변경되면서 다음페이지로 전달하기 위함

        // 인증결과 데이터 암호화 여부에 따라 값이 없을수 있음 --%>
        try
        {
            if ( document.form_auth.cert_enc_use_ext.value  == "Y" )
            {
                document.form_auth.enc_cert_data2.value = jsonData.enc_cert_data2;
            }
            else
            {
                document.form_auth.enc_cert_data.value = jsonData.enc_cert_data;
            }
        }
        catch(e){ void(0); }

        // OTP 입력 Form 으로 이동
        fn_goNext( PC_OTP_FORM_URL );
    }
    else
    {
        try { setPreInputData(); } catch(e) { void(0); }

        if( clickNext )
        {
            alert(jsonData.res_msg);
        }

        fn_smsFailUiProc();

        clickNext = false;

        removePageBlur();
    }
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

// 중복방지를 위한 함수 입니다
// 버튼 클릭시 false
// 버튼 해제시 true
function fn_btnDisp( bDisp )
{
    $("#btnCancel").attr("disabled", bDisp);
    $("#btnSubmit").attr("disabled",  bDisp);
}


// SMS tx 실패시 호출함수
function fn_smsFailUiProc()
{
    // 버튼 활성화
    fn_btnDisp(false); // 중복방지

    // 캡챠 재생성
    $("#captcha_no").prop("disabled",false);
    $("#captcha_no").val("");
    nonvolatile();
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
        if (PRE_USE_YN == "Y" )
        {
            $("li.myInfoSaveSelect").remove();

            if(  PRE_CERT_FIXED_TYPE == "PCF2" )
            {
                $("ul.gnb_wrap").addClass("col-1")
                $("#qr_auth").parent().remove();
                $("#qr_auth").remove();
            }
        }

    }
    catch (e) { return; }
}