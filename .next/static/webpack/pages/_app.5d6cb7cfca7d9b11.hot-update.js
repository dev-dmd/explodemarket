"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/Footer/Footer.jsx":
/*!***************************************!*\
  !*** ./src/layouts/Footer/Footer.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Copyright */ \"./src/Copyright.js\");\n/* harmony import */ var _ProTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ProTip */ \"./src/ProTip.js\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.module.css */ \"./src/layouts/Footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/SvgIcon */ \"./node_modules/@mui/material/SvgIcon/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Footer() {\n    _s();\n    var pathRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var fireworks = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        var fillOnScroll = function fillOnScroll() {\n            // This long calculation is just needed to find out the percentage of the webpage that has been scrolled.\n            // You don't need to worry about it much. Can be used as is all the time.\n            var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);\n            // Sets draw to (the progress of scroll multiplied by the length) to find exact offset.\n            var draw = length * scrollpercent;\n            // In downward scroll, simply decreases the strokeDashOffset gradually towards zero.\n            // Reverse the drawing (when scrolling upwards)\n            pathRef.current.style.strokeDashoffset = length - draw;\n            pathRef.current.style.strokeDasharray = length - draw;\n            // Fancy stuff to show fireworks when svg completes stroke filling (strokeDashOffset = 0)\n            if (pathRef.current.strokeDashoffset <= 0) {\n                if (!fireworks.current.classList.contains(\"pyro\")) {\n                    fireworks.current.classList.add(\"pyro\");\n                }\n            } else {\n                if (fireworks.current.classList.contains(\"pyro\")) {\n                    fireworks.current.classList.remove(\"pyro\");\n                }\n            }\n            console.log(pathRef.current.style.strokeDashoffset = length - draw, pathRef.current.style.strokeDasharray = length - draw);\n        };\n        var length = pathRef.current.getTotalLength();\n        (window && window).addEventListener(\"scroll\", fillOnScroll);\n        return function() {\n            (window && window).removeEventListener(\"scroll\", fillOnScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        component: \"footer\",\n        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100vh\",\n            mt: \"auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                sx: {\n                    py: 3,\n                    mt: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    maxWidth: \"md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: fireworks,\n                            id: \"fireworks\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"before\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"after\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                sx: {\n                                    position: \"fixed\",\n                                    width: \"100%\",\n                                    height: \"300px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    id: \"Layer_1\",\n                                    viewBox: \"0 0 237.99 293.35\",\n                                    sx: {\n                                        fill: \"none\",\n                                        strokeMiterlimit: 10,\n                                        strokeWidth: \"8px\",\n                                        width: \"auto\",\n                                        height: \"300px\",\n                                        position: \"absolute\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        id: \"myPath\",\n                                        className: \"cls-1\",\n                                        ref: pathRef,\n                                        d: \"M10.5,195.36q0,26.47,0,52.94,0,8.76,0,17.53c0,13.85,9,24.7,22.55,27.4a23.18,23.18,0,0,0,4.48.43c32.34,0,64.69.15,97-.09,17.83-.13,35.31-2.8,52-9.56,18.33-7.44,33.21-19,43.13-36.42a82.72,82.72,0,0,0,10.29-33c2.62-25.6-5.61-47.75-21.32-67.52-1.66-2.09-3.25-4-3-6.91a9.71,9.71,0,0,1,.94-3.3,141.56,141.56,0,0,0,10.67-33,76.48,76.48,0,0,0,.5-21.6,79.75,79.75,0,0,0-9.39-30.74c-8-14.5-19.85-24.94-34.65-32.12a110.27,110.27,0,0,0-36.86-10.1,181.78,181.78,0,0,0-19.22-1q-57.46,0-114.91,0c-1.65,0-2.24.25-2.24,2.12.07,37.9,0,75.8.07,113.7,0,10,.94,20,4.8,29.38,5.65,13.78,16,21.3,30.67,23.2,4.1.53,8.19.08,12.29.07q47-.11,94.08,0c14.07,0,25.59,8.89,28.62,22.14A28,28,0,0,1,157.29,233a38.43,38.43,0,0,1-4.83.3q-52.6,0-105.19,0c-1.65,0-2.14.35-2.09,2.06.13,4.74,0,9.49,0,14.23,0,5.81,3.63,9.43,9.41,9.43,26.15,0,52.31.09,78.46-.05,14.06-.08,27.89-1.89,41-7.29,10.46-4.3,19.34-10.65,25.15-20.61,5.22-8.94,7.07-18.7,6.46-29-1-17.72-10.71-29.74-25.41-38.42a83.7,83.7,0,0,0-17.88-7.83c-3.56-1.1-6.12-3.25-7.14-6.9a9.53,9.53,0,0,1,6.29-11.74,57.27,57.27,0,0,0,12.47-5.5c10.6-6.64,16.54-16.37,18.64-28.53,1.64-9.53,1.35-19-1.85-28.23-4.4-12.66-13.46-20.88-25.62-25.9a77.57,77.57,0,0,0-26.46-5.59c-20.12-.86-40.26-.21-60.39-.36C68,43,57.55,43.1,47.13,43c-1.44,0-2,.23-2,1.85.12,5.32.11,10.65,0,16,0,1.57.45,1.91,1.94,1.91,30.15,0,60.29,0,90.44-.06,7.27,0,13.82,1.83,19.41,6.54a27.25,27.25,0,0,1,10.14,22.21,28.16,28.16,0,0,1-25.38,27.6,43.18,43.18,0,0,1-4.34.08H48.87c-3.65,0-3.65,0-3.65,3.57,0,2.2,0,13.4,0,15.6a9.29,9.29,0,0,0,9.56,9.52c7.15,0,83.48,0,90.66,0\",\n                                        transform: \"translate(-6.49 -4.36)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexWrap: \"wrap\",\n                                justifyContent: \"space-between\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Copyright__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProTip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Footer, \"Ps3L56Nkp4V39w/on3VdqBB0CrY=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHOzhDQUNiLDhEQUFDQywrQ0FBTTs7Ozt3Q0FBRzs7Ozs7O2dDQUNOOzs7Ozs7d0JBQ0k7Ozs7O29CQUNSOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0EvRXVCRyxNQUFNO0FBQU5BLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvRm9vdGVyL0Zvb3Rlci5qc3g/NzFmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG11aS9tYXRlcmlhbC9Dc3NCYXNlbGluZSc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9Db250YWluZXInO1xuaW1wb3J0IENvcHlyaWdodCBmcm9tICcuLi8uLi9Db3B5cmlnaHQnO1xuaW1wb3J0IFByb1RpcCBmcm9tICcuLi8uLi9Qcm9UaXAnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvb3Rlci5tb2R1bGUuY3NzJztcbmltcG9ydCBTdmdJY29uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU3ZnSWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgcGF0aFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBmaXJld29ya3MgPSBSZWFjdC51c2VSZWYoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IGxlbmd0aCA9IHBhdGhSZWYuY3VycmVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgXG5cbiAgICBmdW5jdGlvbiBmaWxsT25TY3JvbGwoKSB7XG4gICAgXG4gICAgICAvLyBUaGlzIGxvbmcgY2FsY3VsYXRpb24gaXMganVzdCBuZWVkZWQgdG8gZmluZCBvdXQgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHdlYnBhZ2UgdGhhdCBoYXMgYmVlbiBzY3JvbGxlZC5cbiAgICAgIC8vIFlvdSBkb24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IGl0IG11Y2guIENhbiBiZSB1c2VkIGFzIGlzIGFsbCB0aGUgdGltZS5cbiAgICAgIHZhciBzY3JvbGxwZXJjZW50ID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICBcbiAgICAgIC8vIFNldHMgZHJhdyB0byAodGhlIHByb2dyZXNzIG9mIHNjcm9sbCBtdWx0aXBsaWVkIGJ5IHRoZSBsZW5ndGgpIHRvIGZpbmQgZXhhY3Qgb2Zmc2V0LlxuICAgICAgdmFyIGRyYXcgPSBsZW5ndGggKiBzY3JvbGxwZXJjZW50O1xuICAgICAgLy8gSW4gZG93bndhcmQgc2Nyb2xsLCBzaW1wbHkgZGVjcmVhc2VzIHRoZSBzdHJva2VEYXNoT2Zmc2V0IGdyYWR1YWxseSB0b3dhcmRzIHplcm8uXG4gICAgICAvLyBSZXZlcnNlIHRoZSBkcmF3aW5nICh3aGVuIHNjcm9sbGluZyB1cHdhcmRzKVxuICAgICAgcGF0aFJlZi5jdXJyZW50LnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBsZW5ndGggLSBkcmF3O1xuICAgICAgcGF0aFJlZi5jdXJyZW50LnN0eWxlLnN0cm9rZURhc2hhcnJheSA9IGxlbmd0aCAgLSBkcmF3O1xuICBcbiAgICAgIC8vIEZhbmN5IHN0dWZmIHRvIHNob3cgZmlyZXdvcmtzIHdoZW4gc3ZnIGNvbXBsZXRlcyBzdHJva2UgZmlsbGluZyAoc3Ryb2tlRGFzaE9mZnNldCA9IDApXG4gICAgICBpZiAocGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hvZmZzZXQgPD0gMCkge1xuICAgICAgICAgIGlmICghZmlyZXdvcmtzLmN1cnJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHlyb1wiKSkge1xuICAgICAgICAgICAgZmlyZXdvcmtzLmN1cnJlbnQuY2xhc3NMaXN0LmFkZCgncHlybycpO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmaXJld29ya3MuY3VycmVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJweXJvXCIpKSB7XG4gICAgICAgICAgZmlyZXdvcmtzLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZSgncHlybycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhwYXRoUmVmLmN1cnJlbnQuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGxlbmd0aCAtIGRyYXcsIHBhdGhSZWYuY3VycmVudC5zdHlsZS5zdHJva2VEYXNoYXJyYXkgPSBsZW5ndGggIC0gZHJhdylcbiAgICB9XG4gICAgXG4gICAgKHdpbmRvdyAmJiB3aW5kb3cpLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZpbGxPblNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICh3aW5kb3cgJiYgd2luZG93KS5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaWxsT25TY3JvbGwpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29tcG9uZW50PVwiZm9vdGVyXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn1cbiAgICAgIHN4PXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgbXQ6ICdhdXRvJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPENzc0Jhc2VsaW5lIC8+XG4gICAgICA8Qm94XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgcHk6IDMsXG4gICAgICAgICAgbXQ6ICdhdXRvJ1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICA8ZGl2IHJlZj17ZmlyZXdvcmtzfSBpZD1cImZpcmV3b3Jrc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJlZm9yZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFmdGVyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxCb3ggc3g9e3twb3NpdGlvbjogJ2ZpeGVkJywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMzAwcHgnfX0+XG4gICAgICAgICAgICAgIDxTdmdJY29uIGlkPVwiTGF5ZXJfMVwiIHZpZXdCb3g9XCIwIDAgMjM3Ljk5IDI5My4zNVwiIHN4PXt7ZmlsbDogJ25vbmUnLCBzdHJva2VNaXRlcmxpbWl0OiAxMCwgc3Ryb2tlV2lkdGg6ICc4cHgnLCB3aWR0aDogJ2F1dG8nLCBoZWlnaHQ6ICczMDBweCcsIHBvc2l0aW9uOiAnYWJzb2x1dGUnfX0+XG4gICAgICAgICAgICAgIDxwYXRoIGlkPVwibXlQYXRoXCIgY2xhc3NOYW1lPVwiY2xzLTFcIiByZWY9e3BhdGhSZWZ9IGQ9XCJNMTAuNSwxOTUuMzZxMCwyNi40NywwLDUyLjk0LDAsOC43NiwwLDE3LjUzYzAsMTMuODUsOSwyNC43LDIyLjU1LDI3LjRhMjMuMTgsMjMuMTgsMCwwLDAsNC40OC40M2MzMi4zNCwwLDY0LjY5LjE1LDk3LS4wOSwxNy44My0uMTMsMzUuMzEtMi44LDUyLTkuNTYsMTguMzMtNy40NCwzMy4yMS0xOSw0My4xMy0zNi40MmE4Mi43Miw4Mi43MiwwLDAsMCwxMC4yOS0zM2MyLjYyLTI1LjYtNS42MS00Ny43NS0yMS4zMi02Ny41Mi0xLjY2LTIuMDktMy4yNS00LTMtNi45MWE5LjcxLDkuNzEsMCwwLDEsLjk0LTMuMywxNDEuNTYsMTQxLjU2LDAsMCwwLDEwLjY3LTMzLDc2LjQ4LDc2LjQ4LDAsMCwwLC41LTIxLjYsNzkuNzUsNzkuNzUsMCwwLDAtOS4zOS0zMC43NGMtOC0xNC41LTE5Ljg1LTI0Ljk0LTM0LjY1LTMyLjEyYTExMC4yNywxMTAuMjcsMCwwLDAtMzYuODYtMTAuMSwxODEuNzgsMTgxLjc4LDAsMCwwLTE5LjIyLTFxLTU3LjQ2LDAtMTE0LjkxLDBjLTEuNjUsMC0yLjI0LjI1LTIuMjQsMi4xMi4wNywzNy45LDAsNzUuOC4wNywxMTMuNywwLDEwLC45NCwyMCw0LjgsMjkuMzgsNS42NSwxMy43OCwxNiwyMS4zLDMwLjY3LDIzLjIsNC4xLjUzLDguMTkuMDgsMTIuMjkuMDdxNDctLjExLDk0LjA4LDBjMTQuMDcsMCwyNS41OSw4Ljg5LDI4LjYyLDIyLjE0QTI4LDI4LDAsMCwxLDE1Ny4yOSwyMzNhMzguNDMsMzguNDMsMCwwLDEtNC44My4zcS01Mi42LDAtMTA1LjE5LDBjLTEuNjUsMC0yLjE0LjM1LTIuMDksMi4wNi4xMyw0Ljc0LDAsOS40OSwwLDE0LjIzLDAsNS44MSwzLjYzLDkuNDMsOS40MSw5LjQzLDI2LjE1LDAsNTIuMzEuMDksNzguNDYtLjA1LDE0LjA2LS4wOCwyNy44OS0xLjg5LDQxLTcuMjksMTAuNDYtNC4zLDE5LjM0LTEwLjY1LDI1LjE1LTIwLjYxLDUuMjItOC45NCw3LjA3LTE4LjcsNi40Ni0yOS0xLTE3LjcyLTEwLjcxLTI5Ljc0LTI1LjQxLTM4LjQyYTgzLjcsODMuNywwLDAsMC0xNy44OC03LjgzYy0zLjU2LTEuMS02LjEyLTMuMjUtNy4xNC02LjlhOS41Myw5LjUzLDAsMCwxLDYuMjktMTEuNzQsNTcuMjcsNTcuMjcsMCwwLDAsMTIuNDctNS41YzEwLjYtNi42NCwxNi41NC0xNi4zNywxOC42NC0yOC41MywxLjY0LTkuNTMsMS4zNS0xOS0xLjg1LTI4LjIzLTQuNC0xMi42Ni0xMy40Ni0yMC44OC0yNS42Mi0yNS45YTc3LjU3LDc3LjU3LDAsMCwwLTI2LjQ2LTUuNTljLTIwLjEyLS44Ni00MC4yNi0uMjEtNjAuMzktLjM2QzY4LDQzLDU3LjU1LDQzLjEsNDcuMTMsNDNjLTEuNDQsMC0yLC4yMy0yLDEuODUuMTIsNS4zMi4xMSwxMC42NSwwLDE2LDAsMS41Ny40NSwxLjkxLDEuOTQsMS45MSwzMC4xNSwwLDYwLjI5LDAsOTAuNDQtLjA2LDcuMjcsMCwxMy44MiwxLjgzLDE5LjQxLDYuNTRhMjcuMjUsMjcuMjUsMCwwLDEsMTAuMTQsMjIuMjEsMjguMTYsMjguMTYsMCwwLDEtMjUuMzgsMjcuNiw0My4xOCw0My4xOCwwLDAsMS00LjM0LjA4SDQ4Ljg3Yy0zLjY1LDAtMy42NSwwLTMuNjUsMy41NywwLDIuMiwwLDEzLjQsMCwxNS42YTkuMjksOS4yOSwwLDAsMCw5LjU2LDkuNTJjNy4xNSwwLDgzLjQ4LDAsOTAuNjYsMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNi40OSAtNC4zNilcIi8+XG4gICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgICAgICAgIDxQcm9UaXAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDc3NCYXNlbGluZSIsIkJveCIsIkNvbnRhaW5lciIsIkNvcHlyaWdodCIsIlByb1RpcCIsInN0eWxlcyIsIlN2Z0ljb24iLCJGb290ZXIiLCJwYXRoUmVmIiwidXNlUmVmIiwiZmlyZXdvcmtzIiwidXNlRWZmZWN0IiwiZmlsbE9uU2Nyb2xsIiwic2Nyb2xscGVyY2VudCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImRyYXciLCJsZW5ndGgiLCJjdXJyZW50Iiwic3R5bGUiLCJzdHJva2VEYXNob2Zmc2V0Iiwic3Ryb2tlRGFzaGFycmF5IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiZ2V0VG90YWxMZW5ndGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXBvbmVudCIsImNsYXNzTmFtZSIsImZvb3RlciIsInN4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJtaW5IZWlnaHQiLCJtdCIsInB5IiwibWF4V2lkdGgiLCJkaXYiLCJyZWYiLCJpZCIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJkIiwidHJhbnNmb3JtIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/Footer/Footer.jsx\n"));

/***/ })

});