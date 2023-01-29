function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire46ec"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire46ec"] = parcelRequire;
}
parcelRequire.register("lFyHo", function(module, exports) {

var $8IbkU = parcelRequire("8IbkU");
let tabsBtn = [
    ...document[0, $8IbkU._querySelectorAll](".tabs__btn")
];
let tabsContent = [
    ...document[0, $8IbkU._querySelectorAll](".tabs__panel")
];
if (tabsBtn.length <= 0) return;
for(let i = 0; i < tabsBtn.length; i += 1){
    tabsBtn[i].index = i;
    tabsBtn[i].addEventListener("click", tabSwitcher);
}
function tabSwitcher() {
    tabsBtn.forEach((item)=>item.classList.remove("tabs__btn--active"));
    tabsContent.forEach((item)=>item.classList.remove("tabs__panel--active"));
    tabsContent[this.index].classList.add("tabs__panel--active");
    this.classList.add("tabs__btn--active");
}

});
parcelRequire.register("8IbkU", function(module, exports) {

$parcel$export(module.exports, "_classList", function () { return $657b39eb6ff3d6b0$export$5ccb867f293e3c4c; });
$parcel$export(module.exports, "_add", function () { return $657b39eb6ff3d6b0$export$eb19ebbec1ff9510; });
$parcel$export(module.exports, "_remove", function () { return $657b39eb6ff3d6b0$export$7be779bc7f76622c; });
$parcel$export(module.exports, "_toggle", function () { return $657b39eb6ff3d6b0$export$4b515c6f72c0fb7e; });
$parcel$export(module.exports, "_querySelectorAll", function () { return $657b39eb6ff3d6b0$export$7a240564ed1f29c7; });
$parcel$export(module.exports, "_querySelector", function () { return $657b39eb6ff3d6b0$export$242934abc2863db9; });
const $657b39eb6ff3d6b0$export$c6742064fd272eef = "document", $657b39eb6ff3d6b0$export$5ccb867f293e3c4c = "classList", $657b39eb6ff3d6b0$export$eb19ebbec1ff9510 = "add", $657b39eb6ff3d6b0$export$7be779bc7f76622c = "remove", $657b39eb6ff3d6b0$export$4b515c6f72c0fb7e = "toggle", $657b39eb6ff3d6b0$export$7a240564ed1f29c7 = "querySelectorAll", $657b39eb6ff3d6b0$export$242934abc2863db9 = "querySelector";

});


function $2186963357a773fd$export$2e2bcd8739ae039(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}


function $7ad5a3c987ebe618$export$45a5e7f76e0caa8d(node) {
    var OwnElement = (0, $2186963357a773fd$export$2e2bcd8739ae039)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function $7ad5a3c987ebe618$export$1b3bfaa9684536aa(node) {
    var OwnElement = (0, $2186963357a773fd$export$2e2bcd8739ae039)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function $7ad5a3c987ebe618$export$af51f0f06c0f328a(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, $2186963357a773fd$export$2e2bcd8739ae039)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}


var $134d1bec891437af$export$8960430cfd85939f = Math.max;
var $134d1bec891437af$export$96ec731ed4dcb222 = Math.min;
var $134d1bec891437af$export$2077e0241d6afd3c = Math.round;



function $0f91b65512306f5e$export$2e2bcd8739ae039() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}


function $8a9a092d131c294d$export$2e2bcd8739ae039() {
    return !/^((?!chrome|android).)*safari/i.test((0, $0f91b65512306f5e$export$2e2bcd8739ae039)());
}


function $aca4b95efd022c4d$export$2e2bcd8739ae039(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, $134d1bec891437af$export$2077e0241d6afd3c)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, $134d1bec891437af$export$2077e0241d6afd3c)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(element) ? (0, $2186963357a773fd$export$2e2bcd8739ae039)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, $8a9a092d131c294d$export$2e2bcd8739ae039)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}



function $6c28e799e40ab0ac$export$2e2bcd8739ae039(node) {
    var win = (0, $2186963357a773fd$export$2e2bcd8739ae039)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}




function $a3707b12570ea368$export$2e2bcd8739ae039(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}


function $111d5294ced87958$export$2e2bcd8739ae039(node) {
    if (node === (0, $2186963357a773fd$export$2e2bcd8739ae039)(node) || !(0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(node)) return (0, $6c28e799e40ab0ac$export$2e2bcd8739ae039)(node);
    else return (0, $a3707b12570ea368$export$2e2bcd8739ae039)(node);
}


function $c18a69ef96056eee$export$2e2bcd8739ae039(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}





function $50a1448958730bb1$export$2e2bcd8739ae039(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}



function $89ca34f7989c3018$export$2e2bcd8739ae039(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)((0, $50a1448958730bb1$export$2e2bcd8739ae039)(element)).left + (0, $6c28e799e40ab0ac$export$2e2bcd8739ae039)(element).scrollLeft;
}




function $7dbd6b4e307d7fd9$export$2e2bcd8739ae039(element) {
    return (0, $2186963357a773fd$export$2e2bcd8739ae039)(element).getComputedStyle(element);
}


function $06e7a3e4b38c7c18$export$2e2bcd8739ae039(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}



