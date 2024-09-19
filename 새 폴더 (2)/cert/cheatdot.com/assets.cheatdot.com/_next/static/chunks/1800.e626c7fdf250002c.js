"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1800, 6681], {
        61800: function(e, s, t) {
            t.r(s), t.d(s, {
                default: function() {
                    return D
                }
            });
            var a = t(10209),
                n = t(63959),
                r = t(41895),
                l = t.n(r),
                i = t(12218),
                c = t(52345),
                o = t(24087),
                d = t(99093),
                h = t(28330),
                m = t.n(h),
                x = t(81828),
                j = t(25439),
                p = t.n(j),
                u = () => {
                    let e = (0, i.useRouter)(),
                        [s, t] = (0, n.useState)("");
                    return (0, n.useEffect)(() => {
                        "/" === e.pathname ? t("") : t(e.asPath.split("/").splice(1, 1).join())
                    }, [e.asPath]), (0, a.jsx)("nav", {
                        children: (0, a.jsx)("div", {
                            className: p().gnb,
                            children: (0, a.jsx)("ul", {
                                children: x.header.map(e => {
                                    let t = e.href.split("/").splice(1, 1).join();
                                    return (0, a.jsx)("li", {
                                        children: (0, a.jsx)(m(), {
                                            href: e.href,
                                            className: s === t ? p().on : null,
                                            children: e.name
                                        })
                                    }, e.href)
                                })
                            })
                        })
                    })
                };
            let f = l()(() => t.e(353).then(t.bind(t, 90353)), {
                    loadableGenerated: {
                        webpack: () => [90353]
                    }
                }),
                v = l()(() => t.e(9739).then(t.bind(t, 39739)), {
                    loadableGenerated: {
                        webpack: () => [39739]
                    }
                });
            var g = () => {
                    let e = (0, c.v9)(e => e.member.info.mb_id);
                    return (0, a.jsx)(a.Fragment, {
                        children: e ? (0, a.jsx)(f, {}) : (0, a.jsx)(v, {})
                    })
                },
                _ = () => {
                    let e = (0, o.Z)();
                    return (0, a.jsx)("header", {
                        className: p().header,
                        children: (0, a.jsxs)("div", {
                            className: p().wrapper,
                            children: [(0, a.jsx)("a", {
                                href: "/",
                                className: p().logo,
                                "aria-label": "홈",
                                children: (0, a.jsx)(d.Z, {})
                            }), (0, a.jsx)(u, {}), (0, a.jsxs)("div", {
                                className: p().right,
                                children: [(0, a.jsx)("div", {
                                    className: p().theme_wrap,
                                    children: (0, a.jsx)("button", {
                                        type: "button",
                                        onClick: e,
                                        children: (0, a.jsx)("svg", {
                                            width: "22",
                                            height: "22",
                                            fill: "var(--gray-90)",
                                            viewBox: "0 0 16 16",
                                            children: (0, a.jsx)("path", {
                                                d: "M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                                            })
                                        })
                                    })
                                }), (0, a.jsx)(g, {})]
                            })]
                        })
                    })
                },
                b = () => (0, a.jsxs)("footer", {
                    className: p().footer,
                    children: [(0, a.jsx)("div", {
                        className: p().footer_top,
                        children: (0, a.jsxs)("div", {
                            className: p().wrapper,
                            children: [(0, a.jsx)("span", {
                                className: p().tit,
                                children: "NO.1 게임 포털 치트닷컴"
                            }), (0, a.jsxs)("p", {
                                children: ["치트닷컴은 2010년도부터 깊이 이어져온 게임 중심 커뮤니티입니다.", (0, a.jsx)("br", {}), "게임에 대한 다양한 정보를 유저들이 공유하고 있으며, 게임에 대한 이해와 질문, 커뮤니케이션을 통해 자유롭게 활동할 수 있습니다."]
                            })]
                        })
                    }), (0, a.jsx)("div", {
                        className: p().footer_bottom,
                        children: (0, a.jsxs)("div", {
                            className: p().wrapper,
                            children: [(0, a.jsxs)("div", {
                                className: p().footer_info,
                                children: [(0, a.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "138",
                                    viewBox: "0 0 138 30",
                                    children: (0, a.jsxs)("g", {
                                        id: "그룹_16391",
                                        "data-name": "그룹 16391",
                                        transform: "translate(0)",
                                        children: [(0, a.jsx)("path", {
                                            id: "패스_39871",
                                            "data-name": "패스 39871",
                                            d: "M64,0V12.5H59V0H54V30h5V17.5h5V30h5V0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39872",
                                            "data-name": "패스 39872",
                                            d: "M108,0V5h5V30h5V5h5V0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39873",
                                            "data-name": "패스 39873",
                                            d: "M95,10.62h0V6.47L96.475,5H100v7.5H95ZM94.4,0,90,4.41V30h5V17.5h5V30h5V0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39874",
                                            "data-name": "패스 39874",
                                            d: "M40.4,0,36,4.41V25.59L40.4,30h6.2L51,25.59V20H46v3.53L44.53,25H42.47L41,23.53V6.47L42.47,5h2.06L46,6.47V10h5V4.41L46.6,0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39875",
                                            "data-name": "패스 39875",
                                            d: "M76.4,0,72,4.41V30H87V25H77V17.5H87v-5H77V6.47L78.47,5H87V0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39876",
                                            "data-name": "패스 39876",
                                            d: "M127.393,15,123,19.393v6.214L127.393,30h6.214L138,25.607V19.393L133.607,15Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39877",
                                            "data-name": "패스 39877",
                                            d: "M8.788,0,0,8.787V21.213L21.214,0Z",
                                            fill: "#787a7d"
                                        }), (0, a.jsx)("path", {
                                            id: "패스_39878",
                                            "data-name": "패스 39878",
                                            d: "M8.788,30H21.214L30,21.212V8.786Z",
                                            fill: "#787a7d"
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: p().info,
                                    children: [(0, a.jsxs)("div", {
                                        children: [(0, a.jsx)("strong", {
                                            children: "주식회사 메타플랫폼"
                                        }), (0, a.jsxs)("span", {
                                            children: ["대표", (0, a.jsx)("em", {
                                                children: "이승준"
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsxs)("span", {
                                            children: ["주소", (0, a.jsx)("em", {
                                                children: "서울특별시 서초구 강남대로 53길 8, 8-131호"
                                            })]
                                        })
                                    }), (0, a.jsxs)("div", {
                                        children: [(0, a.jsxs)("span", {
                                            children: ["사업자번호", (0, a.jsx)("em", {
                                                children: "713-81-03460"
                                            })]
                                        }), (0, a.jsxs)("span", {
                                            children: ["통신판매업", (0, a.jsx)("em", {
                                                children: "2024-서울서초-0848"
                                            })]
                                        }), (0, a.jsxs)("span", {
                                            children: ["개인정보보호책임자", (0, a.jsx)("em", {
                                                dangerouslySetInnerHTML: {
                                                    __html: "이해근 sql____@naver.com"
                                                }
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsxs)("p", {
                                            children: ["치트닷컴(cheatdot)의 모든 컨텐츠 저작권은 주식회사 메타플랫폼에 있으며, 무단 도용 시 법적 불이익을 받습니다.", (0, a.jsx)("br", {}), "치트닷컴(cheatdot)은 불법적인 정보를제공하거나 불법적인 사이트를 알선하지 않습니다."]
                                        })
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsx)("p", {
                                            className: p().copyright,
                                            children: "Copyright \xa9 CHEATDOT. All rights reserved"
                                        })
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: p().site_map,
                                children: [(0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h4", {
                                        children: "약관 및 정책"
                                    }), (0, a.jsx)("div", {
                                        className: p().box,
                                        children: (0, a.jsxs)("ul", {
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/termspolicy/service",
                                                    children: "이용약관"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/termspolicy/privacy",
                                                    children: "개인정보취급방침"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/termspolicy/refusal",
                                                    children: "이메일주소무단수집거부"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/termspolicy/policy",
                                                    children: "게시물규제정책"
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h4", {
                                        children: "고객센터"
                                    }), (0, a.jsx)("div", {
                                        className: p().box,
                                        children: (0, a.jsxs)("ul", {
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/customer/notice",
                                                    children: "공지사항"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/faq/list",
                                                    children: "도움말"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/",
                                                    children: "문의하기"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/",
                                                    children: "게시물 삭제요청"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/",
                                                    children: "버그/건의"
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h4", {
                                        children: "시스템"
                                    }), (0, a.jsx)("div", {
                                        className: p().box,
                                        children: (0, a.jsxs)("ul", {
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/system/current_user",
                                                    children: "현재접속자"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/system/prison",
                                                    children: "영창"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "/system/benefit",
                                                    children: "계급혜택"
                                                })
                                            })]
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("h4", {
                                        children: "앱"
                                    }), (0, a.jsx)("div", {
                                        className: p().box,
                                        children: (0, a.jsxs)("ul", {
                                            children: [(0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "https://apps.apple.com/us/app/%EC%B9%98%ED%8A%B8%EB%8B%B7%EC%BB%B4/id6444918363",
                                                    target: "_blank",
                                                    children: "iOS"
                                                })
                                            }), (0, a.jsx)("li", {
                                                children: (0, a.jsx)(m(), {
                                                    href: "https://play.google.com/store/apps/details?id=com.cheatdot_app",
                                                    target: "_blank",
                                                    children: "Android"
                                                })
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    })]
                }),
                y = t(42115),
                k = t(78729),
                w = t(35196),
                V = t.n(w),
                N = t(52461);
            t(33728);
            var L = t(63531),
                C = t(49401),
                H = t(36681);
            let M = l()(() => t.e(7691).then(t.bind(t, 57691)), {
                    loadableGenerated: {
                        webpack: () => [57691]
                    },
                    ssr: !1
                }),
                Z = l()(() => t.e(6736).then(t.bind(t, 96736)), {
                    loadableGenerated: {
                        webpack: () => [96736]
                    },
                    ssr: !1
                });
            var E = () => {
                    let e = (0, c.I0)(),
                        s = (0, c.v9)(e => e.chat.message_list),
                        t = (0, c.v9)(e => e.chat.is_message_more),
                        r = (0, c.v9)(e => e.member.info.is_admin);
                    (0, c.v9)(e => e.member.info.blocked_user);
                    let l = (0, c.v9)(e => e.chat.chat_opt.font_size),
                        i = (0, c.v9)(e => e.chat.games.dice.is_dice),
                        o = (0, n.useRef)(),
                        d = (0, n.useRef)({
                            message_list: s,
                            is_message_more: t
                        }),
                        h = (0, C.Z)(o, d),
                        [m, x] = (0, n.useState)(!0),
                        [j, u] = (0, n.useState)({}),
                        [f, v] = (0, n.useState)(!1);
                    (0, n.useEffect)(() => {
                        let e = () => {
                            j.pageX && j.pageY && u({})
                        };
                        return document.addEventListener("click", e), () => {
                            document.removeEventListener("click", e)
                        }
                    }, [j]), (0, n.useEffect)(() => {
                        let e = () => {
                                let e = o.current;
                                x(1 >= Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight));
                                let s = .1 * e.scrollHeight;
                                v(e.scrollHeight - e.scrollTop - e.clientHeight > s)
                            },
                            s = o.current;
                        return s.addEventListener("scroll", e), () => {
                            s.removeEventListener("scroll", e)
                        }
                    }, []), (0, n.useEffect)(() => {
                        d.current = {
                            message_list: s,
                            is_message_more: t
                        }, null !== h.current ? (o.current.scrollTop = o.current.scrollHeight - h.current, h.current = null) : m && g()
                    }, [s, t, m]);
                    let g = () => {
                            o.current && (o.current.scrollTop = o.current.scrollHeight - o.current.clientHeight)
                        },
                        _ = e => {
                            e.e.preventDefault(), "contextmenu" === e.e.type && u({
                                pageX: e.e.pageX,
                                pageY: e.e.pageY,
                                data: e.data
                            })
                        };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [j.pageX && j.pageY && (0, a.jsx)(M, {
                            style: {
                                left: j.pageX,
                                top: j.pageY
                            },
                            children: (0, a.jsx)("li", {
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => e((0, N.MS)({
                                        type: "chat",
                                        event: "delete_message",
                                        data: {
                                            idx: j.data.idx
                                        }
                                    })),
                                    children: "삭제"
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: p().chat_list,
                            children: [i && (0, a.jsx)(Z, {}), f && (0, a.jsx)("button", {
                                type: "button",
                                className: p().scroll_down,
                                "aria-label": "채팅 아래로",
                                onClick: () => g(),
                                children: (0, a.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "15",
                                    height: "8.078",
                                    viewBox: "0 0 15 8.078",
                                    children: (0, a.jsx)("path", {
                                        id: "chevron-down",
                                        d: "M1.669,4.669a.577.577,0,0,1,.817,0L9,11.184l6.514-6.515a.578.578,0,1,1,.817.817L9.408,12.408a.577.577,0,0,1-.817,0L1.669,5.485a.577.577,0,0,1,0-.817",
                                        transform: "translate(-1.499 -4.499)",
                                        fillRule: "evenodd"
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: [p().chat_inner, p().scroll_custom].join(" "),
                                ref: o,
                                children: (0, a.jsx)("ul", {
                                    style: {
                                        fontSize: l
                                    },
                                    children: s.map((s, t) => {
                                        switch (s.type) {
                                            case "notice":
                                                return (0, a.jsx)("li", {
                                                    onContextMenu: e => r && _({
                                                        e: e,
                                                        data: s
                                                    }),
                                                    children: (0, a.jsxs)("div", {
                                                        className: p().admin_said,
                                                        children: [(0, a.jsxs)("div", {
                                                            className: p().profile_box,
                                                            children: [(0, a.jsx)(V(), {
                                                                src: "/img/level/v1/23.svg",
                                                                width: 24,
                                                                height: 24,
                                                                alt: "레벨 아이콘"
                                                            }), (0, a.jsx)("span", {
                                                                className: p().nick,
                                                                children: "관리자"
                                                            })]
                                                        }), (0, a.jsx)("p", {
                                                            children: s.content
                                                        })]
                                                    })
                                                }, s.idx);
                                            case "system":
                                                return (0, a.jsx)("li", {
                                                    children: (0, a.jsx)("div", {
                                                        className: p().alert_msg,
                                                        children: (0, a.jsx)("p", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: s.content
                                                            }
                                                        })
                                                    })
                                                }, "system-".concat(t));
                                            case "gift_geonppang":
                                                break;
                                            default:
                                                if (!e((0, L.L2)(s.mb_id))) return (0, a.jsx)("li", {
                                                    onContextMenu: e => r && _({
                                                        e: e,
                                                        data: s
                                                    }),
                                                    children: (0, a.jsxs)("div", {
                                                        children: [(0, a.jsx)(H.default, {
                                                            mb_id: s.mb_id,
                                                            mb_nick: s.mb_nick,
                                                            mb_level: s.mb_level
                                                        }), (0, a.jsx)("p", {
                                                            dangerouslySetInnerHTML: {
                                                                __html: s.content
                                                            },
                                                            style: s.extras && "chat_color" === s.extras.cmd ? {
                                                                color: s.extras.data.color
                                                            } : null
                                                        })]
                                                    })
                                                }, s.idx)
                                        }
                                    })
                                })
                            })]
                        })]
                    })
                },
                S = t(92810),
                z = t(94687),
                B = t(49593),
                R = () => {
                    let e = (0, c.I0)(),
                        s = (0, c.v9)(e => e.chat.state);
                    return (0, a.jsx)(B.Z, {
                        chatColor: s.chatColor,
                        setChatColor: s => e((0, z.rG)({
                            chatColor: s
                        })),
                        style: p().btn_brush
                    })
                },
                G = n.memo(() => (0, a.jsx)("div", {
                    className: p().layout_box,
                    children: (0, a.jsxs)("div", {
                        className: p().open_chat,
                        children: [(0, a.jsxs)("div", {
                            className: p().head,
                            children: [(0, a.jsxs)("h3", {
                                children: ["채팅", (0, a.jsx)(y.Z, {})]
                            }), (0, a.jsx)(k.Z, {
                                style: p()
                            })]
                        }), (0, a.jsx)(E, {}), (0, a.jsxs)("div", {
                            className: p().chat_write,
                            children: [(0, a.jsx)(S.Z, {}), (0, a.jsx)(R, {})]
                        })]
                    })
                })),
                A = () => ((0, n.useEffect)(() => {
                    (window.adsbygoogle = window.adsbygoogle || []).push({})
                }, []), (0, a.jsx)("div", {
                    style: {
                        position: "sticky",
                        left: 0,
                        top: 10,
                        width: 380,
                        height: 250
                    },
                    children: (0, a.jsx)("ins", {
                        className: "adsbygoogle",
                        style: {
                            display: "block"
                        },
                        "data-ad-client": "ca-pub-8138590210893448",
                        "data-ad-slot": "8653843739",
                        "data-ad-format": "auto",
                        "data-full-width-responsive": "true"
                    })
                })),
                I = t(99075),
                T = t(82138),
                P = n.memo(() => {
                    let e = (0, c.I0)();
                    if ((0, c.v9)(e => e.global.is_main_popup)) return (0, a.jsxs)("div", {
                        className: p().popup_wrap,
                        children: [(0, a.jsx)("div", {
                            className: p().popup_background
                        }), (0, a.jsxs)("div", {
                            className: p().main_popup,
                            children: [(0, a.jsx)("a", {
                                href: "https://apps.apple.com/us/app/%EC%B9%98%ED%8A%B8%ED%86%A1/id6502642417",
                                target: "_blank",
                                className: p().img_wrap,
                                children: (0, a.jsx)("img", {
                                    src: "/img/banners/main/main_banner.png",
                                    alt: "안내 배너 이미지"
                                })
                            }), (0, a.jsxs)("div", {
                                className: p().opt_bar,
                                children: [(0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        (0, I.setCookie)(null, "is_main_popup", "1", {
                                            maxAge: 86400,
                                            path: "/"
                                        }), e((0, T.Ro)(!1))
                                    },
                                    children: "오늘 하루 보지 않기"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => e((0, T.Ro)(!1)),
                                    children: "닫기"
                                })]
                            })]
                        })]
                    })
                });
            let F = l()(() => t.e(7775).then(t.bind(t, 97775)), {
                loadableGenerated: {
                    webpack: () => [97775]
                }
            });
            var D = e => {
                let {
                    Component: s,
                    pageProps: t
                } = e, r = (0, i.useRouter)(), l = (0, c.v9)(e => e.member.info.mb_id), o = (0, n.useMemo)(() => [/^\/auth(\/.*)?$/].some(e => e.test(r.pathname)), [r.pathname]), d = (0, n.useMemo)(() => [/^\/system\/prison$/].some(e => e.test(r.pathname)), [r.pathname]);
                return (0, a.jsx)(a.Fragment, {
                    children: o ? (0, a.jsx)(s, {}) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(_, {}), (0, a.jsx)("div", {
                            className: p().layout_container,
                            children: (0, a.jsxs)("div", {
                                className: p().wrapper,
                                children: [!d && (0, a.jsxs)("div", {
                                    className: p().layout_left,
                                    children: [(0, a.jsx)(G, {}), (0, a.jsx)(A, {})]
                                }), (0, a.jsx)("div", {
                                    className: p().layout_right,
                                    children: (0, a.jsx)(s, {
                                        pageProps: t
                                    })
                                })]
                            })
                        }), (0, a.jsx)(P, {}), l && (0, a.jsx)(F, {}), (0, a.jsx)(b, {})]
                    })
                })
            }
        },
        49593: function(e, s, t) {
            var a = t(10209),
                n = t(63959),
                r = t(41895),
                l = t.n(r),
                i = t(74155);
            let c = l()(() => t.e(1711).then(t.bind(t, 41711)), {
                loadableGenerated: {
                    webpack: () => [41711]
                },
                ssr: !1
            });
            s.Z = e => {
                let {
                    chatColor: s,
                    setChatColor: t,
                    style: r,
                    bottom: l,
                    right: o
                } = e, d = (0, n.useRef)(), [h, m] = (0, n.useState)(!1);
                return (0, i.Z)(d, h, () => m(!1), "mousedown"), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: r,
                        "aria-label": "채팅 글자색 변경",
                        onClick: () => m(!h),
                        children: (0, a.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "var(--primary-50)",
                            viewBox: "-0.5 0.5 42 42",
                            children: [(0, a.jsx)("g", {
                                id: "SVGRepo_bgCarrier",
                                strokeWidth: "0"
                            }), (0, a.jsx)("g", {
                                id: "SVGRepo_tracerCarrier",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, a.jsx)("g", {
                                id: "SVGRepo_iconCarrier",
                                children: (0, a.jsx)("path", {
                                    d: "M21.049,14.741c3.58,0.43,8.219,4.52,8.6,8.28c0,0,9.449-9.471,9.439-9.5c1.939-1.94,1.87-2.75-0.15-4.561l-4.08-3.68 c-1.948-1.76-2.698-1.69-4.528,0.13L21.049,14.741z M25.999,23.062c-0.3-1.351-2.929-4.512-5.759-4.98 c-7.1-1.83-13.89,5.88-13.49,11.491c0.641,4.581-5.35,5.22-6.25,5.43c5.92,2.062,8.439,2.541,13.919,1.38 C19.199,35.374,28.449,30.673,25.999,23.062z"
                                })
                            })]
                        })
                    }), h && (0, a.jsx)("div", {
                        ref: d,
                        style: {
                            position: "absolute",
                            bottom: l || 50,
                            right: o || -220,
                            boxShadow: "0 0 16px rgb(0 0 0 / 12%)",
                            zIndex: 999,
                            borderRadius: 10
                        },
                        children: (0, a.jsx)(c, {
                            chatColor: s,
                            setChatColor: t
                        })
                    })]
                })
            }
        },
        78729: function(e, s, t) {
            var a = t(10209),
                n = t(63959),
                r = t(52345),
                l = t(94687),
                i = t(90078),
                c = t(74155);
            s.Z = e => {
                let {
                    style: s
                } = e, t = (0, r.I0)(), o = (0, r.v9)(e => e.member.info.is_admin), d = (0, r.v9)(e => e.global.init.chat_config.is_chat), h = (0, r.v9)(e => e.chat.chat_opt.font_size), m = (0, n.useRef)(null), [x, j] = (0, n.useState)(!1);
                return (0, c.Z)(m, x, () => j(!1)), (0, a.jsxs)("div", {
                    className: s.opt_wrap,
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: s.opt_open,
                        onClick: () => j(!x),
                        ref: m,
                        "aria-label": "채팅 옵션",
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
                    }), x && (0, a.jsx)("div", {
                        className: s.pop_layer,
                        children: (0, a.jsxs)("ul", {
                            children: [(0, a.jsx)("li", {
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    children: "새 창으로 열기"
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => t((0, l.iw)()),
                                    children: "채팅 지우기"
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => t((0, l.Qt)({
                                        font_size: h + 1
                                    })),
                                    children: "글자 크게"
                                })
                            }), (0, a.jsx)("li", {
                                children: (0, a.jsx)("button", {
                                    type: "button",
                                    onClick: () => t((0, l.Qt)({
                                        font_size: h - 1
                                    })),
                                    children: "글자 작게"
                                })
                            }), o && (0, a.jsx)("li", {
                                children: (0, a.jsxs)("button", {
                                    type: "button",
                                    onClick: () => t((0, i.H)(d)),
                                    children: ["채팅창 ", d ? "얼리기" : "녹이기"]
                                })
                            })]
                        })
                    })]
                })
            }
        },
        42115: function(e, s, t) {
            var a = t(10209),
                n = t(63959),
                r = t(28330),
                l = t.n(r),
                i = t(52345);
            s.Z = n.memo(() => {
                let e = (0, i.v9)(e => e.push.count);
                return (0, a.jsx)(l(), {
                    href: "/system/current_user",
                    children: (0, a.jsx)("em", {
                        children: e
                    })
                })
            })
        },
        92810: function(e, s, t) {
            var a = t(10209),
                n = t(63959),
                r = t(52345),
                l = t(90078),
                i = t(94687),
                c = t(33728);
            s.Z = () => {
                let e = (0, r.I0)(),
                    s = (0, r.v9)(e => e.member.info.mb_id),
                    t = (0, r.v9)(e => e.member.info.is_admin),
                    o = (0, r.v9)(e => e.member.info.is_activity),
                    d = (0, r.v9)(e => e.member.info.mb_level),
                    h = (0, r.v9)(e => e.global.init.chat_config),
                    m = (0, r.v9)(e => e.chat.state),
                    x = (0, n.useMemo)(() => {
                        let e = "채팅 내용을 입력해 주세요.";
                        return s ? o ? h.is_chat || t ? d < h.level && (e = "전체채팅은 ".concat((0, c.dK)(h.level), "부터 이용할 수 있습니다.")) : e = "현재 채팅창이 얼려져 있습니다." : e = "활동정지 상태입니다." : e = "로그인 후 이용하실 수 있습니다.", e
                    }, [o, d, h.is_chat]);
                return (0, a.jsx)("input", {
                    type: "text",
                    value: m.content,
                    onChange: s => e((0, i.rG)({
                        content: s.target.value
                    })),
                    maxLength: t ? null : h.message_length_limit,
                    placeholder: x,
                    readOnly: !s || !o || d < h.level || !h.is_chat && !t,
                    onKeyPress: s => "Enter" === s.key && e((0, l.b)()),
                    style: m.chatColor ? {
                        color: m.chatColor
                    } : null
                })
            }
        },
        99093: function(e, s, t) {
            var a = t(10209),
                n = t(63959);
            s.Z = (0, n.memo)(() => (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "128",
                viewBox: "0 0 128 28",
                children: (0, a.jsxs)("g", {
                    id: "그룹_16391",
                    "data-name": "그룹 16391",
                    transform: "translate(-826 -603)",
                    children: [(0, a.jsx)("path", {
                        id: "패스_40101",
                        "data-name": "패스 40101",
                        d: "M58.933,0V11.667H54.266V0H49.6V28h4.666V16.333h4.667V28H63.6V0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40102",
                        "data-name": "패스 40102",
                        d: "M100,0V4.666h4.666V28h4.667V4.666H114V0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40103",
                        "data-name": "패스 40103",
                        d: "M87.867,9.912V6.039l1.376-1.373h3.29v7H87.867ZM87.306,0,83.2,4.116V28h4.668V16.333h4.666V28H97.2V0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40104",
                        "data-name": "패스 40104",
                        d: "M36.906,0,32.8,4.116V23.884L36.906,28h5.787L46.8,23.884V18.667H42.133v3.294l-1.372,1.372H38.838l-1.371-1.372V6.039l1.371-1.373h1.923l1.372,1.373V9.333H46.8V4.116L42.693,0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40105",
                        "data-name": "패스 40105",
                        d: "M70.507,0,66.4,4.116V28h14V23.333H71.067v-7H80.4V11.667H71.067V6.039l1.371-1.373H80.4V0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40106",
                        "data-name": "패스 40106",
                        d: "M118.1,14,114,18.1v5.8l4.1,4.1h5.8l4.1-4.1V18.1L123.9,14Z",
                        transform: "translate(826 603)",
                        fill: "#ff5454"
                    }), (0, a.jsx)("path", {
                        id: "패스_40107",
                        "data-name": "패스 40107",
                        d: "M8.2,0,0,8.2V19.8L19.8,0Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    }), (0, a.jsx)("path", {
                        id: "패스_40108",
                        "data-name": "패스 40108",
                        d: "M8.2,28H19.8L28,19.8V8.2Z",
                        transform: "translate(826 603)",
                        fill: "var(--logo-svg)"
                    })]
                })
            }))
        },
        36681: function(e, s, t) {
            t.r(s);
            var a = t(10209),
                n = t(63959),
                r = t(52345),
                l = t(82138),
                i = t(33728),
                c = t(25439),
                o = t.n(c);
            s.default = n.memo(e => {
                let s = (0, r.I0)(),
                    t = (0, n.useRef)();
                return (0, a.jsx)("button", {
                    className: o().profile_box,
                    onClick: () => {
                        s((0, l._3)({})), setTimeout(() => {
                            s((0, l._3)({
                                ref: t,
                                rect: t.current.getBoundingClientRect(),
                                mb: {
                                    mb_id: e.mb_id,
                                    mb_nick: e.mb_nick,
                                    mb_level: e.mb_level
                                }
                            }))
                        }, 1)
                    },
                    ref: t,
                    children: e.children ? e.children : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: o().lv_icon,
                            children: (0, a.jsx)("img", {
                                src: "/img/level/v2/".concat(e.mb_level, ".svg"),
                                width: 24,
                                height: 24,
                                alt: "회원계급"
                            })
                        }), (0, a.jsx)("span", {
                            className: o().nick,
                            style: e.extras ? {
                                color: (0, i.pe)(e.extras)
                            } : null,
                            children: e.mb_nick
                        })]
                    })
                })
            })
        },
        49401: function(e, s, t) {
            var a = t(63959),
                n = t(52345);
            t(52461), s.Z = (e, s) => {
                (0, n.I0)();
                let t = (0, a.useRef)(null);
                return (0, a.useEffect)(() => {
                    let s = () => {
                            e.current
                        },
                        t = e.current;
                    return t.addEventListener("scroll", s), () => {
                        t.removeEventListener("scroll", s)
                    }
                }, [e, s]), t
            }
        },
        74155: function(e, s, t) {
            var a = t(63959);
            s.Z = function(e, s, t) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "click";
                (0, a.useEffect)(() => {
                    let a = a => {
                        s && e.current && !e.current.contains(a.target) && t()
                    };
                    return document.addEventListener(n, a), () => {
                        document.removeEventListener(n, a)
                    }
                }, [e, s, t])
            }
        },
        90078: function(e, s, t) {
            t.d(s, {
                H: function() {
                    return i
                },
                b: function() {
                    return l
                }
            });
            var a = t(52461),
                n = t(4752),
                r = t(94687);
            let l = () => (e, s) => {
                    let t = s().member.info.mb_id,
                        l = s().member.info.is_admin,
                        i = s().global.init.chat_config,
                        c = s().chat.state;
                    if (t && c.content.trim()) {
                        if (c.content.length > i.message_length_limit && !l) return e((0, n.Z9)({
                            content: "최대 ".concat(i.message_length_limit, "글자만 가능합니다.")
                        }));
                        e((0, a.MS)({
                            type: "chat",
                            event: "send",
                            data: {
                                content: c.content,
                                ...c.chatColor && {
                                    extras: {
                                        cmd: "chat_color",
                                        data: {
                                            color: c.chatColor
                                        }
                                    }
                                }
                            }
                        }))
                    }
                    e((0, r.rG)({
                        content: ""
                    }))
                },
                i = e => s => {
                    s((0, n.Z9)({
                        content: "채팅창을 ".concat(e ? "얼리" : "녹이", "시겠습니까?"),
                        type: "confirm",
                        confirmText: e ? "얼리기" : "녹이기",
                        onConfirm: async () => (s((0, a.MS)({
                            type: "chat",
                            event: "set_chat_status"
                        })), !0)
                    }))
                }
        },
        81828: function(e) {
            e.exports = JSON.parse('{"header":[{"name":"공지사항","href":"/customer/notice"},{"name":"전체글보기","href":"/"},{"name":"커뮤니티","href":"/community/free"},{"name":"게임게시판","href":"/games/maple_story"},{"name":"랭킹","href":"/ranking/level"},{"name":"상점","href":"/shop/list"}],"customer":[{"name":"공지사항","href":"/customer/notice"},{"name":"업데이트","href":"/customer/update"},{"name":"제재내역","href":"/customer/sanction"}],"community":[{"name":"자유","href":"/community/free"},{"name":"유머","href":"/community/humor"},{"name":"포토","href":"/community/photo"},{"name":"피해사례 공유","href":"/community/crime"},{"name":"신고","href":"/community/report"},{"name":"가입인사","href":"/community/hello"}],"games":[{"name":"메이플스토리","href":"/games/maple_story"},{"name":"운빨존많겜","href":"/games/very_lucky_game"},{"name":"서든어택","href":"/games/sudden_attack"},{"name":"오버워치","href":"/games/over_watch"},{"name":"배틀그라운드","href":"/games/battle_ground"},{"name":"발로란트","href":"/games/valorant"},{"name":"던전앤파이터","href":"/games/df"},{"name":"리그오브레전드","href":"/games/lol"},{"name":"기타게임","href":"/games/etc_game"},{"name":"게임요청","href":"/games/request_game"}],"my":[{"name":"내정보","href":"/my/info"},{"name":"비밀번호변경","href":"/my/password"},{"name":"CP","href":"/my/cp"},{"name":"AP","href":"/my/ap"},{"name":"건빵","href":"/my/geonppang"},{"name":"CP 충전","href":"/my/cp_charge"},{"name":"CP 환전","href":"/my/cp_exchange"},{"name":"차단목록","href":"/my/block"},{"name":"아이템","href":"/my/item"},{"name":"아이템 사용내역","href":"/my/item_use"},{"name":"로그기록","href":"/my/log"},{"name":"탈퇴","href":"/my/withdraw"}],"board":[{"name":"전체글보기","href":"/"}],"termspolicy":[{"name":"이용약관","href":"/termspolicy/service"},{"name":"개인정보취급방침","href":"/termspolicy/privacy"},{"name":"이메일주소무단수집거부","href":"/termspolicy/refusal"},{"name":"게시물규제정책","href":"/termspolicy/policy"}],"ranking":[{"name":"계급랭킹","href":"/ranking/level"}]}')
        }
    }
]);