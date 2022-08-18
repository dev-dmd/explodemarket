(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9088:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__rrVYd"
};


/***/ }),

/***/ 921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__(4312);
// EXTERNAL MODULE: ./src/createEmotionCache.js + 1 modules
var createEmotionCache = __webpack_require__(2759);
// EXTERNAL MODULE: external "@mui/material/Container"
var Container_ = __webpack_require__(4475);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
;// CONCATENATED MODULE: external "@mui/material/Stack"
const Stack_namespaceObject = require("@mui/material/Stack");
var Stack_default = /*#__PURE__*/__webpack_require__.n(Stack_namespaceObject);
;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
// EXTERNAL MODULE: ./src/Copyright.js
var Copyright = __webpack_require__(5730);
// EXTERNAL MODULE: ./src/ProTip.js
var ProTip = __webpack_require__(9856);
// EXTERNAL MODULE: ./src/layouts/Footer/footer.module.css
var footer_module = __webpack_require__(9088);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./src/layouts/Footer/Footer.jsx






function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_module_default()).footer,
        children: /*#__PURE__*/ jsx_runtime_.jsx(system_namespaceObject.Container, {
            maxWidth: "md",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Stack_default()), {
                direction: {
                    xs: "column",
                    sm: "row"
                },
                sx: {
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Copyright/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ProTip/* default */.Z, {})
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Toolbar"
const Toolbar_namespaceObject = require("@mui/material/Toolbar");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: external "@mui/material/useScrollTrigger"
const useScrollTrigger_namespaceObject = require("@mui/material/useScrollTrigger");
var useScrollTrigger_default = /*#__PURE__*/__webpack_require__.n(useScrollTrigger_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
;// CONCATENATED MODULE: external "@mui/material/Fab"
const Fab_namespaceObject = require("@mui/material/Fab");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/KeyboardArrowUp"
const KeyboardArrowUp_namespaceObject = require("@mui/icons-material/KeyboardArrowUp");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Fade"
const Fade_namespaceObject = require("@mui/material/Fade");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: external "@mui/material/Menu"
const Menu_namespaceObject = require("@mui/material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/MenuItem"
const MenuItem_namespaceObject = require("@mui/material/MenuItem");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_namespaceObject);
;// CONCATENATED MODULE: ./src/assets/icons/LogoExplode.jsx

function LogoExplode() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "62",
        height: "46",
        viewBox: "0 0 62 46",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "39.3529",
                cy: "22.6471",
                r: "22.6471",
                fill: "#788AC5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "31.6471",
                cy: "22.6471",
                r: "22.6471",
                fill: "#62D38E"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "22.6471",
                cy: "22.6471",
                r: "21.1471",
                fill: "#061042",
                stroke: "white",
                "stroke-width": "3"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/Header/Header.jsx
















const pages = [
    "Naslovna",
    "Cene",
    "Rani radovi",
    "Nasa firma",
    "Kontakt"
];
function ScrollTop(props) {
    const { children , window  } = props;
    const trigger = useScrollTrigger_default()({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100
    });
    const handleClick = (event)=>{
        const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor");
        if (anchor) {
            anchor.scrollIntoView({
                block: "center"
            });
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx((Fade_default()), {
        in: trigger,
        children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
            onClick: handleClick,
            role: "presentation",
            sx: {
                position: "fixed",
                bottom: 16,
                right: 16
            },
            children: children
        })
    });
}
function Header(props) {
    const { 0: anchorElNav , 1: setAnchorElNav  } = (0,external_react_.useState)(null);
    const { 0: anchorElUser , 1: setAnchorElUser  } = (0,external_react_.useState)(null);
    const handleOpenNavMenu = (event)=>{
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event)=>{
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = ()=>{
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = ()=>{
        setAnchorElUser(null);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                color: "transparent",
                position: "static",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
                    maxWidth: "md",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                        disableGutters: true,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(LogoExplode, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "p",
                                noWrap: true,
                                component: "a",
                                href: "/",
                                sx: {
                                    mx: 2,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    textDecoration: "none",
                                    color: "primary.text"
                                },
                                children: "Explode Market"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    }
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                    id: "menu-appbar",
                                    anchorEl: anchorElNav,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "left"
                                    },
                                    keepMounted: true,
                                    transformOrigin: {
                                        vertical: "top",
                                        horizontal: "left"
                                    },
                                    open: Boolean(anchorElNav),
                                    onClose: handleCloseNavMenu,
                                    sx: {
                                        display: {
                                            xs: "block",
                                            md: "none"
                                        }
                                    },
                                    children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((MenuItem_default()), {
                                            onClick: handleCloseNavMenu,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                color: "primary",
                                                sx: {
                                                    fontFamily: "Poppins"
                                                },
                                                textAlign: "center",
                                                children: page
                                            })
                                        }, page))
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                variant: "p",
                                noWrap: true,
                                component: "a",
                                href: "",
                                sx: {
                                    mr: 2,
                                    display: {
                                        xs: "flex",
                                        md: "none"
                                    },
                                    flexGrow: 1,
                                    fontFamily: "Poppins",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    textDecoration: "none",
                                    color: "primary.text"
                                },
                                children: "Explode Market"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    flexGrow: 1,
                                    display: {
                                        xs: "none",
                                        md: "flex"
                                    },
                                    justifyContent: "flex-end"
                                },
                                children: pages.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        onClick: handleCloseNavMenu,
                                        sx: {
                                            my: 2,
                                            display: "block",
                                            fontFamily: "Poppins",
                                            color: "primary.text"
                                        },
                                        children: page
                                    }, page))
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                id: "back-to-top-anchor",
                sx: {
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    zIndex: -1
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollTop, {
                ...props,
                children: /*#__PURE__*/ jsx_runtime_.jsx((Fab_default()), {
                    size: "small",
                    "aria-label": "scroll back to top",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((KeyboardArrowUp_default()), {})
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/layouts/Main/MainLayout.jsx




function MainLayout({ children , ...rest }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-page",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};

;// CONCATENATED MODULE: ./pages/_app.js











// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = (0,createEmotionCache/* default */.Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
                theme: theme/* default */.Z,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MainLayout, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                            ...pageProps
                        })
                    })
                ]
            })
        ]
    });
};
MyApp.propTypes = {
    Component: (external_prop_types_default()).elementType.isRequired,
    emotionCache: (external_prop_types_default()).object,
    pageProps: (external_prop_types_default()).object.isRequired
};


/***/ }),

/***/ 2759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/createEmotionCache.js

const isBrowser = typeof document !== "undefined";
// On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint.
// This assures that MUI styles are loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return cache_default()({
        key: "mui-style",
        insertionPoint
    });
};


/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 4475:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Container");

/***/ }),

/***/ 5246:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Link");

/***/ }),

/***/ 8356:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/SvgIcon");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 5574:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ 8442:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [88], () => (__webpack_exec__(921)));
module.exports = __webpack_exports__;

})();