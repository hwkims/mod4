var mvnoCommId = "";

var clickNext = false;

var btn_popup_focus = ''; // PGWEBDEV-286 접근성 버튼 클릭후 돌아갈 포커스 

$(document).ready(function() {

    fn_pcPageSetting();
    // 이벤트 등록
    eventFunc();

    fn_popResize();

    // TODO : IE8 얼럿 차단
    fn_browserChk();
});

$(window).on("load", function(){

    // 통신사 전 초기화
    fn_uiInit();

    fn_preSelectCommID(preSelectCommID);
});

// 통신사 체크 확인및 comm_id세팅
function fn_agencyCheck()
{
    // 이통사 선택 체크 함수
    if (!fn_checkedCommId())
    {
        alert('통신사를 선택해주세요.' , function() {
            try {
                btn_popup_focus.focus();
            }catch(e){ void(0); }
        })
        
        $('.btn_skip').removeClass('on');

        return false;
    }
    
    // 알뜰폰인 경우 선택된 MVNO 통신사 가져옴
    $("input[name=comm_id]").val( fn_getCommId() );

     return true;
}

//동의문 체크
function checkAgree() {
    if ($("#agree1").is(":checked") === false) {
        alert('개인정보이용 동의에 동의해 주십시오.', function(){ $("#agree1").focus(); });
        return false;
    }

    if ($("#agree2").is(":checked") === false) {
        alert('고유식별정보 처리 동의에 동의해 주십시오.', function(){ $("#agree2").focus(); });
        return false;
    }

    if ($("#agree3").is(":checked") === false) {
        alert('서비스 이용약관 동의에 동의해 주십시오.', function(){ $("#agree3").focus(); });
        return false;
    }

    if ($("#agree4").is(":checked") === false) {
        alert('통신사 이용약관 동의에 동의해 주십시오.', function(){ $("#agree4").focus(); });
        return false;
    }

    // MVNO 통신사 일때만 체크
    if ( $("#agree5").is(":checked") === false && fn_checkedMvnoCommId(fn_getCommId()) ) {
        alert('제3자 정보제공 동의에 동의해 주십시오.', function(){ $("#agree5").focus(); });
        return false;
    }
    return true;
}

