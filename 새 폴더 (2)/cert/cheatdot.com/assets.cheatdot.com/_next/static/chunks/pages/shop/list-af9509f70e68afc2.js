(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4484], {
        41665: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/shop/list", function() {
                return n(5403)
            }])
        },
        5403: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(10209);
            n(63959);
            var o = n(41895),
                r = n.n(o),
                i = n(69594),
                s = n.n(i),
                c = n(52345),
                d = n(4752),
                l = n(2729),
                p = n(15498);
            let u = r()(() => Promise.all([n.e(5196), n.e(6570)]).then(n.bind(n, 36570)), {
                    loadableGenerated: {
                        webpack: () => [36570]
                    }
                }),
                _ = r()(() => Promise.all([n.e(5196), n.e(5542)]).then(n.bind(n, 5542)), {
                    loadableGenerated: {
                        webpack: () => [5542]
                    }
                }),
                m = e => {
                    let t = (0, c.I0)(),
                        n = (0, c.v9)(e => e.global.device_info.is_mobile),
                        o = async e => {
                            t((0, d.Z9)({
                                content: "[".concat(e.it_subject, "] 아이템을 구매하시겠습니까?"),
                                type: "confirm",
                                confirmText: "구매",
                                onConfirm: async () => {
                                    let n = await p.Z.post("/v4/shop/api.php", {
                                        cmd: "buy",
                                        data: e
                                    });
                                    return !n.data.error.msg || t((0, d.Z9)({
                                        content: n.data.error.msg
                                    }))
                                },
                                onConfirmEnd: () => t((0, d.Z9)({
                                    content: "아이템을 구매했습니다."
                                }))
                            }))
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s(), {
                            children: (0, a.jsx)("title", {
                                children: "".concat("치트닷컴", " - 상점")
                            })
                        }), n ? (0, a.jsx)(_, { ...e.pageProps,
                            buyItem: o
                        }) : (0, a.jsx)(u, { ...e.pageProps,
                            buyItem: o
                        })]
                    })
                };
            m.getInitialProps = async e => {
                let t = await p.Z.post("/v4/shop/api.php", {
                    cmd: "get_item_list"
                });
                return await e.reduxStore.dispatch((0, l.I)({
                    add_description: ", ".concat("치트닷컴", " - 상점"),
                    add_keywords: ", ".concat("치트닷컴", " - 상점"),
                    og_title: "".concat("치트닷컴", " - 상점")
                })), { ...t.data.message.result
                }
            }, t.default = m
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 41665)
        }), _N_E = e.O()
    }
]);