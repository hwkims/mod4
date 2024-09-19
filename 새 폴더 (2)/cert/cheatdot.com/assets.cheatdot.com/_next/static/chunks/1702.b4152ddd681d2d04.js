"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1702], {
        1702: function(e, a, t) {
            t.r(a), t.d(a, {
                default: function() {
                    return C
                }
            });
            var s = t(10209),
                n = t(63959);
            t(35196);
            var r = t(28330),
                l = t.n(r),
                c = t(12218),
                i = t(52345),
                d = t(81828),
                h = t(27972),
                m = t(25439),
                o = t.n(m),
                x = () => {
                    let e = (0, c.useRouter)(),
                        [a, t] = (0, n.useState)(""),
                        [r, i] = (0, n.useState)("");
                    return (0, n.useEffect)(() => {
                        let a = e.asPath.split("?")[0].split("/");
                        t(a[1]), i(a[2])
                    }, [e.asPath]), (0, s.jsx)("div", {
                        className: o().tab_menu,
                        children: (0, s.jsx)("ul", {
                            children: a && d[a].map(e => {
                                let a = e.href.split("/");
                                return (0, s.jsx)("li", {
                                    children: (0, s.jsx)(l(), {
                                        href: e.href,
                                        className: r === a[2] ? o().on : null,
                                        children: e.name
                                    })
                                }, e.href)
                            })
                        })
                    })
                },
                u = t(41895),
                f = t.n(u),
                _ = t(99742),
                j = t(33728),
                b = t(63531),
                p = t(36681);
            let g = f()(() => t.e(2014).then(t.bind(t, 62014)), {
                loadableGenerated: {
                    webpack: () => [62014]
                }
            });
            var w = e => {
                let a = (0, i.I0)();
                (0, i.v9)(e => e.member.info.blocked_user);
                let t = e.c;
                return (0, s.jsx)("tr", {
                    className: t.is_notice || t.wr_id === e.boardField.wr_id ? o().notice : null,
                    children: a((0, b.L2)(t.mb_id)) ? (0, s.jsx)("td", {
                        colSpan: 6,
                        children: (0, s.jsx)("button", {
                            type: "button",
                            className: o().user_block_msg,
                            onClick: () => a((0, b.se)({
                                mb_nick: t.mb_nick,
                                to_mb_id: t.mb_id
                            })),
                            children: "차단된 회원입니다."
                        })
                    }) : (0, s.jsxs)(s.Fragment, {
                        children: [e.isAdmin && (0, s.jsx)("td", {
                            children: (0, s.jsxs)("div", {
                                className: o().chk_box,
                                children: [(0, s.jsx)("input", {
                                    type: "checkbox",
                                    id: "chk_".concat(t.wr_id),
                                    checked: e.checkedItems[t.wr_id] || !1,
                                    onChange: () => e.handleItemChange(t.wr_id)
                                }), (0, s.jsx)("label", {
                                    htmlFor: "chk_".concat(t.wr_id)
                                })]
                            })
                        }), (0, s.jsx)("td", {
                            children: (0, s.jsx)("span", {
                                children: t.is_notice ? "공지" : t.num
                            })
                        }), (0, s.jsx)("td", {
                            className: o().left,
                            children: (0, s.jsxs)("div", {
                                className: o().title,
                                children: [(0, s.jsx)(l(), {
                                    href: "".concat(e.boardField.middlePath, "/").concat(e.boardField.bo_table, "/").concat(t.wr_id).concat((0, j.SX)(e.boardField.qstr)),
                                    dangerouslySetInnerHTML: {
                                        __html: (0, j.CD)(t.subject, e.boardField.stx || null)
                                    }
                                }), (0, s.jsx)(g, {
                                    isNew: t.is_new,
                                    isPhoto: t.is_photo,
                                    isFile: t.file.count,
                                    className: o().icon
                                }), t.wr_comment > 0 && (0, s.jsxs)("span", {
                                    className: o().comment_count,
                                    children: ["+", t.wr_comment]
                                })]
                            })
                        }), (0, s.jsx)("td", {
                            className: o().left,
                            children: (0, s.jsx)(p.default, {
                                mb_id: t.mb_id,
                                mb_nick: t.mb_nick,
                                mb_level: t.mb_level,
                                extras: t.extra
                            })
                        }), (0, s.jsx)("td", {
                            children: (0, s.jsx)("span", {
                                children: t.date
                            })
                        }), (0, s.jsx)("td", {
                            children: (0, s.jsx)("span", {
                                children: t.hit
                            })
                        })]
                    })
                })
            };
            let v = f()(() => t.e(3406).then(t.bind(t, 43406)), {
                    loadableGenerated: {
                        webpack: () => [43406]
                    }
                }),
                y = f()(() => t.e(7891).then(t.bind(t, 47891)), {
                    loadableGenerated: {
                        webpack: () => [47891]
                    }
                }),
                k = f()(() => t.e(2042).then(t.bind(t, 52042)), {
                    loadableGenerated: {
                        webpack: () => [52042]
                    }
                });
            var N = e => {
                    let a = (0, i.v9)(e => e.board_list.message.result),
                        {
                            selectAll: t,
                            checkedItems: n,
                            handleSelectAllChange: r,
                            handleItemChange: l
                        } = (0, _.Z)(a.list, "wr_id"),
                        c = e.boardField;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [e.isAdmin && (0, s.jsx)(k, {
                            wrId: n
                        }), (0, s.jsxs)("div", {
                            className: o().layout_box,
                            children: [(0, s.jsx)("div", {
                                className: o().table,
                                children: (0, s.jsxs)("table", {
                                    children: [(0, s.jsx)("caption", {
                                        className: o().sound_only,
                                        children: "게시글 리스트"
                                    }), (0, s.jsxs)("colgroup", {
                                        children: [e.isAdmin && (0, s.jsx)("col", {
                                            width: 50
                                        }), (0, s.jsx)("col", {
                                            width: 100
                                        }), (0, s.jsx)("col", {}), (0, s.jsx)("col", {
                                            width: 175
                                        }), (0, s.jsx)("col", {
                                            width: 68
                                        }), (0, s.jsx)("col", {
                                            width: 100
                                        })]
                                    }), (0, s.jsx)("thead", {
                                        children: (0, s.jsxs)("tr", {
                                            children: [e.isAdmin && (0, s.jsx)("th", {
                                                children: (0, s.jsxs)("div", {
                                                    className: o().chk_box,
                                                    children: [(0, s.jsx)("input", {
                                                        type: "checkbox",
                                                        id: "chk_all",
                                                        onChange: r,
                                                        checked: t
                                                    }), (0, s.jsx)("label", {
                                                        htmlFor: "chk_all"
                                                    })]
                                                })
                                            }), (0, s.jsx)("th", {}), (0, s.jsx)("th", {
                                                children: "제목"
                                            }), (0, s.jsx)("th", {
                                                children: "작성자"
                                            }), (0, s.jsx)("th", {
                                                children: "작성일"
                                            }), (0, s.jsx)("th", {
                                                children: "조회"
                                            })]
                                        })
                                    }), (0, s.jsx)("tbody", {
                                        children: a.list.length > 0 ? a.list.map(a => (0, s.jsx)(w, {
                                            c: a,
                                            boardField: e.boardField,
                                            isAdmin: e.isAdmin,
                                            checkedItems: n,
                                            handleItemChange: l
                                        }, a.wr_id)) : (0, s.jsx)("tr", {
                                            children: (0, s.jsx)("td", {
                                                colSpan: 6,
                                                children: (0, s.jsx)(v, {
                                                    title: "아직 글이 없어요.",
                                                    subTitle: "글쓰기 버튼을 눌러서 처음 글을 작성해보세요."
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), a.total_count > 20 && (0, s.jsx)(y, {
                                page: c.page,
                                totalCount: a.total_count,
                                rows: 20,
                                writePages: 10,
                                url: "".concat(c.middlePath, "/").concat(c.bo_table).concat((0, j.SX)("".concat(c.qstr, "&page=")))
                            })]
                        })]
                    })
                },
                C = e => {
                    let a = (0, c.useRouter)(),
                        t = (0, i.v9)(e => e.board_url),
                        r = (0, i.v9)(e => e.board_list.message.result),
                        [m, u] = (0, n.useState)(t),
                        [f, _] = (0, n.useState)("");
                    return (0, n.useEffect)(() => {
                        let e = a.asPath.split("?"),
                            t = d[a.asPath.split("/")[1]].find(a => a.href.includes(e.join()));
                        t && _(t.name)
                    }, [a.asPath]), (0, n.useEffect)(() => {
                        t.bo_table && u(t)
                    }, [t]), (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: o().layout_box,
                            children: [(0, s.jsxs)("div", {
                                className: o().page_title,
                                children: [(0, s.jsx)("h1", {
                                    children: f
                                }), (0, s.jsx)(h.Z, {
                                    boardUrl: t,
                                    style: o()
                                }), r.config.is_write && (0, s.jsxs)(l(), {
                                    href: "".concat(m.middlePath, "/").concat(m.bo_table, "/write"),
                                    className: [o().btn, o().btn_primary].join(" "),
                                    children: [(0, s.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "12",
                                        height: "14",
                                        viewBox: "0 0 12 14",
                                        children: (0, s.jsxs)("g", {
                                            id: "edit-pen-write-svgrepo-com",
                                            transform: "translate(-4 -1.879)",
                                            children: [(0, s.jsx)("path", {
                                                id: "패스_5",
                                                "data-name": "패스 5",
                                                d: "M15.319,2.5a2.472,2.472,0,0,0-3.286,0L5.254,8.729a2.015,2.015,0,0,0-.587.953l-.644,2.367a.646.646,0,0,0,.2.649.79.79,0,0,0,.707.18L7.5,12.285a2.29,2.29,0,0,0,1.037-.539l6.78-6.225A2.012,2.012,0,0,0,15.319,2.5Z",
                                                transform: "translate(0)",
                                                fill: "#fff"
                                            }), (0, s.jsx)("path", {
                                                id: "패스_6",
                                                "data-name": "패스 6",
                                                d: "M4,20.745A.745.745,0,0,1,4.744,20H15.165a.745.745,0,0,1,0,1.491H4.744A.745.745,0,0,1,4,20.745Z",
                                                transform: "translate(0 -5.612)",
                                                fill: "#fff"
                                            })]
                                        })
                                    }), "글쓰기"]
                                })]
                            }), (0, s.jsx)(x, {})]
                        }), (0, s.jsx)(N, {
                            isAdmin: e.isAdmin,
                            boardField: m
                        })]
                    })
                }
        },
        27972: function(e, a, t) {
            var s = t(10209),
                n = t(63959),
                r = t(12218);
            a.Z = e => {
                let {
                    boardUrl: a,
                    style: t
                } = e, l = (0, r.useRouter)(), [c, i] = (0, n.useState)({
                    sfl: a.sfl ? a.sfl : "wr_subject",
                    stx: a.stx,
                    ...a
                });
                return (0, s.jsxs)("div", {
                    className: t.search_wrap,
                    children: [(0, s.jsx)("div", {
                        className: t.select_box,
                        children: (0, s.jsxs)("select", {
                            value: c.sfl,
                            onChange: e => i({ ...c,
                                sfl: e.target.value
                            }),
                            children: [(0, s.jsx)("option", {
                                value: "wr_subject",
                                children: "제목"
                            }), (0, s.jsx)("option", {
                                value: "wr_content",
                                children: "내용"
                            }), (0, s.jsx)("option", {
                                value: "wr_subject||wr_content",
                                children: "제목+내용"
                            }), (0, s.jsx)("option", {
                                value: "mb_id,1",
                                children: "회원아이디"
                            }), (0, s.jsx)("option", {
                                value: "mb_id,0",
                                children: "회원아이디(코)"
                            }), (0, s.jsx)("option", {
                                value: "wr_name,1",
                                children: "글쓴이"
                            }), (0, s.jsx)("option", {
                                value: "wr_name,0",
                                children: "글쓴이(코)"
                            })]
                        })
                    }), (0, s.jsxs)("div", {
                        className: t.search_box,
                        children: [(0, s.jsx)("input", {
                            type: "text",
                            value: c.stx,
                            onChange: e => i({ ...c,
                                stx: e.target.value
                            }),
                            placeholder: "검색어를 입력해주세요.",
                            maxLength: 20,
                            onKeyPress: e => {
                                if ("Enter" === e.key) return l.push("".concat(a.middlePath, "/").concat(a.bo_table, "?sop=and&sfl=").concat(c.sfl, "&stx=").concat(c.stx))
                            }
                        }), (0, s.jsx)("button", {
                            type: "button",
                            onClick: () => l.push("".concat(a.middlePath, "/").concat(a.bo_table, "?sop=and&sfl=").concat(c.sfl, "&stx=").concat(c.stx)),
                            children: (0, s.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16.002",
                                height: "15.984",
                                viewBox: "0 0 16.002 15.984",
                                children: (0, s.jsx)("g", {
                                    id: "search-svgrepo-com_1_",
                                    "data-name": "search-svgrepo-com (1)",
                                    transform: "translate(0.002 -0.066)",
                                    children: (0, s.jsx)("path", {
                                        id: "패스_2",
                                        "data-name": "패스 2",
                                        d: "M6.553,13.166a6.526,6.526,0,0,0,3.637-1.107l3.764,3.769a.783.783,0,0,0,1.092,0l.732-.733a.785.785,0,0,0,0-1.093L12,10.247a6.55,6.55,0,1,0-5.448,2.919Zm0-10.545A3.986,3.986,0,1,1,2.57,6.608,3.986,3.986,0,0,1,6.553,2.621Z",
                                        fill: "#a6a8ad"
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
        },
        99742: function(e, a, t) {
            var s = t(63959);
            a.Z = function(e) {
                let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "idx",
                    [t, n] = (0, s.useState)(!1),
                    [r, l] = (0, s.useState)({});
                return (0, s.useEffect)(() => {
                    l(t ? e.reduce((e, t) => ({ ...e,
                        [t[a]]: !0
                    }), {}) : {})
                }, [t, e, a]), {
                    selectAll: t,
                    checkedItems: r,
                    handleSelectAllChange: () => {
                        n(!t)
                    },
                    handleItemChange: e => {
                        l(a => ({ ...a,
                            [e]: !a[e]
                        }))
                    },
                    resetCheckedItems: () => {
                        l({}), n(!1)
                    }
                }
            }
        },
        81828: function(e) {
            e.exports = JSON.parse('{"header":[{"name":"공지사항","href":"/customer/notice"},{"name":"전체글보기","href":"/"},{"name":"커뮤니티","href":"/community/free"},{"name":"게임게시판","href":"/games/maple_story"},{"name":"랭킹","href":"/ranking/level"},{"name":"상점","href":"/shop/list"}],"customer":[{"name":"공지사항","href":"/customer/notice"},{"name":"업데이트","href":"/customer/update"},{"name":"제재내역","href":"/customer/sanction"}],"community":[{"name":"자유","href":"/community/free"},{"name":"유머","href":"/community/humor"},{"name":"포토","href":"/community/photo"},{"name":"피해사례 공유","href":"/community/crime"},{"name":"신고","href":"/community/report"},{"name":"가입인사","href":"/community/hello"}],"games":[{"name":"메이플스토리","href":"/games/maple_story"},{"name":"운빨존많겜","href":"/games/very_lucky_game"},{"name":"서든어택","href":"/games/sudden_attack"},{"name":"오버워치","href":"/games/over_watch"},{"name":"배틀그라운드","href":"/games/battle_ground"},{"name":"발로란트","href":"/games/valorant"},{"name":"던전앤파이터","href":"/games/df"},{"name":"리그오브레전드","href":"/games/lol"},{"name":"기타게임","href":"/games/etc_game"},{"name":"게임요청","href":"/games/request_game"}],"my":[{"name":"내정보","href":"/my/info"},{"name":"비밀번호변경","href":"/my/password"},{"name":"CP","href":"/my/cp"},{"name":"AP","href":"/my/ap"},{"name":"건빵","href":"/my/geonppang"},{"name":"CP 충전","href":"/my/cp_charge"},{"name":"CP 환전","href":"/my/cp_exchange"},{"name":"차단목록","href":"/my/block"},{"name":"아이템","href":"/my/item"},{"name":"아이템 사용내역","href":"/my/item_use"},{"name":"로그기록","href":"/my/log"},{"name":"탈퇴","href":"/my/withdraw"}],"board":[{"name":"전체글보기","href":"/"}],"termspolicy":[{"name":"이용약관","href":"/termspolicy/service"},{"name":"개인정보취급방침","href":"/termspolicy/privacy"},{"name":"이메일주소무단수집거부","href":"/termspolicy/refusal"},{"name":"게시물규제정책","href":"/termspolicy/policy"}],"ranking":[{"name":"계급랭킹","href":"/ranking/level"}]}')
        }
    }
]);