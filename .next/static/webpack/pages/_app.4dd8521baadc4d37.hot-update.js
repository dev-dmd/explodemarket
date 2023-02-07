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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"./node_modules/@mui/material/CssBaseline/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _Copyright__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Copyright */ \"./src/Copyright.js\");\n/* harmony import */ var _ProTip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ProTip */ \"./src/ProTip.js\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.css */ \"./src/layouts/Footer/footer.module.css\");\n/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/SvgIcon */ \"./node_modules/@mui/material/SvgIcon/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Footer() {\n    var fillOnScroll = function fillOnScroll() {\n        // This long calculation is just needed to find out the percentage of the webpage that has been scrolled.\n        // You don't need to worry about it much. Can be used as is all the time.\n        var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);\n        // Sets draw to (the progress of scroll multiplied by the length) to find exact offset.\n        var draw = length * scrollpercent;\n        // In downward scroll, simply decreases the strokeDashOffset gradually towards zero.\n        // Reverse the drawing (when scrolling upwards)\n        pathRef.current.strokeDashoffset = length - draw;\n        // Fancy stuff to show fireworks when svg completes stroke filling (strokeDashOffset = 0)\n        if (pathRef.current.strokeDashoffset <= 0) {\n            console.log(pathRef.current.strokeDashoffset <= 0, (_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().pyro));\n            fireworks.current.classList.add(\"pyro\");\n            if (!fireworks.current) {\n                fireworks.current.classList.add((_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().pyro));\n            }\n        } else {\n            if (fireworks.current) {\n                fireworks.current.classList.remove((_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().pyro));\n            }\n        }\n        console.log(draw, length);\n    };\n    _s();\n    var pathRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var fireworks = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    var length = pathRef.current.getTotalLength();\n    pathRef.current.strokeDashoffset = length;\n    pathRef.current.strokeDasharray = length;\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function() {\n        (window && window).addEventListener(\"scroll\", fillOnScroll);\n        return function() {\n            (window && window).removeEventListener(\"scroll\", fillOnScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        component: \"footer\",\n        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\",\n            minHeight: \"100vh\",\n            mt: \"auto\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                sx: {\n                    py: 3,\n                    mt: \"auto\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    maxWidth: \"md\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            ref: fireworks,\n                            id: \"fireworks\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"before\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"after\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            className: \"parentDiv\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"svgDiv\",\n                                sx: {\n                                    position: \"fixed\",\n                                    width: \"100%\",\n                                    height: \"300px\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    id: \"Layer_1\",\n                                    viewBox: \"0 0 237.99 293.35\",\n                                    sx: {\n                                        fill: \"none\",\n                                        strokeMiterlimit: 10,\n                                        strokeWidth: \"8px\",\n                                        width: \"auto\",\n                                        height: \"300px\",\n                                        position: \"absolute\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        fill: true,\n                                        strokeDashoffset: true,\n                                        ref: pathRef,\n                                        class: \"cls-1\",\n                                        d: \"M10.5,195.36q0,26.47,0,52.94,0,8.76,0,17.53c0,13.85,9,24.7,22.55,27.4a23.18,23.18,0,0,0,4.48.43c32.34,0,64.69.15,97-.09,17.83-.13,35.31-2.8,52-9.56,18.33-7.44,33.21-19,43.13-36.42a82.72,82.72,0,0,0,10.29-33c2.62-25.6-5.61-47.75-21.32-67.52-1.66-2.09-3.25-4-3-6.91a9.71,9.71,0,0,1,.94-3.3,141.56,141.56,0,0,0,10.67-33,76.48,76.48,0,0,0,.5-21.6,79.75,79.75,0,0,0-9.39-30.74c-8-14.5-19.85-24.94-34.65-32.12a110.27,110.27,0,0,0-36.86-10.1,181.78,181.78,0,0,0-19.22-1q-57.46,0-114.91,0c-1.65,0-2.24.25-2.24,2.12.07,37.9,0,75.8.07,113.7,0,10,.94,20,4.8,29.38,5.65,13.78,16,21.3,30.67,23.2,4.1.53,8.19.08,12.29.07q47-.11,94.08,0c14.07,0,25.59,8.89,28.62,22.14A28,28,0,0,1,157.29,233a38.43,38.43,0,0,1-4.83.3q-52.6,0-105.19,0c-1.65,0-2.14.35-2.09,2.06.13,4.74,0,9.49,0,14.23,0,5.81,3.63,9.43,9.41,9.43,26.15,0,52.31.09,78.46-.05,14.06-.08,27.89-1.89,41-7.29,10.46-4.3,19.34-10.65,25.15-20.61,5.22-8.94,7.07-18.7,6.46-29-1-17.72-10.71-29.74-25.41-38.42a83.7,83.7,0,0,0-17.88-7.83c-3.56-1.1-6.12-3.25-7.14-6.9a9.53,9.53,0,0,1,6.29-11.74,57.27,57.27,0,0,0,12.47-5.5c10.6-6.64,16.54-16.37,18.64-28.53,1.64-9.53,1.35-19-1.85-28.23-4.4-12.66-13.46-20.88-25.62-25.9a77.57,77.57,0,0,0-26.46-5.59c-20.12-.86-40.26-.21-60.39-.36C68,43,57.55,43.1,47.13,43c-1.44,0-2,.23-2,1.85.12,5.32.11,10.65,0,16,0,1.57.45,1.91,1.94,1.91,30.15,0,60.29,0,90.44-.06,7.27,0,13.82,1.83,19.41,6.54a27.25,27.25,0,0,1,10.14,22.21,28.16,28.16,0,0,1-25.38,27.6,43.18,43.18,0,0,1-4.34.08H48.87c-3.65,0-3.65,0-3.65,3.57,0,2.2,0,13.4,0,15.6a9.29,9.29,0,0,0,9.56,9.52c7.15,0,83.48,0,90.66,0\",\n                                        transform: \"translate(-6.49 -4.36)\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            sx: {\n                                display: \"flex\",\n                                flexWrap: \"wrap\",\n                                justifyContent: \"space-between\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Copyright__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProTip__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dmdevelo/Documents/explode_market_web/explodemarket/src/layouts/Footer/Footer.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n};\n_s(Footer, \"Ps3L56Nkp4V39w/on3VdqBB0CrY=\");\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7OENBQzNFLDhEQUFDekQsa0RBQVM7Ozs7d0NBQUc7OENBQ2IsOERBQUNDLCtDQUFNOzs7O3dDQUFHOzs7Ozs7Z0NBQ047Ozs7Ozt3QkFDSTs7Ozs7b0JBQ1I7Ozs7OztZQUNGLENBQ047Q0FDSDtHQS9FdUJHLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0cy9Gb290ZXIvRm9vdGVyLmpzeD83MWY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbXVpL21hdGVyaWFsL0NvbnRhaW5lcic7XG5pbXBvcnQgQ29weXJpZ2h0IGZyb20gJy4uLy4uL0NvcHlyaWdodCc7XG5pbXBvcnQgUHJvVGlwIGZyb20gJy4uLy4uL1Byb1RpcCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZm9vdGVyLm1vZHVsZS5jc3MnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG11aS9tYXRlcmlhbC9TdmdJY29uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICBjb25zdCBwYXRoUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IGZpcmV3b3JrcyA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBsZW5ndGggPSBwYXRoUmVmLmN1cnJlbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgcGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hvZmZzZXQgPSBsZW5ndGg7XG4gIHBhdGhSZWYuY3VycmVudC5zdHJva2VEYXNoYXJyYXkgPSBsZW5ndGg7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAod2luZG93ICYmIHdpbmRvdykuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZmlsbE9uU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgKHdpbmRvdyAmJiB3aW5kb3cpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZpbGxPblNjcm9sbCk7XG4gICAgfVxuICB9LCBbXSk7XG4gIFxuICBmdW5jdGlvbiBmaWxsT25TY3JvbGwoKSB7XG4gICAgXG4gICAgLy8gVGhpcyBsb25nIGNhbGN1bGF0aW9uIGlzIGp1c3QgbmVlZGVkIHRvIGZpbmQgb3V0IHRoZSBwZXJjZW50YWdlIG9mIHRoZSB3ZWJwYWdlIHRoYXQgaGFzIGJlZW4gc2Nyb2xsZWQuXG4gICAgLy8gWW91IGRvbid0IG5lZWQgdG8gd29ycnkgYWJvdXQgaXQgbXVjaC4gQ2FuIGJlIHVzZWQgYXMgaXMgYWxsIHRoZSB0aW1lLlxuICAgIHZhciBzY3JvbGxwZXJjZW50ID0gKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCkgLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuXG4gICAgLy8gU2V0cyBkcmF3IHRvICh0aGUgcHJvZ3Jlc3Mgb2Ygc2Nyb2xsIG11bHRpcGxpZWQgYnkgdGhlIGxlbmd0aCkgdG8gZmluZCBleGFjdCBvZmZzZXQuXG4gICAgdmFyIGRyYXcgPSBsZW5ndGggKiBzY3JvbGxwZXJjZW50O1xuICAgIC8vIEluIGRvd253YXJkIHNjcm9sbCwgc2ltcGx5IGRlY3JlYXNlcyB0aGUgc3Ryb2tlRGFzaE9mZnNldCBncmFkdWFsbHkgdG93YXJkcyB6ZXJvLlxuICAgIC8vIFJldmVyc2UgdGhlIGRyYXdpbmcgKHdoZW4gc2Nyb2xsaW5nIHVwd2FyZHMpXG4gICAgcGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hvZmZzZXQgPSBsZW5ndGggLSBkcmF3O1xuXG4gICAgLy8gRmFuY3kgc3R1ZmYgdG8gc2hvdyBmaXJld29ya3Mgd2hlbiBzdmcgY29tcGxldGVzIHN0cm9rZSBmaWxsaW5nIChzdHJva2VEYXNoT2Zmc2V0ID0gMClcbiAgICBpZiAocGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hvZmZzZXQgPD0gMCkge1xuICAgICAgY29uc29sZS5sb2cocGF0aFJlZi5jdXJyZW50LnN0cm9rZURhc2hvZmZzZXQgPD0gMCwgc3R5bGVzLnB5cm8pXG4gICAgICBmaXJld29ya3MuY3VycmVudC5jbGFzc0xpc3QuYWRkKCdweXJvJylcbiAgICAgICAgaWYgKCFmaXJld29ya3MuY3VycmVudCkge1xuICAgICAgICAgIGZpcmV3b3Jrcy5jdXJyZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVzLnB5cm8pXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZmlyZXdvcmtzLmN1cnJlbnQpIHtcbiAgICAgICAgICBmaXJld29ya3MuY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5weXJvKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRyYXcsIGxlbmd0aClcbn1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbXBvbmVudD1cImZvb3RlclwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9XG4gICAgICBzeD17e1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIG10OiAnYXV0bycsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDc3NCYXNlbGluZSAvPlxuICAgICAgPEJveFxuICAgICAgICBzeD17e1xuICAgICAgICAgIHB5OiAzLFxuICAgICAgICAgIG10OiAnYXV0bydcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cIm1kXCI+XG4gICAgICAgICAgPGRpdiByZWY9e2ZpcmV3b3Jrc30gaWQ9XCJmaXJld29ya3NcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJlZm9yZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWZ0ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT0ncGFyZW50RGl2Jz5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPSdzdmdEaXYnIHN4PXt7cG9zaXRpb246ICdmaXhlZCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzMwMHB4J319PlxuICAgICAgICAgICAgICA8U3ZnSWNvbiBpZD1cIkxheWVyXzFcIiB2aWV3Qm94PVwiMCAwIDIzNy45OSAyOTMuMzVcIiBzeD17e2ZpbGw6ICdub25lJywgc3Ryb2tlTWl0ZXJsaW1pdDogMTAsIHN0cm9rZVdpZHRoOiAnOHB4Jywgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiAnMzAwcHgnLCBwb3NpdGlvbjogJ2Fic29sdXRlJ319PlxuICAgICAgICAgICAgICA8cGF0aCBmaWxsIHN0cm9rZURhc2hvZmZzZXQgcmVmPXtwYXRoUmVmfSBjbGFzcz1cImNscy0xXCIgZD1cIk0xMC41LDE5NS4zNnEwLDI2LjQ3LDAsNTIuOTQsMCw4Ljc2LDAsMTcuNTNjMCwxMy44NSw5LDI0LjcsMjIuNTUsMjcuNGEyMy4xOCwyMy4xOCwwLDAsMCw0LjQ4LjQzYzMyLjM0LDAsNjQuNjkuMTUsOTctLjA5LDE3LjgzLS4xMywzNS4zMS0yLjgsNTItOS41NiwxOC4zMy03LjQ0LDMzLjIxLTE5LDQzLjEzLTM2LjQyYTgyLjcyLDgyLjcyLDAsMCwwLDEwLjI5LTMzYzIuNjItMjUuNi01LjYxLTQ3Ljc1LTIxLjMyLTY3LjUyLTEuNjYtMi4wOS0zLjI1LTQtMy02LjkxYTkuNzEsOS43MSwwLDAsMSwuOTQtMy4zLDE0MS41NiwxNDEuNTYsMCwwLDAsMTAuNjctMzMsNzYuNDgsNzYuNDgsMCwwLDAsLjUtMjEuNiw3OS43NSw3OS43NSwwLDAsMC05LjM5LTMwLjc0Yy04LTE0LjUtMTkuODUtMjQuOTQtMzQuNjUtMzIuMTJhMTEwLjI3LDExMC4yNywwLDAsMC0zNi44Ni0xMC4xLDE4MS43OCwxODEuNzgsMCwwLDAtMTkuMjItMXEtNTcuNDYsMC0xMTQuOTEsMGMtMS42NSwwLTIuMjQuMjUtMi4yNCwyLjEyLjA3LDM3LjksMCw3NS44LjA3LDExMy43LDAsMTAsLjk0LDIwLDQuOCwyOS4zOCw1LjY1LDEzLjc4LDE2LDIxLjMsMzAuNjcsMjMuMiw0LjEuNTMsOC4xOS4wOCwxMi4yOS4wN3E0Ny0uMTEsOTQuMDgsMGMxNC4wNywwLDI1LjU5LDguODksMjguNjIsMjIuMTRBMjgsMjgsMCwwLDEsMTU3LjI5LDIzM2EzOC40MywzOC40MywwLDAsMS00LjgzLjNxLTUyLjYsMC0xMDUuMTksMGMtMS42NSwwLTIuMTQuMzUtMi4wOSwyLjA2LjEzLDQuNzQsMCw5LjQ5LDAsMTQuMjMsMCw1LjgxLDMuNjMsOS40Myw5LjQxLDkuNDMsMjYuMTUsMCw1Mi4zMS4wOSw3OC40Ni0uMDUsMTQuMDYtLjA4LDI3Ljg5LTEuODksNDEtNy4yOSwxMC40Ni00LjMsMTkuMzQtMTAuNjUsMjUuMTUtMjAuNjEsNS4yMi04Ljk0LDcuMDctMTguNyw2LjQ2LTI5LTEtMTcuNzItMTAuNzEtMjkuNzQtMjUuNDEtMzguNDJhODMuNyw4My43LDAsMCwwLTE3Ljg4LTcuODNjLTMuNTYtMS4xLTYuMTItMy4yNS03LjE0LTYuOWE5LjUzLDkuNTMsMCwwLDEsNi4yOS0xMS43NCw1Ny4yNyw1Ny4yNywwLDAsMCwxMi40Ny01LjVjMTAuNi02LjY0LDE2LjU0LTE2LjM3LDE4LjY0LTI4LjUzLDEuNjQtOS41MywxLjM1LTE5LTEuODUtMjguMjMtNC40LTEyLjY2LTEzLjQ2LTIwLjg4LTI1LjYyLTI1LjlhNzcuNTcsNzcuNTcsMCwwLDAtMjYuNDYtNS41OWMtMjAuMTItLjg2LTQwLjI2LS4yMS02MC4zOS0uMzZDNjgsNDMsNTcuNTUsNDMuMSw0Ny4xMyw0M2MtMS40NCwwLTIsLjIzLTIsMS44NS4xMiw1LjMyLjExLDEwLjY1LDAsMTYsMCwxLjU3LjQ1LDEuOTEsMS45NCwxLjkxLDMwLjE1LDAsNjAuMjksMCw5MC40NC0uMDYsNy4yNywwLDEzLjgyLDEuODMsMTkuNDEsNi41NGEyNy4yNSwyNy4yNSwwLDAsMSwxMC4xNCwyMi4yMSwyOC4xNiwyOC4xNiwwLDAsMS0yNS4zOCwyNy42LDQzLjE4LDQzLjE4LDAsMCwxLTQuMzQuMDhINDguODdjLTMuNjUsMC0zLjY1LDAtMy42NSwzLjU3LDAsMi4yLDAsMTMuNCwwLDE1LjZhOS4yOSw5LjI5LDAsMCwwLDkuNTYsOS41MmM3LjE1LDAsODMuNDgsMCw5MC42NiwwXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC02LjQ5IC00LjM2KVwiLz5cbiAgICAgICAgICAgICAgPC9TdmdJY29uPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBzeD17e2Rpc3BsYXk6ICdmbGV4JywgZmxleFdyYXA6ICd3cmFwJywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ319PlxuICAgICAgICAgICAgPENvcHlyaWdodCAvPlxuICAgICAgICAgICAgPFByb1RpcCAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ3NzQmFzZWxpbmUiLCJCb3giLCJDb250YWluZXIiLCJDb3B5cmlnaHQiLCJQcm9UaXAiLCJzdHlsZXMiLCJTdmdJY29uIiwiRm9vdGVyIiwiZmlsbE9uU2Nyb2xsIiwic2Nyb2xscGVyY2VudCIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImRyYXciLCJsZW5ndGgiLCJwYXRoUmVmIiwiY3VycmVudCIsInN0cm9rZURhc2hvZmZzZXQiLCJjb25zb2xlIiwibG9nIiwicHlybyIsImZpcmV3b3JrcyIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInVzZVJlZiIsImdldFRvdGFsTGVuZ3RoIiwic3Ryb2tlRGFzaGFycmF5IiwidXNlRWZmZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wb25lbnQiLCJjbGFzc05hbWUiLCJmb290ZXIiLCJzeCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWluSGVpZ2h0IiwibXQiLCJweSIsIm1heFdpZHRoIiwiZGl2IiwicmVmIiwiaWQiLCJjbGFzcyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VXaWR0aCIsInBhdGgiLCJkIiwidHJhbnNmb3JtIiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/Footer/Footer.jsx\n"));

/***/ })

});