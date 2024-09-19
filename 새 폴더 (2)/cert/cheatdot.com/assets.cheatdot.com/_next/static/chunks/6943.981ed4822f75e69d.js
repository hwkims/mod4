"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6943], {
        26943: function(n, e, s) {
            s.r(e);
            var l = s(10209);
            s(63959);
            var o = s(52345),
                c = s(47949),
                t = s(33728);
            e.default = n => {
                let {
                    style: e,
                    isGood: s,
                    isNoGood: u,
                    goodCount: a,
                    noGoodCount: d,
                    selfGood: i
                } = n, r = (0, o.I0)();
                return (0, l.jsxs)("div", {
                    className: e.recommend_btn,
                    children: [s && (0, l.jsxs)("button", {
                        type: "button",
                        className: [e.good, "good" === i ? e.on : null].join(" "),
                        onClick: () => r((0, c.x4)(1)),
                        children: [(0, l.jsx)("span", {
                            children: "\uD83D\uDC4D"
                        }), "추천", (0, l.jsx)("em", {
                            children: (0, t.Y4)(a)
                        })]
                    }), u && (0, l.jsxs)("button", {
                        type: "button",
                        className: [e.bad, "nogood" === i ? e.on : null].join(" "),
                        onClick: () => r((0, c.x4)(2)),
                        children: [(0, l.jsx)("span", {
                            children: "\uD83D\uDC4E"
                        }), "비추천", (0, l.jsx)("em", {
                            children: (0, t.Y4)(d)
                        })]
                    })]
                })
            }
        }
    }
]);