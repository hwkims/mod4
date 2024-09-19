(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7945], {
        90889: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/system/current_user", function() {
                return t(58950)
            }])
        },
        58950: function(e, n, t) {
            "use strict";
            t.r(n);
            var a = t(10209);
            t(63959);
            var c = t(41895),
                i = t.n(c),
                r = t(69594),
                s = t.n(r),
                d = t(52345),
                o = t(2729);
            let l = i()(() => t.e(6268).then(t.bind(t, 36268)), {
                    loadableGenerated: {
                        webpack: () => [36268]
                    }
                }),
                _ = i()(() => t.e(3913).then(t.bind(t, 23913)), {
                    loadableGenerated: {
                        webpack: () => [23913]
                    }
                }),
                u = () => {
                    let e = (0, d.v9)(e => e.global.device_info.is_mobile);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(s(), {
                            children: (0, a.jsx)("title", {
                                children: "".concat("치트닷컴", " - 현재접속자")
                            })
                        }), e ? (0, a.jsx)(_, {}) : (0, a.jsx)(l, {})]
                    })
                };
            u.getInitialProps = async e => (await e.reduxStore.dispatch((0, o.I)({
                add_description: ", ".concat("치트닷컴", " - 현재접속자"),
                add_keywords: ", ".concat("치트닷컴", " - 현재접속자"),
                og_title: "".concat("치트닷컴", " - 현재접속자")
            })), {}), n.default = u
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 90889)
        }), _N_E = e.O()
    }
]);