// PC 에서 POPUP size 통일하기 위한 함수
function fn_popResize() {
    // 팝업 좌표 지정
    var left_position = (screen.availWidth) ? (((screen.availWidth - $(document).outerWidth()) / 2)) : 100;
    window.moveTo(left_position, 5);

    // 팝업 사이즈 조정
    var strWidth;
    var strHeight;

    //innerWidth / innerHeight / outerWidth / outerHeight 지원 브라우저
    if (window.innerWidth && window.innerHeight && window.outerWidth && window.outerHeight) {
        strWidth = $('#wrap').outerWidth() + (window.outerWidth - window.innerWidth);
        strHeight = $('#wrap').outerHeight() + (window.outerHeight - window.innerHeight);
    } else {
        var strDocumentWidth = $(document).outerWidth();
        var strDocumentHeight = $(document).outerHeight();

        window.resizeTo(strDocumentWidth, strDocumentHeight);

        var strMenuWidth = strDocumentWidth - $(window).width();
        var strMenuHeight = strDocumentHeight - $(window).height();

        strWidth = $('#wrap').outerWidth() + strMenuWidth;
        strHeight = $('#wrap').outerHeight() + strMenuHeight;
    }

    //resize
    // 약간 늘리자
    window.resizeTo(strWidth + 2, strHeight + 5);
}