function $6a9a472e28a632c8$var$isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, $134d1bec891437af$export$2077e0241d6afd3c)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, $134d1bec891437af$export$2077e0241d6afd3c)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function $6a9a472e28a632c8$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(offsetParent);
    var offsetParentIsScaled = (0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(offsetParent) && $6a9a472e28a632c8$var$isElementScaled(offsetParent);
    var documentElement = (0, $50a1448958730bb1$export$2e2bcd8739ae039)(offsetParent);
    var rect = (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, $06e7a3e4b38c7c18$export$2e2bcd8739ae039)(documentElement)) scroll = (0, $111d5294ced87958$export$2e2bcd8739ae039)(offsetParent);
        if ((0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(offsetParent)) {
            offsets = (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, $89ca34f7989c3018$export$2e2bcd8739ae039)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}



function $48f75a759e2025b3$export$2e2bcd8739ae039(element) {
    var clientRect = (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}





function $52d09c434f9a9519$export$2e2bcd8739ae039(element) {
    if ((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, $7ad5a3c987ebe618$export$af51f0f06c0f328a)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, $50a1448958730bb1$export$2e2bcd8739ae039)(element) // fallback
    );
}





function $028cc45d02a9b18b$export$2e2bcd8739ae039(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(node) && (0, $06e7a3e4b38c7c18$export$2e2bcd8739ae039)(node)) return node;
    return $028cc45d02a9b18b$export$2e2bcd8739ae039((0, $52d09c434f9a9519$export$2e2bcd8739ae039)(node));
}





function $2d37543c0ccf9460$export$2e2bcd8739ae039(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, $028cc45d02a9b18b$export$2e2bcd8739ae039)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, $2186963357a773fd$export$2e2bcd8739ae039)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, $06e7a3e4b38c7c18$export$2e2bcd8739ae039)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat($2d37543c0ccf9460$export$2e2bcd8739ae039((0, $52d09c434f9a9519$export$2e2bcd8739ae039)(target)));
}







function $150683152c3c20a6$export$2e2bcd8739ae039(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(element)) >= 0;
}




function $df6dffa84a1686f9$var$getTrueOffsetParent(element) {
    if (!(0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function $df6dffa84a1686f9$var$getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, $0f91b65512306f5e$export$2e2bcd8739ae039)());
    var isIE = /Trident/i.test((0, $0f91b65512306f5e$export$2e2bcd8739ae039)());
    if (isIE && (0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, $52d09c434f9a9519$export$2e2bcd8739ae039)(element);
    if ((0, $7ad5a3c987ebe618$export$af51f0f06c0f328a)(currentNode)) currentNode = currentNode.host;
    while((0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(currentNode)) < 0){
        var css = (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function $df6dffa84a1686f9$export$2e2bcd8739ae039(element) {
    var window = (0, $2186963357a773fd$export$2e2bcd8739ae039)(element);
    var offsetParent = $df6dffa84a1686f9$var$getTrueOffsetParent(element);
    while(offsetParent && (0, $150683152c3c20a6$export$2e2bcd8739ae039)(offsetParent) && (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(offsetParent).position === "static")offsetParent = $df6dffa84a1686f9$var$getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, $c18a69ef96056eee$export$2e2bcd8739ae039)(offsetParent) === "html" || (0, $c18a69ef96056eee$export$2e2bcd8739ae039)(offsetParent) === "body" && (0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(offsetParent).position === "static")) return window;
    return offsetParent || $df6dffa84a1686f9$var$getContainingBlock(element) || window;
}



var $3232fafb437e5d67$export$1e95b668f3b82d = "top";
var $3232fafb437e5d67$export$40e543e69a8b3fbb = "bottom";
var $3232fafb437e5d67$export$79ffe56a765070d2 = "right";
var $3232fafb437e5d67$export$eabcd2c8791e7bf4 = "left";
var $3232fafb437e5d67$export$dfb5619354ba860 = "auto";
var $3232fafb437e5d67$export$aec2ce47c367b8c3 = [
    $3232fafb437e5d67$export$1e95b668f3b82d,
    $3232fafb437e5d67$export$40e543e69a8b3fbb,
    $3232fafb437e5d67$export$79ffe56a765070d2,
    $3232fafb437e5d67$export$eabcd2c8791e7bf4
];
var $3232fafb437e5d67$export$b3571188c770cc5a = "start";
var $3232fafb437e5d67$export$bd5df0f255a350f8 = "end";
var $3232fafb437e5d67$export$390fd549c5303b4d = "clippingParents";
var $3232fafb437e5d67$export$d7b7311ec04a3e8f = "viewport";
var $3232fafb437e5d67$export$ae5ab1c730825774 = "popper";
var $3232fafb437e5d67$export$ca50aac9f3ba507f = "reference";
var $3232fafb437e5d67$export$368f9a87e87fa4e1 = /*#__PURE__*/ $3232fafb437e5d67$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + $3232fafb437e5d67$export$b3571188c770cc5a,
        placement + "-" + $3232fafb437e5d67$export$bd5df0f255a350f8
    ]);
}, []);
var $3232fafb437e5d67$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($3232fafb437e5d67$export$aec2ce47c367b8c3, [
    $3232fafb437e5d67$export$dfb5619354ba860
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + $3232fafb437e5d67$export$b3571188c770cc5a,
        placement + "-" + $3232fafb437e5d67$export$bd5df0f255a350f8
    ]);
}, []); // modifiers that need to read the DOM
var $3232fafb437e5d67$export$421679a7c3d56e = "beforeRead";
var $3232fafb437e5d67$export$aafa59e2e03f2942 = "read";
var $3232fafb437e5d67$export$6964f6c886723980 = "afterRead"; // pure-logic modifiers
var $3232fafb437e5d67$export$c65e99957a05207c = "beforeMain";
var $3232fafb437e5d67$export$f22da7240b7add18 = "main";
var $3232fafb437e5d67$export$bab79516f2d662fe = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var $3232fafb437e5d67$export$8d4d2d70e7d46032 = "beforeWrite";
var $3232fafb437e5d67$export$68d8715fc104d294 = "write";
var $3232fafb437e5d67$export$70a6e5159acce2e6 = "afterWrite";
var $3232fafb437e5d67$export$d087d3878fdf71d5 = [
    $3232fafb437e5d67$export$421679a7c3d56e,
    $3232fafb437e5d67$export$aafa59e2e03f2942,
    $3232fafb437e5d67$export$6964f6c886723980,
    $3232fafb437e5d67$export$c65e99957a05207c,
    $3232fafb437e5d67$export$f22da7240b7add18,
    $3232fafb437e5d67$export$bab79516f2d662fe,
    $3232fafb437e5d67$export$8d4d2d70e7d46032,
    $3232fafb437e5d67$export$68d8715fc104d294,
    $3232fafb437e5d67$export$70a6e5159acce2e6
];


