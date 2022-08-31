const rem = (value) => {
    return `${((value) / (value * 0 + 1)) / 16 * 1}rem`;
}

const collection = [
    {
        id: 0,
        name: 'Комиксы',
        link: 'kolliektsiia-komiksov',
        style: {
            width: rem(510),
            height: rem(400),
            right: rem(274),
            top: rem(45)
        },
        shadow: {
            filter: `drop-shadow(${rem(25)} ${rem(10)} 0 var(--yellow))`
        },
        pin: {
            top: rem(58),
            right: rem(36)
        },
        mobile: {
            style: {
                left: rem(40),
                bottom: rem(279),
                width: rem(245),
                height: rem(192)
            },
            shadow: {
                filter: `drop-shadow(${rem(12)} ${rem(5)} 0 var(--yellow))`
            },
            pin: {
                top: rem(28),
                right: rem(17)
            }
        }
    },
    {
        id: 1,
        name: 'Пластиковые карты',
        link: 'kolliektsiia-s-zapakhom-pyli-i-tliena',
        style: {
            width: rem(386),
            height: rem(284),
            left: rem(677),
            bottom: rem(48)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(20)} 0 var(--yellow))`
        },
        pin: {
            top: rem(64),
            right: rem(21)
        },
        mobile: {
            style: {
                bottom: rem(689),
                left: rem(12),
                width: rem(185),
                height: rem(136)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(10)} 0 var(--yellow))`
            },
            pin: {
                top: rem(31),
                right: rem(10)
            }
        }
    },
    {
        id: 2,
        name: 'Награды',
        link: 'kolliektsiia',
        style: {
            width: rem(293),
            height: rem(417),
            left: rem(74),
            top: rem(40)
        },
        shadow: {
            filter: `drop-shadow(${rem(10)} ${rem(20)} 0 var(--yellow))`
        },
        pin: {
            left: rem(17),
            bottom: rem(97)
        },
        mobile: {
            style: {
                top: rem(16),
                left: rem(32),
                width: rem(141),
                height: rem(200)
            },
            shadow: {
                filter: `drop-shadow(${rem(5)} ${rem(10)} 0 var(--yellow))`
            },
            pin: {
                left: rem(8),
                bottom: rem(47)
            }
        }
    },
    {
        id: 3,
        name: 'Водка Absolut',
        link: 'opianiaiushchaia-kolliektsiia-vodki-absolut',
        style: {
            width: rem(246),
            height: rem(433),
            left: rem(1073),
            top: rem(49)
        },
        shadow: {
            filter: `drop-shadow(${rem(25)} ${rem(10)} 0 var(--yellow))`
        },
        pin: {
            right: rem(28),
            bottom: rem(127)
        },
        mobile: {
            style: {
                left: rem(34),
                bottom: rem(842),
                width: rem(118),
                height: rem(208)
            },
            shadow: {
                filter: `drop-shadow(${rem(12)} ${rem(5)} 0 var(--yellow))`
            },
            pin: {
                right: rem(14),
                bottom: rem(61)
            }
        }
    },
    {
        id: 4,
        name: 'Пакетики с сахаром',
        link: 'kolliektsiia-ghliukofila-pakietiki-s-sakharom',
        style: {
            width: rem(380),
            height: rem(236),
            left: rem(730),
            top: rem(590)
        },
        shadow: {
            filter: `drop-shadow(${rem(25)} ${rem(10)} 0 var(--yellow))`
        },
        pin: {
            top: rem(89),
            right: rem(70)
        },
        mobile: {
            style: {
                right: rem(44),
                bottom: rem(1002),
                width: rem(182),
                height: rem(113)
            },
            shadow: {
                filter: `drop-shadow(${rem(12)} ${rem(5)} 0 var(--yellow))`
            },
            pin: {
                top: rem(43),
                right: rem(34)
            }
        }
    },
    {
        id: 5,
        name: 'Пачки сигарет',
        link: 'kolliektsiia-2',
        style: {
            width: rem(318),
            height: rem(433),
            right: rem(1069),
            bottom: rem(44)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(25)} 0 var(--yellow))`
        },
        pin: {
            right: rem(64),
            bottom: rem(65)
        },
        mobile: {
            style: {
                width: rem(153),
                height: rem(208),
                top: rem(738),
                left: rem(26)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(12)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(31),
                right: rem(31)
            }
        }
    },
    {
        id: 6,
        name: 'Машинки Hot Wheels',
        link: 'goriachaia-kolliektsiia',
        style: {
            width: rem(450),
            height: rem(199),
            left: rem(88),
            bottom: rem(43)
        },
        shadow: {
            filter: `drop-shadow(${rem(20)} ${rem(18)} 0 var(--yellow))`
        },
        pin: {
            top: rem(17),
            left: rem(14)
        },
        mobile: {
            style: {
                top: rem(471),
                left: rem(27),
                width: rem(216),
                height: rem(95)
            },
            shadow: {
                filter: `drop-shadow(${rem(10)} ${rem(9)} 0 var(--yellow))`
            },
            pin: {
                top: rem(8),
                left: rem(7)
            }
        }
    },
    {
        id: 7,
        name: 'Фотографии мертвых птиц',
        link: 'kolliektsiia-kak-dan-pamiati-biezymiannym-zhivotnym',
        style: {
            width: rem(383),
            height: rem(371),
            right: rem(312),
            bottom: rem(33)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(18)} 0 var(--yellow))`
        },
        pin: {
            right: rem(34),
            bottom: rem(130)
        },
        mobile: {
            style: {
                bottom: rem(495),
                left: rem(9),
                width: rem(184),
                height: rem(178)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(9)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(62),
                right: rem(16),
            }
        }
    },
    {
        id: 8,
        name: 'Винные пробки',
        link: 'kolliektsiia-vinnykh-probok',
        style: {
            width: rem(215),
            height: rem(231),
            left: rem(808),
            top: rem(45)
        },
        shadow: {
            filter: `drop-shadow(0 ${rem(20)} 0 var(--yellow))`
        },
        pin: {
            top: rem(32),
            right: rem(62)
        },
        mobile: {
            style: {
                top: rem(210),
                left: rem(117),
                width: rem(103),
                height: rem(110)
            },
            shadow: {
                filter: `drop-shadow(0 ${rem(10)} 0 var(--yellow))`
            },
            pin: {
                top: rem(15),
                right: rem(30)
            }
        }
    },
    {
        id: 9,
        name: 'Наушники',
        link: 'kolliektsiia-slomannykh-naushnikov',
        style: {
            width: rem(266),
            height: rem(334),
            right: rem(283),
            top: rem(469)
        },
        shadow: {
            filter: `drop-shadow(${rem(10)} ${rem(15)} 0 var(--yellow))`
        },
        pin: {
            top: rem(50),
            right: rem(18)
        },
        mobile: {
            style: {
                right: rem(18),
                bottom: rem(482),
                width: rem(128),
                height: rem(161)
            },
            shadow: {
                filter: `drop-shadow(${rem(5)} ${rem(7)} 0 var(--yellow))`
            },
            pin: {
                top: rem(24),
                right: rem(9)
            }
        }
    },
    {
        id: 10,
        name: 'Банки Pringles',
        link: 'kolliektsiia-so-vkusom-pringles',
        style: {
            width: rem(342),
            height: rem(486),
            left: rem(347),
            top: rem(456)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(25)} 0 var(--yellow))`
        },
        pin: {
            left: rem(46),
            bottom: rem(171)
        },
        mobile: {
            style: {
                top: rem(246),
                right: rem(9),
                width: rem(164),
                height: rem(233)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(12)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(82),
                left: rem(22)
            }
        }
    },
    {
        id: 11,
        name: 'Значки',
        link: 'kolliektsionirovaniie-kak-obraz-zhizni',
        style: {
            width: rem(285),
            height: rem(287),
            right: rem(821),
            top: rem(36)
        },
        shadow: {
            filter: `drop-shadow(${rem(13)} ${rem(20)} 0 var(--yellow))`
        },
        pin: {
            right: rem(19),
            bottom: rem(64)
        },
        mobile: {
            style: {
                top: rem(564),
                right: rem(10),
                width: rem(137),
                height: rem(138)
            },
            shadow: {
                filter: `drop-shadow(${rem(6)} ${rem(10)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(31),
                right: rem(10)
            }
        }
    },
    {
        id: 12,
        name: 'Компакт-диски, винил и флаеры',
        link: 'ot-kassiet-do',
        style: {
            width: rem(294),
            height: rem(307),
            left: rem(430),
            top: rem(116)
        },
        shadow: {
            filter: `drop-shadow(${rem(10)} ${rem(20)} 0 var(--yellow))`
        },
        pin: {
            left: rem(80),
            bottom: rem(18)
        },




        mobile: {
            style: {
                top: rem(48),
                right: rem(22),
                width: rem(139),
                height: rem(145)
            },
            shadow: {
                filter: `drop-shadow(${rem(5)} ${rem(10)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(8),
                left: rem(38)
            }
        }
    },
    {
        id: 13,
        name: 'Подставки для пива',
        link: 'poddierzhivaiushchaia-kolliektsiia',
        style: {
            width: rem(293),
            height: rem(278),
            left: rem(762),
            top: rem(284)
        },
        shadow: {
            filter: `drop-shadow(${rem(10)} ${rem(15)} 0 var(--yellow))`
        },
        pin: {
            left: rem(17),
            bottom: rem(66)
        },
        mobile: {
            style: {
                top: rem(582),
                left: rem(33),
                width: rem(141),
                height: rem(134)
            },
            shadow: {
                filter: `drop-shadow(${rem(5)} ${rem(7)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(32),
                left: rem(8)
            }
        }
    },
    {
        id: 14,
        name: 'Брелоки',
        link: 'nostalghich',
        style: {
            width: rem(279),
            height: rem(466),
            left: rem(49),
            top: rem(475)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(15)} 0 var(--yellow))`
        },
        pin: {
            right: rem(52),
            top: rem(200)
        },
        mobile: {
            style: {
                top: rem(232),
                left: rem(11),
                width: rem(134),
                height: rem(224)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(7)} 0 var(--yellow))`
            },
            pin: {
                top: rem(96),
                right: rem(25)
            }
        }
    },
    {
        id: 15,
        name: 'Киндер-сюрпризы',
        link: 'shokoladnaia-kindier-kolliektsiia',
        style: {
            width: rem(257),
            height: rem(364),
            right: rem(739),
            bottom: rem(36)
        },
        shadow: {
            filter: `drop-shadow(${rem(12)} ${rem(18)} 0 var(--yellow))`
        },
        pin: {
            right: rem(17),
            bottom: rem(73)
        },
        mobile: {
            style: {
                top: rem(719),
                right: rem(15),
                width: rem(132),
                height: rem(175)
            },
            shadow: {
                filter: `drop-shadow(${rem(6)} ${rem(9)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(35),
                right: rem(8)
            }
        }
    },
    {
        id: 16,
        name: 'Резиновые уточки',
        link: 'kriakaiushchaia-kolliektsiia-zhioltykh-utok',
        style: {
            width: rem(320),
            height: rem(327),
            right: rem(900),
            top: rem(392)
        },
        shadow: {
            filter: `drop-shadow(${rem(15)} ${rem(13)} 0 var(--yellow))`
        },
        pin: {
            right: rem(16),
            bottom: rem(118)
        },
        mobile: {
            style: {
                bottom: rem(839),
                right: rem(15),
                width: rem(154),
                height: rem(157)
            },
            shadow: {
                filter: `drop-shadow(${rem(7)} ${rem(6)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(57),
                right: rem(8)
            }
        }
    },
    {
        id: 17,
        name: 'Фигурки Warhammer',
        link: 'samodielnaia-kolliektsiia-fighurok',
        style: {
            width: rem(278),
            height: rem(298),
            right: rem(592),
            top: rem(494)
        },
        shadow: {
            filter: `drop-shadow(${rem(18)} ${rem(17)} 0 var(--yellow))`
        },
        pin: {
            left: rem(51),
            bottom: rem(17)
        },
        mobile: {
            style: {
                bottom: rem(660),
                right: rem(13),
                width: rem(134),
                height: rem(143)
            },
            shadow: {
                filter: `drop-shadow(${rem(9)} ${rem(8)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(8),
                left: rem(25)
            }
        }
    },


    {
        id: 18,
        name: 'Фигурки Warhammer',
        link: 'samodielnaia-kolliektsiia-fighurok',
        style: {
            width: rem(278),
            height: rem(298),
            right: rem(0),
            top: rem(494)
        },
        shadow: {
            filter: `drop-shadow(${rem(18)} ${rem(17)} 0 var(--yellow))`
        },
        pin: {
            left: rem(51),
            bottom: rem(17)
        },
        mobile: {
            style: {
                bottom: rem(660),
                right: rem(13),
                width: rem(134),
                height: rem(143)
            },
            shadow: {
                filter: `drop-shadow(${rem(9)} ${rem(8)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(8),
                left: rem(25)
            }
        }
    },
    {
        id: 19,
        name: 'Фигурки Warhammer',
        link: 'samodielnaia-kolliektsiia-fighurok',
        style: {
            width: rem(278),
            height: rem(298),
            right: rem(40),
            bottom: rem(10)
        },
        shadow: {
            filter: `drop-shadow(${rem(18)} ${rem(17)} 0 var(--yellow))`
        },
        pin: {
            left: rem(51),
            bottom: rem(17)
        },
        mobile: {
            style: {
                bottom: rem(660),
                right: rem(13),
                width: rem(134),
                height: rem(143)
            },
            shadow: {
                filter: `drop-shadow(${rem(9)} ${rem(8)} 0 var(--yellow))`
            },
            pin: {
                bottom: rem(8),
                left: rem(25)
            }
        }
    }
];

export default collection;