var LOCAL_STORAGE_KEY = "__KCP_STORAGE_KEY_VALUE__"

// 통신사 선택,PUSH 입력 페이지에서도 공용으로 사용할수 있습니다.
// 로컬 스토리지 사용여부를 리턴합니다.
function fn_chkLocalStorage() {
    var storage;
    var type = 'localstorage';

    try {
        storage = window[type];
        var x = '__kcp_cert_storage_check__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

// 로컬스토리지에서 인증정보( 이름/휴대폰번호 ) 를 불러옵니다.
// 쿠키 사용
function fn_loadLoaclStorage() {
    if (fn_chkLocalStorage) {
        try {
            if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
                return;
            } else {
                return localStorage.getItem(LOCAL_STORAGE_KEY);
            }
        }
        // 로컬 스토리지 사용불가시 무시
        catch (e) {
            void(0);
        }
    }

}

// 로컬스토리지에서 인증정보( 이름/휴대폰번호 ) 를 저장합니다.
function fn_saveLoaclStorage(data) {
    if (fn_chkLocalStorage) {
        try {
            // 값이 있으면 비우고 저장
            if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
            localStorage.setItem(LOCAL_STORAGE_KEY, data);
        }
        // 로컬 스토리지 사용불가시 무시
        catch (e) {
            void(0);
        }
    }
}

// 로컬스토리지에서 인증정보( 이름/휴대폰번호 ) 를 삭제
function fn_removeLoaclStorage() {
    if (fn_chkLocalStorage) {
        try {
            // 값이 있으면 비우고 저장
            if (localStorage.getItem(LOCAL_STORAGE_KEY)) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
            }
        }
        // 로컬 스토리지 사용불가시 무시
        catch (e) {
            void(0);
        }
    }
}