function $53ee348f0b5b9ff0$var$order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function $53ee348f0b5b9ff0$export$2e2bcd8739ae039(modifiers) {
    // order based on dependencies
    var orderedModifiers = $53ee348f0b5b9ff0$var$order(modifiers); // order based on phase
    return (0, $3232fafb437e5d67$export$d087d3878fdf71d5).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}


function $6d9c522f6f12e8b1$export$2e2bcd8739ae039(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}





function $e879aab1f2573629$export$2e2bcd8739ae039(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}





var $1265665ef725117c$var$INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var $1265665ef725117c$var$INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var $1265665ef725117c$var$DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function $1265665ef725117c$var$areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function $1265665ef725117c$export$ed5e13716264f202(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $1265665ef725117c$var$DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, $1265665ef725117c$var$DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(reference) ? (0, $2d37543c0ccf9460$export$2e2bcd8739ae039)(reference) : reference.contextElement ? (0, $2d37543c0ccf9460$export$2e2bcd8739ae039)(reference.contextElement) : [],
                    popper: (0, $2d37543c0ccf9460$export$2e2bcd8739ae039)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, $53ee348f0b5b9ff0$export$2e2bcd8739ae039)((0, $e879aab1f2573629$export$2e2bcd8739ae039)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers, _ref, name, flipModifier, _ref2, name1, _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, margin;
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!$1265665ef725117c$var$areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, $6a9a472e28a632c8$export$2e2bcd8739ae039)(reference, (0, $df6dffa84a1686f9$export$2e2bcd8739ae039)(popper), state.options.strategy === "fixed"),
                    popper: (0, $48f75a759e2025b3$export$2e2bcd8739ae039)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, $6d9c522f6f12e8b1$export$2e2bcd8739ae039)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!$1265665ef725117c$var$areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {} : _ref3$options, effect = _ref3.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var $1265665ef725117c$export$8f7491d57c8f97a9 = /*#__PURE__*/ $1265665ef725117c$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules



var $cf0c0868b3cd37d6$var$passive = {
    passive: true
};
function $cf0c0868b3cd37d6$var$effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, $2186963357a773fd$export$2e2bcd8739ae039)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, $cf0c0868b3cd37d6$var$passive);
    });
    if (resize) window.addEventListener("resize", instance.update, $cf0c0868b3cd37d6$var$passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, $cf0c0868b3cd37d6$var$passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, $cf0c0868b3cd37d6$var$passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var $cf0c0868b3cd37d6$export$2e2bcd8739ae039 = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: $cf0c0868b3cd37d6$var$effect,
    data: {}
};



function $e0624b2d298657e0$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[0];
}


function $f93967510e7536fc$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[1];
}


function $0f7c2ffbf2b81462$export$2e2bcd8739ae039(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}



function $5d215fe0c35fc404$export$2e2bcd8739ae039(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement) : null;
    var variation = placement ? (0, $f93967510e7536fc$export$2e2bcd8739ae039)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, $3232fafb437e5d67$export$1e95b668f3b82d:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, $3232fafb437e5d67$export$40e543e69a8b3fbb:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, $3232fafb437e5d67$export$79ffe56a765070d2:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, $3232fafb437e5d67$export$eabcd2c8791e7bf4:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, $0f7c2ffbf2b81462$export$2e2bcd8739ae039)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, $3232fafb437e5d67$export$b3571188c770cc5a:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, $3232fafb437e5d67$export$bd5df0f255a350f8:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}


function $0d6a0f2c06e5fa4d$var$popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, $5d215fe0c35fc404$export$2e2bcd8739ae039)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $0d6a0f2c06e5fa4d$export$2e2bcd8739ae039 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: $0d6a0f2c06e5fa4d$var$popperOffsets,
    data: {}
};










var $fe8b309bf6df1d85$var$unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $fe8b309bf6df1d85$var$roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, $134d1bec891437af$export$2077e0241d6afd3c)(x * dpr) / dpr || 0,
        y: (0, $134d1bec891437af$export$2077e0241d6afd3c)(y * dpr) / dpr || 0
    };
}
function $fe8b309bf6df1d85$export$378fa78a8fea596f(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4);
    var sideY = (0, $3232fafb437e5d67$export$1e95b668f3b82d);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, $df6dffa84a1686f9$export$2e2bcd8739ae039)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, $2186963357a773fd$export$2e2bcd8739ae039)(popper)) {
            offsetParent = (0, $50a1448958730bb1$export$2e2bcd8739ae039)(popper);
            if ((0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, $3232fafb437e5d67$export$1e95b668f3b82d) || (placement === (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4) || placement === (0, $3232fafb437e5d67$export$79ffe56a765070d2)) && variation === (0, $3232fafb437e5d67$export$bd5df0f255a350f8)) {
            sideY = (0, $3232fafb437e5d67$export$40e543e69a8b3fbb);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4) || (placement === (0, $3232fafb437e5d67$export$1e95b668f3b82d) || placement === (0, $3232fafb437e5d67$export$40e543e69a8b3fbb)) && variation === (0, $3232fafb437e5d67$export$bd5df0f255a350f8)) {
            sideX = (0, $3232fafb437e5d67$export$79ffe56a765070d2);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && $fe8b309bf6df1d85$var$unsetSides);
    var _ref4 = roundOffsets === true ? $fe8b309bf6df1d85$var$roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function $fe8b309bf6df1d85$var$computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty, property;
    var commonStyles = {
        placement: (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(state.placement),
        variation: (0, $f93967510e7536fc$export$2e2bcd8739ae039)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, $fe8b309bf6df1d85$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, $fe8b309bf6df1d85$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $fe8b309bf6df1d85$export$2e2bcd8739ae039 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: $fe8b309bf6df1d85$var$computeStyles,
    data: {}
};




// and applies them to the HTMLElements such as popper and arrow
function $4fe326cf0e147e5b$var$applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element) || !(0, $c18a69ef96056eee$export$2e2bcd8739ae039)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function $4fe326cf0e147e5b$var$effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element) || !(0, $c18a69ef96056eee$export$2e2bcd8739ae039)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var $4fe326cf0e147e5b$export$2e2bcd8739ae039 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: $4fe326cf0e147e5b$var$applyStyles,
    effect: $4fe326cf0e147e5b$var$effect,
    requires: [
        "computeStyles"
    ]
};




