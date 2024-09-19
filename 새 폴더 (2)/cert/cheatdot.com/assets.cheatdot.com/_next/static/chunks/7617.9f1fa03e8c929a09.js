"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7617], {
        77617: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n(10209),
                o = n(63959),
                s = n(41895),
                r = n.n(s),
                l = n(28330),
                d = n.n(l),
                i = n(33728),
                c = n(74155),
                m = n(82986),
                u = n(52345),
                b = n(82138),
                h = n(25439),
                x = n.n(h),
                f = e => {
                    let {
                        content: t
                    } = e, n = (0, u.I0)();
                    return (0, o.useEffect)(() => {
                        let e = document.querySelector(".ck-content"),
                            t = e => {
                                "IMG" === e.target.tagName && n((0, b.Og)({
                                    src: [e.target.src.replace(/thumb-|_\d+x|_\d+_\d+x/g, "")]
                                }))
                            };
                        return e.addEventListener("click", t), () => {
                            e.removeEventListener("click", t)
                        }
                    }, []), (0, a.jsx)("section", {
                        className: x().article_area,
                        children: (0, a.jsx)("div", {
                            className: "ck-content",
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })
                    })
                },
                j = n(36681),
                _ = n(47949),
                g = n(63531);
            let p = r()(() => n.e(9669).then(n.bind(n, 29669)), {
                    loadableGenerated: {
                        webpack: () => [29669]
                    }
                }),
                k = r()(() => n.e(6449).then(n.bind(n, 36449)), {
                    loadableGenerated: {
                        webpack: () => [36449]
                    }
                });
            var v = e => {
                    let t = (0, u.I0)(),
                        n = (0, u.v9)(e => e.board_view.message.result),
                        s = (0, u.v9)(e => e.member.info),
                        [r, l] = (0, o.useState)({}),
                        [d, i] = (0, o.useState)({
                            comment: ""
                        }),
                        [m, b] = (0, o.useState)(""),
                        [h, f] = (0, o.useState)({
                            replyId: 0,
                            editId: 0
                        });
                    (0, c.Z)(r.ref, r.ref, () => l({}));
                    let j = e => {
                        l(e)
                    };
                    return (0, a.jsxs)("div", {
                        className: [x().layout_box, x().comment_wrap].join(" "),
                        children: [(0, a.jsx)("header", {
                            className: x().title,
                            children: (0, a.jsxs)("h3", {
                                children: ["댓글", (0, a.jsx)("em", {
                                    children: n.comment_list.length
                                })]
                            })
                        }), (0, a.jsx)("section", {
                            className: x().comment_list,
                            children: n.comment_list.map(n => (0, a.jsx)(p, {
                                c: n,
                                commentItemEtc: r,
                                commentItemEtcData: j,
                                commentSubmit: e => t((0, _.ON)(e)),
                                commentText: e.commentText,
                                member: s,
                                comments: d,
                                setComments: i,
                                editComment: m,
                                setEditComment: b,
                                commentEtc: h,
                                setCommentEtc: f,
                                deleteComment: e => t((0, _.YF)(e)),
                                unBlockUser: e => t((0, g.se)(e)),
                                isBlockUser: e => t((0, g.L2)(e))
                            }, n.comment_id))
                        }), n.config.is_comment_write && (0, a.jsx)(k, {
                            commentSubmit: e => t((0, _.ON)(e)),
                            commentText: e.commentText,
                            member: s
                        })]
                    })
                },
                w = n(1702);
            let y = r()(() => n.e(5371).then(n.bind(n, 65371)), {
                    loadableGenerated: {
                        webpack: () => [65371]
                    }
                }),
                N = r()(() => n.e(6943).then(n.bind(n, 26943)), {
                    loadableGenerated: {
                        webpack: () => [26943]
                    }
                }),
                G = r()(() => n.e(1401).then(n.bind(n, 91401)), {
                    loadableGenerated: {
                        webpack: () => [91401]
                    }
                });
            var E = e => {
                let t = (0, o.useRef)(),
                    [n, s] = (0, o.useState)(!1),
                    [r, l] = (0, o.useState)(e.boardUrl);
                (0, c.Z)(t, n, () => s(!1)), (0, o.useEffect)(() => {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                }, []), (0, o.useEffect)(() => {
                    e.boardUrl.bo_table && e.boardUrl.wr_id && l(e.boardUrl)
                }, [e.boardUrl]);
                let u = e.view;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(m.Z, {}), (0, a.jsxs)("div", {
                        className: x().board_opt,
                        children: [(0, a.jsx)(d(), {
                            href: "".concat(r.middlePath, "/").concat(r.bo_table, "/").concat((0, i.SX)(r.qstr)),
                            children: "목록으로"
                        }), u.config.is_write && (0, a.jsx)(d(), {
                            href: "".concat(r.middlePath, "/").concat(r.bo_table, "/write"),
                            children: "글쓰기"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: [x().layout_box, x().board_view].join(" "),
                        children: [(0, a.jsxs)("div", {
                            className: x().title,
                            children: [(0, a.jsx)("header", {
                                children: (0, a.jsx)("h1", {
                                    dangerouslySetInnerHTML: {
                                        __html: u.subject
                                    }
                                })
                            }), (0, a.jsxs)("section", {
                                className: x().info,
                                children: [(0, a.jsx)(j.default, {
                                    mb_id: u.mb_id,
                                    mb_nick: u.mb_nick,
                                    mb_level: u.mb_level,
                                    extras: u.extra
                                }), (0, a.jsx)("time", {
                                    dateTime: u.date_unit,
                                    children: u.date
                                }), (0, a.jsxs)("span", {
                                    children: ["조회수 ", u.hit]
                                }), (0, a.jsxs)("div", {
                                    className: x().opt_wrap,
                                    children: [(0, a.jsx)("button", {
                                        type: "button",
                                        className: x().opt_open,
                                        onClick: () => s(!n),
                                        ref: t,
                                        children: (0, a.jsx)("svg", {
                                            width: "2.5",
                                            height: "14.6",
                                            viewBox: "0 0 2.5 14.6",
                                            children: (0, a.jsxs)("g", {
                                                id: "more-vertical-svgrepo-com",
                                                transform: "translate(-10.75 -4.7)",
                                                children: [(0, a.jsx)("line", {
                                                    y2: "0.1",
                                                    transform: "translate(12 5.95)",
                                                    fill: "none",
                                                    stroke: "#a6a8ad",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2.5"
                                                }), (0, a.jsx)("line", {
                                                    "data-name": "primary-upstroke",
                                                    y2: "0.1",
                                                    transform: "translate(12 11.95)",
                                                    fill: "none",
                                                    stroke: "#a6a8ad",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2.5"
                                                }), (0, a.jsx)("line", {
                                                    "data-name": "primary-upstroke",
                                                    y2: "0.1",
                                                    transform: "translate(12 17.95)",
                                                    fill: "none",
                                                    stroke: "#a6a8ad",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2.5"
                                                })]
                                            })
                                        })
                                    }), n && (0, a.jsx)(G, {
                                        style: x(),
                                        view: u,
                                        updateGallHref: e.updateGallHref,
                                        deleteGall: e.deleteGall,
                                        mbId: e.mbId
                                    })]
                                })]
                            })]
                        }), u.file.length > 0 && (0, a.jsx)(y, {
                            file: u.file
                        }), (0, a.jsx)(f, {
                            content: u.content
                        }), (u.config.is_good || u.config.is_nogood) && (0, a.jsx)(N, {
                            style: x(),
                            isGood: u.config.is_good,
                            isNoGood: u.config.is_nogood,
                            goodCount: u.good,
                            noGoodCount: u.nogood,
                            selfGood: u.self_good
                        }), (0, a.jsx)("div", {
                            style: {
                                marginTop: 50
                            },
                            children: (0, a.jsx)("ins", {
                                className: "adsbygoogle",
                                style: {
                                    display: "block"
                                },
                                "data-ad-client": "ca-pub-8138590210893448",
                                "data-ad-slot": "9332710013",
                                "data-ad-format": "auto",
                                "data-full-width-responsive": "true"
                            })
                        })]
                    }), (0, a.jsx)(v, {
                        commentText: e.commentText
                    }), (0, a.jsx)(w.default, {})]
                })
            }
        }
    }
]);