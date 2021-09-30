"use strict";
/*
名称：ボタンコンポーネント
メモ：
param：
    value: 開閉しているかフラグ
    className: cssクラス
    item: data-item属性に設定する値
    value: 表示値
    onClick: 押下処理
*/

exports.__esModule = true;

var react_1 = require("react");

var KKButton_module_scss_1 = require("src/component/Util/KKButton/KKButton.module.scss"); // TODO：初期押下でリップルが反応しない


var createRipple = function createRipple(event) {
  if (event.srcElement.nodeName !== 'BUTTON') {
    return;
  } // DOM 参照用


  if (typeof document !== 'undefined') {
    var circle = document.createElement("span");
    var diameter = Math.max(event.clientX, event.clientY);
    var radius = diameter / 2;
    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = event.offsetX - radius + "px";
    circle.style.top = event.offsetY - radius + "px";
    circle.classList.add(KKButton_module_scss_1["default"].ripple);
    var button = event.srcElement;
    var rippleList = button.getElementsByClassName(KKButton_module_scss_1["default"].ripple);

    if (rippleList != null) {
      for (var _i = 0, rippleList_1 = rippleList; _i < rippleList_1.length; _i++) {
        var ripple = rippleList_1[_i];
        ripple.remove();
      }
    }

    button.appendChild(circle);
  }
}; // ボタンにクリックイベントを追加
// DOMがない状態では追加できないので実行順を後ろに回す


var addOnClickEvent = function addOnClickEvent() {
  setTimeout(function () {
    if (typeof document !== 'undefined') {
      var buttons = document.getElementsByClassName(KKButton_module_scss_1["default"].button);

      for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
        var button = buttons_1[_i];
        button.addEventListener('click', createRipple);
      }
    }
  }, 0);
}; // メニューコンポーネント作成処理


function KKButton(_a) {
  var value = _a.value,
      _b = _a.className,
      className = _b === void 0 ? '' : _b,
      item = _a.item,
      _c = _a.onClick,
      onClick = _c === void 0 ? function () {} : _c;
  addOnClickEvent();
  var el = react_1["default"].createElement("button", {
    className: className + ' ' + KKButton_module_scss_1["default"].button,
    onClick: onClick,
    "data-item": item
  }, value);
  return el;
}

exports["default"] = KKButton;