function $b0a0d32fe193c355$export$7fa02d8595b015ed(placement, rects, offset) {
    var basePlacement = (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement);
    var invertDistance = [
        (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4),
        (0, $3232fafb437e5d67$export$1e95b668f3b82d)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4),
        (0, $3232fafb437e5d67$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function $b0a0d32fe193c355$var$offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, $3232fafb437e5d67$export$803cd8101b6c182b).reduce(function(acc, placement) {
        acc[placement] = $b0a0d32fe193c355$export$7fa02d8595b015ed(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $b0a0d32fe193c355$export$2e2bcd8739ae039 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: $b0a0d32fe193c355$var$offset
};


var $08aaaefba6370442$var$hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function $08aaaefba6370442$export$2e2bcd8739ae039(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return $08aaaefba6370442$var$hash[matched];
    });
}



var $e3ebadfba05aa48a$var$hash = {
    start: "end",
    end: "start"
};
function $e3ebadfba05aa48a$export$2e2bcd8739ae039(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return $e3ebadfba05aa48a$var$hash[matched];
    });
}







function $ced099b71281b88a$export$2e2bcd8739ae039(element, strategy) {
    var win = (0, $2186963357a773fd$export$2e2bcd8739ae039)(element);
    var html = (0, $50a1448958730bb1$export$2e2bcd8739ae039)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, $8a9a092d131c294d$export$2e2bcd8739ae039)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, $89ca34f7989c3018$export$2e2bcd8739ae039)(element),
        y: y
    };
}







function $6f3cee4c853e89bd$export$2e2bcd8739ae039(element) {
    var _element$ownerDocumen;
    var html = (0, $50a1448958730bb1$export$2e2bcd8739ae039)(element);
    var winScroll = (0, $6c28e799e40ab0ac$export$2e2bcd8739ae039)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, $134d1bec891437af$export$8960430cfd85939f)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, $134d1bec891437af$export$8960430cfd85939f)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, $89ca34f7989c3018$export$2e2bcd8739ae039)(element);
    var y = -winScroll.scrollTop;
    if ((0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(body || html).direction === "rtl") x += (0, $134d1bec891437af$export$8960430cfd85939f)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}










function $da41c7acf8721ea1$export$2e2bcd8739ae039(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, $7ad5a3c987ebe618$export$af51f0f06c0f328a)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}



function $d3b676394d23a7f9$export$2e2bcd8739ae039(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}



function $d13e17ed0d55782c$var$getInnerBoundingClientRect(element, strategy) {
    var rect = (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function $d13e17ed0d55782c$var$getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, $3232fafb437e5d67$export$d7b7311ec04a3e8f) ? (0, $d3b676394d23a7f9$export$2e2bcd8739ae039)((0, $ced099b71281b88a$export$2e2bcd8739ae039)(element, strategy)) : (0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(clippingParent) ? $d13e17ed0d55782c$var$getInnerBoundingClientRect(clippingParent, strategy) : (0, $d3b676394d23a7f9$export$2e2bcd8739ae039)((0, $6f3cee4c853e89bd$export$2e2bcd8739ae039)((0, $50a1448958730bb1$export$2e2bcd8739ae039)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function $d13e17ed0d55782c$var$getClippingParents(element) {
    var clippingParents = (0, $2d37543c0ccf9460$export$2e2bcd8739ae039)((0, $52d09c434f9a9519$export$2e2bcd8739ae039)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, $7dbd6b4e307d7fd9$export$2e2bcd8739ae039)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, $7ad5a3c987ebe618$export$1b3bfaa9684536aa)(element) ? (0, $df6dffa84a1686f9$export$2e2bcd8739ae039)(element) : element;
    if (!(0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(clippingParent) && (0, $da41c7acf8721ea1$export$2e2bcd8739ae039)(clippingParent, clipperElement) && (0, $c18a69ef96056eee$export$2e2bcd8739ae039)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function $d13e17ed0d55782c$export$2e2bcd8739ae039(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? $d13e17ed0d55782c$var$getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = $d13e17ed0d55782c$var$getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, $134d1bec891437af$export$8960430cfd85939f)(rect.top, accRect.top);
        accRect.right = (0, $134d1bec891437af$export$96ec731ed4dcb222)(rect.right, accRect.right);
        accRect.bottom = (0, $134d1bec891437af$export$96ec731ed4dcb222)(rect.bottom, accRect.bottom);
        accRect.left = (0, $134d1bec891437af$export$8960430cfd85939f)(rect.left, accRect.left);
        return accRect;
    }, $d13e17ed0d55782c$var$getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}








function $9f599d50312205da$export$2e2bcd8739ae039() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}


function $43a29968aa106f8c$export$2e2bcd8739ae039(paddingObject) {
    return Object.assign({}, (0, $9f599d50312205da$export$2e2bcd8739ae039)(), paddingObject);
}


function $233b2808d38d9316$export$2e2bcd8739ae039(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}


function $ccb582e464db0f80$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, $3232fafb437e5d67$export$390fd549c5303b4d) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, $3232fafb437e5d67$export$d7b7311ec04a3e8f) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, $3232fafb437e5d67$export$ae5ab1c730825774) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, $43a29968aa106f8c$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $233b2808d38d9316$export$2e2bcd8739ae039)(padding, (0, $3232fafb437e5d67$export$aec2ce47c367b8c3)));
    var altContext = elementContext === (0, $3232fafb437e5d67$export$ae5ab1c730825774) ? (0, $3232fafb437e5d67$export$ca50aac9f3ba507f) : (0, $3232fafb437e5d67$export$ae5ab1c730825774);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, $d13e17ed0d55782c$export$2e2bcd8739ae039)((0, $7ad5a3c987ebe618$export$45a5e7f76e0caa8d)(element) ? element : element.contextElement || (0, $50a1448958730bb1$export$2e2bcd8739ae039)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, $aca4b95efd022c4d$export$2e2bcd8739ae039)(state.elements.reference);
    var popperOffsets = (0, $5d215fe0c35fc404$export$2e2bcd8739ae039)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, $d3b676394d23a7f9$export$2e2bcd8739ae039)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, $3232fafb437e5d67$export$ae5ab1c730825774) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, $3232fafb437e5d67$export$ae5ab1c730825774) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, $3232fafb437e5d67$export$79ffe56a765070d2),
                (0, $3232fafb437e5d67$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, $3232fafb437e5d67$export$1e95b668f3b82d),
                (0, $3232fafb437e5d67$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}






