// window size responsive

$(function() {
    // checkbox 이미 체크되어 있을 경우
    $('input[type="checkbox"]').each(function() {
        checkboxSet($(this));
    });

    // cheecbox 클래스 add/remove
    $(document).on('change', 'input[type="checkbox"]', function() {
        checkboxSet($(this));
    });

    // radio 클래스 add/remove
    $(".licensee-list").on('change', 'input[type="radio"]', function() {
        // $('input[type="radio"]').next('label').removeClass('checked'); // kcp: 다른 input 영향으로 수정
        $('.licensee-list input[type="radio"]').next('label').removeClass('checked');
        checkboxSet($(this));
    });

    $('.licensee-list').on('click', 'label', function() {
        if (navigator.appVersion.indexOf('MSIE') != -1) {
            $("#" + $(this).attr("for")).click();

            // $('input[type="radio"]').next('label').removeClass('checked'); // kcp: 다른 input 영향으로 수정
            $('.licensee-list input[type="radio"]').next('label').removeClass('checked');
            if ($("#" + $(this).attr("for")).prop('checked')) {
                $("#" + $(this).attr("for")).next('label').addClass('checked');
            }
        }
    });

    // radio 클래스 add/remove + .current
    // kcp : 2022-01-26 통신사 선택 라디오 + 버튼으로 변경
    // * .cuurent 부분 제거 후 border로 변경
    $(".agency_select").on('change', 'input[type="radio"]', function() {
        // $('.agency_select input[type="radio"]').next('label').removeClass('checked').find('.current').remove(); kcp 수정
        if ($(this).prop('checked') == true) {
            $('.ui_align_mid').removeClass('checked active')
            $('.agency-and').prop('title', "선택해제 됨")
            $(this).next('label').addClass('checked')
        }
    });
    $(".agency_select").on('click', 'button.ui_align_mid', function() {
        $(this).addClass('checked active').prop('title', "알뜰폰 선택 됨")
        $(".agency_select input[type='radio']").prop('checked', false)
        $(".agency_select label").removeClass('checked')
    })

    $('.agency_select').on('click', 'input[type="radio"]+label', function() {
        if (navigator.appVersion.indexOf('MSIE') != -1) {
            $("#" + $(this).attr("for")).click();
            // $('.agency_select input[type="radio"]').next('label').removeClass('checked').find('.current').remove();

            // if($("#" + $(this).attr("for")).prop('checked')){
            // 	$("#" + $(this).attr("for")).next('label').addClass('checked').append('<span class="current"></span>');
            // }
        }
    });
});

function checkboxSet(input) {
    if (input.prop('checked')) {
        input.next('label').addClass('checked');
    } else {
        input.next('label').removeClass('checked');
    }
}

// GNB 갯수에 따른 class명
function gnbSet() {
    if ($('.gnb_wrap').length) {
        var gnbLen = $('.gnb_wrap').find('li').length;
        $('.gnb_wrap').addClass('col-' + gnbLen);
    }
}
$(function() {
    $(window).on("load", function() {
        gnbSet();
    });
});

// setting fn
$(function() {
    $.fn.extend({
        // input focus
        inputFocus: function() {
            var $input = $('.input input, .input textarea');
            $input.focus(function() {
                $(this).parent().addClass('focus');
                if ($(this).parent('.input_mynum').length > 0) {
                    $(this).parent().parent().parent().parent().addClass('focus');
                }
            }).blur(function() {
                $(this).parent().removeClass('focus');
                if ($('.input').children('textarea').length) {
                    $('.input textarea').parent().addClass('textarea');
                }
                if ($(this).parent('.input_mynum').length > 0) {
                    $(this).parent().parent().parent().parent().removeClass('focus');
                }
            }).blur();
            $('.input_cal input').focus(function() {
                $(this).parent().removeClass('focus');
            });
        }
    });
});

// 통신사 선택 시
$(function() {
    // 240304 수정
    $(".agreelist .check2 input").on("click", function(e) {
        var listLen = $('.agreelist.required li:visible').length;
        var Count = $('.agreelist.required li:visible input:checked').length;

        if ($(this).parents().hasClass('all')) {
            agreeAll();
        } else {
            if (Count == listLen) {
                $('.btn_skip').addClass('on');
                $('.agreelist.all li input').prop('checked', true).next('label').addClass('checked');
            } else {
                $('.btn_skip').removeClass('on');
                $('.agreelist.all li input').prop('checked', false).next('label').removeClass('checked');
            }
        }
    });
    // //240304 수정
});

