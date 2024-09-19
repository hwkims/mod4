(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6756], {
        70390: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/ranking/level", function() {
                return t(14252)
            }])
        },
        14252: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(10209);
            t(63959);
            var i = t(41895),
                r = t.n(i),
                c = t(69594),
                l = t.n(c),
                o = t(15498),
                s = t(52345),
                d = t(2729);
            let _ = r()(() => Promise.all([t.e(8330), t.e(1598)]).then(t.bind(t, 41598)), {
                    loadableGenerated: {
                        webpack: () => [41598]
                    }
                }),
                p = r()(() => t.e(6913).then(t.bind(t, 46913)), {
                    loadableGenerated: {
                        webpack: () => [46913]
                    }
                }),
                u = e => {
                    let n = (0, s.v9)(e => e.global.device_info.is_mobile);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(l(), {
                            children: (0, a.jsx)("title", {
                                children: "".concat("치트닷컴", " - 계급랭킹")
                            })
                        }), n ? (0, a.jsx)(p, { ...e.pageProps
                        }) : (0, a.jsx)(_, { ...e.pageProps
                        })]
                    })
                };
            u.getInitialProps = async e => {
                let n = await o.Z.post("/v4/ranking/api.php", {
                    cmd: "get_top_level_list"
                });
                return await e.reduxStore.dispatch((0, d.I)({
                    add_description: ", ".concat("치트닷컴", " - 계급랭킹"),
                    add_keywords: ", ".concat("치트닷컴", " - 계급랭킹"),
                    og_title: "".concat("치트닷컴", " - 계급랭킹")
                })), { ...n.data
                }
            }, n.default = u
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 70390)
        }), _N_E = e.O()
    }
]);