function $62caf38945fdd475$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, $3232fafb437e5d67$export$803cd8101b6c182b) : _options$allowedAutoP;
    var variation = (0, $f93967510e7536fc$export$2e2bcd8739ae039)(placement);
    var placements = variation ? flipVariations ? (0, $3232fafb437e5d67$export$368f9a87e87fa4e1) : (0, $3232fafb437e5d67$export$368f9a87e87fa4e1).filter(function(placement) {
        return (0, $f93967510e7536fc$export$2e2bcd8739ae039)(placement) === variation;
    }) : (0, $3232fafb437e5d67$export$aec2ce47c367b8c3);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, $ccb582e464db0f80$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}




function $2f35e3a92d618cd0$var$getExpandedFallbackPlacements(placement) {
    if ((0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement) === (0, $3232fafb437e5d67$export$dfb5619354ba860)) return [];
    var oppositePlacement = (0, $08aaaefba6370442$export$2e2bcd8739ae039)(placement);
    return [
        (0, $e3ebadfba05aa48a$export$2e2bcd8739ae039)(placement),
        oppositePlacement,
        (0, $e3ebadfba05aa48a$export$2e2bcd8739ae039)(oppositePlacement)
    ];
}
function $2f35e3a92d618cd0$var$flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, $08aaaefba6370442$export$2e2bcd8739ae039)(preferredPlacement)
    ] : $2f35e3a92d618cd0$var$getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement) === (0, $3232fafb437e5d67$export$dfb5619354ba860) ? (0, $62caf38945fdd475$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(placement);
        var isStartVariation = (0, $f93967510e7536fc$export$2e2bcd8739ae039)(placement) === (0, $3232fafb437e5d67$export$b3571188c770cc5a);
        var isVertical = [
            (0, $3232fafb437e5d67$export$1e95b668f3b82d),
            (0, $3232fafb437e5d67$export$40e543e69a8b3fbb)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, $ccb582e464db0f80$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, $3232fafb437e5d67$export$79ffe56a765070d2) : (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4) : isStartVariation ? (0, $3232fafb437e5d67$export$40e543e69a8b3fbb) : (0, $3232fafb437e5d67$export$1e95b668f3b82d);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, $08aaaefba6370442$export$2e2bcd8739ae039)(mainVariationSide);
        var altVariationSide = (0, $08aaaefba6370442$export$2e2bcd8739ae039)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var $2f35e3a92d618cd0$export$2e2bcd8739ae039 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: $2f35e3a92d618cd0$var$flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};





function $456b9cd6c767df3e$export$2e2bcd8739ae039(axis) {
    return axis === "x" ? "y" : "x";
}



function $2f038738cc2bba5c$export$f28d906d67a997f3(min, value, max) {
    return (0, $134d1bec891437af$export$8960430cfd85939f)(min, (0, $134d1bec891437af$export$96ec731ed4dcb222)(value, max));
}
function $2f038738cc2bba5c$export$86c8af6d3ef0b4a(min, value, max) {
    var v = $2f038738cc2bba5c$export$f28d906d67a997f3(min, value, max);
    return v > max ? max : v;
}








