"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7891, 2777], {
        47891: function(e, a, r) {
            r.r(a);
            var l = r(10209),
                t = r(63959),
                s = r(28330),
                i = r.n(s),
                n = r(62400),
                c = r.n(n);
            a.default = t.memo(e => {
                var a;
                let r = a = (a = (a = (a = ((a = (a = e.url).replace(/([&?])page=[0-9]*/g, "$1")).endsWith("&") || a.endsWith("?") ? a : a + (a.includes("?") ? "&" : "?")) + "page=").replace(/[^\w\-~+_.?#=!&;,/:%@$\|*\'()\[\]\\x80-\\xff]/ig, "")).replace(/&&+/g, "&")).replace(/&+$/, ""),
                    s = Math.ceil(e.totalCount / e.rows),
                    n = Math.floor((e.page - 1) / e.writePages) * e.writePages + 1,
                    h = n + e.writePages - 1;
                return h >= s && (h = s), (0, l.jsx)("div", {
                    className: c().paging_wrap,
                    children: (0, l.jsx)("ul", {
                        children: s > 1 && [...Array(h)].map((a, d) => {
                            let g = d + 1;
                            if (g >= n) return (0, l.jsxs)(t.Fragment, {
                                children: [n > 1 && g === n && (0, l.jsx)("li", {
                                    children: (0, l.jsx)(i(), {
                                        href: "".concat(r).concat(n - 1),
                                        "aria-label": "이전",
                                        children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "8",
                                            height: "14",
                                            viewBox: "0 0 8 14",
                                            children: (0, l.jsx)("path", {
                                                id: "XMLID_224_",
                                                d: "M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z",
                                                transform: "translate(-75 14) rotate(-90)",
                                                fill: "#8b8f95"
                                            })
                                        })
                                    })
                                }), e.page !== g ? (0, l.jsx)("li", {
                                    children: (0, l.jsx)(i(), {
                                        href: "".concat(r).concat(g),
                                        children: g
                                    })
                                }) : (0, l.jsx)("li", {
                                    children: (0, l.jsx)("span", {
                                        className: c().current,
                                        children: g
                                    })
                                }), s > h && g === h && (0, l.jsx)("li", {
                                    children: (0, l.jsx)(i(), {
                                        href: "".concat(r).concat(h + 1),
                                        "aria-label": "다음",
                                        children: (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "8",
                                            height: "14",
                                            viewBox: "0 0 8 14",
                                            children: (0, l.jsx)("path", {
                                                id: "XMLID_224_",
                                                d: "M13.813,81.862,7.449,75.2a.616.616,0,0,0-.9,0L.186,81.862a.689.689,0,0,0,0,.943.616.616,0,0,0,.9,0L7,76.609l5.914,6.2a.616.616,0,0,0,.9,0A.689.689,0,0,0,13.813,81.862Z",
                                                transform: "translate(83 0) rotate(90)",
                                                fill: "#8b8f95"
                                            })
                                        })
                                    })
                                })]
                            }, g)
                        })
                    })
                })
            })
        }
    }
]);