function eventFunc()
{
    // 동의문 체크 시 통신사 선택 여부 체크
    $('body').on( 'click', '#agree1, #agree2, #agree3, #agree4, #agree5', function() {
    	
    	btn_popup_focus = $(this);
    	
        if (fn_agencyCheck() === false)
        {
            $('.check2 input').prop("checked", false).next('label').removeClass('checked');
        }
    });

    $('body').on('click', '#btnMvnoSelect', function() {
        // MVNO 통신사 선택시
        mvnoCommId = $(".active input[type=radio][name=agencyMvno]").val();

        if (mvnoCommId == null || mvnoCommId == "" || mvnoCommId == "undefined")
        {
            alert("알뜰폰 사업자를 선택해 주세요.")

            return;
        }

    });

    $('body').on('click', '#btnMvnoCancel', function() {
        fn_telcomUIInit();
    });

    // 인증 시작
    $('body').on('click', '#btnPass, #btnSms', function() {

        // 중복 클릭 방지
        fn_btnDisp(true);

        btn_popup_focus = $(this);

        // 중복 클릭 방지
        if (clickNext === true) {

            fn_btnDisp(false); // 중복방지

            return;
        }
        // 통신사 선택 여부
        if (fn_agencyCheck() === false) {

            fn_btnDisp(false); // 중복방지

            return;
        }
        // 동의 여부
        if (checkAgree() === false) {

            fn_btnDisp(false); // 중복방지

            return;
        }


        var comm_id = $("input[name=comm_id]").val();

        if( $(this).val() == "PASS" )
        {
	                    // PASS 인증외에는 per_cert_no 값 넘기면 안됨
	                    $("input[name=per_cert_no]").val("");
	
                fn_goNext( PC_PUSH_QR_ACTION_URL );            	
            }
        else if( $(this).val() == "SMS" )
        {
            // PASS 인증외에는 per_cert_no 값 넘기면 안됨
            $("input[name=per_cert_no]").val("");

            fn_goNext( PC_SMS_ACTION_URL);
        }
        else
        {
            fn_btnDisp(false); // 중복방지

            return;
        }

        clickNext = true;
    });

    // 초기화
    $('input:radio[name=agency]').prop('checked', false);
    $('.check2 input').prop("checked", false).next('label').removeClass('checked');
    $('.btn_skip').removeClass('active');

    // 통신사 선택 + 약관 동의 둘다 체크됐을 경우
    $('body').on('click', function() {
        var mobilecoCheck = $('input:radio[name=agency]').is(':checked') === true;
        var agreeCheck = $('input:checkbox[name=agree]').is(':checked') === true;

        if (mobilecoCheck === true && agreeCheck === true) {
            $('.btn_skip').addClass('active');
        } else {
            $('.btn_skip').removeClass('active');
        }
    });

    // 동의문 체크 시 통신사 선택 여부 체크
    $('body').on('click', 'input:checkbox[name=agree]', function() {
    	
    	btn_popup_focus = $(this);
    	
        if (fn_agencyCheck() === false) {
            $('.check2 input').prop("checked", false).next('label').removeClass('checked');
        }
    });

    // 통신사 선택 시 동의 초기화
    var checkMobileco = "";
    $('body').on('click', 'input:radio[name=agency], input:radio[name=agencyMvno]', function() {
        var mobileco = $('input:radio[name=agency]:checked').val();

        if( mobileco == null || mobileco == "" || mobileco == "underfind")
        {
            mobileco = $('input:radio[name=agencyMvno]:checked').val();
        }

        if (checkMobileco !== mobileco) {
            $('.check2 input').prop("checked", false).next('label').removeClass('checked');
            checkMobileco = mobileco;
        }

        if (mobileco == "SKT") {
            $("#agreeOpt").attr('hidden', true);
        } else {
            $("#agreeOpt").attr('hidden', false);
        }

    });

    // 동의문 레이어 팝업
    var btn_agree_popup_focus = '';
    $('body').on('click', '.btn_agree_popup', function() {
        var byId = $(this).attr("id");

		var agencyCheck = fn_getCommId();
		
		if (!fn_checkedCommId())
        {
            alert('통신사를 선택해주세요.');
            return false;
        }


        // 동의 타이틀 지정
        if (byId === 'agree1Pop') {
            agreeNo = "1";
            $("#agreeTitle").text("개인정보이용동의");
        } else if (byId === 'agree2Pop') {
            agreeNo = "2";
            $("#agreeTitle").text("고유식별정보처리동의");
        } else if (byId === 'agree3Pop') {
            agreeNo = "3";
            $("#agreeTitle").text("서비스이용약관동의");
        } else if (byId === 'agree4Pop') {
            agreeNo = "4";
            $("#agreeTitle").text("통신사이용약관동의");
        } else if (byId === 'agree5Pop') {
            agreeNo = "5";
            $("#agreeTitle").text("제3자정보제공동의");
        }

        // 동의 내용
        //inAgreeContent(mobileco, agreeNo);

        // 이통사별 약관변경 iframe
        $(".iframe-agree iframe").attr("src", fn_inAgreeContent("pc",agencyCheck, agreeNo));
        $(".iframe-agree iframe").attr("title", fn_inAgreeTitle("pc",agencyCheck, agreeNo));
        $(".iframe-agree").attr("title", fn_inAgreeTitle("pc",agencyCheck, agreeNo));

        // 약관팝업
        btn_agree_popup_focus = $(this);
        
        fn_agreeLayerSet();

        // $('.dim').show(); // kcp: 중복 dim 으로 수정
        $('.layer-pop.agreement').prev('.dim').show();
        $('.layer-pop.agreement').fadeIn();
        $('.pop-con').attr("tabIndex", "0").focus();

    });

    // 팝업 닫기 시
    $('body').on('click', '.pop-btn .agreeClose', function() {
        pop_close();
        btn_agree_popup_focus.focus();
    });

    // 통신사 약관 레이어팝업 탭 포커스 제어
    $('.layer-pop .agreeClose').keydown(function(event) {
        if (event.keyCode == '9' && !event.shiftKey) {
            event.preventDefault();
            $('.layer-pop .pop-con').attr('tabindex', '0').focus();
        }
    });
    $('.layer-pop .pop-con').keydown(function(event) {
        if (event.keyCode == '9' && event.shiftKey) {
            event.preventDefault();
            $('.layer-pop .agreeClose').attr('tabindex', '0').focus();
        }
    });

    //pc_comm_02.html - 디자인 script 영역 //
    $(function() {
        /* 알뜰폰 선택 시 레이어팝업 */
			/* kcp : 2022-01-26 수정 */
        $('#agency-and').click(function() {
            // $('.dim').show(); // kcp: 중복 dim 으로 수정
            $('.agency_select__popup').prev('.dim').show();
            $('.agency_select__popup').fadeIn();
            setTimeout(function() {
				// $('.pop-con_02').focus();
				// 2022-07-08 :: 수정 포커스 위치 변경
				$('#agency-popup-sk').focus();
				},150)
        });

        /* 통신사 슬라이드UP/DOWN */
        /* kcp : 2022-02-16 수정 */
        $('.licensee_title').on('click', function(e) {
            var licenseeActive = $('.licensee-list li').hasClass('active');
            var licenseeInfo = $(this).siblings('.licensee_info');

				// kcp : 사업자목록 타이틀 변경
				var agencyList = ['SKT(알뜰폰)','KT(알뜰폰)','LGU+(알뜰폰)']
				var openText = " 사업자목록 확장됨";
				var closeText = " 사업자목록 축소됨 선택 시 사업자 목록 확장됨";

            $('.licensee_info').stop().slideUp();
            $('.icon_arrow').removeClass('up');
            $('.icon_arrow').addClass('down');

            if (licenseeActive == true) {
                if ($(this).parent('li').hasClass('active')) {
						// 같은 곳을 여닫을 때 (토글) 
                    $('.licensee-list li').removeClass('active');
                    $('.licensee_info').stop().slideUp();
						$(this).siblings().find('.icon_arrow').removeClass('up');
						$(this).siblings().find('.icon_arrow').addClass('down');
						// kcp : 사업자목록 타이틀 & aria-label 변경
						$('.licensee_title.agency-radio').each( function(idx,item){
							item.ariaLabel = agencyList[idx] + closeText
							item.title = agencyList[idx] + closeText
						})
                } else {
						// 다른 곳 을 열면서 열려 있는 곳 닫힘처리
                    $('.licensee-list li').removeClass('active');
                    $('.licensee_info').stop().slideUp();
                    $(this).parent('li').addClass('active');
                    licenseeInfo.stop().slideUp(0).slideDown(); // kcp: jq 3버전 사용시, ie 깜빡임 제거 .slideUp(0) 추가
						$(this).siblings().find('.icon_arrow').removeClass('down');
						$(this).siblings().find('.icon_arrow').addClass('up');
						// kcp : 사업자목록 타이틀 & aria-label 변경
						$('.licensee_title.agency-radio').each(function(idx,item){
							item.ariaLabel = agencyList[idx] + closeText
							item.title = agencyList[idx] + closeText
						})
						$(this)[0].title = agencyList[$(this).parent().index()] + openText
						$(this)[0].ariaLabel = agencyList[$(this).parent().index()] + openText

						$(this).prop('checked', true)
                }
				} else {
					// 처음 열때 사용
                $(this).parent('li').addClass('active');
					licenseeInfo.stop().slideUp(0).slideDown() // kcp: jq 3버전 사용시, ie 깜빡임 제거 .slideUp(0) 추가
					$(this).siblings().find('.icon_arrow').removeClass('down');
					$(this).siblings().find('.icon_arrow').addClass('up');
					// kcp : 사업자목록 타이틀 & aria-label 변경
					$(this)[0].title = agencyList[$(this).parent().index()] + openText
					$(this)[0].ariaLabel = agencyList[$(this).parent().index()] + openText
                if (licenseeActive == true) {
                    $('.licensee_title').on('click', function(e) {
							e.preventDefault(); // kcp: ie 버그
                        $('.licensee-list li').removeClass('active');
							$('.licensee_info').stop().slideUp();
							$(this).siblings().find('.icon_arrow').removeClass('up');
							$(this).siblings().find('.icon_arrow').addClass('down');
                    });
                }
            }
        });

		//  2021-12-18 : 이벤트 제거
        // kcp: ie 이벤트 버블링 제거
		// $('.licensee_title label').on('click',function(e){
		// 	e.stopPropagation();
		// });
    });

    // 2022-11-14 : 알뜰폰 선택 시 제3자정보제공동의 체크박스 노출
    $('.agency_select__items li').click(function(){
        if($(this).index() == 3){
            $('.agreelist.required li:last-child').show();
            $('.agreelist.required input').prop('checked' , false)
            $('#agree_all').prop('checked' , false)
        } else {
            $('.agreelist.required li:last-child').hide();
        }
    })
}