function $2850c178ef3cb735$var$preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, $ccb582e464db0f80$export$2e2bcd8739ae039)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(state.placement);
    var variation = (0, $f93967510e7536fc$export$2e2bcd8739ae039)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, $0f7c2ffbf2b81462$export$2e2bcd8739ae039)(basePlacement);
    var altAxis = (0, $456b9cd6c767df3e$export$2e2bcd8739ae039)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, $3232fafb437e5d67$export$1e95b668f3b82d) : (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4);
        var altSide = mainAxis === "y" ? (0, $3232fafb437e5d67$export$40e543e69a8b3fbb) : (0, $3232fafb437e5d67$export$79ffe56a765070d2);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, $3232fafb437e5d67$export$b3571188c770cc5a) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, $3232fafb437e5d67$export$b3571188c770cc5a) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, $48f75a759e2025b3$export$2e2bcd8739ae039)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, $9f599d50312205da$export$2e2bcd8739ae039)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, $2f038738cc2bba5c$export$f28d906d67a997f3)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, $df6dffa84a1686f9$export$2e2bcd8739ae039)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, $2f038738cc2bba5c$export$f28d906d67a997f3)(tether ? (0, $134d1bec891437af$export$96ec731ed4dcb222)(min, tetherMin) : min, offset, tether ? (0, $134d1bec891437af$export$8960430cfd85939f)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, $3232fafb437e5d67$export$1e95b668f3b82d) : (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4);
        var _altSide = mainAxis === "x" ? (0, $3232fafb437e5d67$export$40e543e69a8b3fbb) : (0, $3232fafb437e5d67$export$79ffe56a765070d2);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, $3232fafb437e5d67$export$1e95b668f3b82d),
            (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, $2f038738cc2bba5c$export$86c8af6d3ef0b4a)(_tetherMin, _offset, _tetherMax) : (0, $2f038738cc2bba5c$export$f28d906d67a997f3)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $2850c178ef3cb735$export$2e2bcd8739ae039 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: $2850c178ef3cb735$var$preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};












var $c7508bcefcf93b20$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, $43a29968aa106f8c$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $233b2808d38d9316$export$2e2bcd8739ae039)(padding, (0, $3232fafb437e5d67$export$aec2ce47c367b8c3)));
};
function $c7508bcefcf93b20$var$arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, $e0624b2d298657e0$export$2e2bcd8739ae039)(state.placement);
    var axis = (0, $0f7c2ffbf2b81462$export$2e2bcd8739ae039)(basePlacement);
    var isVertical = [
        (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4),
        (0, $3232fafb437e5d67$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = $c7508bcefcf93b20$var$toPaddingObject(options.padding, state);
    var arrowRect = (0, $48f75a759e2025b3$export$2e2bcd8739ae039)(arrowElement);
    var minProp = axis === "y" ? (0, $3232fafb437e5d67$export$1e95b668f3b82d) : (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4);
    var maxProp = axis === "y" ? (0, $3232fafb437e5d67$export$40e543e69a8b3fbb) : (0, $3232fafb437e5d67$export$79ffe56a765070d2);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, $df6dffa84a1686f9$export$2e2bcd8739ae039)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, $2f038738cc2bba5c$export$f28d906d67a997f3)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function $c7508bcefcf93b20$var$effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, $da41c7acf8721ea1$export$2e2bcd8739ae039)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var $c7508bcefcf93b20$export$2e2bcd8739ae039 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: $c7508bcefcf93b20$var$arrow,
    effect: $c7508bcefcf93b20$var$effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};




function $83f857badd77c3c0$var$getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function $83f857badd77c3c0$var$isAnySideFullyClipped(overflow) {
    return [
        (0, $3232fafb437e5d67$export$1e95b668f3b82d),
        (0, $3232fafb437e5d67$export$79ffe56a765070d2),
        (0, $3232fafb437e5d67$export$40e543e69a8b3fbb),
        (0, $3232fafb437e5d67$export$eabcd2c8791e7bf4)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function $83f857badd77c3c0$var$hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, $ccb582e464db0f80$export$2e2bcd8739ae039)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, $ccb582e464db0f80$export$2e2bcd8739ae039)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = $83f857badd77c3c0$var$getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = $83f857badd77c3c0$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = $83f857badd77c3c0$var$isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = $83f857badd77c3c0$var$isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var $83f857badd77c3c0$export$2e2bcd8739ae039 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: $83f857badd77c3c0$var$hide
};




