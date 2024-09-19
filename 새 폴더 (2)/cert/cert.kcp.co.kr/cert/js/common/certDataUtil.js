// 생년월일 유효성 체크
function birthDayCheck(yymmdd) {
    var year = Number(yymmdd.substr(0, 2));
    var month = Number(yymmdd.substr(2, 2));
    var day = Number(yymmdd.substr(4, 2));

    if (year < 0 || year > 99) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    if (day < 1 || day > 31) {
        return false;
    }

    return true;
}

// 이름 입력체크
function c_hangul(el) {
    var pattern = /^[0-9a-zA-Z가-힝\-\_\.\, ]+$/;
    return pattern.test(el.value) ? false : true;
}

function fn_validation_sms(deviceType) {
    var isSmsValid = false;

    var nameChk = /[0-9]{6,}/;

    if (document.form_auth.user_name.value == "") {
        alert("인증자 이름을 입력해 주세요.", function() {
            document.form_auth.user_name.focus();
        });
    } else if (c_hangul(document.form_auth.user_name) && (PRE_MASK_YN != "Y")) {
        alert("인증자 이름은 한글 또는 영문으로 입력해 주세요.", function() {
            document.form_auth.user_name.focus();
        });
    }
    // PUSH 일때는 미체크 생년월일(mynum1, mynum2)  미체크
    else if (document.form_auth.mynum1.value == "" || document.form_auth.mynum1.value.length != 6 || !birthDayCheck(document.form_auth.mynum1.value)) {
        alert("생년월일을 확인해 주세요.");
    } else if (document.form_auth.mynum2.value == "" || document.form_auth.mynum2.value.length != 1) {
        alert("주민번호 뒷자리를 확인해 주세요.");
    } else if (deviceType == "MOBILE" &&
        (document.form_auth.phone_no.value == "" || document.form_auth.phone_no.value.length < 10)) {
        alert("휴대폰 번호를 확인해 주세요.");
    } else if (deviceType == "PC" &&
        (document.form_auth.phone_no_vKey.value == "" || document.form_auth.phone_no_vKey.value.length < 10) &&
        (document.form_auth.phone_no_rKey.value == "" || document.form_auth.phone_no_rKey.value.length < 10)) {
        alert("휴대폰 번호를 확인해 주세요.", function() {
            if ($(".keypad.vKey").css("display") == "none") {
                document.form_auth.phone_no_rKey.focus();
            } else {
                document.form_auth.phone_no_vKey.focus();
            }
        });
    } else if (nameChk.test(document.form_auth.user_name.value)) {
        alert("이름에 연속된 숫자 입력은 불가합니다.", function() {
            document.form_auth.user_name.focus();
        });
    } else {
        // validation 검증 완료
        isSmsValid = true;
    }

    return isSmsValid;
}

function fn_validation_push(deviceType) {
    var isPushValid = false;

    var nameChk = /[0-9]{6,}/;

    if (document.form_auth.user_name.value == "") {
        alert("인증자 이름을 입력해 주세요.", function() {
            document.form_auth.user_name.focus();
        });
    } else if (c_hangul(document.form_auth.user_name) && (PRE_MASK_YN != "Y")) {
        alert("인증자 이름은 한글 또는 영문으로 입력해 주세요.", function() {
            document.form_auth.user_name.focus();
        });
    } else if (deviceType == "MOBILE" &&
        (document.form_auth.phone_no.value == "" || document.form_auth.phone_no.value.length < 10)) {
        alert("휴대폰 번호를 확인해 주세요.");
    } else if (deviceType == "PC" &&
        (document.form_auth.phone_no_vKey.value == "" || document.form_auth.phone_no_vKey.value.length < 10) &&
        (document.form_auth.phone_no_rKey.value == "" || document.form_auth.phone_no_rKey.value.length < 10)) {
        alert("휴대폰 번호를 확인해 주세요.", function() {
            if ($(".keypad.vKey").css("display") == "none") {
                document.form_auth.phone_no_rKey.focus();
            } else {
                document.form_auth.phone_no_vKey.focus();
            }
        });
    } else if (nameChk.test(document.form_auth.user_name.value)) {
        alert("이름에 연속된 숫자 입력은 불가합니다.", function() {
            document.form_auth.user_name.focus();
        });
    } else {
        // validation 검증 완료
        isPushValid = true;
    }

    return isPushValid;
}

