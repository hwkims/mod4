self.__BUILD_MANIFEST = function(s, e, a, c, t, i) {
    return {
        __rewrites: {
            afterFiles: [{
                has: a,
                source: "/(customer|community|games)/:bo_table([a-z_]+)",
                destination: c
            }, {
                has: a,
                source: "/(customer|community|games)/:bo_table([a-z_]+)/:wr_id(\\d{1,})",
                destination: t
            }, {
                has: a,
                source: "/(customer|community|games)/:bo_table([a-z_]+)/write",
                destination: i
            }, {
                has: a,
                source: "/user/:mb_id([A-Za-z0-9+/=%]+)/board/:type(write|comment|visit_book)",
                destination: "/user/:mb_id/board/:type"
            }],
            beforeFiles: [],
            fallback: []
        },
        "/": ["static/chunks/pages/index-8434d0c99152c47a.js"],
        "/404": [s, "static/chunks/pages/404-08befa38cac4c0ae.js"],
        "/@me/list": [s, "static/chunks/9545-15b8d6746e8159ab.js", "static/chunks/pages/@me/list-51c2ff1c9511cc8d.js"],
        "/@me/[channel]": [s, "static/chunks/pages/@me/[channel]-b746171a6aa15928.js"],
        "/_error": ["static/chunks/pages/_error-43b1772fbdf75e97.js"],
        "/adm/ManageActivityStopPopupView": ["static/chunks/pages/adm/ManageActivityStopPopupView-ba4238188837e249.js"],
        "/alarm": [s, e, "static/chunks/pages/alarm-7f8a705a9c9296be.js"],
        "/auth/cert": ["static/chunks/pages/auth/cert-5eb195d8b80c7f8a.js"],
        "/auth/find_account": ["static/chunks/pages/auth/find_account-3e0484c2df5c9b33.js"],
        "/auth/login": ["static/chunks/pages/auth/login-15e45f50d3ea346f.js"],
        "/auth/register": [e, "static/chunks/pages/auth/register-29258f92a5837f82.js"],
        "/board/list": ["static/chunks/pages/board/list-21c3b2eefc7bb7aa.js"],
        "/board/view": ["static/chunks/pages/board/view-981c146c204c5961.js"],
        "/board/write": ["static/chunks/pages/board/write-bdd474e19150771e.js"],
        "/chat": [s, e, "static/chunks/pages/chat-b38d9f38d48f1d79.js"],
        "/faq/list": ["static/chunks/pages/faq/list-7c228807d8525598.js"],
        "/holdem": ["static/css/53ae7a3364a474e2.css", "static/chunks/pages/holdem-6a5c405be82da087.js"],
        "/my/ap": ["static/chunks/pages/my/ap-45190d9639b76219.js"],
        "/my/block": [e, "static/chunks/pages/my/block-fe586742730b43bf.js"],
        "/my/cp": ["static/chunks/pages/my/cp-fa36f20f7364e99e.js"],
        "/my/cp_charge": [e, "static/chunks/pages/my/cp_charge-fc8fcbf197a1f9d5.js"],
        "/my/cp_exchange": ["static/chunks/pages/my/cp_exchange-3e7e9995efdc3ccd.js"],
        "/my/geonppang": ["static/chunks/pages/my/geonppang-f1925d06557085fc.js"],
        "/my/info": [e, "static/chunks/pages/my/info-1d265198503a45e6.js"],
        "/my/item": [e, "static/chunks/pages/my/item-115bf2d209fd44f5.js"],
        "/my/item_use": ["static/chunks/pages/my/item_use-3bd420e939ea380d.js"],
        "/my/log": ["static/chunks/pages/my/log-31c31a9d6ee3eef8.js"],
        "/my/password": [e, "static/chunks/pages/my/password-8f4fdd839df77810.js"],
        "/my/popup/cp_charge": [e, "static/chunks/pages/my/popup/cp_charge-c6bde10b0cbdf286.js"],
        "/my/popup/geonppang_charge": ["static/chunks/pages/my/popup/geonppang_charge-22aa7b187c9ad3af.js"],
        "/my/withdraw": ["static/chunks/pages/my/withdraw-3b9f1a1225e83375.js"],
        "/publish_example": ["static/chunks/5196-f49ee089063d82da.js", "static/chunks/pages/publish_example-c431e73e90241f7a.js"],
        "/ranking": ["static/chunks/pages/ranking-4c4810e160ff4b99.js"],
        "/ranking/level": ["static/chunks/pages/ranking/level-7f2bad7109938f81.js"],
        "/report": ["static/chunks/pages/report-5ca12d5bca398a97.js"],
        "/shop/list": ["static/chunks/pages/shop/list-af9509f70e68afc2.js"],
        "/system/benefit": ["static/chunks/pages/system/benefit-af8c9bdcdf4c299e.js"],
        "/system/current_user": ["static/chunks/pages/system/current_user-05c5e086505f636d.js"],
        "/system/prison": ["static/chunks/pages/system/prison-1f48a0fed6a14de6.js"],
        "/termspolicy/policy": [s, "static/chunks/pages/termspolicy/policy-4e2964efb2637a10.js"],
        "/termspolicy/privacy": [s, "static/chunks/pages/termspolicy/privacy-ff9d38901cee899a.js"],
        "/termspolicy/refusal": [s, "static/chunks/pages/termspolicy/refusal-9790219ba657ef03.js"],
        "/termspolicy/service": [s, "static/chunks/615-240245514bb29a8d.js", "static/chunks/pages/termspolicy/service-ef09c3bd0f05051f.js"],
        "/user/[mb_id]/board/[type]": ["static/chunks/pages/user/[mb_id]/board/[type]-60c0da592d2e51bf.js"],
        sortedPages: ["/", "/404", "/@me/list", "/@me/[channel]", "/_app", "/_error", "/adm/ManageActivityStopPopupView", "/alarm", "/auth/cert", "/auth/find_account", "/auth/login", "/auth/register", c, t, i, "/chat", "/faq/list", "/holdem", "/my/ap", "/my/block", "/my/cp", "/my/cp_charge", "/my/cp_exchange", "/my/geonppang", "/my/info", "/my/item", "/my/item_use", "/my/log", "/my/password", "/my/popup/cp_charge", "/my/popup/geonppang_charge", "/my/withdraw", "/publish_example", "/ranking", "/ranking/level", "/report", "/shop/list", "/system/benefit", "/system/current_user", "/system/prison", "/termspolicy/policy", "/termspolicy/privacy", "/termspolicy/refusal", "/termspolicy/service", "/user/[mb_id]/board/[type]"]
    }
}("static/chunks/8330-5c349b51bdf7cee8.js", "static/chunks/3531-106970a540936429.js", void 0, "/board/list", "/board/view", "/board/write"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();