var $0c9ce6cb9babc32b$export$d34966752335dd47 = [
    (0, $cf0c0868b3cd37d6$export$2e2bcd8739ae039),
    (0, $0d6a0f2c06e5fa4d$export$2e2bcd8739ae039),
    (0, $fe8b309bf6df1d85$export$2e2bcd8739ae039),
    (0, $4fe326cf0e147e5b$export$2e2bcd8739ae039),
    (0, $b0a0d32fe193c355$export$2e2bcd8739ae039),
    (0, $2f35e3a92d618cd0$export$2e2bcd8739ae039),
    (0, $2850c178ef3cb735$export$2e2bcd8739ae039),
    (0, $c7508bcefcf93b20$export$2e2bcd8739ae039),
    (0, $83f857badd77c3c0$export$2e2bcd8739ae039)
];
var $0c9ce6cb9babc32b$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $1265665ef725117c$export$ed5e13716264f202)({
    defaultModifiers: $0c9ce6cb9babc32b$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules


/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */ function $02c44a70162568c4$var$applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesAllowlist = {
        text: true,
        search: true,
        url: true,
        tel: true,
        email: true,
        password: true,
        number: true,
        date: true,
        month: true,
        week: true,
        time: true,
        datetime: true,
        "datetime-local": true
    };
    /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */ function isValidFocusTarget(el) {
        if (el && el !== document && el.nodeName !== "HTML" && el.nodeName !== "BODY" && "classList" in el && "contains" in el.classList) return true;
        return false;
    }
    /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */ function focusTriggersKeyboardModality(el) {
        var type = el.type;
        var tagName = el.tagName;
        if (tagName === "INPUT" && inputTypesAllowlist[type] && !el.readOnly) return true;
        if (tagName === "TEXTAREA" && !el.readOnly) return true;
        if (el.isContentEditable) return true;
        return false;
    }
    /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */ function addFocusVisibleClass(el) {
        if (el.classList.contains("focus-visible")) return;
        el.classList.add("focus-visible");
        el.setAttribute("data-focus-visible-added", "");
    }
    /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */ function removeFocusVisibleClass(el) {
        if (!el.hasAttribute("data-focus-visible-added")) return;
        el.classList.remove("focus-visible");
        el.removeAttribute("data-focus-visible-added");
    }
    /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */ function onKeyDown(e) {
        if (e.metaKey || e.altKey || e.ctrlKey) return;
        if (isValidFocusTarget(scope.activeElement)) addFocusVisibleClass(scope.activeElement);
        hadKeyboardEvent = true;
    }
    /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */ function onPointerDown(e) {
        hadKeyboardEvent = false;
    }
    /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */ function onFocus(e) {
        // Prevent IE from focusing the document or HTML element.
        if (!isValidFocusTarget(e.target)) return;
        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) addFocusVisibleClass(e.target);
    }
    /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */ function onBlur(e) {
        if (!isValidFocusTarget(e.target)) return;
        if (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) {
            // To detect a tab/window switch, we look for a blur event followed
            // rapidly by a visibility change.
            // If we don't see a visibility change within 100ms, it's probably a
            // regular focus change.
            hadFocusVisibleRecently = true;
            window.clearTimeout(hadFocusVisibleRecentlyTimeout);
            hadFocusVisibleRecentlyTimeout = window.setTimeout(function() {
                hadFocusVisibleRecently = false;
            }, 100);
            removeFocusVisibleClass(e.target);
        }
    }
    /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */ function onVisibilityChange(e) {
        if (document.visibilityState === "hidden") {
            // If the tab becomes active again, the browser will handle calling focus
            // on the element (Safari actually calls it twice).
            // If this tab change caused a blur on an element with focus-visible,
            // re-apply the class when the user switches back to the tab.
            if (hadFocusVisibleRecently) hadKeyboardEvent = true;
            addInitialPointerMoveListeners();
        }
    }
    /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */ function addInitialPointerMoveListeners() {
        document.addEventListener("mousemove", onInitialPointerMove);
        document.addEventListener("mousedown", onInitialPointerMove);
        document.addEventListener("mouseup", onInitialPointerMove);
        document.addEventListener("pointermove", onInitialPointerMove);
        document.addEventListener("pointerdown", onInitialPointerMove);
        document.addEventListener("pointerup", onInitialPointerMove);
        document.addEventListener("touchmove", onInitialPointerMove);
        document.addEventListener("touchstart", onInitialPointerMove);
        document.addEventListener("touchend", onInitialPointerMove);
    }
    function removeInitialPointerMoveListeners() {
        document.removeEventListener("mousemove", onInitialPointerMove);
        document.removeEventListener("mousedown", onInitialPointerMove);
        document.removeEventListener("mouseup", onInitialPointerMove);
        document.removeEventListener("pointermove", onInitialPointerMove);
        document.removeEventListener("pointerdown", onInitialPointerMove);
        document.removeEventListener("pointerup", onInitialPointerMove);
        document.removeEventListener("touchmove", onInitialPointerMove);
        document.removeEventListener("touchstart", onInitialPointerMove);
        document.removeEventListener("touchend", onInitialPointerMove);
    }
    /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */ function onInitialPointerMove(e) {
        // Work around a Safari quirk that fires a mousemove on <html> whenever the
        // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
        if (e.target.nodeName && e.target.nodeName.toLowerCase() === "html") return;
        hadKeyboardEvent = false;
        removeInitialPointerMoveListeners();
    }
    // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
    document.addEventListener("keydown", onKeyDown, true);
    document.addEventListener("mousedown", onPointerDown, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("touchstart", onPointerDown, true);
    document.addEventListener("visibilitychange", onVisibilityChange, true);
    addInitialPointerMoveListeners();
    // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
    scope.addEventListener("focus", onFocus, true);
    scope.addEventListener("blur", onBlur, true);
    // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute("data-js-focus-visible", "");
    else if (scope.nodeType === Node.DOCUMENT_NODE) {
        document.documentElement.classList.add("js-focus-visible");
        document.documentElement.setAttribute("data-js-focus-visible", "");
    }
}
// It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199
if (typeof window !== "undefined" && typeof document !== "undefined") {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = $02c44a70162568c4$var$applyFocusVisiblePolyfill;
    // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
    var $02c44a70162568c4$var$event;
    try {
        $02c44a70162568c4$var$event = new CustomEvent("focus-visible-polyfill-ready");
    } catch (error) {
        // IE11 does not support using CustomEvent as a constructor directly:
        $02c44a70162568c4$var$event = document.createEvent("CustomEvent");
        $02c44a70162568c4$var$event.initCustomEvent("focus-visible-polyfill-ready", false, false, {});
    }
    window.dispatchEvent($02c44a70162568c4$var$event);
}
if (typeof document !== "undefined") // Apply the polyfill to the global document, so that no JavaScript
// coordination is required to use the polyfill in the top-level document:
$02c44a70162568c4$var$applyFocusVisiblePolyfill(document);


window.createPopper = (0, $0c9ce6cb9babc32b$export$8f7491d57c8f97a9);



var $8IbkU = parcelRequire("8IbkU");
const $a47a85354d581c97$export$98ba287114e9d0c3 = ()=>{
    const headerHeight = document[0, $8IbkU._querySelector](".header")?.offsetHeight;
    document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
    return headerHeight;
};
window.addEventListener("resize", $a47a85354d581c97$export$98ba287114e9d0c3);
$a47a85354d581c97$export$98ba287114e9d0c3();


const $6667b7547144472b$export$de363e709c412c8a = (func, delay = 250)=>{
    let isThrottled = false;
    let savedArgs = null;
    let savedThis = null;
    return function wrap(...args) {
        if (isThrottled) {
            savedArgs = args, savedThis = this;
            return;
        }
        func.apply(this, args);
        isThrottled = true;
        setTimeout(()=>{
            isThrottled = false;
            if (savedThis) {
                wrap.apply(savedThis, savedArgs);
                savedThis = null;
                savedArgs = null;
            }
        }, delay);
    };
};


const $6cc1eacb3c93609d$var$fixFullheight = ()=>{
    let vh = window.innerHeight * 0.01;
    document.querySelector(":root").style.setProperty("--vh", `${vh}px`);
};
let $6cc1eacb3c93609d$var$fixHeight = (0, $6667b7547144472b$export$de363e709c412c8a)($6cc1eacb3c93609d$var$fixFullheight);
$6cc1eacb3c93609d$var$fixHeight();
window.addEventListener("resize", $6cc1eacb3c93609d$var$fixHeight);


parcelRequire("8IbkU");

var $8IbkU = parcelRequire("8IbkU");
const $6cd5a34147d3d71e$export$6e6f8e21af33b231 = (item, className)=>{
    document[0, $8IbkU._querySelector](item)?.[0, $8IbkU._classList][0, $8IbkU._add](className);
};
const $6cd5a34147d3d71e$export$21b4674b9a6e7161 = (item, className)=>{
    document[0, $8IbkU._querySelector](item)?.[0, $8IbkU._classList][0, $8IbkU._remove](className);
};
const $6cd5a34147d3d71e$export$5401572fb47f69f8 = (item, className)=>{
    document[0, $8IbkU._querySelector](item)?.[0, $8IbkU._classList][0, $8IbkU._toggle](className);
};



let $fdd2f74e107d548b$var$lastHeaderPosition;
let $fdd2f74e107d548b$var$newHeaderPosition;
let $fdd2f74e107d548b$var$headerHeight = (0, $a47a85354d581c97$export$98ba287114e9d0c3)();
const $fdd2f74e107d548b$var$hideHeaderOnScroll = ()=>{
    $fdd2f74e107d548b$var$lastHeaderPosition = window.scrollY;
    (0, $6cd5a34147d3d71e$export$6e6f8e21af33b231)(".header", "scroll");
    if ($fdd2f74e107d548b$var$headerHeight < $fdd2f74e107d548b$var$lastHeaderPosition && $fdd2f74e107d548b$var$lastHeaderPosition > $fdd2f74e107d548b$var$newHeaderPosition) {
        (0, $6cd5a34147d3d71e$export$6e6f8e21af33b231)(".header", "hide");
        (0, $6cd5a34147d3d71e$export$6e6f8e21af33b231)(".header", "scroll");
    } else if ($fdd2f74e107d548b$var$newHeaderPosition > $fdd2f74e107d548b$var$lastHeaderPosition) (0, $6cd5a34147d3d71e$export$21b4674b9a6e7161)(".header", "hide");
    if ($fdd2f74e107d548b$var$lastHeaderPosition < $fdd2f74e107d548b$var$headerHeight) (0, $6cd5a34147d3d71e$export$21b4674b9a6e7161)(".header", "scroll");
    $fdd2f74e107d548b$var$newHeaderPosition = $fdd2f74e107d548b$var$lastHeaderPosition;
};
window.addEventListener("scroll", (e)=>{
    $fdd2f74e107d548b$var$hideHeaderOnScroll();
});
$fdd2f74e107d548b$var$hideHeaderOnScroll();


parcelRequire("lFyHo");



var $8IbkU = parcelRequire("8IbkU");

document[0, $8IbkU._querySelector](".burger")?.addEventListener("click", (e)=>{
    if (!e.target.matches(".burger")) return;
    (0, $6cd5a34147d3d71e$export$5401572fb47f69f8)(".page", "page--menu");
    (0, $6cd5a34147d3d71e$export$5401572fb47f69f8)(".burger", "burger--active");
});
document[0, $8IbkU._querySelector]("span.nav__link")?.addEventListener("click", (e)=>{
    e.target.classList.toggle("nav__link--hover");
});
window.addEventListener("resize", ()=>{
    if (window.innerWidth <= 992) return;
    (0, $6cd5a34147d3d71e$export$21b4674b9a6e7161)(".page", "page--menu");
    (0, $6cd5a34147d3d71e$export$21b4674b9a6e7161)(".burger", "burger--active");
});


$(".reviews ul").slick({
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    centerMode: true,
    fade: true,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true
            }
        }
    ]
});


