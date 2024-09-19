// 해당 JS 는 PC에서만 사용합니다.
var is_iframe = "";

var PC_MIN_SIZE = 720;

// ready 에두면 아이프레임 인식이 안된다.
fn_chkIframeUse();

$(window).on("load", function() {

    //removeFooter();
    //removeBanner();
    removeHeader();
});

function fn_chkIframeUse() {
    // top.window.document; catch 에 걸리면 iframe 이다
    try {
        top.window.document;
    } catch (e) {
        is_iframe = "Y";
    }
}

//푸터 .is-fixed 제거시 #wrap에 .pd-0 추가
function removeFooter() {
    // 아이프레임
    if (is_iframe == "Y") {
        var minimumHeight = PC_MIN_SIZE; // 이사이즈가 문자(SMS)로 인증하기 일때 보임

        // 아이프레임 사이즈 측정
        if (self.innerHeight < minimumHeight) {
            // 푸터 제거
            $("#footer").removeClass('is-fixed');
            $("#wrap").addClass('pd-0')
        }
    }
}

// 배너 .is-fixed 제거시 #wrap에 .is-bannerfix 제거
function removeBanner() {
    // 아이프레임
    if (is_iframe == "Y") {
        var minimumHeight = PC_MIN_SIZE; // 이사이즈가 문자(SMS)로 인증하기 일때 보임

        // 아이프레임 사이즈 측정
        if (self.innerHeight < minimumHeight) {
            // 푸터 제거
            $("#footerBanner").removeClass('is-fixed');
            $("#wrap").removeClass('.is-bannerfix')
        }
    }
}

function removeHeader() {
    var minimumHeight = PC_MIN_SIZE; // 이사이즈가 문자(SMS)로 인증하기 일때 보임

    console.log("self.innerHeight : " + self.innerHeight);

    // 아이프레임 사이즈 측정
    if (self.innerHeight < minimumHeight) {
        // 푸터 제거
        $("#header h1").css('display', 'none');
    }
}