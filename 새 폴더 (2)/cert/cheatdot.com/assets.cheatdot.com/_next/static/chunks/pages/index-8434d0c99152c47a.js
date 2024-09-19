(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405], {
        58468: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(4391)
            }])
        },
        4391: function(e, n, t) {
            "use strict";
            t.r(n);
            var i = t(10209);
            t(63959);
            var a = t(41895),
                r = t.n(a),
                l = t(69594),
                s = t.n(l),
                d = t(52345),
                o = t(2729),
                u = t(97035);
            let c = r()(() => Promise.all([t.e(8330), t.e(3531), t.e(8046)]).then(t.bind(t, 28046)), {
                    loadableGenerated: {
                        webpack: () => [28046]
                    }
                }),
                _ = r()(() => Promise.all([t.e(8330), t.e(3531), t.e(7661)]).then(t.bind(t, 77661)), {
                    loadableGenerated: {
                        webpack: () => [77661]
                    }
                }),
                b = () => {
                    let e = (0, d.v9)(e => e.global.device_info.is_mobile),
                        n = (0, d.v9)(e => e.member.info.is_admin);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s(), {
                            children: (0, i.jsx)("title", {
                                children: "치트닷컴"
                            })
                        }), e ? (0, i.jsx)(_, {
                            isAdmin: n
                        }) : (0, i.jsx)(c, {
                            isAdmin: n
                        })]
                    })
                };
            b.getInitialProps = async e => {
                let n = e.reduxStore.getState().board_url;
                return await e.reduxStore.dispatch((0, u.g)({
                    page: n.page
                })), await e.reduxStore.dispatch((0, o.I)({
                    og_title: "치트닷컴"
                })), {}
            }, n.default = b
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 58468)
        }), _N_E = e.O()
    }
]);