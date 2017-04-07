var ASPx = {};
ASPx.SSLSecureBlankUrl = "/data/DXR.axd?r=1_0-8VCF9";
ASPx.EmptyImageUrl = "/data/DXR.axd?r=1_12-8VCF9";
var __aspxVersionInfo = "Version='13.2.11.0', File Version='13.2.11.0', Date Modified='10/28/2014 9:03:17 AM'";
var __aspxStyleSheet = null;
var __aspxInvalidDimension = -10000;
var __aspxInvalidPosition = -10000;
var __aspxAbsoluteLeftPosition = -10000;
var __aspxAbsoluteRightPosition = 10000;
var __aspxMenuZIndex = 21998;
var __aspxPopupControlZIndex = 11998;
var __aspxPopupShadowWidth = 5;
var __aspxPopupShadowHeight = 5;
var __aspxCallbackSeparator = ":";
var __aspxItemIndexSeparator = "i";
var __aspxCallbackResultPrefix = "/*DX*/";
var __aspxItemClassName = "dxi";
var __aspxAccessibilityEmptyUrl = "javascript:;";
var __aspxAccessibilityMarkerClass = "dxalink";
var __aspxEmptyAttributeValue = { };
var __aspxEmptyCachedValue = { };
var __aspxCachedRules = { };
var __aspxStyleCount = 0;
var __aspxStyleNameCache = { };
var __aspxPossibleNumberDecimalSeparators = [",", "."];
var __aspxAdaptiveClass = "dx-adaptive";
var __aspxCultureInfo = {
 twoDigitYearMax: 2029,
 ts: ":",
 ds: "/",
 am: "AM",
 pm: "PM",
 monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
 genMonthNames: null,
 abbrMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
 abbrDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
 dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
 numDecimalPoint: ".",
 numPrec: 2,
 numGroupSeparator: ",", 
 numGroups: [ 3 ],
 numNegPattern: 1,
 numPosInf: "Infinity", 
 numNegInf: "-Infinity", 
 numNan: "NaN",
 currency: "$",
 currDecimalPoint: ".",
 currPrec: 2,
 currGroupSeparator: ",",
 currGroups: [ 3 ],
 currPosPattern: 0,
 currNegPattern: 0,
 percentPattern: 0,
 shortTime: "h:mm tt",
 longTime: "h:mm:ss tt",
 shortDate: "M/d/yyyy",
 longDate: "dddd, MMMM dd, yyyy",
 monthDay: "MMMM dd",
 yearMonth: "MMMM, yyyy"
};
__aspxCultureInfo.genMonthNames = __aspxCultureInfo.monthNames;
function _aspxGetInvariantDateString(date) {
 if(!date)
  return "01/01/0001";
 var day = date.getDate();
 var month = date.getMonth() + 1;
 var year = date.getFullYear();
 var result = "";
 if(month < 10)
  result += "0";
 result += month.toString() + "/";
 if(day < 10)
  result += "0";
 result += day.toString() + "/";
 if(year < 1000)
  result += "0";
 result += year.toString();
 return result;
}
function _aspxGetInvariantDateTimeString(date) {
 var dateTimeString = _aspxGetInvariantDateString(date);
 var time = {
  h: date.getHours(),
  m: date.getMinutes(),
  s: date.getSeconds()
 };
 for(var key in time) {
  var str = time[key].toString();
  if(str.length < 2)
   str = "0" + str;
  time[key] = str;
 }
 dateTimeString += " " + time.h + ":" + time.m + ":" + time.s;
 var msec = date.getMilliseconds();
 if(msec > 0)
  dateTimeString += "." + msec.toString();
 return dateTimeString;
}
function _aspxExpandTwoDigitYear(value) {
 value += 1900;
 if(value + 99 < __aspxCultureInfo.twoDigitYearMax)
  value += 100;
 return value;  
}
function _aspxToUtcTime(date) {
 var result = new Date();
 result.setTime(date.valueOf() + 60000 * date.getTimezoneOffset());
 return result;
}
function _aspxToLocalTime(date) {
 var result = new Date();
 result.setTime(date.valueOf() - 60000 * date.getTimezoneOffset());
 return result; 
}
function _aspxAreDatesEqualExact(date1, date2) {
 if(date1 == null && date2 == null)
  return true;
 if(date1 == null || date2 == null)
  return false;
 return date1.getTime() == date2.getTime(); 
}
function _aspxFixTimezoneGap(oldDate, newDate) {
 var diff = newDate.getHours() - oldDate.getHours();
 if(diff == 0)
  return;
 var sign = (diff == 1 || diff == -23) ? -1 : 1;
 var trial = new Date(newDate.getTime() + sign * 3600000);
 if(sign > 0 || trial.getDate() == newDate.getDate())
  newDate.setTime(trial.getTime());
}
var ASPxKey = {
 F1     : 112,
 F2     : 113,
 F3     : 114,
 F4     : 115,
 F5     : 116,
 F6     : 117,
 F7     : 118,
 F8     : 119,
 F9     : 120,
 F10    : 121,
 F11    : 122,
 F12    : 123,
 Ctrl   : 17,
 Shift  : 16,
 Alt    : 18,
 Enter  : 13,
 Home   : 36,
 End    : 35,
 Left   : 37,
 Right  : 39,
 Up     : 38,
 Down   : 40,
 PageUp    : 33,
 PageDown  : 34,
 Esc    : 27,
 Space  : 32,
 Tab    : 9,
 Backspace : 8,
 Delete    : 46,
 Insert    : 45,
 ContextMenu  : 93,
 Windows   : 91,
 Decimal   : 110
};
var ASPxCallbackType = {
 Data: "d",
 Common: "c"
};
var ASPxWhiteSpaces = { 
 0x0009: 1, 0x000a: 1, 0x000b: 1, 0x000c: 1, 0x000d: 1, 0x0020: 1, 0x0085: 1, 
 0x00a0: 1, 0x1680: 1, 0x180e: 1, 0x2000: 1, 0x2001: 1, 0x2002: 1, 0x2003: 1, 
 0x2004: 1, 0x2005: 1, 0x2006: 1, 0x2007: 1, 0x2008: 1, 0x2009: 1, 0x200a: 1, 
 0x200b: 1, 0x2028: 1, 0x2029: 1, 0x202f: 1, 0x205f: 1, 0x3000: 1
};
function _aspxFalseFunction() { return false; }
function _aspxGetActiveElement() {
 try{
  return document.activeElement;
 } catch(e) {
 }
 return null;
}
var __aspxUserAgent = navigator.userAgent.toLowerCase();
var __aspxMozilla,
 __aspxIE,
 __aspxFirefox,
 __aspxNetscape,
 __aspxSafari,
 __aspxChrome,
 __aspxOpera,
 __aspxBrowserVersion, 
 __aspxBrowserMajorVersion, 
 __aspxWindowsPlatform,
 __aspxMacOSPlatform,
 __aspxMacOSMobilePlatform,
 __aspxWebKitFamily, 
 __aspxNetscapeFamily, 
 __aspxBrowserWithHardwareAcceleration;
function _aspxIdentUserAgent(userAgent, ignoreDocumentMode) {
 var browserTypesOrderedList = [ "Mozilla", "IE", "Firefox", "Netscape", "Safari", "Chrome", "Opera", "Opera10" ];
 var defaultBrowserType = "IE";
 var defaultPlatform = "Win";
 var defaultVersions = { Safari: 2, Chrome: 0.1, Mozilla: 1.9, Netscape: 8, Firefox: 2, Opera: 9, IE: 6 };
 if(!userAgent || userAgent.length == 0) {
  _aspxFillUserAgentInfo(browserTypesOrderedList, defaultBrowserType, defaultVersions[defaultBrowserType], defaultPlatform);
  return;
 }
 userAgent = userAgent.toLowerCase();
 try {
  var platformIdentStrings = {
   "Windows": "Win",
   "Macintosh": "Mac",
   "Mac OS": "Mac",
   "Mac_PowerPC": "Mac",
   "cpu os": "MacMobile",
   "cpu iphone os": "MacMobile",
   "Android": "Android",
   "!Windows Phone": "WinPhone",
   "!WPDesktop": "WinPhone",
   "!ZuneWP": "WinPhone"
  };
  var tridentIdentStrings = {
   "Trident/5": 9,
   "Trident/6": 10
  };
  var optSlashOrSpace = "(?:/|\\s*)?";
  var version = "(\\d+)(?:\\.((?:\\d+?[1-9])|\\d)0*?)?";
  var optVersion = "(?:" + version + ")?";
  var patterns = {
   Safari: "applewebkit(?:.*?(?:version/" + version + "[\\.\\w\\d]*?(?:\\s+mobile\/\\S*)?\\s+safari))?",
   Chrome: "chrome(?!frame)" + optSlashOrSpace + optVersion,
   Mozilla: "mozilla(?:.*rv:" + optVersion + ".*Gecko)?",
   Netscape: "(?:netscape|navigator)\\d*/?\\s*" + optVersion,
   Firefox: "firefox" + optSlashOrSpace + optVersion,
   Opera: "opera" + optSlashOrSpace + optVersion,
   Opera10: "opera.*\\s*version" + optSlashOrSpace + optVersion,
   IE: "msie\\s*" + optVersion
  };
  var browserType;
  var version = -1;
  for(var i = 0; i < browserTypesOrderedList.length; i++) {
   var browserTypeCandidate = browserTypesOrderedList[i];
   var regExp = new RegExp(patterns[browserTypeCandidate], "i");
   if(regExp.compile)
    regExp.compile(patterns[browserTypeCandidate], "i");
   var matches = regExp.exec(userAgent);
   if(matches && matches.index >= 0) {
    browserType = browserTypeCandidate;
    if(browserType == "Opera10")
     browserType = "Opera";
    var tridentPattern = "trident" + optSlashOrSpace + optVersion;
    version = _aspxGetBrowserVersion(userAgent, matches, tridentPattern, _aspxGetIECompatibleVersionString());
    if(browserType == "Mozilla" && version >= 11)
     browserType = "IE";
   }
  }
  if(!browserType)
   browserType = defaultBrowserType;
  var browserVersionDetected = version != -1;
  if(!browserVersionDetected)
   version = defaultVersions[browserType];
  var platform;
  var minOccurenceIndex = Number.MAX_VALUE;
  for(var identStr in platformIdentStrings) {
   if(!platformIdentStrings.hasOwnProperty(identStr)) continue;
   var importantIdent = identStr.substr(0,1) == "!";
   var occurenceIndex = userAgent.indexOf((importantIdent ? identStr.substr(1) : identStr).toLowerCase());
   if(occurenceIndex >= 0 && (occurenceIndex < minOccurenceIndex || importantIdent)) {
    minOccurenceIndex = importantIdent ? 0 : occurenceIndex;
    platform = platformIdentStrings[identStr];
   }
  }
  if(platform == "WinPhone" && version < 9) {
   for(var identStr in tridentIdentStrings) {
    if(!tridentIdentStrings.hasOwnProperty(identStr)) continue;
    if(userAgent.indexOf(identStr.toLowerCase()) > -1)
     version = tridentIdentStrings[identStr];
   }
  }
  if(!ignoreDocumentMode && browserType == "IE" && version > 7 && document.documentMode < version)
   version = document.documentMode;
  if(platform == "WinPhone")
   version = Math.max(9, version);
  if(!platform)
   platform = defaultPlatform;
  if(platform == platformIdentStrings["cpu os"] && !browserVersionDetected) 
   version = 4;
  _aspxFillUserAgentInfo(browserTypesOrderedList, browserType, version, platform);
 } catch(e) {
  _aspxFillUserAgentInfo(browserTypesOrderedList, defaultBrowserType, defaultVersions[defaultBrowserType], defaultPlatform);
 }
}
function _aspxGetIECompatibleVersionString() {
 if(document.compatible) {
  for(var i = 0; i < document.compatible.length; i++)
   if(document.compatible[i].userAgent === "IE" && document.compatible[i].version)
    return document.compatible[i].version.toLowerCase();
 }
 return "";
}
function _aspxGetBrowserVersion(userAgent, matches, tridentPattern, ieCompatibleVersionString) {
 var version = _aspxGetVersionFromMatches(matches);
 if(ieCompatibleVersionString) {
  var versionFromTrident = _aspxGetVersionFromTrident(userAgent, tridentPattern);
  if(ieCompatibleVersionString === "edge" || parseInt(ieCompatibleVersionString) === versionFromTrident)
   return versionFromTrident;
 }
 return version;
}
function _aspxGetVersionFromTrident(userAgent, tridentPattern) {
 var tridentDiffFromVersion = 4;
 var matches = new RegExp(tridentPattern, "i").exec(userAgent);
 return _aspxGetVersionFromMatches(matches) + tridentDiffFromVersion;
}
function _aspxGetVersionFromMatches(matches) {
 var result = -1;
 var versionStr = "";
 if(matches[1]) {
  versionStr += matches[1];
  if(matches[2])
   versionStr += "." + matches[2];
 }
 if(versionStr != "") {
  result = parseFloat(versionStr);
  if(result == NaN)
   result = -1;
 }
 return result;
}
function _aspxFillUserAgentInfo(browserTypesOrderedList, browserType, version, platform) {
 for(var i = 0; i < browserTypesOrderedList.length; i++) {
  var type = browserTypesOrderedList[i];
  window["__aspx" + type] = type == browserType;
 }
 __aspxBrowserVersion = Math.floor(10.0 * version) / 10.0;
 __aspxBrowserMajorVersion = Math.floor(__aspxBrowserVersion);
 __aspxWindowsPlatform = platform == "Win" || platform == "WinPhone";
 __aspxMacOSPlatform = platform == "Mac";
 __aspxMacOSMobilePlatform = platform == "MacMobile";
 __aspxAndroidMobilePlatform = platform == "Android";
 __aspxWindowsPhonePlatform = platform == "WinPhone";
 __aspxWebKitFamily = __aspxSafari || __aspxChrome;
 __aspxNetscapeFamily = __aspxNetscape || __aspxMozilla || __aspxFirefox;
 __aspxBrowserWithHardwareAcceleration = (__aspxIE && __aspxBrowserMajorVersion >= 9) || ( __aspxFirefox && __aspxBrowserMajorVersion >= 4);
 __aspxWebKitTouchUI = __aspxMacOSMobilePlatform || __aspxAndroidMobilePlatform;
 __aspxMSTouchUI = __aspxIE && __aspxBrowserMajorVersion > 9 && __aspxWindowsPlatform && __aspxUserAgent.toLowerCase().indexOf("touch") >= 0;
 __aspxTouchUI = __aspxWebKitTouchUI || __aspxMSTouchUI;
 __aspxAndroidDefaultBrowser = __aspxAndroidMobilePlatform && !__aspxChrome;
}
_aspxIdentUserAgent(__aspxUserAgent);
ASPx.BlankUrl = __aspxIE
 ? ASPx.SSLSecureBlankUrl
 : (__aspxOpera
  ? "about:blank"
  : "");
function _aspxArrayInsert(array, element, position){
 if(0 <= position && position < array.length){
  for(var i = array.length; i > position; i --)
   array[i] = array[i - 1];
  array[position] = element;
 }
 else
  array.push(element);
}
function _aspxArrayRemove(array, element){
 var index = _aspxArrayIndexOf(array, element);
 if(index > -1) _aspxArrayRemoveAt(array, index);
}
function _aspxArrayRemoveAt(array, index){
 if(index >= 0  && index < array.length){
  for(var i = index; i < array.length - 1; i++)
   array[i] = array[i + 1];
  array.pop();
 }
}
function _aspxArrayClear(array){
 while(array.length > 0)
  array.pop();
}
function _aspxArrayIndexOf(array, element, comparer) {
 if(!comparer) {
  for(var i = 0; i < array.length; i++) {
   if(array[i] == element)
    return i;
  }
 } else {
  for(var i = 0; i < array.length; i++) {
   if(comparer(array[i], element))
    return i;
  }
 }
 return -1;
}
function _aspxArrayIntegerAscendingSort(array){
 _aspxArrayIntegerSort(array);
}
function _aspxArrayIntegerSort(array, desc) {
 array.sort(function(i1, i2) {
  var res = 0;
  if(i1 > i2)
   res = 1;
  else if(i1 < i2)
   res = -1;
  if(desc)
   res *= -1;
  return res;
 });
}
function _aspxCollectionsUnionToArray(firstCollection, secondCollection) {
 var result = [];
 var firstCollectionLength = firstCollection.length;
 var secondCollectionLength = secondCollection.length;
 for(var i = 0; i <  firstCollectionLength + secondCollectionLength; i++) {
  if(i < firstCollectionLength) 
   result.push(firstCollection[i]);
  else 
   result.push(secondCollection[i - firstCollectionLength]);
 }  
 return result;
}
function _aspxCollectionToArray(collection) {
 var array = [];
 for(var i = 0; i < collection.length; i++)
  array.push(collection[i]);
 return array;
}
function _aspxCreateHashTableFromArray(array) {
 var hash = [];
 for(var i = 0; i < array.length; i++)
  hash[array[i]] = 1;
 return hash;
}
function _aspxCreateIndexHashTableFromArray(array) {
 var hash = [];
 for(var i = 0; i < array.length; i++)
  hash[array[i]] = i;
 return hash;
}
var __aspxDefaultBinarySearchComparer = function(array, index, value) {
 var arrayElement = array[index];
 if(arrayElement == value)
  return 0;
 else
  return arrayElement < value ? -1 : 1;
};
var __aspxNearestLeftBinarySearchComparer = function(array, index, value) { 
 var arrayElement = array[index];
 var leftPoint = arrayElement < value;
 var lastLeftPoint = leftPoint && index == array.length - 1;
 var nearestLeftPoint = lastLeftPoint || (leftPoint && array[index + 1] >= value)
 if(nearestLeftPoint)
  return 0;
 else
  return arrayElement < value ? -1 : 1;
};
function _aspxArrayBinarySearch(array, value, binarySearchComparer, startIndex, length) {
 if(!binarySearchComparer)
  binarySearchComparer = __aspxDefaultBinarySearchComparer;
 if(!_aspxIsExists(startIndex))
  startIndex = 0;
 if(!_aspxIsExists(length))
  length = array.length - startIndex;  
 var endIndex = (startIndex + length) - 1;
 while (startIndex <= endIndex) {
  var middle =  (startIndex + ((endIndex - startIndex) >> 1));
  var compareResult = binarySearchComparer(array, middle, value);
  if (compareResult == 0)
   return middle;
  if (compareResult < 0)
   startIndex = middle + 1;
  else
   endIndex = middle - 1;
 }
 return -(startIndex + 1);
}
function _aspxGetDistinctArray(array) {
 var resultArray = [];
 for(var i = 0; i < array.length; i++) {
  var currentEntry = array[i];
  if(_aspxArrayIndexOf(resultArray, currentEntry) == -1) {
     resultArray.push(currentEntry);
  }
 }
 return resultArray;
}
function _aspxApplyReplacement(text, replecementTable) {
 for(var i = 0; i < replecementTable.length; i++) {
  var replacement = replecementTable[i];
  text = text.replace(replacement[0], replacement[1]);
 }
 return text;
}
function _aspxCompleteReplace(text, regexp, newSubStr) {
 var textPrev;
 do {
  textPrev = text;
  text = text.replace(regexp, newSubStr);
 } while(text != textPrev);
 return text;
}
function _aspxNodeListToArray(nodeList, filter) {
 var result = [];
 for(var i = 0, element; element = nodeList[i]; i++) {
  if(filter && !filter(element))
   continue;
  result.push(element);
 }
 return result;
}
function _aspxEncodeHtml(html) {
 return _aspxApplyReplacement(html, [
  [ /&amp;/g,  '&ampx;'  ], [ /&/g, '&amp;'  ],
  [ /&quot;/g, '&quotx;' ], [ /"/g, '&quot;' ],
  [ /&lt;/g,   '&ltx;'   ], [ /</g, '&lt;'   ],
  [ /&gt;/g,   '&gtx;'   ], [ />/g, '&gt;'   ]
 ]);
}
function _aspxDecodeHtml(html) {
 return _aspxApplyReplacement(html, [
  [ /&gt;/g,   '>' ], [ /&gtx;/g,  '&gt;'   ],
  [ /&lt;/g,   '<' ], [ /&ltx;/g,  '&lt;'   ],
  [ /&quot;/g, '"' ], [ /&quotx;/g,'&quot;' ],
  [ /&amp;/g,  '&' ], [ /&ampx;/g, '&amp;'  ]
 ]);
}
function _aspxParseShortcutString(shortcutString) {
 if(!shortcutString)
  return 0;
 var isCtrlKey = false;
 var isShiftKey = false;
 var isAltKey = false;
 var keyCode = null;
 var shcKeys = shortcutString.toString().split("+");
 if (shcKeys.length > 0) {
  for (var i = 0; i < shcKeys.length; i++) {
   var key = _aspxTrim(shcKeys[i].toUpperCase());
   switch (key) {
    case "CTRL":
     isCtrlKey = true;
     break;
    case "SHIFT":
     isShiftKey = true;
     break;
    case "ALT":
     isAltKey = true;
     break;
    case "F1": keyCode = ASPxKey.F1; break;
    case "F2": keyCode = ASPxKey.F2; break;
    case "F3": keyCode = ASPxKey.F3; break;
    case "F4": keyCode = ASPxKey.F4; break;
    case "F5": keyCode = ASPxKey.F5; break;
    case "F6": keyCode = ASPxKey.F6; break;
    case "F7": keyCode = ASPxKey.F7; break;
    case "F8": keyCode = ASPxKey.F8; break;
    case "F9": keyCode = ASPxKey.F9; break;
    case "F10":   keyCode = ASPxKey.F10; break;
    case "F11":   keyCode = ASPxKey.F11; break;
    case "F12":   keyCode = ASPxKey.F12; break;
    case "ENTER": keyCode = ASPxKey.Enter; break;
    case "HOME":  keyCode = ASPxKey.Home; break;
    case "END":   keyCode = ASPxKey.End; break;
    case "LEFT":  keyCode = ASPxKey.Left; break;
    case "RIGHT": keyCode = ASPxKey.Right; break;
    case "UP": keyCode = ASPxKey.Up; break;
    case "DOWN":  keyCode = ASPxKey.Down; break;
    case "PAGEUP": keyCode = ASPxKey.PageUp; break;
    case "PAGEDOWN": keyCode = ASPxKey.PageDown; break;
    case "SPACE": keyCode = ASPxKey.Space; break;
    case "TAB":   keyCode = ASPxKey.Tab; break;
    case "BACK":  keyCode = ASPxKey.Backspace; break;
    case "CONTEXT": keyCode = ASPxKey.ContextMenu; break;
    case "ESCAPE":
    case "ESC":
     keyCode = ASPxKey.Esc;
     break;
    case "DELETE":
    case "DEL":
     keyCode = ASPxKey.Delete;
     break;
    case "INSERT":
    case "INS":
     keyCode = ASPxKey.Insert;
     break;
    case "PLUS":
     keyCode = "+".charCodeAt(0);
     break;
    default:
     keyCode = key.charCodeAt(0);
     break;
   }
  }
 } else
  alert("Invalid shortcut");
 return _aspxGetShortcutCode(keyCode, isCtrlKey, isShiftKey, isAltKey);
}
function _aspxGetShortcutCode(keyCode, isCtrlKey, isShiftKey, isAltKey) {
 var value = keyCode & 0xFFFF;
 var flags = 0;
 flags |= isCtrlKey ? 1 << 0 : 0;
 flags |= isShiftKey ? 1 << 2 : 0;
 flags |= isAltKey ? 1 << 4 : 0;
 value |= flags << 16;
 return value;
}
function _aspxGetShortcutCodeByEvent(evt) {
 return _aspxGetShortcutCode(_aspxGetKeyCode(evt), evt.ctrlKey, evt.shiftKey, evt.altKey);
}
function _aspxIsPasteShortcut(evt){
 var keyCode = _aspxGetKeyCode(evt);
 if (__aspxNetscapeFamily && evt.which == 0)  
  keyCode = evt.keyCode;
 return (evt.ctrlKey && (keyCode == 118  || (keyCode == 86))) ||
     (evt.shiftKey && !evt.ctrlKey && !evt.altKey &&
     (keyCode == ASPxKey.Insert)) ;
}
var ASPxImageUtils = {
 GetImageSrc: function (image){
  return image.src;
 },
 SetImageSrc: function(image, src){
  image.src = src;
 },
 SetSize: function(image, width, height){
  image.style.width = width + "px";
  image.style.height = height + "px";
 },
 GetSize: function(image, isWidth){
  return (isWidth ? image.offsetWidth : image.offsetHeight);
 }
};
var __aspxVerticalScrollBarWidth;
function _aspxGetVerticalScrollBarWidth() {
 if(typeof(__aspxVerticalScrollBarWidth) == "undefined") {
  var container = document.createElement("DIV");
  container.style.cssText = "position: absolute; top: 0px; left: 0px; visibility: hidden; width: 200px; height: 150px; overflow: hidden";
  document.body.appendChild(container);
  var child = document.createElement("P");
  container.appendChild(child);
  child.style.cssText = "width: 100%; height: 200px;";
  var widthWithoutScrollBar = child.offsetWidth;
  container.style.overflow = "scroll";
  var widthWithScrollBar = child.offsetWidth;
  if(widthWithoutScrollBar == widthWithScrollBar)
   widthWithScrollBar = container.clientWidth;
  __aspxVerticalScrollBarWidth = widthWithoutScrollBar - widthWithScrollBar;
  document.body.removeChild(container);
 }
 return __aspxVerticalScrollBarWidth;
}
function _aspxGetVerticalOverflow(element) {
 if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
  return element.style.overflowY;
 return element.style.overflow;
}
function _aspxSetVerticalOverflow(element, value) {
 if(__aspxIE || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome)
  element.style.overflowY = value;
 else
  element.style.overflow = value;
}
function _aspxHideScrollBarCore(element, scrollName) {
 if(element.tagName == "IFRAME") {
  if((element.scrolling == "yes") || (element.scrolling == "auto")) {
   _aspxChangeAttribute(element, "scrolling", "no");
   return true;
  }
 }
 else if(element.tagName == "DIV") {
  if((element.style[scrollName] == "scroll") || (element.style[scrollName] == "auto")) {
   _aspxChangeStyleAttribute(element, scrollName, "hidden");
   return true;
  }
 }
 return false;
}
function _aspxRestoreScrollBarCore(element, scrollName) {
 if(element.tagName == "IFRAME")
  return _aspxRestoreAttribute(element, "scrolling");
 else if(element.tagName == "DIV")
  return _aspxRestoreStyleAttribute(element, scrollName);
 return false;
}
function _aspxSetScrollBarVisibilityCore(element, scrollName, isVisible) {
 return isVisible ? _aspxRestoreScrollBarCore(element, scrollName) : _aspxHideScrollBarCore(element, scrollName);
}
function _aspxSetScrollBarVisibility(element, isVisible) {
 if(_aspxSetScrollBarVisibilityCore(element, "overflow", isVisible)) 
  return true;
 var result = _aspxSetScrollBarVisibilityCore(element, "overflowX", isVisible)
  || _aspxSetScrollBarVisibilityCore(element, "overflowY", isVisible);
 return result;
}
function _aspxSetTimeout(callString, timeout){
 return window.setTimeout(callString, timeout);
}
function _aspxClearTimer(timerID){
 if(timerID > -1)
  window.clearTimeout(timerID);
 return -1;
}
function _aspxSetInterval(callString, interval){
 return window.setInterval(callString, interval);
}
function _aspxClearInterval(timerID){
 if(timerID > -1)
  window.clearInterval(timerID);
 return -1;
}
function _aspxSetInnerHtml(element, html) {
 if(__aspxIE) {
  element.innerHTML = "<em>&nbsp;</em>" + html;
  element.removeChild(element.firstChild);
 } else
  element.innerHTML = html;
}
function _aspxGetInnerText(container) {
 if (__aspxNetscapeFamily)
  return container.textContent;
 else if (__aspxWebKitFamily) {
  var filter = _aspxGetHtml2PlainTextFilter();
  filter.innerHTML = container.innerHTML;
  _aspxSetElementDisplay(filter, true);
  var innerText = filter.innerText;
  _aspxSetElementDisplay(filter, false);
  return innerText;
 } else
  return container.innerText;
}
var __aspxHtml2PlainTextFilter = null;
function _aspxGetHtml2PlainTextFilter() {
 if (__aspxHtml2PlainTextFilter == null) {
  __aspxHtml2PlainTextFilter = document.createElement("DIV");
  __aspxHtml2PlainTextFilter.style.width = "0";
  __aspxHtml2PlainTextFilter.style.height = "0";
  __aspxHtml2PlainTextFilter.style.overflow = "visible";
  _aspxSetElementDisplay(__aspxHtml2PlainTextFilter, false);
  document.body.appendChild(__aspxHtml2PlainTextFilter);
 }
 return __aspxHtml2PlainTextFilter;
}
function _aspxCreateHiddenField(name, id) {
 var input = document.createElement("INPUT");
 input.setAttribute("type", "hidden");
 if(name)
  input.setAttribute("name", name);
 if(id)
  input.setAttribute("id", id);
 return input;
}
function _aspxCloneObject(srcObject) {
  if(typeof(srcObject) != 'object' || srcObject == null)
 return srcObject;
  var newObject = { };
  for(var i in srcObject) 
 newObject[i] = srcObject[i];
  return newObject;
}
function _aspxIsExists(obj){
 return (typeof(obj) != "undefined") && (obj != null);
}
function _aspxIsFunction(obj){
 return typeof(obj) == "function";
}
function _aspxGetDefinedValue(value, defaultValue){
 return (typeof(value) != "undefined") ? value : defaultValue;
}
function _aspxGetKeyCode(srcEvt) {
 return __aspxNetscapeFamily || __aspxOpera ? srcEvt.which : srcEvt.keyCode;
}
function _aspxPreventElementDrag(element) {
 if(__aspxIE)
  _aspxAttachEventToElement(element, "dragstart", _aspxPreventEvent);
 else
  _aspxAttachEventToElement(element, "mousedown", _aspxPreventEvent);
}
function _aspxPreventElementDragAndSelect(element, skipMouseMove, skipIESelect){
 if(__aspxWebKitFamily)
  _aspxAttachEventToElement(element, "selectstart", _aspxPreventEventAndBubble);
 if(__aspxIE){
  if(!skipIESelect)
   _aspxAttachEventToElement(element, "selectstart", _aspxFalseFunction);
  if(!skipMouseMove)
   _aspxAttachEventToElement(element, "mousemove", _aspxClearSelectionOnMouseMove);
  _aspxAttachEventToElement(element, "dragstart", _aspxPreventDragStart);
 }
}
function _aspxSetElementAsUnselectable(element, isWithChild, recursive) {
 if (element && element.nodeType == 1) {
  element.unselectable = "on";
  if(__aspxNetscapeFamily)
   element.onmousedown = _aspxFalseFunction;
  if((__aspxIE && __aspxBrowserVersion >= 9) || __aspxWebKitFamily)
   _aspxAttachEventToElement(element, "mousedown", _aspxPreventEventAndBubble);
  if(isWithChild === true){
   for(var j = 0; j < element.childNodes.length; j ++)
    _aspxSetElementAsUnselectable(element.childNodes[j], (!!recursive ? true : false), (!!recursive));
  }
 }
}
function _aspxIsPercentageSize(size) {
 return size && size.indexOf('%') != -1;
}
function _aspxClearSelection() {
 try {
  if (window.getSelection) {
   if (__aspxWebKitFamily)
    window.getSelection().collapse();
   else
    window.getSelection().removeAllRanges();
  }
  else if (document.selection) {
   if(document.selection.empty)
    document.selection.empty();
   else if(document.selection.clear)
    document.selection.clear();
  }
 } catch(e) {
 }
}
function _aspxClearSelectionOnMouseMove(evt) {
 if (!__aspxIE || (evt.button != 0)) 
  _aspxClearSelection();
}
function _aspxPreventDragStart(evt) {
 evt = _aspxGetEvent(evt);
 var element = _aspxGetEventSource(evt);
 if (element.releaseCapture)
  element.releaseCapture(); 
 return false;
}
function _aspxSetElementSelectionEnabled(element, value) {
 var userSelectValue = value ? "" : "none";
 var func = value ? _aspxDetachEventFromElement : _aspxAttachEventToElement;
 if(__aspxFirefox)
  element.style.MozUserSelect = userSelectValue;
 else if(__aspxWebKitFamily)
  element.style.webkitUserSelect = userSelectValue;
 else if(__aspxOpera)
  func(element, "mousemove", _aspxClearSelection);
 else {
  func(element, "selectstart", _aspxFalseFunction);
  func(element, "mousemove", _aspxClearSelection);
 }
}
function _aspxGetElementById(id) {
 if(document.getElementById)
  return document.getElementById(id);
 else
  return document.all[id];
}
function _aspxGetInputElementById(id) {
 var elem = _aspxGetElementById(id);
 if(!__aspxIE)
  return elem;
 if(elem) {
  if(elem.id == id)
   return elem;
  else {
   for(var i = 1; i < document.all[id].length; i++) {
    if(document.all[id][i].id == id)
     return document.all[id][i];
   }
  }
 }
 return null;
}
function _aspxGetElementByIdInDocument(documentObj, id) {
 if(documentObj.getElementById)
  return documentObj.getElementById(id);
 else
  return documentObj.all[id];
}
function _aspxGetIsParent(parentElement, element) {
 while(element){
  if(element === parentElement)
   return true;
  if(element.tagName === "BODY")
   return false;
  element = element.parentNode;
 }
 return false;
}
function _aspxGetParentById(element, id) {
 element = element.parentNode;
 while(element){
  if(element.id === id)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetParentByTagName(element, tagName) {
 tagName = tagName.toUpperCase();
 while(element) {
  if(element.tagName === "BODY")
   return null;
  if(element.tagName === tagName)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxElementHasCssClass(element, className) {
 try {
  return !!element.className.match("(^|\\s)" + className + "(\\s|$)");
 } catch(e) {
  return false;
 }
}
function _aspxElementCssClassContains(element, className) {
 try {
  return element.className.indexOf(className) != -1;
 } catch(e) {
  return false;
 }
}
function _aspxAddClassNameToElement(element, className){
 if(!_aspxElementHasCssClass(element, className))
  element.className = element.className + " " + className;
}
function _aspxRemoveClassNameFromElement(element, className){
 if(_aspxElementHasCssClass(element, className)) {
  element.className = (" " + element.className + " ").replace(" " + className + " ", " ");
 }
}
function _aspxGetChildNodesByClassName(parent, className) {
 if(parent.querySelectorAll) {
  var children = parent.querySelectorAll('.' + className);
  return _aspxNodeListToArray(children, function(element) { 
   return element.parentNode === parent;
  });
 }
 return _aspxGetChildNodes(parent, function(elem) { return elem.className && _aspxElementHasCssClass(elem, className); });
}
function _aspxGetDescendantNodesByClassName(parent, className) {
 if(parent.querySelectorAll) {
  var children = parent.querySelectorAll('.' + className);
  return _aspxNodeListToArray(children);
 }
 return _aspxGetDescendantNodes(parent, function(elem) { return elem.className && _aspxElementHasCssClass(elem, className); });
}
function _aspxGetParentByClassNameInternal(element, className, selector) {
 while(element != null) {
  if(element.tagName == "BODY")
   return null;
  if(selector(element, className))
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetParentByPartialClassName(element, className) {
 return _aspxGetParentByClassNameInternal(element, className, _aspxElementCssClassContains);
}
function _aspxGetParentByClassName(element, className) {
 return _aspxGetParentByClassNameInternal(element, className, _aspxElementHasCssClass);
}
function _aspxGetParentByTagNameAndAttributeValue(element, tagName, attrName, attrValue) {
 tagName = tagName.toUpperCase();
 while(element != null) {
  if(element.tagName == "BODY")
   return null;
  if(element.tagName == tagName && element[attrName] == attrValue)
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetChildById(element, id) {
 if(element.all) {
  var child = element.all[id];
  if (!child) {
   child = element.all(id); 
   if(!child)
    return __aspxIE ? document.getElementById(id) : null; 
  } 
  if(!_aspxIsExists(child.length)) 
   return child;
  else
   return _aspxGetElementById(id);
 }
 else
  return _aspxGetElementById(id);
}
function _aspxGetElementsByTagName(element, tagName) {
 tagName = tagName.toUpperCase();
 if(element) {
  if(element.getElementsByTagName) 
   return element.getElementsByTagName(tagName);
  else if(element.all && element.all.tags !== undefined)
   return __aspxNetscape ? element.all.tags[tagName] : element.all.tags(tagName);
 }
 return null;
}
function _aspxGetChildByTagName(element, tagName, index) {
 if(element != null){    
  var collection = _aspxGetElementsByTagName(element, tagName);
  if(collection != null){
   if(index < collection.length)
    return collection[index];
  }
 }
 return null;
}
function _aspxRetrieveByPredicate(scourceCollection, predicate) {
 var result = [];
 for(var i = 0; i < scourceCollection.length; i++) {
  var element = scourceCollection[i];
  if(!predicate || predicate(element)) 
   result.push(element);
 }
 return result;
}
function _aspxGetChildNodes(parent, predicate) {
 return _aspxRetrieveByPredicate(parent.childNodes, predicate);
}
function _aspxGetChildNodesByTagName(parent, tagName) {
 return _aspxGetChildNodes(parent, function (child) { return child.tagName === tagName; });
}
function _aspxGetDescendantNodes(parent, predicate) {
 var c = parent.all || parent.getElementsByTagName('*');
 return _aspxRetrieveByPredicate(c, predicate);
}
function _aspxGetElementNodes(parent) {
 if(!parent) return null;
 return _aspxGetChildNodes(parent, function(e) { return e.nodeType == 1 })
}
function _aspxGetElementNodesByPredicate(parent, predicate) {
 if(!parent) return null;
 if(!predicate) return _aspxGetElementNodes(parent);
 return _aspxGetChildNodes(parent, function(e) { return e.nodeType == 1 && predicate(e); })
}
function _aspxGetChildTextNode(element, index) {
 if(element != null){
  var collection = [ ];
  _aspxGetChildTextNodeCollection(element, collection);
  if(index < collection.length)
   return collection[index];
 }
 return null;
}
function _aspxGetChildTextNodeCollection(element, collection) {
 for(var i = 0; i < element.childNodes.length; i ++){
  var childNode = element.childNodes[i];
  if(_aspxIsExists(childNode.nodeValue))
   collection.push(childNode);
  _aspxGetChildTextNodeCollection(childNode, collection);
 }
}
function _aspxGetChildrenByPartialClassName(element, className) {
 if(element.querySelectorAll) {
  var list = element.querySelectorAll('*[class*=' + className + ']');
  return _aspxNodeListToArray(list);
 }
 var collection = element.all || element.getElementsByTagName('*');
 var ret = [ ];
 if(collection != null) {
  for(var i = 0; i < collection.length; i ++) {
   if(_aspxElementCssClassContains(collection[i], className))
    ret.push(collection[i]);
  }
 }
 return ret;
}
function _aspxGetParentByPartialId(element, idPart){
 while(element && element.tagName != "BODY") {
  if(element.id && element.id.indexOf(idPart) > -1) 
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxGetElementsByPartialId(element, partialName, list) {
 if(element.id && element.id.indexOf(partialName) > -1) {
  list.push(element);
 }
 if(element.childNodes)
 for(var i = 0; i < element.childNodes.length; i ++) {
  _aspxGetElementsByPartialId(element.childNodes[i], partialName, list);
 }
}
function _aspxGetElementDocument(element) {
 return element.document || element.ownerDocument;
}
function _aspxRemoveElement(element) {
 if(element && element.parentNode)
  element.parentNode.removeChild(element);
}
function _aspxReplaceTagName(element, newTagName, cloneChilds) {
 if (element.nodeType != 1)
  return null;
 if (element.nodeName == newTagName)
  return element;
 cloneChilds = cloneChilds !== undefined ? cloneChilds : true;
 var doc = element.ownerDocument;
 var newElem = doc.createElement(newTagName);
 _aspxCopyAllAttributes(element, newElem);
 if(cloneChilds) {
  for (var i = 0; i < element.childNodes.length; i++)
   newElem.appendChild(element.childNodes[i].cloneNode(true));
 }
 else {
  for(var child; child = element.firstChild; )
   newElem.appendChild(child);
 }
 element.parentNode.replaceChild(newElem, element);
 return newElem;
}
function _aspxRemoveOuterTags(element) {
 if (__aspxIE) {
  element.insertAdjacentHTML( 'beforeBegin', element.innerHTML ) ;
  _aspxRemoveElement(element);
 } else {
  var docFragment = element.ownerDocument.createDocumentFragment();
  for (var i = 0; i < element.childNodes.length; i++)
   docFragment.appendChild(element.childNodes[i].cloneNode(true));
  element.parentNode.replaceChild(docFragment, element);
 }
}
function _aspxWrapElementInNewElement(element, newElementTagName) { 
 var wrapElement = null;
 if (__aspxIE) {
  var wrapElement = element.ownerDocument.createElement(newElementTagName);
  wrapElement.appendChild(element.cloneNode(true));
  element.parentNode.insertBefore(wrapElement, element);
  element.parentNode.removeChild(element);
 } else {
  var docFragment = element.ownerDocument.createDocumentFragment();
  wrapElement = element.ownerDocument.createElement(newElementTagName);
  docFragment.appendChild(wrapElement);
  wrapElement.appendChild(element.cloneNode(true));
  element.parentNode.replaceChild(docFragment, element);
 }
 return wrapElement;
}
function _aspxInsertElementAfter(newElement, targetElement) {
 var parentElem = targetElement.parentNode;
 if(parentElem.childNodes[parentElem.childNodes.length - 1] == targetElement)
  parentElem.appendChild(newElement);
 else
  parentElem.insertBefore(newElement, targetElement.nextSibling);
}
function _aspxGetEvent(evt){
 return (typeof(event) != "undefined" && event != null && __aspxIE) ? event : evt; 
}
function _aspxEventPrevented(evt) {
 return evt.defaultPrevented || evt.returnValue === false;
}
function _aspxPreventEvent(evt){
 if (evt.preventDefault)
  evt.preventDefault();
 else
  evt.returnValue = false;
 return false;
}
function _aspxPreventEventAndBubble(evt){
 _aspxPreventEvent(evt);
 if (evt.stopPropagation)
  evt.stopPropagation();
 evt.cancelBubble = true;
 return false;
}
function _aspxCancelBubble(evt){
 evt.cancelBubble = true;
 return false;
}
function _aspxPreventImageDragging(image) {
 if(image) {
  if(__aspxNetscapeFamily)
   image.onmousedown = function(evt) {
    evt.cancelBubble = true;
    return false;
   };
  else
   image.ondragstart = function() {
    return false;
   };
 }
}
function _aspxClientEventRequiresDocScrollCorrection() {
 return __aspxAndroidDefaultBrowser || !(__aspxSafari && __aspxBrowserVersion < 3 || __aspxMacOSMobilePlatform && __aspxBrowserVersion < 5.1);
}
function _aspxGetEventSource(evt){
 if(!_aspxIsExists(evt)) return null; 
 return evt.srcElement ? evt.srcElement : evt.target;
}
function _aspxGetEventX(evt){
 if(ASPxClientTouchUI.isTouchEvent(evt))
  return ASPxClientTouchUI.getEventX(evt);
 return evt.clientX  - _aspxGetIEDocumentClientOffsetInternal(true) + (_aspxClientEventRequiresDocScrollCorrection() ? _aspxGetDocumentScrollLeft() : 0);
}
function _aspxGetEventY(evt){
 if(ASPxClientTouchUI.isTouchEvent(evt))
  return ASPxClientTouchUI.getEventY(evt);
 var oldSafari = __aspxSafari && __aspxBrowserVersion < 3 || __aspxMacOSMobilePlatform && __aspxBrowserVersion < 5.1;
 return evt.clientY - _aspxGetIEDocumentClientOffsetInternal(false) + (_aspxClientEventRequiresDocScrollCorrection() ? _aspxGetDocumentScrollTop() : 0 );
}
function _aspxGetIEDocumentClientOffsetInternal(IsX){
 var clientOffset = 0;
 if(__aspxIE && __aspxBrowserVersion < 8){
  if(document.documentElement)
   clientOffset = IsX ? document.documentElement.clientLeft : document.documentElement.clientTop;
  if(clientOffset == 0 && document.body)
   var clientOffset = IsX ? document.body.clientLeft : document.body.clientTop;
 }
 return clientOffset;
}
function _aspxGetIsLeftButtonPressed(evt){
 if(ASPxClientTouchUI.isTouchEvent(evt)) 
  return true;
 evt = _aspxGetEvent(evt);
 if(!evt) return false;
 if(__aspxIE && __aspxBrowserVersion < 11){
  if(__aspxMSTouchUI)
   return true;
  return evt.button % 2 == 1; 
 }
 else if(__aspxNetscapeFamily || __aspxWebKitFamily || (__aspxIE && __aspxBrowserVersion >= 11))
  return evt.which == 1;
 else if (__aspxOpera)
  return evt.button == 0;  
 return true;  
}
function _aspxGetWheelDelta(evt){
 var ret = __aspxNetscapeFamily ? -evt.detail : evt.wheelDelta;
 if (__aspxOpera && __aspxBrowserVersion < 9)
  ret = -ret;
 return ret;
}
function _aspxDelCookie(name){
 _aspxSetCookieInternal(name, "", new Date(1970, 1, 1));
}
function _aspxGetCookie(name) {
 name = escape(name);
 var cookies = document.cookie.split(';');
 for(var i = 0; i < cookies.length; i++) {
  var cookie = _aspxTrim(cookies[i]);
  if(cookie.indexOf(name + "=") == 0)
   return unescape(cookie.substring(name.length + 1, cookie.length));
  else if(cookie.indexOf(name + ";") == 0 || cookie === name)
   return "";
 }
 return null;
}
function _aspxSetCookie(name, value, expirationDate){
 if(!_aspxIsExists(value)) {
  _aspxDelCookie(name);
  return;
 }
 if(!ASPxIdent.IsDate(expirationDate)) {
  expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);
 }
 _aspxSetCookieInternal(name, value, expirationDate);
}
function _aspxSetCookieInternal(name, value, date){
 document.cookie = escape(name) + "=" + escape(value.toString()) + "; expires=" + date.toGMTString() + "; path=/";
}
function _aspxSetElementOpacity(element, value) {
  var useOpacityStyle = !__aspxIE || __aspxBrowserVersion > 8;
  if (useOpacityStyle){
   element.style.opacity = value;
  } else {
   if(typeof(element.filters) === "object" && element.filters["DXImageTransform.Microsoft.Alpha"])
    element.filters.item("DXImageTransform.Microsoft.Alpha").Opacity = value*100;
   else
   element.style.filter = "alpha(opacity=" + (value * 100) + ")";
  }
}
function _aspxGetElementOpacity(element) {
 var useOpacityStyle = !__aspxIE || __aspxBrowserVersion > 8;
 if (useOpacityStyle)
  return parseFloat(_aspxGetCurrentStyle(element).opacity);
 else {
  if(typeof(element.filters) === "object" && element.filters["DXImageTransform.Microsoft.Alpha"]){
   return element.filters.item("DXImageTransform.Microsoft.Alpha").Opacity / 100;
  } else {
   var alphaValue = _aspxGetCurrentStyle(element).filter;
   var value = alphaValue.replace("alpha(opacity=", "");
   value = value.replace(")", "");
   return parseInt(value) / 100;
  }
  return 100;
 }
}
function _aspxGetElementDisplay(element){
 return element.style.display != "none";
}
function _aspxSetElementDisplay(element, value) {
 if(!element) return;
 element.style.display = value ? "" : "none";
}
function _aspxGetElementVisibility(element){
 return element.style.visibility != "hidden";
}
function _aspxSetElementVisibility(element, value){
 element.style.visibility = value ? "visible" : "hidden";
}
function _aspxElementIsVisible(element){
 while(element && element.tagName != "BODY") {
  if(!_aspxGetElementDisplay(element) || (!_aspxGetElementVisibility(element) && !_aspxIsExistsAttribute(element, "errorFrame")))
     return false;
  element = element.parentNode;
 }
 return true;
}
function _aspxElementIsDisplayed(element) {
 while(element && element.tagName != "BODY") {
  if(!_aspxGetElementDisplay(element))
     return false;
  element = element.parentNode;
 }
 return true;
}
function _aspxAddStyleSheetLinkToDocument(doc, linkUrl) {
 var newLink = _aspxCreateStyleLink(doc, linkUrl);
 var head = _aspxGetHeadElementOrCreateIfNotExist(doc);
 head.appendChild(newLink);
}
function _aspxGetHeadElementOrCreateIfNotExist(doc) {
 var elements = _aspxGetElementsByTagName(doc, "head");
 var head = null;
 if (elements.length == 0) {
  head = doc.createElement("head");
  head.visibility = "hidden";
  doc.insertBefore(head, doc.body);
 } else
  head = elements[0];
 return head;
}
function _aspxCreateStyleLink(doc, url) {
 var newLink = doc.createElement("link");
 _aspxSetAttribute(newLink, "href", url);
 _aspxSetAttribute(newLink, "type", "text/css");
 _aspxSetAttribute(newLink, "rel", "stylesheet");
 return newLink;
}
function _aspxGetCurrentStyle(element) {
 if(element.currentStyle)
  return element.currentStyle;
 else if(document.defaultView && document.defaultView.getComputedStyle) { 
  var result = document.defaultView.getComputedStyle(element, null);
  if(!result && __aspxFirefox && window.frameElement) {
   var changes = [];
   var curElement = window.frameElement;
   while(!(result = document.defaultView.getComputedStyle(element, null))) {
    changes.push([curElement, curElement.style.display]);
    _aspxSetStyleCore(curElement, "display", "block", true);
    curElement = curElement.tagName == "BODY" ? curElement.ownerDocument.defaultView.frameElement : curElement.parentNode;
   }
   result = _aspxCloneObject(result);
   for(var ch, i = 0; ch = changes[i]; i++)
    _aspxSetStyleCore(ch[0], "display", ch[1]);
  }
  return result;
 }
 return window.getComputedStyle(element, null);
}
function _aspxIsElementRightToLeft(element) {
 return _aspxGetElementDirection(element) == "rtl";
}
function _aspxCreateStyleSheetInDocument(doc) {
 if(doc.createStyleSheet) {
  try {
   return doc.createStyleSheet();
  }
  catch(e) {
   var message = "The CSS link limit (31) has been exceeded. Please enable CSS merging or reduce the number of CSS files on the page. For details, see http://www.devexpress.com/Support/Center/p/K18487.aspx.";
   throw new Error(message);
  }
 }
 else {
  var styleSheet = doc.createElement("STYLE");
  _aspxGetChildByTagName(doc, "HEAD", 0).appendChild(styleSheet);
  return styleSheet.sheet;
 }
}
function _aspxGetCurrentStyleSheet() {
 if(!__aspxStyleSheet)
  __aspxStyleSheet = _aspxCreateStyleSheetInDocument(document);
 return __aspxStyleSheet;
}
function _aspxCreateStyleSheet(){
 return _aspxCreateStyleSheetInDocument(document);
}
function _aspxGetStyleSheetRules(styleSheet){
 try {
  return __aspxIE ? styleSheet.rules : styleSheet.cssRules;
 }
 catch(e) {
  return null;
 }
}
function _aspxGetStyleSheetRule(className){
 if(__aspxCachedRules[className]) {
  if(__aspxCachedRules[className] != __aspxEmptyCachedValue)
   return __aspxCachedRules[className];
  return null;
 }
 for(var i = 0; i < document.styleSheets.length; i ++){
  var styleSheet = document.styleSheets[i];
  var rules = _aspxGetStyleSheetRules(styleSheet);
  if(rules != null){
   for(var j = 0; j < rules.length; j ++){
    if(rules[j].selectorText == "." + className){
     __aspxCachedRules[className] = rules[j];
     return rules[j];
    }
   }
  }
 }
 __aspxCachedRules[className] = __aspxEmptyCachedValue;
 return null;
}
function _aspxCreateImportantStyleRule(styleSheet, cssText, postfix, prefix) {
 styleSheet = styleSheet || _aspxGetCurrentStyleSheet();
 var cacheKey = (postfix ? postfix + "||" : "") + cssText + (prefix ? "||" + prefix : "");
 if(__aspxStyleNameCache[cacheKey])
  return __aspxStyleNameCache[cacheKey];
 prefix = prefix ? prefix + " " : "";
 var className = "dxh" + __aspxStyleCount + (postfix ? postfix : "");
 _aspxAddStyleSheetRule(styleSheet, prefix + "." + className, _aspxCreateImportantCssText(cssText));
 __aspxStyleCount++;
 __aspxStyleNameCache[cacheKey] = className;
 return className; 
}
function _aspxCreateImportantCssText(cssText) {
 var newText = "";
 var attributes = cssText.split(";");
 for(var i = 0; i < attributes.length; i++){
  if(attributes[i] != "")
   newText += attributes[i] + " !important;";
 }
 return newText;
}
function _aspxRemoveStyleSheetRule(styleSheet, index){
 var rules = _aspxGetStyleSheetRules(styleSheet);
 if(rules != null && rules.length > 0 && rules.length >= index){
  if(__aspxIE)
   styleSheet.removeRule(index);
  else   
   styleSheet.deleteRule(index);  
 }    
}
function _aspxAddStyleSheetRule(styleSheet, selector, cssText){
 if(!cssText) return;
 if(__aspxIE)
  styleSheet.addRule(selector, cssText);
 else
  styleSheet.insertRule(selector + " { " + cssText + " }", styleSheet.cssRules.length);
}
function _aspxGetPointerCursor() {
 return "pointer";
}
function _aspxSetPointerCursor(element) {
 if(element.style.cursor == "")
  element.style.cursor = _aspxGetPointerCursor();
}
function _aspxSetElementFloat(element, value) {
 if(_aspxIsExists(element.style.cssFloat))
  element.style.cssFloat = value;
 else if(_aspxIsExists(element.style.styleFloat))
  element.style.styleFloat = value;
 else
  _aspxSetAttribute(element.style, "float", value);
}
function _aspxGetElementFloat(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 if(_aspxIsExists(currentStyle.cssFloat))
  return currentStyle.cssFloat;
 if(_aspxIsExists(currentStyle.styleFloat))
  return currentStyle.styleFloat;
 return _aspxGetAttribute(currentStyle, "float");
}
function _aspxGetElementDirection(element) {
 return _aspxGetCurrentStyle(element).direction;
}
function _aspxSetElementDirection(element, value) {
 element.style.direction = value;
}
function _aspxAdjustVerticalMarginsInContainer(container) {
 var containerBorderAndPaddings = _aspxGetTopBottomBordersAndPaddingsSummaryValue(container);
 var flowElements = [], floatElements = [], floatTextElements = [];
 var maxHeight = 0, maxFlowHeight = 0;
 for(var i = 0; i < container.childNodes.length; i++) {
  var element = container.childNodes[i];
  if(!element.offsetHeight) continue;
  _aspxClearVerticalMargins(element);
 }
 for(var i = 0; i < container.childNodes.length; i++) {
  var element = container.childNodes[i];
  if(!element.offsetHeight) continue;
  var float = _aspxGetElementFloat(element);
  var isFloat = (float === "left" || float === "right");
  if(isFloat)
   floatElements.push(element)
  else {
   flowElements.push(element);
   if(element.tagName !== "IMG"){
    element.style.verticalAlign = 'baseline'; 
    floatTextElements.push(element);
   }
   if(element.tagName === "DIV")
    _aspxChangeStyleAttribute(element, "float", "left"); 
  }
  if(element.offsetHeight > maxHeight) 
   maxHeight = element.offsetHeight;
  if(!isFloat && element.offsetHeight > maxFlowHeight) 
   maxFlowHeight = element.offsetHeight;
 }
 for(var i = 0; i < flowElements.length; i++) 
  _aspxRestoreStyleAttribute(flowElements[i], "float");
 var containerBorderAndPaddings = _aspxGetTopBottomBordersAndPaddingsSummaryValue(container);
 var containerHeight = container.offsetHeight - containerBorderAndPaddings;
 if(maxHeight == containerHeight) {
  var verticalAlign = _aspxGetCurrentStyle(container).verticalAlign;
  for(var i = 0; i < floatTextElements.length; i++)
   floatTextElements[i].style.verticalAlign = '';
  containerHeight = container.offsetHeight - containerBorderAndPaddings;
  for(var i = 0; i < floatElements.length; i++)
   _aspxAdjustVerticalMarginsCore(floatElements[i], containerHeight, verticalAlign, true);
  for(var i = 0; i < flowElements.length; i++) {
   if(maxFlowHeight != maxHeight)
    _aspxAdjustVerticalMarginsCore(flowElements[i], containerHeight, verticalAlign);
  }
 }
}
function _aspxAdjustVerticalMargins(element) {
 _aspxClearVerticalMargins(element);
 var parentElement = element.parentNode;
 var parentHeight = parentElement.offsetHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(parentElement);
 _aspxAdjustVerticalMarginsCore(element, parentHeight, _aspxGetCurrentStyle(parentElement).verticalAlign);
}
function _aspxAdjustVerticalMarginsCore(element, parentHeight, verticalAlign, toBottom) {
 var marginTop;
 if(verticalAlign == "top")
  marginTop = 0;
 else if(verticalAlign == "bottom")
  marginTop = parentHeight - element.offsetHeight;
 else
  marginTop = (parentHeight - element.offsetHeight) / 2;
 if(marginTop !== 0){
  var marginAttr = (toBottom ? Math.ceil(marginTop) : Math.floor(marginTop)) + "px"
  element.style.marginTop = marginAttr;
 }
}
function _aspxClearVerticalMargins(element) {
 element.style.marginTop = "";
 element.style.marginBottom = "";
}
function _aspxAdjustHeightInContainer(container) {
 var height = container.offsetHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(container);
 for(var i = 0; i < container.childNodes.length; i++) {
  var element = container.childNodes[i];
  if(!element.offsetHeight) continue;
  _aspxClearHeight(element);
 }
 var elements = [];
 var childrenHeight = 0;
 for(var i = 0; i < container.childNodes.length; i++) {
  var element = container.childNodes[i];
  if(!element.offsetHeight) continue;
  childrenHeight += element.offsetHeight;
  elements.push(element);
 }
 if(elements.length > 0 && childrenHeight < height) {
  var correctedHeight = 0;
  for(var i = 0; i < elements.length; i++) {
   var elementHeight = 0;
   if(i < elements.length - 1){
    var elementHeight = Math.floor(height / elements.length);
    correctedHeight += elementHeight;
   }
   else{
    var elementHeight = height - correctedHeight;
    if(elementHeight < 0) elementHeight = 0;
   }
   _aspxAdjustHeightCore(elements[i], elementHeight);
  }
 }
}
function _aspxAdjustHeight(element) {
 _aspxClearHeight(element);
 var parentElement = element.parentNode;
 var height = parentElement.offsetHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(parentElement);
 _aspxAdjustHeightCore(element, height);
}
function _aspxAdjustHeightCore(element, height) {
 var height = height - _aspxGetTopBottomBordersAndPaddingsSummaryValue(element);
 element.style.height = height + "px";
}
function _aspxClearHeight(element) {
 element.style.height = "";
}
function _aspxAdjustWrappedTextInContainer(container) {
 if(!container) return;
 var textContainer, leftWidth = 0, rightWidth = 0;
 for(var i = 0; i < container.childNodes.length; i++){
  var child = container.childNodes[i];
  if(child.tagName === "BR")
   return;
  if(!child.tagName)
   continue;
  if(child.tagName !== "IMG"){
   textContainer = child;
   if(_aspxIsTextWrapped(textContainer)){
    textContainer.style.width = "";
    textContainer.style.marginRight = "";
   }
  }
  else {
   if(child.offsetWidth === 0){
    _aspxAttachEventToElement(child, "load", function (evt) {
     _aspxAdjustWrappedTextInContainer(container);
    });
    return;
   }
   var width = child.offsetWidth + _aspxGetLeftRightMargins(child);
   if(textContainer)
    rightWidth += width;
   else
    leftWidth += width;
  }
 }
 var containerWidth = container.offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(container);
 if(textContainer && _aspxIsTextWrapped(textContainer) && textContainer.offsetWidth + leftWidth + rightWidth >= containerWidth) {
   if(rightWidth > 0)
   textContainer.style.width = (containerWidth - rightWidth) + "px";
  else if(leftWidth > 0){
   if(_aspxIsElementRightToLeft(container))
    textContainer.style.marginLeft = leftWidth + "px";
   else
    textContainer.style.marginRight = leftWidth + "px";
  }
 }
}
function _aspxIsTextWrapped(element) {
 return element && _aspxGetCurrentStyle(element).whiteSpace !== "nowrap";
}
var _aspxWebKit3TDRealInfo = {
 GetOffsetTop: function(tdElement){
  switch(_aspxGetCurrentStyle(tdElement).verticalAlign){
   case "middle":
    return Math.round(tdElement.offsetTop - (tdElement.offsetHeight - tdElement.clientHeight )/2 + tdElement.clientTop);
   case "bottom":
    return tdElement.offsetTop - tdElement.offsetHeight + tdElement.clientHeight + tdElement.clientTop;
  }
  return tdElement.offsetTop;
 },
 GetClientHeight: function(tdElement){
  var valign = _aspxGetCurrentStyle(tdElement).verticalAlign;
  switch(valign){
   case "middle":
    return tdElement.clientHeight + tdElement.offsetTop * 2;
   case "top":
    return tdElement.offsetHeight - tdElement.clientTop * 2;
   case "bottom":
    return tdElement.clientHeight + tdElement.offsetTop;
  }
  return tdElement.clientHeight;
 }
}
function _aspxGetIsValidPosition(pos){
 return pos != __aspxInvalidPosition && pos != -__aspxInvalidPosition;
}
function _aspxGetAbsoluteX(curEl){
 return _aspxGetAbsolutePositionX(curEl);
}
function _aspxGetAbsoluteY(curEl){
 return _aspxGetAbsolutePositionY(curEl);
}
function _aspxSetAbsoluteX(element, x){
 element.style.left = _aspxPrepareClientPosForElement(x, element, true) + "px";
}
function _aspxSetAbsoluteY(element, y){
 element.style.top = _aspxPrepareClientPosForElement(y, element, false) + "px";
}
function _aspxGetAbsolutePositionX(element){
 if (__aspxIE)
  return _aspxGetAbsolutePositionX_IE(element);
 else if (__aspxFirefox && __aspxBrowserVersion >= 3)
  return _aspxGetAbsolutePositionX_FF3(element);
 else if (__aspxOpera)
  return _aspxGetAbsolutePositionX_Opera(element);
 else if(__aspxNetscapeFamily && (!__aspxFirefox || __aspxBrowserVersion < 3))
  return _aspxGetAbsolutePositionX_NS(element);
 else if(__aspxWebKitFamily)
  return _aspxGetAbsolutePositionX_Safari(element);
 else
  return _aspxGetAbsolutePositionX_Other(element);
}
function _aspxGetAbsolutePositionX_Opera(curEl){
 var isFirstCycle = true;
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, true);
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if(!isFirstCycle)
   pos -= curEl.scrollLeft;
  curEl = curEl.offsetParent;
  isFirstCycle = false;
 }
 pos += document.body.scrollLeft;
 return pos;
}
function _aspxGetAbsolutePositionX_IE(element){
 if(element == null || __aspxIE && element.parentNode == null) return 0; 
 return element.getBoundingClientRect().left + _aspxGetDocumentScrollLeft() - _aspxGetIEDocumentClientOffsetInternal(true);
}
function _aspxGetAbsolutePositionX_FF3(element){
 if(element == null) return 0;
 var x = element.getBoundingClientRect().left + _aspxGetDocumentScrollLeft();
 return Math.round(x);
}
function _aspxGetAbsolutePositionX_NS(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, true);
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollLeft;
  if (!isFirstCycle && __aspxFirefox){
   var style = _aspxGetCurrentStyle(curEl);
   if(curEl.tagName == "DIV" && style.overflow != "visible")
    pos += _aspxPxToInt(style.borderLeftWidth);
  }
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionX_Safari(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_WebKit(curEl, true);
 var isSafariVerNonLessThan3OrChrome = __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome;
 if(curEl != null){
  var isFirstCycle = true;
  if(isSafariVerNonLessThan3OrChrome && curEl.tagName == "TD") {
   pos += curEl.offsetLeft;
   curEl = curEl.offsetParent;
   isFirstCycle = false;
  }
  while (curEl != null) {
   pos += curEl.offsetLeft;
   var style = _aspxGetCurrentStyle(curEl);
   var posDiv = curEl.tagName == "DIV" && (style.position == "absolute" || style.position == "relative");
   if(!isFirstCycle && (curEl.tagName == "TD" || curEl.tagName == "TABLE" || posDiv))
    pos += curEl.clientLeft;
   isFirstCycle = false;
   curEl = curEl.offsetParent;
  }
 }
 return pos;
}
function _aspxGetAbsolutePositionX_Other(curEl){
 var pos = 0;
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetLeft;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollLeft;
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionY(element){
 if (__aspxIE)
  return _aspxGetAbsolutePositionY_IE(element);
 else if (__aspxFirefox && __aspxBrowserVersion >= 3)
  return _aspxGetAbsolutePositionY_FF3(element);
 else if (__aspxOpera)
  return _aspxGetAbsolutePositionY_Opera(element);
 else if(__aspxNetscapeFamily && (!__aspxFirefox || __aspxBrowserVersion < 3))
  return _aspxGetAbsolutePositionY_NS(element);
 else if(__aspxWebKitFamily)
  return _aspxGetAbsolutePositionY_Safari(element);
 else
  return _aspxGetAbsolutePositionY_Other(element);
}
function _aspxGetAbsolutePositionY_Opera(curEl){
 var isFirstCycle = true;
 if(curEl && curEl.tagName == "TR" && curEl.cells.length > 0)
  curEl = curEl.cells[0];
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, false);
 while (curEl != null) {
  pos += curEl.offsetTop;
  if(!isFirstCycle)
   pos -= curEl.scrollTop;
  curEl = curEl.offsetParent;
  isFirstCycle = false;
 }
 pos += document.body.scrollTop;
 return pos;
}
function _aspxGetAbsolutePositionY_IE(element){
 if(element == null || __aspxIE && element.parentNode == null) return 0; 
 return element.getBoundingClientRect().top + _aspxGetDocumentScrollTop() - _aspxGetIEDocumentClientOffsetInternal(false);
}
function _aspxGetAbsolutePositionY_FF3(element){
 if(element == null) return 0;
 var y = element.getBoundingClientRect().top + _aspxGetDocumentScrollTop();
 return Math.round(y);
}
function _aspxGetAbsolutePositionY_NS(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_OperaFF(curEl, false);
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetTop;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollTop;
  if (!isFirstCycle && __aspxFirefox){
   var style = _aspxGetCurrentStyle(curEl);
   if(curEl.tagName == "DIV" && style.overflow != "visible")
    pos += _aspxPxToInt(style.borderTopWidth);
  }
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxGetAbsolutePositionY_Safari(curEl){
 var pos = _aspxGetAbsoluteScrollOffset_WebKit(curEl, false);
 var isSafariVerNonLessThan3OrChrome = __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome;
 if(curEl != null){
  var isFirstCycle = true;
  if(isSafariVerNonLessThan3OrChrome && curEl.tagName == "TD") {
   pos += _aspxWebKit3TDRealInfo.GetOffsetTop(curEl);
   curEl = curEl.offsetParent;
   isFirstCycle = false;
  }
  while (curEl != null) {
   pos += curEl.offsetTop;
   var style = _aspxGetCurrentStyle(curEl);
   var posDiv = curEl.tagName == "DIV" && (style.position == "absolute" || style.position == "relative");
   if(!isFirstCycle && (curEl.tagName == "TD" || curEl.tagName == "TABLE" || posDiv))
    pos += curEl.clientTop;
   isFirstCycle = false;
   curEl = curEl.offsetParent;
  }
 }
 return pos;
}
function _aspxGetAbsoluteScrollOffset_OperaFF(curEl, isX) {
 var pos = 0;   
 var isFirstCycle = true;
 while (curEl != null) {
  if(curEl.tagName == "BODY")
   break;
  var style = _aspxGetCurrentStyle(curEl);
  if(style.position == "absolute")
   break;
  if(!isFirstCycle && curEl.tagName == "DIV" && (style.position == "" || style.position == "static"))
   pos -= isX ? curEl.scrollLeft : curEl.scrollTop;
  curEl = curEl.parentNode;
  isFirstCycle = false;
 }
 return pos; 
}
function _aspxGetAbsoluteScrollOffset_WebKit(curEl, isX) {
 var pos = 0;   
 var isFirstCycle = true;
 var step = 0;
 var absoluteWasFoundAtStep = -1;
 var isThereFixedParent = false;
 while (curEl != null) {
  if(curEl.tagName == "BODY")
   break;
  var style = _aspxGetCurrentStyle(curEl);
  var positionIsDefault = style.position == "" || style.position == "static";
  var absoluteWasFoundAtPreviousStep = absoluteWasFoundAtStep >= 0 && absoluteWasFoundAtStep < step;
  if(!isFirstCycle && (curEl.tagName == "DIV" || curEl.tagName == "FORM") && (!positionIsDefault || !absoluteWasFoundAtPreviousStep))
   pos -= isX ? curEl.scrollLeft : curEl.scrollTop;
  if(style.position == "absolute")
   absoluteWasFoundAtStep = step;
  else if(style.position == "relative")
   absoluteWasFoundAtStep = -1;
  else if(style.position == "fixed")
   isThereFixedParent = true;
  curEl = curEl.parentNode;
  isFirstCycle = false;
  step ++;
 }
 if(isThereFixedParent)
  pos += isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
 return pos; 
}
function _aspxGetAbsolutePositionY_Other(curEl){
 var pos = 0;
 var isFirstCycle = true;
 while (curEl != null) {
  pos += curEl.offsetTop;
  if (!isFirstCycle && curEl.offsetParent != null)
   pos -= curEl.scrollTop;
  isFirstCycle = false;
  curEl = curEl.offsetParent;
 }
 return pos;
}
function _aspxCreateElementMoke(element) {
 var div = document.createElement('DIV');
 div.style.top = "0px";
 div.style.left = "0px";
 div.visibility = "hidden";
 div.style.position = _aspxGetCurrentStyle(element).position;
 return div;
}
function _aspxPrepareClientPosElementForOtherParent(pos, element, otherParent, isX) {
 if(element.parentNode == otherParent)
  return _aspxPrepareClientPosForElement(pos, element, isX);
 var elementMoke = _aspxCreateElementMoke(element);
 otherParent.appendChild(elementMoke); 
 var preparedPos = _aspxPrepareClientPosForElement(pos, elementMoke, isX);
 otherParent.removeChild(elementMoke);
 return preparedPos;
}
function _aspxPrepareClientPosForElement(pos, element, isX) {
 pos -= _aspxGetPositionElementOffset(element, isX);
 return pos;
}
function _aspxGetExperimentalPositionOffset(element, isX) {
    var div = _aspxCreateElementMoke(element);
    if (__aspxFirefox && __aspxBrowserVersion >= 10 && div.style.position == "static")
     div.style.position = "absolute";
    element.parentNode.appendChild(div); 
    var realPos = isX ? _aspxGetAbsoluteX(div) : _aspxGetAbsoluteY(div);
    element.parentNode.removeChild(div);
    return realPos;
}
function _aspxTestElementParentsByFunc(element, func) {
 while(element) {  
  var tagName = element.tagName;
  if(tagName == "HTML" || tagName == "BODY" )
   return false;
  if(func(element)) 
   return true;
  element = element.parentNode; 
 }
 return false;   
}
function _aspxGetPositionElementOffset(element, isX) {
 if(__aspxFirefox && __aspxBrowserVersion >= 10){ 
  return _aspxGetExperimentalPositionOffset(element, isX);
 }
 return _aspxGetPositionElementOffsetCore(element, isX);
}
function _aspxGetPositionElementOffsetCore(element, isX) {
 var curEl = element.offsetParent;
 var offset = 0;
 var scroll = 0;
 var isThereFixedParent = false;
 var isFixed = false;
 var hasDisplayTableParent = false;
 var position = "";
 while(curEl != null) {
  var tagName = curEl.tagName;
  if(tagName == "HTML"){
   break;
  }
  if(tagName == "BODY"){
   if(!__aspxOpera && !__aspxChrome){
    var style = _aspxGetCurrentStyle(curEl);
    if(style.position != "" && style.position != "static"){
     offset += _aspxPxToInt(isX ? style.left : style.top);
     offset += _aspxPxToInt(isX ? style.marginLeft : style.marginTop);
    }
   }
   break;
  }
  if(tagName != "TD" && tagName != "TR") {
   var style = _aspxGetCurrentStyle(curEl);
   isFixed = style.position == "fixed";
   if(isFixed) {
    isThereFixedParent = true;
    if(__aspxIE && __aspxBrowserVersion >= 8) {
     return _aspxGetExperimentalPositionOffset(element, isX); 
    }
   }
   hasDisplayTableParent = style.display == "table" && (style.position == "absolute" || style.position == "relative");
   if(hasDisplayTableParent && __aspxIE && __aspxBrowserVersion >= 8)
    return _aspxGetExperimentalPositionOffset(element, isX);
   if (style.position == "absolute" || isFixed || style.position == "relative") {
    offset += isX ? curEl.offsetLeft : curEl.offsetTop;
    offset += _aspxPxToInt(isX ? style.borderLeftWidth : style.borderTopWidth);
   }
   if(style.position == "relative" && !(__aspxIE && __aspxBrowserVersion < 8)) 
    scroll += _aspxGetElementChainScroll(curEl, curEl.offsetParent, isX);
  }
  scroll += isX ? curEl.scrollLeft : curEl.scrollTop;
  curEl = curEl.offsetParent;
 }
 offset -= scroll; 
 if((__aspxIE && __aspxBrowserVersion >= 7 || __aspxFirefox && __aspxBrowserVersion >= 3 || __aspxWebKitFamily) && isThereFixedParent)
  offset += isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
 return offset;
}
function _aspxGetElementChainScroll(startElement, endElement, isX){
 var curEl = startElement.parentNode;
 var scroll = 0;
 while(curEl != endElement){
  scroll += isX ? curEl.scrollLeft : curEl.scrollTop;
  curEl = curEl.parentNode;
 }
 return scroll;
}
function _aspxGetSizeOfText(text, textCss) {
 var testContainer = document.createElement("tester");
 testContainer.style.fontSize = textCss.fontSize;
 testContainer.style.fontFamily = textCss.fontFamily;
 testContainer.style.fontWeight = textCss.fontWeight;
 testContainer.style.letterSpacing = textCss.letterSpacing;
 testContainer.style.lineHeight = textCss.lineHeight;
 testContainer.style.position = "absolute";
 testContainer.style.top = __aspxInvalidPosition + "px";
 testContainer.style.left = __aspxInvalidPosition + "px";
 testContainer.style.width = "auto";
 testContainer.style.whiteSpace = "nowrap";
 testContainer.appendChild(document.createTextNode(text));
 var testElement = document.body.appendChild(testContainer);
 var size = {
  "width": testElement.offsetWidth,
  "height": testElement.offsetHeight
 };
 document.body.removeChild(testElement);
 return size;
}
function _aspxIsValidJSON(JsonString) {
 return !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(JsonString.replace(/"(\\.|[^"\\])*"/g, '')))
}
function _aspxEvalJSON(jsonString, controlName) {
 if(_aspxIsValidJSON(jsonString))
  return eval("(" + jsonString + ")");
 else
  throw new Error(controlName + " received incorrect JSON-data: " + jsonString);
}
function _aspxPointToPixel(points, addPx) {  
 var result = 0;
 try {
  var indexOfPt = points.toLowerCase().indexOf("pt");
  if (indexOfPt > -1)
   result = parseInt(points.substr(0, indexOfPt)) * 96 / 72;
  else
   result = parseInt(points) * 96 / 72;
  if (addPx)
   result = result + "px";
 } catch(e) {}
 return result;
}
function _aspxPixelToPoint(pixels, addPt) { 
 var result = 0;
 try {
  var indexOfPx = pixels.toLowerCase().indexOf("px");
  if (indexOfPx > -1)
   result = parseInt(pixels.substr(0, indexOfPx)) * 72 / 96;
  else
   result = parseInt(pixels) * 72 / 96;
  if (addPt)
   result = result + "pt";
 } catch(e) {}
 return result;         
}
function _aspxPxToInt(px) {
 return _aspxPxToNumber(px, parseInt);
}
function _aspxPxToFloat(px) {
 return _aspxPxToNumber(px, parseFloat);
}
function _aspxPxToNumber(px, parseFunction) {
 var result = 0;
 if (px != null && px != "") {
  try {
   var indexOfPx = px.indexOf("px");
   if (indexOfPx > -1)
    result = parseFunction(px.substr(0, indexOfPx));
  } catch(e) { }
 }
 return result;
}
function _aspxIsNumber(str) {
 return !isNaN(parseFloat(str)) && isFinite(str);
}
function _aspxPercentageToFloat(perc) {
 var result = 0;
 if(perc != null && perc != "") {
  try {
   var indexOfPerc = perc.indexOf("%");
   if(indexOfPerc > -1)
    result = parseFloat(perc.substr(0, indexOfPerc)) / 100;
  } catch(e) { }
 }
 return result;
}
function _aspxGetLeftRightBordersAndPaddingsSummaryValue(element, currentStyle) {
 if(!_aspxIsExists(currentStyle))
  currentStyle = _aspxGetCurrentStyle(element);
 var value = _aspxPxToInt(currentStyle.paddingLeft) + _aspxPxToInt(currentStyle.paddingRight);
 return value + _aspxGetHorizontalBordersWidth(element, currentStyle);
}
function _aspxGetTopBottomBordersAndPaddingsSummaryValue(element, currentStyle) {
 if(!_aspxIsExists(currentStyle))
  currentStyle = _aspxGetCurrentStyle(element);
 var value = _aspxPxToInt(currentStyle.paddingTop) + _aspxPxToInt(currentStyle.paddingBottom);
 return value + _aspxGetVerticalBordersWidth(element, currentStyle);
}
function _aspxGetVerticalBordersWidth(element, style) {
 if(!_aspxIsExists(style))
  style = _aspxGetCurrentStyle(element);
 var res = 0;
 if(style.borderTopStyle != "none")
  res += _aspxPxToFloat(style.borderTopWidth);
 if(style.borderBottomStyle != "none")
  res += _aspxPxToFloat(style.borderBottomWidth);
 return res;
}
function _aspxGetHorizontalBordersWidth(element, style) {
 if(!_aspxIsExists(style))
  style = _aspxGetCurrentStyle(element);
 var res = 0;
 if(style.borderLeftStyle != "none")
  res += _aspxPxToFloat(style.borderLeftWidth);
 if(style.borderRightStyle != "none")
  res += _aspxPxToFloat(style.borderRightWidth);
 return res;
}
function _aspxGetTopBottomMargins(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 return _aspxPxToInt(currentStyle.marginTop) + _aspxPxToInt(currentStyle.marginBottom);
}
function _aspxGetLeftRightMargins(element) {
 var currentStyle = _aspxGetCurrentStyle(element);
 return _aspxPxToInt(currentStyle.marginLeft) + _aspxPxToInt(currentStyle.marginRight);
}
function _aspxGetCeilOffsetHeight(element) {
 if(__aspxIE && __aspxBrowserVersion > 9)
  return Math.ceil(element.getBoundingClientRect().height);
 return element.offsetHeight;
}
function _aspxGetClearClientWidth(element) {
 return element.offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(element);
}
function _aspxGetClearClientHeight(element) {
 return element.offsetHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(element);
}
function _aspxSetOffsetWidth(element, widthValue, currentStyle) {
 if(!_aspxIsExists(currentStyle))
  currentStyle = _aspxGetCurrentStyle(element);
 var value = widthValue - _aspxPxToInt(currentStyle.marginLeft) - _aspxPxToInt(currentStyle.marginRight);
  value -= _aspxGetLeftRightBordersAndPaddingsSummaryValue(element, currentStyle);
 if(value > -1)
  element.style.width = value + "px";
}
function _aspxSetOffsetHeight(element, heightValue, currentStyle) {
 if(!_aspxIsExists(currentStyle))
  currentStyle = _aspxGetCurrentStyle(element);
 var value = heightValue - _aspxPxToInt(currentStyle.marginTop) - _aspxPxToInt(currentStyle.marginBottom);
  value -= _aspxGetTopBottomBordersAndPaddingsSummaryValue(element, currentStyle);
 if(value > -1)
  element.style.height = value + "px";
}
function _aspxFindOffsetParent(element) {
 if(__aspxIE && __aspxBrowserVersion < 8)
  return element.offsetParent;
 var currentElement = element.parentNode;
 while(_aspxIsExistsElement(currentElement) && currentElement.tagName != "BODY") {
  if (currentElement.offsetWidth > 0 && currentElement.offsetHeight > 0)
   return currentElement;
  currentElement = currentElement.parentNode;
 }
 return document.body;
}
function _aspxGetDocumentScrollTop(){
 if(__aspxWebKitFamily) {
  if(__aspxMacOSMobilePlatform) 
   return window.pageYOffset;
  else 
   return document.body.scrollTop;
 }
 else
  return document.documentElement.scrollTop;
}
function _aspxSetDocumentScrollTop(scrollTop) {
 if(__aspxWebKitFamily) {
  if(__aspxMacOSMobilePlatform) 
   window.pageYOffset = scrollTop;
  else 
   document.body.scrollTop = scrollTop;
 }
 else
  document.documentElement.scrollTop = scrollTop;
}
function _aspxGetDocumentScrollLeft(){
 if(__aspxIE && __aspxBrowserVersion < 8) {
  var body = document.body || document.documentElement;
  if(_aspxIsElementRightToLeft(body))
   return body.scrollWidth - body.scrollLeft - body.clientWidth;
 }
 if(__aspxWebKitFamily)
  return document.body.scrollLeft;
 return document.documentElement.scrollLeft;
}
function _aspxSetDocumentScrollLeft(scrollLeft) {
 if(__aspxWebKitFamily) {
  if(__aspxMacOSMobilePlatform)
   window.pageXOffset = scrollLeft;
  else 
   document.body.scrollLeft = scrollLeft;
 }
 else
  document.documentElement.scrollLeft = scrollLeft;
}
function _aspxGetDocumentClientWidth(){
 if(__aspxIE && __aspxBrowserVersion == 5.5 || document.documentElement.clientWidth == 0)
  return document.body.clientWidth;
 else
  return document.documentElement.clientWidth;
}
function _aspxGetDocumentClientHeight() {
 if (__aspxFirefox && window.innerHeight - document.documentElement.clientHeight > _aspxGetVerticalScrollBarWidth()) {
  return window.innerHeight;
 } else if (__aspxOpera && __aspxBrowserVersion < 9.6 || document.documentElement.clientHeight == 0) {
   return document.body.clientHeight
 }
 return document.documentElement.clientHeight;
}
function _aspxSetStyles(element, styles, makeImportant) {
 if (_aspxIsExists(styles.cssText))
  element.style.cssText = styles.cssText;
 if (_aspxIsExists(styles.className))
  element.className = styles.className;
 for (var property in styles) {
  if(!styles.hasOwnProperty(property))
   continue;
  var value = styles[property];
  switch (property) {
   case "cssText":
   case "className":
    break;
   case "float":
    _aspxSetElementFloat(element, value);
    break;
   case "opacity":
    _aspxSetElementOpacity(element, value);
    break;
   case "zIndex":
    _aspxSetStyleCore(element, property, value, makeImportant);
    break;
   default:
    _aspxSetStyleCore(element, property, value + (typeof (value) == "number" ? "px" : ""), makeImportant);
  }
 }
}
function _aspxSetStyleCore(element, property, value, makeImportant) {
 if(makeImportant) {
  var index = property.search("[A-Z]");
  if(index != -1)
   property = property.replace(property.charAt(index), "-" + property.charAt(index).toLowerCase());
  if(element.style.setProperty)
   element.style.setProperty(property, value, "important");
  else 
   element.style.cssText += ";" + property + ":" + value + "!important";
 }
 else
  element.style[property] = value;
}
function _aspxGetDocumentWidth(){
 var bodyWidth = document.body.offsetWidth;
 var docWidth = (__aspxIE && __aspxBrowserMajorVersion != 7) ? document.documentElement.clientWidth : document.documentElement.offsetWidth;
 var bodyScrollWidth = document.body.scrollWidth;
 var docScrollWidth = document.documentElement.scrollWidth;
 return _aspxGetMaxDimensionOf(bodyWidth, docWidth, bodyScrollWidth, docScrollWidth);
}
function _aspxGetDocumentHeight(){
 var bodyHeight = document.body.offsetHeight;
 var docHeight = (__aspxIE && __aspxBrowserMajorVersion != 7) ? document.documentElement.clientHeight : document.documentElement.offsetHeight;
 var bodyScrollHeight = document.body.scrollHeight;
 var docScrollHeight = document.documentElement.scrollHeight;
 var maxHeight = _aspxGetMaxDimensionOf(bodyHeight, docHeight, bodyScrollHeight, docScrollHeight);
 if(__aspxOpera && __aspxBrowserVersion >= 9.6){
  if(__aspxBrowserVersion < 10)
   maxHeight = _aspxGetMaxDimensionOf(bodyHeight, docHeight, bodyScrollHeight);
  var visibleHeightOfDocument = document.documentElement.clientHeight;
  if(maxHeight > visibleHeightOfDocument)
   maxHeight = _aspxGetMaxDimensionOf(window.outerHeight, maxHeight);
  else
   maxHeight = document.documentElement.clientHeight;
  return maxHeight;
 }
 return maxHeight;
}
function _aspxGetDocumentMaxClientWidth(){
 var bodyWidth = document.body.offsetWidth;
 var docWidth = document.documentElement.offsetWidth;
 var docClientWidth = document.documentElement.clientWidth;
 return _aspxGetMaxDimensionOf(bodyWidth, docWidth, docClientWidth);
}
function _aspxGetDocumentMaxClientHeight(){
 var bodyHeight = document.body.offsetHeight;
 var docHeight = document.documentElement.offsetHeight;
 var docClientHeight = document.documentElement.clientHeight;
 return _aspxGetMaxDimensionOf(bodyHeight, docHeight, docClientHeight);
}
function _aspxGetMaxDimensionOf(){
 var max = __aspxInvalidDimension;
 for (var i = 0; i < arguments.length; i++){
  if(max < arguments[i])
   max = arguments[i];
 }
 return max;
}
function _aspxGetClientLeft(element){
 return _aspxIsExists(element.clientLeft) ? element.clientLeft : (element.offsetWidth - element.clientWidth) / 2;
}
function _aspxGetClientTop(element){
 return _aspxIsExists(element.clientTop) ? element.clientTop : (element.offsetHeight - element.clientHeight) / 2;
}
function _aspxRemoveBorders(element) {
 if(!element)
  return;
 element.style.borderWidth = 0;
 for(var i = 0; i < element.childNodes.length; i++) {
  var child = element.childNodes[i];
  if(child.style)
   child.style.border = "0";
 }
}
function _aspxSetBackground(element, background) {
 if(!element)
  return;
 element.style.backgroundColor = background;
 for(var i = 0; i < element.childNodes.length; i++) {
  var child = element.childNodes[i];
  if(child.style)
   child.style.backgroundColor = background;
 }
}
function _aspxDoElementClick(element) {
 try{
  element.click();
 }
 catch(e){ 
 }
}
function _aspxGetCellSpacing(element) {
 var val = parseInt(element.cellSpacing);
 if(!isNaN(val)) return val;
 val = parseInt(_aspxGetCurrentStyle(element).borderSpacing);
 if(!isNaN(val)) return val;
 return 0;
}
function _aspxGetInnerScrollPositions(element) {
 var scrolls = [];
 _aspxGetInnerScrollPositionsCore(element, scrolls);
 return scrolls;
}
function _aspxGetInnerScrollPositionsCore(element, scrolls) {
 for(var child = element.firstChild; child; child = child.nextSibling) {
  var scrollTop = child.scrollTop,
   scrollLeft = child.scrollLeft;
  if(scrollTop > 0 || scrollLeft > 0)
   scrolls.push([child, scrollTop, scrollLeft]);
  _aspxGetInnerScrollPositionsCore(child, scrolls);
 }
}
function _aspxRestoreInnerScrollPositions(scrolls) {
 for(var i = 0, scrollArr; scrollArr = scrolls[i]; i++) {
  if(scrollArr[1] > 0)
   scrollArr[0].scrollTop = scrollArr[1];
  if(scrollArr[2] > 0)
   scrollArr[0].scrollLeft = scrollArr[2];
 }
}
function _aspxGetOuterScrollPosition(element) {
 while(element.tagName !== "BODY") {
  var scrollTop = element.scrollTop,
   scrollLeft = element.scrollLeft;
  if(scrollTop > 0 || scrollLeft > 0) {
   return {
    scrollTop: scrollTop,
    scrollLeft: scrollLeft,
    element: element
   };
  }
  element = element.parentNode;
 }
 return {
  scrollTop: _aspxGetDocumentScrollTop(),
  scrollLeft: _aspxGetDocumentScrollLeft()
 };
}
function _aspxRestoreOuterScrollPosition(scrollInfo) {
 if(scrollInfo.element) {
  if(scrollInfo.scrollTop > 0)
   scrollInfo.element.scrollTop = scrollInfo.scrollTop;
  if(scrollInfo.scrollLeft > 0)
   scrollInfo.element.scrollLeft = scrollInfo.scrollLeft;
 }
 else {
  if(scrollInfo.scrollTop > 0)
   _aspxSetDocumentScrollTop(scrollInfo.scrollTop);
  if(scrollInfo.scrollLeft > 0)
   _aspxSetDocumentScrollLeft(scrollInfo.scrollLeft);
 }
}
function _aspxSetSelection(input, startPos, endPos, scrollToSelection) {
 if(!_aspxIsExistsElement(input))
  return;
 var textLen = input.value.length;
 startPos = _aspxGetDefinedValue(startPos, 0);
 endPos = _aspxGetDefinedValue(endPos, textLen);
 if(startPos < 0)
  startPos = 0;
 if(endPos < 0 || endPos > textLen)
  endPos = textLen;
 if(startPos > endPos)
  startPos = endPos;
 var makeReadOnly = false;
 if(__aspxWebKitFamily && input.readOnly) {
  input.readOnly = false;
  makeReadOnly = true;
 }
 try {
  if (__aspxFirefox && __aspxBrowserVersion >= 8) 
   input.setSelectionRange(startPos, endPos, "backward")
  else if (__aspxIE && __aspxBrowserVersion < 9)  {
   var range = input.createTextRange();
   range.collapse(true);
   range.moveStart("character", startPos);
   range.moveEnd("character", endPos - startPos);
   range.select();
  } else
   input.setSelectionRange(startPos, endPos);
  if(__aspxOpera || __aspxFirefox) 
   input.focus();
 } catch(e) { 
 }
 if(scrollToSelection && input.tagName == 'TEXTAREA') {
  var scrollHeight = input.scrollHeight;
  var approxCaretPos = startPos;
  var scrollTop = Math.max(Math.round(approxCaretPos * scrollHeight / textLen  - input.clientHeight / 2), 0);
  input.scrollTop = scrollTop;
 }
 if(makeReadOnly)
  input.readOnly = true;
}
function _aspxGetSelectionInfo(input) {
 var start, end;
 if(__aspxIE && __aspxBrowserVersion < 9) {
  var range = document.selection.createRange();
  var rangeCopy = range.duplicate();
  range.move('character', -input.value.length);
  range.setEndPoint('EndToStart', rangeCopy);
  start = range.text.length;
  end = start + rangeCopy.text.length;
 } else {
  try {
   start = input.selectionStart;
   end = input.selectionEnd;
  } catch (e) {
  }
 }
 return { startPos: start, endPos: end };
}
function _aspxGetExtSelectionInfo(input) {
 var start = 0, end = 0, textLen = 0;
 if (__aspxIE && __aspxBrowserVersion < 9) {
  var normalizedValue;
  var range, textInputRange, textInputEndRange;
  range = document.selection.createRange();
  if (range && range.parentElement() == input) {
   textLen = input.value.length;
   normalizedValue = input.value.replace(/\r\n/g, "\n");
   textInputRange = input.createTextRange();
   textInputRange.moveToBookmark(range.getBookmark());
   textInputEndRange = input.createTextRange();
   textInputEndRange.collapse(false);
   if (textInputRange.compareEndPoints("StartToEnd", textInputEndRange) > -1) {
    start = textLen;
    end = textLen;
   } else {
    start = normalizedValue.slice(0, start).split("\n").length - textInputRange.moveStart("character", -textLen) -1;
    if (textInputRange.compareEndPoints("EndToEnd", textInputEndRange) > -1)
     end = textLen;
    else
     end = normalizedValue.slice(0, end).split("\n").length - textInputRange.moveEnd("character", -textLen) - 1;    
   }
  }
  return {startPos: start, endPos: end};
 }
 try {
  start = input.selectionStart;
  end = input.selectionEnd;
 } catch (e) {
 }
 return {startPos: start, endPos: end}; 
}
function _aspxSetCaretPosition(input, caretPos) {
 if(typeof caretPos === "undefined" || caretPos < 0)
  caretPos = input.value.length;
 _aspxSetSelection(input, caretPos, caretPos, true);
}
_aspxSetInputSelection = _aspxSetSelectionCore = _aspxSetSelection;
_aspxClearInputSelection = _aspxSetCaretPosition;
function _aspxSetFocus(element, selectAction) {
 function focusCore(element, selectAction){
  try {
    element.focus();
    if(__aspxIE && document.activeElement != element)
     element.focus();
    if(selectAction) {
     var currentSelection = _aspxGetSelectionInfo(element);
     if(currentSelection.startPos == currentSelection.endPos) {
      switch(selectAction) {
       case "start":
        _aspxSetCaretPosition(element, 0);
        break;
       case "all":
        _aspxSetSelection(element);
        break;
      }
     }
    }
   } catch (e) {
  }
 }
 if(ASPxClientUtils.iOSPlatform) 
  focusCore(element, selectAction);
 else {
  window.setTimeout(function() { 
   focusCore(element, selectAction);
  }, 100);
 }
}
function _aspxIsFocusableCore(element, skipContainerVisibilityCheck) {
 var current = element;
 while(current && current.nodeType == 1) {
  if (current == element || !skipContainerVisibilityCheck(current)) {
   if (current.tagName == "BODY")
    return true;
   if (current.disabled || !_aspxGetElementDisplay(current) || !_aspxGetElementVisibility(current))
    return false;
  }
  current = current.parentNode;
 }
 return true;
}
function _aspxIsFocusable(element) {
 return _aspxIsFocusableCore(element, _aspxFalseFunction);
}
function _aspxAttachEventToElement(element, eventName, func, onlyBubbling) {
 if(element.addEventListener)
  element.addEventListener(eventName, func, !onlyBubbling);
 else
  element.attachEvent("on" + eventName, func);
}
function _aspxDetachEventFromElement(element, eventName, func) {
 if(element.removeEventListener)
  element.removeEventListener(eventName, func, true);
 else
  element.detachEvent("on" + eventName, func);
}
function _aspxAttachEventToDocument(eventName, func) {
 var attachingAllowed = ASPxClientTouchUI.onEventAttachingToDocument(eventName, func);
 if(attachingAllowed)
  _aspxAttachEventToDocumentCore(eventName, func);
}
function _aspxAttachEventToDocumentCore(eventName, func) {
 _aspxAttachEventToElement(document, eventName, func);
}
function _aspxDetachEventFromDocument(eventName, func) {
 _aspxDetachEventFromDocumentCore(eventName, func);
 ASPxClientTouchUI.onEventDettachedFromDocument(eventName, func);
}
function _aspxDetachEventFromDocumentCore(eventName, func){
 _aspxDetachEventFromElement(document, eventName, func);
}
function _aspxCreateEventHandlerFunction(funcName, controlName, withHtmlEventArg) {
 if(withHtmlEventArg)
  return function(e) { window[funcName](controlName, e) };
 return function() { window[funcName](controlName) };
}
function _aspxGetMouseWheelEventName(){
 return __aspxNetscapeFamily ? "DOMMouseScroll" : "mousewheel";
}
function _aspxAttachMouseEnterToElement(element, onMouseOverHandler, onMouseOutHandler) {
 _aspxAttachEventToElement(element, "mouseover", function(evt) { _aspxMouseEnterHandler(evt, element, onMouseOverHandler, onMouseOutHandler); });
 _aspxAttachEventToElement(element, "mouseout", function(evt) { _aspxMouseEnterHandler(evt, element, onMouseOverHandler, onMouseOutHandler); });
}
function _aspxMouseEnterHandler(evt, element, onMouseOverHandler, onMouseOutHandler) {
 var isMouseOverExecuted = !!element.dxMouseOverExecuted;
 var isMouseOverEvent = (evt.type == "mouseover");
 if (isMouseOverEvent && isMouseOverExecuted || !isMouseOverEvent && !isMouseOverExecuted)
  return;
 var source = evt.relatedTarget || (isMouseOverEvent ? evt.srcElement : evt.toElement);
 if (!_aspxGetIsParent(element, source)) {
  element.dxMouseOverExecuted = isMouseOverEvent;
  if(isMouseOverEvent)
   onMouseOverHandler(element);
  else
   onMouseOutHandler(element);
 }
 else if (isMouseOverEvent && !isMouseOverExecuted) {
  element.dxMouseOverExecuted = true;
  onMouseOverHandler(element);
 }
}
function _aspxCreateClass(parentClass, properties) {
 var ret = function() {
  if (ret.preparing) 
   return delete(ret.preparing);
  if (ret.constr) {
   this.constructor = ret;
   ret.constr.apply(this, arguments);
  }
 }
 ret.prototype = {};
 if(parentClass) {
  parentClass.preparing = true;
  ret.prototype = new parentClass;
  ret.prototype.constructor = parentClass;
  ret.constr = parentClass;
 }
 if(properties) {
  var constructorName = "constructor";
  for(var name in properties){
   if (name != constructorName) 
    ret.prototype[name] = properties[name];
  }
  if (properties[constructorName] && properties[constructorName] != Object)
   ret.constr = properties[constructorName];
 }
 return ret;
}
function _aspxGetAttribute(obj, attrName){
 if(obj.getAttribute)
  return obj.getAttribute(attrName);
 else if(obj.getPropertyValue)
  return obj.getPropertyValue(attrName);
 return null;
}
function _aspxSetAttribute(obj, attrName, value){
 if(obj.setAttribute)
  obj.setAttribute(attrName, value);
 else if(obj.setProperty)
  obj.setProperty(attrName, value, "");
}
function _aspxRemoveAttribute(obj, attrName){
 if(obj.removeAttribute)
  obj.removeAttribute(attrName);
 else if(obj.removeProperty)
  obj.removeProperty(attrName);
}
function _aspxIsExistsAttribute(obj, attrName){
 var value = _aspxGetAttribute(obj, attrName);
 return (value != null) && (value !== "");
}
function _aspxSetOrRemoveAttribute(obj, attrName, value) {
 if (!value)
  _aspxRemoveAttribute(obj, attrName);
 else
  _aspxSetAttribute(obj, attrName, value);
}
function _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName){
 if(!_aspxIsExistsAttribute(savedObj, savedAttrName)){
  var oldValue = _aspxIsExistsAttribute(obj, attrName) ? _aspxGetAttribute(obj, attrName) : __aspxEmptyAttributeValue;
  _aspxSetAttribute(savedObj, savedAttrName, oldValue);
 }
}
function _aspxSaveStyleAttribute(obj, attrName){
 _aspxSaveAttribute(obj.style, attrName, obj, "saved" + attrName);
}
function _aspxChangeAttributeExtended(obj, attrName, savedObj, savedAttrName, newValue){
 _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName);
 _aspxSetAttribute(obj, attrName, newValue);
}
function _aspxChangeAttribute(obj, attrName, newValue){
 _aspxChangeAttributeExtended(obj, attrName, obj, "saved" + attrName, newValue);
}
function _aspxChangeStyleAttribute(obj, attrName, newValue){
 _aspxChangeAttributeExtended(obj.style, attrName, obj, "saved" + attrName, newValue);
}
function _aspxResetAttributeExtended(obj, attrName, savedObj, savedAttrName){
 _aspxSaveAttribute(obj, attrName, savedObj, savedAttrName);
 _aspxSetAttribute(obj, attrName, "");
 _aspxRemoveAttribute(obj, attrName);
}
function _aspxResetAttribute(obj, attrName){
 _aspxResetAttributeExtended(obj, attrName, obj, "saved" + attrName);
}
function _aspxResetStyleAttribute(obj, attrName){
 _aspxResetAttributeExtended(obj.style, attrName, obj, "saved" + attrName);
}
function _aspxRestoreAttributeExtended(obj, attrName, savedObj, savedAttrName){
 if(_aspxIsExistsAttribute(savedObj, savedAttrName)){
  var oldValue = _aspxGetAttribute(savedObj, savedAttrName);
  if(oldValue != __aspxEmptyAttributeValue)
   _aspxSetAttribute(obj, attrName, oldValue);
  else
   _aspxRemoveAttribute(obj, attrName);
  _aspxRemoveAttribute(savedObj, savedAttrName);
  return true;
 }
 return false;
}
function _aspxRestoreAttribute(obj, attrName){
 return _aspxRestoreAttributeExtended(obj, attrName, obj, "saved" + attrName);
}
function _aspxRestoreStyleAttribute(obj, attrName){
 return _aspxRestoreAttributeExtended(obj.style, attrName, obj, "saved" + attrName);
}
function _aspxCopyAllAttributes(sourceElem, destElement) {
 var attrs = sourceElem.attributes;
 for (var n = 0; n < attrs.length; n++) {
  var attr = attrs[n];
  if (attr.specified) {
   var attrName = attr.nodeName;
   var attrValue = sourceElem.getAttribute(attrName, 2);
   if (attrValue == null)
    attrValue = attr.nodeValue;
   destElement.setAttribute(attrName, attrValue, 0); 
  }
 }
 if (sourceElem.style.cssText !== '')
  destElement.style.cssText = sourceElem.style.cssText;
}
function _aspxRemoveAllAttributes(element, excludedAttributes) {
 var excludedAttributesHashTable = {};
 if (excludedAttributes)
  excludedAttributesHashTable = _aspxCreateHashTableFromArray(excludedAttributes);
 if (element.attributes) {
  var attrArray = element.attributes;
  for (var i = 0; i < attrArray.length; i++) {
   var attrName = attrArray[i].name;
   if (!_aspxIsExists(excludedAttributesHashTable[attrName.toLowerCase()])) {
    try {
     attrArray.removeNamedItem(attrName);
    } catch (e) { }
   }
  }
 }
}
function _aspxRemoveStyleAttribute(element, attrName) {
 if (element.style) {
  if (__aspxFirefox && element.style[attrName]) 
   element.style[attrName] = "";
  if (element.style.removeAttribute && element.style.removeAttribute != "")
   element.style.removeAttribute(attrName);
  else if (element.style.removeProperty && element.style.removeProperty != "")
   element.style.removeProperty(attrName);
 }
}
function _aspxRemoveAllStyles(element) {
 if (element.style) {
  for(var key in element.style)
   _aspxRemoveStyleAttribute(element, key);
    _aspxRemoveAttribute(element, "style");
 }
}
function _aspxChangeTabIndexAttribute(element){
 var attribute = _aspxGetTabIndexAttribute(); 
 if(_aspxGetAttribute(element, attribute) != -1)
    _aspxChangeAttribute(element, attribute, -1);
}
function _aspxSaveTabIndexAttributeAndReset(element) {
 var attribute = _aspxGetTabIndexAttribute();
 _aspxSaveAttribute(element, attribute, element, "saved" + attribute);
 _aspxSetAttribute(element, attribute, -1);
}
function _aspxRestoreTabIndexAttribute(element){
 var attribute = _aspxGetTabIndexAttribute();
 if(_aspxIsExistsAttribute(element, attribute)) {
  if(_aspxGetAttribute(element, attribute) == -1) {
   if(_aspxIsExistsAttribute(element, "saved" + attribute)){
    var oldValue = _aspxGetAttribute(element, "saved" + attribute);
    if(oldValue != __aspxEmptyAttributeValue)
     _aspxSetAttribute(element, attribute, oldValue);
    else {
     if(__aspxWebKitFamily) 
      _aspxSetAttribute(element, attribute, 0); 
     _aspxRemoveAttribute(element, attribute);   
    }
    _aspxRemoveAttribute(element, "saved" + attribute); 
   }
  }
 }
}
function _aspxGetTabIndexAttribute(){
 return __aspxIE  ? "tabIndex" : "tabindex";
}
function _aspxChangeAttributesMethod(enabled){
 return enabled ? _aspxRestoreAttribute : _aspxResetAttribute;
}
function _aspxInitiallyChangeAttributesMethod(enabled){
 return enabled ? _aspxChangeAttribute : _aspxResetAttribute;
}
function _aspxChangeStyleAttributesMethod(enabled){
 return enabled ? _aspxRestoreStyleAttribute : _aspxResetStyleAttribute;
}
function _aspxInitiallyChangeStyleAttributesMethod(enabled){
 return enabled ? _aspxChangeStyleAttribute : _aspxResetStyleAttribute;
}
function _aspxChangeEventsMethod(enabled){
 return enabled ? _aspxAttachEventToElement : _aspxDetachEventFromElement;
}
function _aspxChangeDocumentEventsMethod(enabled){
 return enabled ? _aspxAttachEventToDocument : _aspxDetachEventFromDocument;
}
function _aspxTrimStart(str) { 
 return _aspxTrimImpl(str, true);
}
function _aspxTrimEnd(str) { 
 return _aspxTrimImpl(str, false, true);
}
function _aspxTrim(str) { 
 return _aspxTrimImpl(str, true, true); 
}
function _aspxTrimImpl(source, trimStart, trimEnd) {
 var len = source.length;
 if(!len)
  return source;
 if(len < 0xBABA1) { 
  var result = source;
  if(trimStart) {
   result = result.replace(/^\s+/, "");
  }
  if(trimEnd) {
   result = result.replace(/\s+$/, "");
  }
  return result;  
 } else {
  var start = 0;
  if(trimEnd) {   
   while(len > 0 && ASPxWhiteSpaces[source.charCodeAt(len - 1)]) {
    len--;
   }
  }
  if(trimStart && len > 0) {
   while(start < len && ASPxWhiteSpaces[source.charCodeAt(start)]) { 
    start++; 
   }   
  }
  return source.substring(start, len);
 }
}
function _aspxInsert(str, subStr, index) { 
 var leftText = str.slice(0, index);
 var rightText = str.slice(index);
 return leftText + subStr + rightText;
}
function _aspxInsertEx(str, subStr, startIndex, endIndex) { 
 var leftText = str.slice(0, startIndex);
 var rightText = str.slice(endIndex);
 return leftText + subStr + rightText;
}
function _aspxNavigateUrl(url, target) {
 var javascriptPrefix = "javascript:";
 if(url == "")
  return;
 else if(url.indexOf(javascriptPrefix) != -1) 
  eval(url.substr(javascriptPrefix.length));
 else {
  try{
   if(target != "")
    _aspxNavigateTo(url, target);
   else
    location.href = url;
  }
  catch(e){
  }
 }
}
function _aspxNavigateByLink(linkElement) {
 _aspxNavigateUrl(_aspxGetAttribute(linkElement, "href"), linkElement.target);
} 
function _aspxNavigateTo(url, target) {
 var lowerCaseTarget = target.toLowerCase();
 if("_top" == lowerCaseTarget)
  top.location.href = url;
 else if("_self" == lowerCaseTarget)
  location.href = url;
 else if("_search" == lowerCaseTarget)
  window.open(url, '_blank');
 else if("_media" == lowerCaseTarget)
  window.open(url, '_blank');
 else if("_parent" == lowerCaseTarget)
  window.parent.location.href = url;
 else if("_blank" == lowerCaseTarget)
  window.open(url, '_blank');
 else {
  var frame = _aspxGetFrame(top.frames, target);
  if(frame != null)
   frame.location.href = url;
  else
   window.open(url, '_blank');
 }
}
function _aspxGetFrame(frames, name) {
 if(frames[name])
  return frames[name];
 for(var i = 0; i < frames.length; i++) {
  try {
   var frame = frames[i];
   if(frame.name == name) 
    return frame; 
   frame = _aspxGetFrame(frame.frames, name);
   if(frame != null)   
    return frame; 
  } catch(e) {
  } 
 }
 return null;
}
function _aspxToHex(d) {
 return (d < 16) ? ("0" + d.toString(16)) : d.toString(16);
}
function _aspxColorToHexadecimal(colorValue) {
 if (typeof(colorValue) == "number") {
  var r = colorValue & 0xFF;
  var g = (colorValue >> 8) & 0xFF;
  var b = (colorValue >> 16) & 0xFF;
  return "#" + _aspxToHex(r) + _aspxToHex(g) + _aspxToHex(b);
 }
 if (colorValue && (colorValue.substr(0, 3).toLowerCase() == "rgb")) {
  var re = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/;
  var regResult = colorValue.toLowerCase().match(re);
  if (regResult) {
   var r = parseInt(regResult[1]);
   var g = parseInt(regResult[2]);
   var b = parseInt(regResult[3]);
   return "#" + _aspxToHex(r) + _aspxToHex(g) + _aspxToHex(b);
  }
  return null;
 } 
 if (colorValue && (colorValue.charAt(0) == "#"))
  return colorValue;
 return null;
}
function _aspxFormatCallbackArg(prefix, arg) {
 if(prefix == null && arg == null)
  return ""; 
 if(prefix == null) prefix = "";
 if(arg == null) arg = "";
 if(arg != null && !_aspxIsExists(arg.length) && _aspxIsExists(arg.value))
  arg = arg.value;
 arg = arg.toString();
 return [prefix, '|', arg.length, '|' , arg].join('');
}
function _aspxFormatCallbackArgs(callbackData) {
 var sb = [ ];
 for(var i = 0; i < callbackData.length; i++)
  sb.push(_aspxFormatCallbackArg(callbackData[i][0], callbackData[i][1]));
 return sb.join("");
}
function _aspxIsValidElement(element) {
 if(!element) 
  return false;
 if(!(__aspxFirefox && __aspxBrowserVersion < 4)) {
  if(element.ownerDocument && element.ownerDocument.body.compareDocumentPosition)
   return element.ownerDocument.body.compareDocumentPosition(element) % 2 === 0;
 }
 if(!__aspxOpera && !(__aspxIE && __aspxBrowserVersion < 9) && element.offsetParent && element.parentNode.tagName)
  return true;
 while(element != null){
  if(element.tagName == "BODY")
   return true;
  element = element.parentNode;
 }
 return false;
}
function _aspxIsValidElements(elements) {
 if (!elements)
  return false; 
 for(var i = 0; i < elements.length; i++) {
  if(elements[i] && !_aspxIsValidElement(elements[i]))
   return false;
 }
 return true;
}
function _aspxIsExistsElement(element) {
 return element && _aspxIsValidElement(element);
}
function _aspxFindParentByTestFunc(element, testFunc){
 if (!testFunc) return null;
 while(element != null && element.tagName != "BODY"){
  if(testFunc(element))
   return element;
  element = element.parentNode;
 }
 return null;
}
function _aspxCorrectJSFloatNumber(number) {
 var ret = 21; 
 var numString = number.toPrecision(21);
 numString = numString.replace("-", ""); 
 var integerDigitsCount = numString.indexOf(__aspxPossibleNumberDecimalSeparators[0]);
 if (integerDigitsCount < 0)
  integerDigitsCount = numString.indexOf(__aspxPossibleNumberDecimalSeparators[1]);
 var floatDigitsCount = numString.length - integerDigitsCount - 1;
 if(floatDigitsCount < 10)
  return number;
 if (integerDigitsCount > 0) {
  ret = integerDigitsCount + 12;
 }
 var toPrecisionNumber = Math.min(ret, 21);
 var newValueString = number.toPrecision(toPrecisionNumber);
 return parseFloat(newValueString, 10);
}
function _aspxToJson(param){
 var paramType = typeof(param);
 if((paramType == "undefined") || (param == null))
  return null;
 if((paramType == "object") && (typeof(param.__toJson) == "function"))
  return param.__toJson();
 if((paramType == "number") || (paramType == "boolean"))
  return param;
 if(param.constructor == Date)
  return _aspxDateToJson(param);
 if(paramType == "string") {
  var result = param.replace(/\\/g, "\\\\");
  result = result.replace(/"/g, "\\\"");
  result = result.replace(/</g, "\\u003c");
  result = result.replace(/>/g, "\\u003e");
  return "\"" + result + "\"";
 }
 if(param.constructor == Array){
  var values = [];
  for(var i = 0; i < param.length; i++) {
   var jsonValue = _aspxToJson(param[i]);
   if(jsonValue === null)
    jsonValue = "null";
   values.push(jsonValue);
  }
  return "[" + values.join(",") + "]";
 }
 var exceptKeys = {};
 if(ASPxIdent.IsArray(param.__toJsonExceptKeys))
  exceptKeys = _aspxCreateHashTableFromArray(param.__toJsonExceptKeys);
 exceptKeys["__toJsonExceptKeys"] = 1;
 var values = [];
 for(var key in param){
  if(_aspxIsFunction(param[key]))
   continue;
  if(exceptKeys[key] == 1)
   continue;
  values.push(_aspxToJson(key) + ":" + _aspxToJson(param[key]));
 }
 return "{" + values.join(",") + "}";
}
function _aspxDateToJson(date) {
 var result = [ 
  date.getFullYear(),
  date.getMonth(),
  date.getDate()
 ];
 var time = {
  h: date.getHours(),
  m: date.getMinutes(),
  s: date.getSeconds(),
  ms: date.getMilliseconds()
 };
 if(time.h || time.m || time.s || time.ms)
  result.push(time.h);
 if(time.m || time.s || time.ms)
  result.push(time.m);
 if(time.s || time.ms)
  result.push(time.s);
 if(time.ms)
  result.push(time.ms);
 return "new Date(" + result.join() + ")";
}
function _aspxEmulateDocumentOnMouseDown(evt) {
 _aspxEmulateOnMouseDown(document, evt);
}
function _aspxEmulateOnMouseDown(element, evt) {
 if(__aspxIE && __aspxBrowserVersion < 9)
  element.fireEvent("onmousedown", evt);
 else if(!__aspxWebKitFamily){
  var emulatedEvt = document.createEvent("MouseEvents");
  emulatedEvt.initMouseEvent("mousedown", true, true, window, 0, evt.screenX, evt.screenY, 
   evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, false, 0, null);
  element.dispatchEvent(emulatedEvt);
 }
}
function _aspxCreateHtmlElementFromString(str) {
 var dummy = document.createElement("DIV");
 dummy.innerHTML = str;
 return dummy.firstChild;
}
function _aspxDelayedFunctionCall(object, functionName) {
 var callTimerIdPropertyName = "delayed" + functionName + "CallTimerId";
 var additionalCallRequiredPropertyName = "delayed" + functionName + "AdditionalCallRequired";
 if(!object[callTimerIdPropertyName] || object[callTimerIdPropertyName] == -1) {
  var timeoutFunction = function() {
   object[functionName]();
   object[callTimerIdPropertyName] = _aspxClearTimer(object[callTimerIdPropertyName]);
   if(object[additionalCallRequiredPropertyName]) {
    object[additionalCallRequiredPropertyName] = false;
    object[callTimerIdPropertyName] = _aspxSetTimeout(timeoutFunction, 0);
   }
  };
  object[callTimerIdPropertyName] = _aspxSetTimeout(timeoutFunction, 0);
 }
 else
  object[additionalCallRequiredPropertyName] = true;
}
function _aspxRestoreElementOriginalWidth(element) {
 if(!_aspxIsExistsElement(element)) 
  return;
 element.style.width = element.dxOrigWidth = _aspxGetElementOriginalWidth(element);
}
function _aspxGetElementOriginalWidth(element) {
 if(!_aspxIsExistsElement(element)) 
  return null;
 var width;
 if(!_aspxIsExists(element.dxOrigWidth)) {
   width = String(element.style.width).length > 0
  ? element.style.width
  : element.offsetWidth + "px";
 } else {
  width = element.dxOrigWidth;
 }
 return width;
}
function _aspxDropElementOriginalWidth(element) {
 if(_aspxIsExists(element.dxOrigWidth))
  element.dxOrigWidth = null;
}
function _aspxPrepareStringForFilter(s){
 s = s.toLowerCase();
 if(__aspxWebKitFamily) {
  return s.replace(new RegExp(__aspxGreekSLFSigmaChar, "g"), __aspxGreekSLSigmaChar);
 }
 return s;
}
function _aspxGetObjectKeys(obj) {
 if (Object.keys)
  return Object.keys(obj);
 var keys = [];
 for (var key in obj) {
  if (obj.hasOwnProperty(key))
   keys.push(key);
 }
 return keys;
}
Function.prototype.aspxBind = function(scope) {
 var func = this;
 return function() {
  return func.apply(scope, arguments);
 };
};
ASPxScrollBarMode = { Hidden: 0, Visible: 1, Auto: 2 };
ASPxColumnResizeMode = { None: 0, Control: 1, NextColumn: 2 };
ASPxSimpleHiddenField = { };
ASPxSimpleHiddenField.Separator = "|";
ASPxSimpleHiddenField.GetBag = function(key, input) {
 if(!key || !input)
  return { "keyIndex": -1 };
 var keyString = key.toString();
 if(keyString.length == 0)
  return { "keyIndex": -1 };
 var value = input.value;
 var keyIndex = value.indexOf(keyString);
 if(keyIndex < 0)
  return { "keyIndex": -1 };
 var sepIndex = value.indexOf(ASPxSimpleHiddenField.Separator, keyIndex + keyString.length);
 var count = Number(value.slice(keyIndex + keyString.length, sepIndex));
 return { 
  "keyIndex": keyIndex,
  "valueIndex": sepIndex + 1,
  "count": count,
  "inputValue": value
 };
};
ASPxSimpleHiddenField.Get = function(key, input) {
 var bag = ASPxSimpleHiddenField.GetBag(key, input);
 if(bag.keyIndex < 0) return;
 return bag.inputValue.substr(bag.valueIndex, bag.count);
};
ASPxSimpleHiddenField.Set = function(key, value, input) {
 var value = _aspxIsExists(value) ? value.toString() : "";
 var newValue = key.toString() + value.length + ASPxSimpleHiddenField.Separator + value;
 var bag = ASPxSimpleHiddenField.GetBag(key, input);
 if(bag.keyIndex < 0) {
  input.value += newValue;
  return;
 }
 var prevValue = bag.inputValue.slice(bag.keyIndex, bag.valueIndex + bag.count);
 input.value = bag.inputValue.replace(prevValue, newValue);
};
(function(){
 window.ASPxMouseScroller = window.ASPxMouseScroller || { };
 ASPxMouseScroller.MinimumOffset = 10;
 ASPxMouseScroller.Create = function(getElement, getScrollXElement, getScrollYElement, needPreventScrolling, vertRecursive, onMouseDown, onMouseMove, onMouseUp) {
  var element = getElement();
  if(!element) 
   return;
  if(!element.dxMouseScroller)
   element.dxMouseScroller = new ASPxMouseScroller.Extender(getElement, getScrollXElement, getScrollYElement, needPreventScrolling, vertRecursive, onMouseDown, onMouseMove, onMouseUp);
  return element.dxMouseScroller;
 }
 ASPxMouseScroller.Extender = function(getElement, getScrollXElement, getScrollYElement, needPreventScrolling, vertRecursive, onMouseDown, onMouseMove, onMouseUp) {
  this.getElement = getElement;
  this.getScrollXElement = getScrollXElement;
  this.getScrollYElement = getScrollYElement;
  this.needPreventScrolling = needPreventScrolling;
  this.vertRecursive = !!vertRecursive;
  this.createHandlers(onMouseDown || function(){ }, onMouseMove || function(){ }, onMouseUp || function(){ });
  this.update()
 };
 ASPxMouseScroller.Extender.prototype = {
  update: function() {
   if(this.element)
    _aspxDetachEventFromElement(this.element, ASPxClientTouchUI.touchMouseDownEventName, this.mouseDownHandler);
   this.element = this.getElement();
   _aspxAttachEventToElement(this.element, ASPxClientTouchUI.touchMouseDownEventName, this.mouseDownHandler);  
   _aspxAttachEventToElement(this.element, "click", this.mouseClickHandler);   
   if(__aspxMSTouchUI && this.element.className.indexOf(ASPxClientTouchUI.msTouchDraggableClassName) < 0)
    this.element.className += " " + ASPxClientTouchUI.msTouchDraggableClassName;
   this.scrollXElement = this.getScrollXElement();
   this.scrollYElement = this.getScrollYElement();
  },
  createHandlers: function(onMouseDown, onMouseMove, onMouseUp) {
   this.onMouseDown = onMouseDown;
   this.onMouseMove = onMouseMove;
   this.onMouseUp = onMouseUp;
   this.mouseDownHandler = function(e) { 
    if(this.needPreventScrolling && this.needPreventScrolling(_aspxGetEventSource(e)))
     return;
    this.scrollableTreeLine = this.GetScrollableElements();
    this.firstX = this.prevX = _aspxGetEventX(e);
    this.firstY = this.prevY = this.GetEventY(e);
    _aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseMoveEventName, this.mouseMoveHandler);
    _aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseUpEventName, this.mouseUpHandler);
    this.onMouseDown(e);
   }.aspxBind(this);
   this.mouseMoveHandler = function(e) {
    if(ASPxClientTouchUI.isGesture)
     return;
    var x = _aspxGetEventX(e);
    var y = this.GetEventY(e);
    var xDiff = this.prevX - x;
    var yDiff = this.prevY - y;
    if(this.vertRecursive) {
     var isTopDirection = yDiff < 0;
     this.scrollYElement = this.GetElementForVertScrolling(isTopDirection, this.prevIsTopDirection, this.scrollYElement);
     this.prevIsTopDirection = isTopDirection;
    }
    if(this.scrollXElement && xDiff != 0)
     this.scrollXElement.scrollLeft += xDiff;
    if(this.scrollYElement && yDiff != 0)
     this.scrollYElement.scrollTop += yDiff;
    this.prevX = x;
    this.prevY = y;
    e.preventDefault();
    this.onMouseMove(e);
   }.aspxBind(this);
   this.mouseUpHandler = function(e) {
    _aspxDetachEventFromDocument(ASPxClientTouchUI.touchMouseMoveEventName, this.mouseMoveHandler);
    _aspxDetachEventFromDocument(ASPxClientTouchUI.touchMouseUpEventName, this.mouseUpHandler);
    this.scrollableTreeLine = [ ];
    this.prevIsTopDirection = null;
    this.onMouseUp(e);
   }.aspxBind(this);
   this.mouseClickHandler = function(e){
    if(this.needPreventScrolling && this.needPreventScrolling(_aspxGetEventSource(e)))
     return;
    var xDiff = this.firstX - _aspxGetEventX(e);
    var yDiff = this.firstY - _aspxGetEventY(e);
    if(xDiff > ASPxMouseScroller.MinimumOffset || yDiff > ASPxMouseScroller.MinimumOffset)
     return _aspxPreventEventAndBubble(e);
   }.aspxBind(this);
  },
  GetEventY: function(e) {
   return _aspxGetEventY(e) - _aspxGetDocumentScrollTop();
  },
  GetScrollableElements: function() {
   var result = [ ];
   var el = this.element;
   while(el && el != document && this.vertRecursive) {
    if(this.CanVertScroll(el) || el.tagName == "HTML")
     result.push(el);
    el = el.parentNode;
   }
   return result;
  },
  CanVertScroll: function(element) {
   var style = _aspxGetCurrentStyle(element);
   return style.overflow == "scroll" || style.overflow == "auto" || style.overflowY == "scroll" || style.overflowY == "auto";
  },
  GetElementForVertScrolling: function(currentIsTop, prevIsTop, prevElement) {
   if(prevElement && currentIsTop === prevIsTop && this.GetVertScrollExcess(prevElement, currentIsTop) > 0)
    return prevElement;
   for(var i = 0; i < this.scrollableTreeLine.length; i++) {
    var element = this.scrollableTreeLine[i];
    var excess = this.GetVertScrollExcess(element, currentIsTop);
    if(excess > 0)
     return element;
   }
   return null;
  },
  GetVertScrollExcess: function(element, isTop) {
   if(isTop)
    return element.scrollTop;
   return element.scrollHeight - element.clientHeight - element.scrollTop;
  }
 }
})();
ASPxClientUtils = {};
ASPxClientUtils.agent = __aspxUserAgent;
ASPxClientUtils.opera = __aspxOpera;
ASPxClientUtils.opera9 = __aspxOpera && __aspxBrowserMajorVersion == 9;
ASPxClientUtils.safari = __aspxSafari;
ASPxClientUtils.safari3 = __aspxSafari && __aspxBrowserMajorVersion == 3;
ASPxClientUtils.safariMacOS = __aspxSafari && __aspxMacOSPlatform;
ASPxClientUtils.chrome = __aspxChrome;
ASPxClientUtils.ie = __aspxIE;
ASPxClientUtils.ie55 = __aspxIE && __aspxBrowserVersion == 5.5;
;
ASPxClientUtils.ie7 = __aspxIE && __aspxBrowserMajorVersion == 7;
ASPxClientUtils.firefox = __aspxFirefox;
ASPxClientUtils.firefox3 = __aspxFirefox && __aspxBrowserMajorVersion == 3;
ASPxClientUtils.mozilla = __aspxMozilla;
ASPxClientUtils.netscape = __aspxNetscape;
ASPxClientUtils.browserVersion = __aspxBrowserVersion;
ASPxClientUtils.browserMajorVersion = __aspxBrowserMajorVersion;
ASPxClientUtils.macOSPlatform = __aspxMacOSPlatform;
ASPxClientUtils.windowsPlatform = __aspxWindowsPlatform;
ASPxClientUtils.webKitFamily = __aspxWebKitFamily;
ASPxClientUtils.netscapeFamily = __aspxNetscapeFamily;
ASPxClientUtils.touchUI = __aspxTouchUI;
ASPxClientUtils.webKitTouchUI = __aspxWebKitTouchUI;
ASPxClientUtils.msTouchUI = __aspxMSTouchUI;
ASPxClientUtils.iOSPlatform = __aspxMacOSMobilePlatform;
ASPxClientUtils.androidPlatform = __aspxAndroidMobilePlatform;
ASPxClientUtils.ArrayInsert = _aspxArrayInsert;
ASPxClientUtils.ArrayRemove = _aspxArrayRemove;
ASPxClientUtils.ArrayRemoveAt = _aspxArrayRemoveAt;
ASPxClientUtils.ArrayClear = _aspxArrayClear;
ASPxClientUtils.ArrayIndexOf = _aspxArrayIndexOf;
ASPxClientUtils.AttachEventToElement = _aspxAttachEventToElement;
ASPxClientUtils.DetachEventFromElement = _aspxDetachEventFromElement;
ASPxClientUtils.GetEventSource = _aspxGetEventSource;
ASPxClientUtils.GetEventX = _aspxGetEventX;
ASPxClientUtils.GetEventY = _aspxGetEventY;
ASPxClientUtils.GetKeyCode = _aspxGetKeyCode;
ASPxClientUtils.PreventEvent = _aspxPreventEvent;
ASPxClientUtils.PreventEventAndBubble = _aspxPreventEventAndBubble;
ASPxClientUtils.PreventDragStart = _aspxPreventDragStart;
ASPxClientUtils.ClearSelection = _aspxClearSelection;
ASPxClientUtils.IsExists = _aspxIsExists;
ASPxClientUtils.IsFunction = _aspxIsFunction;
ASPxClientUtils.GetAbsoluteX = _aspxGetAbsoluteX;
ASPxClientUtils.GetAbsoluteY = _aspxGetAbsoluteY;
ASPxClientUtils.SetAbsoluteX = _aspxSetAbsoluteX;
ASPxClientUtils.SetAbsoluteY = _aspxSetAbsoluteY;
ASPxClientUtils.GetDocumentScrollTop = _aspxGetDocumentScrollTop;
ASPxClientUtils.GetDocumentScrollLeft = _aspxGetDocumentScrollLeft;
ASPxClientUtils.GetDocumentClientWidth = _aspxGetDocumentClientWidth;
ASPxClientUtils.GetDocumentClientHeight = _aspxGetDocumentClientHeight;
ASPxClientUtils.GetIsParent = _aspxGetIsParent;
ASPxClientUtils.GetParentById = _aspxGetParentById;
ASPxClientUtils.GetParentByTagName = _aspxGetParentByTagName;
ASPxClientUtils.GetParentByClassName = _aspxGetParentByPartialClassName;
ASPxClientUtils.GetChildById = _aspxGetChildById;
ASPxClientUtils.GetChildByTagName = _aspxGetChildByTagName;
ASPxClientUtils.SetCookie = _aspxSetCookie;
ASPxClientUtils.GetCookie = _aspxGetCookie;
ASPxClientUtils.DeleteCookie = _aspxDelCookie;
ASPxClientUtils.GetShortcutCode = _aspxGetShortcutCode; 
ASPxClientUtils.GetShortcutCodeByEvent = _aspxGetShortcutCodeByEvent;
ASPxClientUtils.StringToShortcutCode = _aspxParseShortcutString;
ASPxClientUtils.Trim = _aspxTrim; 
ASPxClientUtils.TrimStart = _aspxTrimStart;
ASPxClientUtils.TrimEnd = _aspxTrimEnd;

var __aspxClassesScriptParsed = false;
var __aspxDocumentLoaded = false; 
ASPxClientEvent = _aspxCreateClass(null, {
 constructor: function() {
  this.handlerInfoList = [];
 },
 AddHandler: function(handler, executionContext) {
  if(typeof(executionContext) == "undefined")
   executionContext = null;
  var handlerInfo = ASPxClientEvent.CreateHandlerInfo(handler, executionContext);
  this.handlerInfoList.push(handlerInfo);
 },
 RemoveHandler: function(handler, executionContext) {
  this.removeHandlerByCondition(function(handlerInfo) {
   return handlerInfo.handler == handler && 
    (!executionContext || handlerInfo.executionContext == executionContext);
  });
 },
 removeHandlerByCondition: function(predicate) {
   for(var i = this.handlerInfoList.length - 1; i >= 0; i--) {
   var handlerInfo = this.handlerInfoList[i];
   if(predicate(handlerInfo))
    _aspxArrayRemoveAt(this.handlerInfoList, i);
  }
 },
 removeHandlerByControlName: function(controlName) {
  this.removeHandlerByCondition(function(handlerInfo) {
   return handlerInfo.executionContext &&  
    handlerInfo.executionContext.name === controlName;
  });
 },
 ClearHandlers: function() {
  this.handlerInfoList.length = 0;
 },
 FireEvent: function(obj, args) {
  for(var i = 0; i < this.handlerInfoList.length; i++) {
   var handlerInfo = this.handlerInfoList[i];
   handlerInfo.handler.call(handlerInfo.executionContext, obj, args);
  }
 },
 InsertFirstHandler: function(handler, executionContext){
  if(typeof(executionContext) == "undefined")
   executionContext = null;
  var handlerInfo = ASPxClientEvent.CreateHandlerInfo(handler, executionContext);
  _aspxArrayInsert(this.handlerInfoList, handlerInfo, 0);
 },
 IsEmpty: function() {
  return this.handlerInfoList.length == 0;
 }
});
ASPxClientEvent.CreateHandlerInfo = function(handler, executionContext) {
 return {
  handler: handler,
  executionContext: executionContext
 };
};
ASPxClientEventArgs = _aspxCreateClass(null, {
 constructor: function() {
 }
});
ASPxClientEventArgs.Empty = new ASPxClientEventArgs();
ASPxClientCancelEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.cancel = false;
 }
});
ASPxClientProcessingModeEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(processOnServer){
  this.constructor.prototype.constructor.call(this);
  this.processOnServer = processOnServer;
 }
});
ASPxClientProcessingModeCancelEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(processOnServer){
  this.constructor.prototype.constructor.call(this, processOnServer);
  this.cancel = false;
 }
});
ASPxClientBeginCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(command){
  this.constructor.prototype.constructor.call(this);
  this.command = command;
 }
});
ASPxClientEndCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
 }
});
ASPxClientCustomDataCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(result) {
  this.constructor.prototype.constructor.call(this);
  this.result = result;
 }
});
ASPxClientCallbackErrorEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(message){
  this.constructor.prototype.constructor.call(this);
  this.message = message;
  this.handled = false;
 }
});
ASPxClientControlsInitializedEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(isCallback) {
  this.isCallback = isCallback;
 }
});
ASPxClientAdaptiveLayoutChangingEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.isAdaptiveView = false;
 }
});
ASPxClientControlCollection = _aspxCreateClass(null, {
 constructor: function(){
  this.elements = new Object();
  this.prevWndWidth = "";
  this.prevWndHeight = "";
  this.BeforeInitCallback = new ASPxClientEvent();
  this.ControlsInitialized = new ASPxClientEvent();
 },
 Add: function(element){
  this.elements[element.name] = element;
 },
 Remove: function(element) {
  this.elements[element.name] = null;
 },
 Get: function(name){
  return this.elements[name];
 },
 GetGlobal: function(name) {
  var result = window[name];
  return result && result.isASPxClientControl
   ? result
   : null;
 },
 GetByName: function(name){
  return this.Get(name) || this.GetGlobal(name);
 },
 ForEachControl: function(processFunc, context) {
  if(!context)
   context = this;
  for(var name in this.elements) {
   var control = this.elements[name];
   if(ASPxIdent.IsASPxClientControl(control))
    if(processFunc.call(context, control))
     return;
  }
 },
 forEachControlHierarchy: function(container, context, collapseControls, processFunc) {
  context = context || this;
  var controlTree = new ASPxClientControlTree(this, container);
  controlTree.forEachControl(collapseControls, function(control) {
   processFunc.call(context, control);
  });
 },
 AdjustControls: function(container, collapseControls) {
  container = container || null;
  window.setTimeout(function() {
   this.AdjustControlsCore(container, collapseControls);
  }.aspxBind(this), 0);
 },
 AdjustControlsCore: function(container, collapseControls) {
  this.forEachControlHierarchy(container, this, collapseControls, function(control) {
   control.AdjustControl();
  });
 },
 CollapseControls: function(container) {
  this.ProcessControlsInContainer(container, function(control) {
   if(control.isASPxClientEdit)
    control.CollapseEditor();
  });
 },
 AtlasInitialize: function(isCallback) {
  if(__aspxIE && __aspxBrowserMajorVersion < 9) {
   var func = function() {
    if(_aspxIsLinksLoaded())
     _aspxProcessScriptsAndLinks("", isCallback); 
    else
     setTimeout(func, 100);
   }   
   func();
  }
  else
   _aspxProcessScriptsAndLinks("", isCallback);
 },
 DOMContentLoaded: function() {
  this.ForEachControl(function(control){
    control.DOMContentLoaded();
  });
 },
 Initialize: function() {
  this.InitializeElements(false );
  if(typeof(Sys) != "undefined" && typeof(Sys.Application) != "undefined") {
   var checkIsInitialized = function() {
    if(Sys.Application.get_isInitialized())
     Sys.Application.add_load(aspxCAInit);
    else
     setTimeout(checkIsInitialized, 0);
   }
   checkIsInitialized();
  }
  this.InitWindowSizeCache();
 },
 InitializeElements: function(isCallback) {
  this.ForEachControl(function(control){
   if(!control.isInitialized)
    control.Initialize();
  });
  if(typeof(_aspxGetEditorStretchedInputElementsManager) != "undefined")
   _aspxGetEditorStretchedInputElementsManager().Initialize();
  this.AfterInitializeElements(true);
  this.AfterInitializeElements(false);
  this.RaiseControlsInitialized(isCallback);
 },
 AfterInitializeElements: function(leadingCall) {
  this.ForEachControl(function(control){
   if (control.leadingAfterInitCall && leadingCall || !control.leadingAfterInitCall && !leadingCall) {
    if(!control.isInitialized)
     control.AfterInitialize();
   }
  });
 },
 DoFinalizeCallback: function() {
  this.ForEachControl(function(control){
   control.DoFinalizeCallback();
  });
 },
 ProcessControlsInContainer: function(container, processFunc) {
  this.ForEachControl(function(control){
   if(!container || this.IsControlInContainer(container, control))
    processFunc(control);
  });
 },
 IsControlInContainer: function(container, control) {
  if(control.GetMainElement) {
   var mainElement = control.GetMainElement();
   if(mainElement && (mainElement != container)) {
    if(_aspxGetIsParent(container, mainElement))
     return true;
   }
  }
  return false;
 },
 RaiseControlsInitialized: function(isCallback) {
  if(!this.ControlsInitialized.IsEmpty()){
   if(typeof(isCallback) == "undefined")
    isCallback = true;
   var args = new ASPxClientControlsInitializedEventArgs(isCallback);
   this.ControlsInitialized.FireEvent(this, args);
  }
 },
 Before_WebForm_InitCallback: function(callbackOwnerID){
  var args = new ASPxClientBeforeInitCallbackEventArgs(callbackOwnerID);
  this.BeforeInitCallback.FireEvent(this, args);
 },
 InitWindowSizeCache: function(){
  this.prevWndWidth = _aspxGetDocumentClientWidth();
  this.prevWndHeight = _aspxGetDocumentClientHeight();
 },
 BrowserWindowSizeChanged: function(){
  var wndWidth = _aspxGetDocumentClientWidth();
  var wndHeight = _aspxGetDocumentClientHeight();
  var browserWindowSizeChanged = (this.prevWndWidth != wndWidth) || (this.prevWndHeight != wndHeight);
  if(browserWindowSizeChanged){
   this.prevWndWidth = wndWidth;
   this.prevWndHeight = wndHeight;
   return true;
  }
  return false;
 },
 OnBrowserWindowResize: function(evt){
  var shouldIgnoreNestedEvents = __aspxIE && __aspxBrowserMajorVersion == 8;
  if(shouldIgnoreNestedEvents) {
   if(this.prevWndWidth === "" || this.prevWndHeight === "" || this.browserWindowResizeLocked)
    return;
   this.browserWindowResizeLocked = true;
  }
  this.OnBrowserWindowResizeCore(evt);
  if(shouldIgnoreNestedEvents)
   this.browserWindowResizeLocked = false;
 },
 OnBrowserWindowResizeCore: function(evt){
  if(this.BrowserWindowSizeChanged()) {
   this.forEachControlHierarchy(null, this, true, function(control) {
    if(control.IsDOMInitialized())
     control.OnBrowserWindowResizeInternal(evt);
   });
  }
 }
});
ASPxClientControlTree = _aspxCreateClass(null, {
 constructor: function(controlCollection, container) {
  this.container = container;
  this.domMap = { };
  this.rootNode = this.createNode(null, null);
  this.createControlTree(controlCollection, container);
 },
 forEachControl: function(collapseControls, processFunc) {
  var observer = _aspxGetDomObserver();
  observer.pause(this.container, true);
  var documentScrollInfo;
  if(collapseControls) {
   documentScrollInfo = _aspxGetOuterScrollPosition(document.body);
   this.collapseControls(this.rootNode);
  }
  var adjustNodes = [], 
   autoHeightNodes = [];
  var requireReAdjust = this.forEachControlCore(this.rootNode, collapseControls, processFunc, adjustNodes, autoHeightNodes);
  if(requireReAdjust)
   this.forEachControlsBackward(adjustNodes, collapseControls, processFunc);
  else {
   for(var i = 0, node; node = autoHeightNodes[i]; i++)
    node.control.AdjustAutoHeight();
  }
  if(collapseControls)
   _aspxRestoreOuterScrollPosition(documentScrollInfo);
  observer.resume(this.container, true);
 },
 forEachControlCore: function(node, collapseControls, processFunc, adjustNodes, autoHeightNodes) {
  var requireReAdjust = false,
   size, newSize;
  if(node.control) {
   var checkReadjustment = collapseControls && node.control.IsControlCollapsed() && node.control.CanCauseReadjustment();
   if(checkReadjustment)
    size = node.control.GetControlPercentMarkerSize(false, true);
   if(node.control.IsControlCollapsed() && !node.control.IsExpandableByAdjustment())
    node.control.ExpandControl();
   processFunc(node.control);
   if(checkReadjustment) {
    newSize = node.control.GetControlPercentMarkerSize(false, true);
    requireReAdjust = size.width !== newSize.width;
   }
   if(node.control.sizingConfig.supportAutoHeight)
    autoHeightNodes.push(node);
   node.control.ResetControlPercentMarkerSize();
  }
  for(var childNode, i = 0; childNode = node.children[i]; i++)
   requireReAdjust = this.forEachControlCore(childNode, collapseControls, processFunc, adjustNodes, autoHeightNodes) || requireReAdjust;
  adjustNodes.push(node);
  return requireReAdjust;
 },
 forEachControlsBackward: function(adjustNodes, collapseControls, processFunc) {
  for(var i = 0, node; node = adjustNodes[i]; i++)
   this.forEachControlsBackwardCore(node, collapseControls, processFunc);
 },
 forEachControlsBackwardCore: function(node, collapseControls, processFunc) {
  if(node.control)
   processFunc(node.control);
  if(node.children.length > 1) {
   for(var i = 0, childNode; childNode = node.children[i]; i++)
    processFunc(childNode.control);
  }
 },
 collapseControls: function(node) {
  for(var childNode, i = 0; childNode = node.children[i]; i++)
   this.collapseControls(childNode);
  if(node.control && node.control.NeedCollapseControl())
   node.control.CollapseControl();
 },
 createControlTree: function(controlCollection, container) {
  controlCollection.ProcessControlsInContainer(container, function(control) {
   control.RegisterInControlTree(this);
  }.aspxBind(this));
  for(var domElementID in this.domMap) {
   if(!this.domMap.hasOwnProperty(domElementID)) continue;
   var node = this.domMap[domElementID];
   var parentNode = this.findParentNode(domElementID);
   parentNode = parentNode || this.rootNode;
   var childNode = node.mainNode || node;
   this.addChildNode(parentNode, childNode);
  }
 },
 findParentNode: function(id) {
  var element = document.getElementById(id).parentNode;
  while(element && element.tagName !== "BODY") {
   if(element.id) {
    var parentNode = this.domMap[element.id];
    if(parentNode)
     return parentNode;
   }
   element = element.parentNode;
  }
  return null;
 },
 addChildNode: function(node, childNode) {
  if(!childNode.parentNode) {
   node.children.push(childNode);
   childNode.parentNode = node;
  }
 },
 addRelatedNode: function(node, relatedNode) {
  this.addChildNode(node, relatedNode);
  relatedNode.mainNode = node;
 },
 createNode: function(domElementID, control) {
  var node = {
   control: control,
   children: [],
   parentNode: null,
   mainNode: null
  };
  if(domElementID)
   this.domMap[domElementID] = node;
  return node;
 }
});
ASPxClientControl = _aspxCreateClass(null, {
 constructor: function(name){
  this.isASPxClientControl = true;
  this.name = name;
  this.uniqueID = name;  
  this.encodeHtml = true;
  this.enabled = true;
  this.clientEnabled = true;
  this.clientVisible = true;
  this.rtl = false;
  this.autoPostBack = false;
  this.allowMultipleCallbacks = true;
  this.callBack = null;
  this.enableCallbackAnimation = false;
  this.enableSlideCallbackAnimation = false;
  this.slideAnimationDirection = null;
  this.beginCallbackAnimationProcessing = false;
  this.endCallbackAnimationProcessing = false;
  this.savedCallbackResult = null;
  this.savedCallbacks = null;
  this.isCallbackAnimationPrevented = false;
  this.lpDelay = 300;
  this.lpTimer = -1;
  this.isNative = false;
  this.requestCount = 0;
  this.enableSwipeGestures = false;
  this.supportGestures = false;
  this.repeatedGestureValue = 0;
  this.repeatedGestureCount = 0;
  this.isInitialized = false;
  this.isControlCollapsed = false;
  this.initialFocused = false;
  this.leadingAfterInitCall = false; 
  this.adjustedSizes = { };
  this.adjustedHeight = 0;
  this.serverEvents = [];
  this.dialogContentHashTable = { };
  this.loadingPanelElement = null;
  this.loadingDivElement = null;  
  this.hasPhantomLoadingElements = false;
  this.mainElement = null;
  this.renderIFrameForPopupElements = false;
  this.widthValueSetInPercentage = false;
  this.heightValueSetInPercentage = false;
  this.touchUIMouseScroller = null;
  this.verticalAlignedElements = { };
  this.wrappedTextContainers = { };
  this.scrollPositionState = { };
  this.sizingConfig = {
   allowSetWidth: true,
   allowSetHeight: true,
   correction : false,
   adjustControl : false,
   supportPercentHeight: false,
   supportAutoHeight: false
  };
  this.percentSizeConfig = {
   width: -1,
   height: -1,
   markerWidth: -1,
   markerHeight: -1
  };
  this.Init = new ASPxClientEvent();
  this.BeginCallback = new ASPxClientEvent();
  this.EndCallback = new ASPxClientEvent();
  this.EndCallbackAnimationStart = new ASPxClientEvent();
  this.CallbackError = new ASPxClientEvent();
  this.CustomDataCallback = new ASPxClientEvent();
  this.LayoutChanging = new ASPxClientEvent();
  aspxGetControlCollection().Add(this);  
 },
 HtmlEncode: function(text) {
  return this.encodeHtml ? _aspxEncodeHtml(text) : text;
 },
 Initialize: function() {
  if(this.callBack != null)
   this.InitializeCallBackData();
 },
 InlineInitialize: function() {
  this.InitializeDOM();
 },
 InitializeGestures: function() {
  if(this.enableSwipeGestures && this.supportGestures) {
   ASPxGesturesHelper.AddSwipeGestureHandler(this.name, 
    function() { return this.GetCallbackAnimationElement(); }.aspxBind(this), 
    function(evt) { return this.CanHandleGestureCore(evt); }.aspxBind(this), 
    function(value) { return this.AllowStartGesture(); }.aspxBind(this),
    function(value) { return this.StartGesture(); }.aspxBind(this),
    function(value) { return this.AllowExecuteGesture(value); }.aspxBind(this),
    function(value) { this.ExecuteGesture(value); }.aspxBind(this),
    function(value) { this.CancelGesture(value); }.aspxBind(this)
   );
   if(__aspxMSTouchUI)
    this.touchUIMouseScroller = ASPxMouseScroller.Create(
     function() { return this.GetCallbackAnimationElement(); }.aspxBind(this),
     function() { return null; },
     function() { return this.GetCallbackAnimationElement(); }.aspxBind(this),
     function(element) { return this.NeedPreventTouchUIMouseScrolling(element); }.aspxBind(this),
     true
    );
  }
 },
 NeedPreventTouchUIMouseScrolling: function(element) {
  return false;
 },
 InitailizeFocus: function() {
  if(this.initialFocused && this.IsVisible())
   this.Focus();
 },
 AfterCreate: function() { 
  this.InlineInitialize();
  this.InitializeGestures();
  if(!this.CanInitializeAdjustmentOnDOMContentLoaded() || __aspxStartupScriptsRunning)
   this.InitializeAdjustment();
 },
 DOMContentLoaded: function() {
  if(this.CanInitializeAdjustmentOnDOMContentLoaded()) 
   this.InitializeAdjustment();
 },
 CanInitializeAdjustmentOnDOMContentLoaded: function() {
  return !__aspxIE || __aspxBrowserVersion >= 10; 
 },
 InitializeAdjustment: function() {
  this.UpdateAdjustmentFlags();
  this.AdjustControl();
 },
 AfterInitialize: function() {
  this.AdjustControl();
  this.InitailizeFocus();
  this.isInitialized = true;
  this.RaiseInit();
  if(this.savedCallbacks) {
   for(var i = 0; i < this.savedCallbacks.length; i++) 
    this.CreateCallbackInternal(this.savedCallbacks[i].arg, this.savedCallbacks[i].command, 
     false, this.savedCallbacks[i].callbackInfo);
   this.savedCallbacks = null;
  }
 },
 InitializeCallBackData: function() {
 },
 RenderExistsOnPage: function() {
  return _aspxIsExistsElement(this.GetMainElement());
 },
 IsStateControllerEnabled: function(){
  return typeof(aspxGetStateController) != "undefined" && aspxGetStateController();
 },
 InitializeDOM: function() {
  var mainElement = this.GetMainElement();
  if(mainElement)
   mainElement["dxinit"] = true;
 },
 IsDOMInitialized: function() {
  var mainElement = this.GetMainElement();
  return mainElement && mainElement["dxinit"];
 },
 GetWidth: function() {
  return this.GetMainElement().offsetWidth;
 },
 GetHeight: function() {
  return this.GetMainElement().offsetHeight;
 },
 SetWidth: function(width) {
  if(this.sizingConfig.allowSetWidth)
   this.SetSizeCore("width", width, "GetWidth", false);
 },
 SetHeight: function(height) {
  if(this.sizingConfig.allowSetHeight)
   this.SetSizeCore("height", height, "GetHeight", false);
 },
 SetSizeCore: function(sizePropertyName, size, getFunctionName, corrected) {
  if(size < 0)
   return;
  this.GetMainElement().style[sizePropertyName] = size + "px";
  this.UpdateAdjustmentFlags();
  if(this.sizingConfig.adjustControl)
   this.AdjustControl(true);
  if(this.sizingConfig.correction && !corrected) {
   var realSize = this[getFunctionName]();
   if(realSize != size) {
    var correctedSize = size - (realSize - size);
    this.SetSizeCore(sizePropertyName, correctedSize, getFunctionName, true);
   }
  }
 },
 AdjustControl: function(nestedCall) {
  if(this.IsAdjustmentRequired() && (!ASPxClientControl.adjustControlLocked || nestedCall)) {
   ASPxClientControl.adjustControlLocked = true;
   try {
    if(!this.IsAdjustmentAllowed())
     return;
    this.AdjustControlCore();
    this.UpdateAdjustedSizes();
    this.percentMarkerSize = undefined;
   } 
   finally {
    delete ASPxClientControl.adjustControlLocked;
   }
  }
  this.TryShowPhantomLoadingElements();
 },
 ResetControlAdjustment: function () {
  this.adjustedSizes = { };
 },
 UpdateAdjustmentFlags: function() {
  var mainElement = this.GetMainElement();
  if(mainElement) {
   var mainElementStyle = _aspxGetCurrentStyle(mainElement);
   this.UpdatePercentSizeConfig([mainElementStyle.width, mainElement.style.width], [mainElementStyle.height, mainElement.style.height]);
  }
 },
 UpdatePercentSizeConfig: function(widths, heights) {
  this.widthValueSetInPercentage = false;
  this.heightValueSetInPercentage = false;
  for(var i = 0; i < widths.length; i++) {
   if(_aspxIsPercentageSize(widths[i])) {
    this.percentSizeConfig.width = widths[i];
    this.widthValueSetInPercentage = true;
    break;
   }
  }
  for(var i = 0; i < heights.length; i++) {
   if(_aspxIsPercentageSize(heights[i])) {
    this.percentSizeConfig.height = heights[i];
    this.heightValueSetInPercentage = true;
    break;
   }
  }
  this.ResetControlPercentMarkerSize();
 },
 GetAdjustedSizes: function() {
  var mainElement = this.GetMainElement();
  if(mainElement) 
   return { width: mainElement.offsetWidth, height: mainElement.offsetHeight };
  return { width: 0, height: 0 };
 },
 IsAdjusted: function() {
  return (this.adjustedSizes.width && this.adjustedSizes.width > 0) && (this.adjustedSizes.height && this.adjustedSizes.height > 0);
 },
 IsAdjustmentRequired: function() {
  if(!this.IsAdjusted())
   return true;
  if(this.widthValueSetInPercentage)
   return true;
  if(this.heightValueSetInPercentage)
   return true;
  var sizes = this.GetAdjustedSizes();
  for(var name in sizes){
   if(this.adjustedSizes[name] !== sizes[name])
    return true;
  }
  return false;
 },
 IsAdjustmentAllowed: function() {
  var mainElement = this.GetMainElement();
  return mainElement && this.IsDisplayed() && !this.IsHidden() && this.IsDOMInitialized();
 },
 UpdateAdjustedSizes: function() {
  var sizes = this.GetAdjustedSizes();
  for(var name in sizes)
   this.adjustedSizes[name] = sizes[name];
 },
 AdjustControlCore: function() {
 },
 AdjustAutoHeight: function() {
 },
 IsControlCollapsed: function() {
  return this.isControlCollapsed;
 },
 NeedCollapseControl: function() {
  return this.NeedCollapseControlCore() && this.IsAdjustmentRequired() && this.IsAdjustmentAllowed();
 },
 NeedCollapseControlCore: function() {
  return false;
 },
 CollapseEditor: function() {
 },
 CollapseControl: function() {
  this.SaveScrollPositions();
  var mainElement = this.GetMainElement(),
   marker = this.GetControlPercentSizeMarker(),
   scrollHeight = mainElement.scrollHeight;
  if(this.heightValueSetInPercentage && this.sizingConfig.supportPercentHeight && scrollHeight <= mainElement.offsetHeight)
   marker.style.height = this.percentSizeConfig.height;
  else
   marker.style.height = scrollHeight + "px";
  mainElement.style.display = "none";
  this.isControlCollapsed = true;
 },
 ExpandControl: function() {
  var mainElement = this.GetMainElement();
  mainElement.style.display = "";
  this.GetControlPercentSizeMarker().style.height = "0px";
  this.isControlCollapsed = false;
  this.RestoreScrollPositions();
 },
 CanCauseReadjustment: function() {
  return this.NeedCollapseControlCore();
 },
 IsExpandableByAdjustment: function() {
  return false;
 },
 SaveScrollPositions: function() {
  var mainElement = this.GetMainElement();
  this.scrollPositionState.outer = _aspxGetOuterScrollPosition(mainElement.parentNode);
  this.scrollPositionState.inner = _aspxGetInnerScrollPositions(mainElement);
 },
 RestoreScrollPositions: function() {
  _aspxRestoreOuterScrollPosition(this.scrollPositionState.outer);
  _aspxRestoreInnerScrollPositions(this.scrollPositionState.inner);
 },
 GetControlPercentSizeMarker: function() {
  if(this.percentSizeMarker === undefined) {
   this.percentSizeMarker = _aspxCreateHtmlElementFromString("<div style='height:0px;font-size:0px;line-height:0;width:100%;'></div>");
   _aspxInsertElementAfter(this.percentSizeMarker, this.GetMainElement());
  }
  return this.percentSizeMarker;
 },
 KeepControlPercentSizeMarker: function(needCollapse, needCalculateHeight) {
  var mainElement = this.GetMainElement(),
   marker = this.GetControlPercentSizeMarker(),
   markerHeight;
  if(needCollapse)
   this.CollapseControl();
  if(this.widthValueSetInPercentage && marker.style.width !== this.percentSizeConfig.width)
   marker.style.width = this.percentSizeConfig.width;
  if(needCalculateHeight) {
   if(this.IsControlCollapsed())
    markerHeight = marker.style.height;
   marker.style.height = this.percentSizeConfig.height;
  }
  this.percentSizeConfig.markerWidth = marker.offsetWidth;
  if(needCalculateHeight) {
   this.percentSizeConfig.markerHeight = marker.offsetHeight;
   if(this.IsControlCollapsed())
    marker.style.height = markerHeight;
   else
    marker.style.height = "0px";
  }
  if(needCollapse)
   this.ExpandControl();
 },
 ResetControlPercentMarkerSize: function() {
  this.percentSizeConfig.markerWidth = -1;
  this.percentSizeConfig.markerHeight = -1;
 },
 GetControlPercentMarkerSize: function(hideControl, force) {
  var needCalculateHeight = this.heightValueSetInPercentage && this.sizingConfig.supportPercentHeight;
  if(force || this.percentSizeConfig.markerWidth < 1 || (needCalculateHeight && this.percentSizeConfig.markerHeight < 1))
   this.KeepControlPercentSizeMarker(hideControl && !this.IsControlCollapsed(), needCalculateHeight);
  return {
   width: this.percentSizeConfig.markerWidth,
   height: this.percentSizeConfig.markerHeight
  };
 },
 OnBrowserWindowResize: function(evt) {
 },
 OnBrowserWindowResizeInternal: function(evt){
  if(this.BrowserWindowResizeSubscriber()) 
   this.OnBrowserWindowResize(evt);
 },
 BrowserWindowResizeSubscriber: function() {
  return this.widthValueSetInPercentage;
 },
 CorrectWrappedText: function(getElements, key, reCorrect) {
  var elements = this.GetCachedElements(getElements, this.wrappedTextContainers, key);
  for(var i = 0; i < elements.length; i++)
   this.CorrectWrappedTextInContainer(elements[i], reCorrect);
 },
 CorrectWrappedTextInContainer: function(container, reCorrect) {
  if(!container || (container.dxWrappedTextCorrected && !reCorrect) || container.offsetWidth === 0) return;
  _aspxAdjustWrappedTextInContainer(container);
  container.dxWrappedTextCorrected = true;
 },
 CorrectVerticalAlignment: function(alignMethod, getElements, key, reAlign) {
  var elements = this.GetCachedElements(getElements, this.verticalAlignedElements, key);
  for(var i = 0; i < elements.length; i++)
   this.CorrectElementVerticalAlignment(alignMethod, elements[i], reAlign);
 },
 CorrectElementVerticalAlignment: function(alignMethod, element, reAlign) {
  if(!element || (element.dxVerticalAligned && !reAlign) || element.offsetHeight === 0) return;
  alignMethod(element);
  element.dxVerticalAligned = true;
 },
 ClearVerticalAlignedElementsCache: function() {
  this.verticalAlignedElements = {};
 },
 ClearWrappedTextContainersCache: function() {
  this.wrappedTextContainers = {};
 },
 GetCachedElements: function(getElements, cache, key) {
  if(!key) key = "elements";
  if(!cache[key] || !_aspxIsValidElements(cache[key])){
   var elements = getElements.call(this);
   if(!ASPxIdent.IsArray(elements))
    elements = [elements];
   cache[key] = elements;
  }
  return cache[key];
 },
 AdjustPagerControls: function() {
  if(typeof(aspxGetPagersCollection) != "undefined")
   aspxGetPagersCollection().AdjustControls(this.GetMainElement());
 },
 OnAdaptiveLayoutChanging: function(isAdaptiveView) {
 },
 RaiseAdaptiveLayoutChanging: function(isAdaptiveView) {
  if(!this.LayoutChanging.IsEmpty()){
   var args = new ASPxClientAdaptiveLayoutChangingEventArgs(isAdaptiveView);
   this.LayoutChanging.FireEvent(this, args);
   return args.isAdaptiveView;
  }
  return isAdaptiveView;
 },
 SetAdaptiveClassNames: function(prevClassName, newClassName) {
  var maiElement = this.GetMainElement();
  if(maiElement) {
   _aspxRemoveClassNameFromElement(maiElement, prevClassName);
   _aspxAddClassNameToElement(maiElement, newClassName);
  }
 },
 RegisterInControlTree: function(tree) {
  var mainElement = this.GetMainElement();
  if(mainElement && mainElement.id)
   tree.createNode(mainElement.id, this);
 },
 RegisterServerEventAssigned: function(eventNames){
  for(var i = 0; i < eventNames.length; i++)
   this.serverEvents[eventNames[i]] = true;
 },
 IsServerEventAssigned: function(eventName){
  return !!this.serverEvents[eventName];
 },
 GetChild: function(idPostfix){
  var mainElement = this.GetMainElement();
  return mainElement ? _aspxGetChildById(mainElement, this.name + idPostfix) : null;
 },
 GetItemElementName: function(element) {
  var name = "";
  if(element.id)
   name = element.id.substring(this.name.length + 1);
  return name;
 },
 GetLinkElement: function(element) {
  if (element == null) return null;
  return (element.tagName == "A") ? element : _aspxGetChildByTagName(element, "A", 0);
 },
 GetInternalHyperlinkElement: function(parentElement, index) {
  var element = _aspxGetChildByTagName(parentElement, "A", index);
  if (element == null) 
   element = _aspxGetChildByTagName(parentElement, "SPAN", index);
  return element;
 },
 GetParentForm: function(){
  return _aspxGetParentByTagName(this.GetMainElement(), "FORM");
 },
 GetMainElement: function(){
  if(!_aspxIsExistsElement(this.mainElement))
   this.mainElement = _aspxGetElementById(this.name);
  return this.mainElement;
 },
 OnControlClick: function(clickedElement, htmlEvent) {
 },
 IsLoadingContainerVisible: function(){
  return this.IsVisible();
 },
 GetLoadingPanelElement: function(){
  return _aspxGetElementById(this.name + "_LP");
 },
 CloneLoadingPanel: function(element, parent) {
  var clone = element.cloneNode(true);
  clone.id = element.id + "V";
  parent.appendChild(clone);
  return clone;
 },
 CreateLoadingPanelWithoutBordersInsideContainer: function(container) {
  var loadingPanel = this.CreateLoadingPanelInsideContainer(container, false, true, true);
  var contentStyle = _aspxGetCurrentStyle(container);
  if(!loadingPanel || !contentStyle)
   return;
  var elements = [ ];
  elements.push(loadingPanel.tagName == "TABLE" ? loadingPanel : _aspxGetChildByTagName(loadingPanel, "TABLE", 0));
  var cells = _aspxGetElementsByTagName(loadingPanel, "TD");
  if(!cells) cells = [ ];
  for(var i = 0; i < cells.length; i++)
   elements.push(cells[i]);
  for(var i = 0; i < elements.length; i++) {
   var el = elements[i];
   el.style.borderWidth = 0;
   el.style.backgroundColor = contentStyle.backgroundColor;
   if(_aspxIsExists(el.style.boxShadow))
      el.style.boxShadow = "none";
   else if(_aspxIsExists(el.style.MozBoxShadow))
    el.style.MozBoxShadow = "none";
   else if(_aspxIsExists(el.style.webkitBoxShadow))
    el.style.webkitBoxShadow = "none";
  }
 },
 CreateLoadingPanelInsideContainer: function(parentElement, hideContent, collapseHeight, collapseWidth) {
  if(this.ShouldHideExistingLoadingElements())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingElements = true;
   return null;
  }
  var element = this.GetLoadingPanelElement();
  if (element != null){
   var width = collapseWidth ? 0 : _aspxGetClearClientWidth(parentElement);
   var height = collapseHeight ? 0 : _aspxGetClearClientHeight(parentElement);
   if(hideContent){
    for(var i = parentElement.childNodes.length - 1; i > -1; i--){
     if(parentElement.childNodes[i].style)
      parentElement.childNodes[i].style.display = "none";
     else if(parentElement.childNodes[i].nodeType == 3) 
      parentElement.removeChild(parentElement.childNodes[i]);
    }
   }
   else
    parentElement.innerHTML = "";
   var table = document.createElement("TABLE");
   parentElement.appendChild(table);
   table.border = 0;
   table.cellPadding = 0;
   table.cellSpacing = 0;
   _aspxSetStyles(table, {
    width: (width > 0) ? width : "100%",
    height: (height > 0) ? height : "100%"
   });
   var tbody = document.createElement("TBODY");
   table.appendChild(tbody);
   var tr = document.createElement("TR");
   tbody.appendChild(tr);
   var td = document.createElement("TD");
   tr.appendChild(td);
   td.align = "center";
   td.vAlign = "middle";
   element = this.CloneLoadingPanel(element, td);
   _aspxSetElementDisplay(element, true);
   this.loadingPanelElement = element;
   return element;
  } else
   parentElement.innerHTML = "&nbsp;";
  return null;
 },
 CreateLoadingPanelWithAbsolutePosition: function(parentElement, offsetElement) {
  if(this.ShouldHideExistingLoadingElements())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingElements = true;
   return null;
  }
  if(!offsetElement)
   offsetElement = parentElement;
  var element = this.GetLoadingPanelElement();
  if(element != null) {
   element = this.CloneLoadingPanel(element, parentElement);
   _aspxSetStyles(element, {
    position: "absolute",
    display: ""
   });
   this.SetLoadingPanelLocation(offsetElement, element);
   this.loadingPanelElement = element;
   return element;
  }
  return null;
 },
 CreateLoadingPanelInline: function(parentElement){
  if(this.ShouldHideExistingLoadingElements())
   this.HideLoadingPanel();
  if(parentElement == null)
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingElements = true;
   return null;
  }
  var element = this.GetLoadingPanelElement();
  if(element != null) {
   element = this.CloneLoadingPanel(element, parentElement);
   _aspxSetElementDisplay(element, true);
   this.loadingPanelElement = element;
   return element;
  }
  return null;
 },
 ShowLoadingPanel: function() {
 },
 ShowLoadingElements: function() {
  if(this.InCallback() || this.lpTimer > -1) return;
  this.ShowLoadingDiv();
  if(this.IsCallbackAnimationEnabled())
   this.StartBeginCallbackAnimation();
  else
   this.ShowLoadingElementsInternal();
 },
 ShowLoadingElementsInternal: function() {
  if(this.lpDelay > 0 && !this.IsCallbackAnimationEnabled()) {
   var _this = this;
   this.lpTimer = _aspxSetTimeout(function() { _this.ShowLoadingPanelOnTimer(); }, this.lpDelay);
  }
  else {
   this.RestoreLoadingDivOpacity();
   this.ShowLoadingPanel();
  }
 },
 GetLoadingPanelOffsetElement: function (baseElement) {
  if(this.IsCallbackAnimationEnabled()) {
   var element = this.GetLoadingPanelCallbackAnimationOffsetElement();
   if(element) {
    var container = typeof(ASPxAnimationHelper) != "undefined" ? ASPxAnimationHelper.findSlideAnimationContainer(element) : null;
    if(container)
     return container.parentNode.parentNode;
    else
     return element;
   }
  }
  return baseElement;
 },
 GetLoadingPanelCallbackAnimationOffsetElement: function () {
  return this.GetCallbackAnimationElement();
 },
 IsCallbackAnimationEnabled: function () {
  return (this.enableCallbackAnimation || this.enableSlideCallbackAnimation) && !this.isCallbackAnimationPrevented;
 },
 StartBeginCallbackAnimation: function () {
  this.beginCallbackAnimationProcessing = true;
  this.isCallbackFinished = false;
  var element = this.GetCallbackAnimationElement();
  if(element && this.enableSlideCallbackAnimation && this.slideAnimationDirection) 
   ASPxAnimationHelper.slideOut(element, this.slideAnimationDirection, this.FinishBeginCallbackAnimation.aspxBind(this));
  else if(element && this.enableCallbackAnimation) 
   ASPxAnimationHelper.fadeOut(element, this.FinishBeginCallbackAnimation.aspxBind(this));
  else
   this.FinishBeginCallbackAnimation();
 },
 FinishBeginCallbackAnimation: function () {
  this.beginCallbackAnimationProcessing = false;
  if(!this.isCallbackFinished)
   this.ShowLoadingElementsInternal();
  else {
   this.DoCallback(this.savedCallbackResult);
   this.savedCallbackResult = null;
  }
 },
 CheckBeginCallbackAnimationInProgress: function(callbackResult) {
  if(this.beginCallbackAnimationProcessing) {
   this.savedCallbackResult = callbackResult;
   this.isCallbackFinished = true;
   return true;
  }
  return false;
 },
 StartEndCallbackAnimation: function () {
  this.HideLoadingPanel();
  this.SetInitialLoadingDivOpacity();
  this.RaiseEndCallbackAnimationStart();
  this.endCallbackAnimationProcessing = true;
  var element = this.GetCallbackAnimationElement();
  if(element && this.enableSlideCallbackAnimation && this.slideAnimationDirection) 
   ASPxAnimationHelper.slideIn(element, this.slideAnimationDirection, this.FinishEndCallbackAnimation.aspxBind(this));
  else if(element && this.enableCallbackAnimation) 
   ASPxAnimationHelper.fadeIn(element, this.FinishEndCallbackAnimation.aspxBind(this));
  else
   this.FinishEndCallbackAnimation();
  this.slideAnimationDirection = null;
 },
 FinishEndCallbackAnimation: function () {
  this.DoEndCallback();
  this.endCallbackAnimationProcessing = false;
  this.CheckRepeatGesture();
 },
 CheckEndCallbackAnimationNeeded: function() {
  if(!this.endCallbackAnimationProcessing && this.requestCount == 1) {
   this.StartEndCallbackAnimation();
   return true;
  }
  return false;
 },
 PreventCallbackAnimation: function() {
  this.isCallbackAnimationPrevented = true;
 },
 GetCallbackAnimationElement: function() {
  return null;
 },
 AssignSlideAnimationDirectionByPagerArgument: function(arg, currentPageIndex) {
  this.slideAnimationDirection = null;
  if(this.enableSlideCallbackAnimation && typeof(ASPxAnimationHelper) != "undefined") {
   if (arg == ASPxClientPagerCommands.Next || arg == ASPxClientPagerCommands.Last)
    this.slideAnimationDirection = ASPxAnimationHelper.SLIDE_LEFT_DIRECTION;
   else if (arg == ASPxClientPagerCommands.First || arg == ASPxClientPagerCommands.Prev)
    this.slideAnimationDirection = ASPxAnimationHelper.SLIDE_RIGHT_DIRECTION;
   else if(!isNaN(currentPageIndex) && arg.indexOf(ASPxClientPagerCommands.PageNumber) == 0) {
    var newPageIndex = parseInt(arg.substring(2));
    if(!isNaN(newPageIndex))
     this.slideAnimationDirection = newPageIndex < currentPageIndex ? ASPxAnimationHelper.SLIDE_RIGHT_DIRECTION : ASPxAnimationHelper.SLIDE_LEFT_DIRECTION;
   }
  }
 },
 TryShowPhantomLoadingElements: function () {
  if (this.hasPhantomLoadingElements && this.InCallback()) {
   this.ShowLoadingDivAndPanel();
   this.hasPhantomLoadingElements = false;
  }
 },
 ShowLoadingDivAndPanel: function () {
  this.ShowLoadingDiv();
  this.RestoreLoadingDivOpacity();
  this.ShowLoadingPanel();
 },
 HideLoadingElements: function() {
  this.HideLoadingPanel();
  this.HideLoadingDiv();
 },
 ShowLoadingPanelOnTimer: function() {
  this.ClearLoadingPanelTimer();
  if(this.RenderExistsOnPage()) {
   this.RestoreLoadingDivOpacity();
   this.ShowLoadingPanel();
  }
 },
 ClearLoadingPanelTimer: function() {
  this.lpTimer = _aspxClearTimer(this.lpTimer);  
 },
 HideLoadingPanel: function() {
  this.ClearLoadingPanelTimer();
  this.hasPhantomLoadingElements = false;
  if(_aspxIsExistsElement(this.loadingPanelElement)) {
   _aspxRemoveElement(this.loadingPanelElement);
   this.loadingPanelElement = null;
  }
 },
 SetLoadingPanelLocation: function(offsetElement, loadingPanel, x, y, offsetX, offsetY) {
  if(!_aspxIsExists(x) || !_aspxIsExists(y)){
   var x1 = _aspxGetAbsoluteX(offsetElement);
   var y1 = _aspxGetAbsoluteY(offsetElement);
   var x2 = x1;
   var y2 = y1;
   if(offsetElement == document.body){
    x2 += _aspxGetDocumentMaxClientWidth();
    y2 += _aspxGetDocumentMaxClientHeight();
   }
   else{
    x2 += offsetElement.offsetWidth;
    y2 += offsetElement.offsetHeight;
   }
   if(x1 < _aspxGetDocumentScrollLeft())
    x1 = _aspxGetDocumentScrollLeft();
   if(y1 < _aspxGetDocumentScrollTop())
    y1 = _aspxGetDocumentScrollTop();
   if(x2 > _aspxGetDocumentScrollLeft() + _aspxGetDocumentClientWidth())
    x2 = _aspxGetDocumentScrollLeft() + _aspxGetDocumentClientWidth();
   if(y2 > _aspxGetDocumentScrollTop() + _aspxGetDocumentClientHeight())
    y2 = _aspxGetDocumentScrollTop() + _aspxGetDocumentClientHeight();
   x = x1 + ((x2 - x1 - loadingPanel.offsetWidth) / 2);
   y = y1 + ((y2 - y1 - loadingPanel.offsetHeight) / 2);
  }
  if(_aspxIsExists(offsetX) && _aspxIsExists(offsetY)){
   x += offsetX;
   y += offsetY;
  }
  x = _aspxPrepareClientPosForElement(x, loadingPanel, true);
  y = _aspxPrepareClientPosForElement(y, loadingPanel, false);
  if(__aspxIE && __aspxBrowserVersion > 8 && (y - Math.floor(y) === 0.5))
   y = Math.ceil(y);
  _aspxSetStyles(loadingPanel, { left: x, top: y });
 },
 GetLoadingDiv: function(){
  return _aspxGetElementById(this.name + "_LD");
 },
 CreateLoadingDiv: function(parentElement, offsetElement){
  if(this.ShouldHideExistingLoadingElements())
   this.HideLoadingDiv();
  if(parentElement == null) 
   return null;
  if(!this.IsLoadingContainerVisible()) {
   this.hasPhantomLoadingElements = true;
   return null;
  }
  if(!offsetElement)
   offsetElement = parentElement;
  var div = this.GetLoadingDiv();
  if(div != null){
   div = div.cloneNode(true);
   parentElement.appendChild(div);
   _aspxSetElementDisplay(div, true);
   _aspxAttachEventToElement(div, ASPxClientTouchUI.touchMouseDownEventName, _aspxPreventEvent);
   _aspxAttachEventToElement(div, ASPxClientTouchUI.touchMouseMoveEventName, _aspxPreventEvent);
   _aspxAttachEventToElement(div, ASPxClientTouchUI.touchMouseUpEventName, _aspxPreventEvent);
   this.SetLoadingDivBounds(offsetElement, div);
   this.loadingDivElement = div;
   this.SetInitialLoadingDivOpacity();
   return div;
  }
  return null;
 },
 SetInitialLoadingDivOpacity: function() {
  if(!this.loadingDivElement) return;
  _aspxSaveStyleAttribute(this.loadingDivElement, "opacity");
  _aspxSaveStyleAttribute(this.loadingDivElement, "filter");
  _aspxSetElementOpacity(this.loadingDivElement, 0.01);
 },
 RestoreLoadingDivOpacity: function() {
  if(!this.loadingDivElement) return;
  _aspxRestoreStyleAttribute(this.loadingDivElement, "opacity");
  _aspxRestoreStyleAttribute(this.loadingDivElement, "filter");
 },
 SetLoadingDivBounds: function(offsetElement, loadingDiv) {
  var absX = (offsetElement == document.body) ? 0 : _aspxGetAbsoluteX(offsetElement);
  var absY = (offsetElement == document.body) ? 0 : _aspxGetAbsoluteY(offsetElement);
  _aspxSetStyles(loadingDiv, {
   left: _aspxPrepareClientPosForElement(absX, loadingDiv, true),
   top: _aspxPrepareClientPosForElement(absY, loadingDiv, false)
  });
  var width = (offsetElement == document.body) ? _aspxGetDocumentWidth() : offsetElement.offsetWidth;
  var height = (offsetElement == document.body) ? _aspxGetDocumentHeight() : offsetElement.offsetHeight;
  if(height < 0) 
   height = 0;
  _aspxSetStyles(loadingDiv, { width: width, height: height });
  var correctedWidth = 2 * width - loadingDiv.offsetWidth;
  if(correctedWidth <= 0) correctedWidth = width;
  var correctedHeight = 2 * height - loadingDiv.offsetHeight;
  if (correctedHeight <= 0) correctedHeight = height;
  _aspxSetStyles(loadingDiv, { width: correctedWidth, height: correctedHeight });
 },
 ShowLoadingDiv: function() {
 },
 HideLoadingDiv: function() {
  this.hasPhantomLoadingElements = false;
  if(_aspxIsExistsElement(this.loadingDivElement)){
   _aspxRemoveElement(this.loadingDivElement);
   this.loadingDivElement = null;
  }
 },
 CanHandleGesture: function(evt) {
  return false;
 },
 CanHandleGestureCore: function(evt) {
  var source = _aspxGetEventSource(evt);
  if(_aspxGetIsParent(this.loadingPanelElement, source) || _aspxGetIsParent(this.loadingDivElement, source))
   return true; 
  var callbackAnimationElement = this.GetCallbackAnimationElement();
  if(!callbackAnimationElement)
   return false;
  var animationContainer = ASPxAnimationHelper.getSlideAnimationContainer(callbackAnimationElement, false, false);
  if(animationContainer && _aspxGetIsParent(animationContainer, source) && !_aspxGetIsParent(animationContainer.childNodes[0], source))
   return true; 
  return this.CanHandleGesture(evt); 
 },
 AllowStartGesture: function() {
  return !this.beginCallbackAnimationProcessing && !this.endCallbackAnimationProcessing;
 },
 StartGesture: function() {
 },
 AllowExecuteGesture: function(value) {
  return false;
 },
 ExecuteGesture: function(value) {
 },
 CancelGesture: function(value) {
  if(this.repeatedGestureCount === 0) {
   this.repeatedGestureValue = value;
   this.repeatedGestureCount = 1;
  }
  else {
   if(this.repeatedGestureValue * value > 0)
    this.repeatedGestureCount++;
   else
    this.repeatedGestureCount--;
   if(this.repeatedGestureCount === 0)
    this.repeatedGestureCount = 0;
  }
 },
 CheckRepeatGesture: function() {
  if(this.repeatedGestureCount !== 0) {
   if(this.AllowExecuteGesture(this.repeatedGestureValue))
    this.ExecuteGesture(this.repeatedGestureValue, this.repeatedGestureCount);
   this.repeatedGestureValue = 0;
   this.repeatedGestureCount = 0;
  }
 },
 AllowExecutePagerGesture: function (pageIndex, pageCount, value) {
  if(pageIndex < 0) return false;
  if(pageCount <= 1) return false;
  if(value > 0 && pageIndex === 0) return false;
  if(value < 0 && pageIndex === pageCount - 1) return false;
  return true;
 },
 ExecutePagerGesture: function(pageIndex, pageCount, value, count, method) {
  if(!count) count = 1;
  var pageIndex = pageIndex + (value < 0 ? count : -count);
  if(pageIndex < 0) pageIndex = 0;
  if(pageIndex > pageCount - 1) pageIndex = pageCount - 1;
  method(ASPxClientPagerCommands.PageNumber + pageIndex);
 },
 RaiseInit: function(){
  if(!this.Init.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.Init.FireEvent(this, args);
  }
 },
 RaiseBeginCallbackInternal: function(command){
  if(!this.BeginCallback.IsEmpty()){
   var args = new ASPxClientBeginCallbackEventArgs(command);
   this.BeginCallback.FireEvent(this, args);
  }
 },
 RaiseBeginCallback: function(command){
  this.RaiseBeginCallbackInternal(command);
  if(typeof(aspxGetGlobalEvents) != "undefined")
   aspxGetGlobalEvents().OnBeginCallback(this, command);
 },
 RaiseEndCallback: function(){
  if(!this.EndCallback.IsEmpty()){
   var args = new ASPxClientEndCallbackEventArgs();
   this.EndCallback.FireEvent(this, args);
  }
  if(typeof(aspxGetGlobalEvents) != "undefined")
   aspxGetGlobalEvents().OnEndCallback(this);
 },
 RaiseEndCallbackAnimationStart: function(){
  if(!this.EndCallbackAnimationStart.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.EndCallbackAnimationStart.FireEvent(this, args);
  }
 },
 RaiseCallbackError: function(message) {
  if(!this.CallbackError.IsEmpty()) {
   var args = new ASPxClientCallbackErrorEventArgs(message);
   this.CallbackError.FireEvent(this, args);
   if(args.handled)
    return { isHandled: true, errorMessage: args.message };
  }
  if(typeof(aspxGetGlobalEvents) != "undefined") {
   var args = new ASPxClientCallbackErrorEventArgs(message);
   aspxGetGlobalEvents().OnCallbackError(this, args);
   if(args.handled)
    return { isHandled: true, errorMessage: args.message };
  }
  return { isHandled: false, errorMessage: message };
 },
 IsVisible: function() {
  var element = this.GetMainElement();
  return _aspxElementIsVisible(element);
 },
 IsDisplayed: function() {
  var element = this.GetMainElement();
  while(element && element.tagName != "BODY") {
   if(!_aspxGetElementDisplay(element)) 
    return false;
   element = element.parentNode;
  }
  return true;
 },
 IsHidden: function() {
  var element = this.GetMainElement();
  return element.offsetWidth == 0 && element.offsetHeight == 0;
 },
 Focus: function() {
 },
 GetClientVisible: function(){
  return this.GetVisible();
 },
 SetClientVisible: function(visible){
  this.SetVisible(visible);
 },
 GetVisible: function(){
  return this.clientVisible;
 },
 SetVisible: function(visible){
  if(this.clientVisible != visible){
   this.clientVisible = visible;
   _aspxSetElementDisplay(this.GetMainElement(), visible);
   if (visible) {
    this.AdjustControl();
    var mainElement = this.GetMainElement();
    if(mainElement)
     aspxGetControlCollection().AdjustControls(mainElement);
   }
  }
 },
 GetEnabled: function() {
  return this.clientEnabled;
 },
 SetEnabled: function(enabled) {
  this.clientEnabled = enabled;
  if(ASPxClientControl.setEnabledLocked)
   return;
  else
   ASPxClientControl.setEnabledLocked = true;
  aspxGetControlCollection().ProcessControlsInContainer(this.GetMainElement(), function(control) {
   if(_aspxIsFunction(control.SetEnabled))
    control.SetEnabled(enabled);
  });
  delete ASPxClientControl.setEnabledLocked;
 },
 InCallback: function() {
  return this.requestCount > 0;
 },
 DoBeginCallback: function(command) {
  this.RaiseBeginCallback(command || "");
  aspxGetControlCollection().Before_WebForm_InitCallback(this.name);
  if(typeof(WebForm_InitCallback) != "undefined" && WebForm_InitCallback) {
   __theFormPostData = "";
   __theFormPostCollection = [ ];
   this.ClearPostBackEventInput("__EVENTTARGET");
   this.ClearPostBackEventInput("__EVENTARGUMENT");
   WebForm_InitCallback();
   this.savedFormPostData = __theFormPostData;   
   this.savedFormPostCollection = __theFormPostCollection;
  }
 },
 ClearPostBackEventInput: function(id){
  var element = _aspxGetElementById(id);
  if(element != null) element.value = "";
 },
 PerformDataCallback: function(arg, handler) {
  this.CreateCustomDataCallback(arg, "", handler);
 }, 
 CreateCallback: function(arg, command) {
  var callbackInfo = this.CreateCallbackInfo(ASPxCallbackType.Common, null);
  this.CreateCallbackByInfo(arg, command, callbackInfo);
 },
 CreateCustomDataCallback: function(arg, command, handler) {
  var callbackInfo = this.CreateCallbackInfo(ASPxCallbackType.Data, handler);
  this.CreateCallbackByInfo(arg, command, callbackInfo);
 },
 CreateCallbackByInfo: function(arg, command, callbackInfo) {
  if(!this.CanCreateCallback()) return;
  if(typeof(WebForm_DoCallback) != "undefined" && WebForm_DoCallback && __aspxDocumentLoaded)
   this.CreateCallbackInternal(arg, command, true, callbackInfo);
  else {
   if(!this.savedCallbacks)
    this.savedCallbacks = [];
   var callbackInfo = { arg: arg, command: command, callbackInfo: callbackInfo };
   if(this.allowMultipleCallbacks)
    this.savedCallbacks.push(callbackInfo);
   else
    this.savedCallbacks[0] = callbackInfo;
  }
 },
 CreateCallbackInternal: function(arg, command, viaTimer, callbackInfo) {
  this.requestCount++;
  this.DoBeginCallback(command);
  if(typeof(arg) == "undefined")
   arg = "";
  if(typeof(command) == "undefined")
   command = "";
  var callbackID = this.SaveCallbackInfo(callbackInfo);
  if(viaTimer)
   window.setTimeout("aspxCreateCallback('" + this.name + "', '" + escape(arg) + "', '" + escape(command) + "', " + callbackID + ");", 0);
  else
   this.CreateCallbackCore(arg, command, callbackID);
 },
 CreateCallbackCore: function(arg, command, callbackID) {
  var callBackMethod = this.GetCallbackMethod(command);
  __theFormPostData = this.savedFormPostData;
  __theFormPostCollection = this.savedFormPostCollection;
  callBackMethod.call(this, this.GetSerializedCallbackInfoByID(callbackID) + arg);
 },
 GetCallbackMethod: function(command){
  return this.callBack;
 },
 CanCreateCallback: function() {
  return !this.InCallback() || (this.allowMultipleCallbacks && !this.beginCallbackAnimationProcessing && !this.endCallbackAnimationProcessing);
 },
 DoLoadCallbackScripts: function() {
  _aspxProcessScriptsAndLinks(this.name, true);
 },
 DoEndCallback: function() {
  if(this.IsCallbackAnimationEnabled() && this.CheckEndCallbackAnimationNeeded()) 
   return;
  this.requestCount--;
  if(this.HideLoadingPanelOnCallback() && this.requestCount < 1) 
   this.HideLoadingElements();
  if(this.enableSwipeGestures && this.supportGestures) {
   ASPxGesturesHelper.UpdateSwipeAnimationContainer(this.name);
   if(this.touchUIMouseScroller)
    this.touchUIMouseScroller.update();
  }
  this.isCallbackAnimationPrevented = false;
  this.OnCallbackFinalized();
  this.RaiseEndCallback();
 },
 DoFinalizeCallback: function() {
 },
 OnCallbackFinalized: function() {
 },
 HideLoadingPanelOnCallback: function() {
  return true;
 },
 ShouldHideExistingLoadingElements: function() {
  return true;
 },
 EvalCallbackResult: function(resultString){
  return eval(resultString)
 },
 DoCallback: function(result) {
  if(this.IsCallbackAnimationEnabled() && this.CheckBeginCallbackAnimationInProgress(result))
   return;
  result = _aspxTrim(result);
  if(result.indexOf(__aspxCallbackResultPrefix) != 0) 
   this.ProcessCallbackGeneralError(result);
  else {
   var resultObj = null;
   try {
    resultObj = this.EvalCallbackResult(result);
   } 
   catch(e) {
   }
   if(resultObj) {
    if(resultObj.redirect){
     if(!__aspxIE)
      window.location.href = resultObj.redirect;
     else { 
      var fakeLink = document.createElement("a");
      fakeLink.href = resultObj.redirect;
      document.body.appendChild(fakeLink); 
      fakeLink.click();
     }
    }
    else if(resultObj.generalError){
     this.ProcessCallbackGeneralError(resultObj.generalError);
    }
    else {
     var errorObj = resultObj.error;
     if(errorObj)
      this.ProcessCallbackError(errorObj);
     else {
      if(resultObj.cp) {
       for(var name in resultObj.cp)
        this[name] = resultObj.cp[name];
      }
      var callbackInfo = this.DequeueCallbackInfo(resultObj.id);
      if(callbackInfo.type == ASPxCallbackType.Data) 
       this.ProcessCustomDataCallback(resultObj.result, callbackInfo);
      else 
       this.ProcessCallback(resultObj.result);
     }
    }
   } 
  }
  this.DoLoadCallbackScripts();
 },
 DoCallbackError: function(result) {
  this.HideLoadingElements();
  this.ProcessCallbackGeneralError(result); 
 },
 DoControlClick: function(evt) {
  this.OnControlClick(_aspxGetEventSource(evt), evt);
 },
 ProcessCallback: function(result) {
  this.OnCallback(result);
 },
 ProcessCustomDataCallback: function(result, callbackInfo) {
  if(callbackInfo.handler != null)
   callbackInfo.handler(this, result);
  this.RaiseCustomDataCallback(result);
 },
 RaiseCustomDataCallback: function(result) {
  if(!this.CustomDataCallback.IsEmpty()) {
   var arg = new ASPxClientCustomDataCallbackEventArgs(result);
   this.CustomDataCallback.FireEvent(this, arg);
  }
 },
 OnCallback: function(result) {
 },
 CreateCallbackInfo: function(type, handler) {
  return { type: type, handler: handler };
 },
 GetSerializedCallbackInfoByID: function(callbackID) {
  return this.GetCallbackInfoByID(callbackID).type + callbackID + __aspxCallbackSeparator;
 },
 SaveCallbackInfo: function(callbackInfo) {
  var activeCallbacksInfo = this.GetActiveCallbacksInfo();
  for(var i = 0; i < activeCallbacksInfo.length; i++) {
   if(activeCallbacksInfo[i] == null) {
    activeCallbacksInfo[i] = callbackInfo;
    return i;
   }
  }
  activeCallbacksInfo.push(callbackInfo);
  return activeCallbacksInfo.length - 1;
 },
 GetActiveCallbacksInfo: function() {
  var persistentProperties = this.GetPersistentProperties();
  if(!persistentProperties.activeCallbacks)
   persistentProperties.activeCallbacks = [ ];
  return persistentProperties.activeCallbacks;
 },
 GetPersistentProperties: function() {
  var storage = _aspxGetPersistentControlPropertiesStorage();
  var persistentProperties = storage[this.name];
  if(!persistentProperties) {
   persistentProperties = { };
   storage[this.name] = persistentProperties;
  }
  return persistentProperties;
 },
 GetCallbackInfoByID: function(callbackID) {
  return this.GetActiveCallbacksInfo()[callbackID];
 },
 DequeueCallbackInfo: function(index) {
  var activeCallbacksInfo = this.GetActiveCallbacksInfo();
  if(index < 0 || index >= activeCallbacksInfo.length)
   return null;
  var result = activeCallbacksInfo[index];
  activeCallbacksInfo[index] = null;
  return result;
 },
 ProcessCallbackError: function(errorObj) {
  var data = _aspxIsExists(errorObj.data) ? errorObj.data : null;
  var result = this.RaiseCallbackError(errorObj.message);
  if(result.isHandled)
   this.OnCallbackErrorAfterUserHandle(result.errorMessage, data); 
  else
   this.OnCallbackError(result.errorMessage, data); 
 },
 OnCallbackError: function(errorMessage, data) {
  if(errorMessage)
   alert(errorMessage);
 },
 OnCallbackErrorAfterUserHandle: function(errorMessage, data) {
 },
 ProcessCallbackGeneralError: function(errorMessage) {
  var result = this.RaiseCallbackError(errorMessage);
  if(!result.isHandled)
   this.OnCallbackGeneralError(result.errorMessage);
 },
 OnCallbackGeneralError: function(errorMessage) {
  this.OnCallbackError(errorMessage, null);
 },
 SendPostBack: function(params) {
  __doPostBack(this.uniqueID, params);
 }
});
ASPxClientControl.AdjustControls = function(container, collapseControls){
 aspxGetControlCollection().AdjustControls(container, collapseControls);
};
ASPxClientControl.Cast = function(obj) {
 if(typeof obj == "string")
  return window[obj];
 return obj;
};
ASPxClientControl.GetControlCollection = function(){
 return aspxGetControlCollection();
}
var __aspxControlCollection = null;
function aspxGetControlCollection(){
 if(__aspxControlCollection == null)
  __aspxControlCollection = new ASPxClientControlCollection();
 return __aspxControlCollection;
}
var __aspxPersistentControlPropertiesStorage = null;
function _aspxGetPersistentControlPropertiesStorage() {
 if(__aspxPersistentControlPropertiesStorage == null)
  __aspxPersistentControlPropertiesStorage = { };
 return __aspxPersistentControlPropertiesStorage;
}
function _aspxFunctionIsInCallstack(currentCallee, targetFunction, depthLimit) {
 var candidate = currentCallee;
 var depth = 0;
 while(candidate && depth <= depthLimit) {
  candidate = candidate.caller;
  if(candidate == targetFunction)
   return true;
  depth++;
 }
 return false;
}
function aspxCAInit() {
 var isAppInit = typeof(Sys$_Application$initialize) != "undefined" &&
  _aspxFunctionIsInCallstack(arguments.callee, Sys$_Application$initialize, 10 );
 aspxGetControlCollection().AtlasInitialize(!isAppInit);
}
function aspxCreateCallback(name, arg, command, callbackID){
 var control = aspxGetControlCollection().Get(name);
 if(control != null)
  control.CreateCallbackCore(unescape(arg), unescape(command), callbackID);
}
function aspxCallback(result, context){
 var collection = aspxGetControlCollection();
 collection.DoFinalizeCallback();
 var control = collection.Get(context);
 if(control != null)
  control.DoCallback(result);
}
function aspxCallbackError(result, context){
 var control = aspxGetControlCollection().Get(context);
 if(control != null)
  control.DoCallbackError(result, false);
}
function aspxCClick(name, evt) {
 var control = aspxGetControlCollection().Get(name);
 if(control != null) control.DoControlClick(evt);
}
_aspxAttachEventToElement(window, "resize", aspxGlobalWindowResize);
function aspxGlobalWindowResize(evt){
 aspxGetControlCollection().OnBrowserWindowResize(evt); 
}
_aspxAttachEventToElement(window.document, "DOMContentLoaded", aspxClassesDOMContentLoaded);
function aspxClassesDOMContentLoaded(evt){
 aspxGetControlCollection().DOMContentLoaded();
}
_aspxAttachEventToElement(window, "load", aspxClassesWindowOnLoad);
function aspxClassesWindowOnLoad(evt){
 __aspxDocumentLoaded = true;
 _aspxSweepDuplicatedLinks();
 ASPxResourceManager.SynchronizeResources();
 aspxGetControlCollection().Initialize();
 _aspxInitializeScripts();
 _aspxInitializeLinks();
 _aspxInitializeFocus();
}
ASPxIdent = { };
ASPxIdent.IsDate = function(obj) {
 return obj && obj.constructor == Date;
};
ASPxIdent.IsRegExp = function(obj) {
 return obj && obj.constructor === RegExp;
};
ASPxIdent.IsArray = function(obj) {
 return obj && obj.constructor == Array;
};
ASPxIdent.IsASPxClientControl = function(obj) {
 return obj && obj.isASPxClientControl;
};
ASPxIdent.IsASPxClientEdit = function(obj) {
 return obj && obj.isASPxClientEdit;
};
ASPxIdent.IsASPxClientRadioButtonList = function(obj) {
 return obj && obj.isASPxClientRadioButtonList;
};
ASPxClientPagerCommands = {
 Next : "PBN",
 Prev : "PBP",
 Last : "PBL",
 First : "PBF",
 PageNumber : "PN",
 PageSize : "PSP"
};
if(_aspxIsFunction(window.WebForm_InitCallbackAddField)) {
 (function() {
  var original = window.WebForm_InitCallbackAddField;
  window.WebForm_InitCallbackAddField = function(name, value) {
   if(typeof(name) == "string" && name)
    original.apply(null, arguments);
  };
 })();
}
function aspxFireDefaultButton(evt, buttonID) {
 if(_aspxIsDefaultButtonEvent(evt, buttonID)) {
  var defaultButton = _aspxGetElementById(buttonID);
  if(defaultButton && defaultButton.click) {
   if(_aspxIsFocusable(defaultButton))
    defaultButton.focus();
   _aspxDoElementClick(defaultButton);
   _aspxPreventEventAndBubble(evt);
   return false;
  }
 }
 return true;
}
function _aspxIsDefaultButtonEvent(evt, defaultButtonID) {
 if(evt.keyCode != ASPxKey.Enter)
  return false;
 var srcElement = _aspxGetEventSource(evt);
 if(!srcElement || srcElement.id === defaultButtonID)
  return true;
 var tagName = srcElement.tagName;
 var type = srcElement.type;
 return tagName != "TEXTAREA" && tagName != "BUTTON" && tagName != "A" &&
  (tagName != "INPUT" || type != "checkbox" && type != "radio" && type != "button" && type != "submit" && type != "reset");
}
ASPxPostHandler = _aspxCreateClass(null, {
 constructor: function() {
  this.Post = new ASPxClientEvent();
  this.PostFinalization = new ASPxClientEvent();
  this.observableForms = [];
  this.ReplaceGlobalPostFunctions();
  this.HandleDxCallbackBeginning();
  this.HandleMSAjaxRequestBeginning();
 },
 Update: function() {
  this.ReplaceFormsSubmit(true);
 },
 OnPost: function(ownerID, isCallback, isMSAjaxRequest, isDXCallback) {
  var args = new ASPxClientPostHandlerOnPostEventArgs(ownerID, isCallback, isMSAjaxRequest, isDXCallback);
  this.Post.FireEvent(this, args);
  if(args.cancel)
   return false;
  this.PostFinalization.FireEvent(this, ASPxClientEventArgs.Empty);
  return true;
 },
 ReplaceGlobalPostFunctions: function() {
  if(_aspxIsFunction(window.__doPostBack))
   this.ReplaceDoPostBack();
  if(_aspxIsFunction(window.WebForm_DoCallback))
   this.ReplaceDoCallback();
  this.ReplaceFormsSubmit();
 },
 HandleDxCallbackBeginning: function() {
  aspxGetControlCollection().BeforeInitCallback.AddHandler(function(s, e) {
   _aspxRaisePostHandlerOnPost(e.callbackOwnerID, true, false, true); 
  });
 },
 HandleMSAjaxRequestBeginning: function() {
  if(window.Sys && Sys.WebForms && Sys.WebForms.PageRequestManager && Sys.WebForms.PageRequestManager.getInstance) {
   var pageRequestManager = Sys.WebForms.PageRequestManager.getInstance();
   if(pageRequestManager != null && ASPxIdent.IsArray(pageRequestManager._onSubmitStatements)) {
    pageRequestManager._onSubmitStatements.unshift(function() {
     var manager = Sys.WebForms.PageRequestManager.getInstance()._postBackSettings;
     var targetID = manager && manager.postbackSettings && manager.postbackSettings.asyncTarget;
     _aspxRaisePostHandlerOnPost(targetID, true, true);
     return true;
    });
   }
  }
 },
 ReplaceDoPostBack: function() {
  var original = __doPostBack;
  __doPostBack = function(eventTarget, eventArgument) {
   var postHandler = aspxGetPostHandler();
   _aspxRaisePostHandlerOnPost(eventTarget);
   if(postHandler.cancelPostProcessing)
    return;
   original(eventTarget, eventArgument);
  };
 },
 ReplaceDoCallback: function() {
  var original = WebForm_DoCallback;
  WebForm_DoCallback = function(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync) {
   var postHandler = aspxGetPostHandler();
   if(postHandler.dxCallbackHandled)
    delete postHandler.dxCallbackHandled;
   else
    _aspxRaisePostHandlerOnPost(eventTarget, true);
   if(postHandler.cancelPostProcessing)
    return;
   return original(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync);
  };
 },
 ReplaceFormsSubmit: function(checkObservableCollection) {
  for(var i = 0; i < document.forms.length; i++) { 
   var form = document.forms[i];
   if(checkObservableCollection && _aspxArrayIndexOf(this.observableForms, form) >= 0)
    continue;
   if(form.submit)
    this.ReplaceFormSubmit(form);
   this.ReplaceFormOnSumbit(form);
   this.observableForms.push(form);
  }
 },
 ReplaceFormSubmit: function(form) {
  var originalSubmit = form.submit;
  form.submit = function() {
   var postHandler = aspxGetPostHandler();
   _aspxRaisePostHandlerOnPost();
   if(postHandler.cancelPostProcessing)
    return false;
   var callee = arguments.callee;
   this.submit = originalSubmit;
   var submitResult = this.submit();
   this.submit = callee;
   return submitResult;
  };
  form = null;
 },
 ReplaceFormOnSumbit: function(form) {
  var originalSubmit = form.onsubmit;
  form.onsubmit = function() {
   var postHandler = aspxGetPostHandler();
   if(postHandler.msAjaxRequestBeginningHandled)
    delete postHandler.msAjaxRequestBeginningHandled;
   else
    _aspxRaisePostHandlerOnPost();
   if(postHandler.cancelPostProcessing)
    return false;
   return _aspxIsFunction(originalSubmit)
    ? originalSubmit.apply(this, arguments)
    : true;
  };
  form = null;
 }
});
function _aspxRaisePostHandlerOnPost(ownerID, isCallback, isMSAjaxRequestBeginning, isDXCallbackBeginning) {
 var postHandler = aspxGetPostHandler();
 if(isMSAjaxRequestBeginning)
  postHandler.msAjaxRequestBeginningHandled = true;
 else if(isDXCallbackBeginning)
  postHandler.dxCallbackHandled = true;
 postHandler.cancelPostProcessing = !postHandler.OnPost(ownerID, isCallback, isMSAjaxRequestBeginning, isDXCallbackBeginning);
}
function aspxGetPostHandler() {
 if (!window.__aspxPostHandler)
  window.__aspxPostHandler = new ASPxPostHandler();
 return window.__aspxPostHandler;
}
ASPxClientBeforeInitCallbackEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(callbackOwnerID){
  this.constructor.prototype.constructor.call(this);
  this.callbackOwnerID = callbackOwnerID;
 }
});
ASPxClientPostHandlerOnPostEventArgs = _aspxCreateClass(ASPxClientCancelEventArgs, {
 constructor: function(ownerID, isCallback, isMSAjaxCallback, isDXCallback){
  this.constructor.prototype.constructor.call(this);
  this.ownerID = ownerID;
  this.isCallback = !!isCallback;
  this.isDXCallback = !!isDXCallback;
  this.isMSAjaxCallback = !!isMSAjaxCallback;
 }
});
ASPxResourceManager = {
 HandlerStr: "DXR.axd?r=",
 ResourceHashes: {},
 SynchronizeResources: function(method){
  if(!method){
   method = function(name, resource) { 
    this.UpdateInputElements(name, resource); 
   }.aspxBind(this);
  }
  var resources = this.GetResourcesData();
  for(var name in resources)
   method(name, resources[name]);
 },
 GetResourcesData: function(){
  return {
   DXScript: this.GetResourcesElementsString(_aspxGetIncludeScripts(), "src", "DXScript"),
   DXCss: this.GetResourcesElementsString(_aspxGetLinks(), "href", "DXCss")
  };
 },
 GetResourcesElementsString: function(elements, urlAttr, id){
  if(!this.ResourceHashes[id]) 
   this.ResourceHashes[id] = {};
  var hash = this.ResourceHashes[id];
  for(var i = 0; i < elements.length; i++) {
   var resourceUrl = _aspxGetAttribute(elements[i], urlAttr);
   if(resourceUrl) {
    var pos = resourceUrl.indexOf(this.HandlerStr);
    if(pos > -1){
     var list = resourceUrl.substr(pos + this.HandlerStr.length);
     var ampPos = list.lastIndexOf("-");
     if(ampPos > -1)
      list = list.substr(0, ampPos);
     var indexes = list.split(",");
     for(var j = 0; j < indexes.length; j++)
      hash[indexes[j]] = indexes[j];
    }
    else
     hash[resourceUrl] = resourceUrl;
   }
  }
  var array = [];
  for(var key in hash) 
   array.push(key);
  return array.join(",");
 },
 UpdateInputElements: function(typeName, list){
  for(var i = 0; i < document.forms.length; i++){
   var inputElement = document.forms[i][typeName];
   if(!inputElement)
    inputElement = this.CreateInputElement(document.forms[i], typeName);
   inputElement.value = list;
  }
 },
 CreateInputElement: function(form, typeName){
  var inputElement = _aspxCreateHiddenField(typeName, typeName);
  form.appendChild(inputElement);
  return inputElement;
 }
};
var __aspxIncludeScriptPrefix = "dxis_";
var __aspxStartupScriptPrefix = "dxss_";
var __aspxIncludeScriptsCache = {};
var __aspxCreatedIncludeScripts = [];
var __aspxAppendedScriptsCount = 0;
var __aspxCallbackOwnerNames = [];
var __aspxScriptsRestartHandlers = { };
function _aspxGetScriptCode(script) {
 var useFirstChildElement = __aspxChrome && __aspxBrowserVersion < 11 
  || __aspxSafari && __aspxBrowserVersion < 5; 
 var text = useFirstChildElement ? script.firstChild.data : script.text;
 var comment = "<!--";
 var pos = text.indexOf(comment);
 if(pos > -1)
  text = text.substr(pos + comment.length);
 return text;
}
function _aspxAppendScript(script) {
 var parent = document.getElementsByTagName("head")[0];
 if(!parent)
  parent = document.body;
 if(parent)
  parent.appendChild(script);
}
function _aspxIsKnownIncludeScript(script) {
 return !!__aspxIncludeScriptsCache[script.src];
}
function _aspxCacheIncludeScript(script) {
 __aspxIncludeScriptsCache[script.src] = 1;
}
function _aspxProcessScriptsAndLinks(ownerName, isCallback) {
 if(!__aspxDocumentLoaded) return; 
 _aspxProcessScripts(ownerName, isCallback);
 _aspxSweepDuplicatedLinks();
 _aspxMoveLinkElements();
 __aspxCachedRules = { };
}
function _aspxGetStartupScripts() {
 return _aspxGetScriptsCore(__aspxStartupScriptPrefix);
}
function _aspxGetIncludeScripts() {
 return _aspxGetScriptsCore(__aspxIncludeScriptPrefix);
}
function _aspxGetScriptsCore(prefix) {
 var result = [];
 var scripts = document.getElementsByTagName("SCRIPT");
 for(var i = 0; i < scripts.length; i++) {
  if (scripts[i].id.indexOf(prefix) == 0)
   result.push(scripts[i]);
 }
 return result;
}
function _aspxGetLinks() {
 var result = [];
 var links = document.getElementsByTagName("LINK");;
 for(var i = 0; i < links.length; i++) 
  result[i] = links[i];
 return result;
}
function _aspxIsLinksLoaded() {
 var links = _aspxGetLinks();
 for(var i = 0, link; link = links[i]; i++) {
  if(link.readyState && link.readyState.toLowerCase() == "loading")
    return false;
  }
 return true;
}
function _aspxInitializeLinks() {
 var links = _aspxGetLinks();
 for(var i = 0; i < links.length; i++)
  links[i].loaded = true; 
}
function _aspxInitializeScripts() {
 var scripts = _aspxGetIncludeScripts();
 for(var i = 0; i < scripts.length; i++)
  _aspxCacheIncludeScript(scripts[i]);   
 var startupScripts = _aspxGetStartupScripts();
 for(var i = 0; i < startupScripts.length; i++)
  startupScripts[i].executed = true; 
}
function _aspxSweepDuplicatedLinks() {
 var hash = { };
 var links = _aspxGetLinks();
 for(var i = 0; i < links.length; i++) {
  var href = links[i].href;
  if(!href)
   continue;
  if(hash[href]){
   if((__aspxIE || !hash[href].loaded) && links[i].loaded) {
    _aspxRemoveElement(hash[href]);
    hash[href] = links[i];
   }
   else
    _aspxRemoveElement(links[i]);
  }
  else
   hash[href] = links[i];
 }
}
function _aspxSweepDuplicatedScripts() {
 var hash = { };
 var scripts = _aspxGetIncludeScripts();
 for(var i = 0; i < scripts.length; i++) {
  var src = scripts[i].src;
  if(!src) continue;
  if(hash[src])
   _aspxRemoveElement(scripts[i]);
  else
   hash[src] = scripts[i];
 }
}
function _aspxProcessScripts(ownerName, isCallback) {
 var scripts = _aspxGetIncludeScripts();
 var previousCreatedScript = null;
 var firstCreatedScript = null;
 for(var i = 0; i < scripts.length; i++) {
  var script = scripts[i];
  if(script.src == "") continue; 
  if(_aspxIsKnownIncludeScript(script))
   continue;
  var createdScript = document.createElement("script");
  createdScript.type = "text/javascript";
  createdScript.src = script.src;
  createdScript.id = script.id;
  function AreScriptsEqual(script1, script2) {
   return script1.src == script2.src;
  }
  if(_aspxArrayIndexOf(__aspxCreatedIncludeScripts, createdScript, AreScriptsEqual) >= 0)
   continue;
  __aspxCreatedIncludeScripts.push(createdScript);
  _aspxRemoveElement(script);
  if(__aspxIE && __aspxBrowserVersion < 9) {
   createdScript.onreadystatechange = new Function("_aspxOnScriptReadyStateChangedCallback(this, " + isCallback + ");");
  } else if(__aspxWebKitFamily || (__aspxFirefox && __aspxBrowserVersion >= 4) || __aspxIE && __aspxBrowserVersion >= 9) {
   createdScript.onload = new Function("_aspxOnScriptLoadCallback(this, " + isCallback + ");");
   if(firstCreatedScript == null)
    firstCreatedScript = createdScript;
   createdScript.nextCreatedScript = null;
   if(previousCreatedScript != null)
    previousCreatedScript.nextCreatedScript = createdScript;
   previousCreatedScript = createdScript;
  } else {
   createdScript.onload = new Function("_aspxOnScriptLoadCallback(this);");
   _aspxAppendScript(createdScript);
   _aspxCacheIncludeScript(createdScript);
  }
 }
 if(firstCreatedScript != null) {
  _aspxAppendScript(firstCreatedScript);
  _aspxCacheIncludeScript(firstCreatedScript);
 }
 if(isCallback)
  __aspxCallbackOwnerNames.push(ownerName);
 if(__aspxCreatedIncludeScripts.length == 0)
  _aspxFinalizeScriptProcessing(isCallback);
}
function _aspxFinalizeScriptProcessing(isCallback) {
 __aspxCreatedIncludeScripts = [];
 __aspxAppendedScriptsCount = 0;
 _aspxSweepDuplicatedScripts();
 _aspxRunStartupScripts(isCallback);
 ASPxResourceManager.SynchronizeResources();
}
var __aspxStartupScriptsRunning = false;
function _aspxRunStartupScripts(isCallback) {
 __aspxStartupScriptsRunning = true;
 try {
  _aspxRunStartupScriptsCore();
 }
 finally {
  __aspxStartupScriptsRunning = false;
 }
 if(__aspxDocumentLoaded) {
  aspxGetControlCollection().InitializeElements(isCallback);
  for(var key in __aspxScriptsRestartHandlers)
   __aspxScriptsRestartHandlers[key]();
  _aspxRunEndCallbackScript();
 }
}
function _aspxRunStartupScriptsCore() {
 var scripts = _aspxGetStartupScripts();
 var code;
 for(var i = 0; i < scripts.length; i++){
  if(!scripts[i].executed) {
   code = _aspxGetScriptCode(scripts[i]);
   eval(code);
   scripts[i].executed = true;
  }
 }
}
function _aspxRunEndCallbackScript() {
 while(__aspxCallbackOwnerNames.length > 0) {
  var callbackOwnerName = __aspxCallbackOwnerNames.pop();
  var callbackOwner = aspxGetControlCollection().Get(callbackOwnerName);
  if(callbackOwner)
   callbackOwner.DoEndCallback();
 }
}
function _aspxOnScriptReadyStateChangedCallback(scriptElement, isCallback) {
 if(scriptElement.readyState == "loaded") {
  _aspxCacheIncludeScript(scriptElement);
  for(var i = 0; i < __aspxCreatedIncludeScripts.length; i++) {
   var script = __aspxCreatedIncludeScripts[i];
   if(_aspxIsKnownIncludeScript(script)) {
    if(!script.executed) {
     script.executed = true;
     _aspxAppendScript(script);
     __aspxAppendedScriptsCount++;
    }
   } else
    break;
  }
  if(__aspxCreatedIncludeScripts.length == __aspxAppendedScriptsCount)
   _aspxFinalizeScriptProcessing(isCallback);
 }
}
function _aspxOnScriptLoadCallback(scriptElement, isCallback) {
 __aspxAppendedScriptsCount++;
 if(scriptElement.nextCreatedScript) {
  _aspxAppendScript(scriptElement.nextCreatedScript);
  _aspxCacheIncludeScript(scriptElement.nextCreatedScript);
 }
 if(__aspxCreatedIncludeScripts.length == __aspxAppendedScriptsCount)
  _aspxFinalizeScriptProcessing(isCallback);
}
function _aspxAddScriptsRestartHandler(objectName, handler) {
 __aspxScriptsRestartHandlers[objectName] = handler;
}
function _aspxMoveLinkElements() {
 var head = _aspxGetElementsByTagName(document, "head")[0];
 var bodyLinks = _aspxGetElementsByTagName(document.body, "link");
 if(head && bodyLinks.length > 0){
  var headLinks = _aspxGetElementsByTagName(head, "link");
  var dxLinkAnchor = head.firstChild;
  for(var i = 0; i < headLinks.length; i++){
   if(headLinks[i].href.indexOf(ASPxResourceManager.HandlerStr) > -1)
    dxLinkAnchor = headLinks[i].nextSibling;
  }
  while(bodyLinks.length > 0) 
   head.insertBefore(bodyLinks[0], dxLinkAnchor);
 }
}
ASPxIFrame = _aspxCreateClass(null, {
 constructor: function(params) {
  this.params = params || {};
  this.params.src = this.params.src || "";
  this.CreateElements();
 },
 CreateElements: function() {
  var elements = ASPxIFrame.Create(this.params);
  this.containerElement = elements.container;
  this.iframeElement = elements.iframe;
  this.AttachOnLoadHandler(this, this.iframeElement);
  this.SetLoading(true);
  if(this.params.onCreate)
   this.params.onCreate(this.containerElement, this.iframeElement);
 },
 AttachOnLoadHandler: function(instance, element) {
  _aspxAttachEventToElement(element, "load", function() {
   instance.OnLoad(element);
  });
 },
 OnLoad: function(element) {
  this.SetLoading(false, element);
  if(!element.preventCustomOnLoad && this.params.onLoad)
   this.params.onLoad();
 },
 IsLoading: function(element) {
  element = element || this.iframeElement;
  if(element)
   return element.loading;
  return false;
 },
 SetLoading: function(value, element) {
  element = element || this.iframeElement;
  if(element)
   element.loading = value;
 },
 GetContentUrl: function() {
  return this.params.src;
 },
 SetContentUrl: function(url, preventBrowserCaching) {
  if(url) {
   this.params.src = url;
   if(preventBrowserCaching)
    url = ASPxIFrame.AddRandomParamToUrl(url);
   this.SetLoading(true);
   this.iframeElement.src = url;
  }
 },
 RefreshContentUrl: function() {
  if(this.IsLoading())
   return;
  this.SetLoading(true);
  var oldContainerElement = this.containerElement;
  var oldIframeElement = this.iframeElement;
  var postfix = "_del" + Math.floor(Math.random()*100000).toString();
  if(this.params.id)
   oldIframeElement.id = this.params.id + postfix;
  if(this.params.name)
   oldIframeElement.name = this.params.name + postfix;
  _aspxSetStyles(oldContainerElement, { height: 0 });
  this.CreateElements();
  oldIframeElement.preventCustomOnLoad = true;
  oldIframeElement.src = ASPx.BlankUrl;
  window.setTimeout(function() {
   oldContainerElement.parentNode.removeChild(oldContainerElement);
  }, 10000); 
 }
});
ASPxIFrame.Create = function(params) {
 var iframeHtmlStringParts = [ "<iframe frameborder='0'" ];
 if(params) {
  if(params.id)
   iframeHtmlStringParts.push(" id='", params.id, "'");
  if(params.name)
   iframeHtmlStringParts.push(" name='", params.name, "'");
  if(params.title)
   iframeHtmlStringParts.push(" title='", params.title, "'");
  if(params.scrolling)
   iframeHtmlStringParts.push(" scrolling='", params.scrolling, "'");
  if(params.src)
   iframeHtmlStringParts.push(" src='", params.src, "'");
 }
 iframeHtmlStringParts.push("></iframe>");
 var containerElement = _aspxCreateHtmlElementFromString("<div style='border-width: 0px; padding: 0px; margin: 0px'></div>");
 var iframeElement = _aspxCreateHtmlElementFromString(iframeHtmlStringParts.join(""));
 containerElement.appendChild(iframeElement);
 return {
  container: containerElement,
  iframe: iframeElement
 };
};
ASPxIFrame.AddRandomParamToUrl = function(url) {
 var prefix = url.indexOf("?") > -1
  ? "&"
  : "?";
 var param = prefix + Math.floor(Math.random()*100000).toString();
 var anchorIndex = url.indexOf("#");
 return anchorIndex == -1
  ? url + param
  : url.substr(0, anchorIndex) + param + url.substr(anchorIndex);
};
ASPxIFrame.GetWindow = function(name) {
 if(__aspxIE)
  return window.frames[name].window;
 else{
  var frameElement = document.getElementById(name);
  return (frameElement != null) ? frameElement.contentWindow : null;
 }
};
ASPxIFrame.GetDocument = function(name) {
 var frameElement;
 if(__aspxIE) {
  frameElement = window.frames[name];
  return (frameElement != null) ? frameElement.document : null;
 }
 else {
  frameElement = document.getElementById(name);
  return (frameElement != null) ? frameElement.contentDocument : null;
 }
};
ASPxIFrame.GetDocumentBody = function(name) {
 var doc = ASPxIFrame.GetDocument(name);
 return (doc != null) ? doc.body : null;
};
ASPxIFrame.GetElement = function(name) {
 if(__aspxIE)
  return window.frames[name].window.frameElement;
 else
  return document.getElementById(name);
};
ASPxKbdHelper = _aspxCreateClass(null, {
 constructor: function(control) {
  this.control = control;
 },
 Init: function() {
  ASPxKbdHelper.GlobalInit();
  var element = this.GetFocusableElement();
  element.tabIndex = Math.max(element.tabIndex, 0);
  var instance = this;
  _aspxAttachEventToElement(element, "click", function(e) {
   instance.HandleClick(e);
  });
  _aspxAttachEventToElement(element, "focus", function(e) {    
   if(!instance.CanFocus(e))
    return true;
   ASPxKbdHelper.active = instance;
  });
  _aspxAttachEventToElement(element, "blur", function() {
   delete ASPxKbdHelper.active;
  });    
 },
 GetFocusableElement: function() { return this.control.GetMainElement(); },
 CanFocus: function(e) {
  var tag = _aspxGetEventSource(e).tagName;
  if(tag == "A" || tag == "TEXTAREA" || tag == "INPUT" || tag == "SELECT" || tag == "IFRAME" || tag == "OBJECT")
   return false; 
  return true;
 },
 HandleClick: function(e) {
  if(!this.CanFocus(e))
   return;
  this.Focus();
 },
 Focus: function() {
  try {
   this.GetFocusableElement().focus();   
  } catch(e) {
  }
 },
 HandleKeyDown: function(e) { }, 
 HandleKeyPress: function(e) { }, 
 HandleKeyUp: function(e) { }
});
ASPxKbdHelper.GlobalInit = function() {
 if(ASPxKbdHelper.ready)
  return;
 _aspxAttachEventToDocument("keydown", ASPxKbdHelper.OnKeyDown);
 _aspxAttachEventToDocument("keypress", ASPxKbdHelper.OnKeyPress);
 _aspxAttachEventToDocument("keyup", ASPxKbdHelper.OnKeyUp);
 ASPxKbdHelper.ready = true; 
};
ASPxKbdHelper.swallowKey = false;
ASPxKbdHelper.accessKeys = { };
ASPxKbdHelper.ProcessKey = function(e, actionName) {
 if(!ASPxKbdHelper.active) 
  return;
 if(ASPxKbdHelper.active.GetFocusableElement() !== _aspxGetFocusedElement())
  return;
 var ctl = ASPxKbdHelper.active.control;
 if(ctl !== aspxGetControlCollection().Get(ctl.name)) {
  delete ASPxKbdHelper.active;
  return;
 }
 if(!ASPxKbdHelper.swallowKey) 
  ASPxKbdHelper.swallowKey = ASPxKbdHelper.active[actionName](e);
 if(ASPxKbdHelper.swallowKey)
  _aspxPreventEvent(e);
};
ASPxKbdHelper.OnKeyDown = function(e) {
 ASPxKbdHelper.swallowKey = false; 
 if(e.ctrlKey && e.shiftKey && ASPxKbdHelper.TryAccessKey(_aspxGetKeyCode(e)))
  _aspxPreventEvent(e);  
 else 
  ASPxKbdHelper.ProcessKey(e, "HandleKeyDown"); 
};
ASPxKbdHelper.OnKeyPress = function(e) { ASPxKbdHelper.ProcessKey(e, "HandleKeyPress"); };
ASPxKbdHelper.OnKeyUp = function(e) { ASPxKbdHelper.ProcessKey(e, "HandleKeyUp"); };
ASPxKbdHelper.RegisterAccessKey = function(obj) {
 var key = obj.accessKey;
 if(!key) return;
 ASPxKbdHelper.accessKeys[key.toLowerCase()] = obj.name;
};
ASPxKbdHelper.TryAccessKey = function(code) {
 var name = ASPxKbdHelper.accessKeys[String.fromCharCode(code).toLowerCase()];
 if(!name) return false;
 var obj = aspxGetControlCollection().Get(name);
 if(!obj) return false;
 var el = obj.GetMainElement();
 if(!el) return false;
 el.focus();
 return true;
};
var __aspxFocusedElement = null;
function aspxOnElementFocused(evt) {
 evt = _aspxGetEvent(evt);
 if(evt && evt.target)
  __aspxFocusedElement = evt.target;
}
function _aspxInitializeFocus() {
 if(!_aspxGetActiveElement())
  _aspxAttachEventToDocument("focus", aspxOnElementFocused);
}
function _aspxGetFocusedElement() {
 var activeElement = _aspxGetActiveElement();
 return activeElement ? activeElement : __aspxFocusedElement;
}
function _aspxChangeElementContainer(element, container, savePreviousContainer) {
 if(element.parentNode != container) {
  var parentNode = element.parentNode;
  parentNode.removeChild(element);
  container.appendChild(element);
  if(savePreviousContainer)
   element.previousContainer = parentNode;
 }
}
function _aspxRestoreElementContainer(element) {
 if(element.previousContainer) {
  _aspxChangeElementContainer(element, element.previousContainer, false);
  element.previousContainer = null;
 }
}
var ASPxCacheHelper = {};
ASPxCacheHelper.GetCachedValue = function(obj, cacheName, func, cacheObj) {
 if(!cacheObj)
  cacheObj = obj;
 if(!cacheObj.cache)
  cacheObj.cache = {};
 if(!_aspxIsExists(cacheObj.cache[cacheName]))
  cacheObj.cache[cacheName] = func.apply(obj, []);
 return cacheObj.cache[cacheName];
};
ASPxCacheHelper.DropCachedValue = function(cacheObj, cacheName) {
 cacheObj.cache[cacheName] = null;
};  
ASPxClientTemporaryCache = _aspxCreateClass(null, {
 constructor: function() { 
  this.cache = { };
  this.invalidateTimerID = -1;
 },
 Get: function(key, getObjectFunc, context, args) {
  if(this.invalidateTimerID < 0) {
   this.invalidateTimerID = window.setTimeout(function() {
    this.Invalidate();
   }.aspxBind(this), 0);
  }
  if(!_aspxIsExists(this.cache[key])) {
   if(!_aspxIsExists(args))
    args = [ ];
   this.cache[key] = getObjectFunc.apply(context, args);
  }
  return this.cache[key];
 },
 Invalidate: function() {
  this.cache = { };
  this.invalidateTimerID = _aspxClearTimer(this.invalidateTimerID);
 }
});
ASPxClientCheckBoxCheckState = {
 Checked : "Checked",
 Unchecked : "Unchecked",
 Indeterminate : "Indeterminate"
};
ASPxClientCheckBoxInputKey = { 
 Checked : "C",
 Unchecked : "U",
 Indeterminate : "I"
};
ASPxCheckableElementStateController = _aspxCreateClass(null, {
 constructor: function(imageProperties) {
  this.checkBoxStates = [];
  this.imageProperties = imageProperties;
 },
 GetValueByInputKey: function(inputKey) {
  return this.GetFirstValueBySecondValue("Value", "StateInputKey", inputKey);
 },
 GetInputKeyByValue: function(value) {
  return this.GetFirstValueBySecondValue("StateInputKey", "Value", value);
 },
 GetImagePropertiesNumByInputKey: function(value) {
  return this.GetFirstValueBySecondValue("ImagePropertiesNumber", "StateInputKey", value);
 },
 GetNextCheckBoxValue: function(currentValue, allowGrayed) {
  var currentInputKey = this.GetInputKeyByValue(currentValue);
  var nextInputKey = '';
  switch(currentInputKey) {
   case ASPxClientCheckBoxInputKey.Checked:
    nextInputKey = ASPxClientCheckBoxInputKey.Unchecked; break;
   case ASPxClientCheckBoxInputKey.Unchecked:
    nextInputKey = allowGrayed ? ASPxClientCheckBoxInputKey.Indeterminate : ASPxClientCheckBoxInputKey.Checked; break;
   case ASPxClientCheckBoxInputKey.Indeterminate:
    nextInputKey = ASPxClientCheckBoxInputKey.Checked; break;
  }
  return this.GetValueByInputKey(nextInputKey);
 },
 GetCheckStateByInputKey: function(inputKey) {
  switch(inputKey) {
   case ASPxClientCheckBoxInputKey.Checked: 
    return ASPxClientCheckBoxCheckState.Checked;
   case ASPxClientCheckBoxInputKey.Unchecked: 
    return ASPxClientCheckBoxCheckState.Unchecked;
   case ASPxClientCheckBoxInputKey.Indeterminate: 
    return ASPxClientCheckBoxCheckState.Indeterminate;
  }
 },
 GetValueByCheckState: function(checkState) {
  switch(checkState) {
   case ASPxClientCheckBoxCheckState.Checked: 
    return this.GetValueByInputKey(ASPxClientCheckBoxInputKey.Checked);
   case ASPxClientCheckBoxCheckState.Unchecked: 
    return this.GetValueByInputKey(ASPxClientCheckBoxInputKey.Unchecked);
   case ASPxClientCheckBoxCheckState.Indeterminate: 
    return this.GetValueByInputKey(ASPxClientCheckBoxInputKey.Indeterminate);
  }
 },
 GetFirstValueBySecondValue: function(firstValueName, secondValueName, secondValue) {
  return this.GetValueByFunc(firstValueName, 
   function(checkBoxState) { return checkBoxState[secondValueName] === secondValue; });
 },
 GetValueByFunc: function(valueName, func) {
  for(var i = 0; i < this.checkBoxStates.length; i++) {
   if(func(this.checkBoxStates[i]))
    return this.checkBoxStates[i][valueName];
  }  
 },
 AssignElementClassName: function(element, cssClassPropertyKey, disabledCssClassPropertyKey, assignedClassName) {
  var classNames = [ ];
  for(var i = 0; i < this.imageProperties[cssClassPropertyKey].length; i++) {
   classNames.push(this.imageProperties[disabledCssClassPropertyKey][i]);
   classNames.push(this.imageProperties[cssClassPropertyKey][i]);
  }
  var elementClassName = element.className;
  for(var i = 0; i < classNames.length; i++) {
   var className = classNames[i];
   var index = elementClassName.indexOf(className);
   if(index > -1)
    elementClassName = elementClassName.replace((index == 0 ? '' : ' ') + className, "");
  }
  elementClassName += " " + assignedClassName;
  element.className = elementClassName;
 },
 UpdateInternalCheckBoxDecoration: function(mainElement, inputKey, enabled) {
  var imagePropertiesNumber = this.GetImagePropertiesNumByInputKey(inputKey);
  for (var imagePropertyKey in this.imageProperties) {
   var propertyValue = this.imageProperties[imagePropertyKey][imagePropertiesNumber];
   propertyValue = propertyValue || !isNaN(propertyValue) ? propertyValue : "";
   switch(imagePropertyKey) {
    case "0" : mainElement.title = propertyValue; break;
    case "1" : mainElement.style.width = propertyValue + (propertyValue != "" ? "px" : ""); break;
    case "2" : mainElement.style.height = propertyValue + (propertyValue != "" ? "px" : ""); break;
   }
   if(enabled) {
    switch(imagePropertyKey) {
     case "3" : this.SetImageSrc(mainElement, propertyValue); break;
     case "4" : 
      this.AssignElementClassName(mainElement, "4", "8", propertyValue);
      break;
     case "5" : this.SetBackgroundPosition(mainElement, propertyValue, true); break;
     case "6" : this.SetBackgroundPosition(mainElement, propertyValue, false); break;
    }
   } else {
     switch(imagePropertyKey) {
     case "7" : this.SetImageSrc(mainElement, propertyValue); break;
     case "8" : 
      this.AssignElementClassName(mainElement, "4", "8", propertyValue);
      break;
     case "9" : this.SetBackgroundPosition(mainElement, propertyValue, true); break;
     case "10" : this.SetBackgroundPosition(mainElement, propertyValue, false); break;
    }
   }
  }
 },
 SetImageSrc: function(mainElement, src) {
  if(src === ""){
   mainElement.style.backgroundImage = "";
   mainElement.style.backgroundPosition = "";
  }
  else{
   mainElement.style.backgroundImage = "url(" + src + ")";
   this.SetBackgroundPosition(mainElement, 0, true);
   this.SetBackgroundPosition(mainElement, 0, false);
  }
 },
 SetBackgroundPosition: function(element, value, isX) {
  if(value === "") {
   element.style.backgroundPosition = value;
   return;
  }
  if(element.style.backgroundPosition === "")
   element.style.backgroundPosition = isX ? "-" + value.toString() + "px 0px" : "0px -" + value.toString() + "px";
  else {
   var position = element.style.backgroundPosition.split(' ');
   element.style.backgroundPosition = isX ? '-' + value.toString() + "px " + position[1] :  position[0] + " -" + value.toString() + "px";
  }
 },
 AddState: function(value, stateInputKey, imagePropertiesNumber) {
  this.checkBoxStates.push({
   "Value" : value, 
   "StateInputKey" : stateInputKey, 
   "ImagePropertiesNumber" : imagePropertiesNumber
  });
 }
});
ASPxCheckableElementStateController.Create = function(imageProperties, valueChecked, valueUnchecked, valueGrayed, allowGrayed) {
 var stateController = new ASPxCheckableElementStateController(imageProperties);
 stateController.AddState(valueChecked, ASPxClientCheckBoxInputKey.Checked, 0);
 stateController.AddState(valueUnchecked, ASPxClientCheckBoxInputKey.Unchecked, 1);
 if(typeof(valueGrayed) != "undefined")
  stateController.AddState(valueGrayed, ASPxClientCheckBoxInputKey.Indeterminate, allowGrayed ? 2 : 1);
 stateController.allowGrayed = allowGrayed;
 return stateController;
};
ASPxCheckableElementHelper = _aspxCreateClass(null, {
 InternalCheckBoxInitialize: function(internalCheckBox) {
  this.AttachToMainElement(internalCheckBox);
  this.AttachToInputElement(internalCheckBox);
 },
 AttachToMainElement: function(internalCheckBox) {
  var instance = this;
  if(internalCheckBox.mainElement) {
    _aspxAttachEventToElement(internalCheckBox.mainElement, "click",
    function (evt) { 
     instance.InvokeClick(internalCheckBox, evt);
     if(!internalCheckBox.disableCancelBubble)
      return _aspxPreventEventAndBubble(evt);
    }
   );
   _aspxAttachEventToElement(internalCheckBox.mainElement, "mousedown",
    function (evt) {
     internalCheckBox.Refocus();
    }
   );
   _aspxPreventElementDragAndSelect(internalCheckBox.mainElement, true);
  }
 },
 AttachToInputElement: function(internalCheckBox) {
  var instance = this;
  if(internalCheckBox.inputElement && internalCheckBox.mainElement) {
   _aspxAttachEventToElement(internalCheckBox.inputElement, "focus",
    function (evt) { 
     if(!internalCheckBox.enabled)
      internalCheckBox.inputElement.blur();
     else
      internalCheckBox.OnFocus();
    }
   );
   _aspxAttachEventToElement(internalCheckBox.inputElement, "blur", 
    function (evt) { 
     internalCheckBox.OnLostFocus();
    }
   );
   _aspxAttachEventToElement(internalCheckBox.inputElement, "keyup",
    function (evt) { 
     if(_aspxGetKeyCode(evt) == ASPxKey.Space)
      instance.InvokeClick(internalCheckBox, evt);
    }
   );
   _aspxAttachEventToElement(internalCheckBox.inputElement, "keydown",
    function (evt) { 
     if(_aspxGetKeyCode(evt) == ASPxKey.Space)
      return _aspxPreventEvent(evt);
    }
   );
  }
 },
 IsKBSInputWrapperExist: function() {
  return __aspxOpera || __aspxWebKitFamily;
 },
 GetICBMainElementByInput: function(icbInputElement) {
  return this.IsKBSInputWrapperExist() ? icbInputElement.parentNode.parentNode : icbInputElement.parentNode;
 },
 InvokeClick: function(internalCheckBox, evt) {
   if(internalCheckBox.enabled && !internalCheckBox.readOnly) {
   var inputElementValue = internalCheckBox.inputElement.value;
   internalCheckBox.inputElement.focus();
   if(!__aspxIE) 
    internalCheckBox.inputElement.value = inputElementValue;
   this.InvokeClickCore(internalCheckBox, evt)
   }
 },
 InvokeClickCore: function(internalCheckBox, evt) {
  internalCheckBox.OnClick(evt);
 }
});
ASPxCheckableElementHelper.Instance = new ASPxCheckableElementHelper();
ASPxClientCheckBoxInternal = _aspxCreateClass(null, {
 constructor: function(inputElement, stateController, allowGrayed, allowGrayedByClick, helper, container, storeValueInInput, key, disableCancelBubble) {
  this.inputElement = inputElement;
  this.mainElement = helper.GetICBMainElementByInput(this.inputElement);
  this.name = (key ? key : this.inputElement.id) + ASPxClientCheckBoxInternal.GetICBMainElementPostfix();
  this.mainElement.id = this.name;
  this.stateController = stateController;
  this.container = container;
  this.allowGrayed = allowGrayed;
  this.allowGrayedByClick = allowGrayedByClick;
  this.autoSwitchEnabled = true;
  this.storeValueInInput = !!storeValueInInput;
  this.storedInputKey = !this.storeValueInInput ? this.inputElement.value : null;
  this.disableCancelBubble = !!disableCancelBubble;
  this.focusDecoration = null;
  this.focused = false;
  this.focusLocked = false;
  this.enabled = true;
  this.readOnly = false;
  this.CheckedChanged = new ASPxClientEvent();
  this.Focus = new ASPxClientEvent();
  this.LostFocus = new ASPxClientEvent();
  helper.InternalCheckBoxInitialize(this);
 },
 ChangeInputElementTabIndex: function() {  
  var changeMethod = this.enabled ? _aspxRestoreTabIndexAttribute : _aspxSaveTabIndexAttributeAndReset;
  changeMethod(this.inputElement);
 },
 CreateFocusDecoration: function(focusedStyle) {
   this.focusDecoration = new ASPxClientEditStyleDecoration(this);
   this.focusDecoration.AddStyle('F', focusedStyle[0], focusedStyle[1]);
   this.focusDecoration.AddPostfix("");
 },
 UpdateFocusDecoration: function() {
  this.focusDecoration.Update();
 },  
 StoreInputKey: function(inputKey) {
  if(this.storeValueInInput)
   this.inputElement.value = inputKey;
  else
   this.storedInputKey = inputKey;
 },
 GetStoredInputKey: function() {
  if(this.storeValueInInput)
   return this.inputElement.value;
  else
   return this.storedInputKey;
 },
 OnClick: function(e) {
  if(this.autoSwitchEnabled) {
   var currentValue = this.GetValue();
   var value = this.stateController.GetNextCheckBoxValue(currentValue, this.allowGrayedByClick && this.allowGrayed);
   this.SetValue(value);
  }
  this.CheckedChanged.FireEvent(this, e);
 },
 OnFocus: function() {
  if(!this.IsFocusLocked()) {
   this.focused = true;
   this.UpdateFocusDecoration();
   this.Focus.FireEvent(this, null);
  } else
   this.UnlockFocus();
 },
 OnLostFocus: function() {
   if(!this.IsFocusLocked()) {
   this.focused = false;
   this.UpdateFocusDecoration();
   this.LostFocus.FireEvent(this, null);
  }
 },
 Refocus: function() {
  if(this.focused) {
   this.LockFocus();
   this.inputElement.blur();
   _aspxSetFocus(this.inputElement);
  }
 },
 LockFocus: function() {
  this.focusLocked = true;
 },
 UnlockFocus: function() {
  this.focusLocked = false;
 },
 IsFocusLocked: function() {
  return this.focusLocked;
 },
 SetValue: function(value) {
  var currentValue = this.GetValue();
  if(currentValue !== value) {
   var newInputKey = this.stateController.GetInputKeyByValue(value);
   if(newInputKey) {
    this.StoreInputKey(newInputKey);   
    this.stateController.UpdateInternalCheckBoxDecoration(this.mainElement, newInputKey, this.enabled);
   }
  }
 },
 GetValue: function() {
  return this.stateController.GetValueByInputKey(this.GetCurrentInputKey());
 },
 GetCurrentCheckState: function() {
  return this.stateController.GetCheckStateByInputKey(this.GetCurrentInputKey());
 },
 GetCurrentInputKey: function() {
  return this.GetStoredInputKey();
 },
 GetChecked: function() {
  return this.GetCurrentInputKey() === ASPxClientCheckBoxInputKey.Checked;
 },
 SetChecked: function(checked) {
  var newValue = this.stateController.GetValueByCheckState(checked ? ASPxClientCheckBoxCheckState.Checked : ASPxClientCheckBoxCheckState.Unchecked);
  this.SetValue(newValue);
 },
 SetEnabled: function(enabled) {
  if(this.enabled != enabled) {
   this.enabled = enabled;
   this.stateController.UpdateInternalCheckBoxDecoration(this.mainElement, this.GetCurrentInputKey(), this.enabled);
   this.ChangeInputElementTabIndex();
  }
 }
});
ASPxClientCheckBoxInternal.GetICBMainElementPostfix = function() {
 return "_D";
};
ASPxCheckBoxInternalCollection = _aspxCreateClass(null, {
 constructor: function(imageProperties, allowGrayed, storeValueInInput, helper, disableCancelBubble) {
  this.checkBoxes = {};
  this.stateController = allowGrayed 
   ? ASPxCheckableElementStateController.Create(imageProperties, ASPxClientCheckBoxInputKey.Checked, ASPxClientCheckBoxInputKey.Unchecked, ASPxClientCheckBoxInputKey.Indeterminate, true)
   : ASPxCheckableElementStateController.Create(imageProperties, ASPxClientCheckBoxInputKey.Checked, ASPxClientCheckBoxInputKey.Unchecked);
  this.helper = helper || ASPxCheckableElementHelper.Instance;
  this.storeValueInInput = !!storeValueInInput;
  this.disableCancelBubble = !!disableCancelBubble;
 },
 Add: function(key, inputElement, container) {
  this.Remove(key);
  this.checkBoxes[key] = this.CreateInternalCheckBox(key, inputElement, container);
  return this.checkBoxes[key];
 },
 Clear: function(){
  this.checkBoxes = {};
 },
 Remove: function(key) {
  delete this.checkBoxes[key];
 },
 Get: function(id) {
  return this.checkBoxes[id];
 },
 SetImageProperties: function(imageProperties) {
  this.stateController.imageProperties = imageProperties;
 },
 CreateInternalCheckBox: function(key, inputElement, container) {
  return new ASPxClientCheckBoxInternal(inputElement, this.stateController, this.stateController.allowGrayed, false, this.helper, container, this.storeValueInInput, key, this.disableCancelBubble);
 }
});
ASPxClientEditStyleDecoration = _aspxCreateClass(null, {
 constructor: function(editor) {
  this.editor = editor;
  this.postfixList = [ ];
  this.styles = { };
  this.innerStyles = { };
 },
 GetStyleSheet: function() {
  if(!ASPxClientEditStyleDecoration.__sheet)
   ASPxClientEditStyleDecoration.__sheet = _aspxCreateStyleSheet();
  return ASPxClientEditStyleDecoration.__sheet;
 },
 AddPostfix: function(value, applyClass, applyBorders, applyBackground) {
  this.postfixList.push(value);
 },
 AddStyle: function(key, className, cssText) {
  this.styles[key] = this.CreateRule(className, cssText);
  this.innerStyles[key] = this.CreateRule("", this.FilterInnerCss(cssText));
 },
 CreateRule: function(className, cssText) {
  return _aspxTrim(className + " " + _aspxCreateImportantStyleRule(this.GetStyleSheet(), cssText));
 },
 Update: function() {
  for(var i = 0; i < this.postfixList.length; i++) {
   var postfix = this.postfixList[i];
   var inner = postfix.length > 0;
   var element = _aspxGetElementById(this.editor.name + postfix);
   if(!element) continue;
   if(this.HasDecoration("I")) {
    var isValid = this.editor.GetIsValid();
    this.ApplyDecoration("I", element, inner, !isValid);
   }
   if(this.HasDecoration("F"))
    this.ApplyDecoration("F", element, inner, this.editor.focused);
   if(this.HasDecoration("N")) {
    var apply = !this.editor.focused;
    if (apply) {
     if (this.editor.CanApplyNullTextDecoration) {
      apply = this.editor.CanApplyNullTextDecoration();
     } else {
      var value = this.editor.GetValue();
      apply = apply && (value == null || value === "");
     }
    }
    if(apply)
     _aspxChangeAttribute(element, "spellcheck", "false");
    else
     _aspxRestoreAttribute(element, "spellcheck");
    this.ApplyDecoration("N", element, inner, apply);
   }
  }
 },
 HasDecoration: function(key) {
  return !!this.styles[key];
 },
 ApplyDecoration: function(key, element, inner, active) {
  var value = inner ? this.innerStyles[key] : this.styles[key];
  element.className = element.className.replace(value, "");
  if(active) {
   element.className = _aspxTrim(element.className + " " + value);
   if (__aspxIE && __aspxBrowserVersion > 10 && element.border != null) { 
    var border = parseInt(element.border) || 0;
    element.border = 1;
    element.border = border;
   }
  }
 },
 FilterInnerCss: function(css) {
  return css.replace(/(border|background-image)[^:]*:[^;]+/gi, "");
 }
});
var ASPxClientTouchUI = {
 isGesture: false,
 isMouseEventFromScrolling: false,
 isNativeScrollingAllowed: true,
 clickSensetivity: 10,
 documentTouchHandlers: {},
 documentEventAttachingAllowed: true,
 msTouchDraggableClassName: "dxMSTouchDraggable",
 touchMouseDownEventName: __aspxWebKitTouchUI ? "touchstart" : "mousedown",
 touchMouseUpEventName:   __aspxWebKitTouchUI ? "touchend"   : "mouseup",
 touchMouseMoveEventName: __aspxWebKitTouchUI ? "touchmove"  : "mousemove",
 isTouchEvent: function(evt) { 
  return __aspxWebKitTouchUI && _aspxIsExists(evt.changedTouches); 
 },
 isTouchEventName: function(eventName) {
  return __aspxWebKitTouchUI && (eventName.indexOf("touch") > -1 || eventName.indexOf("gesture") > -1);
 },
 getEventX: function(evt) { 
  return evt.changedTouches[0].pageX; 
 },
 getEventY: function (evt) { 
  return evt.changedTouches[0].pageY; 
 },
 getWebkitMajorVersion: function(){
  if(!this.webkitMajorVersion){
   var regExp = new RegExp("applewebkit/(\\d+)", "i");
   var matches = regExp.exec(__aspxUserAgent);
   if(matches && matches.index >= 1)
    this.webkitMajorVersion = matches[1];
  }
  return this.webkitMajorVersion;
 },
 getIsLandscapeOrientation: function(){
  if(__aspxMacOSMobilePlatform || __aspxAndroidMobilePlatform)
   return Math.abs(window.orientation) == 90;
  return _aspxGetDocumentClientWidth() > _aspxGetDocumentClientHeight();
 },
 nativeWebKitScrollingSupported: function(){
  return __aspxMacOSMobilePlatform && (__aspxBrowserVersion >= 5.1 || this.getWebkitMajorVersion() > 533);
 },
 makeScrollableIfRequired: function(element, options) {
  if(__aspxWebKitTouchUI && element) {
   var overflow = _aspxGetCurrentStyle(element).overflow;
   if (element.tagName == "DIV" &&  overflow != "hidden" && overflow != "visible" ){
    return this.MakeScrollable(element);
   }
  }
 },
 preventScrollOnEvent: function(evt){
 },
 handleFastTapIfRequired: function(evt, action, preventCommonClickEvents) {
  if(__aspxWebKitTouchUI && evt.type == 'touchstart' && action) {
   this.FastTapHelper.HandleFastTap(evt, action, preventCommonClickEvents);
   return true;
  }
  return false;
 },
 ensureDocumentSizesCorrect: function (){
  return (document.documentElement.clientWidth - document.documentElement.clientHeight) / (screen.width - screen.height) > 0;
 },
 ensureOrientationChanged: function(onOrientationChangedFunction){
  if(ASPxClientUtils.iOSPlatform || this.ensureDocumentSizesCorrect())
   onOrientationChangedFunction();
  else {
   window.setTimeout(function(){
    this.ensureOrientationChanged(onOrientationChangedFunction);
   }.aspxBind(this), 100);
  }
 },
 onEventAttachingToDocument: function(eventName, func){
  if(__aspxMacOSMobilePlatform && this.isTouchEventName(eventName)) {
   if(!this.documentTouchHandlers[eventName])
    this.documentTouchHandlers[eventName] = [];
   this.documentTouchHandlers[eventName].push(func);
   return this.documentEventAttachingAllowed;
  }
  return true;
 },
 onEventDettachedFromDocument: function(eventName, func){
  if(__aspxMacOSMobilePlatform && this.isTouchEventName(eventName)) {
   var handlers = this.documentTouchHandlers[eventName];
   if(handlers)
    _aspxArrayRemove(handlers, func);
  }
 },
 processDocumentTouchEventHandlers: function(proc) {
  var touchEventNames = ["touchstart", "touchend", "touchmove", "gesturestart", "gestureend"];
  for (var i = 0; i < touchEventNames.length; i++) {
   var eventName = touchEventNames[i];
   var handlers = this.documentTouchHandlers[eventName];
   if(handlers) {
    for (var j = 0; j < handlers.length; j++) {
     proc(eventName,handlers[j]);
    }
   }
  }
 },
 removeDocumentTouchEventHandlers: function() {
  if(__aspxMacOSMobilePlatform) {
   this.documentEventAttachingAllowed = false;
   this.processDocumentTouchEventHandlers(_aspxDetachEventFromDocumentCore);
  }
 },
 restoreDocumentTouchEventHandlers: function () {
  if(__aspxMacOSMobilePlatform) {
   this.documentEventAttachingAllowed = true;
   this.processDocumentTouchEventHandlers(_aspxAttachEventToDocumentCore);
  }
 },
 IsNativeScrolling: function() {
  return ASPxClientTouchUI.nativeWebKitScrollingSupported() && ASPxClientTouchUI.isNativeScrollingAllowed;
 },
 msTouchCreateGerturesWrapper: function(element, onTap){
  if(!window.navigator.msPointerEnabled || typeof(MSGesture) == "undefined") 
   return;
  var gesture = new MSGesture();
  gesture.target = element;
  _aspxAttachEventToElement(element, "MSPointerDown", function(evt){
   gesture.addPointer(evt.pointerId);
  });
  _aspxAttachEventToElement(element, "MSPointerUp", function(evt){
   gesture.stop();
  });
  if(onTap)
   _aspxAttachEventToElement(element, "MSGestureTap", onTap);
  return gesture;
 }
};
var ASPxClientAdaptiveCore = {
 adaptiveMode: false,
 isAdaptiveView: function(){ return false; }
};
(function() {
 ASPxDomObserver = _aspxCreateClass(null, {
  constructor: function() {
   this.items = { };
  },
  subscribe: function(elementID, callbackFunc) {
   var item = this.items[elementID];
   if(item)
    this.unsubscribe(elementID);
   item = {
    elementID: elementID,
    callbackFunc: callbackFunc,
    pauseCount: 0
   };
   this.prepareItem(item);
   this.items[elementID] = item;
  },
  prepareItem: function(item) {
  },
  unsubscribe: function(elementID) {
   this.items[elementID] = null;
  },
  getItemElement: function(item) {
   var element = this.getElementById(item.elementID);
   if(element)
    return element;
   this.unsubscribe(item.elementID);
   return null;
  },
  getElementById: function(elementID) {
   var element = document.getElementById(elementID);
   return element && _aspxIsValidElement(element) ? element : null;
  },
  pause: function(element, includeSubtree) {
   this.changeItemsState(element, includeSubtree, true);
  },
  resume: function(element, includeSubtree) {
   this.changeItemsState(element, includeSubtree, false);
  },
  forEachItem: function(processFunc, context) {
   context = context || this;
   for(var itemName in this.items) {
    if(!this.items.hasOwnProperty(itemName))
     continue;
    var item = this.items[itemName];
    if(item) {
     var needBreak = processFunc.call(context, item);
     if(needBreak)
      return;
    }
   }
  },
  changeItemsState: function(element, includeSubtree, pause) {
   this.forEachItem(function(item) {
    if(!element)
     this.changeItemState(item, pause);
    else {
     var itemElement = this.getItemElement(item);
     if(itemElement && (element == itemElement || (includeSubtree && _aspxGetIsParent(element, itemElement)))) {
      this.changeItemState(item, pause);
      if(!includeSubtree)
       return true;
     }
    }
   }.aspxBind(this));
  },
  changeItemState: function(item, pause) {
   if(pause)
    this.pauseItem(item)
   else
    this.resumeItem(item);
  },
  pauseItem: function(item) {
   item.paused = true;
   item.pauseCount++;
  },
  resumeItem: function(item) {
   if(item.pauseCount > 0) {
    if(item.pauseCount == 1)
     item.paused = false;
    item.pauseCount--;
   }
  }
 });
 ASPxDomObserver.IsMutationObserverAvailable = function() {
  return !!window.MutationObserver;
 };
 ASPxTimerObserver = _aspxCreateClass(ASPxDomObserver, {
  constructor: function() {
   this.constructor.prototype.constructor.call(this);
   this.timerID = -1;
   this.observationTimeout = 300;
   this.startObserving();
  },
  startObserving: function() {
   if(this.timerID !== -1)
    window.clearTimeout(this.timerID);
   this.timerID = window.setTimeout(this.onTimeout, this.observationTimeout);
  },
  onTimeout: function() {
   var observer = _aspxGetDomObserver();
   observer.doObserve();
   observer.startObserving();
  },
  doObserve: function() {
   if(!__aspxDocumentLoaded) return;
   this.forEachItem(function(item) {
    if(!item.paused)
     this.doObserveForItem(item);
   }.aspxBind(this));
  },
  doObserveForItem: function(item) {
   var element = this.getItemElement(item);
   if(element)
    item.callbackFunc.call(this, element);
  }
 });
 ASPxMutationObserver = _aspxCreateClass(ASPxDomObserver, {
  constructor: function() {
   this.constructor.prototype.constructor.call(this);
   this.callbackTimeout = 10;
  },
  prepareItem: function(item) {
   item.callbackTimerID = -1;
   var target = this.getElementById(item.elementID);
   if(!target)
    return;
   var observerCallbackFunc = function() {
    if(item.callbackTimerID === -1) {
     var timeoutHander = function() {
      item.callbackTimerID = -1;
      item.callbackFunc.call(this, target);
     }.aspxBind(this);
     item.callbackTimerID = window.setTimeout(timeoutHander, this.callbackTimeout);
    }
   }.aspxBind(this);
   var observer = new MutationObserver(observerCallbackFunc);
   var config = { attributes: true, childList: true, characterData: true, subtree: true };
   observer.observe(target, config);
   item.observer = observer;
   item.config = config;
  },
  unsubscribe: function(elementID) {
   var item = this.items[elementID];
   if(item) {
    item.observer.disconnect();
    item.observer = null;
   }
   this.constructor.prototype.unsubscribe.call(this, elementID);
  },
  pauseItem: function(item) {
   this.constructor.prototype.pauseItem.call(this, item);
   item.observer.disconnect();
  },
  resumeItem: function(item) {
   this.constructor.prototype.resumeItem.call(this, item);
   if(!item.paused) {
    var target = this.getItemElement(item);
    if(target)
     item.observer.observe(target, item.config);
   }
  }
 });
 var __aspxDomObserver = null;
 function _aspxGetDomObserver() {
  if(__aspxDomObserver == null)
   __aspxDomObserver = ASPxDomObserver.IsMutationObserverAvailable() ? new ASPxMutationObserver() : new ASPxTimerObserver();
  return __aspxDomObserver;
 };
 window._aspxGetDomObserver = _aspxGetDomObserver;
})();
__aspxClassesScriptParsed = true;

var __aspxStateItemsExist = false;
var __aspxFocusedItemKind = "FocusedStateItem";
var __aspxHoverItemKind = "HoverStateItem";
var __aspxPressedItemKind = "PressedStateItem";
var __aspxSelectedItemKind = "SelectedStateItem";
var __aspxDisabledItemKind = "DisabledStateItem";
var __aspxCachedStatePrefix = "cached";
ASPxStateItem = _aspxCreateClass(null, {
 constructor: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind, disableApplyingStyleToLink){
  this.name = name;
  this.classNames = classNames;
  this.customClassNames = [];
  this.resultClassNames = [];
  this.cssTexts = cssTexts;
  this.postfixes = postfixes;
  this.imageObjs = imageObjs;
  this.imagePostfixes = imagePostfixes;
  this.kind = kind;
  this.classNamePostfix = kind.substr(0, 1).toLowerCase();
  this.enabled = true;
  this.needRefreshBetweenElements = false;
  this.elements = null;
  this.images = null;
  this.linkColor = null;
  this.lintTextDecoration = null;
  this.disableApplyingStyleToLink = !!disableApplyingStyleToLink;
 },
 GetCssText: function(index){
  if(_aspxIsExists(this.cssTexts[index]))
   return this.cssTexts[index];
  return this.cssTexts[0];
 },
 CreateStyleRule: function(index){
  if(this.GetCssText(index) == "") return "";
  var styleSheet = _aspxGetCurrentStyleSheet();
  if(styleSheet)
   return _aspxCreateImportantStyleRule(styleSheet, this.GetCssText(index), this.classNamePostfix);  
  return ""; 
 },
 GetClassName: function(index){
  if(_aspxIsExists(this.classNames[index]))
   return this.classNames[index];
  return this.classNames[0];
 },
 GetResultClassName: function(index){
  if(!_aspxIsExists(this.resultClassNames[index])) {
   if(!_aspxIsExists(this.customClassNames[index]))
    this.customClassNames[index] = this.CreateStyleRule(index);
   if(this.GetClassName(index) != "" && this.customClassNames[index] != "")
    this.resultClassNames[index] = this.GetClassName(index) + " " + this.customClassNames[index];
   else if(this.GetClassName(index) != "")
    this.resultClassNames[index] = this.GetClassName(index);
   else if(this.customClassNames[index] != "")
    this.resultClassNames[index] = this.customClassNames[index];
   else
    this.resultClassNames[index] = "";
  }
  return this.resultClassNames[index];
 },
 GetElements: function(element){
  if(!this.elements || !_aspxIsValidElements(this.elements)){
   if(this.postfixes && this.postfixes.length > 0){
    this.elements = [ ];
    var parentNode = element.parentNode;
    if(parentNode){
     for(var i = 0; i < this.postfixes.length; i++){
      var id = this.name + this.postfixes[i];
      this.elements[i] = _aspxGetChildById(parentNode, id);
      if(!this.elements[i])
       this.elements[i] = _aspxGetElementById(id);
     }
    }
   }
   else
    this.elements = [element];
  }
  return this.elements;
 },
 GetImages: function(element){
  if(!this.images || !_aspxIsValidElements(this.images)){
   this.images = [ ];
   if(this.imagePostfixes && this.imagePostfixes.length > 0){
    var elements = this.GetElements(element);
    for(var i = 0; i < this.imagePostfixes.length; i++){
     var id = this.name + this.imagePostfixes[i];
     for(var j = 0; j < elements.length; j++){
      if(!elements[j]) continue;
      if(elements[j].id == id)
       this.images[i] = elements[j];
      else
       this.images[i] = _aspxGetChildById(elements[j], id);
      if(this.images[i])
       break;
     }
    }
   }
  }
  return this.images;
 },
 Apply: function(element){
  if(!this.enabled) return;
  try{
   this.ApplyStyle(element);
   if(this.imageObjs && this.imageObjs.length > 0)
    this.ApplyImage(element);
   if(__aspxIE && __aspxBrowserMajorVersion >= 11)
    this.ForceRedrawAppearance(element);
  }
  catch(e){
  }
 },
 ApplyStyle: function(element){
  var elements = this.GetElements(element);
  for(var i = 0; i < elements.length; i++){
   if(!elements[i]) continue;
   var className = elements[i].className.replace(this.GetResultClassName(i), "");
   elements[i].className = _aspxTrim(className) + " " + this.GetResultClassName(i);
   if(!__aspxOpera || __aspxBrowserVersion >= 9)
    this.ApplyStyleToLinks(elements, i);
  }
 },
 ApplyStyleToLinks: function(elements, index){
  if(this.disableApplyingStyleToLink)
   return;
  var linkCount = 0;
  var savedLinkCount = -1;
  if(_aspxIsExists(elements[index]["savedLinkCount"]))
   savedLinkCount = parseInt(elements[index]["savedLinkCount"]);
  do{
   if(savedLinkCount > -1 && savedLinkCount <= linkCount)
    break;
   var link = elements[index]["link" + linkCount];
   if(!link){
    link = _aspxGetChildByTagName(elements[index], "A", linkCount);
    if(link)
     elements[index]["link" + linkCount] = link;
   }
   if(link)
    this.ApplyStyleToLinkElement(link, index);
   else
    elements[index]["savedLinkCount"] = linkCount;
   linkCount++;
  }
  while(link != null)
 },
 ApplyStyleToLinkElement: function(link, index){
  if(this.GetLinkColor(index) != "")
   _aspxChangeAttributeExtended(link.style, "color", link, "saved" + this.kind + "Color", this.GetLinkColor(index));
  if(this.GetLinkTextDecoration(index) != "")
   _aspxChangeAttributeExtended(link.style, "textDecoration", link, "saved" + this.kind + "TextDecoration", this.GetLinkTextDecoration(index));
 },
 ApplyImage: function(element){
  var images = this.GetImages(element);
  for(var i = 0; i < images.length; i++){
   if(!images[i] || !this.imageObjs[i]) continue;
   var useSpriteImage = typeof(this.imageObjs[i]) != "string";
   var newUrl = "", newCssClass = "", newBackground = "";
   if(useSpriteImage){
    newUrl = ASPx.EmptyImageUrl;           
    if(this.imageObjs[i].spriteCssClass) 
     newCssClass = this.imageObjs[i].spriteCssClass;
    if(this.imageObjs[i].spriteBackground)
     newBackground = this.imageObjs[i].spriteBackground;
   }
   else{
    newUrl = this.imageObjs[i];
    if(_aspxIsExistsAttribute(images[i].style, "background"))   
     newBackground = " ";
   }
   if(newUrl != "")
    _aspxChangeAttributeExtended(images[i], "src", images[i], "saved" + this.kind + "Src", newUrl);
   if(newCssClass != "")
    this.ApplyImageClassName(images[i], newCssClass);
   if(newBackground != ""){
    if(__aspxWebKitFamily) {
     var savedBackground = _aspxGetAttribute(images[i].style, "background");
     if(!useSpriteImage)
      savedBackground += " " + images[i].style["backgroundPosition"];
     _aspxSetAttribute(images[i], "saved" + this.kind + "Background", savedBackground);
     _aspxSetAttribute(images[i].style, "background", newBackground);
    }
    else
     _aspxChangeAttributeExtended(images[i].style, "background", images[i], "saved" + this.kind + "Background", newBackground);
   }     
  }
 },
 ApplyImageClassName: function(element, newClassName){
  var className = element.className.replace(newClassName, "");
  _aspxSetAttribute(element, "saved" + this.kind + "ClassName", className);
  element.className = className + " " + newClassName;
 },
 Cancel: function(element){
  if(!this.enabled) return;
  try{  
   if(this.imageObjs && this.imageObjs.length > 0)
    this.CancelImage(element);
   this.CancelStyle(element);
  }
  catch(e){
  }
 },
 CancelStyle: function(element){
  var elements = this.GetElements(element);
  for(var i = 0; i < elements.length; i++){
   if(!elements[i]) continue;
   var className = _aspxTrim(elements[i].className.replace(this.GetResultClassName(i), ""));
   elements[i].className = className;
   if(!__aspxOpera || __aspxBrowserVersion >= 9)
    this.CancelStyleFromLinks(elements, i);
  }
 },
 CancelStyleFromLinks: function(elements, index){
  if(this.disableApplyingStyleToLink)
   return;
  var linkCount = 0;
  var savedLinkCount = -1;
  if(_aspxIsExists(elements[index]["savedLinkCount"]))
   savedLinkCount = parseInt(elements[index]["savedLinkCount"]);
  do{
   if(savedLinkCount > -1 && savedLinkCount <= linkCount)
    break;
   var link = elements[index]["link" + linkCount];
   if(!link){
    link = _aspxGetChildByTagName(elements[index], "A", linkCount);
    if(link)
     elements[index]["link" + linkCount] = link;
   }
   if(link)
    this.CancelStyleFromLinkElement(link, index);
   else
    elements[index]["savedLinkCount"] = linkCount;
   linkCount++;
  }
  while(link != null)
 },
 CancelStyleFromLinkElement: function(link, index){
  if(this.GetLinkColor(index) != "")
   _aspxRestoreAttributeExtended(link.style, "color", link, "saved" + this.kind + "Color");
  if(this.GetLinkTextDecoration(index) != "")
   _aspxRestoreAttributeExtended(link.style, "textDecoration", link, "saved" + this.kind + "TextDecoration");
 },
 CancelImage: function(element){
  var images = this.GetImages(element);
  for(var i = 0; i < images.length; i++){
   if(!images[i] || !this.imageObjs[i]) continue;
   _aspxRestoreAttributeExtended(images[i], "src", images[i], "saved" + this.kind + "Src");
   this.CancelImageClassName(images[i]);
   _aspxRestoreAttributeExtended(images[i].style, "background", images[i], "saved" + this.kind + "Background");
  }
 },
 CancelImageClassName: function(element){
  var savedClassName = _aspxGetAttribute(element, "saved" + this.kind + "ClassName");
  if(_aspxIsExists(savedClassName)) {
   element.className = savedClassName;
   _aspxRemoveAttribute(element, "saved" + this.kind + "ClassName");
  }
 },
 Clone: function(){
  return new ASPxStateItem(this.name, this.classNames, this.cssTexts, this.postfixes, 
   this.imageObjs, this.imagePostfixes, this.kind, this.disableApplyingStyleToLink);
 },
 IsChildElement: function(element){
  if(element != null){
   var elements = this.GetElements(element);
   for(var i = 0; i < elements.length; i++){
    if(!elements[i]) continue;
    if(_aspxGetIsParent(elements[i], element)) 
     return true;
   }
  }
  return false;
 },
 ForceRedrawAppearance: function(element) {
  _aspxChangeStyleAttribute(element, "width", "0px");
  var dummy = element.offsetWidth;
  _aspxRestoreStyleAttribute(element, "width");
 },
 GetLinkColor: function(index){
  if(!_aspxIsExists(this.linkColor)){
   var rule = _aspxGetStyleSheetRule(this.customClassNames[index]);
   this.linkColor = rule ? rule.style.color : null;
   if(!_aspxIsExists(this.linkColor)){
    var rule = _aspxGetStyleSheetRule(this.GetClassName(index));
    this.linkColor = rule ? rule.style.color : null;
   }
   if(this.linkColor == null) 
    this.linkColor = "";
  }
  return this.linkColor;
 },
 GetLinkTextDecoration: function(index){
  if(!_aspxIsExists(this.linkTextDecoration)){
   var rule = _aspxGetStyleSheetRule(this.customClassNames[index]);
   this.linkTextDecoration = rule ? rule.style.textDecoration : null;
   if(!_aspxIsExists(this.linkTextDecoration)){
    var rule = _aspxGetStyleSheetRule(this.GetClassName(index));
    this.linkTextDecoration = rule ? rule.style.textDecoration : null;
   }
   if(this.linkTextDecoration == null) 
    this.linkTextDecoration = "";
  }
  return this.linkTextDecoration;
 }
});
ASPxClientStateEventArgs = _aspxCreateClass(null, {
 constructor: function(item, element){
  this.item = item;
  this.element = element;
  this.toElement = null;
  this.fromElement = null;
  this.htmlEvent = null;
 }
});
ASPxStateController = _aspxCreateClass(null, {
 constructor: function(){
  this.focusedItems = { };
  this.hoverItems = { };
  this.pressedItems = { };
  this.selectedItems = { };
  this.disabledItems = { };
  this.currentFocusedElement = null;
  this.currentFocusedItemName = null;
  this.currentHoverElement = null;
  this.currentHoverItemName = null;
  this.currentPressedElement = null;
  this.currentPressedItemName = null;
  this.savedCurrentPressedElement = null;
  this.savedCurrentMouseMoveSrcElement = null;
  this.AfterSetFocusedState = new ASPxClientEvent();
  this.AfterClearFocusedState = new ASPxClientEvent();
  this.AfterSetHoverState = new ASPxClientEvent();
  this.AfterClearHoverState = new ASPxClientEvent();
  this.AfterSetPressedState = new ASPxClientEvent();
  this.AfterClearPressedState = new ASPxClientEvent();
  this.AfterDisabled = new ASPxClientEvent();
  this.AfterEnabled = new ASPxClientEvent();
  this.BeforeSetFocusedState = new ASPxClientEvent();
  this.BeforeClearFocusedState = new ASPxClientEvent();
  this.BeforeSetHoverState = new ASPxClientEvent();
  this.BeforeClearHoverState = new ASPxClientEvent();
  this.BeforeSetPressedState = new ASPxClientEvent();
  this.BeforeClearPressedState = new ASPxClientEvent();
  this.BeforeDisabled = new ASPxClientEvent();
  this.BeforeEnabled = new ASPxClientEvent();
  this.FocusedItemKeyDown = new ASPxClientEvent();
 }, 
 AddHoverItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, disableApplyingStyleToLink){
  this.AddItem(this.hoverItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxHoverItemKind, disableApplyingStyleToLink);
  this.AddItem(this.focusedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxFocusedItemKind, disableApplyingStyleToLink);
 },
 AddPressedItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes ,disableApplyingStyleToLink){
  this.AddItem(this.pressedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxPressedItemKind, disableApplyingStyleToLink);
 },
 AddSelectedItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, disableApplyingStyleToLink){
  this.AddItem(this.selectedItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxSelectedItemKind, disableApplyingStyleToLink);
 },
 AddDisabledItem: function(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, disableApplyingStyleToLink){
  this.AddItem(this.disabledItems, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, __aspxDisabledItemKind, disableApplyingStyleToLink);
 },
 AddItem: function(items, name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind , disableApplyingStyleToLink){
  var stateItem = new ASPxStateItem(name, classNames, cssTexts, postfixes, imageObjs, imagePostfixes, kind, disableApplyingStyleToLink);
  if(postfixes && postfixes.length > 0){
   for(var i = 0; i < postfixes.length; i ++){
    items[name + postfixes[i]] = stateItem;
   }
  }
  else
   items[name] = stateItem;
  __aspxStateItemsExist = true;
 },
 RemoveHoverItem: function(name){
  this.RemoveItem(this.hoverItems, name);
  this.RemoveItem(this.focusedItems, name);
 },
 RemovePressedItem: function(name){
  this.RemoveItem(this.pressedItems, name);
 },
 RemoveSelectedItem: function(name){
  this.RemoveItem(this.selectedItems, name);
 },
 RemoveDisabledItem: function(name){
  this.RemoveItem(this.disabledItems, name);
 },
 RemoveItem: function(items, name){
  delete items[name];
 },
 GetFocusedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.focusedItems, __aspxFocusedItemKind);
 },
 GetHoverElement: function(srcElement){
  return this.GetItemElement(srcElement, this.hoverItems, __aspxHoverItemKind);
 },
 GetPressedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.pressedItems, __aspxPressedItemKind);
 },
 GetSelectedElement: function(srcElement){
  return this.GetItemElement(srcElement, this.selectedItems, __aspxSelectedItemKind);
 },
 GetDisabledElement: function(srcElement){
  return this.GetItemElement(srcElement, this.disabledItems, __aspxDisabledItemKind);
 },
 GetItemElement: function(srcElement, items, kind){
  if(srcElement && srcElement[__aspxCachedStatePrefix + kind]){
   var cachedElement = srcElement[__aspxCachedStatePrefix + kind];
   if(cachedElement != __aspxEmptyCachedValue)
    return cachedElement;
   return null;
  }
  var element = srcElement;
  while(element != null) {
   var item = items[element.id];
   if(item){
    this.CacheItemElement(srcElement, kind, element);
    element[kind] = item;
    return element;
   }
   element = element.parentNode;
  }
  this.CacheItemElement(srcElement, kind, __aspxEmptyCachedValue);
  return null;
 },
 CacheItemElement: function(srcElement, kind, value){
  if(srcElement && !srcElement[__aspxCachedStatePrefix + kind])
   srcElement[__aspxCachedStatePrefix + kind] = value;
 },
 DoSetFocusedState: function(element, fromElement){
  var item = element[__aspxFocusedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.fromElement = fromElement;
   this.BeforeSetFocusedState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetFocusedState.FireEvent(this, args);
  }
 },
 DoClearFocusedState: function(element, toElement){
  var item = element[__aspxFocusedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.toElement = toElement;
   this.BeforeClearFocusedState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearFocusedState.FireEvent(this, args);
  }
 },
 DoSetHoverState: function(element, fromElement){
  var item = element[__aspxHoverItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.fromElement = fromElement;
   this.BeforeSetHoverState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetHoverState.FireEvent(this, args);
  }
 },
 DoClearHoverState: function(element, toElement){
  var item = element[__aspxHoverItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   args.toElement = toElement;
   this.BeforeClearHoverState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearHoverState.FireEvent(this, args);
  }
 },
 DoSetPressedState: function(element){
  var item = element[__aspxPressedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   this.BeforeSetPressedState.FireEvent(this, args);
   item.Apply(element);
   this.AfterSetPressedState.FireEvent(this, args);
  }
 },
 DoClearPressedState: function(element){
  var item = element[__aspxPressedItemKind];
  if(item){
   var args = new ASPxClientStateEventArgs(item, element);
   this.BeforeClearPressedState.FireEvent(this, args);
   item.Cancel(element);
   this.AfterClearPressedState.FireEvent(this, args);
  }
 },
 SetCurrentFocusedElement: function(element){
  if(this.currentFocusedElement && !_aspxIsValidElement(this.currentFocusedElement)){
   this.currentFocusedElement = null;
   this.currentFocusedItemName = "";
  }
  if(this.currentFocusedElement != element){
   var oldCurrentFocusedElement = this.currentFocusedElement;
   var item = (element != null) ? element[__aspxFocusedItemKind] : null;
   var itemName = (item != null) ? item.name : "";
   if(this.currentFocusedItemName != itemName){
    if(this.currentHoverItemName != "")
     this.SetCurrentHoverElement(null);
    if(this.currentFocusedElement != null)
     this.DoClearFocusedState(this.currentFocusedElement, element);
    this.currentFocusedElement = element;
    item = (element != null) ? element[__aspxFocusedItemKind] : null;
    this.currentFocusedItemName = (item != null) ? item.name : "";
    if(this.currentFocusedElement != null)
     this.DoSetFocusedState(this.currentFocusedElement, oldCurrentFocusedElement);
   }
  }
 },
 SetCurrentHoverElement: function(element){
  if(this.currentHoverElement && !_aspxIsValidElement(this.currentHoverElement)){
   this.currentHoverElement = null;
   this.currentHoverItemName = "";
  }
  var item = (element != null) ? element[__aspxHoverItemKind] : null;
  if(item && !item.enabled) { 
   element = this.GetItemElement(element.parentNode, this.hoverItems, __aspxHoverItemKind);
   item = (element != null) ? element[__aspxHoverItemKind] : null;
  }
  if(this.currentHoverElement != element){
   var oldCurrentHoverElement = this.currentHoverElement,
    itemName = (item != null) ? item.name : "";
   if(this.currentHoverItemName != itemName || (item != null && item.needRefreshBetweenElements)){
    if(this.currentFocusedItemName != "")
     this.SetCurrentFocusedElement(null);
    if(this.currentHoverElement != null)
     this.DoClearHoverState(this.currentHoverElement, element);
    item = (element != null) ? element[__aspxHoverItemKind] : null;
    if(item == null || item.enabled){
     this.currentHoverElement = element;
     this.currentHoverItemName = (item != null) ? item.name : "";
     if(this.currentHoverElement != null)
      this.DoSetHoverState(this.currentHoverElement, oldCurrentHoverElement);
    }
   }
  }
 },
 SetCurrentPressedElement: function(element){
  if(this.currentPressedElement && !_aspxIsValidElement(this.currentPressedElement)){
   this.currentPressedElement = null;
   this.currentPressedItemName = "";
  }
  if(this.currentPressedElement != element){
   if(this.currentPressedElement != null)
    this.DoClearPressedState(this.currentPressedElement);
   var item = (element != null) ? element[__aspxPressedItemKind] : null;
   if(item == null || item.enabled){
    this.currentPressedElement = element;
    this.currentPressedItemName = (item != null) ? item.name : "";
    if(this.currentPressedElement != null)
     this.DoSetPressedState(this.currentPressedElement);
   }
  }
 },
 SetCurrentFocusedElementBySrcElement: function(srcElement){
  var element = this.GetFocusedElement(srcElement);
  this.SetCurrentFocusedElement(element);
 },
 SetCurrentHoverElementBySrcElement: function(srcElement){
  var element = this.GetHoverElement(srcElement);
  this.SetCurrentHoverElement(element);
 },
 SetCurrentPressedElementBySrcElement: function(srcElement){
  var element = this.GetPressedElement(srcElement);
  this.SetCurrentPressedElement(element);
 },
 SetPressedElement: function (element) {
  this.SetCurrentHoverElement(null);
  this.SetCurrentPressedElementBySrcElement(element);
  this.savedCurrentPressedElement = this.currentPressedElement;
 },
 SelectElement: function (element) {
  var item = element[__aspxSelectedItemKind];
  if(item)
   item.Apply(element);
 }, 
 SelectElementBySrcElement: function(srcElement){
  var element = this.GetSelectedElement(srcElement);
  if(element != null) this.SelectElement(element);
 }, 
 DeselectElement: function(element){
  var item = element[__aspxSelectedItemKind];
  if(item)
   item.Cancel(element);
 }, 
 DeselectElementBySrcElement: function(srcElement){
  var element = this.GetSelectedElement(srcElement);
  if(element != null) this.DeselectElement(element);
 },
 SetElementEnabled: function(element, enable){
  if(enable)
   this.EnableElement(element);
  else
   this.DisableElement(element);
 },
 DisableElement: function(element){
  var element = this.GetDisabledElement(element);
  if(element != null) {
   var item = element[__aspxDisabledItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    this.BeforeDisabled.FireEvent(this, args);
    if(item.name == this.currentPressedItemName)
     this.SetCurrentPressedElement(null);
    if(item.name == this.currentHoverItemName)
     this.SetCurrentHoverElement(null);
    item.Apply(element);
    this.SetMouseStateItemsEnabled(item.name, item.postfixes, false);
    this.AfterDisabled.FireEvent(this, args);
   }
  }
 }, 
 EnableElement: function(element){
  var element = this.GetDisabledElement(element);
  if(element != null) {
   var item = element[__aspxDisabledItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    this.BeforeEnabled.FireEvent(this, args);
    item.Cancel(element);
    this.SetMouseStateItemsEnabled(item.name, item.postfixes, true);
    this.AfterEnabled.FireEvent(this, args);
   }
  }
 }, 
 SetMouseStateItemsEnabled: function(name, postfixes, enabled){   
  if(postfixes && postfixes.length > 0){
   for(var i = 0; i < postfixes.length; i ++){
    this.SetItemsEnabled(this.hoverItems, name + postfixes[i], enabled);
    this.SetItemsEnabled(this.pressedItems, name + postfixes[i], enabled);
    this.SetItemsEnabled(this.focusedItems, name + postfixes[i], enabled);
   }
  }
  else{
   this.SetItemsEnabled(this.hoverItems, name, enabled);
   this.SetItemsEnabled(this.pressedItems, name, enabled);
   this.SetItemsEnabled(this.focusedItems, name, enabled);
  }  
 },
 SetItemsEnabled: function(items, name, enabled){   
  if(items[name])
   items[name].enabled = enabled;
 },
 OnFocusMove: function(evt){
  var element = _aspxGetEventSource(evt);
  aspxGetStateController().SetCurrentFocusedElementBySrcElement(element);
 },
 OnMouseMove: function(evt, checkElementChanged){
  var srcElement = _aspxGetEventSource(evt);
  if(checkElementChanged && srcElement == this.savedCurrentMouseMoveSrcElement) return;
  this.savedCurrentMouseMoveSrcElement = srcElement;
  if(__aspxIE && !_aspxGetIsLeftButtonPressed(evt) && this.savedCurrentPressedElement != null)
   this.ClearSavedCurrentPressedElement();
  if(this.savedCurrentPressedElement == null)
   this.SetCurrentHoverElementBySrcElement(srcElement);
  else{
   var element = this.GetPressedElement(srcElement);
   if(element != this.currentPressedElement){
    if(element == this.savedCurrentPressedElement)
     this.SetCurrentPressedElement(this.savedCurrentPressedElement);
    else
     this.SetCurrentPressedElement(null);
   }
  }
 },
 OnMouseDown: function(evt){
  if(!_aspxGetIsLeftButtonPressed(evt)) return;
  var srcElement = _aspxGetEventSource(evt);
  this.OnMouseDownOnElement(srcElement);
 },
 OnMouseDownOnElement: function (element) {
  if (this.GetPressedElement(element) == null) return;
  this.SetPressedElement(element);
 },
 OnMouseUp: function(evt){
  var srcElement = _aspxGetEventSource(evt);
  this.OnMouseUpOnElement(srcElement);
 },
 OnMouseUpOnElement: function(element){
  if(this.savedCurrentPressedElement == null) return;
  this.ClearSavedCurrentPressedElement();
  this.SetCurrentHoverElementBySrcElement(element);
 },
 OnMouseOver: function(evt){
  var element = _aspxGetEventSource(evt);
  if (element && element.tagName == "IFRAME")
   this.OnMouseMove(evt, true);
 },
 OnKeyDown: function(evt){
  var element = this.GetFocusedElement(_aspxGetEventSource(evt));
  if(element != null && element == this.currentFocusedElement) {
   var item = element[__aspxFocusedItemKind];
   if(item){
    var args = new ASPxClientStateEventArgs(item, element);
    args.htmlEvent = evt;
    this.FocusedItemKeyDown.FireEvent(this, args);
   }
  }
 },
 OnSelectStart: function(evt){
  if(this.savedCurrentPressedElement) {
   _aspxClearSelection();
   return false;
  }
 },
 ClearSavedCurrentPressedElement: function() {
  this.savedCurrentPressedElement = null;
  this.SetCurrentPressedElement(null);
 },
 ClearCache: function(srcElement, kind) {
  if(srcElement[__aspxCachedStatePrefix + kind])
   srcElement[__aspxCachedStatePrefix + kind] = null;
 },
 ClearElementCache: function(srcElement) {
  this.ClearCache(srcElement, __aspxFocusedItemKind);
  this.ClearCache(srcElement, __aspxHoverItemKind);
  this.ClearCache(srcElement, __aspxPressedItemKind);
  this.ClearCache(srcElement, __aspxSelectedItemKind);
  this.ClearCache(srcElement, __aspxDisabledItemKind);
 }
});
var __aspxStateController = null;
function aspxGetStateController(){
 if(__aspxStateController == null)
  __aspxStateController = new ASPxStateController();
 return __aspxStateController;
}
function aspxAddStateItems(method, namePrefix, classes, disableApplyingStyleToLink){
 for(var i = 0; i < classes.length; i ++){
  for(var j = 0; j < classes[i][2].length; j ++) {
   var name = namePrefix;
   if(classes[i][2][j])
    name += "_" + classes[i][2][j];
   var postfixes = classes[i][3] || null;
   var imageObjs = (classes[i][4] && classes[i][4][j]) || null;
   var imagePostfixes = classes[i][5] || null;
   method.call(aspxGetStateController(), name, classes[i][0], classes[i][1], postfixes, imageObjs, imagePostfixes, disableApplyingStyleToLink);
  }
 }
}
function aspxAddHoverItems(namePrefix, classes, disableApplyingStyleToLink){
 aspxAddStateItems(aspxGetStateController().AddHoverItem, namePrefix, classes, disableApplyingStyleToLink);
}
function aspxAddPressedItems(namePrefix, classes, disableApplyingStyleToLink){
 aspxAddStateItems(aspxGetStateController().AddPressedItem, namePrefix, classes, disableApplyingStyleToLink);
}
function aspxAddSelectedItems(namePrefix, classes, disableApplyingStyleToLink){
 aspxAddStateItems(aspxGetStateController().AddSelectedItem, namePrefix, classes, disableApplyingStyleToLink);
}
function aspxAddDisabledItems(namePrefix, classes, disableApplyingStyleToLink){
 aspxAddStateItems(aspxGetStateController().AddDisabledItem, namePrefix, classes, disableApplyingStyleToLink);
}
function aspxRemoveStateItems(method, namePrefix, classes){
 for(var i = 0; i < classes.length; i ++){
  for(var j = 0; j < classes[i][0].length; j ++) {
   var name = namePrefix;
   if(classes[i][0][j])
    name += "_" + classes[i][0][j];
   method.call(aspxGetStateController(), name);
  }
 }
}
function aspxRemoveHoverItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveHoverItem, namePrefix, classes);
}
function aspxRemovePressedItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemovePressedItem, namePrefix, classes);
}
function aspxRemoveSelectedItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveSelectedItem, namePrefix, classes);
}
function aspxRemoveDisabledItems(namePrefix, classes){
 aspxRemoveStateItems(aspxGetStateController().RemoveDisabledItem, namePrefix, classes);
}
function aspxAddAfterClearFocusedState(handler){
 aspxGetStateController().AfterClearFocusedState.AddHandler(handler);
}
function aspxAddAfterSetFocusedState(handler){
 aspxGetStateController().AfterSetFocusedState.AddHandler(handler);
}
function aspxAddAfterClearHoverState(handler){
 aspxGetStateController().AfterClearHoverState.AddHandler(handler);
}
function aspxAddAfterSetHoverState(handler){
 aspxGetStateController().AfterSetHoverState.AddHandler(handler);
}
function aspxAddAfterClearPressedState(handler){
 aspxGetStateController().AfterClearPressedState.AddHandler(handler);
}
function aspxAddAfterSetPressedState(handler){
 aspxGetStateController().AfterSetPressedState.AddHandler(handler);
}
function aspxAddAfterDisabled(handler){
 aspxGetStateController().AfterDisabled.AddHandler(handler);
}
function aspxAddAfterEnabled(handler){
 aspxGetStateController().AfterEnabled.AddHandler(handler);
}
function aspxAddBeforeClearFocusedState(handler){
 aspxGetStateController().BeforeClearFocusedState.AddHandler(handler);
}
function aspxAddBeforeSetFocusedState(handler){
 aspxGetStateController().BeforeSetFocusedState.AddHandler(handler);
}
function aspxAddBeforeClearHoverState(handler){
 aspxGetStateController().BeforeClearHoverState.AddHandler(handler);
}
function aspxAddBeforeSetHoverState(handler){
 aspxGetStateController().BeforeSetHoverState.AddHandler(handler);
}
function aspxAddBeforeClearPressedState(handler){
 aspxGetStateController().BeforeClearPressedState.AddHandler(handler);
}
function aspxAddBeforeSetPressedState(handler){
 aspxGetStateController().BeforeSetPressedState.AddHandler(handler);
}
function aspxAddBeforeDisabled(handler){
 aspxGetStateController().BeforeDisabled.AddHandler(handler);
}
function aspxAddBeforeEnabled(handler){
 aspxGetStateController().BeforeEnabled.AddHandler(handler);
}
function aspxAddFocusedItemKeyDown(handler){
 aspxGetStateController().FocusedItemKeyDown.AddHandler(handler);
}
function aspxSetHoverState(element){
 aspxGetStateController().SetCurrentHoverElementBySrcElement(element);
}
function aspxClearHoverState(evt){
 aspxGetStateController().SetCurrentHoverElementBySrcElement(null);
}
function aspxUpdateHoverState(evt){
 aspxGetStateController().OnMouseMove(evt, false);
}
function aspxSetFocusedState(element){
 aspxGetStateController().SetCurrentFocusedElementBySrcElement(element);
}
function aspxClearFocusedState(evt){
 aspxGetStateController().SetCurrentFocusedElementBySrcElement(null);
}
function aspxUpdateFocusedState(evt){
 aspxGetStateController().OnFocusMove(evt);
}
function aspxAssignAccessabilityEventsToChildrenLinks(container){
 var links = _aspxGetChildrenByPartialClassName(container, __aspxAccessibilityMarkerClass);
 for(var i = 0; i < links.length; i++)
  aspxAssignAccessabilityEventsToLink(links[i]);
}
function aspxAssignAccessabilityEventsToLink(link) {
 if (!_aspxElementCssClassContains(link, __aspxAccessibilityMarkerClass))
  return;
 _aspxAttachEventToElement(link, "focus", function(e) { aspxUpdateFocusedState(e); });
 _aspxAttachEventToElement(link, "blur", function(e) { aspxClearFocusedState(e); });
 if(__aspxIE && __aspxBrowserMajorVersion < 7 && link.href == __aspxAccessibilityEmptyUrl)
  _aspxAttachEventToElement(link, "click", function() { return false; });
}
_aspxAttachEventToDocument("mousemove", aspxClassesDocumentMouseMove);
function aspxClassesDocumentMouseMove(evt) {
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseMove(evt, true);
}
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseDownEventName, aspxClassesDocumentMouseDown);
function aspxClassesDocumentMouseDown(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseDown(evt);
}
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseUpEventName, aspxClassesDocumentMouseUp);
function aspxClassesDocumentMouseUp(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseUp(evt);
}
_aspxAttachEventToDocument("mouseover", aspxClassesDocumentMouseOver);
function aspxClassesDocumentMouseOver(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnMouseOver(evt);
}
_aspxAttachEventToDocument("keydown", aspxClassesDocumentKeyDown);
function aspxClassesDocumentKeyDown(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  aspxGetStateController().OnKeyDown(evt);
}
_aspxAttachEventToDocument("selectstart", aspxClassesDocumentSelectStart);
function aspxClassesDocumentSelectStart(evt){
 if(__aspxClassesScriptParsed && __aspxStateItemsExist)
  return aspxGetStateController().OnSelectStart(evt); 
}

ASPxClientCallbackPanel = _aspxCreateClass(ASPxClientControl, {
 constructor: function (name) {
  this.constructor.prototype.constructor.call(this, name);
  this.touchUIScroller = null;
  this.hideContentOnCallback = true;
  this.isLoadingPanelTextEmpty = false;
 },
 Initialize: function () {
  this.touchUIScroller = ASPxClientTouchUI.makeScrollableIfRequired(this.GetMainElement());
 },
 GetContentElement: function () {
  var element = this.GetMainElement();
  return element.tagName == "TABLE" ? element.rows[0].cells[0] : element;
 },
 OnCallback: function (result) {
  _aspxSetInnerHtml(this.GetContentElement(), result);
  if (this.touchUIScroller)
   this.touchUIScroller.ChangeElement(this.GetMainElement());
 },
 ShowLoadingPanel: function () {
  var element = this.GetContentElement();
  var mainElement = (element.tagName == "TD") ? this.GetMainElement() : element;
  if(!this.hideContentOnCallback)
   this.CreateLoadingPanelWithAbsolutePosition(this.GetMainElement().parentNode, mainElement);
  else
   this.CreateLoadingPanelInsideContainer(element, true, true, false);
 },
 ShowLoadingDiv: function () {
  this.CreateLoadingDiv(this.GetMainElement().parentNode, this.GetContentElement());
 },
 GetCallbackAnimationElement: function() {
  return this.GetContentElement();
 },
 PerformCallback: function (parameter) {
  this.CreateCallback(parameter);
 },
 CreateCallback: function (arg, command, callbackInfo) {
  this.ShowLoadingElements();
  ASPxClientControl.prototype.CreateCallback.call(this, arg, command);
 },
 GetLoadingPanelTextLabelID: function () {
  return this.name + "_TL";
 },
 GetLoadingPanelTextLabel: function () {
  return _aspxGetElementById(this.GetLoadingPanelTextLabelID());
 },
 GetLoadingPanelText: function () {
  var textLabel = this.GetLoadingPanelTextLabel();
  if(textLabel && !this.isLoadingPanelTextEmpty)
   return textLabel.innerHTML;
  return "";
 },
 SetLoadingPanelText: function (text) {
  this.isLoadingPanelTextEmpty = text == null || text == "";
  var textLabel = this.GetLoadingPanelTextLabel();
  if(textLabel)
   textLabel.innerHTML = this.isLoadingPanelTextEmpty ? "&nbsp;" : text;
 },
 GetContentHtml: function () {
  return this.GetContentElement().innerHTML;
 },
 SetContentHtml: function (html, useAnimation) {
  this.GetContentElement().innerHTML = html;
  if(useAnimation && typeof(ASPxAnimationHelper) != "undefined")
   ASPxAnimationHelper.fadeIn(this.GetContentElement());
 }
});
ASPxClientCallbackPanel.Cast = ASPxClientControl.Cast;
_aspxEnableCssAnimation = true;
aspxAnimationTransitionBase = _aspxCreateClass(null, {
 constructor: function (element, options) {
  aspxAnimationTransitionBase.Cancel(element);
  this.element = element;
  this.element.aspxTransition = this;
  this.duration = options.duration || aspxAnimationTransitionBase.Durations.DEFAULT;
  this.transition = options.transition || aspxAnimationTransitionBase.Transitions.SINE;
  this.property = options.property;
  this.unit = options.unit || "";
  this.onComplete = options.onComplete;
  this.to = null;
  this.from = null;
 },
 Start: function (from, to) {
  if (to != undefined) {
   this.to = to;
   this.from = from;
   this.SetValue(this.from);
  }
  else
   this.to = from;
 },
 Cancel: function () {
  try {
   delete this.element.aspxTransition;
  } catch (e) {
   this.element.aspxTransition = undefined;
  }
 },
 GetValue: function () {
  return this.getValueInternal(this.element, this.property);
 },
 SetValue: function (value) {
  this.setValueInternal(this.element, this.property, this.unit, value);
 },
 setValueInternal: function (element, property, unit, value) {
  if (property == "opacity")
   ASPxAnimationHelper.setOpacity(element, value);
  else
   element.style[property] = value + unit;
 },
 getValueInternal: function (element, property) {
  if (property == "opacity")
   return _aspxGetElementOpacity(element);
  var value = parseFloat(element.style[property]);
  return isNaN(value) ? 0 : value;
 },
 performOnComplete: function () {
  if (this.onComplete)
   this.onComplete(this.element);
 },
 getTransition: function () {
  return this.transition;
 }
});
aspxAnimationTransitionBase.Cancel = function (element) {
 if (element.aspxTransition)
  element.aspxTransition.Cancel();
};
aspxAnimationTransitionBase.Durations = {
 SHORT: 200,
 DEFAULT: 400,
 LONG: 600
};
aspxAnimationTransitionBase.Transitions = {
 LINER: {
  Css: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
  Js: function (progress) { return progress; }
 },
 SINE: {
  Css: "cubic-bezier(0.470, 0.000, 0.745, 0.715)",
  Js: function (progress) { return Math.sin(progress * 1.57); }
 },
 POW: {
  Css: "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
  Js: function (progress) { return Math.pow(progress, 4); }
 },
 POW_EASE_OUT: {
  Css: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  Js: function (progress) { return 1 - aspxAnimationTransitionBase.Transitions.POW.Js(1 - progress); }
 }
};
aspxJsAnimationTransition = _aspxCreateClass(aspxAnimationTransitionBase, {
 constructor: function (element, options) {
  this.constructor.prototype.constructor.call(this, element, options);
  this.fps = 60;
  this.startTime = null;
 },
 Start: function (from, to) {
  aspxAnimationTransitionBase.prototype.Start.call(this, from, to);
  this.initTimer();
 },
 Cancel: function () {
  aspxAnimationTransitionBase.prototype.Cancel.call(this);
  if (this.timerId)
   clearInterval(this.timerId);
 },
 initTimer: function () {
  this.startTime = new Date();
  this.timerId = window.setInterval(function () { this.onTick(); }.aspxBind(this), 1000 / this.fps);
 },
 onTick: function () {
  var progress = (new Date() - this.startTime) / this.duration;
  if (progress >= 1)
   this.complete();
  else
   this.update(progress);
 },
 update: function (progress) {
  this.SetValue(this.gatCalculatedValue(this.from, this.to, progress));
 },
 complete: function () {
  this.Cancel();
  this.update(1);
  this.performOnComplete();
 },
 gatCalculatedValue: function (from, to, progress) {
  if (progress == 1)
   return to;
  return from + (to - from) * this.getTransition()(progress);
 },
 getTransition: function () {
  return this.transition.Js;
 }
});
aspxMultipleJsAnimationTransition = _aspxCreateClass(aspxJsAnimationTransition, {
 constructor: function (element, options) {
  this.constructor.prototype.constructor.call(this, element, options);
  this.properties = { };
 },
 Start: function (properties) {
  this.initProperties(properties);
  this.initTimer();
 },
 initProperties: function (properties) {
  this.properties = properties;
  for (var propName in this.properties)
   if (properties[propName].from == undefined)
    properties[propName].from = this.getValueInternal(this.element, propName);
 },
 update: function (progress) {
  for (var propName in this.properties) {
   var property = this.properties[propName];
   if (property.from != property.to)
    this.setValueInternal(this.element, propName, property.unit, this.gatCalculatedValue(property.from, property.to, progress));
  }
 }
});
aspxCssAnimationTransition = _aspxCreateClass(aspxAnimationTransitionBase, {
 constructor: function (element, options) {
  this.constructor.prototype.constructor.call(this, element, options);
  this.transitionPropertyName = aspxCssAnimationTransition.CSS_TRANSITION.transitionPropertyName;
  this.eventName = aspxCssAnimationTransition.CSS_TRANSITION.eventName;
 },
 Start: function (from, to) {
  aspxAnimationTransitionBase.prototype.Start.call(this, from, to);
  _aspxSetTimeout(function() {
   var isHidden = this.element.offsetHeight == 0 && this.element.offsetWidth == 0; 
   if(!isHidden)
    this.prepareElementBeforeAnimation();
   this.SetValue(this.to);
   if(isHidden)
    this.onTransitionEnd();
  }.aspxBind(this), 0);
 },
 Cancel: function () {
  aspxAnimationTransitionBase.prototype.Cancel.call(this);
  _aspxDetachEventFromElement(this.element, this.eventName, aspxCssAnimationTransition.transitionEnd);
  this.stopAnimation();
  this.setValueInternal(this.element, this.transitionPropertyName, "", "");
 },
 prepareElementBeforeAnimation: function () {
  _aspxAttachEventToElement(this.element, this.eventName, aspxCssAnimationTransition.transitionEnd);
  var tmpH = this.element.offsetHeight; 
  this.element.style[this.transitionPropertyName] = this.getTransitionCssString();
 },
 stopAnimation: function () {
  this.SetValue(_aspxGetCurrentStyle(this.element)[this.property]);
 },
 onTransitionEnd: function () {
  this.Cancel();
  this.performOnComplete();
 },
 getTransition: function () {
  return this.transition.Css;
 },
 getTransitionCssString: function () {
  return this.getTransitionCssStringInternal(this.getCssName(this.property));
 },
 getTransitionCssStringInternal: function (cssProperty) {
  return cssProperty + " " + this.duration + "ms " + this.getTransition();
 },
 getCssName: function (property) {
  switch (property) {
   case "marginLeft":
    return "margin-left";
   case "marginTop":
    return "margin-top"
  }
  return property;
 }
});
aspxMultipleCssAnimationTransition = _aspxCreateClass(aspxCssAnimationTransition, {
 constructor: function (element, options) {
  this.constructor.prototype.constructor.call(this, element, options);
  this.properties = null;
 },
 Start: function (properties) {
  this.properties = properties;
  this.prepareElementBeforeAnimation();
  this.forEachProperties(function (property, propName) {
   this.setValueInternal(this.element, propName, property.unit, property.to);
  }.aspxBind(this));
 },
 stopAnimation: function () {
  var style = _aspxGetCurrentStyle(this.element);
  this.forEachProperties(function (property, propName) {
   this.setValueInternal(this.element, propName, "", style[propName]);
  }.aspxBind(this));
 },
 getTransitionCssString: function () {
  var str = "";
  this.forEachProperties(function (property, propName) {
   str += this.getTransitionCssStringInternal(this.getCssName(propName)) + ",";
  }.aspxBind(this));
  str = str.substring(0, str.length - 1);
  return str;
 },
 forEachProperties: function (func) {
  for (var propName in this.properties) {
   var property = this.properties[propName];
   if (property.from == undefined)
    property.from = this.getValueInternal(this.element, propName);
   if (property.from != property.to)
    func(property, propName);
  }
 }
});
aspxCssAnimationTransition.transitionEnd = function (evt) {
 var element = evt.target;
 if (element && element.aspxTransition)
  element.aspxTransition.onTransitionEnd();
}
aspxCssAnimationTransition.CSS_TRANSITION = (function () {
 if (__aspxIE) 
  return null;
 var cssNames = [
  { transitionPropertyName: "webkitTransition", eventName: "webkitTransitionEnd" },
  { transitionPropertyName: "MozTransition", eventName: "transitionend" },
  { transitionPropertyName: "OTransition", eventName: "oTransitionEnd" },
  { transitionPropertyName: "transition", eventName: "transitionend" }
 ];
 var fakeElement = document.createElement("DIV");
 for (var i = 0; i < cssNames.length; i++)
  if (cssNames[i].transitionPropertyName in fakeElement.style)
   return cssNames[i];
 return null;
})();
aspxCssAnimationTransition.CanUse = function () {
 return _aspxEnableCssAnimation && !!aspxCssAnimationTransition.CSS_TRANSITION;
};
aspxPositionAnimationTransition = _aspxCreateClass(aspxAnimationTransitionBase, {
 constructor: function (element, options) {
  this.constructor.prototype.constructor.call(this, element, options);
  this.direction = options.direction;
  this.animationTransition = this.createAnimationTransition();
  this.patchElement();
 },
 Start: function (to) {
  var from = this.GetValue();
  if (aspxPositionAnimationTransition.CSS_TRANSFORM) {
   from = this.convertPosToCssTransformPos(from);
   to = this.convertPosToCssTransformPos(to);
  }
  this.animationTransition.Start(from, to);
 },
 SetValue: function (value) {
  aspxPositionAnimationTransition.SetValue(this.element, value, this.direction == ASPxAnimationHelper.SLIDE_VERTICAL_DIRECTION);
 },
 GetValue: function () {
  return aspxPositionAnimationTransition.GetValue(this.element, this.direction == ASPxAnimationHelper.SLIDE_VERTICAL_DIRECTION);
 },
 createAnimationTransition: function () {
  var transition = aspxPositionAnimationTransition.CSS_TRANSFORM ? this.createTransformAnimationTransition() : this.createPositionAnimationTransition();
  transition.transition = aspxAnimationTransitionBase.Transitions.POW_EASE_OUT;
  return transition;
 },
 createTransformAnimationTransition: function () {
  return new aspxCssAnimationTransition(this.element, {
   property: aspxPositionAnimationTransition.CSS_TRANSFORM,
   duration: this.duration,
   onComplete: this.onComplete
  });
 },
 createPositionAnimationTransition: function () {
  return ASPxAnimationHelper.createAnimationTransition(this.element, {
   property: this.direction == ASPxAnimationHelper.SLIDE_VERTICAL_DIRECTION ? "top" : "left",
   unit: "px",
   duration: this.duration,
   onComplete: this.onComplete
  });
 },
 convertPosToCssTransformPos: function (position) {
  return aspxPositionAnimationTransition.GetCssTranslateText(position, this.direction == ASPxAnimationHelper.SLIDE_VERTICAL_DIRECTION);
 },
 patchElement: function () {
  if (aspxPositionAnimationTransition.CSS_TRANSFORM && __aspxWebKitFamily && !_aspxElementHasCssClass(this.element, "dxTA"))
   this.element.className += " dxTA";
 }
});
aspxPositionAnimationTransition.GetCssTranslateText = function (position, top) {
 return "matrix(1, 0, 0, 1," + (!top ? position : 0) + ", " + (!top ? 0 : position) + ")";
};
aspxPositionAnimationTransition.GetValue = function (element, top) {
 if (aspxPositionAnimationTransition.CSS_TRANSFORM) {
  var cssValue = element.style[aspxPositionAnimationTransition.CSS_TRANSFORM];
  return cssValue ? Number(cssValue.replace('matrix(1, 0, 0, 1,', '').replace(')', '').split(',')[!top ? 0 : 1]) : 0;
 }
 else
  return !top ? element.offsetLeft : element.offsetTop;
};
aspxPositionAnimationTransition.SetValue = function (element, position, top) {
 if (aspxPositionAnimationTransition.CSS_TRANSFORM)
  element.style[aspxPositionAnimationTransition.CSS_TRANSFORM] = aspxPositionAnimationTransition.GetCssTranslateText(position, top);
 else
  element.style[!top ? "left" : "top"] = position + "px";
};
aspxPositionAnimationTransition.CSS_TRANSFORM = (function () {
 if (!aspxCssAnimationTransition.CanUse())
  return null;
 var transformPropertiesNames = ["transform", "MozTransform", "-webkit-transform", "msTransform", "OTransform"];
 var fakeElement = document.createElement("DIV");
 for (var i = 0; i < transformPropertiesNames.length; i++)
  if (transformPropertiesNames[i] in fakeElement.style)
   return transformPropertiesNames[i];
 return null;
})();
var ASPxAnimationHelper = {
 SLIDE_HORIZONTAL_DIRECTION: 0,
 SLIDE_VERTICAL_DIRECTION: 1,
 SLIDE_TOP_DIRECTION: 0,
 SLIDE_RIGHT_DIRECTION: 1,
 SLIDE_BOTTOM_DIRECTION: 2,
 SLIDE_LEFT_DIRECTION: 3,
 SLIDE_CONTAINER_CLASS: "dxAC",
 MAXIMUM_DEPTH: 3,
 createAnimationTransition: function (element, options) {
  switch (options.animationEngine) {
   case "js":
    return new aspxJsAnimationTransition(element, options);
    break;
   case "css":
    return new aspxCssAnimationTransition(element, options);
    break;
  }
  return aspxCssAnimationTransition.CanUse() ? new aspxCssAnimationTransition(element, options) : new aspxJsAnimationTransition(element, options);
 },
 createMultipleAnimationTransition: function (element, options) {
  return aspxCssAnimationTransition.CanUse() ? new aspxMultipleCssAnimationTransition(element, options) : new aspxMultipleJsAnimationTransition(element, options);
 },
 cancelAnimation: function (element) {
  aspxAnimationTransitionBase.Cancel(element);
 },
 fadeIn: function (element, onComplete) {
  ASPxAnimationHelper.fadeTo(element, {
   from: 0, to: 1,
   onComplete: onComplete,
   duration: aspxAnimationTransitionBase.Durations.DEFAULT
  });
 },
 fadeOut: function (element, onComplete) {
  ASPxAnimationHelper.fadeTo(element, {
   from: 1, to: 0,
   onComplete: onComplete,
   duration: aspxAnimationTransitionBase.Durations.DEFAULT
  });
 },
 fadeTo: function (element, options) {
  options.property = "opacity";
  if (!options.duration)
   options.duration = aspxAnimationTransitionBase.Durations.SHORT;
  var transition = ASPxAnimationHelper.createAnimationTransition(element, options);
  if (!_aspxIsExists(options.from))
   options.from = transition.GetValue();
  transition.Start(options.from, options.to);
 },
 slideIn: function (element, direction, onComplete) {
  ASPxAnimationHelper.setOpacity(element, 1);
  var animationContainer = ASPxAnimationHelper.getSlideAnimationContainer(element, true, true);
  var pos = ASPxAnimationHelper.getSlideInStartPos(animationContainer, direction);
  var transition = ASPxAnimationHelper.createSlideTransition(animationContainer, direction,
   function (el) {
    ASPxAnimationHelper.resetSlideAnimationContainerSize(animationContainer);
    if (onComplete)
     onComplete(el);
   });
  transition.Start(pos, 0);
 },
 slideOut: function (element, direction, onComplete) {
  var animationContainer = ASPxAnimationHelper.getSlideAnimationContainer(element, true, true);
  var pos = ASPxAnimationHelper.getSlideOutFinishPos(animationContainer, direction);
  var transition = ASPxAnimationHelper.createSlideTransition(animationContainer, direction,
   function (el) {
    ASPxAnimationHelper.setOpacity(el.firstChild, 0);
    if (onComplete)
     onComplete(el);
   });
  transition.Start(pos);
 },
 slideTo: function (element, options) {
  if (!_aspxIsExists(options.direction))
   options.direction = ASPxAnimationHelper.SLIDE_HORIZONTAL_DIRECTION;
  var transition = new aspxPositionAnimationTransition(element, options);
  transition.Start(options.to);
 },
 setOpacity: function (element, value) {
  if (__aspxIE && __aspxBrowserVersion < 8)
   element.style.zoom = 1;
  _aspxSetElementOpacity(element, value);
 },
 findSlideAnimationContainer: function (element) {
  var container = element
  for (var i = 0; i < ASPxAnimationHelper.MAXIMUM_DEPTH; i++) {
   if (container.tagName == "BODY")
    return null;
   if (_aspxElementHasCssClass(container, ASPxAnimationHelper.SLIDE_CONTAINER_CLASS))
    return container;
   container = container.parentNode;
  }
  return null;
 },
 createSlideAnimationContainer: function (element) {
  var rootContainer = document.createElement("DIV");
  _aspxSetStyles(rootContainer, {
   className: ASPxAnimationHelper.SLIDE_CONTAINER_CLASS,
   overflow: "hidden"
  });
  var elementContainer = document.createElement("DIV");
  rootContainer.appendChild(elementContainer);
  var parentNode = element.parentNode;
  parentNode.insertBefore(rootContainer, element);
  elementContainer.appendChild(element);
  return rootContainer;
 },
 getSlideAnimationContainer: function (element, create, fixSize) {
  if(!element) return;
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  var container;
  if (element.className == ASPxAnimationHelper.SLIDE_CONTAINER_CLASS)
   container = element;
  if(!container)
   container = ASPxAnimationHelper.findSlideAnimationContainer(element);
  if(!container && create) 
   container = ASPxAnimationHelper.createSlideAnimationContainer(element);
  if (container && fixSize) {
   _aspxSetStyles(container, {
    width: width, height: height
   });
   _aspxSetStyles(container.firstChild, {
    width: width, height: height
   });
  }
  return container;
 },
 resetSlideAnimationContainerSize: function (container) {
  _aspxSetStyles(container, { 
   width: "", height: ""
  });
  _aspxSetStyles(container.firstChild, {
   width: "", height: ""
  });
 },
 getModifyProperty: function (direction) {
  if (direction == ASPxAnimationHelper.SLIDE_TOP_DIRECTION || direction == ASPxAnimationHelper.SLIDE_BOTTOM_DIRECTION)
   return "marginTop";
  return "marginLeft";
 },
 createSlideTransition: function (animationContainer, direction, complete) {
  return ASPxAnimationHelper.createAnimationTransition(animationContainer.firstChild, {
   unit: "px",
   property: ASPxAnimationHelper.getModifyProperty(direction),
   onComplete: complete
  });
 },
 getSlideInStartPos: function (animationContainer, direction) {
  switch(direction) {
   case ASPxAnimationHelper.SLIDE_TOP_DIRECTION:
    return animationContainer.offsetHeight;
   case ASPxAnimationHelper.SLIDE_LEFT_DIRECTION:
    return animationContainer.offsetWidth;
   case ASPxAnimationHelper.SLIDE_RIGHT_DIRECTION:
    return -animationContainer.offsetWidth;
   case ASPxAnimationHelper.SLIDE_BOTTOM_DIRECTION:
    return -animationContainer.offsetHeight;
  }
 },
 getSlideOutFinishPos: function (animationContainer, direction) {
  switch (direction) {
   case ASPxAnimationHelper.SLIDE_TOP_DIRECTION:
    return -animationContainer.offsetHeight;
   case ASPxAnimationHelper.SLIDE_LEFT_DIRECTION:
    return -animationContainer.offsetWidth;
   case ASPxAnimationHelper.SLIDE_RIGHT_DIRECTION:
    return animationContainer.offsetWidth;
   case ASPxAnimationHelper.SLIDE_BOTTOM_DIRECTION:
    return animationContainer.offsetHeight;
  }
 }
};
var ASPxGesturesHelper = {
 handlers: {},
 activeHandler: null,
 isAttachedEvents: false,
 isExecutedGesture: false,
 AddSwipeGestureHandler: function(id, getAnimationElement, canHandle, allowStart, start, allowComplete, complete, cancel) {
  this.handlers[id] = new ASPxSwipeGestureHandler(getAnimationElement, canHandle, allowStart, start, allowComplete, complete, cancel);
 },
 UpdateSwipeAnimationContainer: function (id) {
  if (this.handlers[id])
   this.handlers[id].UpdateAnimationContainer();
 },
 AddSwipeSlideGestureHandler: function (id, getAnimationElement, direction, canHandle, backward, forward, rollback) {
  this.handlers[id] = new ASPxSwipeSlideGestureHandler(getAnimationElement, direction, canHandle, backward, forward, rollback);
 },
 OnDocumentMouseDown: function(evt) {
  if (!_aspxGetIsLeftButtonPressed(evt))
   return;
  ASPxGesturesHelper.activeHandler = ASPxGesturesHelper.FindHandler(evt);
  if(ASPxGesturesHelper.activeHandler)
   ASPxGesturesHelper.activeHandler.OnMouseDown(evt);
 },
 OnDocumentMouseMove: function(evt) {
  if (ASPxGesturesHelper.activeHandler) {
   ASPxGesturesHelper.isExecutedGesture = true;
   ASPxGesturesHelper.activeHandler.OnMouseMove(evt);
  }
 },
 OnDocumentMouseUp: function(evt) {
  if (ASPxGesturesHelper.activeHandler) {
   ASPxGesturesHelper.activeHandler.OnMouseUp(evt);
   ASPxGesturesHelper.activeHandler = null;
   _aspxSetTimeout(function () { ASPxGesturesHelper.isExecutedGesture = false; }, 0);
  }
 },
 AttachEvents: function() {
  if(!ASPxGesturesHelper.isAttachedEvents) {
   ASPxGesturesHelper.Attach(_aspxAttachEventToElement);
   ASPxGesturesHelper.isAttachedEvents = true;
  }
 },
 DetachEvents: function() {
  if(ASPxGesturesHelper.isAttachedEvents) {
   ASPxGesturesHelper.Attach(_aspxDetachEventFromElement);
   ASPxGesturesHelper.isAttachedEvents = false;
  }
 },
 Attach: function(changeEventsMethod) {
  changeEventsMethod(window.document, ASPxClientTouchUI.touchMouseDownEventName, ASPxGesturesHelper.OnDocumentMouseDown);
  changeEventsMethod(window.document, ASPxClientTouchUI.touchMouseMoveEventName, ASPxGesturesHelper.OnDocumentMouseMove);
  changeEventsMethod(window.document, ASPxClientTouchUI.touchMouseUpEventName, ASPxGesturesHelper.OnDocumentMouseUp);
 },
 FindHandler: function (evt) {
  var handlers = [];
  for (var id in ASPxGesturesHelper.handlers) {
   var handler = ASPxGesturesHelper.handlers[id];
   if(handler.CanHandleEvent(evt))
    handlers.push(handler);
  }
  if (!handlers.length)
   return null;
  handlers.sort(function (a, b) {
   return _aspxGetIsParent(a.getAnimationElement(), b.getAnimationElement()) ? 1 : -1;
  });
  return handlers[0];
 },
 IsExecutedGesture: function () {
  return ASPxGesturesHelper.isExecutedGesture;
 }
};
ASPxGesturesHelper.AttachEvents();
ASPxGestureHandler = _aspxCreateClass(null, {
 constructor: function (getAnimationElement, canHandle, allowStart) {
  this.getAnimationElement = getAnimationElement;
  this.canHandle = canHandle;
  this.allowStart = allowStart;
  this.startMousePosX = 0;
  this.startMousePosY = 0;
  this.startTime = null;
  this.savedElements = [];
 },
 OnMouseDown: function (evt) {
  if (!__aspxTouchUI && !this.IsTextElement(evt))
   _aspxPreventEvent(evt);
  this.startMousePosX = _aspxGetEventX(evt);
  this.startMousePosY = _aspxGetEventY(evt);
  this.startTime = new Date();
 },
 OnMouseMove: function (evt) {
  if (!__aspxTouchUI)
   _aspxClearSelection();
  if (Math.abs(this.GetCurrentDistanceX(evt)) < ASPxGestureHandler.SLIDER_MIN_START_DISTANCE && Math.abs(this.GetCurrentDistanceY(evt)) < ASPxGestureHandler.SLIDER_MIN_START_DISTANCE)
   ASPxGesturesHelper.isExecutedGesture = false;
 },
 OnMouseUp: function (evt) {
 },
 CanHandleEvent: function (evt) {
  return !this.canHandle || this.canHandle(evt);
 },
 IsStartAllowed: function (value) {
  return !this.allowStart || this.allowStart(value);
 },
 RollbackGesture: function () {
 },
 GetRubberPosition: function (position) {
  return position / ASPxGestureHandler.FACTOR_RUBBER;
 },
 GetCurrentDistanceX: function (evt) {
  return _aspxGetEventX(evt) - this.startMousePosX;
 },
 GetCurrentDistanceY: function (evt) {
  return _aspxGetEventY(evt) - this.startMousePosY;
 },
 GetDistanceLimit: function () {
  return (new Date() - this.startTime) < ASPxGestureHandler.MAX_TIME_SPAN ? ASPxGestureHandler.MIN_DISTANCE_LIMIT : ASPxGestureHandler.MAX_DISTANCE_LIMIT;
 },
 IsTextElement: function (evt) {
  var element = _aspxGetEventSource(evt);
  return element.tagName == "TEXTAREA" || element.tagName == "INPUT" && _aspxGetAttribute(element, "type") == "text";
 },
 GetContainerElement: function () {
 },
 AttachPreventEvents: function (evt) {
  var element = _aspxGetEventSource(evt);
  var container = this.GetContainerElement();
  while (element && element != container) {
   _aspxAttachEventToElement(element, "mouseup", this.PreventEvent);
   _aspxAttachEventToElement(element, "click", this.PreventEvent);
   this.savedElements.push(element);
   element = element.parentNode;
  }
 },
 DetachPreventEvents: function () {
  _aspxSetTimeout(function () {
   while (this.savedElements.length > 0) {
    var element = this.savedElements.pop();
    _aspxDetachEventFromElement(element, "mouseup", this.PreventEvent);
    _aspxDetachEventFromElement(element, "click", this.PreventEvent);
   }
  }.aspxBind(this), 0);
 },
 PreventEvent: function (evt) {
  return _aspxPreventEvent(evt);
 }
});
ASPxGestureHandler.MAX_DISTANCE_LIMIT = 70;
ASPxGestureHandler.MIN_DISTANCE_LIMIT = 10;
ASPxGestureHandler.MIN_START_DISTANCE = 0;
ASPxGestureHandler.SLIDER_MIN_START_DISTANCE = 5;
ASPxGestureHandler.MAX_TIME_SPAN = 300;
ASPxGestureHandler.FACTOR_RUBBER = 4;
ASPxGestureHandler.RETURN_ANIMATION_DURATION = 150;
ASPxSwipeSlideGestureHandler = _aspxCreateClass(ASPxGestureHandler, {
 constructor: function (getAnimationElement, direction, canHandle, backward, forward, rollback) {
  this.constructor.prototype.constructor.call(this, getAnimationElement, canHandle);
  this.slideElement = this.getAnimationElement();
  this.container = this.slideElement.parentNode;
  this.direction = direction;
  this.backward = backward;
  this.forward = forward;
  this.rollback = rollback;
  this.slideElementSize = 0;
  this.containerElementSize = 0;
  this.startSliderElementPosition = 0;
  this.centeredSlideElementPosition = 0;
  this.isAttachedPreventEvents = false;
 },
 OnMouseDown: function (evt) {
  ASPxGestureHandler.prototype.OnMouseDown.call(this, evt);
  this.slideElementSize = this.GetElementSize();
  this.startSliderElementPosition = this.GetElementPosition();
  this.containerElementSize = this.GetContainerElementSize();
  if (this.slideElementSize <= this.containerElementSize)
   this.centeredSlideElementPosition = (this.containerElementSize - this.slideElementSize) / 2;
 },
 OnMouseMove: function (evt) {
  ASPxGestureHandler.prototype.OnMouseMove.call(this, evt);
  if (!__aspxTouchUI && !_aspxGetIsParent(this.container, _aspxGetEventSource(evt))) {
   ASPxGesturesHelper.OnDocumentMouseUp(evt);
   return;
  }
  var distance = this.GetCurrentDistance(evt);
  if (Math.abs(distance) < ASPxGestureHandler.SLIDER_MIN_START_DISTANCE || ASPxClientTouchUI.isGesture)
   return;
  aspxAnimationTransitionBase.Cancel(this.slideElement);
  var position = this.startSliderElementPosition + distance,
   maxPosition = -(this.slideElementSize - this.containerElementSize),
   minPosition = 0;
  if (this.centeredSlideElementPosition > 0)
   position = this.GetRubberPosition(distance) + this.centeredSlideElementPosition;
  else if (position > minPosition)
   position = this.GetRubberPosition(distance);
  else if (position < maxPosition)
   position = this.GetRubberPosition(distance) + maxPosition;
  this.SetElementPosition(position);
  this.AttachPreventEvents(evt);
  return _aspxPreventEvent(evt);
 },
 OnMouseUp: function (evt) {
  this.DetachPreventEvents();
  var distance = this.GetCurrentDistance(evt);
  if (distance == 0)
   return;
  else if (this.centeredSlideElementPosition > 0 || this.CheckSlidePanelIsOutOfBounds())
   this.PerformRollback();
  else {
   if (Math.abs(distance) < this.GetDistanceLimit())
    this.PerformRollback();
   else if (distance < 0)
    this.PerformForward();
   else
    this.PerformBackward();
  }
 },
 PerformBackward: function () {
  this.backward();
 },
 PerformForward: function () {
  this.forward();
 },
 PerformRollback: function () {
  this.rollback();
 },
 CheckSlidePanelIsOutOfBounds: function () {
  var minOffset = -(this.slideElementSize - this.containerElementSize), maxOffset = 0;
  var position = null, slideElementPos = this.GetElementPosition();
  if (slideElementPos > maxOffset || slideElementPos < minOffset)
   return true;
  return false;
 },
 GetContainerElement: function () {
  return this.container;
 },
 GetElementSize: function () {
  return this.IsHorizontalDirection() ? this.slideElement.offsetWidth : this.slideElement.offsetHeight;
 },
 GetContainerElementSize: function () {
  return this.IsHorizontalDirection() ? _aspxGetClearClientWidth(this.container) : _aspxGetClearClientHeight(this.container);
 },
 GetCurrentDistance: function (evt) {
  return this.IsHorizontalDirection() ? this.GetCurrentDistanceX(evt) : this.GetCurrentDistanceY(evt);
 },
 GetElementPosition: function () {
  return aspxPositionAnimationTransition.GetValue(this.slideElement, !this.IsHorizontalDirection());
 },
 SetElementPosition: function (position) {
  aspxPositionAnimationTransition.SetValue(this.slideElement, position, !this.IsHorizontalDirection());
 },
 IsHorizontalDirection: function () {
  return this.direction == ASPxAnimationHelper.SLIDE_HORIZONTAL_DIRECTION;
 },
 AttachPreventEvents: function (evt) {
  if (!this.isAttachedPreventEvents) {
   ASPxGestureHandler.prototype.AttachPreventEvents.call(this, evt);
   this.isAttachedPreventEvents = true;
  }
 },
 DetachPreventEvents: function () {
  if (this.isAttachedPreventEvents) {
   ASPxGestureHandler.prototype.DetachPreventEvents.call(this);
   this.isAttachedPreventEvents = false;
  }
 }
});
ASPxSwipeGestureHandler = _aspxCreateClass(ASPxGestureHandler, {
 constructor: function (getAnimationElement, canHandle, allowStart, start, allowComplete, complete, cancel) {
  this.constructor.prototype.constructor.call(this, getAnimationElement, canHandle, allowStart);
  this.start = start;
  this.allowComplete = allowComplete;
  this.complete = complete;
  this.cancel = cancel;
  this.animationTween = null;
  this.currentDistanceX = 0;
  this.currentDistanceY = 0;
  this.tryStartGesture = false;
  this.tryStartScrolling = false;
  this.UpdateAnimationContainer();
 },
 UpdateAnimationContainer: function () {
  this.animationContainer = ASPxAnimationHelper.getSlideAnimationContainer(this.getAnimationElement(), true, false);
 },
 CanHandleEvent: function(evt) {
  if(ASPxGestureHandler.prototype.CanHandleEvent.call(this, evt))
   return true;
  return this.animationTween && this.animationContainer && _aspxGetIsParent(this.animationContainer, _aspxGetEventSource(evt));
 },
 OnMouseDown: function (evt) {
  ASPxGestureHandler.prototype.OnMouseDown.call(this, evt);
  if(this.animationTween) 
   this.animationTween.Cancel();
  this.currentDistanceX = 0;
  this.currentDistanceY = 0;
  this.tryStartGesture = false;
  this.tryStartScrolling = false;
 },
 OnMouseMove: function (evt) {
  ASPxGestureHandler.prototype.OnMouseMove.call(this, evt);
  this.currentDistanceX = this.GetCurrentDistanceX(evt);
  this.currentDistanceY = this.GetCurrentDistanceY(evt);
  if (!this.animationTween && !this.tryStartScrolling && (Math.abs(this.currentDistanceX) > ASPxGestureHandler.MIN_START_DISTANCE || Math.abs(this.currentDistanceY) > ASPxGestureHandler.MIN_START_DISTANCE)) {
   if(Math.abs(this.currentDistanceY) < Math.abs(this.currentDistanceX)) {
    this.tryStartGesture = true;
    if(this.IsStartAllowed(this.currentDistanceX)) {
     this.animationContainer = ASPxAnimationHelper.getSlideAnimationContainer(this.getAnimationElement(), true, true);
     this.animationTween = ASPxAnimationHelper.createSlideTransition(this.animationContainer, ASPxAnimationHelper.SLIDE_LEFT_DIRECTION,
      function() {
       ASPxAnimationHelper.resetSlideAnimationContainerSize(this.animationContainer);
       this.animationContainer = null;
       this.animationTween = null;
      }.aspxBind(this));
     this.PerformStart(this.currentDistanceX);
     this.AttachPreventEvents(evt);
    }
   }
   else
    this.tryStartScrolling = true;
  }
  if(this.animationTween) {
   if(this.allowComplete && !this.allowComplete(this.currentDistanceX)) 
    this.currentDistanceX = this.GetRubberPosition(this.currentDistanceX);
   this.animationTween.SetValue(this.currentDistanceX);
  }
  if(!this.tryStartScrolling && !ASPxClientTouchUI.isGesture && evt.touches && evt.touches.length < 2)
   _aspxPreventEvent(evt);
 },
 OnMouseUp: function(evt) {
  if(!this.animationTween) {
   if(this.tryStartGesture)
    this.PerformCancel(this.currentDistanceX);
  }
  else{
   if(Math.abs(this.currentDistanceX) < this.GetDistanceLimit()) 
    this.RollbackGesture();
   else {
    if(this.IsCompleteAllowed(this.currentDistanceX)) {
     this.PerformComplete(this.currentDistanceX);
     this.animationContainer = null;
     this.animationTween = null;
    }
    else
     this.RollbackGesture();
   }
  }
  this.DetachPreventEvents();
  this.tryStartGesture = false;
  this.tryStartScrolling = false;
 },
 PerformStart: function(value) {
  if(this.start)
   this.start(value);
 },
 IsCompleteAllowed: function(value) {
  return !this.allowComplete || this.allowComplete(value);
 },
 PerformComplete: function(value) {
  if(this.complete)
   this.complete(value);
 },
 PerformCancel: function(value) {
  if(this.cancel)
   this.cancel(value);
 },
 RollbackGesture: function() {
  this.animationTween.Start(this.currentDistanceX, 0);
 },
 GetContainerElement: function () {
  return this.animationContainer;
 }
});
var __aspxNotSetAlignIndicator = "NotSet";
var __aspxInnerAlignIndicator = "Sides";
var __aspxOutsideLeftAlignIndicator = "OutsideLeft";
var __aspxLeftSidesAlignIndicator = "LeftSides";
var __aspxRightSidesAlignIndicator = "RightSides";
var __aspxOutsideRightAlignIndicator = "OutsideRight";
var __aspxCenterAlignIndicator = "Center";
function _aspxIsAlignNotSet(align){
 return align == __aspxNotSetAlignIndicator;
}
function _aspxIsInnerAlign(align){
 return align.indexOf(__aspxInnerAlignIndicator) != -1;
}
function _aspxIsRightSidesAlign(align) {
 return align == __aspxRightSidesAlignIndicator;
}
function _aspxIsOutsideRightAlign(align) {
 return align == __aspxOutsideRightAlignIndicator;
}
function _aspxIsCenterAlign(align) {
 return align == __aspxCenterAlignIndicator;
}
function _aspxIsOuterAlign(align){
 return (!this.IsInnerAlign(align)) && (!_aspxIsAlignNotSet(align));
}
function _aspxPopupPosition(position, isInverted){
 this.position = position;
 this.isInverted = isInverted;
}
function _aspxSegment(pos, len){
 this.pos = pos;
 this.len = len;
}
function _aspxRect(left, top, width, height){
 this.left = left;
 this.top = top;
 this.width = width;
 this.height = height;
}
function _aspxSize(width, height){
 this.width = width;
 this.height = height;
}
function _aspxFindPopupElementById(id){
 if(id == "") return null; 
 var popupElement = _aspxGetElementById(id);
 if(!_aspxIsExistsElement(popupElement)){
  var idParts = id.split("_");
  var uniqueId = idParts.join("$");
  popupElement = _aspxGetElementById(uniqueId);
 }
 return popupElement;
}
function _aspxFindEventSourceParentByTestFunc(evt, testFunc){
 return _aspxFindParentByTestFunc(_aspxGetEventSource(evt), testFunc);
}
function _aspxPreventContextMenu(evt){
 if (__aspxWebKitFamily){
  if(evt.stopPropagation)
   evt.stopPropagation();
  evt.returnValue = false;
  if(evt.preventDefault)
   evt.preventDefault();
 } else if (__aspxNetscapeFamily || (__aspxIE && __aspxBrowserVersion > 8))
  evt.preventDefault();
}
function _aspxIsExistsAbsolutePosParent(element){
 return _aspxIsExistsParentWithSpecPosition(element, ["absolute"]);
}
function _aspxIsExistsAbsoluteOrRelativePosParent(element){
 return _aspxIsExistsParentWithSpecPosition(element, ["absolute", "relative"]);
}
function _aspxIsExistsParentWithSpecPosition(element, positions){
 var curEl = element.offsetParent;
 while(curEl != null) {
  for(var i = 0; i < positions.length; i ++){
   if (_aspxGetCurrentStyle(curEl).position == positions[i])
    return true;
  }
  curEl = curEl.offsetParent;
 }
 return false;
}
function _aspxGetDocumentClientWidthForPopup(){
 return (__aspxWebKitTouchUI ? _aspxGetDocumentWidth() : _aspxGetDocumentClientWidth()); 
}
function _aspxAdjustPositionToClientScreen(element, shadowSize, pos, isX){
 var min = isX ? _aspxGetDocumentScrollLeft() : _aspxGetDocumentScrollTop();
 var documentClientWidth = _aspxGetDocumentClientWidthForPopup();
 var max = min + (isX ? documentClientWidth : _aspxGetDocumentClientHeight());
 max -= (isX ? element.offsetWidth + shadowSize : element.offsetHeight + shadowSize);
 if (pos > max) pos = max;
 if (pos < min) pos = min;
 return pos;
}
function _aspxGetPopupAbsoluteX(element, shadowWidth, popupElement, hAlign, hOffset, x, left, rtl, isPopupFullCorrectionOn){
 var width = element.offsetWidth;
 var bodyWidth = _aspxGetDocumentClientWidth();
 var elementX = _aspxGetAbsoluteX(popupElement);
 var scrollX = _aspxGetDocumentScrollLeft();
 if (hAlign == "WindowCenter"){
  var showAtPos = x != __aspxInvalidPosition && !popupElement;
  if(showAtPos)
   hAlign = "";
  else
   return new _aspxPopupPosition(Math.ceil((__aspxWebKitTouchUI ? window.innerWidth : bodyWidth) / 2 - width / 2) + scrollX + hOffset, false);
 }
 if (popupElement) {
  var leftX = elementX - width;
  var rightX = elementX + popupElement.offsetWidth;
  var innerLeftX = elementX;
  var innerRightX = elementX + popupElement.offsetWidth - width;
  var isMoreFreeSpaceLeft = bodyWidth - (rightX + width) < leftX - 2 * scrollX;
 }
 else
  hAlign = "";
 var isInverted = false; 
 if (hAlign == __aspxOutsideLeftAlignIndicator){
  isInverted = isPopupFullCorrectionOn && (!(leftX - scrollX > 0 || isMoreFreeSpaceLeft));
  if(isInverted)
   x = rightX - hOffset;
  else
   x = leftX + hOffset;
 }
 else if (hAlign == __aspxLeftSidesAlignIndicator){
  x =  innerLeftX + hOffset;
  if (isPopupFullCorrectionOn)
   x = _aspxAdjustPositionToClientScreen(element, shadowWidth, x, true);
 }
 else if (hAlign == __aspxCenterAlignIndicator){
  x =  elementX + Math.round((popupElement.offsetWidth  - width) / 2) + hOffset;
 }
 else if (hAlign == __aspxRightSidesAlignIndicator){
  x = innerRightX + hOffset;
  if (isPopupFullCorrectionOn)
   x = _aspxAdjustPositionToClientScreen(element, shadowWidth, x, true);
 }
 else if (hAlign == __aspxOutsideRightAlignIndicator){
  isInverted = isPopupFullCorrectionOn && (!(rightX + width < bodyWidth + scrollX || !isMoreFreeSpaceLeft));
  if(isInverted)
   x = leftX - hOffset;
  else
   x = rightX + hOffset;
 }
 else{
  if(rtl){
   if(!_aspxGetIsValidPosition(x)) {
    if(popupElement)
     x = innerRightX;
    else if(hOffset)
     x = 0;
    else
     x = left;
   }
   else
    x -= width;
   isInverted = isPopupFullCorrectionOn && (x < scrollX && x - scrollX < bodyWidth / 2);
   if(isInverted)
    x = x + width + hOffset;
   else
    x = x - hOffset;
  } else {
   if (!_aspxGetIsValidPosition(x)) {
    if(popupElement)
     x = elementX;
    else if(hOffset)
     x = 0;
    else
     x = left;
   }
   isInverted = isPopupFullCorrectionOn && (x - scrollX + width > bodyWidth && x - scrollX > bodyWidth / 2);
   if(isInverted)
    x = x - width - hOffset;
   else
    x = x + hOffset;
  }
 }
 return new _aspxPopupPosition(x, isInverted);
}
function _aspxGetPopupAbsoluteY(element, shadowHeight, popupElement, vAlign, vOffset, y, top, isPopupFullCorrectionOn){
 var height = element.offsetHeight;
 var bodyHeight = _aspxGetDocumentClientHeight(); 
 var elementY = _aspxGetAbsoluteY(popupElement);
 var scrollY = _aspxGetDocumentScrollTop();
 if (vAlign == "WindowCenter"){
  var showAtPos = y != __aspxInvalidPosition && !popupElement;
  if(showAtPos)
   hAlign = "";
  else
   return new _aspxPopupPosition(Math.ceil((__aspxWebKitTouchUI ? window.innerHeight : bodyHeight) / 2 - height / 2) + scrollY + vOffset, false);
 }
 if (popupElement) {
  var bottomY = elementY + popupElement.offsetHeight;
  var topY = elementY - height;
  var innerBottomY = elementY + popupElement.offsetHeight - height;
  var innerTopY = elementY;
  var isMoreFreeSpaceAbove = bodyHeight - (bottomY + height) < topY - 2 * scrollY;
 }
 else
  vAlign = "";
 var isInverted = false;
 if (vAlign == "Above"){
  isInverted = isPopupFullCorrectionOn && (!(topY - scrollY > 0 || isMoreFreeSpaceAbove));
  if(isInverted)
   y = bottomY - vOffset;
  else
   y = topY + vOffset;
 }
 else if (vAlign == "TopSides"){
  y = innerTopY + vOffset;
  if (isPopupFullCorrectionOn)
   y = _aspxAdjustPositionToClientScreen(element, shadowHeight, y, false);
 }
 else if (vAlign == "Middle"){
  y =  elementY + Math.round((popupElement.offsetHeight  - height) / 2) + vOffset;
 }
 else if (vAlign == "BottomSides"){
  y = innerBottomY + vOffset;
  if (isPopupFullCorrectionOn)
   y = _aspxAdjustPositionToClientScreen(element, shadowHeight, y, false);
 }
 else if (vAlign == "Below"){
  isInverted = isPopupFullCorrectionOn && (!(bottomY + height < bodyHeight + scrollY || !isMoreFreeSpaceAbove));
  if(isInverted)
   y = topY - vOffset;
  else
   y = bottomY + vOffset;
 }
 else{
  if (!_aspxGetIsValidPosition(y)) {
   if (popupElement)
    y = _aspxGetAbsoluteY(popupElement);
   else if(vOffset)
    y = 0;
   else
    y = top;
  }
  isInverted = isPopupFullCorrectionOn && (y - _aspxGetDocumentScrollTop() + height > bodyHeight && y - _aspxGetDocumentScrollTop() > bodyHeight / 2);
  if(isInverted)
   y = y - height - vOffset;
  else
   y = y + vOffset;
 }
 return new _aspxPopupPosition(y, isInverted);
}
function _aspxRemoveFocus(parent){
 var div = document.createElement('div');
 div.tabIndex = "-1";
 _aspxConcealDivElement(div);
 parent.appendChild(div);
 if(_aspxIsFocusable(div))
  div.focus();
 _aspxRemoveElement(div);
} 
function _aspxConcealDivElement(div){
 div.style.position = "absolute";
 div.style.left = 0;
 div.style.top = 0;
 if(__aspxWebKitFamily) {
    div.style.opacity = 0;
    div.style.width = 1;
    div.style.height = 1;
 } else {
  div.style.border = 0;
  div.style.width = 0;
  div.style.height = 0;
   }
}
function _aspxInitAnimationDiv(element, x, y, onAnimStopCallString, skipSizeInit) {
 element.popuping = true;
 element.onAnimStopCallString = onAnimStopCallString;
 var popupInOldIe = __aspxIE && __aspxBrowserVersion < 8 && element.tagName == "TABLE";
 if (popupInOldIe) {
  var mainDiv = _aspxGetDescendantNodesByClassName(element, "dxpc-mainDiv")[0];
  var animationWrapper = _aspxGetDescendantNodesByClassName(element, "dxpc-animationWrapper")[0];
  mainDiv.style.position = "relative";
  animationWrapper.style.overflow = "hidden";
  animationWrapper.style.position = "relative";
 }
 element.style.overflow = "hidden";
 element.style.position = "absolute";
 if (!skipSizeInit)
  _aspxSetStyles(element, { width: element.offsetWidth, height: element.offsetHeight });
 _aspxSetStyles(element, { left: x, top: y });
}
function _aspxStartSlideAnimation(animationDivElement, element, iframeElement, duration) {
 if (iframeElement) {
  var endLeft = _aspxPxToInt(iframeElement.style.left);
  var endTop = _aspxPxToInt(iframeElement.style.top);
  var startLeft = _aspxPxToInt(element.style.left) < 0 ? endLeft : animationDivElement.offsetLeft + animationDivElement.offsetWidth;
  var startTop = _aspxPxToInt(element.style.top) < 0 ? endTop : animationDivElement.offsetTop + animationDivElement.offsetHeight;
  ASPxAnimationHelper.createMultipleAnimationTransition(iframeElement, {
   duration: duration
  }).Start({
   left: { from: startLeft, to: endLeft, unit: "px" },
   top: { from: startTop, to: endTop, unit: "px" },
   width: { to: element.offsetWidth, unit: "px" },
   height: { to: element.offsetHeight, unit: "px" }
  });
 }
 ASPxAnimationHelper.createMultipleAnimationTransition(element, {
  duration: duration,
  onComplete: function () { _aspxAnimationFinished(animationDivElement); }
 }).Start({
  left: { to: 0, unit: "px" },
  top: { to: 0, unit: "px" }
 });
}
function _aspxAnimationFinished(element){
 if(_aspxStopAnimation(element) && _aspxIsExists(element.onAnimStopCallString) && 
  element.onAnimStopCallString !== ""){
  window.setTimeout(element.onAnimStopCallString, 0);
 }
}
function _aspxStopAnimation(element){
 if (element.popuping) {
  ASPxAnimationHelper.cancelAnimation(element);
  element.popuping = false;
  element.style.overflow = "visible";
  var popupInOldIe = __aspxIE && __aspxBrowserVersion < 8 && element.tagName == "TABLE";
  if (popupInOldIe) {
   var mainDiv = _aspxGetDescendantNodesByClassName(element, "dxpc-mainDiv")[0];
   var animationWrapper = _aspxGetDescendantNodesByClassName(element, "dxpc-animationWrapper")[0];
   mainDiv.style.position = "static";
   animationWrapper.style.overflow = "visible";
   animationWrapper.style.position = "static";
  }
  return true;
 }
 return false;
}
function _aspxGetAnimationHorizontalDirection(popupPosition, horizontalAlign, verticalAlign, rtl){
 if (_aspxIsInnerAlign(horizontalAlign) 
  && !_aspxIsInnerAlign(verticalAlign) 
  && !_aspxIsAlignNotSet(verticalAlign))
  return 0;
 var toTheLeft = (horizontalAlign == "OutsideLeft" || horizontalAlign == "RightSides" || (horizontalAlign == "NotSet" && rtl)) ^ popupPosition.isInverted;
 return toTheLeft ? 1 : -1;
}
function _aspxGetAnimationVerticalDirection(popupPosition, horizontalAlign, verticalAlign){
 if (_aspxIsInnerAlign(verticalAlign) 
  && !_aspxIsInnerAlign(horizontalAlign) 
  && !_aspxIsAlignNotSet(horizontalAlign))
  return 0;
 var toTheTop = (verticalAlign == "Above" || verticalAlign == "BottomSides") ^ popupPosition.isInverted;
 return toTheTop ? 1 : -1;
}
function _aspxIsVerticalScrollExists() {
 return _aspxGetDocumentHeight() > _aspxGetDocumentClientHeight() || __aspxIE && __aspxBrowserVersion < 8;
}
var _aspxBodyScrollHelper = (function () {
 var hideBodyScrollCount = 0;
 function fixScrollsBug() {
  var scrollTop = document.body.scrollTop;
  var scrollLeft = document.body.scrollLeft;
  document.body.scrollTop ++;
  document.body.scrollTop --;
  document.body.scrollLeft ++;
  document.body.scrollLeft --;
  document.body.scrollLeft = scrollLeft;
  document.body.scrollTop = scrollTop;
 }
 return {
  HideBodyScroll: function() {
   hideBodyScrollCount++;
   if(hideBodyScrollCount > 1) 
    return;
   if(__aspxIE) {
    _aspxChangeAttribute(document.body, "scroll", "no");
    _aspxChangeStyleAttribute(document.documentElement, "overflow", "hidden");
   } else if(__aspxFirefox && __aspxBrowserVersion < 3) { 
    var scrollTop = document.documentElement.scrollTop;
    _aspxChangeStyleAttribute(document.body, "overflow", "hidden");
    document.documentElement.scrollTop = scrollTop;
   } else {
    _aspxChangeStyleAttribute(document.documentElement, "overflow", "hidden");
    var documentHeight = _aspxGetDocumentHeight();
    var documentWidth = _aspxGetDocumentWidth();
    if(window.pageYOffset > 0 && _aspxPxToInt(window.getComputedStyle(document.body, null)) != documentHeight)
     _aspxChangeStyleAttribute(document.body, "height", documentHeight + "px");
    if(window.pageXOffset > 0 && _aspxPxToInt(window.getComputedStyle(document.body, null)) != documentWidth)
     _aspxChangeStyleAttribute(document.body, "width", documentWidth + "px");
    if(__aspxChrome) {
     fixScrollsBug();
    } 
   }
   if(_aspxIsVerticalScrollExists())
    _aspxChangeStyleAttribute(document.body, "margin-right", _aspxGetVerticalScrollBarWidth() + "px");
   if(__aspxIE && __aspxBrowserVersion == 7)
    _aspxWindowResizedByBodyScrollToggle();
  },
  RestoreBodyScroll: function() {
   hideBodyScrollCount--;
   if(hideBodyScrollCount > 0) 
    return;
   if(__aspxIE) {
    _aspxRestoreAttribute(document.body, "scroll");
    _aspxRestoreStyleAttribute(document.documentElement, "overflow");
   } else {
    _aspxRestoreStyleAttribute(document.documentElement, "overflow");
   }
   _aspxRestoreStyleAttribute(document.body, "margin-right");
   _aspxRestoreStyleAttribute(document.body, "height");
   _aspxRestoreStyleAttribute(document.body, "width");
   if(__aspxWebKitFamily) { 
    fixScrollsBug();
   }
   if(__aspxIE && __aspxBrowserVersion == 7)
    _aspxWindowResizedByBodyScrollToggle();
  }
 }
})();
function _aspxWindowResizedByBodyScrollToggle() { 
 if(aspxGetPopupControlCollection)
  aspxGetPopupControlCollection().LockWindowResizeByBodyScrollVisibilityChanging();
 var docWidth = document.documentElement.clientWidth; 
 if(aspxGetPopupControlCollection)
  aspxGetPopupControlCollection().UnlockWindowResizeByBodyScrollVisibilityChanging();
}
function _aspxCoordinatesInDocumentRect(x, y){
 var docScrollLeft = _aspxGetDocumentScrollLeft();
 var docScrollTop = _aspxGetDocumentScrollTop();
 return (x > docScrollLeft && y > docScrollTop && 
  x < _aspxGetDocumentClientWidth() + docScrollLeft && 
  y < _aspxGetDocumentClientHeight() + docScrollTop);
}
function _aspxGetElementZIndexArray(element){  
 var currentElement = element;
 var zIndexesArray = [0];
 while(currentElement && currentElement.tagName != "BODY") {
  if(currentElement.style) {
   if(typeof(currentElement.style.zIndex) != "undefined" && currentElement.style.zIndex != "")
    zIndexesArray.unshift(currentElement.style.zIndex);
  }
  currentElement = currentElement.parentNode;
 }
 return zIndexesArray;   
}
function _aspxIsHigher(higherZIndexArrat, zIndexArray){
 if (zIndexArray == null) return true;
 var count = (higherZIndexArrat.length >= zIndexArray.length) ? higherZIndexArrat.length : zIndexArray.length;
 for (var i = 0; i < count; i++) 
    if(typeof(higherZIndexArrat[i]) != "undefined" && typeof(zIndexArray[i]) != "undefined"){
     var higherZIndexArrayCurrentElement = parseInt(higherZIndexArrat[i].toString());
     var zIndexArrayCurrentElement = parseInt(zIndexArray[i].toString());
     if(higherZIndexArrayCurrentElement != zIndexArrayCurrentElement)
      return higherZIndexArrayCurrentElement > zIndexArrayCurrentElement;
    } else return typeof(zIndexArray[i]) == "undefined";  
 return true;   
}
function _aspxTestIsPopupElement(element) {
 return !!element.DXPopupElementControl;
}
var _aspxClientOverControlUtils = {
 GetPopupElementByEvt: function(evt) {
  return _aspxFindEventSourceParentByTestFunc(evt, _aspxTestIsPopupElement);
 },
 OnMouseEvent: function (evt, mouseOver) {
  var popupElement = _aspxClientOverControlUtils.GetPopupElementByEvt(evt);
  if (mouseOver) 
   popupElement.DXPopupElementControl.OnPopupElementMouseOver(evt, popupElement);
  else 
   popupElement.DXPopupElementControl.OnPopupElementMouseOut(evt, popupElement);
 },
 OnMouseOut: function(evt) {
  _aspxClientOverControlUtils.OnMouseEvent(evt, false);
 },
 OnMouseOver: function(evt) {
  _aspxClientOverControlUtils.OnMouseEvent(evt, true);
 }
}
ASPxScrollingManager = _aspxCreateClass(null, {
 constructor: function(owner, scrollableArea, orientation, onBeforeScrolling, onAfterScrolling, forseEmulation) {
  this.owner = owner;
  this.scrollableArea = scrollableArea;
  this.orientation = orientation;
  this.animationDelay = 1;
  this.animationStep = 2;
  this.animationOffset = 5;
  this.animationAcceleration = 0;
  this.scrollSessionInterval = 10;
  this.stopScrolling = true;
  this.busy = false;
  this.currentAcceleration = 0;
  this.startPos;
  this.onBeforeScrolling = onBeforeScrolling;
  this.onAfterScrolling = onAfterScrolling;
  this.emulationMode = forseEmulation === true || !__aspxTouchUI; 
  this.Initialize();
 },
 Initialize: function(){
  if(__aspxMSTouchUI){
   this.scrollableArea.parentNode.style.overflow = "auto";
   this.scrollableArea.parentNode.style["-ms-overflow-style"] = "-ms-autohiding-scrollbar";
  }
  if(this.emulationMode){
   this.wrapper = new ASPxScrollingManager.scrollWrapper(this.scrollableArea);
  } else {
   this.wrapper = new ASPxScrollingManager.scrollWrapperTouchUI(this.scrollableArea, function(direction){
    if(this.onAfterScrolling)
     this.onAfterScrolling(this, direction);
   }.aspxBind(this)); 
  }
 },
 GetScrolledAreaPosition: function() {
  return this.wrapper.GetScrollLeft() * this.orientation[0]
   + this.wrapper.GetScrollTop() * this.orientation[1];
 },
 SetScrolledAreaPosition: function(pos) {
  this.wrapper.SetScrollLeft(pos * this.orientation[0]);
  this.wrapper.SetScrollTop(pos * this.orientation[1]);
 },
 PrepareForScrollAnimation: function() {
  if(!this.scrollableArea)
   return;  
  this.currentAcceleration = 0;
  this.startPos = this.GetScrolledAreaPosition();
  this.busy = false;
 },
 GetAnimationStep: function(dir) {
  var step = dir * (this.animationStep + this.currentAcceleration);
  var newPos = this.GetScrolledAreaPosition() + step;
  var requiredPos = this.startPos + dir * this.animationOffset;
  if((dir == 1 && newPos >= requiredPos) || (dir == -1 && newPos <= requiredPos)) {
   step = requiredPos - this.GetScrolledAreaPosition();
  } 
  return step;
 },
 DoScrollSessionAnimation: function(direction) {
  if(!this.scrollableArea)
   return;
  this.SetScrolledAreaPosition(this.GetScrolledAreaPosition() + this.GetAnimationStep(direction));
  var self = this;
  if(!this.ShouldStopScrollSessionAnimation()) {
   this.busy = true;
   this.currentAcceleration += this.animationAcceleration;
   _aspxSetTimeout(function() { self.DoScrollSessionAnimation(direction); }, this.animationDelay);
  } else {
   if(this.onAfterScrolling)
    this.onAfterScrolling(this, -direction);   
   this.busy = false;
   this.currentAcceleration = 0;
   _aspxSetTimeout(function() { self.DoScroll(direction); }, this.scrollSessionInterval);
  }    
 },
 ShouldStopScrollSessionAnimation: function() {
  return (Math.abs(this.GetScrolledAreaPosition() - this.startPos) >= Math.abs(this.animationOffset));
 },
 DoScroll: function(direction) {
  if(!this.scrollableArea)
   return; 
  if(!this.busy && !this.stopScrolling) {
   if(this.onBeforeScrolling)
    this.onBeforeScrolling(this, -direction);
   if(this.stopScrolling) return;
   this.PrepareForScrollAnimation();
   this.DoScrollSessionAnimation(direction);
  } 
 },
 StartScrolling: function(direction, delay, step) {
  this.stopScrolling = false;
  this.animationDelay = delay;
  this.animationStep = step;
  this.DoScroll(-direction);
 },
 StopScrolling: function() {
  this.stopScrolling = true;
 },
 IsStopped: function() {
  return this.stopScrolling;
 }
});
(function(){
 ASPxScrollingManager.scrollWrapper = function(scrollableArea){
  this.scrollableArea = scrollableArea;
  this.Initialize();
 };
 ASPxScrollingManager.scrollWrapper.prototype = {
  Initialize: function(){
   this.scrollableArea.style.position = "relative";
   this.scrollableArea.parentNode.style.position = "relative";
  },
  GetScrollLeft: function(){ return _aspxPxToFloat(this.scrollableArea.style.left); },
  GetScrollTop:  function(){ return _aspxPxToFloat(this.scrollableArea.style.top); },
  SetScrollLeft: function(value){ this.scrollableArea.style.left = value + "px"; },
  SetScrollTop:  function(value){ this.scrollableArea.style.top  = value + "px"; }
 };
 ASPxScrollingManager.scrollWrapperTouchUI = function(scrollableArea, onScroll){
  this.scrollableArea = scrollableArea;
  this.scrollTimerId = -1;
  this.onScroll = onScroll;
  this.Initialize(onScroll);
 };
 ASPxScrollingManager.scrollWrapperTouchUI.prototype = {
  Initialize: function(){
   var div = this.scrollableArea.parentNode;
   var timeout = __aspxMSTouchUI ? 500 : 1000;
   var nativeScrollSupported = __aspxMSTouchUI || ASPxClientTouchUI.nativeWebKitScrollingSupported();
   this.onScrollCore = function(){
     _aspxClearTimer(this.scrollTimerId);
     if(this.onScrollLocked) return;
     this.scrollTimerId = window.setTimeout(this.onScrollByTimer, timeout);
    }.aspxBind(this);
   this.onScrollByTimer = function(){
     if(this.onScrollLocked) return;
     var direction = this.lastScrollTop < div.scrollTop ? 1 : -1;
     this.lastScrollTop = div.scrollTop;
     this.onScrollLocked = true;
     this.onScroll(direction);
     this.onScrollLocked = false;
    }.aspxBind(this);
   this.lastScrollTop = div.scrollTop;
   var onscroll = nativeScrollSupported ? this.onScrollCore : this.onScrollByTimer;
   _aspxAttachEventToElement(div, "scroll", onscroll);
   if(__aspxWebKitTouchUI)
    this.scrollExtender = ASPxClientTouchUI.MakeScrollable(div, {showHorizontalScrollbar: false});
  },
  GetScrollLeft: function(){ return -this.scrollableArea.parentNode.scrollLeft; },
  GetScrollTop:  function(){ return -this.scrollableArea.parentNode.scrollTop; },
  SetScrollLeft: function(value){ 
   this.onScrollLocked = true;
   this.scrollableArea.parentNode.scrollLeft = -value; 
   this.onScrollLocked = false;
  },
  SetScrollTop:  function(value){ 
   this.onScrollLocked = true;
   this.scrollableArea.parentNode.scrollTop  = -value; 
   this.onScrollLocked = false;
  }
 };
})();
var __aspxMIIdSuffix = "_DXI";
var __aspxMMIdSuffix = "_DXM";
var __aspxSBIdSuffix = "_DXSB";
var __aspxSBUIdEnd = "_U";
var __aspxSBDIdEnd = "_D";
ASPxClientMenuItemInfo = _aspxCreateClass(null, {
 constructor: function(menu, indexPath){
  var itemElement = menu.GetItemElement(indexPath);
  this.clientHeight = itemElement.clientHeight;
  this.clientWidth = itemElement.clientWidth;
  this.clientTop = _aspxGetClientTop(itemElement);
  this.clientLeft = _aspxGetClientLeft(itemElement);
  this.offsetHeight = itemElement.offsetHeight;
  this.offsetWidth = itemElement.offsetWidth;
  this.offsetTop = 0;
  this.offsetLeft = 0;
 }
});
ASPxClientMenuCssClasses = {};
ASPxClientMenuCssClasses.Prefix = "dxm-";
ASPxClientMenuCssClasses.Menu = "dxmLite";
ASPxClientMenuCssClasses.BorderCorrector = "dxmBrdCor";
ASPxClientMenuCssClasses.Disabled = ASPxClientMenuCssClasses.Prefix + "disabled";
ASPxClientMenuCssClasses.MainMenu = ASPxClientMenuCssClasses.Prefix + "main";
ASPxClientMenuCssClasses.PopupMenu = ASPxClientMenuCssClasses.Prefix + "popup";
ASPxClientMenuCssClasses.IE7 = ASPxClientMenuCssClasses.Prefix + "ie7";
ASPxClientMenuCssClasses.HorizontalMenu = ASPxClientMenuCssClasses.Prefix + "horizontal";
ASPxClientMenuCssClasses.VerticalMenu = ASPxClientMenuCssClasses.Prefix + "vertical";
ASPxClientMenuCssClasses.NoWrapMenu = ASPxClientMenuCssClasses.Prefix + "noWrap";
ASPxClientMenuCssClasses.AutoWidthMenu = ASPxClientMenuCssClasses.Prefix + "autoWidth";
ASPxClientMenuCssClasses.DX = "dx";
ASPxClientMenuCssClasses.Separator = ASPxClientMenuCssClasses.Prefix + "separator";
ASPxClientMenuCssClasses.Spacing = ASPxClientMenuCssClasses.Prefix + "spacing";
ASPxClientMenuCssClasses.Gutter = ASPxClientMenuCssClasses.Prefix + "gutter";
ASPxClientMenuCssClasses.WithoutImages = ASPxClientMenuCssClasses.Prefix + "noImages";
ASPxClientMenuCssClasses.Item = ASPxClientMenuCssClasses.Prefix + "item";
ASPxClientMenuCssClasses.ItemHovered = ASPxClientMenuCssClasses.Prefix + "hovered";
ASPxClientMenuCssClasses.ItemSelected = ASPxClientMenuCssClasses.Prefix + "selected";
ASPxClientMenuCssClasses.ItemChecked = ASPxClientMenuCssClasses.Prefix + "checked";
ASPxClientMenuCssClasses.ItemWithoutImage = ASPxClientMenuCssClasses.Prefix + "noImage";
ASPxClientMenuCssClasses.ItemWithSubMenu = ASPxClientMenuCssClasses.Prefix + "subMenu";
ASPxClientMenuCssClasses.ItemDropDownMode = ASPxClientMenuCssClasses.Prefix + "dropDownMode";
ASPxClientMenuCssClasses.ItemWithoutSubMenu = ASPxClientMenuCssClasses.Prefix + "noPopOut";
ASPxClientMenuCssClasses.ContentContainer = ASPxClientMenuCssClasses.Prefix + "content";
ASPxClientMenuCssClasses.Image = ASPxClientMenuCssClasses.Prefix + "image";
ASPxClientMenuCssClasses.PopOutContainer = ASPxClientMenuCssClasses.Prefix + "popOut";
ASPxClientMenuCssClasses.PopOutImage = ASPxClientMenuCssClasses.Prefix + "pImage";
ASPxClientMenuCssClasses.ImageLeft = ASPxClientMenuCssClasses.Prefix + "image-l";
ASPxClientMenuCssClasses.ImageRight = ASPxClientMenuCssClasses.Prefix + "image-r";
ASPxClientMenuCssClasses.ImageTop = ASPxClientMenuCssClasses.Prefix + "image-t";
ASPxClientMenuCssClasses.ImageBottom = ASPxClientMenuCssClasses.Prefix + "image-b";
ASPxClientMenuCssClasses.ScrollArea = ASPxClientMenuCssClasses.Prefix + "scrollArea";
ASPxClientMenuCssClasses.ScrollUpButton = ASPxClientMenuCssClasses.Prefix + "scrollUpBtn";
ASPxClientMenuCssClasses.ScrollDownButton = ASPxClientMenuCssClasses.Prefix + "scrollDownBtn";
ASPxClientMenuLiteRenderHelper = {};
ASPxClientMenuLiteRenderHelper.InlineInitializeElements = function(menu) {
 if(!menu.isPopupMenu)
  this.InlineInitializeMainMenuElements(menu, menu.GetMainElement());
 var commonContainer = menu.GetMainElement().parentNode;
 var subMenuElements = this.GetNodesByTagName(commonContainer, "DIV");
 for(var i = 0; i < subMenuElements.length; i++) {
  if(!menu.isPopupMenu && subMenuElements[i] == menu.GetMainElement())
   continue;
  this.InlineInitializeSubMenuElements(menu, subMenuElements[i]);
 }
};
ASPxClientMenuLiteRenderHelper.FindNodes = function(node, match) {
 var result = [];
 for(var i = 0; i < node.childNodes.length; i++) {
  var childNode = node.childNodes[i];
  if(!childNode.tagName)
   continue;
  if(match(childNode))
   result.push(childNode);
 }
 return result;
};
ASPxClientMenuLiteRenderHelper.GetNodesByTagName = function(node, tagName) {
 return this.FindNodes(node, function(childNode) {
  return childNode.tagName == tagName;
 });
};
ASPxClientMenuLiteRenderHelper.GetNodesByClassName = function(node, className) {
 return this.FindNodes(node, function(childNode) {
  return _aspxElementCssClassContains(childNode, className);
 });
};
ASPxClientMenuLiteRenderHelper.GetNodeByClassName = function(node, childNodeClassName) {
 var nodes = this.GetNodesByClassName(node, childNodeClassName);
 return nodes.length > 0 ? nodes[0] : null;
};
ASPxClientMenuLiteRenderHelper.InlineInitializeScrollElements = function(menu, indexPath, menuElement) {
 var scrollArea = this.GetNodeByClassName(menuElement, ASPxClientMenuCssClasses.ScrollArea);
 if(scrollArea) scrollArea.id = menu.GetScrollAreaId(indexPath);
 var scrollUpButton = this.GetNodeByClassName(menuElement, ASPxClientMenuCssClasses.ScrollUpButton);
 if(scrollUpButton) scrollUpButton.id = menu.GetScrollUpButtonId(indexPath);
 var scrollDownButton = this.GetNodeByClassName(menuElement, ASPxClientMenuCssClasses.ScrollDownButton);
 if(scrollDownButton) scrollDownButton.id = menu.GetScrollDownButtonId(indexPath);
};
ASPxClientMenuLiteRenderHelper.InlineInitializeMainMenuElements = function(menu, menuElement) {
 var contentElement = _aspxGetChildByTagName(menuElement, "UL", 0);
 var itemElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Item);
 for(var i = 0; i < itemElements.length; i++)
  this.InlineInitializeItemElement(menu, itemElements[i], "", i);
 this.InlineInitializeScrollElements(menu, "", menuElement);
};
ASPxClientMenuLiteRenderHelper.CalculateMenuElements = function(menu, menuElement) {
 var indexPath = menu.GetMenuIndexPathById(menuElement.id);
 var contentElement = _aspxGetChildByTagName(menuElement, "UL", 0);
 var itemElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Item);
 var isVertical = menu.IsVertical(indexPath);
 ASPxClientMenuLiteRenderHelper.CalculateMinSize(isVertical, menuElement, contentElement, itemElements);
 ASPxClientMenuLiteRenderHelper.CalculateMenuItems(isVertical, menuElement, contentElement, itemElements);
 if(!isVertical)
  ASPxClientMenuLiteRenderHelper.CalculateSeparatorsAndSpacers(menuElement, contentElement);
};
ASPxClientMenuLiteRenderHelper.CalculateMenuItems = function(isVertical, menuElement, contentElement, itemElements) {
 if(menuElement.offsetWidth === 0) return;
 var menuWidth = _aspxGetCurrentStyle(menuElement).width;
 var menuRequireItemCorrection = isVertical && menuWidth;
 for(var i = 0; i < itemElements.length; i++) {
  if(!itemElements[i].style.width && !menuRequireItemCorrection) continue;
  var itemContentElement = itemElements[i].itemContentElement;
  if(!itemContentElement){
   var children = _aspxGetChildNodesByClassName(itemElements[i], ASPxClientMenuCssClasses.ContentContainer);
   itemContentElement = itemElements[i].itemContentElement = (children.length > 0) ? children[0] : null;
  }
  if(!itemContentElement || itemContentElement.offsetWidth === 0) continue;
  if(!itemElements[i].isItemCalculated) {
   if(!isVertical && __aspxIE && __aspxBrowserVersion < 8 && i == itemElements.length - 1)
    itemElements[i].style.width = "";
   _aspxSetElementFloat(itemContentElement, "none");
   var itemContentCurrentStyle = _aspxGetCurrentStyle(itemContentElement);
   if(!isVertical || itemContentCurrentStyle.textAlign != "center") {
    var originalPaddingLeft = parseInt(itemContentCurrentStyle.paddingLeft);
    var originalPaddingRight = parseInt(itemContentCurrentStyle.paddingRight);
    var leftChildrenWidth = 0, rightChildrenWidth = 0;
    for(var j = 0; j < itemElements[i].childNodes.length; j++){
     var child = itemElements[i].childNodes[j];
     if(!child.offsetWidth) continue;
     if(child !== itemContentElement){
      if(_aspxGetElementFloat(child) === "right")
       rightChildrenWidth += child.offsetWidth + _aspxGetLeftRightMargins(child);
      else if(_aspxGetElementFloat(child) === "left")
       leftChildrenWidth += child.offsetWidth + _aspxGetLeftRightMargins(child);
     }
    }
    if(leftChildrenWidth > 0 || rightChildrenWidth > 0) 
     _aspxSetStyles(itemContentElement, {
      paddingLeft: leftChildrenWidth + originalPaddingLeft,
      paddingRight: rightChildrenWidth + originalPaddingRight
     }, true);
   }
   itemElements[i].isItemCalculated = true;
  }
  _aspxAdjustWrappedTextInContainer(itemContentElement);
  var itemContentFound = false;
  for(var j = 0; j < itemElements[i].childNodes.length; j++){
   var child = itemElements[i].childNodes[j];
   if(!child.offsetWidth) continue;
   var contentHeight = itemContentElement.offsetHeight;
   if(child !== itemContentElement){
    if(itemContentFound)
     child.style.marginTop = "-" + contentHeight + "px";
    else 
     child.style.marginBottom = "-" + contentHeight + "px";
   }
   else
    itemContentFound = true;
  }
 }
};
ASPxClientMenuLiteRenderHelper.CalculateSubMenu = function(menu, parentElement, recalculate) {
 if(!parentElement) return;
 var menuElement = menu.GetMenuMainCell(parentElement); 
 var contentElement = this.GetContentElement(menuElement);
 if(__aspxIE && __aspxBrowserVersion < 8) {  
  parentElement.style.width = "";
  parentElement.style.height = "";
  if(parentElement.isSubMenuCalculated)
   menuElement.style.width = "";
  var contentWidth;
  this.ProsessRightFloatElements(contentElement, function(elements) {
   if(menu.rtl)
    ASPxClientMenuLiteRenderHelper.FreezeElementSizes(elements);   
   contentWidth = contentElement.offsetWidth;
  });
  if(contentElement.tagName == "UL") {
   contentElement.style.height = "";
   contentElement.style.height = contentElement.offsetHeight + "px";
  }
  menuElement.style.width = (contentWidth || contentElement.offsetWidth) + "px";
  if(contentElement.style.width !== "")
   contentElement.style.width = menuElement.style.width;   
  var separatorElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Separator);
  for(var i = 0; i < separatorElements.length; i++){
   _aspxChangeStyleAttribute(separatorElements[i], "width", "100%");
   _aspxRestoreStyleAttribute(separatorElements[i], "width");
  }
  parentElement.isSubMenuCalculated = true;
 }
 else {
  if(!parentElement.isSubMenuCalculated || recalculate){
   menuElement.style.width = "";
   menuElement.style.display = "table";
   menuElement.style.borderSpacing = "0px";
   parentElement.isSubMenuCalculated = true;
   if(contentElement.tagName === "UL") {
    if(contentElement.offsetWidth > 0) {
     menuElement.style.width = contentElement.offsetWidth + "px";
     menuElement.style.display = "";
     if(_aspxIsPercentageSize(contentElement.style.width))
      contentElement.style.width = menuElement.style.width;
    }
    else
     parentElement.isSubMenuCalculated = false;
   }
  }
 }
 ASPxClientMenuLiteRenderHelper.CalculateSubMenuItems(menuElement, contentElement);
};
ASPxClientMenuLiteRenderHelper.CalculateSubMenuItems = function(menuElement, contentElement) {
 var itemElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Item);
 ASPxClientMenuLiteRenderHelper.CalculateMenuItems(true, menuElement, contentElement, itemElements);
};
ASPxClientMenuLiteRenderHelper.CalculateMinSize = function(isVertical, menuElement, contentElement, itemElements) {
 if(menuElement.isMinSizeCalculated) return;
 if(isVertical){
  _aspxChangeStyleAttribute(contentElement, "width", "1px");
  for(var i = 0; i < itemElements.length; i++){
   var contentElements = _aspxGetChildNodesByClassName(itemElements[i], ASPxClientMenuCssClasses.ContentContainer);
   if(!contentElements || contentElements.length === 0 || itemElements[i].offsetWidth === 0) continue;
   ASPxClientMenuLiteRenderHelper.CalculateItemMinSize(itemElements[i]);
  }
  _aspxRestoreStyleAttribute(contentElement, "width");
 }
 else {
  var isAutoWidth = menuElement.className.indexOf(ASPxClientMenuCssClasses.AutoWidthMenu) > -1;
  var noWrap = menuElement.className.indexOf(ASPxClientMenuCssClasses.NoWrapMenu) > -1;
  menuElement.className = menuElement.className.replace(ASPxClientMenuCssClasses.NoWrapMenu, "");
  menuElement.className = menuElement.className.replace(ASPxClientMenuCssClasses.AutoWidthMenu, "");
  _aspxChangeStyleAttribute(menuElement, "width", "1px");
  for(var i = 0; i < itemElements.length; i++){
   var contentElements = _aspxGetChildNodesByClassName(itemElements[i], ASPxClientMenuCssClasses.ContentContainer);
   if(!contentElements || contentElements.length === 0 || itemElements[i].offsetWidth === 0) continue;
   var textContainer = _aspxGetChildByTagName(contentElements[0], "SPAN", 0);
   if(textContainer && _aspxGetCurrentStyle(textContainer).whiteSpace !== "nowrap") 
    _aspxAdjustWrappedTextInContainer(contentElements[0]);
   ASPxClientMenuLiteRenderHelper.CalculateItemMinSize(itemElements[i]);
  }
  if(isAutoWidth)
   menuElement.className += " " + ASPxClientMenuCssClasses.AutoWidthMenu;
  if(noWrap)
   menuElement.className += " " + ASPxClientMenuCssClasses.NoWrapMenu;
  if(isAutoWidth || noWrap)
   menuElement.style.minWidth = (contentElement.offsetWidth + _aspxGetLeftRightBordersAndPaddingsSummaryValue(menuElement)) + "px";
  _aspxRestoreStyleAttribute(menuElement, "width");
 }
 menuElement.isMinSizeCalculated = true;
};
ASPxClientMenuLiteRenderHelper.CalculateItemMinSize = function(itemElement) {
 var sizeCorrection = (__aspxIE && __aspxBrowserVersion > 8) ? 1 : 0;
 itemElement.style.minWidth = "";
 var childrenWidth = 0;
 for(var j = 0; j < itemElement.childNodes.length; j++){
  var child = itemElement.childNodes[j];
  if(!child.offsetWidth) continue;
  var float = _aspxGetElementFloat(child);
  if(float === "none"){
   childrenWidth = child.offsetWidth;
   break;
  }
  else
   childrenWidth += child.offsetWidth;
 }
 itemElement.style.minWidth = (childrenWidth + sizeCorrection) + "px";
};
ASPxClientMenuLiteRenderHelper.CalculateSeparatorsAndSpacers = function(menuElement, contentElement) {
 var spacerElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Spacing);
 var spacerAndSeparatorElements = spacerElements.concat(this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Separator));
 for(var i = 0; i < spacerAndSeparatorElements.length; i++)
  spacerAndSeparatorElements[i].style.height = "";
 var isAutoWidth = menuElement.className.indexOf(ASPxClientMenuCssClasses.AutoWidthMenu) > -1;
 var noWrap = menuElement.className.indexOf(ASPxClientMenuCssClasses.NoWrapMenu) > -1;
 var menuHeight = contentElement.clientHeight;
 if(!isAutoWidth && !noWrap){
  _aspxChangeStyleAttribute(contentElement, "width", "10000px");
  menuHeight = contentElement.clientHeight;
  _aspxRestoreStyleAttribute(contentElement, "width");
 }
 for(var i = 0; i < spacerAndSeparatorElements.length; i++)
  spacerAndSeparatorElements[i].style.height = (menuHeight - _aspxGetTopBottomBordersAndPaddingsSummaryValue(spacerAndSeparatorElements[i]) - _aspxGetTopBottomMargins(spacerAndSeparatorElements[i])) + "px";
 for(var i = 0; i < spacerElements.length; i++)
  spacerElements[i].style.minWidth = spacerElements[i].style.width; 
};
ASPxClientMenuLiteRenderHelper.ProsessRightFloatElements = function(contentElement, action) {
 var raw = _aspxGetChildrenByPartialClassName(contentElement, ASPxClientMenuCssClasses.Prefix).concat([ contentElement ]);
 var list = [ ];
 for(var i = 0; i < raw.length; i++) {
  if(raw[i].offsetWidth < 1 || _aspxGetElementFloat(raw[i]) != "right")
   continue;
  list.push(raw[i]);
 }
 var directionChanged;
 if(contentElement.className == ASPxClientMenuCssClasses.DX && 
  contentElement.tagName.toUpperCase() == "DIV" && _aspxGetElementDirection(contentElement) == "rtl") {
  _aspxSetElementDirection(contentElement, "ltr");
  directionChanged = true;
 }
 for(var i = 0; i < list.length; i++)  
  _aspxSetElementFloat(list[i], "left");   
 action(list);
 for(var i = 0; i < list.length; i++)
  _aspxSetElementFloat(list[i], "");
 if(directionChanged)
  _aspxSetElementDirection(contentElement, "rtl");
};
ASPxClientMenuLiteRenderHelper.FreezeElementSizes = function(elements) {
 for(var i = 0; i < elements.length; i++)
  elements[i].style.width = elements[i].offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(elements[i]) + "px";
};
ASPxClientMenuLiteRenderHelper.InlineInitializeSubMenuElements = function(menu, parentElement) {
 parentElement.style.position = "absolute";
 var indexPath = menu.GetMenuIndexPathById(parentElement.id);
 var borderCorrectorElement = this.GetNodeByClassName(parentElement, ASPxClientMenuCssClasses.BorderCorrector);
 if(borderCorrectorElement != null) {
  borderCorrectorElement.id = menu.GetMenuBorderCorrectorElementId(indexPath);
  borderCorrectorElement.style.position = "absolute";
  parentElement.removeChild(borderCorrectorElement);
  parentElement.parentNode.appendChild(borderCorrectorElement);
 }
 this.InlineInitializeSubMenuMenuElement(menu, parentElement);
};
ASPxClientMenuLiteRenderHelper.InlineInitializeSubMenuMenuElement = function(menu, parentElement) {
 var menuElement = this.GetNodeByClassName(parentElement, ASPxClientMenuCssClasses.PopupMenu);
 var indexPath = menu.GetMenuIndexPathById(parentElement.id);
 menuElement.id = menu.GetMenuMainElementId(indexPath);
 var contentElement = _aspxGetChildByTagName(menuElement, "UL", 0); 
 if(contentElement != null) {
  var itemElements = this.GetNodesByClassName(contentElement, ASPxClientMenuCssClasses.Item);
  var parentIndexPath = parentElement == menu.GetMainElement() ? "" : indexPath;
  for(var i = 0; i < itemElements.length; i++) {
   var itemElementId = itemElements[i].id;
   if(itemElementId && aspxGetMenuCollection().GetMenu(itemElementId) != menu)
    continue;
   this.InlineInitializeItemElement(menu, itemElements[i], parentIndexPath, i);
  }
 }
 this.InlineInitializeScrollElements(menu, indexPath, menuElement);
};
ASPxClientMenuLiteRenderHelper.HasSubMenuTemplate = function(menuElement) {
 var contentElement = this.GetContentElement(menuElement);
 return contentElement && (contentElement.tagName != "UL" || !_aspxGetChildrenByPartialClassName(contentElement, ASPxClientMenuCssClasses.ContentContainer).length);
};
ASPxClientMenuLiteRenderHelper.GetContentElement = function(menuElement) {
 var contentElement = _aspxGetChildByTagName(menuElement, "DIV", 0); 
 if( contentElement &&
  contentElement.className == ASPxClientMenuCssClasses.DX &&
  contentElement.parentNode == menuElement)
  return contentElement;
 contentElement = _aspxGetChildByTagName(menuElement, "UL", 0);
 if(contentElement)
  return contentElement;
 return _aspxGetChildByTagName(menuElement, "TABLE", 0);
};
ASPxClientMenuLiteRenderHelper.InlineInitializeItemElement = function(menu, itemElement, parentIndexPath, visibleIndex) {
 function getItemIndex(visibleIndex) {
  var itemData = parentItemData[Math.max(visibleIndex, 0)];
  return itemData.constructor == Array
   ? itemData[0]
   : itemData;
 }
 var parentItemData = menu.renderData[parentIndexPath],
  prepareItemOnClick = parentItemData[visibleIndex].constructor == Array,
  indexPathPrefix = parentIndexPath + (parentIndexPath != "" ? __aspxItemIndexSeparator : ""),
  indexPath = indexPathPrefix + getItemIndex(visibleIndex),
  prevIndexPath = indexPathPrefix + getItemIndex(visibleIndex - 1);
 itemElement.id = menu.GetItemElementId(indexPath);
 aspxAssignAccessabilityEventsToChildrenLinks(itemElement);
 var separatorElement = itemElement.previousSibling;
 if(separatorElement && separatorElement.className) {
  if(_aspxElementCssClassContains(separatorElement, ASPxClientMenuCssClasses.Spacing))
   separatorElement.id = menu.GetItemIndentElementId(prevIndexPath);
  else if(_aspxElementCssClassContains(separatorElement, ASPxClientMenuCssClasses.Separator))
   separatorElement.id = menu.GetItemSeparatorElementId(indexPath);
 }
 var contentElementParent = itemElement;
 var contentElement = this.GetNodeByClassName(contentElementParent, ASPxClientMenuCssClasses.ContentContainer);
 if(contentElement != null) {
  contentElement.id = menu.GetItemContentElementId(indexPath);
  var imageElement = this.GetNodeByClassName(contentElement, ASPxClientMenuCssClasses.Image);
  if(imageElement == null) {
   var hyperLinkElement = this.GetNodeByClassName(contentElement, ASPxClientMenuCssClasses.DX);
   if(hyperLinkElement != null)
    imageElement = this.GetNodeByClassName(hyperLinkElement, ASPxClientMenuCssClasses.Image);
  }
  if(imageElement != null)
   imageElement.id = menu.GetItemImageId(indexPath);
 }
 else
  prepareItemOnClick = false;
 var popOutElement = this.GetNodeByClassName(itemElement, ASPxClientMenuCssClasses.PopOutContainer);
 if(popOutElement != null) {
  popOutElement.id = menu.GetItemPopOutElementId(indexPath);
  var popOutImageElement = this.GetNodeByClassName(popOutElement, ASPxClientMenuCssClasses.PopOutImage);
  if(popOutImageElement != null)
   popOutImageElement.id = menu.GetItemPopOutImageId(indexPath);
 }
 if(prepareItemOnClick)
  this.InlineInitializeItemOnClick(menu, itemElement, indexPath);
};
ASPxClientMenuLiteRenderHelper.InlineInitializeItemOnClick = function(menu, itemElement, indexPath) {
 var name = menu.name;
 var onclick = this.GetItemOnClick(menu, name, itemElement, indexPath);
 if(menu.IsDropDownItem(indexPath)) {
  var contentElement = menu.GetItemContentElement(indexPath);
  var dropDownElement = menu.GetItemPopOutElement(indexPath);
  var dropDownOnclick = this.GetItemDropdownOnClick(name, itemElement, indexPath);
  _aspxAttachEventToElement(contentElement, "click", onclick);
  _aspxAttachEventToElement(dropDownElement, "click", dropDownOnclick);
 }
 else
  _aspxAttachEventToElement(itemElement, "click", onclick);
 if(itemElement.style.cursor == "")
  itemElement.style.cursor = "pointer";
};
ASPxClientMenuLiteRenderHelper.GetItemOnClick = function (menu, name, itemElement, indexPath) { 
 var sendPostBackHandler = function () {
  menu.SendPostBack("CLICK:" + indexPath);
 };
 var itemClickHandler = function(e) {
  aspxMIClick(e, name, indexPath);
 };
 var handler = menu.autoPostBack && !menu.IsClientSideEventsAssigned() && !_aspxGetChildByTagName(itemElement, "A", 0)
  ? sendPostBackHandler
  : itemClickHandler;
 return function (e) {
  if (!itemElement.clientDisabled)
   handler(e);
 };
};
ASPxClientMenuLiteRenderHelper.GetItemDropdownOnClick = function(name, itemElement, indexPath) {
 return function(e) {
  if(!itemElement.clientDisabled)
   aspxMIDDClick(e, name, indexPath);
 };
};
ASPxClientMenuLiteRenderHelper.ChangeItemEnabledAttributes = function(itemElement, enabled) {
 if(itemElement) {
  itemElement.clientDisabled = !enabled;
  _aspxChangeStyleAttributesMethod(enabled)(itemElement, "cursor");
  var hyperLink = _aspxGetChildByTagName(itemElement, "A", 0);
  if(hyperLink)
   _aspxChangeAttributesMethod(enabled)(hyperLink, "href");
 }
};
ASPxClientMenuScrollHelper = _aspxCreateClass(null, {
 constructor: function(menu, indexPath) {
  this.menu = menu;
  this.indexPath = indexPath;
  this.scrollingAreaElement = null;
  this.manager = null;
  this.initialized = false;
  this.visibleItems = [];
  this.itemsHeight = 0;
  this.scrollHeight = 0;
  this.scrollUpButtonHeight = 0;
  this.scrollDownButtonHeight = 0;
  this.scrollAreaHeight = null;
  this.scrollUpButtonVisible = false;
  this.scrollDownButtonVisible = false;
 },
 Initialize: function(){
  if(this.initialized) return;
  this.scrollingAreaElement = this.menu.GetScrollContentItemsOuterContainer(this.indexPath);
  var vector = [ 0, 1 ];
  this.manager = new ASPxScrollingManager(this, this.scrollingAreaElement, vector, 
   function(manager, direction){
    manager.owner.OnBeforeScrolling(direction);
   }, 
   function(manager, direction){
    manager.owner.OnAfterScrolling(direction);
   }
  );
  this.ShowScrollButtons();
  var scrollUpButton = this.menu.GetScrollUpButtonElement(this.indexPath);
  if(scrollUpButton){
   this.scrollUpButtonHeight = this.GetScrollButtonHeight(scrollUpButton)
   _aspxSetElementSelectionEnabled(scrollUpButton, false);
  }
  var scrollDownButton = this.menu.GetScrollDownButtonElement(this.indexPath);
  if(scrollDownButton){
   this.scrollDownButtonHeight = this.GetScrollButtonHeight(scrollDownButton);
   _aspxSetElementSelectionEnabled(scrollDownButton, false);
  }
  if(__aspxWebKitTouchUI){
   var preventDefault = function(event){event.preventDefault();};
   _aspxAttachEventToElement(scrollUpButton, "touchstart", preventDefault);
   _aspxAttachEventToElement(scrollDownButton, "touchstart", preventDefault);
  }
  this.HideScrollButtons();
  this.initialized = true;  
 },
 GetScrollButtonHeight: function(button) {
  var style = _aspxGetCurrentStyle(button);
  return button.offsetHeight + _aspxPxToInt(style.marginTop) + _aspxPxToInt(style.marginBottom);
 },
 FillVisibleItemsList: function(){
  var index = 0;
  this.visibleItems = [];
  while(true){
   var childIndexPath = (this.indexPath != "" ? this.indexPath + __aspxItemIndexSeparator : "") + index;
   var itemElement = this.menu.GetItemElement(childIndexPath);
   if(itemElement == null)
    break;
   if(_aspxGetElementDisplay(itemElement))
    this.visibleItems.push(itemElement);
   index++;
  }
 },
 CanCalculate: function(){
  return this.scrollingAreaElement && _aspxElementIsDisplayed(this.scrollingAreaElement);
 },
 Calculate: function(scrollHeight){
  if(!this.CanCalculate()) return;
  this.FillVisibleItemsList();
  this.itemsHeight = 0;
  this.scrollHeight = scrollHeight;
  var itemsContainer = this.menu.GetScrollContentItemsContainer(this.indexPath);
  if(itemsContainer) this.itemsHeight = itemsContainer.offsetHeight;
  this.SetPosition(0);
  this.CalculateScrollingElements(-1);
 },
 GetPosition: function(){
  return -this.manager.GetScrolledAreaPosition();
 },
 SetPosition: function(pos){
  this.manager.SetScrolledAreaPosition(-pos);
 },
 CalculateScrollingElements: function(direction){
  if(this.itemsHeight <= this.scrollHeight){
   this.scrollUpButtonVisible = false;
   this.scrollDownButtonVisible = false;
   this.scrollAreaHeight = null;
   this.SetPosition(0);
  }
  else{
   var scrollTop = this.GetPosition();
   this.scrollAreaHeight = this.scrollHeight;
   if(direction > 0){
    var showScrollUpButton = !this.scrollUpButtonVisible;
    this.scrollUpButtonVisible = true;
    this.scrollAreaHeight -= this.scrollUpButtonHeight;
    this.scrollDownButtonVisible = this.itemsHeight - this.scrollAreaHeight - scrollTop > this.scrollDownButtonHeight;
    if(this.scrollDownButtonVisible) {
     this.scrollAreaHeight -= this.scrollDownButtonHeight;
     if(showScrollUpButton)
      this.SetPosition(this.GetPosition() + this.scrollUpButtonHeight);
    }
    else {
     this.SetPosition(this.itemsHeight - this.scrollAreaHeight);
    }
   }
   else{
    this.scrollDownButtonVisible = true;
    this.scrollAreaHeight -= this.scrollDownButtonHeight;    
    this.scrollUpButtonVisible = scrollTop > this.scrollUpButtonHeight;
    if(this.scrollUpButtonVisible)
     this.scrollAreaHeight -= this.scrollUpButtonHeight;
    else
     this.SetPosition(0);
   }
   if(this.scrollAreaHeight < 1) this.scrollAreaHeight = 1;
  }
  this.UpdateScrollingElements();
 },
 UpdateScrollingElements: function(){
  this.UpdateScrollAreaHeight();
  this.UpdateScrollButtonsVisibility();
 },
 UpdateScrollAreaHeight: function() {
  var scrollAreaElement = this.menu.GetScrollAreaElement(this.indexPath);
  if(scrollAreaElement) 
   scrollAreaElement.style.height = (this.scrollAreaHeight) ? (this.scrollAreaHeight + "px") : "";
 },
 UpdateScrollButtonsVisibility: function() {
  var scrollUpButton = this.menu.GetScrollUpButtonElement(this.indexPath);
  if(scrollUpButton) _aspxSetElementDisplay(scrollUpButton, this.scrollUpButtonVisible);
  var scrollDownButton = this.menu.GetScrollDownButtonElement(this.indexPath);
  if(scrollDownButton) _aspxSetElementDisplay(scrollDownButton, this.scrollDownButtonVisible);
 },
 ChangeScrollButtonsVisibility: function(visible) {
  this.scrollUpButtonVisible = visible;
  this.scrollDownButtonVisible = visible;
  this.UpdateScrollButtonsVisibility();
 },
 ShowScrollButtons: function() {
  this.ChangeScrollButtonsVisibility(true);
 },
 HideScrollButtons: function() {
  this.ChangeScrollButtonsVisibility(false);
 },
 ResetScrolling: function() {
  if(!this.initialized)
   return;
  this.HideScrollButtons();
  this.SetPosition(0);
  this.scrollAreaHeight = null;
  this.UpdateScrollAreaHeight();
 },
 GetScrollAreaHeight: function() {
  var scrollAreaElement = this.menu.GetScrollAreaElement(this.indexPath);
  if(scrollAreaElement)
   return scrollAreaElement.offsetHeight;
  return 0;
 },
 OnAfterScrolling: function(direction){
  this.CalculateScrollingElements(direction);
 },
 OnBeforeScrolling: function(direction){
  var scrollButton = (direction > 0) ? this.menu.GetScrollDownButtonElement(this.indexPath) :
   this.menu.GetScrollUpButtonElement(this.indexPath);
  if(!scrollButton || !_aspxGetElementDisplay(scrollButton))
   this.manager.StopScrolling();
 },
 StartScrolling: function(direction, delay, step) {
  this.manager.StartScrolling(direction, delay, step);
 },
 StopScrolling: function() {
  this.manager.StopScrolling();
 }
});
ASPxClientMenuScrollHelper.GetMenuByScrollButtonId = function(id){
 var menuName = aspxGetMenuCollection().GetMenuNameBySuffixes(id, [__aspxSBIdSuffix]);
 return aspxGetMenuCollection().Get(menuName);
}
ASPxClientMenuBase = _aspxCreateClass(ASPxClientControl, {
 constructor: function(name){
  this.constructor.prototype.constructor.call(this, name);
  this.createIFrames = false;
  this.renderData = null;
  this.allowSelectItem = false;
  this.allowCheckItems = false;
  this.allowMultipleCallbacks = false;
  this.appearAfter = 300;
  this.slideAnimationDuration = 60;
  this.disappearAfter = 500;
  this.enableAnimation = true;
  this.checkedItems = [ ];
  this.itemCheckedGroups = [ ];
  this.lockHoverEvents = false;
  this.popupToLeft = false;
  this.popupCount = 0;
  this.rootItem = null;
  this.showSubMenus = false;
  this.savedCallbackHoverItem = null;
  this.savedCallbackHoverElement = null;
  this.scrollInfo = [];
  this.scrollHelpers = {};
  this.scrollVertOffset = 1;
  this.rootSubMenuFIXOffset = 0;
  this.rootSubMenuFIYOffset = 0;
  this.rootSubMenuLIXOffset = 0;
  this.rootSubMenuLIYOffset = 0;
  this.rootSubMenuXOffset = 0;
  this.rootSubMenuYOffset = 0;
  this.subMenuFIXOffset = 0;
  this.subMenuFIYOffset = 0;
  this.subMenuLIXOffset = 0;
  this.subMenuLIYOffset = 0;
  this.subMenuXOffset = 0;
  this.subMenuYOffset = 0;
  this.maxHorizontalOverlap = -3;
  this.sizingConfig.allowSetHeight = false;
  this.shadowVisible = true;
  this.ItemClick = new ASPxClientEvent();
  this.ItemMouseOver = new ASPxClientEvent();
  this.ItemMouseOut = new ASPxClientEvent();
  this.PopUp = new ASPxClientEvent();
  this.CloseUp = new ASPxClientEvent();
  aspxGetMenuCollection().Add(this);
 }, 
 Initialize: function(){
  this.constructor.prototype.Initialize.call(this);
  var main = this.GetMainElement();
  if(__aspxIE && __aspxBrowserMajorVersion < 8 && this.rtl && _aspxElementCssClassContains(main, ASPxClientMenuCssClasses.HorizontalMenu))
   ASPxClientMenuLiteRenderHelper.ProsessRightFloatElements(main, ASPxClientMenuLiteRenderHelper.FreezeElementSizes);
 },   
 InlineInitialize: function(){
  ASPxClientControl.prototype.InlineInitialize.call(this);
  ASPxClientMenuLiteRenderHelper.InlineInitializeElements(this);
  if(__aspxIE && __aspxBrowserMajorVersion == 7) {
   var mainElement = this.GetMainElement();
   var width = _aspxPxToInt(mainElement.style.width);
   if(width > 0) {
    var currentStyle = _aspxGetCurrentStyle(mainElement);
    width -= _aspxPxToInt(currentStyle.paddingLeft) + _aspxPxToInt(currentStyle.paddingRight);
    width -= _aspxPxToInt(currentStyle.borderLeftWidth) + _aspxPxToInt(currentStyle.borderRightWidth);
    if(width > 0)
     mainElement.style.width = width + "px";
   }
  }
  this.InitializeInternal(true);
  if(this.IsCallbacksEnabled()){
   this.showSubMenus = this.GetLoadingPanelElement() != null;
   this.CreateCallback("DXMENUCONTENT");
  }
  else 
   this.showSubMenus = true;
  this.popupToLeft = this.rtl;
 },
 InitializeInternal: function(inline) {
  this.InitializeCheckedItems();
  this.InitializeSelectedItem();
  this.InitializeEnabledAndVisible(!inline || !this.IsCallbacksEnabled());
  if(!this.IsCallbacksEnabled())
   this.InitializeScrollableMenus();
 },
 InitializeEnabledAndVisible: function(recursive){
  if(this.rootItem == null) return;
  for(var i = 0; i < this.rootItem.items.length; i++)
   this.rootItem.items[i].InitializeEnabledAndVisible(recursive);
 },
 InitializeScrollableMenus: function() {
  var info = eval(this.scrollInfo);
  this.scrollHelpers = {};
  for(var i = 0; i < info.length; i++)
   this.scrollHelpers[info[i]] = new ASPxClientMenuScrollHelper(this, info[i]);
 },
 IsClientSideEventsAssigned: function() {
  return !this.ItemClick.IsEmpty()
   || !this.ItemMouseOver.IsEmpty()
   || !this.ItemMouseOut.IsEmpty()
   || !this.PopUp.IsEmpty()
   || !this.CloseUp.IsEmpty()
   || !this.Init.IsEmpty();
 },
 IsCallbacksEnabled: function(){
  return _aspxIsFunction(this.callBack);
 },
 ShouldHideExistingLoadingElements: function() {
  return false;
 }, 
 GetMenuElementId: function(indexPath) {
  return this.name + __aspxMMIdSuffix + indexPath + "_";
 },
 GetMenuMainElementId: function(indexPath) {
  return this.name + "_DXME" + indexPath + "_";
 },
 GetMenuBorderCorrectorElementId: function(indexPath) {
  return this.name + "_DXMBC" + indexPath + "_";
 },
 GetMenuIFrameElementId: function(indexPath) {
  return this.name + "_DXMIF" + this.GetMenuLevel(indexPath);
 },
 GetScrollAreaId: function(indexPath) {
  return this.name + "_DXSA" + indexPath;
 },
 GetMenuTemplateContainerID: function(indexPath) {
  return this.name + "_MTCNT" + indexPath;
 },
 GetItemTemplateContainerID: function(indexPath) {
  return this.name + "_ITCNT" + indexPath;
 },
 GetScrollUpButtonId: function(indexPath) {
  return this.name + __aspxSBIdSuffix + indexPath + __aspxSBUIdEnd;
 },
 GetScrollDownButtonId: function(indexPath) {
  return this.name + __aspxSBIdSuffix + indexPath + __aspxSBDIdEnd;
 },
 GetItemElementId: function(indexPath) {
  return this.name + __aspxMIIdSuffix + indexPath + "_";
 },
 GetItemContentElementId: function(indexPath) {
  return this.GetItemElementId(indexPath) + "T";
 },
 GetItemPopOutElementId: function(indexPath){
  return this.GetItemElementId(indexPath) + "P";
 },
 GetItemImageId: function(indexPath) {
  return this.GetItemElementId(indexPath) + "Img";
 },
 GetItemPopOutImageId: function(indexPath) {
  return this.GetItemElementId(indexPath) + "PImg";
 },
 GetItemIndentElementId: function(indexPath) {
  return this.GetItemElementId(indexPath) + "II";
 },
 GetItemSeparatorElementId: function(indexPath) {
  return this.GetItemElementId(indexPath) + "IS";
 },
 GetMenuElement: function(indexPath){
  return _aspxGetElementById(this.GetMenuElementId(indexPath));
 },
 GetMenuIFrameElement: function(indexPath){
  var elementId = this.GetMenuIFrameElementId(indexPath);
  var element = _aspxGetElementById(elementId);
  if(!element && this.createIFrames)
   return this.CreateIFrameElement(elementId);
  return element;
 },
 CreateIFrameElement: function(elementId) {
  var element = document.createElement("IFRAME");
  _aspxSetAttribute(element, "id", elementId);
  _aspxSetAttribute(element, "src", "javascript:false");
  _aspxSetAttribute(element, "scrolling", "no");
  _aspxSetAttribute(element, "frameborder", "0");
  element.style.position = "absolute";
  element.style.display = "none";
  element.style.zIndex = "19997";
  element.style.filter = "progid:DXImageTransform.Microsoft.Alpha(Style=0, Opacity=0)";
  _aspxInsertElementAfter(element, this.GetMainElement());
  return element;
 },
 GetMenuBorderCorrectorElement: function(indexPath){
  return _aspxGetElementById(this.GetMenuBorderCorrectorElementId(indexPath));
 },
 GetMenuMainCell: function(element){
  return this.GetMenuMainTable(element);
 },
 GetMenuMainTable: function(element){
  var indexPath = this.GetIndexPathById(element.id, true);
  var shadowTable = _aspxGetElementById(this.GetMenuMainElementId(indexPath));
  return shadowTable != null ? shadowTable : element;
 },
 GetScrollAreaElement: function(indexPath){
  return _aspxGetElementById(this.GetScrollAreaId(indexPath));
 },
 GetScrollContentItemsOuterContainer: function(indexPath){
  return _aspxGetChildByTagName(this.GetScrollAreaElement(indexPath), "UL", 0);
 },
 GetScrollContentItemsContainer: function(indexPath){
  return _aspxGetChildByTagName(this.GetScrollAreaElement(indexPath), "UL", 0);
 },
 GetScrollUpButtonElement: function(indexPath){
  return _aspxGetElementById(this.GetScrollUpButtonId(indexPath));
 },
 GetScrollDownButtonElement: function(indexPath){
  return _aspxGetElementById(this.GetScrollDownButtonId(indexPath));
 },
 GetItemElement: function(indexPath){
  return _aspxGetElementById(this.GetItemElementId(indexPath));
 },
 GetItemTemplateElement: function(indexPath){ 
  return this.GetItemTextTemplateContainer(indexPath);
 },
 GetItemTemplateContainer: function(indexPath) {
  return this.GetItemElement(indexPath);
 },
 GetItemTextTemplateContainer: function(indexPath) {
  return this.GetItemContentElement(indexPath);
 },
 GetItemContentElement: function(indexPath){
  return _aspxGetElementById(this.GetItemContentElementId(indexPath));
 },
 GetItemPopOutElement: function(indexPath){
  return _aspxGetElementById(this.GetItemPopOutElementId(indexPath));
 },
 GetSelectedItemInputElement: function(){
  return _aspxGetElementById(this.name + "SI");
 },
 GetCheckedItemsInputElement: function(){
  return _aspxGetElementById(this.name + "CI");
 },
 GetPopOutElements: function(){
  var elements = _aspxGetDescendantNodesByClassName(this.GetMainElement(), "dxm-popOut");
  for(var indexPath in this.renderData){
   var menuElement = this.GetMenuElement(indexPath);
   if(menuElement)
    elements = elements.concat(_aspxGetDescendantNodesByClassName(menuElement, "dxm-popOut"));
  }
  return elements;
 },
 GetPopOutImages: function(){
  var elements = _aspxGetDescendantNodesByClassName(this.GetMainElement(), "dxm-pImage");
  for(var indexPath in this.renderData){
   var menuElement = this.GetMenuElement(indexPath);
   if(menuElement)
    elements = elements.concat(_aspxGetDescendantNodesByClassName(menuElement, "dxm-pImage"));
  }
  return elements;
 },
 GetSubMenuXPosition: function(indexPath) {
  var pos = this.GetLiteSubMenuXPosition(indexPath);
  if(__aspxWebKitFamily && !this.IsParentElementPositionStatic(indexPath))
   pos -= document.body.offsetLeft;
  return pos;
 },
 GetLiteSubMenuXPosition: function(indexPath) {
  var itemElement = this.GetItemElement(indexPath);
  return _aspxGetAbsoluteX(itemElement)
   + (this.IsVertical(indexPath) ? itemElement.clientWidth + itemElement.clientLeft : 0);
 },
 GetSubMenuYPosition: function(indexPath){
  var position = 0;
  var element = this.GetItemElement(indexPath);
  if(element != null){
   if(this.IsVertical(indexPath)){
    position = _aspxGetAbsoluteY(element); 
   }
   else{
    if(__aspxNetscapeFamily || __aspxOpera && __aspxBrowserVersion >= 9 || __aspxSafari && __aspxBrowserVersion >= 3 || __aspxChrome || __aspxAndroidDefaultBrowser)
     position = _aspxGetAbsoluteY(element) + element.offsetHeight - _aspxGetClientTop(element);
    else if(__aspxWebKitFamily)
     position = _aspxGetAbsoluteY(element) + element.offsetHeight + element.offsetTop - _aspxGetClientTop(element);
    else
     position = _aspxGetAbsoluteY(element) + element.clientHeight + _aspxGetClientTop(element);
   }
  }
  if(__aspxWebKitFamily && !this.IsParentElementPositionStatic(indexPath))
   position -= document.body.offsetTop;
  return position;
 },
 GetClientSubMenuXPosition: function(element, x, indexPath){
  var itemInfo = new ASPxClientMenuItemInfo(this, indexPath);
  var itemWidth = itemInfo.clientWidth;
  var itemOffsetWidth = itemInfo.offsetWidth;
  var subMenuWidth = this.GetMenuMainCell(element).offsetWidth;
  var docClientWidth = _aspxGetDocumentClientWidth();
  if(this.IsVertical(indexPath)){
   var left = x - _aspxGetDocumentScrollLeft();
   var right = left + subMenuWidth;
   var toLeftX = x - subMenuWidth - itemWidth;
   var toLeftLeft = left - subMenuWidth - itemWidth;
   var toLeftRight = right - subMenuWidth - itemWidth;
   if(this.IsCorrectionDisableMethodRequired(indexPath)){
    return this.GetCorrectionDisabledResult(x, toLeftX);
   }
   if(this.popupToLeft){
    if(toLeftLeft > this.maxHorizontalOverlap){
     return toLeftX;
    }
    if(docClientWidth - right > this.maxHorizontalOverlap || !this.rtl) {
     this.popupToLeft = false;
     return x;
    }
    return toLeftX;
   }
   else{
    if(docClientWidth - right > this.maxHorizontalOverlap){
     return x;
    }
    if(toLeftLeft > this.maxHorizontalOverlap || this.rtl){
     this.popupToLeft = true;
     return toLeftX;
    }
    return x;
   }
  }
  else{
   var left = x - _aspxGetDocumentScrollLeft();
   var right = left + subMenuWidth + this.GetShadowWidth();
   var toLeftX = x - subMenuWidth + itemOffsetWidth;
   var toLeftLeft = left - subMenuWidth + itemOffsetWidth;
   var toLeftRight = right - subMenuWidth + itemOffsetWidth;
   if(this.popupToLeft){
    if(toLeftLeft < 0 && toLeftLeft < docClientWidth - right){
     this.popupToLeft = false;
     return x;
    }
    else
     return toLeftX;
   }
   else{
    if(docClientWidth - right < 0 && docClientWidth - right < toLeftLeft){
     this.popupToLeft = true;
     return toLeftX;
    }
    else
     return x;
   }
  }
 },
 GetClientSubMenuYPosition: function(element, y, indexPath){
  var itemInfo = new ASPxClientMenuItemInfo(this, indexPath);
  var itemHeight = itemInfo.offsetHeight;
  var itemOffsetHeight = itemInfo.offsetHeight;
  var subMenuHeight = this.GetMenuMainCell(element).offsetHeight;
  var menuItemTop = y - _aspxGetDocumentScrollTop();
  var subMenuBottom = menuItemTop + subMenuHeight;
  var docClientHeight = _aspxGetDocumentClientHeight();
  var clientSubMenuYPos = y;  
  if(this.IsVertical(indexPath)){
   var notEnoughSpaceToShowDown = subMenuBottom > docClientHeight;
   var menuItemBottom = menuItemTop + itemHeight;
   if(menuItemBottom > docClientHeight) {
    menuItemBottom = docClientHeight;
    itemHeight = menuItemBottom - menuItemTop;
   }
   var notEnoughSpaceToShowUp = menuItemBottom < subMenuHeight;
   var subMenuIsFitToDisplayFrames = docClientHeight >= subMenuHeight;  
   if (!subMenuIsFitToDisplayFrames) clientSubMenuYPos = y - menuItemTop;
   else if(notEnoughSpaceToShowDown){
    if (notEnoughSpaceToShowUp){   
     var docClientBottom = _aspxGetDocumentScrollTop() + docClientHeight;
     clientSubMenuYPos = docClientBottom - this.GetShadowHeight() - subMenuHeight; 
    } else 
     clientSubMenuYPos =  y + itemHeight - subMenuHeight;
   }   
  }
  else{
   if (this.IsHorizontalSubmenuNeedInversion(subMenuBottom, docClientHeight, menuItemTop, subMenuHeight, itemHeight))
    clientSubMenuYPos = y - subMenuHeight - itemHeight;
  }
  return clientSubMenuYPos;
 },
 IsHorizontalSubmenuNeedInversion: function(subMenuBottom, docClientHeight, menuItemTop, subMenuHeight, itemHeight){
  return subMenuBottom > docClientHeight && menuItemTop - subMenuHeight - itemHeight > docClientHeight - subMenuBottom;
 },
 IsCorrectionDisableMethodRequired: function(indexPath){
  return false;
 },
 GetShadowWidth: function(){
  return this.shadowVisible ? __aspxPopupShadowWidth : 0;
 },
 GetShadowHeight: function(){
  return this.shadowVisible ? __aspxPopupShadowHeight : 0;
 },
 HasChildren: function(indexPath){
  return (this.GetMenuElement(indexPath) != null);
 },
 IsVertical: function(indexPath){
  return true;
 },
 IsRootItem: function(indexPath){
  return this.GetMenuLevel(indexPath) <= 1;
 },
 IsParentElementPositionStatic: function(indexPath){
  return this.IsRootItem(indexPath);
 },
 GetItemIndexPath: function(indexes){
  return aspxGetMenuCollection().GetItemIndexPath(indexes);
 },
 GetItemIndexes: function(indexPath){
  return aspxGetMenuCollection().GetItemIndexes(indexPath);
 },
 GetItemIndexPathById: function(id){
  return aspxGetMenuCollection().GetIndexPathById(id, __aspxMIIdSuffix);
 },
 GetMenuIndexPathById: function(id){
  return aspxGetMenuCollection().GetIndexPathById(id, __aspxMMIdSuffix);
 },
 GetScrollButtonIndexPathById: function(id){
  return aspxGetMenuCollection().GetIndexPathById(id, __aspxSBIdSuffix);
 },
 GetIndexPathById: function(id, checkMenu){
  var indexPath = this.GetItemIndexPathById(id);
  if(indexPath == "" && checkMenu) 
   indexPath = this.GetMenuIndexPathById(id);
  return indexPath;
 },
 GetMenuLevel: function(indexPath){
  return aspxGetMenuCollection().GetMenuLevel(indexPath);
 },
 GetParentIndexPath: function(indexPath){
  var indexes = this.GetItemIndexes(indexPath);
  indexes.length --;
  return (indexes.length > 0) ? this.GetItemIndexPath(indexes) : ""; 
 },
 GetFirstChildIndexPath: function(indexPath){
  var indexes = this.GetItemIndexes(indexPath);
  indexes[indexes.length] = 0;
  var newIndexPath = this.GetItemIndexPath(indexes); 
  return this.GetFirstSiblingIndexPath(newIndexPath);
 },
 GetFirstSiblingIndexPath: function(indexPath){
  var indexes = this.GetItemIndexes(indexPath);
  var i = 0;
  while(true){
   indexes[indexes.length - 1] = i;
   var newIndexPath = this.GetItemIndexPath(indexes); 
   if(!this.IsItemExist(newIndexPath))
    return null;
   if(this.IsItemVisible(newIndexPath) && this.IsItemEnabled(newIndexPath))
    return newIndexPath;
   i++;
  }
  return null;
 },
 GetLastSiblingIndexPath: function(indexPath){
  var indexes = this.GetItemIndexes(indexPath);
  var parentItem = this.GetItemByIndexPath(this.GetParentIndexPath(indexPath));
  var i = parentItem ? parentItem.GetItemCount() - 1 : 0;
  while(true){  
   indexes[indexes.length - 1] = i;
   var newIndexPath = this.GetItemIndexPath(indexes); 
   if(!this.IsItemExist(newIndexPath))
    return null;
   if(this.IsItemVisible(newIndexPath) && this.IsItemEnabled(newIndexPath))
    return newIndexPath;
   i--;
  }
  return null;
 },
 GetNextSiblingIndexPath: function(indexPath){
  if(this.IsLastItem(indexPath)) return null;
  var indexes = this.GetItemIndexes(indexPath);
  var i = indexes[indexes.length - 1] + 1;
  while(true){  
   indexes[indexes.length - 1] = i;
   var newIndexPath = this.GetItemIndexPath(indexes); 
   if(!this.IsItemExist(newIndexPath))
    return null;
   if(this.IsItemVisible(newIndexPath) && this.IsItemEnabled(newIndexPath))
    return newIndexPath;
   i++;
  }
  return null;
 },
 GetPrevSiblingIndexPath: function(indexPath){
  if(this.IsFirstItem(indexPath)) return null;
  var indexes = this.GetItemIndexes(indexPath);
  var i = indexes[indexes.length - 1] - 1;
  while(true){  
   indexes[indexes.length - 1] = i;
   var newIndexPath = this.GetItemIndexPath(indexes); 
   if(!this.IsItemExist(newIndexPath))
    return null;
   if(this.IsItemVisible(newIndexPath) && this.IsItemEnabled(newIndexPath))
    return newIndexPath;
   i--;
  }
  return null;
 },
 IsLastElement: function(element){
  return element && (!element.nextSibling || !element.nextSibling.tagName);
 },
 IsLastItem: function(indexPath){
  var itemElement = this.GetItemElement(indexPath);
  return this.IsLastElement(itemElement);
 },
 IsFirstElement: function(element){
  return element && (!element.previousSibling || !element.previousSibling.tagName);
 },
 IsFirstItem: function(indexPath){
  var itemElement = this.GetItemElement(indexPath);
  return this.IsFirstElement(itemElement);
 },
 IsItemExist: function(indexPath){
  return !!this.GetItemByIndexPath(indexPath);
 },
 IsItemEnabled: function(indexPath){
  var item = this.GetItemByIndexPath(indexPath);
  return item ? item.GetEnabled() : false;
 },
 IsItemVisible: function(indexPath){
  var item = this.GetItemByIndexPath(indexPath);
  return item ? item.GetVisible() : false;
 },
 GetClientSubMenuPos: function(element, indexPath, pos, isXPos){
  if (!_aspxGetIsValidPosition(pos)){
   pos = isXPos ? this.GetSubMenuXPosition(indexPath) : 
    this.GetSubMenuYPosition(indexPath);
  }
  var clientPos = isXPos ? this.GetClientSubMenuXPosition(element, pos, indexPath) :
   this.GetClientSubMenuYPosition(element, pos, indexPath);
  var isInverted = pos != clientPos;
  var offset = isXPos ? this.GetSubMenuXOffset(indexPath) : this.GetSubMenuYOffset(indexPath);
  clientPos += isInverted ? - offset : offset;
  clientPos -= _aspxGetPositionElementOffset(this.GetMenuElement(indexPath), isXPos);
  return new _aspxPopupPosition(clientPos, isInverted);
 },
 GetSubMenuXOffset: function(indexPath){
  if(indexPath == "")
   return 0;
  else if(this.IsRootItem(indexPath)){
   if(this.IsFirstItem(indexPath))
    return this.rootSubMenuFIXOffset;
   else if(this.IsLastItem(indexPath))
    return this.rootSubMenuLIXOffset;
   else
    return this.rootSubMenuXOffset;
  }
  else{
   if(this.IsFirstItem(indexPath))
    return this.subMenuFIXOffset;
   else if(this.IsLastItem(indexPath))
    return this.subMenuLIXOffset;
   else
    return this.subMenuXOffset;
  }
 },
 GetSubMenuYOffset: function(indexPath){
  if(indexPath == "")
   return 0;
  else if(this.IsRootItem(indexPath)){
   if(this.IsFirstItem(indexPath))
    return this.rootSubMenuFIYOffset;
   else if(this.IsLastItem(indexPath))
    return this.rootSubMenuLIYOffset;
   else
    return this.rootSubMenuYOffset;
  }
  else{
   if(this.IsFirstItem(indexPath))
    return this.subMenuFIYOffset;
   else if(this.IsLastItem(indexPath))
    return this.subMenuLIYOffset;
   else
    return this.subMenuYOffset;
  }
 },
 StartScrolling: function(buttonId, delay, step) {
  var indexPath = this.GetScrollButtonIndexPathById(buttonId);
  var level = this.GetMenuLevel(indexPath);
  aspxGetMenuCollection().DoHidePopupMenus(null, level, this.name, false, "");
  var direction = (buttonId.lastIndexOf(__aspxSBDIdEnd) == buttonId.length - __aspxSBDIdEnd.length) ? 1 : -1;
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) scrollHelper.StartScrolling(direction, delay, step);
 },
 StopScrolling: function(buttonId) {
  var indexPath = this.GetScrollButtonIndexPathById(buttonId);
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) scrollHelper.StopScrolling();
 },
 ClearAppearTimer: function(){
  aspxGetMenuCollection().ClearAppearTimer();
 },
 ClearDisappearTimer: function(){
  aspxGetMenuCollection().ClearDisappearTimer();
 },
 IsAppearTimerActive: function(){
  return aspxGetMenuCollection().IsAppearTimerActive();
 },
 IsDisappearTimerActive: function(){
  return aspxGetMenuCollection().IsDisappearTimerActive();
 },
 SetAppearTimer: function(indexPath){
  aspxGetMenuCollection().SetAppearTimer(this.name, indexPath, this.appearAfter);
 },
 SetDisappearTimer: function(){
  aspxGetMenuCollection().SetDisappearTimer(this.name, this.disappearAfter);
 },
 IsDropDownItem: function(indexPath){
  return _aspxElementCssClassContains(this.GetItemElement(indexPath), ASPxClientMenuCssClasses.ItemDropDownMode);
 },
 DoItemClick: function(indexPath, hasItemLink, htmlEvent){
  var processOnServer = this.RaiseItemClick(indexPath, htmlEvent);
  if(processOnServer && !hasItemLink)
   this.SendPostBack("CLICK:" + indexPath);
  else{
   this.ClearDisappearTimer();
   this.ClearAppearTimer();
   if(!this.HasChildren(indexPath) || this.IsDropDownItem(indexPath))
    aspxGetMenuCollection().DoHidePopupMenus(null, -1, this.name, false, "");
   else if(this.IsItemEnabled(indexPath) && !this.IsDropDownItem(indexPath))
    this.ShowSubMenu(indexPath);
  }
 },
 HasContent: function(mainCell) {
  for(var i = 0; i < mainCell.childNodes.length; i++)
   if(mainCell.childNodes[i].tagName)
    return true;
  return false;
 },
 DoShowPopupMenu: function(element, x, y, indexPath){
  var parent = this.GetItemByIndexPath(indexPath);
  var menuElement = this.GetMenuMainCell(element);
  var popupMenuHasVisibleContent = menuElement && ASPxClientMenuLiteRenderHelper.HasSubMenuTemplate(menuElement) || parent && this.HasVisibleItems(parent);
  if(popupMenuHasVisibleContent === false)
   return;
  if(element && this.IsCallbacksEnabled())
   this.ShowLoadingPanelInMenu(element);
  if(_aspxGetElementVisibility(element))
   _aspxSetStyles(element, { left: __aspxInvalidPosition, top: __aspxInvalidPosition });
  _aspxSetElementDisplay(element, true);
  if(parent) {
   for(var i = 0; i < parent.GetItemCount(); i++) {
    var item = parent.GetItem(i);
    this.SetPopOutElementVisible(item.indexPath, this.HasVisibleItems(item));
   }
  }
  ASPxClientMenuLiteRenderHelper.CalculateSubMenu(this, element, false);
  if(this.popupCount == 0) this.popupToLeft = this.rtl;
  var horizontalPopupPosition = this.GetClientSubMenuPos(element, indexPath, x, true);
  var verticalPopupPosition = this.GetClientSubMenuPos(element, indexPath, y, false);
  var clientX = horizontalPopupPosition.position;
  var clientY = verticalPopupPosition.position;
  var toTheLeft = horizontalPopupPosition.isInverted;
  var toTheTop = verticalPopupPosition.isInverted;
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) {
   var yClientCorrection = this.GetScrollSubMenuYCorrection(element, scrollHelper, clientY);
   if(yClientCorrection > 0) {
    clientY += yClientCorrection;
    verticalPopupPosition.position = clientY;
   }
  }
  var parentElement = this.GetItemContentElement(indexPath);
  var prevParentPos = _aspxGetAbsoluteX(parentElement);
  _aspxSetStyles(element, {
   left: clientX, top: clientY
  });
  if(__aspxIE && __aspxBrowserMajorVersion > 7 && _aspxIsElementRightToLeft(document.body)) {
   _aspxSetElementDisplay(element, false);   
   _aspxSetElementDisplay(element, true);   
  }
  clientX += _aspxGetAbsoluteX(parentElement) - prevParentPos;
  if (this.enableAnimation){
   this.StartAnimation(element, indexPath, horizontalPopupPosition, verticalPopupPosition);
  }
  else {
   _aspxSetStyles(element, { left: clientX, top: clientY });
   _aspxSetElementVisibility(element, true);
   this.DoShowPopupMenuIFrame(element, clientX, clientY, __aspxInvalidDimension, __aspxInvalidDimension, indexPath);
   this.DoShowPopupMenuBorderCorrector(element, clientX, clientY, indexPath, toTheLeft, toTheTop);
  }
  aspxGetMenuCollection().RegisterVisiblePopupMenu(this.name, element.id);
  this.popupCount ++;
  aspxGetControlCollection().AdjustControls(element);
  this.CorrectVerticalAlignment(_aspxAdjustHeight, this.GetPopOutElements, "PopOut");
  this.CorrectVerticalAlignment(_aspxAdjustVerticalMargins, this.GetPopOutImages, "PopOutImg");
  this.RaisePopUp(indexPath);
 },
 ShowLoadingPanelInMenu: function(element) {
  var mainCell = this.GetMenuMainCell(element);
  if(mainCell && !this.HasContent(mainCell))
   this.CreateLoadingPanelInsideContainer(mainCell);
 },
 GetScrollSubMenuYCorrection: function(element, scrollHelper, clientY) {
  var absoluteClientY = clientY + _aspxGetPositionElementOffset(element);
  var excessTop = this.GetScrollExcessTop(absoluteClientY);
  var excessBottom = this.GetScrollExcessBottom(element, absoluteClientY);
  var correction = 0;
  if(excessTop > 0)
   correction += excessTop + this.scrollVertOffset;
  if(excessBottom > 0 && (absoluteClientY + correction == _aspxGetDocumentScrollTop())) {
   excessBottom += this.scrollVertOffset;
   correction += this.scrollVertOffset;
  }
  this.PrepareScrolling(element, scrollHelper, excessTop, excessBottom);
  return correction;
 },
 GetScrollExcessTop: function(clientY) {
  return _aspxGetDocumentScrollTop() - clientY;
 },
 GetScrollExcessBottom: function(element, clientY) {
  _aspxSetElementDisplay(element, false);
  var docHeight = _aspxGetDocumentClientHeight();
  _aspxSetElementDisplay(element, true);
  return clientY + element.offsetHeight - _aspxGetDocumentScrollTop() - docHeight;  
 },
 PrepareScrolling: function(element, scrollHelper, excessTop, excessBottom) {  
  scrollHelper.Initialize();
  var corrector = element.offsetHeight - scrollHelper.GetScrollAreaHeight() + this.scrollVertOffset;
  if(excessTop > 0)
   scrollHelper.Calculate(element.offsetHeight - excessTop - corrector);
  if(excessBottom > 0)
   scrollHelper.Calculate(element.offsetHeight - excessBottom - corrector);
 },
 DoShowPopupMenuIFrame: function(element, x, y, width, height, indexPath){
  if (!this.renderIFrameForPopupElements) return;
  var iFrame = element.overflowElement;
  if(!iFrame) {
   iFrame = this.GetMenuIFrameElement(indexPath);
   element.overflowElement = iFrame;
  }
  if(iFrame) {
   var cell = this.GetMenuMainCell(element);
   if (width < 0)
    width = cell.offsetWidth;
   if (height < 0)
    height = cell.offsetHeight;
   _aspxSetStyles(iFrame, {
    width: width, height: height,
    left: x, top: y, display: ""
   });
  }
 },
 DoShowPopupMenuBorderCorrector: function(element, x, y, indexPath, toTheLeft, toTheTop){
  var borderCorrectorElement = this.GetMenuBorderCorrectorElement(indexPath);
  if(borderCorrectorElement) {
   var params = this.GetPopupMenuBorderCorrectorPositionAndSize(element, x, y, indexPath, toTheLeft, toTheTop);
   var itemCell = this.GetItemContentElement(indexPath);
   var popOutImageCell = this.GetItemPopOutElement(indexPath);
   if(__aspxIE && __aspxBrowserMajorVersion == 9) { 
    var isVertical = this.IsVertical(indexPath);
    var itemBoundCoord = itemCell.getBoundingClientRect()[isVertical ? 'bottom' : 'right'];
    var itemBorderWidth = _aspxPxToInt(_aspxGetCurrentStyle(itemCell)[isVertical ? 'borderBottomWidth' : 'borderRightWidth']);
    if(popOutImageCell != null) {
     var popOutImageBoundCoord = popOutImageCell.getBoundingClientRect()[isVertical ? 'bottom' : 'right'];
     if(popOutImageBoundCoord > itemBoundCoord) {
      itemBoundCoord = popOutImageBoundCoord;
      itemBorderWidth = _aspxPxToInt(_aspxGetCurrentStyle(popOutImageCell)[isVertical ? 'borderBottomWidth' : 'borderRightWidth']);
     }
    }
    var menu = this.GetMainElement();
    itemBoundCoord -= Math.min(menu.getBoundingClientRect()[isVertical ? 'top' : 'left'], _aspxGetPositionElementOffset(menu, !isVertical));
    if(isVertical) {
     var bottomsDifference = this.GetItemElement(indexPath).getBoundingClientRect().bottom - 
      this.GetMenuElement(indexPath).getBoundingClientRect().bottom;
     itemBoundCoord -= bottomsDifference > 0 && bottomsDifference;
    }
    var borderCorrectorBoundCoord = isVertical ? params.top + params.height : params.left + params.width;
    if(itemBoundCoord - borderCorrectorBoundCoord != itemBorderWidth) {
     borderCorrectorBoundCoord = itemBoundCoord - itemBorderWidth;
     if(isVertical)
      params.height = borderCorrectorBoundCoord - params.top;
     else
      params.width = borderCorrectorBoundCoord - params.left;
    }
   }
   _aspxSetStyles(borderCorrectorElement, {
    width: params.width, height: params.height,
    left: params.left, top: params.top,
    display: "", visibility: "visible"
   });
   element.borderCorrectorElement = borderCorrectorElement;
  }
 },
 GetPopupMenuBorderCorrectorPositionAndSize: function(element, x, y, indexPath, toTheLeft, toTheTop) {
  var result = {};
  var itemInfo = new ASPxClientMenuItemInfo(this, indexPath);
  var menuXOffset = _aspxGetClientLeft(this.GetMenuMainCell(element));
  var menuYOffset = _aspxGetClientTop(this.GetMenuMainCell(element));
  var mainCell = this.GetMenuMainCell(element);
  var menuClientWidth = mainCell.clientWidth;
  var menuClientHeight = mainCell.clientHeight;
  if(this.IsVertical(indexPath)){
   var commonClientHeight = itemInfo.clientHeight < menuClientHeight
    ? itemInfo.clientHeight
    : menuClientHeight;
   result.width = menuXOffset;
   result.height = commonClientHeight + itemInfo.clientTop - menuYOffset;
   result.left = x;
   if(toTheLeft)
    result.left += menuClientWidth + menuXOffset;
   result.top = y + menuYOffset;
   if(toTheTop)
    result.top += menuClientHeight - result.height;
  }
  else{
   var itemWidth = itemInfo.clientWidth;
   if(this.IsDropDownItem(indexPath))
    itemWidth = this.GetItemContentElement(indexPath).clientWidth;
   var commonClientWidth = itemWidth < menuClientWidth
    ? itemWidth
    : menuClientWidth;
   result.width = commonClientWidth + itemInfo.clientLeft - menuXOffset;
   result.height = menuYOffset;
   result.left = x + menuXOffset;
   if(toTheLeft)
    result.left += menuClientWidth - result.width;
   result.top = y;
   if(toTheTop)
    result.top += menuClientHeight + menuYOffset;
  }
  return result;
 },
 DoHidePopupMenu: function(evt, element){
  this.DoHidePopupMenuBorderCorrector(element);
  this.DoHidePopupMenuIFrame(element);
  _aspxStopAnimation(element);
  _aspxSetElementVisibility(element, false);
  _aspxSetElementDisplay(element, false);
  this.CancelSubMenuItemHoverItem(element);
  aspxGetMenuCollection().UnregisterVisiblePopupMenu(this.name, element.id);
  this.popupCount --;
  var indexPath = this.GetIndexPathById(element.id, true);
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) {
   element.style.height = "";
   scrollHelper.ResetScrolling();
  }
  this.RaiseCloseUp(indexPath);
 },
 DoHidePopupMenuIFrame: function(element){
  if (!this.renderIFrameForPopupElements) return;
  var iFrame = element.overflowElement;
  if(iFrame)
   _aspxSetElementDisplay(iFrame, false);  
 },
 DoHidePopupMenuBorderCorrector: function(element){
  var borderCorrectorElement = element.borderCorrectorElement;
  if(borderCorrectorElement) {
   _aspxSetElementVisibility(borderCorrectorElement, false);
   _aspxSetElementDisplay(borderCorrectorElement, false);
   element.borderCorrectorElement = null;
  }
 },
 SetHoverElement: function(element){
  if(!this.IsStateControllerEnabled()) return;
  this.lockHoverEvents = true;
  aspxGetStateController().SetCurrentHoverElementBySrcElement(element);
  this.lockHoverEvents = false;
 },
 ApplySubMenuItemHoverItem: function(element, hoverItem, hoverElement){
  if(!element.hoverItem && _aspxGetElementDisplay(element)) {
   var newHoverItem = hoverItem.Clone();
   element.hoverItem = newHoverItem;
   element.hoverElement = hoverElement;
   newHoverItem.Apply(hoverElement);
  }
 },
 CancelSubMenuItemHoverItem: function(element){
  if(element.hoverItem) {
   element.hoverItem.Cancel(element.hoverElement);
   element.hoverItem = null;
   element.hoverElement = null;
  }
 },
 ShowSubMenu: function(indexPath){
  var element = this.GetMenuElement(indexPath);
  if(element != null){
   var level = this.GetMenuLevel(indexPath);
   aspxGetMenuCollection().DoHidePopupMenus(null, level - 1, this.name, false,  element.id);
   if (!_aspxGetElementDisplay(element))
    this.DoShowPopupMenu(element, __aspxInvalidPosition, __aspxInvalidPosition, indexPath);
  } 
  this.ClearAppearTimer();
 },
 SelectItem: function(indexPath){
  if(!this.IsStateControllerEnabled()) return;
  var element = this.GetItemContentElement(indexPath);
  if(element != null)
   aspxGetStateController().SelectElementBySrcElement(element);
 },
 DeselectItem: function(indexPath){
  if(!this.IsStateControllerEnabled()) return;
  var element = this.GetItemContentElement(indexPath);
  if(element != null){
   var hoverItem = null;
   var hoverElement = null;
   var menuElement = this.GetMenuElement(indexPath);
   if (menuElement && menuElement.hoverItem) {
    hoverItem = menuElement.hoverItem;
    hoverElement = menuElement.hoverElement;
    this.CancelSubMenuItemHoverItem(menuElement);
   }
   aspxGetStateController().DeselectElementBySrcElement(element);
   if(menuElement != null && hoverItem != null)
    this.ApplySubMenuItemHoverItem(menuElement, hoverItem, hoverElement);
  }
 },
 InitializeSelectedItem: function(){
  if(!this.allowSelectItem) return;
  this.SelectItem(this.GetSelectedItemIndexPath());
 },
 GetSelectedItemIndexPath: function(){
  var inputElement = this.GetSelectedItemInputElement();
  if(inputElement != null)
   return inputElement.value;
  return ""; 
 },
 SetSelectedItemInternal: function(indexPath, modifyHotTrackSelection){
  if(modifyHotTrackSelection)
   this.SetHoverElement(null);
  var inputElement = this.GetSelectedItemInputElement();
  if(inputElement != null){
   this.DeselectItem(inputElement.value);
   inputElement.value = indexPath;
   var item = this.GetItemByIndexPath(indexPath);
   if(item == null || item.GetEnabled())
    this.SelectItem(inputElement.value);
  }
  if(modifyHotTrackSelection){
   var element = this.GetItemContentElement(indexPath);
   if(element != null) 
    this.SetHoverElement(element);
  }
 },
 InitializeCheckedItems: function(){
  if(!this.allowCheckItems) return;
  var inputElement = this.GetCheckedItemsInputElement();
  if(inputElement != null){
   var indexPathes = inputElement.value.split(";");
   for(var i = 0; i < indexPathes.length; i ++){
    if(indexPathes[i] != ""){
     this.checkedItems.push(indexPathes[i]);
     this.SelectItem(indexPathes[i]);
    }
   }
  }
 },
 ChangeCheckedItem: function(indexPath){
  this.SetHoverElement(null);
  var inputElement = this.GetCheckedItemsInputElement();
  if(inputElement != null){
   var itemsGroup = this.GetItemsGroup(indexPath);
   if(itemsGroup != null){
    if(itemsGroup.length > 1){
     if(!this.IsCheckedItem(indexPath)){
      for(var i = 0; i < itemsGroup.length; i ++){
       if(itemsGroup[i] == indexPath) continue;
       if(this.IsCheckedItem(itemsGroup[i])){
        _aspxArrayRemove(this.checkedItems, itemsGroup[i]);
        this.DeselectItem(itemsGroup[i]);
       }
      }
      this.SelectItem(indexPath);
      this.checkedItems.push(indexPath);
     }
    }
    else{
     if(this.IsCheckedItem(indexPath)){
      _aspxArrayRemove(this.checkedItems, indexPath);
      this.DeselectItem(indexPath);
     }
     else{
      this.SelectItem(indexPath);
      this.checkedItems.push(indexPath);
     }
    }
    this.UpdateCheckedInputElement(inputElement);
   }
  }
  var element = this.GetItemContentElement(indexPath);
  if(element != null) 
   this.SetHoverElement(element);
 },
 GetItemsGroup: function(indexPath){
  for(var i = 0; i < this.itemCheckedGroups.length; i ++){
   if(_aspxArrayIndexOf(this.itemCheckedGroups[i], indexPath) > -1)
    return this.itemCheckedGroups[i];
  }
  return null;
 },
 IsCheckedItem: function(indexPath){
  return _aspxArrayIndexOf(this.checkedItems, indexPath) > -1;
 },
 UpdateCheckedInputElement: function(inputElement){
  var state = "";
  for(var i = 0; i < this.checkedItems.length; i ++){
   state += this.checkedItems[i];
   if(i < this.checkedItems.length - 1)
    state += ";";
  }
  inputElement.value = state;
 },
 GetAnimationVerticalDirection: function(indexPath, popupPosition){
  var verticalDirection = (this.IsRootItem(indexPath) && !this.IsVertical(indexPath)) ? -1 : 0;
  if (popupPosition.isInverted) verticalDirection *= -1;
  return verticalDirection;
 },
 GetAnimationHorizontalDirection: function(indexPath, popupPosition){
  var horizontalDirection = (this.IsRootItem(indexPath) && !this.IsVertical(indexPath)) ? 0 : -1;
  if (popupPosition.isInverted) horizontalDirection *= -1;
  return horizontalDirection;
 },
 StartAnimation: function(animationDivElement, indexPath, horizontalPopupPosition, verticalPopupPosition){
  var element = this.GetMenuMainTable(animationDivElement);
  var clientX = horizontalPopupPosition.position;
  var clientY = verticalPopupPosition.position;
  _aspxInitAnimationDiv(animationDivElement, clientX, clientY);
  var verticalDirection = this.GetAnimationVerticalDirection(indexPath, verticalPopupPosition);
  var horizontalDirection = this.GetAnimationHorizontalDirection(indexPath, horizontalPopupPosition);
  var yPos = verticalDirection * element.offsetHeight;
  var xPos = horizontalDirection * element.offsetWidth;
  _aspxSetStyles(element, { left: xPos, top: yPos });
  _aspxSetElementVisibility(animationDivElement, true);
  this.DoShowPopupMenuIFrame(animationDivElement, clientX, clientY, 0, 0, indexPath);
  this.DoShowPopupMenuBorderCorrector(animationDivElement, clientX, clientY, indexPath, 
   horizontalPopupPosition.isInverted, verticalPopupPosition.isInverted);
  _aspxStartSlideAnimation(animationDivElement, element, this.GetMenuIFrameElement(indexPath), this.slideAnimationDuration);
 },
 OnItemClick: function(indexPath, evt){
  var sourceElement = _aspxGetEventSource(evt);
  var clickedLinkElement = _aspxGetParentByTagName(sourceElement, "A");
  var isLinkClicked = (clickedLinkElement != null && clickedLinkElement.href != __aspxAccessibilityEmptyUrl);
  var element = this.GetItemContentElement(indexPath);
  var linkElement = (element != null) ? (element.tagName === "A" ? element : _aspxGetChildByTagName(element, "A", 0)) : null;
  if(linkElement != null && linkElement.href == __aspxAccessibilityEmptyUrl)
   linkElement = null;
  if(this.allowSelectItem)
   this.SetSelectedItemInternal(indexPath, true); 
  if(this.allowCheckItems)
   this.ChangeCheckedItem(indexPath); 
  this.DoItemClick(indexPath, isLinkClicked || (linkElement != null), evt);
  if(!isLinkClicked && linkElement != null && !(__aspxWebKitTouchUI && this.HasChildren(indexPath))) 
   _aspxNavigateByLink(linkElement);
 },
 OnItemDropDownClick: function(indexPath, evt){
  if(this.IsItemEnabled(indexPath))
   this.ShowSubMenu(indexPath);
 },
 AfterItemOverAllowed: function(hoverItem) {
  return hoverItem.name != "" && !this.lockHoverEvents;
 },
 OnAfterItemOver: function(hoverItem, hoverElement){
  if(!this.AfterItemOverAllowed(hoverItem)) return;
  if(!this.showSubMenus) {
   this.savedCallbackHoverItem = hoverItem;
   this.savedCallbackHoverElement = hoverElement;
   return;
  }
  this.ClearDisappearTimer();
  this.ClearAppearTimer();
  var indexPath = this.GetMenuIndexPathById(hoverItem.name);
  if(indexPath == ""){
   indexPath = this.GetItemIndexPathById(hoverItem.name);
   var canShowSubMenu = true;
   if(this.IsDropDownItem(indexPath)){
    var popOutImageElement = this.GetItemPopOutElement(indexPath);
    if(popOutImageElement != null && popOutImageElement != hoverElement){
     hoverItem.needRefreshBetweenElements = true;
     canShowSubMenu = false;
    }
   }
   if(canShowSubMenu){
    if(hoverItem.enabled && hoverItem.kind == __aspxHoverItemKind){
     this.SetAppearTimer(indexPath);
     this.RaiseItemMouseOver(indexPath);
    }
   }
  }
 },
 OnBeforeItemOver: function(hoverItem, hoverElement){
  if (__aspxNetscapeFamily && _aspxIsExists(hoverElement.offsetParent) && 
    hoverElement.offsetParent.style.borderCollapse == "collapse") {
   hoverElement.offsetParent.style.borderCollapse = "separate";
   hoverElement.offsetParent.style.borderCollapse = "collapse";
  }
  var indexPath = this.GetItemIndexPathById(hoverItem.name);
  var element = this.GetMenuElement(indexPath);
  if(element) this.CancelSubMenuItemHoverItem(element);  
 },
 OnItemOverTimer: function(indexPath){
  var element = this.GetMenuElement(indexPath);
  if(element == null){  
   var level = this.GetMenuLevel(indexPath);
   aspxGetMenuCollection().DoHidePopupMenus(null, level - 1, this.name, false, "");
  }   
  if(this.IsAppearTimerActive()){
   this.ClearAppearTimer();
   if(this.GetItemContentElement(indexPath) != null || this.GetItemPopOutElement(indexPath) != null){
    this.ShowSubMenu(indexPath);
   }
  }
 },
 OnBeforeItemDisabled: function(disabledItem, disabledElement){
  this.ClearAppearTimer();
  var indexPath = this.GetItemIndexPathById(disabledElement.id);
  if(indexPath != ""){
   var element = this.GetMenuElement(indexPath);
   if(element != null) this.DoHidePopupMenu(null, element);
  }
 },
 OnAfterItemOut: function(hoverItem, hoverElement, newHoverElement){
  if(!this.showSubMenus) {
   this.savedCallbackHoverItem = null;
   this.savedCallbackHoverElement = null;
  }
  if(hoverItem.name == "" || this.lockHoverEvents) return;
  if(hoverItem.IsChildElement(newHoverElement)) return;
  var indexPath = this.GetItemIndexPathById(hoverItem.name);
  var element = this.GetMenuElement(indexPath);
  this.ClearDisappearTimer();
  this.ClearAppearTimer();
  if(element == null || !_aspxGetIsParent(element, newHoverElement)) 
   this.SetDisappearTimer();
  if(element != null) 
   this.ApplySubMenuItemHoverItem(element, hoverItem, hoverElement);
  if(indexPath != "")
   this.RaiseItemMouseOut(indexPath);
 },
 OnItemOutTimer: function(){
  if(this.IsDisappearTimerActive()){
   this.ClearDisappearTimer();
   if(aspxGetMenuCollection().CheckFocusedElement())
    this.SetDisappearTimer();
   else
    this.OnHideByItemOut();
  }
 },
 OnHideByItemOut: function(){
  aspxGetMenuCollection().DoHidePopupMenus(null, 0, this.name, true, "");
 },
 OnFocusedItemKeyDown: function(evt, focusedItem, focusedElement){
  var handled = false;
  var indexPath = this.GetItemIndexPathById(focusedItem.name);
  switch(evt.keyCode){
   case ASPxKey.Tab: {
    handled = this.FocusNextTabItem(indexPath, evt.shiftKey);
    break;
   }
   case ASPxKey.Down: {
    if(this.IsVertical(indexPath)){
     this.FocusNextItem(indexPath);
    }
    else{
     this.ShowSubMenu(indexPath);
     this.FocusItemByIndexPath(this.GetFirstChildIndexPath(indexPath));
    }
    handled = true;
    break;
   }
   case ASPxKey.Up: {
    if(this.IsVertical(indexPath)){
     this.FocusPrevItem(indexPath);
    }
    else{
     this.ShowSubMenu(indexPath);
     this.FocusItemByIndexPath(this.GetFirstChildIndexPath(indexPath));
    }
    handled = true;
    break;
   }
   case ASPxKey.Left: {
    if(this.IsVertical(indexPath)){
     var parentIndexPath = this.GetParentIndexPath(indexPath);
     if(this.IsVertical(parentIndexPath)){
      this.FocusItemByIndexPath(parentIndexPath);
     }
     else{
      this.FocusPrevItem(parentIndexPath);
     }
    }
    else{
     this.FocusPrevItem(indexPath);
    }
    handled = true;
    break;
   }
   case ASPxKey.Right: {
    if(this.IsVertical(indexPath)){
     if(this.HasChildren(indexPath)){
      this.ShowSubMenu(indexPath);
      this.FocusItemByIndexPath(this.GetFirstChildIndexPath(indexPath));
     }
     else{
      while(!this.IsRootItem(indexPath))
       indexPath = this.GetParentIndexPath(indexPath);
      this.FocusNextItem(indexPath);
     }
    }
    else{
     this.FocusNextItem(indexPath);
    }
    handled = true;
    break;
   }
   case ASPxKey.Esc: {
    var parentIndexPath = this.GetParentIndexPath(indexPath);
    this.FocusItemByIndexPath(parentIndexPath);
    var element = this.GetMenuElement(parentIndexPath);
    if(element != null) {
     this.DoHidePopupMenu(null, element);
     handled = true;
    }
   }
  }
  if(handled)
   _aspxPreventEventAndBubble(evt);
 },
 FocusItemByIndexPath: function(indexPath){
  var element = this.GetItemElement(indexPath);
  var link = _aspxGetChildByTagName(element, "A", 0);
  if(link != null) _aspxSetFocus(link);
 },
 FocusNextTabItem: function(indexPath, shiftKey){
  if(this.IsRootItem(indexPath)) return false;
  while(true){
   if(this.IsRootItem(indexPath)) {
    if(!shiftKey){
     if(this.GetNextSiblingIndexPath(indexPath) != null){
      this.FocusNextItem(indexPath);
      return true;
     }
    }
    else{
     if(this.GetPrevSiblingIndexPath(indexPath) != null){
      this.FocusPrevItem(indexPath);
      return true;
     }
    }
    break;
   }
   else {
    if(!shiftKey){
     if(this.GetNextSiblingIndexPath(indexPath) == null)
      indexPath = this.GetParentIndexPath(indexPath);
     else{
      this.FocusNextItem(indexPath);
      return true;
     }
    }
    else{
     if(this.GetPrevSiblingIndexPath(indexPath) == null)
      indexPath = this.GetParentIndexPath(indexPath);
     else{
      this.FocusPrevItem(indexPath);
      return true;
     }
    }
   }
  }
  return false;
 },
 FocusNextItem: function(indexPath){
  var newIndexPath = this.GetNextSiblingIndexPath(indexPath);
  if(newIndexPath == null)
   newIndexPath = this.GetFirstSiblingIndexPath(indexPath);
  if(indexPath != newIndexPath)
   this.FocusItemByIndexPath(newIndexPath);
 },
 FocusPrevItem: function(indexPath){
  var newIndexPath = this.GetPrevSiblingIndexPath(indexPath);
  if(newIndexPath == null)
   newIndexPath = this.GetLastSiblingIndexPath(indexPath);
  if(indexPath != newIndexPath)
   this.FocusItemByIndexPath(newIndexPath);
 },
 TryFocusItem: function(itemIndex){
  var item = this.GetItem(itemIndex);
  if(item.GetVisible()) {
   this.FocusItemByIndexPath(item.GetIndexPath());
   return true;
  }
  return false;
 },
 Focus: function(){
  if(this.rootItem != null) { 
   for(var i = 0; i < this.GetItemCount(); i++) {
    if(this.TryFocusItem(i))
     return true;
   }
  }
  else
   this.FocusNextItem("-1");
 },
 FocusLastItem: function(){
  if(this.rootItem != null) { 
   for(var i = this.GetItemCount() - 1; i >= 0; i--) {
    if(this.TryFocusItem(i))
     return true;
   }
  }
  else
   this.FocusPrevItem(this.GetItemCount() - 1);
 },
 OnCallback: function(result){
  _aspxInitializeScripts(); 
  this.InitializeScrollableMenus();
  for(var indexPath in result){
   var menuElement = this.GetMenuElement(indexPath);
   if(menuElement) {
    if(aspxGetMenuCollection().IsSubMenuVisible(menuElement.id)) {
     this.ShowPopupSubMenuAfterCallback(menuElement, result[indexPath]);
    } else {
     this.SetSubMenuInnerHtml(menuElement, result[indexPath]);
    }
   }
  }
  this.ClearVerticalAlignedElementsCache();
  this.CorrectVerticalAlignment(_aspxAdjustHeight, this.GetPopOutElements, "PopOut");
  this.CorrectVerticalAlignment(_aspxAdjustVerticalMargins, this.GetPopOutImages, "PopOutImg");
  this.InitializeInternal(false);
  if(!this.showSubMenus){
   this.showSubMenus = true;
   if(this.savedCallbackHoverItem != null && this.savedCallbackHoverElement != null)
    this.OnAfterItemOver(this.savedCallbackHoverItem, this.savedCallbackHoverElement);
   this.savedCallbackHoverItem = null;
   this.savedCallbackHoverElement = null;
  }
 },
 SetSubMenuInnerHtml: function(menuElement, html) {
  _aspxSetInnerHtml(this.GetMenuMainCell(menuElement), html);
  ASPxClientMenuLiteRenderHelper.InlineInitializeSubMenuMenuElement(this, menuElement);
  ASPxClientMenuLiteRenderHelper.CalculateSubMenu(this, menuElement, true);
 },
 ShowPopupSubMenuAfterCallback: function(element, callbackResult) {
  var indexPath = this.GetIndexPathById(element.id, true);
  var currentX = _aspxPxToInt(element.style.left);
  var currentY = _aspxPxToInt(element.style.top);
  var showedToTheTop = this.ShowedToTheTop(element, indexPath);
  var showedToTheLeft = this.ShowedToTheLeft(element, indexPath);
  _aspxSetStyles(element, {
   left: __aspxInvalidPosition, top: __aspxInvalidPosition
  });
  this.SetSubMenuInnerHtml(element, callbackResult);
  var vertPos = this.GetClientSubMenuPos(element, indexPath, __aspxInvalidPosition, false);
  var clientY = vertPos.position;
  var toTheTop = vertPos.isInverted;
  if(!this.IsVertical(indexPath) && showedToTheTop != toTheTop) {
   clientY = currentY;
   toTheTop = showedToTheTop;
  }
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) {
   var yClientCorrection = this.GetScrollSubMenuYCorrection(element, scrollHelper, clientY);
   if(yClientCorrection > 0)
    clientY += yClientCorrection;
  }
  _aspxSetStyles(element, {
   left: currentX, top: clientY
  });
  this.DoShowPopupMenuIFrame(element, currentX, clientY, __aspxInvalidDimension, __aspxInvalidDimension, indexPath);
  this.DoShowPopupMenuBorderCorrector(element, currentX, clientY, indexPath, showedToTheLeft, toTheTop);
  aspxGetControlCollection().AdjustControls(element);
 },
 ShowedToTheTop: function(element, indexPath) {
  var currentY = _aspxPxToInt(element.style.top);
  var parentBottomY = this.GetSubMenuYPosition(indexPath);
  return currentY < parentBottomY;
 },
 ShowedToTheLeft: function(element, indexPath) {
  var currentX = _aspxPxToInt(element.style.left);
  var parentX = this.GetSubMenuXPosition(indexPath);
  return currentX < parentX;
 },
 CreateItems: function(itemsProperties){
  var itemType = this.GetClientItemType();
  this.rootItem = new itemType(this, null, 0, "");
  this.rootItem.CreateItems(itemsProperties);
 },
 GetClientItemType: function(){
  return ASPxClientMenuItem;
 },
 GetItemByIndexPath: function(indexPath){
  var item = this.rootItem;
  if(indexPath != "" && item != null){
   var indexes = this.GetItemIndexes(indexPath);
   for(var i = 0; i < indexes.length; i ++)
    item = item.GetItem(indexes[i]);
  }
  return item;
 },
 SetItemChecked: function(indexPath, checked){
  var inputElement = this.GetCheckedItemsInputElement();
  if(inputElement != null){
   var itemsGroup = this.GetItemsGroup(indexPath);
   if(itemsGroup != null){
    if(!checked && this.IsCheckedItem(indexPath)){
     _aspxArrayRemove(this.checkedItems, indexPath);
     this.DeselectItem(indexPath);
    }
    else if(checked && !this.IsCheckedItem(indexPath)){
     if(itemsGroup.length > 1){
      for(var i = 0; i < itemsGroup.length; i ++){
       if(itemsGroup[i] == indexPath) continue;
       if(this.IsCheckedItem(itemsGroup[i])){
        _aspxArrayRemove(this.checkedItems, itemsGroup[i]);
        this.DeselectItem(itemsGroup[i]);
       }
      }
     }
     this.SelectItem(indexPath);
     this.checkedItems.push(indexPath);
    }
    this.UpdateCheckedInputElement(inputElement);
   }
  }
 },
 ChangeItemEnabledAttributes: function(indexPath, enabled){
  ASPxClientMenuLiteRenderHelper.ChangeItemEnabledAttributes(this.GetItemElement(indexPath), enabled);
 },
 IsItemEnabled: function(indexPath){
  var item = this.GetItemByIndexPath(indexPath);
  return (item != null) ? item.GetEnabled() : true;
 },
 SetItemEnabled: function(indexPath, enabled, initialization){
  if(indexPath == "" || !this.GetItemByIndexPath(indexPath).enabled) return;
  if(!enabled){
   if(this.GetSelectedItemIndexPath() == indexPath)
    this.DeselectItem(indexPath);
  }
  if(!initialization || !enabled)
   this.ChangeItemEnabledStateItems(indexPath, enabled);
  this.ChangeItemEnabledAttributes(indexPath, enabled);
  if(enabled){
   if(this.GetSelectedItemIndexPath() == indexPath)
    this.SelectItem(indexPath);
  }
 },
 ChangeItemEnabledStateItems: function(indexPath, enabled){
  if(!this.IsStateControllerEnabled()) return;
  var element = this.GetItemElement(indexPath);
  if(element)
   aspxGetStateController().SetElementEnabled(element, enabled);
 },
 GetItemImageUrl: function(indexPath){
  var image = this.GetItemImage(indexPath);
  if(image)
   return image.src;
  return "";
 },
 SetItemImageUrl: function(indexPath, url){
  var image = this.GetItemImage(indexPath);
  if(image)
   image.src = url;
 },
 GetItemImage: function(indexPath) {
  var element = this.GetItemContentElement(indexPath);
  if(element != null){
   var img = _aspxGetChildByTagName(element, "IMG", 0);
   if(img != null)
    return img;
  }
 },
 GetItemNavigateUrl: function(indexPath){
  var element = this.GetItemContentElement(indexPath);
  if(element != null && element.tagName === "A")
   return element.href;
  if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    return link.href;
  }
  return "";
 },
 SetItemNavigateUrl: function(indexPath, url){
  var element = this.GetItemContentElement(indexPath);
  if(element != null && element.tagName === "A")
   element.href = url;
  else if(element != null){
   var link = _aspxGetChildByTagName(element, "A", 0);
   if(link != null)
    link.href = url;
   link = _aspxGetChildByTagName(element, "A", 1);
   if(link != null)
    link.href = url;
  }
 },
 FindTextNode: function(indexPath) {
  var element = this.GetItemContentElement(indexPath);
  if(element) {
   var link = _aspxGetChildByTagName(element, "A", 0); 
   if(link)
    return _aspxGetChildTextNode(link, 0);
   var titleSpan = _aspxGetChildByTagName(element, "SPAN", 0); 
   if(titleSpan)
    return _aspxGetChildTextNode(titleSpan, 0);
   for(var i = 0; i < element.childNodes.length; i++) { 
    var child = element.childNodes[i];
    if (child.nodeValue && (_aspxTrim(child.nodeValue) != ""))
     return child;
   }
   return _aspxGetChildTextNode(element, 0);
  }
  return null;
 },
 GetItemText: function(indexPath){
  var textNode = this.FindTextNode(indexPath);
  return textNode
   ? _aspxTrim(textNode.nodeValue) 
   : "";
 },
 SetItemText: function(indexPath, text){
  var textNode = this.FindTextNode(indexPath);
  if(textNode) {
   textNode.nodeValue = text;
   var menuElement = this.GetMenuElement(this.GetParentIndexPath(indexPath));
   if(menuElement)
    ASPxClientMenuLiteRenderHelper.CalculateSubMenu(this, menuElement, true);
   if(this.IsRootItem(indexPath) && !this.isPopupMenu){
    var itemElement = this.GetItemElement(indexPath);
    if(itemElement)
       ASPxClientMenuLiteRenderHelper.CalculateItemMinSize(itemElement);
   }
  }
 },
 SetItemVisible: function(indexPath, visible, initialization){
  if(indexPath == "" || !this.GetItemByIndexPath(indexPath).visible) return;
  if(visible && initialization) return;
  var element = this.GetItemElement(indexPath);
  if(element != null)
   _aspxSetElementDisplay(element, visible);
  this.SetIndentsVisiblility(indexPath);
  this.SetSeparatorsVisiblility(indexPath);
  var parent = this.GetItemByIndexPath(indexPath).parent;
  var parentHasVisibleItems = this.HasVisibleItems(parent);
  if(this.IsRootItem(indexPath) && !this.isPopupMenu)
   this.SetVisible(parentHasVisibleItems);
  else
   this.SetPopOutElementVisible(parent.indexPath, parentHasVisibleItems);
  var menuElement = this.GetMenuElement(this.GetParentIndexPath(indexPath));
  if(menuElement)
   ASPxClientMenuLiteRenderHelper.CalculateSubMenu(this, menuElement, true);
 },
 SetIndentsVisiblility: function(indexPath){
  var parent = this.GetItemByIndexPath(indexPath).parent;
  for(var i = 0; i < parent.GetItemCount(); i++){
   var item = parent.GetItem(i);
   var separatorVisible = item.GetVisible() && this.HasNextVisibleItems(parent, i);
   var element = this.GetItemIndentElement(item.GetIndexPath());
   if(element != null) _aspxSetElementDisplay(element, separatorVisible);
  }
 },
 SetSeparatorsVisiblility: function(indexPath){
  var parent = this.GetItemByIndexPath(indexPath).parent;
  for(var i = 0; i < parent.GetItemCount(); i++){
   var item = parent.GetItem(i);
   var separatorVisible = this.HasPrevVisibleItems(parent, i) && (item.GetVisible() || this.HasNextVisibleItemInGroup(parent, i));
   var element = this.GetItemSeparatorElement(item.GetIndexPath());
   if(element != null) _aspxSetElementDisplay(element, separatorVisible);
   element = this.GetItemSeparatorIndentElement(item.GetIndexPath());
   if(element != null) _aspxSetElementDisplay(element, separatorVisible);
  }
 },
 SetPopOutElementVisible: function(indexPath, visible) {
  var popOutElement = this.GetItemPopOutElement(indexPath);
  if(popOutElement)
   _aspxSetElementDisplay(popOutElement, visible);
 },
 HasNextVisibleItemInGroup: function(parent, index){
  for(var i = index + 1; i < parent.GetItemCount(); i++){
   var item = parent.GetItem(i);
   if(this.IsItemBeginsGroup(item))
    return false;
   if(item.GetVisible())
    return true;
  }
  return false;
 },
 IsItemBeginsGroup: function(item){
  var itemSeparator = this.GetItemSeparatorElement(item.GetIndexPath());
  return itemSeparator && _aspxElementCssClassContains(itemSeparator, ASPxClientMenuCssClasses.Separator);
 },
 HasVisibleItems: function(parent) {
  for(var i = 0; i < parent.GetItemCount(); i++) {
   if(parent.GetItem(i).GetVisible())
    return true;
  }
  return false;
 },
 HasNextVisibleItems: function(parent, index){
  for(var i = index + 1; i < parent.GetItemCount(); i++){
   if(parent.GetItem(i).GetVisible())
    return true;
  }
  return false;
 },
 HasPrevVisibleItems: function(parent, index){
  for(var i = index - 1; i >= 0; i--){
   if(parent.GetItem(i).GetVisible())
    return true;
  }
  return false;
 },
 GetItemIndentElement: function(indexPath){
  return _aspxGetElementById(this.GetItemIndentElementId(indexPath));
 },
 GetItemSeparatorElement: function(indexPath){
  return _aspxGetElementById(this.GetItemSeparatorElementId(indexPath));
 },
 GetItemSeparatorIndentElement: function(indexPath){
  return _aspxGetElementById(this.name + __aspxMIIdSuffix + indexPath + "_ISI");
 },
 RaiseItemClick: function(indexPath, htmlEvent){
  var processOnServer = this.autoPostBack || this.IsServerEventAssigned("ItemClick");
  if(!this.ItemClick.IsEmpty()){
   var item = this.GetItemByIndexPath(indexPath);
   var htmlElement = this.GetItemContentElement(indexPath);
   var args = new ASPxClientMenuItemClickEventArgs(processOnServer, item, htmlElement, htmlEvent);
   this.ItemClick.FireEvent(this, args);
   processOnServer = args.processOnServer;
  }
  return processOnServer;
 }, 
 RaiseItemMouseOver: function(indexPath){
  if(!this.ItemMouseOver.IsEmpty()){
   var item = this.GetItemByIndexPath(indexPath);
   var htmlElement = this.GetItemContentElement(indexPath);
   var args = new ASPxClientMenuItemMouseEventArgs(item, htmlElement);
   this.ItemMouseOver.FireEvent(this, args);
  }
 },
 RaiseItemMouseOut: function(indexPath){
  if(!this.ItemMouseOut.IsEmpty()){
   var item = this.GetItemByIndexPath(indexPath);
   var htmlElement = this.GetItemContentElement(indexPath);
   var args = new ASPxClientMenuItemMouseEventArgs(item, htmlElement);
   this.ItemMouseOut.FireEvent(this, args);
  }
 },
 RaisePopUp: function(indexPath){
  var item = this.GetItemByIndexPath(indexPath);
  if(!this.PopUp.IsEmpty()){
   var args = new ASPxClientMenuItemEventArgs(item);
   this.PopUp.FireEvent(this, args);
  }
 },
 RaiseCloseUp: function(indexPath){
  var item = this.GetItemByIndexPath(indexPath);
  if(!this.CloseUp.IsEmpty()){
   var args = new ASPxClientMenuItemEventArgs(item);
   this.CloseUp.FireEvent(this, args);
  }
 },
 SetEnabled: function(enabled) {
  for(var i = this.GetItemCount() - 1; i >= 0; i--) {
   var item = this.GetItem(i);
   item.SetEnabled(enabled);
  }
 },
 SetVisible: function(visible) {
  if(visible && !this.HasVisibleItems(this))
   return;
  ASPxClientControl.prototype.SetVisible.call(this, visible);
 },
 GetItemCount: function(){
  return (this.rootItem != null) ? this.rootItem.GetItemCount() : 0;
 },
 GetItem: function(index){
  return (this.rootItem != null) ? this.rootItem.GetItem(index) : null;
 },
 GetItemByName: function(name){
  return (this.rootItem != null) ? this.rootItem.GetItemByName(name) : null;
 },
 GetSelectedItem: function(){
  var indexPath = this.GetSelectedItemIndexPath();
  if(indexPath != "")
   return this.GetItemByIndexPath(indexPath);
  return null;
 },
 SetSelectedItem: function(item){
  var indexPath = (item != null) ? item.GetIndexPath() : "";
  this.SetSelectedItemInternal(indexPath, false);
 },
 GetRootItem: function(){
  return this.rootItem;
 }
});
ASPxClientMenuBase.GetMenuCollection = function(){
 return aspxGetMenuCollection();
}
ASPxClientMenuCollection = _aspxCreateClass(ASPxClientControlCollection, {
 constructor: function(){
  this.constructor.prototype.constructor.call(this);
  this.appearTimerID = -1;
  this.disappearTimerID = -1;
  this.currentShowingPopupMenuName = null;
  this.visibleSubMenusMenuName = "";
  this.visibleSubMenuIds = [ ];
  this.overXPos = -1;
  this.overYPos = -1;
 },
 RegisterVisiblePopupMenu: function(name, id){
  this.visibleSubMenuIds.push(id);
  this.visibleSubMenusMenuName = name;
 },
 UnregisterVisiblePopupMenu: function(name, id){
  _aspxArrayRemove(this.visibleSubMenuIds, id);
  if(this.visibleSubMenuIds.length == 0)
   this.visibleSubMenusMenuName = "";
 },
 IsSubMenuVisible: function(subMenuId) {
  for(var i = 0; i < this.visibleSubMenuIds.length; i++) {
   if(this.visibleSubMenuIds[i] == subMenuId)
    return true;
  }
  return false;
 },
 GetMenu: function(id){
  return this.Get(this.GetMenuName(id));
 },
 GetMenuName: function(id){
  return this.GetMenuNameBySuffixes(id, [__aspxMMIdSuffix, __aspxMIIdSuffix]);
 },
 GetMenuNameBySuffixes: function(id, idSuffixes){
  for(var i = 0; i < idSuffixes.length; i++){
   var pos = id.lastIndexOf(idSuffixes[i]);
   if(pos > -1) 
    return id.substring(0, pos);
  }
  return id;
 },
 ClearCurrentShowingPopupMenuName: function() {
  this.SetCurrentShowingPopupMenuName(null);
 },
 SetCurrentShowingPopupMenuName: function(value) {
  this.currentShowingPopupMenuName = value;
 },
 NowPopupMenuIsShowing: function() {
  return this.currentShowingPopupMenuName != null;
 },
 GetMenuLevel: function(indexPath){
  if(indexPath == "")
   return 0;
  else{
   var indexes = this.GetItemIndexes(indexPath);
   return indexes.length;
  }
 },
 GetMenuLevelById: function(id){ 
  var indexPath = this.GetIndexPathById(id, __aspxMMIdSuffix);
  return this.GetMenuLevel(indexPath);
 },
 GetIndexPathById: function(id, idSuffix){
  var pos = id.lastIndexOf(idSuffix);
  if(pos > -1){
   id = id.substring(pos + idSuffix.length);
   pos = id.lastIndexOf("_");
   if(pos > -1) 
    return id.substring(0, pos);
  }
  return "";
 },
 GetItemIndexPath: function(indexes){
  var indexPath = "";
  for(var i = 0; i < indexes.length; i ++){
   indexPath += indexes[i];
   if(i < indexes.length - 1)
    indexPath += __aspxItemIndexSeparator;
  }
  return indexPath;
 },
 GetItemIndexes: function(indexPath){
  var indexes = indexPath.split(__aspxItemIndexSeparator);
  for(var i = 0; i < indexes.length; i ++)
   indexes[i] = parseInt(indexes[i]);
  return indexes;
 },
 ClearAppearTimer: function(){
  this.appearTimerID = _aspxClearTimer(this.appearTimerID);
 },
 ClearDisappearTimer: function(){
  this.disappearTimerID = _aspxClearTimer(this.disappearTimerID);
 },
 IsAppearTimerActive: function(){
  return this.appearTimerID > -1;
 },
 IsDisappearTimerActive: function(){
  return this.disappearTimerID > -1;
 },
 SetAppearTimer: function(name, indexPath, timeout){
  this.appearTimerID = _aspxSetTimeout("aspxMIMOverTimer(\"" + name + "\", \"" + indexPath + "\")", timeout);
 },
 SetDisappearTimer: function(name, timeout){
  this.disappearTimerID = _aspxSetTimeout("aspxMIMOutTimer(\"" + name + "\")", timeout);
 },
 GetMouseDownMenuLevel: function(evt){
  var srcElement = _aspxGetEventSource(evt);
  if(this.visibleSubMenusMenuName != ""){
   var element = _aspxGetParentById(srcElement, this.visibleSubMenusMenuName);
   if(element != null) return 1;
  }
  for(var i = 0; i < this.visibleSubMenuIds.length; i ++){
   var element = _aspxGetParentById(srcElement, this.visibleSubMenuIds[i]);
   if(element != null)
    return this.GetMenuLevelById(this.visibleSubMenuIds[i]) + 1;
  }
  return -1;
 },
 CheckFocusedElement: function(){
  try {
   if(document.activeElement != null) {
    for(var i = 0; i < this.visibleSubMenuIds.length; i ++) {
     var menuElement = _aspxGetElementById(this.visibleSubMenuIds[i]);
     if(menuElement != null && _aspxGetIsParent(menuElement, document.activeElement)) {
      var tagName = document.activeElement.tagName;
      if (!__aspxIE || tagName == "INPUT" || tagName == "TEXTAREA" || tagName == "SELECT")
       return true;    
     }
    }
   }
  } catch(e) {
  }
  return false;
 },
 DoHidePopupMenus: function(evt, level, name, leavePopups, exceptId){
  for(var i = this.visibleSubMenuIds.length - 1; i >=0 ; i --){
   var menu = this.GetMenu(this.visibleSubMenuIds[i]);
   if(menu != null){
    var menuLevel = this.GetMenuLevelById(this.visibleSubMenuIds[i]);
    if((!leavePopups || menuLevel > 0) && exceptId != this.visibleSubMenuIds[i]){
     if(menuLevel > level || (menu.name != name && name != "")){
      var element = _aspxGetElementById(this.visibleSubMenuIds[i]);
      if(element != null)
       menu.DoHidePopupMenu(evt, element);
     }
    }
   }
  }
 },
 DoShowAtCurrentPos: function(name, indexPath){
  var pc = this.Get(name);
  var element = pc.GetMainElement();
  if(pc != null && !_aspxGetElementDisplay(element))
   pc.DoShowPopupMenu(element, this.overXPos, this.overYPos, indexPath);
 },
 SaveCurrentMouseOverPos: function(evt, popupElement){
  if (!this.NowPopupMenuIsShowing()) return;
  var currentShowingPopupMenu = this.Get(this.currentShowingPopupMenuName);
  if(currentShowingPopupMenu.popupElement == popupElement) 
   if(!currentShowingPopupMenu.IsMenuVisible()) {
    this.overXPos = _aspxGetEventX(evt);
    this.overYPos = _aspxGetEventY(evt);
   }
 },
 OnMouseDown: function(evt){
  var menuLevel = this.GetMouseDownMenuLevel(evt);
  this.DoHidePopupMenus(evt, menuLevel, "", false, "");
 },
 HideAll: function(){
  this.DoHidePopupMenus(null, -1, "", false, "");
 },
 IsAnyMenuVisible: function() {
  return this.visibleSubMenuIds.length != 0;
 }
});
var __aspxMCollection = null;
function aspxGetMenuCollection(){
 if(__aspxMCollection == null)
  __aspxMCollection = new ASPxClientMenuCollection();
 return __aspxMCollection;
}
ASPxClientMenuItem = _aspxCreateClass(null, {
 constructor: function(menu, parent, index, name){
  this.menu = menu;
  this.parent = parent;
  this.index = index;
  this.name = name;
  this.indexPath = "";
  if(parent) {
   this.indexPath = parent.indexPath
    ? parent.indexPath + __aspxItemIndexSeparator + this.index.toString()
    : this.index.toString();
  }
  this.enabled = true;
  this.clientEnabled = true;
  this.visible = true;
  this.clientVisible = true;
  this.items = [];
 },
 CreateItems: function(itemsProperties){
  var itemType = this.menu.GetClientItemType();
  for(var i = 0; i < itemsProperties.length; i ++){
   var itemName = itemsProperties[i][0] || "";
   var item = new itemType(this.menu, this, i, itemName);
   if(_aspxIsExists(itemsProperties[i][1]))
    item.enabled = itemsProperties[i][1];
   if(_aspxIsExists(itemsProperties[i][2]))    
    item.clientEnabled = itemsProperties[i][2];
   if(_aspxIsExists(itemsProperties[i][3]))
    item.visible = itemsProperties[i][3];
   if(_aspxIsExists(itemsProperties[i][4]))
    item.clientVisible = itemsProperties[i][4];
   this.items.push(item);
   item.CreateItems(itemsProperties[i][5]);
  }
 },
 GetIndexPath: function(){
  return this.indexPath;
 },
 GetItemCount: function(){
  return this.items.length;
 },
 GetItem: function(index){
  return (0 <= index && index < this.items.length) ? this.items[index] : null;
 },
 GetItemByName: function(name){
  for(var i = 0; i < this.items.length; i ++)
   if(this.items[i].name == name) return this.items[i];
  for(var i = 0; i < this.items.length; i ++){
   var item = this.items[i].GetItemByName(name);
   if(item != null) return item;
  }
  return null;
 },
 GetChecked: function(){
  var indexPath = this.GetIndexPath();
  return this.menu.IsCheckedItem(indexPath);
 },
 SetChecked: function(value){
  var indexPath = this.GetIndexPath();
  this.menu.SetItemChecked(indexPath, value);
 },
 GetEnabled: function(){
  return this.enabled && this.clientEnabled;
 },
 SetEnabled: function(value){
  if (this.clientEnabled != value) {
   this.clientEnabled = value;
   this.menu.SetItemEnabled(this.GetIndexPath(), value, false);
  }
 },
 GetImage: function() {
  return this.menu.GetItemImage(this.GetIndexPath());
 },
 GetImageUrl: function(){
  return this.menu.GetItemImageUrl(this.GetIndexPath());
 },
 SetImageUrl: function(value){
  var indexPath = this.GetIndexPath();
  this.menu.SetItemImageUrl(indexPath, value);
 },
 GetNavigateUrl: function(){
  var indexPath = this.GetIndexPath();
  return this.menu.GetItemNavigateUrl(indexPath);
 },
 SetNavigateUrl: function(value){
  var indexPath = this.GetIndexPath();
  this.menu.SetItemNavigateUrl(indexPath, value);
 },
 GetText: function(){
  var indexPath = this.GetIndexPath();
  return this.menu.GetItemText(indexPath);
 },
 SetText: function(value){
  var indexPath = this.GetIndexPath();
  this.menu.SetItemText(indexPath, value);
 },
 GetVisible: function(){
  return this.visible && this.clientVisible;
 },
 SetVisible: function(value){
  if (this.clientVisible != value) {
   this.clientVisible = value;
   this.menu.SetItemVisible(this.GetIndexPath(), value, false);
  }
 },
 InitializeEnabledAndVisible: function(recursive){
  this.menu.SetItemEnabled(this.GetIndexPath(), this.clientEnabled, true);
  this.menu.SetItemVisible(this.GetIndexPath(), this.clientVisible, true);
  if(recursive) {
   for(var i = 0; i < this.items.length; i++)
    this.items[i].InitializeEnabledAndVisible(recursive);
  }
 }
});
ASPxClientMenu = _aspxCreateClass(ASPxClientMenuBase, {
 constructor: function(name){
  this.constructor.prototype.constructor.call(this, name);
  this.isVertical = false;
  this.firstSubMenuDirection = "Auto";
 },
 IsVertical: function(indexPath){
  return this.isVertical || (indexPath.indexOf(__aspxItemIndexSeparator) > -1);
 },
 IsCorrectionDisableMethodRequired: function(indexPath){
  return (indexPath.indexOf("i") == -1) && (this.firstSubMenuDirection == "RightOrBottom" || this.firstSubMenuDirection == "LeftOrTop");
 },
 AdjustControlCore: function() {
  this.CorrectVerticalAlignment(_aspxClearHeight, this.GetPopOutElements, "PopOut", true);
  this.CorrectVerticalAlignment(_aspxClearVerticalMargins, this.GetPopOutImages, "PopOutImg", true);
  ASPxClientMenuLiteRenderHelper.CalculateMenuElements(this, this.GetMainElement());
  this.CorrectVerticalAlignment(_aspxAdjustHeight, this.GetPopOutElements, "PopOut", true);
  this.CorrectVerticalAlignment(_aspxAdjustVerticalMargins, this.GetPopOutImages, "PopOutImg", true);
  this.SetLightweightMenuHeightInIE7IfDisplayed(true);
 },
 OnBrowserWindowResize: function(evt) {
  this.AdjustControl();
 },
 GetCorrectionDisabledResult: function(x, toLeftX){
  switch(this.firstSubMenuDirection){
   case "RightOrBottom":{
    this.popupToLeft = false;
    return x;
   }
   case "LeftOrTop":{
    this.popupToLeft = true;
    return toLeftX;
   }
  }
 },
 IsHorizontalSubmenuNeedInversion: function(subMenuBottom, docClientHeight, menuItemTop, subMenuHeight, itemHeight){
  if (this.firstSubMenuDirection == "Auto")
   return ASPxClientMenuBase.prototype.IsHorizontalSubmenuNeedInversion.call(this, subMenuBottom, docClientHeight, menuItemTop, subMenuHeight, itemHeight);
  return this.firstSubMenuDirection == "LeftOrTop"
 },
 SetLightweightMenuHeightInIE7IfDisplayed: function(force) { 
  if(!__aspxIE || __aspxBrowserMajorVersion != 7)
   return;
  if(force)
   this.lightweightMenuHeightIE7Set = false;
  if(this.lightweightMenuHeightIE7Set || !this.IsDisplayed()) 
   return;
  var mainElement = this.GetMainElement();
  var commonContainer = mainElement.parentNode;
  var _this = this;
  window.setTimeout(function() {
   if(mainElement.offsetHeight != 0) 
    commonContainer.style.height = mainElement.offsetHeight + "px";
   else
    _this.lightweightMenuHeightIE7Set = false;
  }, 0);
  this.lightweightMenuHeightIE7Set = true;
 }
});
ASPxClientMenu.Cast = ASPxClientControl.Cast;
ASPxClientMenuItemEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(item) {
  this.constructor.prototype.constructor.call(this);
  this.item = item;
 }
});
ASPxClientMenuItemMouseEventArgs = _aspxCreateClass(ASPxClientMenuItemEventArgs, {
 constructor: function(item, htmlElement) {
  this.constructor.prototype.constructor.call(this, item);
  this.htmlElement = htmlElement;
 }
});
ASPxClientMenuItemClickEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(processOnServer, item, htmlElement, htmlEvent) {
  this.constructor.prototype.constructor.call(this, processOnServer);
  this.item = item;
  this.htmlElement = htmlElement;
  this.htmlEvent = htmlEvent;  
 }
});
function aspxMIClick(evt, name, indexPath){
 if(ASPxClientTouchUI.isMouseEventFromScrolling) return;
 var menu = aspxGetMenuCollection().Get(name);
 if(menu != null) menu.OnItemClick(indexPath, evt);
 if(!__aspxNetscapeFamily)
  evt.cancelBubble = true;
}
function aspxMIDDClick(evt, name, indexPath){
 var menu = aspxGetMenuCollection().Get(name);
 if(menu != null) menu.OnItemDropDownClick(indexPath, evt);
 if(!__aspxNetscapeFamily)
  evt.cancelBubble = true;
}
function aspxAMIMOver(source, args){
 var menu = aspxGetMenuCollection().GetMenu(args.item.name);
 if(menu != null) menu.OnAfterItemOver(args.item, args.element);
}
function aspxBMIMOver(source, args){
 var menu = aspxGetMenuCollection().GetMenu(args.item.name);
 if(menu != null) menu.OnBeforeItemOver(args.item, args.element);
}
function aspxMIMOverTimer(name, indexPath){
 var menu = aspxGetMenuCollection().Get(name);
 if(menu != null) menu.OnItemOverTimer(indexPath);
}
function aspxBIDisabled(source, args){
 var menu = aspxGetMenuCollection().GetMenu(args.item.name);
 if(menu != null) menu.OnBeforeItemDisabled(args.item, args.element);
}
function aspxFIKeyDown(source, args){
 var menu = aspxGetMenuCollection().GetMenu(args.item.name);
 if(menu != null) menu.OnFocusedItemKeyDown(args.htmlEvent, args.item, args.element);
}
function aspxAMIMOut(source, args){
 var menu = aspxGetMenuCollection().GetMenu(args.item.name);
 if(menu != null) menu.OnAfterItemOut(args.item, args.element, args.toElement);
}
function aspxMIMOutTimer(name){
 var menu = aspxGetMenuCollection().Get(name);
 if(menu != null) menu.OnItemOutTimer();
}
function aspxMContextMenu(evt){
 return _aspxCancelBubble(evt);
}
function aspxMSBOver(source, args) {
 var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id)
 if(menu != null) menu.ClearDisappearTimer();
}
function aspxMSBOut(source, args) {
 var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id)
 if(menu != null) menu.SetDisappearTimer();
}
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseDownEventName, aspxMenuDocumentMouseDown);
function aspxMenuDocumentMouseDown(evt){
 return aspxGetMenuCollection().OnMouseDown(evt); 
}
(function(){
 aspxAddAfterSetFocusedState(aspxAMIMOver);
 aspxAddAfterClearFocusedState(aspxAMIMOut);
 aspxAddAfterSetHoverState(aspxAMIMOver);
 aspxAddAfterClearHoverState(aspxAMIMOut);
 aspxAddBeforeSetFocusedState(aspxBMIMOver);
 aspxAddBeforeSetHoverState(aspxBMIMOver);
 aspxAddBeforeDisabled(aspxBIDisabled);
 aspxAddFocusedItemKeyDown(aspxFIKeyDown);
 aspxAddAfterSetHoverState(aspxMSBOver);
 aspxAddAfterSetPressedState(aspxMSBOver);
 aspxAddAfterClearHoverState(aspxMSBOut);
 aspxAddAfterSetPressedState(function(source, args) {
  var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id);
  if(menu) menu.StartScrolling(args.element.id, 1, 4);
 });
 aspxAddAfterClearPressedState(function(source, args) {
  var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id);
  if(menu) menu.StopScrolling(args.element.id);
 });
 if(!__aspxTouchUI){
  aspxAddAfterSetHoverState(function(source, args) {
   var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id);
   if(menu) menu.StartScrolling(args.element.id, 15, 1);
  });
  aspxAddAfterClearHoverState(function(source, args) {
   var menu = ASPxClientMenuScrollHelper.GetMenuByScrollButtonId(args.element.id);
   if(menu) menu.StopScrolling(args.element.id);
  }); 
 }
})();

ASPxClientPopupMenu = _aspxCreateClass(ASPxClientMenuBase, {
 constructor: function(name){
  this.constructor.prototype.constructor.call(this, name);
  this.skipNextPEMouseOutBeforePEMouseOver = false; 
  this.cursorOverPopupElement = false;
  this.isPopupMenu = true;
  this.closeAction = "OuterMouseClick";
  this.popupAction = "RightMouseClick";
  this.popupElementIDList = [ ];
  this.popupElementList = [ ];
  this.lastUsedPopupElementInfo = { };
  this.popupHorizontalOffset = 0;
  this.popupVerticalOffset = 0;
  this.popupHorizontalAlign = __aspxNotSetAlignIndicator;
  this.popupVerticalAlign = __aspxNotSetAlignIndicator;
  this.isPopupFullCorrectionOn = true;
  this.left = 0;
  this.top = 0;
 },
 Initialize: function() {
  this.RemoveAllPopupElements();
  this.PopulatePopupElements();
  ASPxClientMenuBase.prototype.Initialize.call(this);
 },
 SetPopupElementReference: function(popupElement, popupElementIndex, attach) {
  if(!_aspxIsExistsElement(popupElement)) return;
  var setReferenceFunction = attach ? _aspxAttachEventToElement : _aspxDetachEventFromElement;
  if(this.closeAction == "MouseOut" || this.popupAction == "MouseOver") {
   setReferenceFunction(popupElement, "mouseover", _aspxClientOverControlUtils.OnMouseOver);
   setReferenceFunction(popupElement, "mouseout",  _aspxClientOverControlUtils.OnMouseOut);
  }
  if(this.popupAction == "RightMouseClick")
   setReferenceFunction(popupElement, "contextmenu", aspxPMOnMouseUp);
  else if(this.popupAction == "LeftMouseClick")
   setReferenceFunction(popupElement, "mouseup", aspxPMOnMouseUp);
  if(attach) {
   popupElement.DXPopupElementControl = this;
   popupElement.DXPopupElementIndex = popupElementIndex;
  }else
   popupElement.DXPopupElementControl = popupElement.DXPopupElementIndex = undefined;
 },
 GetPopupElement: function (indexPopupElement) {
  var popupElement = this.popupElementList[indexPopupElement];
  return popupElement ? popupElement : null;
 },
 GetLastShownPopupElementIndex: function() {
  return _aspxGetDefinedValue(this.lastUsedPopupElementInfo.shownPEIndex, 0);
 },
 SetLastShownPopupElementIndex: function(popupElementIndex) {
  this.lastUsedPopupElementInfo.shownPEIndex = popupElementIndex;
 },
 GetLastOverPopupElementIndex: function() {
  return _aspxGetDefinedValue(this.lastUsedPopupElementInfo.overPEIndex, -1);
 },
 SetLastOverPopupElementIndex: function(popupElementIndex) {
  this.lastUsedPopupElementInfo.overPEIndex = popupElementIndex;
 },
 PopulatePopupElements: function() {
  var ids = this.popupElementIDList;
  for(var i = 0; i < ids.length; i++) {
   var popupElement = _aspxFindPopupElementById(ids[i]);
   if(popupElement)
    this.AddPopupElement(popupElement);
  }
 },
 AddPopupElement: function(popupElement) {
  var popupElementIndex = this.AddPopupElementInternal(popupElement);
  this.SetPopupElementReference(popupElement, popupElementIndex, true);
 },
 RemovePopupElement: function(popupElement) {
  this.RemovePopupElementInternal(popupElement);
  this.SetPopupElementReference(popupElement, null, false);
 },
 AddPopupElementInternal: function(element) {
  for(var i = 0; i < this.popupElementList.length; i++) {
   if(!this.popupElementList[i]) {
    this.popupElementList[i] = element;
    return i;
   }
  }
  this.popupElementList.push(element);
  return this.popupElementList.length - 1;
 },
 RemovePopupElementInternal: function(element) {
  for(var i = 0; i < this.popupElementList.length; i++) {
   if(this.popupElementList[i] == element) {
    this.popupElementList[i] = null;
    return;
   }
  }
 },
 RemoveAllPopupElements: function() {
  for(var i = 0; i < this.popupElementList.length; i++)
   this.RemovePopupElement(this.popupElementList[i]);
 },
 IsMenuVisible: function(){
  var element = this.GetMainElement();
  return (element != null) ? _aspxGetElementDisplay(element) : false;
 },
 IsVisible: function() {
  return this.isShowing || this.IsMenuVisible();
 },
 IsParentElementPositionStatic: function(indexPath){
  return false;
 },
 GetClientSubMenuPos: function(element, indexPath, pos, isXPos){
  if (indexPath == "") {
   var popupPosition = null;
   if (isXPos){
    popupPosition = _aspxGetPopupAbsoluteX(this.GetMenuMainCell(this.GetMainElement()),
     __aspxPopupShadowWidth, this.GetPopupElement(this.GetLastShownPopupElementIndex()), this.popupHorizontalAlign, this.popupHorizontalOffset, pos, this.left, this.rtl, this.isPopupFullCorrectionOn);
   }
   else{
    popupPosition = _aspxGetPopupAbsoluteY(this.GetMenuMainCell(this.GetMainElement()),
     __aspxPopupShadowHeight, this.GetPopupElement(this.GetLastShownPopupElementIndex()), this.popupVerticalAlign, this.popupVerticalOffset, pos, this.top, this.isPopupFullCorrectionOn);
   }
   popupPosition.position -= _aspxGetPositionElementOffset(element, isXPos);
   return popupPosition;
  }
  return ASPxClientMenuBase.prototype.GetClientSubMenuPos.call(this, element, indexPath, pos, isXPos);
 },
 GetMenuElement: function(indexPath){
  if (indexPath == "")
   return this.GetMainElement();
  return ASPxClientMenuBase.prototype.GetMenuElement.call(this, indexPath);
 },
 OnItemOverTimer: function(indexPath){
  aspxGetMenuCollection().ClearCurrentShowingPopupMenuName();
  if(indexPath == ""){
   aspxGetMenuCollection().DoHidePopupMenus(null, -1, this.name, false, "");
   aspxGetMenuCollection().DoShowAtCurrentPos(this.name, indexPath);
  }
  else
   ASPxClientMenuBase.prototype.OnItemOverTimer.call(this, indexPath);
 },
 DoShow: function(x, y){
  var element = this.GetMainElement();
  if(element != null && !_aspxGetElementDisplay(element)){
   aspxGetMenuCollection().DoHidePopupMenus(null, -1, this.name, false, "");
   if(!this.isInitialized)
    this.PopulatePopupElements();
   this.isShowing = true;
   this.DoShowPopupMenu(element, x, y, "");
   this.isShowing = false;
  }
 },
 ShowPopupSubMenuAfterCallback: function(element, callbackResult) { 
  this.SetSubMenuInnerHtml(element, callbackResult);
  var indexPath = this.GetIndexPathById(element.id, true);
  var scrollHelper = this.scrollHelpers[indexPath];
  if(scrollHelper) {
   element.style.height = "";
   this.PrepareScrolling(element, scrollHelper, _aspxPxToInt(element.style.top));
  }
  aspxGetControlCollection().AdjustControls(element);
 },
 WrongEventOrderOperaHack: function(){
  this.skipNextPEMouseOutBeforePEMouseOver = true;
 },
 WrongEventOrderOperaRollBack: function(){
  this.skipNextPEMouseOutBeforePEMouseOver = false;
 },
 OnAfterItemOver: function(hoverItem, hoverElement) {
  var afterItemOverAllowed = ASPxClientMenuBase.prototype.AfterItemOverAllowed(this, hoverItem);
  if(afterItemOverAllowed) {
   this.WrongEventOrderOperaHack();
   ASPxClientMenuBase.prototype.OnAfterItemOver.call(this, hoverItem, hoverElement); 
  }
 },
 OnPopupElementMouseOver: function(evt, popupElement) {
  if(popupElement != null) {
   if(popupElement.DXPopupElementIndex == this.GetLastShownPopupElementIndex())
    this.cursorOverPopupElement = true
   this.WrongEventOrderOperaRollBack();
   if(this.popupAction == "MouseOver") {
    var isVisible = this.IsMenuVisible();
    if(popupElement.DXPopupElementIndex != this.GetLastOverPopupElementIndex()) {
     this.ClearDisappearTimer();
     this.ClearAppearTimer();
     if(isVisible) {
      this.Hide();
      isVisible = false;
     }
    }
    if(!isVisible) {
     aspxGetMenuCollection().SetCurrentShowingPopupMenuName(this.name);
     this.ShowInternal(evt, popupElement.DXPopupElementIndex);
    }
    this.SetLastOverPopupElementIndex(popupElement.DXPopupElementIndex);
   }
  }
 },
 OnPopupElementMouseOut: function(evt, popupElement) {
   if (popupElement != null) {
   aspxGetMenuCollection().ClearCurrentShowingPopupMenuName();
   this.cursorOverPopupElement = false;
   if(!this.IsMenuVisible()) 
    this.ClearAppearTimer();
   else if (!this.skipNextPEMouseOutBeforePEMouseOver) 
    this.SetDisappearTimer();
   }
 },
 DoShowPopupMenuBorderCorrector: function(element, x, y, indexPath, toTheLeft, toTheTop){
  if (indexPath != "")
   ASPxClientMenuBase.prototype.DoShowPopupMenuBorderCorrector.call(this, element, x, y, indexPath, toTheLeft, toTheTop);
 },
 ShowInternal: function(evt, popupElementIndex) {
  this.SetLastShownPopupElementIndex(popupElementIndex);
  var x = _aspxGetEventX(evt);
  var y = _aspxGetEventY(evt);
  if (evt.type == "mouseover")
   aspxGetMenuCollection().SetAppearTimer(this.name, "", this.appearAfter);
  else
   this.DoShow(x, y);
 },
 GetAnimationHorizontalDirection: function(indexPath, popupPosition){
  if (this.GetMenuLevel(indexPath) == 0)
   return _aspxGetAnimationHorizontalDirection(popupPosition, this.popupHorizontalAlign, this.popupVerticalAlign, this.rtl);
  else 
   return popupPosition.isInverted ? 1 : -1;
 },
 GetAnimationVerticalDirection: function(indexPath, popupPosition){
  if (this.GetMenuLevel(indexPath) == 0)
   return _aspxGetAnimationVerticalDirection(popupPosition, this.popupHorizontalAlign, this.popupVerticalAlign);
  else 
   return 0;
 },
 OnHideByItemOut: function(){
  if(this.closeAction == "MouseOut" && !this.cursorOverPopupElement)
   this.Hide();
  else
   ASPxClientMenuBase.prototype.OnHideByItemOut.call(this);
 },
 SetPopupElementID: function(popupElementId) {
  this.RemoveAllPopupElements();
  this.popupElementIDList = popupElementId.split(';');
  if(this.closeAction == "MouseOut") {
   this.ClearDisappearTimer();
   this.Hide();
  }
  this.PopulatePopupElements();
  this.WrongEventOrderOperaRollBack();
 },
 GetCurrentPopupElementIndex: function() {
  var popupElement = this.GetCurrentPopupElement();
  return popupElement ? popupElement.DXPopupElementIndex : -1;
 },
 GetCurrentPopupElement: function() {
  var popupElement = this.GetPopupElement(this.GetLastShownPopupElementIndex());
  if(popupElement && popupElement.DXPopupElementControl)
   return popupElement;
  return null;
 },
 RefreshPopupElementConnection: function(){
  this.RemoveAllPopupElements();
  this.PopulatePopupElements();
 },
 Hide: function(){
  aspxGetMenuCollection().DoHidePopupMenus(null, -1, this.name, false, "");
 },
 Show: function(popupElementIndex){
  if(this.GetPopupElement(popupElementIndex) != null)
   this.SetLastShownPopupElementIndex(popupElementIndex);
  this.DoShow(__aspxInvalidPosition, __aspxInvalidPosition);
 },
 ShowAtElement: function(htmlElement){
  this.SetLastShownPopupElementIndex(this.AddPopupElementInternal(htmlElement));
  this.DoShow(__aspxInvalidPosition, __aspxInvalidPosition);
  this.RemovePopupElementInternal(htmlElement);
 },
 ShowAtElementByID: function(id){
  var htmlElement = document.getElementById(id);
  this.ShowAtElement(htmlElement);
 },
 ShowAtPos: function(x, y){
  var lastIndexBackup = this.GetLastShownPopupElementIndex();
  this.SetLastShownPopupElementIndex(-1);
  this.DoShow(x, y);
  this.SetLastShownPopupElementIndex(lastIndexBackup);
 },
 GetVisible: function(){
  return this.IsMenuVisible();
 },
 SetVisible: function(visible){
  if(visible && !this.IsMenuVisible())
   this.Show();
  else if(!visible && this.IsMenuVisible())
   this.Hide();
 }
});
ASPxClientPopupMenu.Cast = ASPxClientControl.Cast;
function aspxPMOnMouseUp(evt, element){
 var element = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupMenuElement);
 if(element == null || !element.DXPopupElementControl.isPopupMenu)
  return;
 var elementPopupAction = element.DXPopupElementControl.popupAction;
 switch(elementPopupAction) {
  case "LeftMouseClick":
   if(!_aspxGetIsLeftButtonPressed(evt)) return;
   break;
  case "RightMouseClick":
   _aspxPreventContextMenu(evt);
 }
 aspxGetMenuCollection().ClearDisappearTimer();
 element.DXPopupElementControl.ShowInternal(evt, element.DXPopupElementIndex);
 return _aspxCancelBubble(evt);
}
function aspxTestPopupMenuElement(element){
 return !!element.DXPopupElementControl;
}
_aspxAttachEventToDocument("mousemove", aspxPopupMenuDocumentMouseMove);
function aspxPopupMenuDocumentMouseMove(evt){
 var element = _aspxFindEventSourceParentByTestFunc(evt, aspxTestPopupMenuElement);
 if(element != null)
  aspxGetMenuCollection().SaveCurrentMouseOverPos(evt, element);
}

