var _cc = ""; // 보안숫자 암호화 데이터
var _captcha = false; // 보안숫자 인증여부
var audio; // 오디오 재생 객체

//captcha 사용시
// img 태그의 ID 값 : CAPTCHA_CaptchaImage
// 캡차 이후 실행함수명 : fn_nextStep() 변경 요청 하는게 좋을듯

// 보안문자 생성 요청
function nonvolatile() {

    if( $("#captcha_no").prop("disabled") == true ) {
        return;
    }

    _captcha = false; // 보안숫자 인증여부

    $("#captcha_no").val("");
    getAjaxCardCode();
}
function getAjaxCardCode()
{
    var post_pram = "c=REQUEST";

    AjaxRequest("/proc_pass/captcha_process.jsp", post_pram, reqJsonData);

    function reqJsonData(jsonData){
        _cc = jsonData.cap_val;
        $("#CAPTCHA_CaptchaImage").prop("src","");
        $("#CAPTCHA_CaptchaImage").prop("src","../proc/captcha_process.jsp?c=IMAGE&param=" + _cc);
    }
}

// 보안문자 음성듣기 요청
function sound_play()
{
    if( $("#captcha_no").prop("disabled") == true ) {
        return;
    }

    if( _cc == undefined )
    {
        return;
    }

    try{ if(audio!=null) audio.pause(); }catch(e){ void(0); }

    audio = new Audio("../proc/captcha_process.jsp?c=AUDIO&param=" + _cc );
    audio.play();
}

var isSubmitFlag = false;

// 보안문자 확인 요청
function fn_captcha_auth_req()
{

    if( _captcha ) {
        fn_succChatcha();
        return;
    }

    // 호출전 체크
    if( $("#captcha_no").val() == "" || $("#captcha_no").val().length != 5 ) {
        alert("보안숫자를 입력해 주십시오.");
        $("#captcha_no").focus();
        removePageBlur();
        return;
    }

    setPageBlur();
    document.form_auth.target = "kcp_captcha";
    document.form_auth.action = "../proc/captcha_process.jsp?c=RESULT&param1="+_cc+"&param2=" + $("#captcha_no").val() + "";
    document.form_auth.submit();
}

// CaptchaResult.jsp 에서 호출하는 함수
function fn_captcha_auth_res(res_cd, res_msg) {

    if(res_cd == "9999") {
        $("#captcha_no").val("");
        alert( res_msg, function(){ $("#captcha_no").focus(); });
        _captcha = false;
        isSubmitFlag = false;
        removePageBlur();
        
        // 함수명 변경 불가
        fn_failChatcha();
    } else {
        $("#captcha_no").prop("disabled","disabled");
        //alert("보안숫자 확인에 성공 하였습니다.");
        _captcha = true;

        $( "input[name=cc]" ).val( _cc );

        // 함수명 변경 불가
        fn_succChatcha();

    }
}

// 캡챠 AJAX 통신용
function AjaxRequest(url, pars, success, error) {
    $.ajax({
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        type: "POST",
        url: url,
        data: pars,
        dataType: "json",
        error: error,
        success: success
    });
}