function fn_validation_otp() {
    var isOtpValid = false;

    if (document.form_auth.otp_no.value == "" || document.form_auth.otp_no.value.length != 6) {
        alert("인증번호를 입력 해 주시기 바랍니다.", function() {
            document.form_auth.otp_no.focus();
        });
    } else if (otp_timer_pay) {
        alert("승인 유효시간이 만료 되었습니다.");
    } else {
        isOtpValid = true;
    }

    // 인증번호 6자리 체크
    // 이런식으로 체크 가능
    // if (checkRegExp($("#otp_no").val(), 'AUTHNUM') === false) {
    //     alert("인증번호는 6자리 숫자로만 입력 해주세요.");
    //     $("#otp_no").focus();
    //     return false;
    // }

    return isOtpValid;
}

// 입력값 체크 : 가상키패드 미사용
function fn_validation_value(certType, deviceType) {
    var isValid = false;

    if (certType == "SMS") {
        isValid = fn_validation_sms(deviceType);
    } else if (certType == "PUSH") {
        isValid = fn_validation_push(deviceType);
    } else if (certType == "OTP") {
        isValid = fn_validation_otp(deviceType);
    }

    return isValid;
}


function fn_validation_value_no_alert() {

    var isValid = false;

    if (document.form_auth.user_name.value == "") {} else if (c_hangul(document.form_auth.user_name)) {} else if (document.form_auth.mynum1.value == "" ||
        document.form_auth.mynum1.value.length != 6 ||
        !birthDayCheck(document.form_auth.mynum1.value)) {} else if (document.form_auth.mynum2.value == "" ||
        document.form_auth.mynum2.value.length != 1) {} else if (!document.form_auth.phone_no.value.isMobile()) {} else {
        isValid = true;
    }

    return isValid;
}

// 취소시 필드 초기화 처리
// 취소시 통신사 선택페이지로 이동되므로 가맹점 전달 데이터만 남겨놓음

function fieldReset(vf) {
    var nField = vf.elements.length;
    var response_data = "";

    for (i = 0; i < nField; i++) {
        if (!(vf.elements[i].name == "ordr_idxx" ||
                vf.elements[i].name == "site_cd" ||
                vf.elements[i].name == "req_tx" ||
                vf.elements[i].name == "req_tx" ||
                vf.elements[i].name == "Ret_URL" ||
                vf.elements[i].name == "shopInfo_require_yn" ||
                vf.elements[i].name == "up_hash" ||
                vf.elements[i].name == "kcp_merchant_time" ||
                vf.elements[i].name == "kcp_page_submit_yn" ||
                vf.elements[i].name == "shop_order_type" ||
                vf.elements[i].name == "view_site_yn" ||
                vf.elements[i].name == "param_opt_1" ||
                vf.elements[i].name == "param_opt_2" ||
                vf.elements[i].name == "param_opt_3" ||
                vf.elements[i].name == "accessPage" ||
                vf.elements[i].name == "accessTime" ||
                vf.elements[i].name == "ruhs" ||
                vf.elements[i].name == "localStorageData" ||
                vf.elements[i].name == "cert_locale" ||
                vf.elements[i].name == "shop_order_type" ||
                vf.elements[i].name == "ymd_autoset_yn" ||
                vf.elements[i].name == "ios_pass_app_call_method" ||
                vf.elements[i].name == "aos_pass_app_call_method" ||
                vf.elements[i].name == "cert_enc_use" ||
                vf.elements[i].name == "cert_enc_use_ext" ||
                vf.elements[i].name == "web_siteid" ||
                vf.elements[i].name == "web_siteid_hashYN" ||
                vf.elements[i].name == "user_name_url_yn" ||
                vf.elements[i].name == "localStorageData" ||
                vf.elements[i].name == "PRE_USE_YN" ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "year") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "month") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "day") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "user_name") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "local_code") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "sex_code") ||
                (PRE_INPUT_OLD_TYPE == "Y" && vf.elements[i].name == "info_code")
            )) {
            vf.elements[i].value = "";
        }
    }
}

// 취소시 필드 초기화 처리
function fieldCancelReset(vf) {
    var nField = vf.elements.length;
    var response_data = "";

    for (i = 0; i < nField; i++) {
        if (!(vf.elements[i].name == "param_opt_1" || vf.elements[i].name == "param_opt_2" || vf.elements[i].name == "param_opt_3" ||
                vf.elements[i].name == "web_siteid" || vf.elements[i].name == "site_cd" || vf.elements[i].name == "up_hash" ||
                vf.elements[i].name == "web_siteid_hashYN" || vf.elements[i].name == "cert_method" || vf.elements[i].name == "cert_otp_use" ||
                vf.elements[i].name == "user_name_url_yn" || vf.elements[i].name == "phone_no_vKey" || vf.elements[i].name == "phone_no_rKey" ||
                vf.elements[i].name == "shopInfo_require_yn" || vf.elements[i].name == "kcp_merchant_time"
            )) {
            vf.elements[i].value = "";
        }
    }
}