function fn_uiInit()
{
    $("input[name=tel_cd]").val( "" );

    fn_telcomUIInit();

    fn_preCertFixedType();
}

// 이통사 선택 체크 해제
function fn_telcomUIInit()
{
    $('input:radio[name=agency]').prop('checked', false);
    $('.ui_align_mid').addClass('checked');
    $('.check_02 input').prop("checked", false).next('label').removeClass('checked');
}

function fn_btnDisp( bDisp )
{
    $("#btnPass").attr("disabled", bDisp);
    $("#btnSms").attr("disabled",  bDisp);
}

// 저장기능 사용
function fn_preSelectCommID(preSelectCommID)
{
    if( preSelectCommID != "")
    {
        switch (preSelectCommID)
        {
            case "SKT" :
                $('#agency-sk').trigger("click");
                break;
            case "KTF":
                $('#agency-kt').trigger("click");
                break;
            case "LGT":
                $('#agency-lgu').trigger("click");
                break;
            case "SKM":
            case "KTM":
            case "LGM":
                // mvno 는 수동 처리
                //$('#agency-and').prop("checked",true);
                $('#agency-and').addClass('checked');
                $('#agency-and').addClass('active');
                //$('#agency-and').next('label').addClass('checked').append('<span class="current"></span>');

                $("input[name=comm_id]").val( preSelectCommID );
                mvnoCommId = preSelectCommID;
                break;
        }
    }
}

