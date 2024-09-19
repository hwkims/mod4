(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7068], {
        29339: function(t, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/board/view", function() {
                return a(42847)
            }])
        },
        42847: function(t, e, a) {
            "use strict";
            a.r(e);
            var o = a(10209);
            a(63959);
            var n = a(41895),
                r = a.n(n),
                c = a(69594),
                d = a.n(c),
                i = a(52345),
                l = a(91525),
                s = a(2729),
                _ = a(49029),
                p = a(14414),
                m = a(47949);
            let b = r()(() => a.e(3406).then(a.bind(a, 43406)), {
                    loadableGenerated: {
                        webpack: () => [43406]
                    }
                }),
                u = r()(() => Promise.all([a.e(8330), a.e(5196), a.e(3531), a.e(3580), a.e(1702), a.e(7617)]).then(a.bind(a, 77617)), {
                    loadableGenerated: {
                        webpack: () => [77617]
                    }
                }),
                w = r()(() => Promise.all([a.e(3531), a.e(3580), a.e(3508)]).then(a.bind(a, 73508)), {
                    loadableGenerated: {
                        webpack: () => [73508]
                    }
                }),
                g = () => {
                    let t = (0, i.I0)(),
                        e = (0, i.v9)(t => t.global.device_info.is_mobile),
                        a = (0, i.v9)(t => t.board_url),
                        n = (0, i.v9)(t => t.board_view),
                        r = n.message.result,
                        c = (0, i.v9)(t => t.member.info),
                        l = "댓글 작성시 반드시 게시물규제정책을 확인해주시기 바랍니다.";
                    c.is_activity || (l = "현재 활동정지 상태입니다. \n\n활동 정지가 해제되기 전까지 \n해당 홈페이지에서 글쓰기와 수정 등\n홈페이지 활동이 불가합니다.\n\n해제일 : ".concat(c.is_activity_date));
                    let s = "";
                    return (s = r.title) || (s = "".concat("치트닷컴", " - 오류안내 페이지")), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(d(), {
                            children: (0, o.jsx)("title", {
                                children: s
                            })
                        }), n.error.code ? (0, o.jsx)(b, {
                            title: n.error.msg
                        }) : e ? (0, o.jsx)(w, {
                            boardUrl: a,
                            view: r,
                            deleteGall: () => t((0, m.R9)()),
                            commentText: l,
                            updateGallHref: "".concat(a.middlePath, "/").concat(a.bo_table, "/write?w=u&wr_id=").concat(a.wr_id),
                            mbId: c.mb_id
                        }) : (0, o.jsx)(u, {
                            boardUrl: a,
                            view: r,
                            deleteGall: () => t((0, m.R9)()),
                            commentText: l,
                            updateGallHref: "".concat(a.middlePath, "/").concat(a.bo_table, "/write?w=u&wr_id=").concat(a.wr_id),
                            mbId: c.mb_id
                        })]
                    })
                };
            g.getInitialProps = async t => {
                let e = (0, l.a)(t.req),
                    a = t.reduxStore.getState().board_url,
                    o = await e.post("/v4/board/board.php", "bo_table=".concat(a.bo_table, "&wr_id=").concat(a.wr_id));
                await t.reduxStore.dispatch((0, _.Xe)({ ...o.data
                }));
                let n = t.reduxStore.getState().board_view.message.result;
                if (Object.keys(n).length >= 1) {
                    let o = await e.post("/v4/board/board.php", "bo_table=".concat(a.bo_table).concat(a.stx && "&sop=".concat(a.sop, "&sfl=").concat(a.sfl, "&stx=").concat(a.stx), "&page=").concat(a.page));
                    await t.reduxStore.dispatch((0, p.gp)({ ...o.data
                    })), await t.reduxStore.dispatch((0, s.I)({
                        add_description: ", ".concat(n.title),
                        add_keywords: ", ".concat(n.title),
                        og_title: n.og_title,
                        add_og_url: t.asPath.split("?")[0],
                        og_description: n.og_content,
                        ...n.img_content && {
                            og_image: n.img_content
                        }
                    }))
                } else await t.reduxStore.dispatch((0, s.I)({
                    add_description: ", ".concat("치트닷컴", " - 오류안내 페이지"),
                    add_keywords: ", ".concat("치트닷컴", " - 오류안내 페이지")
                }));
                return {}
            }, e.default = g
        },
        47949: function(t, e, a) {
            "use strict";
            a.d(e, {
                ON: function() {
                    return m
                },
                R9: function() {
                    return u
                },
                YF: function() {
                    return b
                },
                x4: function() {
                    return w
                }
            });
            var o = a(15498),
                n = a(28032),
                r = a(33728),
                c = a(49029),
                d = a(66546),
                i = a(12218),
                l = a.n(i),
                s = a(4752);
            let _ = async () => (await o.Z.get("/v4/board/ajax.comment_token.php")).data,
                p = async t => (await o.Z.post("/v4/board/ajax.filter.php", "subject=&content=".concat(t))).data,
                m = t => {
                    let {
                        comment: e,
                        w: a,
                        comment_id: r
                    } = t;
                    return async (t, c) => {
                        let i = c().board_url,
                            l = i.wr_id,
                            m = i.bo_table;
                        if (!e || !e.trim()) return t((0, s.Z9)({
                            content: "댓글 내용을 입력해 주세요."
                        }));
                        let b = await p(e);
                        if (b.content) return t((0, s.Z9)({
                            content: "내용에 금지단어('".concat(b.content, "')가 포함되어있습니다")
                        }));
                        let u = await _(),
                            w = new FormData;
                        w.append("token", u.token), w.append("w", a), w.append("bo_table", m), w.append("wr_id", l), w.append("comment_id", r || ""), w.append("is_good", ""), w.append("wr_content", e);
                        let g = await o.Z.post("/v4/board/comment_update.php", w);
                        if (g.data.error.msg) return t((0, s.Z9)({
                            content: g.data.error.msg
                        }));
                        "cu" !== a && g.data.message.result.is_point && n.Am.success("".concat(c().global.init.use_point.comment, " AP가 지급 되었습니다."), {
                            position: "top-center",
                            autoClose: 5e3,
                            hideProgressBar: !1,
                            closeOnClick: !0,
                            pauseOnHover: !0,
                            draggable: !0,
                            progress: void 0
                        }), t("cu" === a ? {
                            type: d.H3,
                            payload: {
                                comment_id: r,
                                comment: g.data.message.result.comment
                            }
                        } : r ? {
                            type: d.xh,
                            payload: { ...g.data.message.result,
                                parent_comment_id: r
                            }
                        } : {
                            type: d.tV,
                            payload: g.data.message.result
                        })
                    }
                },
                b = t => async (e, a) => {
                    let n = a().board_url.bo_table;
                    e((0, s.Z9)({
                        content: "댓글을 삭제하시겠습니까?",
                        type: "confirm",
                        confirmText: "삭제",
                        onConfirm: async () => {
                            let a = await o.Z.get("/v4/board/delete_comment.php?bo_table=".concat(n, "&comment_id=").concat(t.comment_id, "&token=").concat(t.token));
                            return a.data.error.msg ? e((0, s.Z9)({
                                content: a.data.error.msg
                            })) : (e({
                                type: d.Di,
                                payload: t.comment_id
                            }), !0)
                        }
                    }))
                },
                u = () => async (t, e) => {
                    let a = e().board_view,
                        n = e().board_url,
                        c = n.wr_id,
                        d = n.bo_table,
                        i = a.message.result.delete_token;
                    t((0, s.Z9)({
                        content: "게시글을 삭제하시겠습니까?",
                        type: "confirm",
                        confirmText: "삭제",
                        onConfirm: async () => {
                            let e = await o.Z.get("/v4/board/delete.php?bo_table=".concat(d, "&wr_id=").concat(c, "&token=").concat(i));
                            return e.data.error.msg ? t((0, s.Z9)({
                                content: e.data.error.msg
                            })) : l().push("".concat(n.middlePath, "/").concat(d).concat((0, r.SX)(n.qstr)))
                        }
                    }))
                },
                w = t => async (e, a) => {
                    let n = a().board_url,
                        r = 1 === t ? "추천" : "비추천";
                    e((0, s.Z9)({
                        content: "해당 글을 ".concat(r, "하시겠습니까?"),
                        type: "confirm",
                        confirmText: r,
                        onConfirm: async () => {
                            let a = await o.Z.post("/v4/board/recommend.php", "bo_table=".concat(n.bo_table, "&wr_id=").concat(n.wr_id, "&type=").concat(1 === t ? "good" : "nogood"));
                            return a.data.error.msg ? e((0, s.Z9)({
                                content: a.data.error.msg
                            })) : (e((0, c.x1)(a.data.message.result)), !0)
                        }
                    }))
                }
        }
    },
    function(t) {
        t.O(0, [2888, 9774, 179], function() {
            return t(t.s = 29339)
        }), _N_E = t.O()
    }
]);