const $8a537c2b8619a802$var$button = document.querySelector(".popper");
const $8a537c2b8619a802$var$buttonClose = document.querySelector(".popper-close");
const $8a537c2b8619a802$var$popper = document.querySelector(".allergy-popper");
function $8a537c2b8619a802$var$show() {
    $8a537c2b8619a802$var$popper.removeAttribute("hidden");
    $8a537c2b8619a802$var$instance.update(); // correctly position
}
function $8a537c2b8619a802$var$hide() {
    $8a537c2b8619a802$var$popper.setAttribute("hidden", "");
}
function $8a537c2b8619a802$var$onMouseenter() {
    $8a537c2b8619a802$var$show();
}
function $8a537c2b8619a802$var$onMouseleave() {
    $8a537c2b8619a802$var$hide();
}
$8a537c2b8619a802$var$hide();
const $8a537c2b8619a802$var$instance = createPopper($8a537c2b8619a802$var$button, $8a537c2b8619a802$var$popper, {
    placement: "right-end",
    modifiers: [
        {
            name: "offset",
            options: {
                offset: [
                    10,
                    0
                ]
            }
        }
    ]
});
$8a537c2b8619a802$var$button.addEventListener("click", $8a537c2b8619a802$var$onMouseenter);
$8a537c2b8619a802$var$popper.addEventListener("mouseenter", $8a537c2b8619a802$var$onMouseenter);
$8a537c2b8619a802$var$buttonClose.addEventListener("click", $8a537c2b8619a802$var$onMouseleave);




if (null) null.accept();


//# sourceMappingURL=allergy.75b513a4.js.map
