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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Copyright */ \"./src/Copyright.js\");\n/* harmony import */ var _ProTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ProTip */ \"./src/ProTip.js\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.css */ \"./src/layouts/Footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/SvgIcon */ \"./node_modules/@mui/material/SvgIcon/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Footer() {\n    var fillOnScroll = function fillOnScroll() {\n        // This long calculation is just needed to find out the percentage of the webpage that has been scrolled.\n        // You don't need to worry about it much. Can be used as is all the time.\n        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);\n        // Sets draw to (the progress of scroll multiplied by the length) to find exact offset.\n        var draw = length * scrollpercent;\n        // In downward scroll, simply decreases the strokeDashOffset gradually towards zero.\n        // Reverse the drawing (when scrolling upwards)\n        pathRef.current.strokeDashoffset = length - draw;\n        // Fancy stuff to show fireworks when svg completes stroke filling (strokeDashOffset = 0)\n        if (pathRef.current.strokeDashoffset <= 0) {\n            console.log(pathRef.current.strokeDashoffset <= 0);\n            if (!fireworks.current) {\n                fireworks.current.classList.add((_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().pyro));\n            }\n        } else {\n            if (fireworks.current) {\n                fireworks.current.classList.remove((_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().pyro));\n            }\n        }\n        console.log(draw, length);\n    };\n    _s();\n    var pathRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var fireworks = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var length = pathRef.current.getTotalLength();\n    pathRef.current.strokeDashoffset = length;\n    pathRef.current.strokeDasharray = length;\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        (window && window).addEventListener(\"scroll\", fillOnScroll);\n        return function() {\n            (window && window).removeEventListener(\"scroll\", fillOnScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        component: \"footer\",\n        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100vh\",\n            mt: \"auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    py: 3,\n                    mt: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    maxWidth: \"md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: fireworks,\n                            id: \"fireworks\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"before\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"after\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"parentDiv\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"svgDiv\",\n                                sx: {\n                                    position: \"fixed\",\n                                    width: \"100%\",\n                                    height: \"300px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    id: \"Layer_1\",\n                                    viewBox: \"0 0 237.99 293.35\",\n                                    sx: {\n                                        fill: \"none\",\n                                        strokeMiterlimit: 10,\n                                        strokeWidth: \"8px\",\n                                        width: \"auto\",\n                                        height: \"300px\",\n                                        position: \"absolute\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: true,\n                                        strokeDashoffset: true,\n                                        ref: pathRef,\n                                        class: \"cls-1\",\n                                        d: \"M10.5,195.36q0,26.47,0,52.94,0,8.76,0,17.53c0,13.85,9,24.7,22.55,27.4a23.18,23.18,0,0,0,4.48.43c32.34,0,64.69.15,97-.09,17.83-.13,35.31-2.8,52-9.56,18.33-7.44,33.21-19,43.13-36.42a82.72,82.72,0,0,0,10.29-33c2.62-25.6-5.61-47.75-21.32-67.52-1.66-2.09-3.25-4-3-6.91a9.71,9.71,0,0,1,.94-3.3,141.56,141.56,0,0,0,10.67-33,76.48,76.48,0,0,0,.5-21.6,79.75,79.75,0,0,0-9.39-30.74c-8-14.5-19.85-24.94-34.65-32.12a110.27,110.27,0,0,0-36.86-10.1,181.78,181.78,0,0,0-19.22-1q-57.46,0-114.91,0c-1.65,0-2.24.25-2.24,2.12.07,37.9,0,75.8.07,113.7,0,10,.94,20,4.8,29.38,5.65,13.78,16,21.3,30.67,23.2,4.1.53,8.19.08,12.29.07q47-.11,94.08,0c14.07,0,25.59,8.89,28.62,22.14A28,28,0,0,1,157.29,233a38.43,38.43,0,0,1-4.83.3q-52.6,0-105.19,0c-1.65,0-2.14.35-2.09,2.06.13,4.74,0,9.49,0,14.23,0,5.81,3.63,9.43,9.41,9.43,26.15,0,52.31.09,78.46-.05,14.06-.08,27.89-1.89,41-7.29,10.46-4.3,19.34-10.65,25.15-20.61,5.22-8.94,7.07-18.7,6.46-29-1-17.72-10.71-29.74-25.41-38.42a83.7,83.7,0,0,0-17.88-7.83c-3.56-1.1-6.12-3.25-7.14-6.9a9.53,9.53,0,0,1,6.29-11.74,57.27,57.27,0,0,0,12.47-5.5c10.6-6.64,16.54-16.37,18.64-28.53,1.64-9.53,1.35-19-1.85-28.23-4.4-12.66-13.46-20.88-25.62-25.9a77.57,77.57,0,0,0-26.46-5.59c-20.12-.86-40.26-.21-60.39-.36C68,43,57.55,43.1,47.13,43c-1.44,0-2,.23-2,1.85.12,5.32.11,10.65,0,16,0,1.57.45,1.91,1.94,1.91,30.15,0,60.29,0,90.44-.06,7.27,0,13.82,1.83,19.41,6.54a27.25,27.25,0,0,1,10.14,22.21,28.16,28.16,0,0,1-25.38,27.6,43.18,43.18,0,0,1-4.34.08H48.87c-3.65,0-3.65,0-3.65,3.57,0,2.2,0,13.4,0,15.6a9.29,9.29,0,0,0,9.56,9.52c7.15,0,83.48,0,90.66,0\",\n                                        transform: \"translate(-6.49 -4.36)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexWrap: \"wrap\",\n                                justifyContent: \"space-between\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Copyright__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProTip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Footer, \"Ps3L56Nkp4V39w/on3VdqBB0CrY=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O3dCQUNJOzs7OztvQkFDUjs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBL0V1QkcsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0Zvb3Rlci9Gb290ZXIuanN4PzcxZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ3NzQmFzZWxpbmUnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQ29udGFpbmVyJztcbmltcG9ydCBDb3B5cmlnaHQgZnJvbSAnLi4vLi4vQ29weXJpZ2h0JztcbmltcG9ydCBQcm9UaXAgZnJvbSAnLi4vLi4vUHJvVGlwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9mb290ZXIubW9kdWxlLmNzcyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbXVpL21hdGVyaWFsL1N2Z0ljb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIGNvbnN0IHBhdGhSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3QgZmlyZXdvcmtzID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGxlbmd0aCA9IHBhdGhSZWYuY3VycmVudC5nZXRUb3RhbExlbmd0aCgpO1xuICBwYXRoUmVmLmN1cnJlbnQuc3Ryb2tlRGFzaG9mZnNldCA9IGxlbmd0aDtcbiAgcGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hhcnJheSA9IGxlbmd0aDtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgICh3aW5kb3cgJiYgd2luZG93KS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaWxsT25TY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAod2luZG93ICYmIHdpbmRvdykucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZmlsbE9uU2Nyb2xsKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgXG4gIGZ1bmN0aW9uIGZpbGxPblNjcm9sbCgpIHtcbiAgICBcbiAgICAvLyBUaGlzIGxvbmcgY2FsY3VsYXRpb24gaXMganVzdCBuZWVkZWQgdG8gZmluZCBvdXQgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHdlYnBhZ2UgdGhhdCBoYXMgYmVlbiBzY3JvbGxlZC5cbiAgICAvLyBZb3UgZG9uJ3QgbmVlZCB0byB3b3JyeSBhYm91dCBpdCBtdWNoLiBDYW4gYmUgdXNlZCBhcyBpcyBhbGwgdGhlIHRpbWUuXG4gICAgdmFyIHNjcm9sbHBlcmNlbnQgPSAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKSAvIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG5cbiAgICAvLyBTZXRzIGRyYXcgdG8gKHRoZSBwcm9ncmVzcyBvZiBzY3JvbGwgbXVsdGlwbGllZCBieSB0aGUgbGVuZ3RoKSB0byBmaW5kIGV4YWN0IG9mZnNldC5cbiAgICB2YXIgZHJhdyA9IGxlbmd0aCAqIHNjcm9sbHBlcmNlbnQ7XG4gICAgLy8gSW4gZG93bndhcmQgc2Nyb2xsLCBzaW1wbHkgZGVjcmVhc2VzIHRoZSBzdHJva2VEYXNoT2Zmc2V0IGdyYWR1YWxseSB0b3dhcmRzIHplcm8uXG4gICAgLy8gUmV2ZXJzZSB0aGUgZHJhd2luZyAod2hlbiBzY3JvbGxpbmcgdXB3YXJkcylcbiAgICBwYXRoUmVmLmN1cnJlbnQuc3Ryb2tlRGFzaG9mZnNldCA9IGxlbmd0aCAtIGRyYXc7XG5cbiAgICAvLyBGYW5jeSBzdHVmZiB0byBzaG93IGZpcmV3b3JrcyB3aGVuIHN2ZyBjb21wbGV0ZXMgc3Ryb2tlIGZpbGxpbmcgKHN0cm9rZURhc2hPZmZzZXQgPSAwKVxuICAgIGlmIChwYXRoUmVmLmN1cnJlbnQuc3Ryb2tlRGFzaG9mZnNldCA8PSAwKSB7XG5jb25zb2xlLmxvZyhwYXRoUmVmLmN1cnJlbnQuc3Ryb2tlRGFzaG9mZnNldCA8PSAwKVxuXG4gICAgICAgIGlmICghZmlyZXdvcmtzLmN1cnJlbnQpIHtcbiAgICAgICAgICBmaXJld29ya3MuY3VycmVudC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5weXJvKVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGZpcmV3b3Jrcy5jdXJyZW50KSB7XG4gICAgICAgICAgZmlyZXdvcmtzLmN1cnJlbnQuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMucHlybylcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhkcmF3LCBsZW5ndGgpXG59XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb21wb25lbnQ9XCJmb290ZXJcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfVxuICAgICAgc3g9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBtdDogJ2F1dG8nLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBweTogMyxcbiAgICAgICAgICBtdDogJ2F1dG8nXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgIDxkaXYgcmVmPXtmaXJld29ya3N9IGlkPVwiZmlyZXdvcmtzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZWZvcmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFmdGVyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9J3BhcmVudERpdic+XG4gICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0nc3ZnRGl2JyBzeD17e3Bvc2l0aW9uOiAnZml4ZWQnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICczMDBweCd9fT5cbiAgICAgICAgICAgICAgPFN2Z0ljb24gaWQ9XCJMYXllcl8xXCIgdmlld0JveD1cIjAgMCAyMzcuOTkgMjkzLjM1XCIgc3g9e3tmaWxsOiAnbm9uZScsIHN0cm9rZU1pdGVybGltaXQ6IDEwLCBzdHJva2VXaWR0aDogJzhweCcsIHdpZHRoOiAnYXV0bycsIGhlaWdodDogJzMwMHB4JywgcG9zaXRpb246ICdhYnNvbHV0ZSd9fT5cbiAgICAgICAgICAgICAgPHBhdGggZmlsbCBzdHJva2VEYXNob2Zmc2V0IHJlZj17cGF0aFJlZn0gY2xhc3M9XCJjbHMtMVwiIGQ9XCJNMTAuNSwxOTUuMzZxMCwyNi40NywwLDUyLjk0LDAsOC43NiwwLDE3LjUzYzAsMTMuODUsOSwyNC43LDIyLjU1LDI3LjRhMjMuMTgsMjMuMTgsMCwwLDAsNC40OC40M2MzMi4zNCwwLDY0LjY5LjE1LDk3LS4wOSwxNy44My0uMTMsMzUuMzEtMi44LDUyLTkuNTYsMTguMzMtNy40NCwzMy4yMS0xOSw0My4xMy0zNi40MmE4Mi43Miw4Mi43MiwwLDAsMCwxMC4yOS0zM2MyLjYyLTI1LjYtNS42MS00Ny43NS0yMS4zMi02Ny41Mi0xLjY2LTIuMDktMy4yNS00LTMtNi45MWE5LjcxLDkuNzEsMCwwLDEsLjk0LTMuMywxNDEuNTYsMTQxLjU2LDAsMCwwLDEwLjY3LTMzLDc2LjQ4LDc2LjQ4LDAsMCwwLC41LTIxLjYsNzkuNzUsNzkuNzUsMCwwLDAtOS4zOS0zMC43NGMtOC0xNC41LTE5Ljg1LTI0Ljk0LTM0LjY1LTMyLjEyYTExMC4yNywxMTAuMjcsMCwwLDAtMzYuODYtMTAuMSwxODEuNzgsMTgxLjc4LDAsMCwwLTE5LjIyLTFxLTU3LjQ2LDAtMTE0LjkxLDBjLTEuNjUsMC0yLjI0LjI1LTIuMjQsMi4xMi4wNywzNy45LDAsNzUuOC4wNywxMTMuNywwLDEwLC45NCwyMCw0LjgsMjkuMzgsNS42NSwxMy43OCwxNiwyMS4zLDMwLjY3LDIzLjIsNC4xLjUzLDguMTkuMDgsMTIuMjkuMDdxNDctLjExLDk0LjA4LDBjMTQuMDcsMCwyNS41OSw4Ljg5LDI4LjYyLDIyLjE0QTI4LDI4LDAsMCwxLDE1Ny4yOSwyMzNhMzguNDMsMzguNDMsMCwwLDEtNC44My4zcS01Mi42LDAtMTA1LjE5LDBjLTEuNjUsMC0yLjE0LjM1LTIuMDksMi4wNi4xMyw0Ljc0LDAsOS40OSwwLDE0LjIzLDAsNS44MSwzLjYzLDkuNDMsOS40MSw5LjQzLDI2LjE1LDAsNTIuMzEuMDksNzguNDYtLjA1LDE0LjA2LS4wOCwyNy44OS0xLjg5LDQxLTcuMjksMTAuNDYtNC4zLDE5LjM0LTEwLjY1LDI1LjE1LTIwLjYxLDUuMjItOC45NCw3LjA3LTE4LjcsNi40Ni0yOS0xLTE3LjcyLTEwLjcxLTI5Ljc0LTI1LjQxLTM4LjQyYTgzLjcsODMuNywwLDAsMC0xNy44OC03LjgzYy0zLjU2LTEuMS02LjEyLTMuMjUtNy4xNC02LjlhOS41Myw5LjUzLDAsMCwxLDYuMjktMTEuNzQsNTcuMjcsNTcuMjcsMCwwLDAsMTIuNDctNS41YzEwLjYtNi42NCwxNi41NC0xNi4zNywxOC42NC0yOC41MywxLjY0LTkuNTMsMS4zNS0xOS0xLjg1LTI4LjIzLTQuNC0xMi42Ni0xMy40Ni0yMC44OC0yNS42Mi0yNS45YTc3LjU3LDc3LjU3LDAsMCwwLTI2LjQ2LTUuNTljLTIwLjEyLS44Ni00MC4yNi0uMjEtNjAuMzktLjM2QzY4LDQzLDU3LjU1LDQzLjEsNDcuMTMsNDNjLTEuNDQsMC0yLC4yMy0yLDEuODUuMTIsNS4zMi4xMSwxMC42NSwwLDE2LDAsMS41Ny40NSwxLjkxLDEuOTQsMS45MSwzMC4xNSwwLDYwLjI5LDAsOTAuNDQtLjA2LDcuMjcsMCwxMy44MiwxLjgzLDE5LjQxLDYuNTRhMjcuMjUsMjcuMjUsMCwwLDEsMTAuMTQsMjIuMjEsMjguMTYsMjguMTYsMCwwLDEtMjUuMzgsMjcuNiw0My4xOCw0My4xOCwwLDAsMS00LjM0LjA4SDQ4Ljg3Yy0zLjY1LDAtMy42NSwwLTMuNjUsMy41NywwLDIuMiwwLDEzLjQsMCwxNS42YTkuMjksOS4yOSwwLDAsMCw5LjU2LDkuNTJjNy4xNSwwLDgzLjQ4LDAsOTAuNjYsMFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNi40OSAtNC4zNilcIi8+XG4gICAgICAgICAgICAgIDwvU3ZnSWNvbj5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggc3g9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhXcmFwOiAnd3JhcCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2Vlbid9fT5cbiAgICAgICAgICAgIDxDb3B5cmlnaHQgLz5cbiAgICAgICAgICAgIDxQcm9UaXAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNzc0Jhc2VsaW5lIiwiQm94IiwiQ29udGFpbmVyIiwiQ29weXJpZ2h0IiwiUHJvVGlwIiwic3R5bGVzIiwiU3ZnSWNvbiIsIkZvb3RlciIsImZpbGxPblNjcm9sbCIsInNjcm9sbHBlcmNlbnQiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJkcmF3IiwibGVuZ3RoIiwicGF0aFJlZiIsImN1cnJlbnQiLCJzdHJva2VEYXNob2Zmc2V0IiwiY29uc29sZSIsImxvZyIsImZpcmV3b3JrcyIsImNsYXNzTGlzdCIsImFkZCIsInB5cm8iLCJyZW1vdmUiLCJ1c2VSZWYiLCJnZXRUb3RhbExlbmd0aCIsInN0cm9rZURhc2hhcnJheSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29tcG9uZW50IiwiY2xhc3NOYW1lIiwiZm9vdGVyIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1pbkhlaWdodCIsIm10IiwicHkiLCJtYXhXaWR0aCIsImRpdiIsInJlZiIsImlkIiwiY2xhc3MiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJzdHJva2VNaXRlcmxpbWl0Iiwic3Ryb2tlV2lkdGgiLCJwYXRoIiwiZCIsInRyYW5zZm9ybSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Footer/Footer.jsx\n"));

/***/ })

});