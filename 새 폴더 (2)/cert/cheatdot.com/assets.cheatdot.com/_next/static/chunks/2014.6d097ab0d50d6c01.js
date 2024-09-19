"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2014], {
        62014: function(s, e, i) {
            i.r(e);
            var a = i(10209),
                c = i(63959);
            e.default = c.memo(s => {
                let {
                    isNew: e,
                    isPhoto: i,
                    isFile: c,
                    className: h
                } = s;
                return (0, a.jsxs)(a.Fragment, {
                    children: [e && (0, a.jsx)("span", {
                        className: h,
                        children: (0, a.jsx)("img", {
                            src: "/img/icon_new.svg",
                            width: 16,
                            height: 16,
                            alt: "새 글"
                        })
                    }), i && (0, a.jsx)("span", {
                        className: h,
                        children: (0, a.jsx)("img", {
                            src: "/img/icon_photo.svg",
                            width: 15,
                            height: 15,
                            alt: "사진"
                        })
                    }), c > 0 && (0, a.jsx)("span", {
                        className: h,
                        children: (0, a.jsx)("img", {
                            src: "/img/icon_file.svg",
                            width: 16,
                            height: 15,
                            alt: "파일"
                        })
                    })]
                })
            })
        }
    }
]);