// MSIE7 이하 버전 체크
function fn_browserChk()
{
    var KCP_USERAGENT 	= navigator.userAgent;
    var KCP_USER_OS   	= navigator.platform;

    // 체크 되는 기준 버전(int 형)
    var MSIE9          = 9;

    var chkAbleBrowser = false;


    if((KCP_USER_OS.indexOf ("Win") != -1) || (KCP_USER_OS.indexOf ("Win32") != -1) || (KCP_USER_OS.indexOf ("Win64") != -1))
    {
        if (KCP_USERAGENT.indexOf("MSIE") > -1)
        {
            if(KCP_USERAGENT.indexOf("Trident/4") > -1)
            {
                // MSIE 8
                chkAbleBrowser = true;
            }
            else if (navigator.appName == 'Microsoft Internet Explorer')
            {
                var rv = 99;

                var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");

                if (re.exec(KCP_USERAGENT) != null)
                {
                    rv = parseFloat(RegExp.$1);
                }

                if ( rv < MSIE9)
                {
                    // < MSIE 8
                    chkAbleBrowser = true;
                }
            }

            if (chkAbleBrowser)
            {
                alert ( "권장 브라우저(IE11 이상, 크롬, 엣지)를 이용해 주시기 바랍니다." );
            }
        }
    }
}


//MVNO 통신사 선택이 짤림
function fn_mvnoLayerSet()
{
	var maximumHeight = 1060; // 이사이즈가 문자(SMS)로 인증하기 일때 보임
	
	// 아이프레임 사이즈 측정
	if( self.innerHeight > maximumHeight )
	{
		// 레이업 팝업 위치변경
		$('.layerPopupWrap .layer-pop').css("top", 350); 
	}

}

// 약관짤림
function fn_agreeLayerSet()
{
	var maximumHeight = 1060; // 이사이즈가 문자(SMS)로 인증하기 일때 보임
	
	// 아이프레임 사이즈 측정
	if( self.innerHeight > maximumHeight )
	{
		// 레이업 팝업 위치변경
		$('.layerPopupWrap .layer-pop').css("top", 350); 
	}
}
// 통신사 선택 여부
function fn_checkedCommId()
{
    var agencyCheck = fn_getCommId();

    if (agencyCheck == null || agencyCheck == "" || agencyCheck == "underfind")
    {
        // 통신사 선택 없음
        return false;
    }
    else
    {
        // 통신사 선택 있음
        return true;
    }
}

// 선택 통신사
function fn_getCommId()
{
    var agencyCheck = $("input[type=radio][name=agency]:checked").val();

    var agencyCheckAnd = $(".agency_select__items #agency-and").hasClass('active');

    if ( agencyCheckAnd )
    {
        // 알뜰폰인 경우 선택된 MVNO 통신사 가져옴
        agencyCheck = mvnoCommId;
    }

    return agencyCheck;
}

function fn_checkedMvnoCommId(comm_id)
{
    if ( comm_id == "SKM" || comm_id == "KTM" || comm_id == "LGM" )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function fn_preCertFixedType()
{
    try {
        if (PRE_CERT_FIXED_TYPE == "PCF2") {
            $('#btnPass').remove();
            $('#btnSms').removeClass("btn_skip2");
            $('#btnSms').addClass("btn_skip")
        } else if (PRE_CERT_FIXED_TYPE == "PCF3") {
            $('#btnSms').remove();
        }
    }
    catch (e) { return; }
}