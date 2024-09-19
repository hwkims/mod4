(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5041], {
        89500: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/board/list", function() {
                return a(2276)
            }])
        },
        2276: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(10209);
            a(63959);
            var o = a(69594),
                r = a.n(o),
                i = a(41895),
                s = a.n(i),
                d = a(52345),
                c = a(91525),
                l = a(2729),
                _ = a(14414);
            let b = s()(() => a.e(3406).then(a.bind(a, 43406)), {
                    loadableGenerated: {
                        webpack: () => [43406]
                    }
                }),
                u = s()(() => Promise.all([a.e(8330), a.e(5196), a.e(3531), a.e(1702), a.e(6681)]).then(a.bind(a, 1702)), {
                    loadableGenerated: {
                        webpack: () => [1702]
                    }
                }),
                p = s()(() => Promise.all([a.e(8330), a.e(3531), a.e(8379)]).then(a.bind(a, 78379)), {
                    loadableGenerated: {
                        webpack: () => [78379]
                    }
                }),
                h = () => {
                    let e = (0, d.v9)(e => e.global.device_info.is_mobile),
                        t = (0, d.v9)(e => e.member.info.is_admin),
                        a = (0, d.v9)(e => e.board_list),
                        o = a.message.result,
                        i = "";
                    return (i = o.title) || (i = "".concat("치트닷컴", " - 오류안내 페이지")), (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(r(), {
                            children: (0, n.jsx)("title", {
                                children: i
                            })
                        }), a.error.code ? (0, n.jsx)(b, {
                            title: a.error.msg
                        }) : e ? (0, n.jsx)(p, {
                            isAdmin: t
                        }) : (0, n.jsx)(u, {
                            isAdmin: t
                        })]
                    })
                };
            h.getInitialProps = async e => {
                let t = (0, c.a)(e.req),
                    a = e.reduxStore.getState().board_url,
                    n = await t.post("/v4/board/board.php", "bo_table=".concat(a.bo_table).concat(a.stx && "&sop=".concat(a.sop, "&sfl=").concat(a.sfl, "&stx=").concat(a.stx), "&page=").concat(a.page));
                await e.reduxStore.dispatch((0, _.gp)({ ...n.data
                }));
                let o = e.reduxStore.getState().board_list.message.result;
                return Object.keys(o).length >= 1 ? await e.reduxStore.dispatch((0, l.I)({
                    add_description: ", ".concat(o.title),
                    add_keywords: ", ".concat(o.title),
                    og_title: o.og_title,
                    add_og_url: e.asPath.split("?")[0]
                })) : await e.reduxStore.dispatch((0, l.I)({
                    add_description: ", ".concat("치트닷컴", " - 오류안내 페이지"),
                    add_keywords: ", ".concat("치트닷컴", " - 오류안내 페이지")
                })), {}
            }, t.default = h
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 89500)
        }), _N_E = e.O()
    }
]);