// 전체 동의 시
function agreeAll() {
    // 240304 수정
    if ($(".agreelist.all li input").prop("checked")) {
        $('.agreelist.required li:visible .check2 input').prop("checked", true).next('label').addClass('checked');
        $('.btn_skip').addClass('on');
    } else {
        $('.agreelist.required li:visible .check2 input').prop("checked", false).next('label').removeClass('checked');
        $('.btn_skip').removeClass('on');
    }
    // //240304 수정
}

// PASS 인증 동그라미 ani
function twinkle() {
    setTimeout(function() {
        $(".twinkle>div:eq(0)").addClass("on");
    }, 0);
    setTimeout(function() {
        $(".twinkle>div:eq(1)").addClass("on");
    }, 500);
    setTimeout(function() {
        $(".twinkle>div:eq(2)").addClass("on");
    }, 1000);
    setTimeout(function() {
        $(".twinkle>div:eq(3)").addClass("on");
    }, 1500);
    setTimeout(function() {
        $(".twinkle>div:eq(4)").addClass("on");
    }, 2000);
    setTimeout(function() {
        $(".twinkle>div:eq(5)").addClass("on");
    }, 2500);
}

// 주민등록번호
$(function() {
    if ($(".mynum").length > 0) {
        $(".input_mynum input").bind("keyup", function(e) {
            var keyCode = e.keyCode || e.which;
            var byte = $(this).val();
            var del = $(this).val() + 1;
            var _this = $(this).parent();
            _this.find('.mark i').removeClass();
            if (byte.length == 1) {
                _this.find('.mark i:eq(0)').addClass('on');
            } else if (byte.length == 2) {
                _this.find('.mark i:eq(0)').addClass('on');
                _this.find('.mark i:eq(1)').addClass('on');
            } else if (byte.length == 3) {
                _this.find('.mark i:eq(0)').addClass('on');
                _this.find('.mark i:eq(1)').addClass('on');
                _this.find('.mark i:eq(2)').addClass('on');
            } else if (byte.length == 4) {
                _this.find('.mark i:eq(0)').addClass('on');
                _this.find('.mark i:eq(1)').addClass('on');
                _this.find('.mark i:eq(2)').addClass('on');
                _this.find('.mark i:eq(3)').addClass('on');
            } else if (byte.length == 5) {
                _this.find('.mark i:eq(0)').addClass('on');
                _this.find('.mark i:eq(1)').addClass('on');
                _this.find('.mark i:eq(2)').addClass('on');
                _this.find('.mark i:eq(3)').addClass('on');
                _this.find('.mark i:eq(4)').addClass('on');
            } else if (byte.length == 6) {
                _this.find('.mark i:eq(0)').addClass('on');
                _this.find('.mark i:eq(1)').addClass('on');
                _this.find('.mark i:eq(2)').addClass('on');
                _this.find('.mark i:eq(3)').addClass('on');
                _this.find('.mark i:eq(4)').addClass('on');
                _this.find('.mark i:eq(5)').addClass('on');
            } else {
                _this.find('.mark i').removeClass();
            }
        });
    }
});

// common fn
$(function() {
    $(".input").inputFocus();
});

//layer-popup
// 240201 수정
function pop_open(layerid) {
    var tgId = '';

    if (layerid) {
        tgId = '#' + layerid + ' ';
    }

    $(tgId + '.dim').fadeIn(200);
    $(tgId + '.layer-pop').fadeIn(200);
    $(tgId + ".input").inputFocus();
}
// //240201 수정

function pop_close(target) {
    $('.dim').fadeOut(200);
    $('.layer-pop').fadeOut(200);

    // _focus = $(this);
    // 2021-12-28 : 타겟 수정 = id값
    target ? $("#" + target).focus() : $(this).focus();

    // $('#wrap #header').attr("tabIndex" , "0").focus();  /* 210118: 추가/수정 */
}

$(function() {
    // 팝업 클릭 시
    // 240201 수정
    var _focus = '';
    $('body').on('click', '.btn_popup', function() {
        var layerid = $(this).attr('data-layerid');
        _focus = $(this);
        _focus.focus();
        pop_open(layerid);
    });
    // //240201 수정

    // 팝업 닫기 시
    $('body').on('click', '.pop-btn .close', function() {
        _focus = $(this);
        _focus.focus();
        pop_close();
    });

    // 팝업 오픈 시 텝 이동
    $(".pop-btn .close").keydown(function(event) {
        if (event.keyCode == '9' && !event.shiftKey) {
            event.preventDefault();
            $(".pop-con").attr("tabIndex", "0").focus(); /* 210118: 추가/수정 */
            $(".pop-con_02").attr("tabIndex", "0").focus(); /* 210118: 추가/수정 */
        }
    });
});