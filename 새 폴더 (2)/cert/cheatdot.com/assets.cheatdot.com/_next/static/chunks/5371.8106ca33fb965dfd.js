"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5371], {
        65371: function(a, n, e) {
            e.r(n);
            var s = e(10209);
            e(63959);
            var c = e(33728),
                i = e(25439),
                d = e.n(i);
            n.default = a => (0, s.jsx)("section", {
                children: (0, s.jsx)("div", {
                    className: d().file_wrap,
                    children: a.file.map(a => {
                        if (a.name) return (0, s.jsxs)("div", {
                            className: d().box,
                            children: [(0, s.jsx)("a", {
                                href: "/api/v4/board/".concat(a.link, "&nonce=").concat(a.nonce),
                                target: "_blank",
                                children: a.name
                            }), a.ap > 0 && (0, s.jsxs)("span", {
                                className: d().point,
                                children: [(0, s.jsx)("em", {
                                    children: (0, c.Y4)(a.ap)
                                }), "AP"]
                            }), (0, s.jsx)("a", {
                                href: "/api/v4/board/".concat(a.link, "&nonce=").concat(a.nonce),
                                className: d().btn_down,
                                target: "_blank",
                                children: (0, s.jsx)("svg", {
                                    width: "16",
                                    height: "13.9",
                                    viewBox: "0 0 16 13.9",
                                    children: (0, s.jsxs)("g", {
                                        id: "download",
                                        transform: "translate(0 -1)",
                                        children: [(0, s.jsx)("path", {
                                            id: "패스_20",
                                            "data-name": "패스 20",
                                            d: "M.5,9.9a.5.5,0,0,1,.5.5v2.5a1,1,0,0,0,1,1H14a1,1,0,0,0,1-1V10.4a.5.5,0,0,1,1,0v2.5a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V10.4a.5.5,0,0,1,.5-.5Z"
                                        }), (0, s.jsx)("path", {
                                            id: "패스_21",
                                            "data-name": "패스 21",
                                            d: "M7.646,11.854a.5.5,0,0,0,.708,0l3-3a.5.5,0,1,0-.708-.708L8.5,10.293V1.5a.5.5,0,1,0-1,0v8.793L5.354,8.146a.5.5,0,1,0-.708.708Z"
                                        })]
                                    })
                                })
                            })]
                        }, a.name)
                    })
                })
            })
        }
    }
]);