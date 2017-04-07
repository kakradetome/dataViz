var __aspxDragHelper = null;
ASPxClientDragHelper = _aspxCreateClass(null, {
 constructor: function(e, root, clone){
  if(__aspxDragHelper != null) __aspxDragHelper.cancelDrag();
  this.dragArea = 5;
  this.clickX = _aspxGetEventX(e);
  this.clickY = _aspxGetEventY(e);
  this.centerClone = false;
  this.cachedCloneWidth = -1;
  this.cachedCloneHeight = -1;
  this.cachedOriginalX = -1;
  this.cachedOriginalY = -1;
  this.canDrag = true; 
  if(typeof(root) == "string") 
   root = _aspxGetParentByTagName(_aspxGetEventSource(e), root);
  this.obj = root && root != null ? root : _aspxGetEventSource(e);
  this.clone = clone;
  this.dragObj = null; 
  this.additionalObj = null;
  this.onDoClick = null;
  this.onEndDrag = null;
  this.onCancelDrag = null;
  this.onDragDivCreating = null;
  this.onCloneCreating = null;
  this.onCloneCreated = null;
  this.dragDiv = null;
  __aspxDragHelper = this;
  this.clearSelectionOnce = false;
 }, 
 drag: function(e) {
  if(!this.canDrag) return;
  _aspxClearSelection();
  if(!this.isDragging()) {
   if(!this.isOutOfDragArea(e)) 
    return;
   this.startDragCore(e);
  }
  if(__aspxIE && !_aspxGetIsLeftButtonPressed(e)) {
   this.cancelDrag(e);
   return;
  }
  if(!__aspxIE)
   _aspxSetElementSelectionEnabled(document.body, false);
  this.dragCore(e);
 },
 startDragCore: function(e) {  
  this.dragObj = this.clone != true ? this.obj : this.createClone(e);
 },
 dragCore: function(e) { 
  this.updateDragDivPosition(e);
 },
 endDrag: function(e) { 
  if(!this.isDragging() && !this.isOutOfDragArea(e)) {
   if(this.onDoClick)
    this.onDoClick(this, e);
  } else {
   if(this.onEndDrag)
    this.onEndDrag(this, e);
  }
  this.cancelDrag();
 },
 cancel: function(){
  this.cancelDrag();
 },
 cancelDrag: function() {
  if(this.dragDiv != null) {
   document.body.removeChild(this.dragDiv);
   this.dragDiv = null;
  }
  if(this.onCancelDrag)
   this.onCancelDrag(this);
  __aspxDragHelper = null;
  if(!__aspxIE)
   _aspxSetElementSelectionEnabled(document.body, true);
 },
 isDragging: function() {    
  return this.dragObj != null;
 },
 updateDragDivPosition: function(e) {
  if(this.centerClone) {
   this.dragDiv.style.left = _aspxGetEventX(e) - this.cachedCloneWidth / 2 + "px";
   this.dragDiv.style.top = _aspxGetEventY(e) - this.cachedCloneHeight / 2 + "px";
  } else {
   this.dragDiv.style.left = this.cachedOriginalX + _aspxGetEventX(e) - this.clickX + "px";
   this.dragDiv.style.top = this.cachedOriginalY + _aspxGetEventY(e) - this.clickY + "px";
  }
 },
 createClone: function(e) {
  this.dragDiv = document.createElement("div");
  if(this.onDragDivCreating)
   this.onDragDivCreating(this, this.dragDiv);
  var clone = this.creatingClone();  
  this.dragDiv.appendChild(clone);
  document.body.appendChild(this.dragDiv);
  this.dragDiv.style.position = "absolute";    
  this.dragDiv.style.cursor = "move";
  this.dragDiv.style.borderStyle = "none";
  this.dragDiv.style.padding = "0";
  this.dragDiv.style.margin = "0";
  this.dragDiv.style.backgroundColor = "transparent";
  this.dragDiv.style.zIndex = 20000; 
  if(this.onCloneCreated)
   this.onCloneCreated(clone);
  this.cachedCloneWidth = clone.offsetWidth;
  this.cachedCloneHeight = clone.offsetHeight;
  if(!this.centerClone) {  
   this.cachedOriginalX = _aspxGetAbsoluteX(this.obj);
   this.cachedOriginalY = _aspxGetAbsoluteY(this.obj);
  }
  this.dragDiv.style.width = this.cachedCloneWidth + "px";
  this.dragDiv.style.height = this.cachedCloneHeight + "px";
  this.updateDragDivPosition(e);
  return this.dragDiv;
 },
 creatingClone: function() {
  var clone = this.obj.cloneNode(true);
  if(!this.onCloneCreating) return clone;
  return this.onCloneCreating(clone);
 },
 addElementToDragDiv: function(element) {
  if(this.dragDiv == null) return;
  this.additionalObj = element.cloneNode(true);
  this.additionalObj.style.visibility = "visible";
  this.additionalObj.style.display = "";
  this.additionalObj.style.top = "";
  this.dragDiv.appendChild(this.additionalObj);
 },
 removeElementFromDragDiv: function() {
  if(this.additionalObj == null || this.dragDiv == null) return;
  this.dragDiv.removeChild(this.additionalObj);
  this.additionalObj = null;
 },
 isOutOfDragArea: function(e) {
  return Math.max(
   Math.abs(_aspxGetEventX(e) - this.clickX), 
   Math.abs(_aspxGetEventY(e) - this.clickY)
  ) >= this.dragArea;
 }
});
function DragHelper_onmouseup(e) {
 if(__aspxDragHelper != null) {
  __aspxDragHelper.endDrag(e);
  return true;
 }
}
function DragHelper_cancel(e) {
 if(__aspxDragHelper != null) {
  __aspxDragHelper.cancel(e);
  return true;
 }
}
function DragHelper_onmousemove(e) {
 if(__aspxDragHelper != null && !(__aspxWebKitTouchUI && ASPxClientTouchUI.isGesture)) {
  __aspxDragHelper.drag(e);
  if(ASPxClientTouchUI.isTouchEvent(e) && __aspxDragHelper.canDrag) {
   e.preventDefault();
   ASPxClientTouchUI.preventScrollOnEvent(e);
  }
  return true;
 }
}
function DragHelper_onkeydown(e) {
 if(!__aspxDragHelper) return;
 if(e.keyCode == ASPxKey.Esc)
  __aspxDragHelper.cancelDrag();
 return true;
}
function DragHelper_onkeyup(e) {
 if (!__aspxDragHelper) return;
 if(e.keyCode == ASPxKey.Esc && __aspxWebKitFamily)
  __aspxDragHelper.cancelDrag();
 return true;
}
function DragHelper_onselectstart(e) {
 var drag = __aspxDragHelper;
 if(drag && (drag.canDrag || drag.clearSelectionOnce)) {
  _aspxClearSelection();
  drag.clearSelectionOnce = false;
  return false;
 }
}
(function(){
 if(__aspxMSTouchUI)
  _aspxAttachEventToDocument("MSPointerCancel", DragHelper_cancel);
 _aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseUpEventName, DragHelper_onmouseup);
 _aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseMoveEventName, DragHelper_onmousemove);
 _aspxAttachEventToDocument("keydown", DragHelper_onkeydown);
 _aspxAttachEventToDocument("keyup", DragHelper_onkeyup);
 _aspxAttachEventToDocument("selectstart", DragHelper_onselectstart);
})();
var __aspxCursorTargets = null;
ASPxClientCursorTargets = _aspxCreateClass(null, {
 constructor: function() {
  this.list = [];
  this.starttargetElement = null;
  this.starttargetTag = 0;
  this.oldtargetElement = null;
  this.oldtargetTag = 0;
  this.targetElement = null;
  this.targetTag = 0;
  this.x = 0;
  this.y = 0;
  this.removedX = 0;
  this.removedY = 0;
  this.removedWidth = 0;
  this.removedHeight = 0;
  this.onTargetCreated = null;
  this.onTargetChanging = null;
  this.onTargetChanged = null;
  this.onTargetAdding = null;
  this.onTargetAllowed = null;
  __aspxCursorTargets = this;
 },
 addElement: function(element) {
  if(!this.canAddElement(element)) return null;
  var target = new ASPxClientCursorTarget(element);
  this.onTargetCreated && this.onTargetCreated(this, target);
  this.list.push(target);
  return target;
 },
 removeElement: function(element) {
  for(var i = 0; i < this.list.length; i++) {
   if(this.list[i].element == element) {
    this.list.splice(i, 1);
    return;
   }
  }
 },
 addParentElement: function(parent, child) {
  var target = this.addElement(parent);
  if(target != null) {
   target.targetElement = child;
  }
  return target;
 },
 RegisterTargets: function(element, idPrefixArray) {
  this.addFunc = this.addElement;
  this.RegisterTargetsCore(element, idPrefixArray);
 },
 UnregisterTargets: function(element, idPrefixArray) {
  this.addFunc = this.removeElement;
  this.RegisterTargetsCore(element, idPrefixArray);
 },
 RegisterTargetsCore: function(element, idPrefixArray) {
  if(element == null) return;
  for(var i = 0; i < idPrefixArray.length; i++)
   this.RegisterTargetCore(element, idPrefixArray[i]);
 },
 RegisterTargetCore: function(element, idPrefix) {
  if(!_aspxIsExists(element.id)) return;
  if(element.id.indexOf(idPrefix) > -1)
   this.addFunc(element);
  for(var i = 0; i < element.childNodes.length; i++)
   this.RegisterTargetCore(element.childNodes[i], idPrefix);
 },
 canAddElement: function(element) {
  if(element == null || !_aspxGetElementDisplay(element))
   return false;
  for(var i = 0; i < this.list.length; i++) {
   if(this.list[i].targetElement == element) return false;
  }
  if(this.onTargetAdding != null && !this.onTargetAdding(this, element)) return false;
  return element.style.visibility != "hidden";
 },
 removeInitialTarget: function(x, y) {
  var el = this.getTarget(x + _aspxGetDocumentScrollLeft(), y + _aspxGetDocumentScrollTop());
  if(el == null) return;
  this.removedX = _aspxGetAbsoluteX(el);
  this.removedY = _aspxGetAbsoluteY(el);
  this.removedWidth = el.offsetWidth;
  this.removedHeight = el.offsetHeight;
 },
 getTarget: function(x, y) {
  for(var i = 0; i < this.list.length; i++) {
   var record = this.list[i];
   if(record.contains(x, y)) {
    if(!this.onTargetAllowed || this.onTargetAllowed(record.targetElement, x, y))
     return record.targetElement;
   }
  }
  return null;
 },
 targetChanged: function(element, tag) {
  this.targetElement = element;
  this.targetTag = tag;
  if(this.onTargetChanging)
   this.onTargetChanging(this);
  if(this.oldtargetElement != this.targetElement || this.oldtargetTag != this.targetTag) {
   if(this.onTargetChanged)
    this.onTargetChanged(this);
   this.oldtargetElement = this.targetElement;
   this.oldtargetTag = this.targetTag;
  }
 },
 cancelChanging: function() {
  this.targetElement = this.oldtargetElement;
  this.targetTag = this.oldtargetTag;
 },
 isLeftPartOfElement: function() {
  if(this.targetElement == null) return true;
  var left = this.x - this.targetElementX();
  return left < this.targetElement.offsetWidth / 2;
 },
 isTopPartOfElement: function() {
  if(this.targetElement == null) return true;
  var top = this.y - this.targetElementY();
  return top < this.targetElement.offsetHeight / 2;
 },
 targetElementX: function() {
  return this.targetElement != null ? _aspxGetAbsoluteX(this.targetElement) : 0;
 },
 targetElementY: function() {
  return this.targetElement != null ? _aspxGetAbsoluteY(this.targetElement) : 0;
 },
 onmousemove: function(e) {
  this.doTargetChanged(e);
 },
 onmouseup: function(e) {
  this.doTargetChanged(e);
  __aspxCursorTargets = null;
 },
 doTargetChanged: function(e) {
  this.x = _aspxGetEventX(e);
  this.y = _aspxGetEventY(e);
  if(this.inRemovedBounds(this.x, this.y)) return;
  this.targetChanged(this.getTarget(this.x, this.y), 0);
 },
 inRemovedBounds: function(x, y) {
  if(this.removedWidth == 0) return false;
  return x > this.removedX && x < (this.removedX + this.removedWidth) &&
   y > this.removedY && y < (this.removedY + this.removedHeight);
 }
});
ASPxClientCursorTarget = _aspxCreateClass(null, {
 constructor: function(element) {
  this.element = element;
  this.targetElement = element;
  this.UpdatePosition();
 },
 contains: function(x, y) {
  return x >= this.absoluteX && x <= this.absoluteX + this.GetElementWidth() &&
   y >= this.absoluteY && y <= this.absoluteY + this.GetElementHeight();
 },
 GetElementWidth: function() {
  return this.element.offsetWidth;
 },
 GetElementHeight: function() {
  return this.element.offsetHeight;
 },
 UpdatePosition: function() {
  this.absoluteX = _aspxGetAbsoluteX(this.element);
  this.absoluteY = _aspxGetAbsoluteY(this.element);
 }
});
function CursorTarget_onmouseup(e) {
 if(__aspxCursorTargets != null) {
  __aspxCursorTargets.onmouseup(e);
  return true;
 }
}
function CursorTarget_onmousemove(e) {
 if(__aspxCursorTargets != null) {
  __aspxCursorTargets.onmousemove(e);
  return true;
 }
}
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseUpEventName, CursorTarget_onmouseup);
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseMoveEventName, CursorTarget_onmousemove);

__aspxTableScrollHelpers = [ ];
ASPxClientTableHelperBase = _aspxCreateClass(null, {
 constructor: function(control, contentTableIDSuffix, headerTableIDSuffix, footerTableIDSuffix, horzScroll, vertScroll){
  this.control = control;
  this.horzScroll = horzScroll;
  this.vertScroll = vertScroll;
  this.contentTableIDSuffix = contentTableIDSuffix;
  this.headerTableIDSuffix = headerTableIDSuffix;
  this.footerTableIDSuffix = footerTableIDSuffix;
 },
 GetChildElementByID: function(idSuffix) {
  return _aspxGetElementById(this.control.name + "_" + idSuffix);
 },
 GetTable: function(tableIDSuffix) {
  return this.GetChildElementByID(tableIDSuffix);
 },
 GetContentTable: function() {
  return this.GetTable(this.contentTableIDSuffix);
 },
 GetHeaderTable: function() {
  return this.GetTable(this.headerTableIDSuffix);
 },
 GetFooterTable: function() {
  return this.GetTable(this.footerTableIDSuffix);
 },
 HasHorzScroll: function() { return this.horzScroll != ASPxScrollBarMode.Hidden; }, 
 HasVertScroll: function() { return this.vertScroll != ASPxScrollBarMode.Hidden; },
 IsHorzAutoScroll: function() {
  return this.horzScroll == ASPxScrollBarMode.Auto;
 },
 IsVertAutoScroll: function() {
  return this.vertScroll == ASPxScrollBarMode.Auto;
 },
 IsRtl: function() { return false; },
 GetArmatureCells: function(table) {
  return table.rows[0].cells;
 },
 GetArmatureCell: function(cell) {
  var index = this.GetArmatureCellIndexByOtherCell(cell);
  return this.GetArmatureCells(_aspxGetParentByTagName(cell, "TABLE"))[index];
 },
 GetArmatureCellIndexByOtherCell: function(cell) {
  return cell.cellIndex;
 },
 GetCellRealWidth: function(cell) {
  var width = this.GetStylePxWidth(this.GetArmatureCell(cell));
  return width > -1 ? width : cell.offsetWidth
 },
 GetStylePxWidth: function(element) {
  var width = element.style.width;
  if(width && width.indexOf("px") > -1) 
   return parseInt(width, 10);
  return -1;
 }
});
ASPxClientTableHelperAdapter = _aspxCreateClass(null, {
 constructor: function(tableHelper) {
  this.tableHelper = tableHelper;
  this.control = this.tableHelper.control;
 },
 GetContentTable: function() {
  return this.tableHelper.GetContentTable();
 },
 GetHeaderTable: function() {
  return this.tableHelper.GetHeaderTable();
 },
 GetFooterTable: function() {
  return this.tableHelper.GetFooterTable();
 },
 GetArmatureCells: function(table) {
  return this.tableHelper.GetArmatureCells(table);
 },
 GetArmatureCell: function(cell) {
  return this.tableHelper.GetArmatureCell(cell);
 },
 GetCellRealWidth: function(cell) {
  return this.tableHelper.GetCellRealWidth(cell);
 },
 GetStylePxWidth: function(element) {
  return this.tableHelper.GetStylePxWidth(element);
 },
 HasHorzScroll: function() {
  return this.tableHelper.HasHorzScroll();
 }, 
 HasVertScroll: function() {
  return this.tableHelper.HasVertScroll();
 },
 IsRtl: function() {
  return this.tableHelper.IsRtl();
 }
});
ASPxClientTableScrollHelperBase = _aspxCreateClass(ASPxClientTableHelperAdapter, {
 constructor: function(tableHelper) {
  this.constructor.prototype.constructor.call(this, tableHelper);
  this.touchUIScroller = null;
  this.savedScrollLeft = this.IsRtl() ? 0x1fffffff : -1;
  this.savedScrollTop = -1;
  this.posLoggerHandler = null;
  this.scrollableControlHeight = -1;
  this.activeElementSettings = [ ];
  __aspxTableScrollHelpers.push(this);
 },
 Update: function() {
  this.AssignPosLoggerHandler(this.GetScrollDiv(this.GetContentTable()));
  if(this.HasHorzScroll()) {
   this.AssignScrollEvent(this.GetScrollDiv(this.GetHeaderTable()));
   this.AssignScrollEvent(this.GetScrollDiv(this.GetContentTable()));
  }
  if(__aspxWebKitTouchUI)
   this.UpdateTouchUIScroller();
  this.UpdateScrollableControlsSize();
  if(this.tableHelper.control.resetScrollTop) {
   this.ResetScrollTop();
   this.tableHelper.control.resetScrollTop = false;
  }
  this.LoadScrollPosition();
  this.ApplyScrollPosition();
 },
 UpdateTouchUIScroller: function() {
  this.touchUIScroller = this.touchUIScroller || this.CreateTouchUIScroller();
  if(!_aspxIsExistsElement(this.touchUIScroller.element))
   this.touchUIScroller.ChangeElement(this.GetScrollDiv(this.GetContentTable()));
 },
 CreateTouchUIScroller: function() {
  return ASPxClientTouchUI.MakeScrollable(this.GetScrollDiv(this.GetContentTable()), { 
   showHorizontalScrollbar: this.ShowTouchHorizontalScrollbar(),
   showVerticalScrollbar: this.ShowTouchVerticalScrollbar(),
   forceCustomScroll: this.UseTouchCustomScroll()
  });
 },
 ShowTouchHorizontalScrollbar: function() {
  return this.HasHorzScroll();
 },
 ShowTouchVerticalScrollbar: function() {
  return this.HasVertScroll();
 },
 UseTouchCustomScroll: function() {
  return false;
 },
 AssignScrollEvent: function(element) {
  if(!element || element.scrollHelper == this) 
   return;
  element.scrollHelper = this;
  _aspxAttachEventToElement(element, "scroll", this.OnScroll);
 },
 OnScroll: function(event) {
  var src = _aspxGetEventSource(event);
  var helper = src.scrollHelper;
  if(!helper) return;
  var scrollDivs = [ 
   helper.GetScrollDiv(helper.GetHeaderTable()),
   helper.GetScrollDiv(helper.GetContentTable()),
   helper.GetScrollDiv(helper.GetFooterTable())
  ];
  for(var i = 0; i < scrollDivs.length; i++) {
   var div = scrollDivs[i];
   if(!div || div == src)
    continue;
   if(__aspxIE && __aspxBrowserVersion > 9 && i == 1)
    helper.SetScrollLeftPostponed(div, src);
   else
    helper.SetScrollLeft(div, src);
  }
 },
 SetScrollLeftPostponed: function(target, source) {
  if(!this.scrollUpdateTimerID) {
   this.scrollUpdateTimerID = window.setInterval(function() {
    this.SetScrollLeft(target, source);
   }.aspxBind(this), 0);
  }
  _aspxClearTimer(this.scrollUpdateTimerStopID);
  this.scrollUpdateTimerStopID = window.setTimeout(function() {
   _aspxClearInterval(this.scrollUpdateTimerID);
   delete this.scrollUpdateTimerID;
   delete this.scrollUpdateTimerStopID
  }.aspxBind(this), 500)
 },
 SetScrollLeft: function(target, source) {
  if(target.scrollLeft != source.scrollLeft)
   target.scrollLeft = source.scrollLeft;
 },
 AssignPosLoggerHandler: function(element) {
  if (!element) return;
  if(!this.posLoggerHandler)
   this.posLoggerHandler = function() { this.LogScrollPosition(); }.aspxBind(this);
  _aspxDetachEventFromElement(element, "scroll", this.posLoggerHandler);
  _aspxAttachEventToElement(element, "scroll", this.posLoggerHandler);
 },
 OnWindowResize: function() {
  if(!this.IsOriginalWidthPercentage())
   return;
  window.setTimeout(function() { 
   this.UpdateScrollableControlsSize(true);
   var resizingHelper = this.GetResizingHelper();
   if(this.IsOriginalWidthPercentage() && resizingHelper)
    resizingHelper.ValidateColumnWidths();
  }.aspxBind(this), 0);
 },
 UpdateScrollableControlsSize: function(onResize) {
  if(!this.control.GetMainElement()) 
   return;
  if(!this.control.IsDisplayed()) {
   this.control.ResetControlAdjustment();
   return;
  }
  this.SaveActiveElement();
  if(this.HasVertScroll() && this.scrollableControlHeight > -1)
   this.SetHeightCore(this.scrollableControlHeight);
  var mainTable = this.control.GetMainElement(),
   mainCell = mainTable.rows[0].cells[0],
   headerTable = this.GetHeaderTable(),
   contentTable = this.GetContentTable(),
   footerTable = this.GetFooterTable();
  var parts = [ headerTable, contentTable, footerTable ];
  var body = __aspxWebKitFamily ? document.body : document.documentElement;
  var scrollTop = this.GetScrollDiv(contentTable).scrollTop,
   scrollLeft = this.GetScrollDiv(contentTable).scrollLeft,
   savedHeight = mainTable.style.height,
   bodyScrollLeft = body.scrollLeft,
   scrollContainerPadding = this.IsVerticalScrollBarShowed() ? _aspxGetVerticalScrollBarWidth() : 0;
  mainTable.style.height = mainCell.offsetHeight + "px";
  for(var i = 0; i < parts.length; i++) {
   if(parts[i]) 
    parts[i].parentNode.style.display = "none";
  }
  _aspxRestoreElementOriginalWidth(mainTable);
  var desiredTableWidth = mainTable.offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(mainTable);
  var desiredPartWidth = desiredTableWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(mainCell);
  var oldIE = __aspxIE && __aspxBrowserVersion < 8;
  if(oldIE) 
   contentTable.style.width = "100%";
  for(var i = 0; i < parts.length; i++) {
   var part = parts[i];
   if(!part) continue;
   var padding = 0;
   var div = part.parentNode;
   if(part != contentTable) {
    padding = scrollContainerPadding;
    div.parentNode.style.paddingRight = padding + "px";
   }
   var borderStyle = _aspxGetCurrentStyle(part == headerTable ? div.parentNode : div);
   padding += _aspxPxToInt(borderStyle.borderRightWidth) + _aspxPxToInt(borderStyle.borderLeftWidth);
   div.align = "left";
   div.style.width = oldIE ? "1%" : "";
   div.style.display = "";
   if(!this.HasHorzScroll() && part == headerTable) {
    var actualWidth = part.offsetWidth + padding;
    if(actualWidth > desiredPartWidth)
     desiredPartWidth = actualWidth;
   }
   this.SetElementWidth(div, desiredPartWidth - padding);
   if(!this.HasHorzScroll() && oldIE && part == contentTable && scrollContainerPadding > 0)
    part.style.width = Math.max(desiredPartWidth - _aspxGetVerticalScrollBarWidth(), 0) + "px";
  }
  if(this.IsContentTableEmpty() && this.HasHorzScroll() && headerTable)
   contentTable.style.width = headerTable.offsetWidth + "px";
  mainTable.style.width = desiredTableWidth + "px";
  mainTable.style.height = savedHeight;
  if(oldIE && !this.HasVertScroll() && this.tableHelper.IsHorzAutoScroll()) {
   var paddingBottom = 0;
   if(contentTable.offsetWidth > this.GetScrollDiv(contentTable).offsetWidth)
    paddingBottom = _aspxGetVerticalScrollBarWidth();
   this.GetScrollDiv(contentTable).style.paddingBottom = paddingBottom + "px";
  }
  if(oldIE && this.HasHorzScroll() && this.HasVertScroll() && !this.tableHelper.IsVertAutoScroll() && headerTable) {
   var contentTableWidth = contentTable.offsetWidth;
   var headerTableWidth = headerTable.offsetWidth;
   var diff = contentTableWidth - headerTableWidth;
   if(diff === _aspxGetVerticalScrollBarWidth())
    contentTable.style.width = headerTableWidth + "px";
  }
  this.GetScrollDiv(contentTable).scrollTop = scrollTop;
  this.GetScrollDiv(contentTable).scrollLeft = scrollLeft;
  if(body.scrollLeft != bodyScrollLeft) 
   body.scrollLeft = bodyScrollLeft;
  this.RestoreActiveElement();
  aspxGetControlCollection().AdjustControls(mainTable);
 },
 IsVerticalScrollBarShowed: function() {
  if(!this.HasVertScroll())
   return false;
  if(this.tableHelper.IsVertAutoScroll())
   return this.GetContentTableExcessHeight() > 0;
  return true;
 },
 GetContentTableExcessHeight: function() {
  var contentDiv = this.GetScrollDiv(this.GetContentTable());
  var scrollSize = _aspxGetVerticalScrollBarWidth();
  var contentWidth = 0;
  var contentHeight = 0;
  for(var i = 0; i < contentDiv.childNodes.length; i++) {
   var child = contentDiv.childNodes[i];
   if(child.nodeType != 1) 
    continue;
   contentWidth = Math.max(contentWidth, child.offsetWidth);
   contentHeight += child.offsetHeight;
  }
  var divWidth = contentDiv.offsetWidth;
  var divHeight = contentDiv.offsetHeight;
  var divHasHorzScroll = contentWidth > divWidth;
  var divHasVertScroll = contentHeight > divHeight;
  if(!divHasHorzScroll && divHasVertScroll)
   divHasHorzScroll = contentWidth > (divWidth - scrollSize);
  if(divHasHorzScroll && !divHasVertScroll)
   divHasVertScroll = contentHeight > (divHeight - scrollSize);
  var result = contentHeight - divHeight;
  if(divHasVertScroll)
   result += scrollSize;
  return result;
 },
 IsContentTableEmpty: function() {
  return false;
 },
 SetElementWidth: function(element, width) {
  if(!element || width <= 0) 
   return;
  element.style.width = width + "px";
 },
 GetScrollDiv: function(childTable) {
  if(!childTable) return null;
  return childTable.parentNode;
 },
 MakeRowVisible: function(row, fromKbdHelper) {
  var div = this.GetScrollDiv(this.GetContentTable());
  if(div == null || !row || !this.HasVertScroll()) 
   return;
  var divTop = _aspxGetAbsoluteY(div);
  var rowTop = _aspxGetAbsoluteY(row);
  var topDiff = divTop - rowTop;
  if(topDiff > 0) {
   div.scrollTop -= topDiff;
   return; 
  }
  var divBottom = divTop + div.clientHeight + 1;
  var rowBottom = rowTop + row.offsetHeight;
  var bottomDiff = rowBottom - divBottom;
  if(bottomDiff <= 0) return;
  var diff = fromKbdHelper ? bottomDiff : topDiff * -1;
  div.scrollTop += diff;
 },
 GetHorzScrollableControl: function() {
  if(this.HasHorzScroll()) 
   return this.GetScrollDiv(this.GetContentTable());
  return null;
 },
 GetVertScrollableControl: function() {
  if(this.HasVertScroll()) 
   return this.GetScrollDiv(this.GetContentTable());
  return null;
 },
 LogScrollPosition: function() {
  if(!this.control.GetMainElement()) return;
  if(this.HasHorzScroll())
   this.savedScrollLeft = this.GetHorzScrollableControl().scrollLeft;
  if(this.HasVertScroll())
   this.savedScrollTop = this.GetVertScrollableControl().scrollTop;
  this.SaveScrollPosition();
 },
 SaveScrollPosition: function() {
  ASPxSimpleHiddenField.Set("SP", this.savedScrollLeft + ";" + this.savedScrollTop, this.GetStateInput());
 },
 LoadScrollPosition: function() {
  var savedState = ASPxSimpleHiddenField.Get("SP", this.GetStateInput());
  if(savedState && savedState.length > 0) {
   var list = savedState.split(";");
   this.savedScrollLeft = Number(list[0]);
   this.savedScrollTop = Number(list[1]);
  }
 },
 ApplyScrollPosition: function() {
  this.SetHorzScrollPosition(this.savedScrollLeft);
  this.SetVertScrollPosition(this.savedScrollTop);
 },
 SetHorzScrollPosition: function(pos) {
  if(!this.HasHorzScroll() || pos < 0) 
   return;
  this.SetScrollPositionCore(this.GetHorzScrollableControl(), pos, false);
 },
 SetVertScrollPosition: function(pos) {
  if(!this.HasVertScroll() || pos < 0)
   return;
  this.SetScrollPositionCore(this.GetVertScrollableControl(), pos, true);
 },
 SetScrollPositionCore: function(element, pos, isTop) {
  if(isTop) {
   if(element.scrollTop != pos)
    element.scrollTop = pos;
  } else if(element.scrollLeft != pos) {
   element.scrollLeft = pos;
  }
 },
 GetHorzScrollPosition: function() {
  if(!this.HasHorzScroll()) return 0;
  return this.GetScrollPositionCore(this.GetHorzScrollableControl(), false);
 },
 GetVertScrollPosition: function() {
  if(!this.HasVertScroll()) return 0;
  return this.GetScrollPositionCore(this.GetVertScrollableControl(), true);
 },
 GetScrollPositionCore: function(element, isTop) {
  return isTop ? element.scrollTop : element.scrollLeft;
 },
 GetStateInput: function() { },
 ResetScrollTop: function() {
  this.savedScrollTop = 0;
  this.SaveScrollPosition();
 },
 SetHeight: function(height) {
  if(!this.HasVertScroll()) 
   return;
  if(this.scrollableControlHeight && this.scrollableControlHeight === height)
   return;
  this.scrollableControlHeight = height;
  this.SetHeightCore(height);
  this.Update();
 },
 SetHeightCore: function(height) {
  var mainElement = this.control.GetMainElement();
  var div = this.GetVertScrollableControl();
  var mainElementHeight = mainElement.offsetHeight;
  if (__aspxIE && __aspxBrowserVersion > 8)
   mainElementHeight = _aspxPxToFloat(window.getComputedStyle(mainElement, null).height);
  height = _aspxPxToFloat(div.style.height) + (height - mainElementHeight);
  div.style.height = Math.max(height, 0) + "px";
 },
 OnSetWidth: function() {
  _aspxDropElementOriginalWidth(this.control.GetMainElement());
 },
 IsOriginalWidthPercentage: function() {
  var mainElement = this.control.GetMainElement();
  var width = String(_aspxGetElementOriginalWidth(mainElement));
  return _aspxIsPercentageSize(width);
 },
 SaveActiveElement: function() {
  if(!__aspxIE) return;
  var activeElement = _aspxGetActiveElement();
  if(!activeElement || activeElement.tagName != "INPUT" && activeElement.tagName != "TEXTAREA") 
   return;
  if(!_aspxGetIsParent(this.control.GetMainElement(), activeElement))
   return;
  var selInfo = _aspxGetSelectionInfo(activeElement);
  this.activeElementSettings = [ activeElement, selInfo.startPos, selInfo.endPos ];
 },
 RestoreActiveElement: function() {
  if(!__aspxIE || !this.activeElementSettings || this.activeElementSettings.length == 0)
   return;
  var oldElement = this.activeElementSettings[0];
  var currentElement = _aspxGetActiveElement();
  if(!_aspxIsExistsElement(oldElement) || currentElement === oldElement)
   return;
  oldElement.focus();
  _aspxSetInputSelection(oldElement, this.activeElementSettings[1], this.activeElementSettings[2]);
  this.activeElementSettings = null;
 }
});
ASPxClientTableScrollHelperBase.prevBodyWidth = -1;
__aspxTableColumnResizing = null;
ASPxClientTableResizingHelperBase = _aspxCreateClass(ASPxClientTableHelperAdapter, {
 constructor: function(tableHelper) {
  this.constructor.prototype.constructor.call(this, tableHelper);
  this.maximumOffset = __aspxTouchUI ? 10 : 3;
  this.defaultMinWidth = 16;
  this.prevX = 0;
  this.colInfo = { };
  this.nextColInfo = { };
 },
 IsResizing: function() { 
  return __aspxTableColumnResizing == this;
 },
 CanStartResizing: function(e, headerCell) {
  this.prevX = _aspxGetEventX(e);
  var left = _aspxGetAbsoluteX(headerCell);
  var right = left + headerCell.offsetWidth - 1;
  var isLeftEdge = this.prevX - left < this.maximumOffset;
  var isRightEdge = right - this.prevX <= this.maximumOffset;
  if(!isLeftEdge && !isRightEdge)
   return false;
  var columnIndex = this.GetColumnIndexById(headerCell.id);
  var rtl = this.IsRtl();
  if(isLeftEdge && !rtl || isRightEdge && rtl)
   return !this.IsLeftmostColumn(columnIndex);
  if(isRightEdge && !rtl || isLeftEdge && rtl) {
   if(!this.IsNextColumnResizable())
    return true;
   return !this.IsRightmostColumn(columnIndex);
  }
 },
 GetResizingColumnIndex: function(e, headerCell) {
  var isLeft = _aspxGetEventX(e) < _aspxGetAbsoluteX(headerCell) + headerCell.offsetWidth / 2;
  if(this.IsRtl())
   isLeft = !isLeft;
  var columnIndex = this.GetColumnIndexById(headerCell.id);
  return this.GetResizingColumnIndexCore(columnIndex, isLeft);
 },
 GetResizingColumnIndexCore: function(columnIndex, isLeft) {
  if(isLeft)
   return this.GetColumnNeighbor(columnIndex, true);
  return columnIndex;
 },
 StartResizing: function(columnIndex) {
  this.colInfo = this.GetColumnInfo(columnIndex);
  if(this.IsNextColumnResizable())
   this.nextColInfo = this.GetColumnInfo(this.GetColumnNeighbor(columnIndex, false));
  __aspxTableColumnResizing = this;
  _aspxSetElementSelectionEnabled(document.body, false);
 },
 EndResizing: function() {
  if(!this.colInfo.headerCell)
   return;
  this.SaveControlDimensions();
  aspxGetControlCollection().AdjustControls(this.control.GetMainElement());
  this.OnResized(this.colInfo.index);
 },
 CancelResizing: function() {
  __aspxTableColumnResizing = null;
  _aspxSetElementSelectionEnabled(document.body, true);
  this.prevX = 0;
  this.colInfo = { };
  this.nextColInfo = { };
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.Update();
 },
 OnMouseMove: function(e) {
  if(ASPxClientTouchUI.isTouchEvent(e) && !ASPxClientTouchUI.isGesture)
   e.preventDefault();
  if(this.colInfo.headerCell.cellIndex < 0) { 
   this.CancelResizing(e);
   return;
  }
  _aspxClearSelection();
  this.Resize(e);
 },
 OnMouseUp: function(e) {
  this.EndResizing();
  this.CancelResizing();
 },
 Resize: function(e) {
  var newX = _aspxGetEventX(e);
  var delta = newX - this.prevX;
  if(this.IsRtl())
   delta = -delta;
  var newWidth = this.GetCellRealWidth(this.colInfo.headerCell) + delta;
  var minWidth = this.colInfo.minWidth > 0 ? this.colInfo.minWidth : this.defaultMinWidth;
  var nextColNewWidth = nextColMinWidth = 0;
  if(this.IsNextColumnResizable()) {
   nextColNewWidth = this.GetCellRealWidth(this.nextColInfo.headerCell) - delta;
   nextColMinWidth = this.nextColInfo.minWidth > 0 ? this.nextColInfo.minWidth : this.defaultMinWidth;
  }
  if(newWidth < minWidth || nextColNewWidth < nextColMinWidth)
   return;
  this.prevX = newX;
  var table = this.control.GetMainElement();
  var tableWidth = table.offsetWidth;
  this.ApplyColumnWidth(this.colInfo.index, newWidth + "px");
  this.colInfo.armCell.minWidthAssigned = false;
  if(this.IsNextColumnResizable()) {
   this.ApplyColumnWidth(this.nextColInfo.index, nextColNewWidth + "px");
   this.nextColInfo.armCell.minWidthAssigned = false;
  } else if(!this.HasHorzScroll()) {
   table.style.width = (tableWidth + delta) + "px";
   if(this.HasVertScroll())
    this.GetScrollHelper().Update();
  }
  if(__aspxIE && __aspxBrowserVersion == 9 && this.tableHelper.IsHorzAutoScroll())
   this.GetContentTable().parentNode.className = this.GenerateRandomClassName();
 },
 ApplyColumnWidth: function(columnIndex, width) {
  var cellIndex = this.GetArmatureCellIndex(columnIndex);
  this.ApplyCellWidth(this.GetHeaderTable(), cellIndex, width);
  this.ApplyCellWidth(this.GetContentTable(), cellIndex, width);
  if(this.NeedResizeFooterTable())
   this.ApplyCellWidth(this.GetFooterTable(), cellIndex, width);
 },
 ApplyCellWidth: function(table, cellIndex, width) {
  if(!table)
   return;
  this.GetArmatureCells(table)[cellIndex].style.width = width;
 },
 IsNextColumnResizable: function() { },
 GetColumnIndices: function() { },
 GetColumnIndexById: function(id) { },
 GetColumnMinWidth: function(columnIndex) { },
 GetHeaderCell: function(columnIndex) { },
 GetArmatureCellIndex: function(columnIndex) { },
 GetScrollHelper: function() { },
 OnResized: function(columnIndex) { },
 NeedResizeFooterTable: function() { },
 GetStateInput: function() { },
 GetColumnNeighbor: function(columnIndex, isLeft) {
  var indices = this.GetColumnIndices();
  var index = -1;
  for(var i = 0; i < indices.length; i++) {
   if(indices[i] === columnIndex) {
    index = isLeft ? i - 1 : i + 1;
    break;
   }
  }
  if(index < 0 || index >= indices.length)
   return -1;
  return indices[index];
 },
 IsLeftmostColumn: function(columnIndex) {
  return this.GetColumnIndices()[0] === columnIndex;
 },
 IsRightmostColumn: function(columnIndex) {
  var indices = this.GetColumnIndices();
  return indices[indices.length - 1] === columnIndex;
 },
 SaveControlDimensions: function(onlyControlWidth) {
  var input = this.GetStateInput();
  if(onlyControlWidth && input.value)
   return;
  var state = { };
  var controlWidth = this.GetStylePxWidth(this.control.GetMainElement());
  if(controlWidth > -1)
   state["ctrlWidth"] = controlWidth;
  if(!onlyControlWidth) {
   var indices = this.GetColumnIndices();
   for(var i = 0; i < indices.length; i++) {
    var index = indices[i];
    state[index] = this.GetCellRealWidth(this.GetHeaderCell(index));
   }
  }
  input.value = _aspxToJson(state);
 },
 UpdateCursor: function(e, headerCell) {
  var changed = true;
  if(this.IsResizing() || this.CanStartResizing(e, headerCell))
   _aspxChangeStyleAttribute(headerCell, "cursor", "w-resize");
  else
   changed = _aspxRestoreStyleAttribute(headerCell, "cursor");
  if(__aspxIE && __aspxBrowserVersion == 9 && this.tableHelper.IsHorzAutoScroll() && changed)
   this.GetContentTable().parentNode.className = this.GenerateRandomClassName();
 },
 GetColumnInfoList: function() {
  var list = [ ];
  var indices = this.GetColumnIndices();
  for(var i = 0; i < indices.length; i++)
   list.push(this.GetColumnInfo(indices[i]));
  list.sort(function(i1, i2) { 
   var w1 = i1.minWidth;
   var w2 = i2.minWidth;
   if(w1 > w2)
    return 1;
   else if(w1 < w2)
    return -1;
   else
    return 0;
  });
  return list;
 },
 GetColumnInfo: function(columnIndex) {
  var headerCell = this.GetHeaderCell(columnIndex);
  var armCell = this.GetArmatureCell(headerCell);
  return {
   index: columnIndex,
   headerCell: headerCell,
   armCell: armCell,
   minWidth: this.GetColumnMinWidth(columnIndex),
   pxWidth: this.GetStylePxWidth(armCell),
   minWidthAssigned: armCell.minWidthAssigned
  };
 },
 ValidateColumnWidths: function() {
  if(this.HasHorzScroll()) 
   return;
  var indices = this.GetColumnIndices();
  var validationRequired = false;
  for(var i = 0; i < indices.length; i++) {
   if(this.GetColumnMinWidth(indices[i]) > 0)
    validationRequired = true;
  }
  if(!validationRequired)
   return;
  var columnInfoList = this.GetColumnInfoList();
  var totalColumnWidth = 0;
  var allColumnsHasWidth = true;
  for(var i = 0; i < columnInfoList.length && allColumnsHasWidth; i++) {
   var info = columnInfoList[i];
   allColumnsHasWidth &= info.pxWidth > 0;
   totalColumnWidth += info.pxWidth;
  }
  var tablePxWidth = this.GetStylePxWidth(this.control.GetMainElement());
  if(allColumnsHasWidth && tablePxWidth > -1 && tablePxWidth <= totalColumnWidth)
   return;
  var processedList = [ ];
  for(var i = 0; i < columnInfoList.length; i++) {
   var info = columnInfoList[i];
   if(info.minWidth > 0 && (info.pxWidth <= 0 || info.minWidthAssigned))
    processedList.push(info);
  }
  this.ValidateColumnWidthsCore(processedList);
  if(this.HasVertScroll())
   this.GetScrollHelper().Update();
 },
 ValidateColumnWidthsCore: function(columnInfoList) {
  for(var i = 0; i < columnInfoList.length; i++) {
   var info = columnInfoList[i];
   if(info.minWidthAssigned)
    info.minWidthAssigned = !this.TryRestoreColumnWidth(info);
   else
    info.minWidthAssigned = this.TryCorrectColumnWidth(info);
  }
  for(var i = 0; i < columnInfoList.length; i++) {
   var info = columnInfoList[i];
   if(!info.minWidthAssigned)
    this.TryCorrectColumnWidth(info);
  }
 },
 TryRestoreColumnWidth: function(columnInfo) {
  var armCell = columnInfo.armCell;
  armCell.style.width = armCell.savedWidth;
  if(armCell.offsetWidth <= columnInfo.minWidth) {
   armCell.style.width = columnInfo.minWidth + "px";
   return false;
  }
  this.ApplyColumnWidth(columnInfo.index, armCell.savedWidth);
  armCell.minWidthAssigned = false;
  armCell.savedWidth = null;
  return true;
 },
 TryCorrectColumnWidth: function(columnInfo) {
  var armCell = columnInfo.armCell;
  if(armCell.offsetWidth >= columnInfo.minWidth)
   return false;
  armCell.savedWidth = armCell.style.width;
  armCell.minWidthAssigned = true;
  this.ApplyColumnWidth(columnInfo.index, columnInfo.minWidth + "px");
  return true;
 },
 ResetStretchedColumnWidth: function() {
  if(this.HasHorzScroll())
   return;
  var columnIndex = this.FindStretchedColumn();
  if(columnIndex > -1)
   this.ApplyColumnWidth(columnIndex, "");
 },
 FindStretchedColumn: function() {
  var columnInfoList = this.GetColumnInfoList();
  if(columnInfoList.length == 0)
   return -1;
  for(var i = 0; i < columnInfoList.length; i++) {
   if(columnInfoList[i].pxWidth < 0)
    return -1;
  }
  var indices = this.GetColumnIndices();
  return indices[indices.length - 1];
 },
 GenerateRandomClassName: function() {
  return "dx" + Math.floor((Math.random() + 1) * 100000).toString(36);
 }
});
_aspxAttachEventToElement(window, "resize", function(e) {
 if(!document.body) return; 
 var width = document.body.offsetWidth;
 if(width == ASPxClientTableScrollHelperBase.prevBodyWidth)
  return;
 ASPxClientTableScrollHelperBase.prevBodyWidth = width;
 for(var i = 0; i < __aspxTableScrollHelpers.length; i++)
  __aspxTableScrollHelpers[i].OnWindowResize();
});
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseMoveEventName, function(e) {
 if(__aspxTableColumnResizing != null && !(__aspxWebKitTouchUI && ASPxClientTouchUI.isGesture)) {
  __aspxTableColumnResizing.OnMouseMove(e);
  return true;
 }
});
_aspxAttachEventToDocument(ASPxClientTouchUI.touchMouseUpEventName, function(e) {
 if(__aspxTableColumnResizing != null) {
  __aspxTableColumnResizing.OnMouseUp(e);
  return true;
 }
});
ASPxClientGridViewTableHelper = _aspxCreateClass(ASPxClientTableHelperBase, {
 GridDetailIndentClassName: "dxgvDI",
 GridGroupIndentClassName: "dxgvGI",
 constructor: function(control, contentTableIDSuffix, headerTableIDSuffix, footerTableIDSuffix, horzScroll, vertScroll) {
  this.constructor.prototype.constructor.call(this, control, contentTableIDSuffix, headerTableIDSuffix, footerTableIDSuffix, horzScroll, vertScroll);
 },
 GetChildElementByID: function(idSuffix) {
  return this.control.GetChildElementById(idSuffix);
 },
 GetArmatureCellIndexByOtherCell: function(cell) {
  var grid = this.control;
  if(!grid.IsHeaderRow(cell.parentNode))
   ASPxClientTableHelperBase.prototype.GetArmatureCellIndexByOtherCell.call(this, cell);
  var columnIndex = grid.getColumnIndex(cell.id);
  return this.GetArmatureCellIndex(columnIndex);
 },
 GetArmatureCellIndex: function(columnIndex) {
  var grid = this.control;
  return grid.indentColumnCount + grid.GetHeaderMatrix().GetLeafIndex(columnIndex);
 },
 UpdateIndentCellWidths: function() {
  var indentCount = this.control.indentColumnCount;
  if(indentCount == 0)
   return;
  var info = this.GetIndentsWidth(indentCount);
  if(info.group <= 0 && info.detail <= 0)
   return;
  var tables = [this.GetHeaderTable(), this.GetContentTable(), this.GetFooterTable()];
  for(var i = 0; i < tables.length; i++) {
   var table = tables[i];
   if(!table) continue;
   var armCells = this.GetArmatureCells(table);
   for(var j = 0; j < armCells.length; j++) {
    if(j >= indentCount) 
     break;
    var width = j == indentCount - 1 && info.detail > 0 ? info.detail : info.group;
    var cell = armCells[j];
    if(this.GetStylePxWidth(cell) != width)
     cell.style.width = width + "px";
   }
  }
 },
 GetIndentsWidth: function(indentCount) {
  var grid = this.control;
  var headerRow = grid.GetHeaderRow(0);
  var groupRow = this.FindFirstVisibleRow(true);
  var dataRow = this.FindFirstVisibleRow();
  var groupButton = this.FindExpandCollapseButton(headerRow, 0) || this.FindExpandCollapseButton(dataRow, 0);
  var detailButton = this.FindExpandCollapseButton(headerRow, indentCount - 1, true) || this.FindExpandCollapseButton(dataRow, indentCount - 1, true);
  return { group : this.GetButtonWidth(groupButton), detail : this.GetButtonWidth(detailButton) };
 },
 FindExpandCollapseButton: function(row, cellIndex, isDetail) {
  if(!row || row.cells.length === 0) return;
  var rowCells = row.cells;
  var armCells = this.GetArmatureCells(row.parentNode.parentNode);
  return this.FindExpandCollapseButtonCore(rowCells[cellIndex], armCells[cellIndex], isDetail);
 },
 FindExpandCollapseButtonCore: function(cell, armCell, isDetail) {
  if(!cell || !armCell) return;
  var hasDetail = armCell.className.indexOf(this.GridDetailIndentClassName) >= 0 && isDetail;
  var hasGroup = armCell.className.indexOf(this.GridGroupIndentClassName) >= 0 && !isDetail;
  if(!hasDetail && !hasGroup) return;
  var images = _aspxGetChildNodesByTagName(cell, "IMG");
  return images.length === 1 ? images[0] : null;
 },
 FindFirstVisibleRow: function(isGroup) {
  var grid = this.control;
  var start = grid.GetTopVisibleIndex();
  var end = start + grid.GetVisibleRowsOnPage();
  for(var i = start; i < end; i++) {
   var row = isGroup ? grid.GetGroupRow(i) : grid.GetDataRow(i);
   if(row) return row;
  }
 },
 GetButtonWidth: function(button) {
  if(!button) return -1;
  return button.offsetWidth + _aspxGetLeftRightBordersAndPaddingsSummaryValue(button.parentNode);
 },
 IsRtl: function() { return this.control.rtl; }
});
ASPxClientGridViewTableResizingHelper = _aspxCreateClass(ASPxClientTableResizingHelperBase, {
 constructor: function(tableHelper) {
  this.constructor.prototype.constructor.call(this, tableHelper);
 },
 IsNextColumnResizable: function() { 
  return this.control.columnResizeMode == ASPxColumnResizeMode.NextColumn; 
 },
 GetScrollHelper: function() { 
  return this.control.GetScrollHelper(); 
 },
 GetHeaderCell: function(columnIndex) { 
  return this.control.GetHeader(columnIndex); 
 },
 GetColumnIndices: function() { 
  return this.control.GetHeaderMatrix().GetLeafIndices(); 
 },
 GetColumnIndexById: function(id) { 
  return this.control.getColumnIndex(id); 
 },
 GetColumnMinWidth: function(columnIndex) {
  return this.control.columns[columnIndex].minWidth;
 },
 GetArmatureCellIndex: function(columnIndex) {
  return this.tableHelper.GetArmatureCellIndex(columnIndex);
 },
 GetColumnNeighbor: function(columnIndex, isLeft) {
  var matrix = this.control.GetHeaderMatrix();
  return matrix.GetLeaf(columnIndex, isLeft, true);
 },
 GetResizingColumnIndexCore: function(columnIndex, isLeft) {
  var matrix = this.control.GetHeaderMatrix();
  return matrix.GetLeaf(columnIndex, isLeft, isLeft);
 },
 NeedResizeFooterTable: function() {
  return !this.control.hasFooterRowTemplate;
 },
 OnResized: function(columnIndex) {
  this.control.RaiseColumnResized(this.control.columns[columnIndex]);
 },
 GetStateInput: function() {
  return this.control.GetColResizedInput();
 }
});
ASPxClientGridViewTableScrollHelper = _aspxCreateClass(ASPxClientTableScrollHelperBase, {
 constructor: function(tableHelper) {
  this.constructor.prototype.constructor.call(this, tableHelper);
  this.isVirtualScrolling = this.control.isVirtualScrolling;
  this.lockVirtualScrolling = false;
  this.virtualScrollRowHeight = -1;
  this.virtualScrollPrevPos = -1;
  this.virtualScrollTimerID = -1;
  this.virtualScrollHandler = null;
  this.useEndlessPaging = this.control.useEndlessPaging;
 },
 Update: function() {
  if(this.isVirtualScrolling)
   this.UpdateVirtualScrolling();
  if(this.useEndlessPaging)
   this.UpdateEndlessPaging();
  ASPxClientTableScrollHelperBase.prototype.Update.call(this);
 },
 UpdateScrollableControlsSize: function(onResize) {
  if(onResize && this.HasFixedColumns())
   return;
  if(this.HasFixedColumns())
   this.UpdateFixedDivSize();
  ASPxClientTableScrollHelperBase.prototype.UpdateScrollableControlsSize.call(this, onResize);
 },
 UpdateFixedDivSize: function() {
  var fixedHelper = this.control.GetFixedColumnsHelper();
  if(!fixedHelper) return;
  var divs = [
   this.GetScrollDiv(this.GetContentTable()),
   fixedHelper.GetFixedDiv()
  ];
  var mainTable = this.control.GetMainElement();
  if(this.IsOriginalWidthPercentage(mainTable)) {
   for(var i = 0; i < divs.length; i++)
    this.SetElementWidth(divs[i], 1);
   _aspxRestoreElementOriginalWidth(mainTable);
  }
  var width = mainTable.offsetWidth - _aspxGetLeftRightBordersAndPaddingsSummaryValue(mainTable);
  if(width < 0) 
   width = 0;
  for(var i = 0; i < divs.length; i++)
   this.SetElementWidth(divs[i], width);
  fixedHelper.Update();
 },
 SetHeight: function(val) {
  if(this.useEndlessPaging)
   this.CheckEndlessPagingLoadNextPage();
  ASPxClientTableScrollHelperBase.prototype.SetHeight.call(this, val);
 },
 HasFixedColumns: function() {
  return this.control.fixedColumnCount > 0 && this.control.GetFixedColumnsDiv();
 },
 IsContentTableEmpty: function() {
  return this.control.pageRowCount < 1;
 },
 ShowTouchHorizontalScrollbar: function() {
  return this.HasHorzScroll() && !this.HasFixedColumns();
 },
 UseTouchCustomScroll: function() {
  return this.HasFixedColumns();
 },
 GetStateInput: function() {
  return this.control.GetPostBackSyncInput();
 },
 AssignPosLoggerHandler: function(element) {
  if(this.HasVertScroll() || !this.HasFixedColumns())
   ASPxClientTableScrollHelperBase.prototype.AssignPosLoggerHandler.call(this, element);
  if(this.HasFixedColumns())
   ASPxClientTableScrollHelperBase.prototype.AssignPosLoggerHandler.call(this, this.control.GetFixedColumnsDiv());
 },
 GetHorzScrollableControl: function() {
  if(this.HasFixedColumns())
   return this.control.GetFixedColumnsDiv();
  return ASPxClientTableScrollHelperBase.prototype.GetHorzScrollableControl.call(this);
 },
 IsRestoreScrollPosition: function(){
  var grid = this.control;
  if(this.savedScrollTop > -1 && this.savedScrollTop !== grid.GetVerticalScrollPosition())
   return true;
  if(this.savedScrollLeft > -1 && this.savedScrollLeft !== grid.GetHorizontalScrollPosition())
   return true;
  return false;
 },
 LoadScrollPosition: function() {
  ASPxClientTableScrollHelperBase.prototype.LoadScrollPosition.call(this);
  var grid = this.control;
  var newRowVertScrollPos = this.GetNewRowVertScrollPos();
  if(newRowVertScrollPos > -1)
   this.savedScrollTop = newRowVertScrollPos;
  if(grid.rtl && this.HasFixedColumns() && this.savedScrollLeft == 0)
   this.savedScrollLeft = 1;
 },
 ApplyScrollPosition: function() {
  if(!this.isVirtualScrolling && this.savedScrollTop > -1)
   this.SetVertScrollPosition(this.savedScrollTop);
  if(this.savedScrollLeft > -1)
   window.setTimeout(function() { this.SetHorzScrollPosition(this.savedScrollLeft); }.aspxBind(this), 0);
 },
 SetScrollPositionCore: function(element, pos, isTop) {
  this.lockVirtualScrolling = true;
  try {
   ASPxClientTableScrollHelperBase.prototype.SetScrollPositionCore.call(this, element, pos, isTop);
   if(isTop) {
    var popup = this.control.GetPopupEditForm();
    if(popup && popup.GetVisible())
     popup.UpdatePosition();
   }
  } finally {
   this.lockVirtualScrolling = false;
  }
 },
 GetNewRowVertScrollPos: function() {
  var grid = this.control;
  if(grid.IsNewRowEditing()) {
   var row = grid.GetEditingRow(grid);
   if(row)
    return !grid.IsNewRowAtBottom() ? 0 : 0x1fffffff;
  }
  return -1;
 },
 GetResizingHelper: function() { return this.control.GetResizingHelper(); },
 UpdateVirtualScrolling: function() {
  this.UpdateVirtualScrollMargins();
  if(!this.virtualScrollHandler) 
   this.virtualScrollHandler = function() { this.OnVirtualScroll(); }.aspxBind(this);
  window.setTimeout(function() { 
   _aspxAttachEventToElement(this.GetVertScrollableControl(), "scroll", this.virtualScrollHandler); 
  }.aspxBind(this), 0);
 },
 UpdateVirtualScrollMargins: function() {
  var grid = this.control;
  if(grid.pageCount < 1)
   return;
  var table = this.GetContentTable();
  var topDiv, bottomDiv;
  var prev;
  for(var i = 0; i < table.parentNode.childNodes.length; i++) {
   var child = table.parentNode.childNodes[i];
   if(child.nodeType != 1)
    continue;
   if(child == table && prev)
    topDiv = prev;
   if(prev == table) {
    bottomDiv = child;
    break;
   }
   prev = child;
  }
  var rowHeight = this.GetVirtualScrollRowHeight();
  var topMargin = grid.visibleStartIndex * rowHeight;
  var bottomMargin = (grid.pageRowSize * (grid.pageCount - grid.pageIndex - 1) + grid.pageRowSize - grid.pageRowCount) * rowHeight;
  this.PrepareVirtualScrollMarginDiv(topDiv, topMargin);
  this.PrepareVirtualScrollMarginDiv(bottomDiv, bottomMargin);
  window.setTimeout(function() {
   this.SetVertScrollPosition(topMargin);
   this.virtualScrollPrevPos = topMargin;
  }.aspxBind(this), 0);
 },
 PrepareVirtualScrollMarginDiv: function(div, height) {
  if(!div) return;
  var maxPieceHeight = 1100000;
  if(height <= maxPieceHeight) {
   div.style.height = height + "px";
  } else {
   while(height > 0) {
    var pieceHeight = height >= maxPieceHeight ? maxPieceHeight : height;
    height -= maxPieceHeight;
    var pieceDiv = document.createElement("DIV");
    pieceDiv.style.height = pieceHeight + "px";
    div.appendChild(pieceDiv);
   } 
  }
 },
 OnVirtualScroll: function() {
  this.ClearVirtualScrollTimer();
  var deferredHandler = function() { this.HandleVirtualScroll(); }.aspxBind(this);
  this.virtualScrollTimerID = window.setTimeout(deferredHandler, 1000);
 },
 HandleVirtualScroll: function() {
  var pos = this.GetVertScrollPosition();
  if(pos == this.virtualScrollPrevPos)
   return;
  this.virtualScrollPrevPos = pos;
  if(this.lockVirtualScrolling) 
   return;
  var grid = this.control;
  var index = this.GetPageIndexForVirtualScrollPos(pos);
  if(index != grid.pageIndex) {
   _aspxDetachEventFromElement(this.GetVertScrollableControl(), "scroll", this.virtualScrollHandler);
   grid.PreventCallbackAnimation();
   grid.GotoPage(index);
  }
 },
 GetPageIndexForVirtualScrollPos: function(pos) {
  var grid = this.control;
  var table = this.GetContentTable();
  var container = table.parentNode;
  var index = Math.floor(grid.pageCount * pos / container.scrollHeight);
  var tableTop = _aspxGetAbsoluteY(table);
  var containerTop = _aspxGetAbsoluteY(container);
  var tableBottom = tableTop + table.offsetHeight;
  var containerBottom = containerTop + container.clientHeight;
  if(tableTop < containerTop && tableBottom > containerTop && tableBottom <= containerBottom)
   index++;
  return Math.min(grid.pageCount - 1, index);
 },
 ClearVirtualScrollTimer: function() {
  this.virtualScrollTimerID = _aspxClearTimer(this.virtualScrollTimerID);
 },
 GetVirtualScrollRowHeight: function() {
  var grid = this.control;
  if(this.virtualScrollRowHeight < 0) {
   var dataRow = grid.GetDataRow(grid.visibleStartIndex);
   var previewRow = grid.GetPreviewRow(grid.visibleStartIndex);
   var height = dataRow ? dataRow.offsetHeight : 20;
   if(previewRow)
    height += previewRow.offsetHeight;
   this.virtualScrollRowHeight = height;
  }
  return this.virtualScrollRowHeight;
 },
 UpdateEndlessPaging: function() {
  var container = this.GetVertScrollableControl();
  if(container.dxEndlessPaging)
   return;
  _aspxAttachEventToElement(container, "scroll", function(e) { this.OnEndlessPagingScroll(e); }.aspxBind(this)); 
  container.dxEndlessPaging = true;
 },
 OnEndlessPagingScroll: function(e) {
  this.CheckEndlessPagingLoadNextPage();
 },
 CheckEndlessPagingLoadNextPage: function() {
  var grid = this.control;
  if(grid.pageIndex + 1 === grid.pageCount || grid.pageCount === 0 || grid.InCallback())
   return;
  var table = this.GetContentTable();
  var scrollDiv = this.GetScrollDiv(table);
  var contentHeight = table.offsetHeight;
  var avgPageHeight = grid.pageRowSize * contentHeight / grid.pageRowCount;
  var bottomExcess = contentHeight - scrollDiv.clientHeight - scrollDiv.scrollTop;
  if(bottomExcess < avgPageHeight / 3)
   grid.NextPage();
 }
});
ASPxClientTableFixedColumnsHelper = _aspxCreateClass(ASPxClientTableHelperAdapter, {
 constructor: function(tableHelper, fixedDivName, fixedContentDivName, fixedColumnCount){
  this.constructor.prototype.constructor.call(this, tableHelper);
  this.FixedDivName = fixedDivName;
  this.FixedContentDivName = fixedContentDivName;
  this.FixedColumnCount = fixedColumnCount; 
  this.hiddenColumnCount = 0;
  this.touchUIScroller = null;
  this.mouseScroller = null;
  this.savedScrollPos = -1;
 },
 GetFixedDiv: function() { return this.tableHelper.GetChildElementByID(this.FixedDivName); },
 GetFixedContentDiv: function() { return this.tableHelper.GetChildElementByID(this.FixedContentDivName); },
 Update: function() {
  var contentDiv = this.GetContentTable().parentNode;
  this.AttacheEvent(this.GetFixedDiv(), "scroll", this.OnScroll);
  this.AttacheEvent(contentDiv, "scroll", function() { 
   var expectedLeft = this.control.rtl ? 0x1fffffff : 0;
   if(contentDiv.scrollLeft != expectedLeft)
    contentDiv.scrollLeft = expectedLeft;
  }.aspxBind(this));
  if(__aspxTouchUI)
   this.UpdateMouseScroller();
  if(__aspxWebKitTouchUI)
   this.UpdateTouchUIScroller();
  if(__aspxMacOSPlatform && __aspxWebKitFamily) 
   this.UpdateWheelScroller();
  this.UpdateFixedDivSize();
 },
 UpdateFixedDivSize: function() {
  var fixedDiv = this.GetFixedDiv();
  if((__aspxWebKitFamily || __aspxIE) && fixedDiv.scrollLeft == 0 && this.savedScrollPos > 0) 
   fixedDiv.scrollLeft = this.savedScrollPos;
  var fixedContentDiv = this.GetFixedContentDiv();
  var contentDivStyleWidth = fixedContentDiv.style.width;
  var contentDivStyleHeight = fixedContentDiv.style.height;
  var contentDivWidth = this.GetFixedContentDivWidth() + "px";
  var contentDivHeight = this.GetFixedContentDivHeight() + "px";
  if(contentDivStyleWidth !== contentDivWidth)
   fixedContentDiv.style.width = contentDivWidth;
  if(contentDivStyleHeight !== contentDivHeight || fixedDiv.style.height !== contentDivHeight)
   fixedContentDiv.style.height = fixedDiv.style.height = contentDivHeight;
  this.UpdateRowHeights();
 },
 GetFixedContentDivWidth: function() {
  var armCells = this.GetArmatureCells(this.GetHeaderTable() || this.GetContentTable());
  var totalWidth = 0;
  for(var i = 0; i < armCells.length; i++) {
   var width = this.GetStylePxWidth(armCells[i]);
   totalWidth += width > -1 ? width : 0;
  }
  return totalWidth;
 },
 GetFixedContentDivHeight: function() {
  var scrollHeigth = _aspxGetVerticalScrollBarWidth() + 1; 
  if(__aspxMacOSPlatform && __aspxWebKitFamily && _aspxGetVerticalScrollBarWidth() == 0) 
   scrollHeigth = 12;
  return scrollHeigth;
 },
 OnScroll: function(event) {
  var src = _aspxGetEventSource(event);
  var helper = src.fixedHelper;
  helper.savedScrollPos = src.scrollLeft;
  helper.UpdateCellsVisibility(helper.GetColumnsToHide(src.scrollLeft));
  if(helper.control.rtl && __aspxIE && __aspxBrowserVersion < 8) {
   var tables = [ helper.GetHeaderTable(), helper.GetContentTable(), helper.GetFooterTable() ];
   for(var i = 0; i < tables.length; i++) {
    if(!tables[i]) continue;
    tables[i].offsetParent.scrollLeft = 0x1fffffff;
   }
  }
 },
 AttacheEvent: function(element, eventName, eventHandler) {
  if(!element) return;
  var eventMarker = "gvfh" + eventName;
  if(element[eventMarker])
   return;
  _aspxAttachEventToElement(element, eventName, eventHandler);
  element[eventMarker] = true;
  element.fixedHelper = this;
 },
 DetacheEvent: function(element, eventName, eventHandler) {
  if(!element) return;
  _aspxDetachEventFromElement(element, eventName, eventHandler);
  var eventMarker = "gvfh" + eventName;
  element[eventMarker] = false;
  element.fixedHelper = null;
 },
 SetScrollLeft: function(target, scrollLeft) {
  if(target.scrollLeft != scrollLeft)
   target.scrollLeft = scrollLeft;
 },
 UpdateMouseScroller: function() {
  var getContentDiv = function() { return this.GetContentTable().parentNode; }.aspxBind(this);
  if(!this.mouseScroller)
   this.mouseScroller = ASPxMouseScroller.Create(
    getContentDiv,
    function() { return this.GetFixedDiv(); }.aspxBind(this),
    getContentDiv,
    function(element) { return this.control.IsHeaderChild(element); }.aspxBind(this),
    true, 
    function(e) { this.UpdateTouchScrollBars(); }.aspxBind(this),
    function(e) { this.UpdateTouchScrollBars(); }.aspxBind(this),
    function(e) { this.UpdateTouchScrollBars(true); }.aspxBind(this)
   );
  else
   this.mouseScroller.update();
 },
 UpdateTouchUIScroller: function() {
  this.touchUIScroller = this.touchUIScroller || this.CreateTouchUIScroller();
  if(!_aspxIsExistsElement(this.touchUIScroller.element))
   this.touchUIScroller.ChangeElement(this.GetFixedDiv());
 },
 CreateTouchUIScroller: function() {
  return ASPxClientTouchUI.MakeScrollable(this.GetFixedDiv(), { 
   showHorizontalScrollbar: true, 
   showVerticalScrollbar: false,
   forceCustomScroll: true
  });
 },
 UpdateTouchScrollBars: function(hide) {
  if(!this.touchUIScroller) 
   return;
  if(hide) {
   this.touchUIScroller.hideScrollBars();
  } else {
   this.touchUIScroller.updateScrollHandles();
   this.touchUIScroller.showScrollBars();
  }
 },
 UpdateWheelScroller: function() {
  var contentDiv = this.GetContentTable().parentNode;
  if(this.wheelHandler)
   _aspxDetachEventFromElement(contentDiv, "mousewheel", this.wheelHandler);
  this.wheelHandler = this.wheelHandler || this.CreateWheelHandler();
  _aspxAttachEventToElement(contentDiv, "mousewheel", this.wheelHandler);
 },
 CreateWheelHandler: function() {
  return function(e) {
   if(!e.wheelDeltaX) 
    return;
   var fixedDiv = this.GetFixedDiv();
   var delta = e.wheelDeltaX / 120;
   var leftDirection = delta > 0;
   var isLeftmost = fixedDiv.scrollLeft == 0;
   var isRightmost = fixedDiv.scrollLeft + fixedDiv.offsetWidth == fixedDiv.scrollWidth
   if(leftDirection && isLeftmost || !leftDirection && isRightmost)
    return;
   fixedDiv.scrollLeft += -1 * delta * 100;
   return _aspxPreventEvent(e);
  }.aspxBind(this);
 },
 GetColumnsToHide: function(pos) {
  var grid = this.control;
  var indices = grid.GetHeaderMatrix().GetLeafIndices();
  if(grid.rtl) {
   pos = this.GetFixedContentDiv().scrollWidth - pos - grid.GetMainElement().offsetWidth;
   if(grid.HasVertScroll())
    pos += _aspxGetVerticalScrollBarWidth();
  }
  var i;
  var width = 0;
  for(i = this.FixedColumnCount; i < indices.length; i ++) {
   if(width >= pos) break;    
   width += this.GetCellRealWidth(grid.GetHeader(indices[i]));
  }
  return i - this.FixedColumnCount;
 },
 UpdateCellsVisibility: function(columnsToHide) {
  if(this.hiddenColumnCount == columnsToHide)
   return;
  var prevHiddenColumnCount = this.hiddenColumnCount;
  this.hiddenColumnCount = columnsToHide;
  var startIndex = Math.min(prevHiddenColumnCount, this.hiddenColumnCount) + this.FixedColumnCount;
  var endIndex = Math.max(prevHiddenColumnCount, this.hiddenColumnCount) + this.FixedColumnCount;
  var display = this.hiddenColumnCount - prevHiddenColumnCount > 0 ? "none" : "";
  var tables = [ this.GetHeaderTable(), this.GetContentTable(), this.GetFooterTable() ];
  for(var tableIndex = 0; tableIndex < tables.length; tableIndex++) {
   var table = tables[tableIndex];
   if(!table)
    continue;
   var armCells = this.GetArmatureCells(table);
   for(var i = startIndex; i < endIndex; i++)
    armCells[i].style.display = display;
   for(var rowIndex = 0; rowIndex < table.rows.length; rowIndex++) {
    var row = table.rows[rowIndex];
    if(this.control.IsHeaderRow(row))
     continue;
    this.ChangeCellsVisibility(row, startIndex, endIndex - 1, display);
   }
  }
  this.UpdateHeadersVisibility();
 },
 ChangeCellsVisibility: function(row, startIndex, endIndex, display) { 
  for(var i = startIndex; i <= endIndex; i++) {
   if(!row.cells[i])
    break;
   row.cells[i].style.display = display;
  }
 },
 UpdateHeadersVisibility: function() {
  var grid = this.control;
  var matrix = grid.GetHeaderMatrix();
  var totalSpans = { };
  var hiddenSpans = { };
  for(var rowIndex = 0; rowIndex < matrix.GetRowCount(); rowIndex++) {
   var indices = matrix.GetRowIndices(rowIndex);
   for(var i = this.FixedColumnCount; i < indices.length; i++) {
    var columnIndex = indices[i];
    if(isNaN(totalSpans[columnIndex])) totalSpans[columnIndex] = 0;
    if(isNaN(hiddenSpans[columnIndex])) hiddenSpans[columnIndex] = 0;
    totalSpans[columnIndex]++;
    if(i < this.FixedColumnCount + this.hiddenColumnCount)
     hiddenSpans[columnIndex]++;
   }
  }  
  for(var i = 0; i < grid.columns.length; i++) {
   var columnIndex = grid.columns[i].index;
   if(isNaN(totalSpans[columnIndex]))
    continue;
   var visible = totalSpans[columnIndex] > hiddenSpans[columnIndex];
   var header = grid.GetHeader(columnIndex);
   header.style.display = visible ? "" : "none";
   if(visible && matrix.GetRowCount() > 1)
    header.colSpan = Math.max(1, (totalSpans[columnIndex] - hiddenSpans[columnIndex]) / matrix.GetRowSpan(columnIndex));
  }
 },
 UpdateRowHeights: function() {
  var rows = this.GetRowsForHeightCorrection();
  var skipCorrection = true;
  for(var i = 0; i < rows.length; i++)
   skipCorrection &= !!rows[i].heightCorrected;
  if(skipCorrection)
   return;
  var savedColumnsToHide = this.hiddenColumnCount;
  if(savedColumnsToHide !== 0)
   this.UpdateCellsVisibility(0);
  this.UpdateRowHeightsCore(rows);
  if(savedColumnsToHide !== 0)
   this.UpdateCellsVisibility(savedColumnsToHide);
  for(var i = 0; i < rows.length; i++)
   rows[i].heightCorrected = true;
 },
 UpdateRowHeightsCore: function(rows) {
  ASPxGridViewFixedColumnsStyleSheetHelper.Instance.BeginUpdate();
  var styleSheetRules = this.GetStyleSheetRulesForHeightCorrection(rows);
  ASPxGridViewFixedColumnsStyleSheetHelper.Instance.ChangeRules(this.control, styleSheetRules);
  ASPxGridViewFixedColumnsStyleSheetHelper.Instance.EndUpdate();
 },
 GetRowsForHeightCorrection: function() {
  var tables = [ this.GetHeaderTable(), this.GetContentTable(), this.GetFooterTable() ];
  var rows = [ ];
  for(var tableIndex = 0; tableIndex < tables.length; tableIndex++) {
   var table = tables[tableIndex];
   if(!table) continue;
   for(var i = 0; i < table.rows.length; i++)
    rows.push(table.rows[i]);
  }
  return rows;
 },
 GetStyleSheetRulesForHeightCorrection: function(rows) {
  var selectors = { };
  var selectorMask = [ "#", "id", " > ", "td", ".dxgvHEC" ];
  if(__aspxIE && __aspxBrowserVersion < 8)
   selectorMask[2] = " ";
  for(var i = 0; i < rows.length; i++) {
   var row = rows[i];
   if(row.cells.length < 1 || !row.id)
    continue;
   var cell = row.cells[row.cells.length - 1];
   var h = cell.offsetHeight;
   if(h <= 0) continue;
   if(!selectors[h])
    selectors[h] = [ ];
   var selectorArgs = selectorMask.slice(0);
   selectorArgs[1] = row.id;
   selectors[h].push(selectorArgs.join(""));
  }
  var rules = [ ];
  for(var height in selectors)
   rules.push({ 
    selector: selectors[height].join(", "), 
    cssText: "height:" + height + "px"
   });
  return rules;
 },
 TryShowColumn: function(columnIndex, showFullRect) {
  if(!_aspxIsExists(columnIndex) || columnIndex < 0) 
   return false;
  var grid = this.control;
  var matrix = grid.GetHeaderMatrix();
  var index =  matrix.GetLeafIndex(columnIndex);
  if(index < this.FixedColumnCount)
   return false;
  var hiddenColumnCount = this.CalcHiddenColumnCount(columnIndex, showFullRect);
  if(this.hiddenColumnCount === hiddenColumnCount)
   return false;
  var columnsWidth = this.GetHiddenColumnsTotalWidth(hiddenColumnCount);
  var scrollLeft = columnsWidth > 10 ? columnsWidth - 10 : 0;
  this.UpdateCellsVisibility(hiddenColumnCount);
  this.control.SetHorizontalScrollPosition(scrollLeft);
  return true;
 },
 CalcHiddenColumnCount: function(visibleColumnIndex, showFullRect) {
  var grid = this.control;
  var matrix = grid.GetHeaderMatrix();
  var columnIndices = matrix.GetLeafIndices();
  var scrollDivWidth = this.GetContentTable().parentNode.offsetWidth;
  var fixedWidth = 0;
  var columnWidths = [ ];
  for(var i = 0; i < columnIndices.length; i++) {
   var width = this.GetCellRealWidth(grid.GetHeader(columnIndices[i]));
   columnWidths[i] = width;
   if(i < this.FixedColumnCount)
    fixedWidth += width;
  }
  var scrolledPartWidth = scrollDivWidth - fixedWidth;
  var start = this.FixedColumnCount + this.hiddenColumnCount;
  var end = this.GetLastColumnIndexFromBound(columnWidths, scrolledPartWidth, start, showFullRect);
  var index =  matrix.GetLeafIndex(visibleColumnIndex);
  var inc = index > start ? 1 : -1;
  while(index < start || index > end) {
   start += inc;
   end = this.GetLastColumnIndexFromBound(columnWidths, scrolledPartWidth, start, showFullRect);
   if(end === columnIndices.length - 1)
    break;
  }
  return start - this.FixedColumnCount;
 },
 GetLastColumnIndexFromBound: function(columnWidths, rectWidth, start, allowRightBound) {
  for(var i = start; i < columnWidths.length; i++) {
   rectWidth -= columnWidths[i];
   if(rectWidth > 0) continue;
   if(allowRightBound && rectWidth !== 0) 
    i--
   return i;
  }
  return columnWidths.length - 1;
 },
 GetHiddenColumnsTotalWidth: function(hiddenColumnCount) {
  var totalWidth = 0;
  var grid = this.control;
  var indices = grid.GetHeaderMatrix().GetLeafIndices();
  for(var i = 0; i < hiddenColumnCount; i++)
   totalWidth += this.GetCellRealWidth(grid.GetHeader(indices[i + this.FixedColumnCount]));
  return totalWidth;
 },
 SaveCallbackSettings: function() {
  this.savedScrollPos = -1;
 },
 RestoreCallbackSettings: function() {
  if(this.control.IsLastCallbackProcessedAsEndless())
   return;
  this.FixedColumnCount = this.control.fixedColumnCount;
  this.hiddenColumnCount = 0;
 },
 HideColumnsRelyOnScrollPosition: function() {
  var scrollHelper = this.control.GetScrollHelper();
  var columnsToHide = this.GetColumnsToHide(scrollHelper.savedScrollLeft);
  this.UpdateCellsVisibility(columnsToHide);
 },
 GetHiddenColumns: function() {
  var result = [ ];
  var indices = this.control.GetHeaderMatrix().GetLeafIndices();
  var start = this.FixedColumnCount;
  var end = start + this.hiddenColumnCount - 1;
  for(var i = start; i <= end; i++)
   result.push(indices[i]);
  return result;
 }
});
ASPxGridViewFixedColumnsStyleSheetHelper = _aspxCreateClass(null, {
 constructor: function() {
  this.styleSheet = null;
  this.rules = { };
  this.updateLock = 0;
 },
 ChangeRules: function(control, rules) {
  if(control.name && rules)
   this.rules[control.name] = rules
 },
 BeginUpdate: function() {
  this.updateLock++;
  if(this.styleSheet)
   _aspxRemoveElement(this.styleSheet);
 },
 EndUpdate: function() {
  this.updateLock--;
  if(this.updateLock !== 0)
   return;
  var styleArgs = [ ];
  for(var key in this.rules) {
   var controlRules = this.rules[key];
   for(var i = 0; i < controlRules.length; i++) {
    var rule = controlRules[i];
    styleArgs.push(rule.selector + " { " + rule.cssText + " } ");
   }
  }
  this.styleSheet = this.CreateStyleSheet(styleArgs.join(""));
 },
 CreateStyleSheet: function(cssText) {
  var container = document.createElement("DIV");
  _aspxSetInnerHtml(container, "<style type='text/css'>" + cssText + "</style>");
  styleSheet = _aspxGetChildByTagName(container, "style", 0);
  if(styleSheet) 
   _aspxGetChildByTagName(document, "HEAD", 0).appendChild(styleSheet);
  return styleSheet;
 }
});
ASPxGridViewFixedColumnsStyleSheetHelper.Instance = new ASPxGridViewFixedColumnsStyleSheetHelper();
ASPxClientGridViewEndlessPagingHelper = _aspxCreateClass(null, {
 constructor: function(grid) {
  this.grid = grid;
  this.showLoadingPanelAtBottom = false;
  this.focusedRowIndexInfo =  { 
   beforeCallback: -1,
   underCallback: -1,
   afterCallback: -1
  };
  this.endlessCallbackComplete = false;
  grid.FocusedRowChanged.AddHandler(function() { this.OnGridFocusedRowChanged(); }.aspxBind(this));
 },
 OnBeforeCallback: function(command) {
  this.endlessCallbackComplete = false;
  this.showLoadingPanelAtBottom = command == this.grid.CommandId.NextPage;
  this.focusedRowIndexInfo.beforeCallback = this.focusedRowIndexInfo.underCallback = this.grid.GetFocusedRowIndex();
  this.focusedRowIndexInfo.afterCallback = -1;
 },
 OnAfterCallback: function() {
  var grid = this.grid;
  var lpContainer = grid.GetEndlessPagingLPContainer();
  if(lpContainer)
   _aspxSetElementDisplay(lpContainer, grid.pageIndex + 1 != grid.pageCount);
  this.CorrectRowIDs();
  this.focusedRowIndexInfo.afterCallback = this.grid.GetFocusedRowIndex();
  this.CheckFocusedRowIndexChangedOnCallback();
 },
 CheckFocusedRowIndexChangedOnCallback: function() {
  var info = this.focusedRowIndexInfo;
  if(info.beforeCallback === info.underCallback && info.underCallback === info.afterCallback)
   return;
  if(info.beforeCallback !== info.afterCallback) {
   this.grid.ChangeFocusedRowStyle(info.beforeCallback, false);
   this.grid.ChangeFocusedRowStyle(info.underCallback, false);
  } else if(info.beforeCallback !== info.underCallback) {
   this.grid.ChangeFocusedRowStyle(info.beforeCallback, false);
   this.grid.ChangeFocusedRowStyle(info.underCallback, true);
   this.grid.focusedRowIndex = info.underCallback;
  }
  this.grid._setFocusedRowInputValue();
 },
 OnGridFocusedRowChanged: function() {
  if(this.grid.InCallback())
   this.focusedRowIndexInfo.underCallback = this.grid.GetFocusedRowIndex();
 },
 CorrectRowIDs: function() {
  var grid = this.grid;
  var table = grid.GetMainTable();
  if(table.rows.length == 0) return;
  var index = -1;
  var editingRow = grid.GetEditingRow(grid);
  for(var i = 0; i < table.rows.length; i++) {
   var row = table.rows[i];
   var id = row.id;
   if(!id) continue;
   if(editingRow && row == editingRow && grid.editMode < 2 && !grid.IsNewRowEditing()) {
    index++;
    continue;
   }
   var regEx = grid.GetRowVisibleIndexRegExp();
   var matches = regEx.exec(id);
   if(matches && matches.length == 3) {
    if(id.indexOf(grid.GroupRowID) > 0 || id.indexOf(grid.DataRowID) > 0)
     index++;
    var visibleIndex = parseInt(matches[2]);
    if(visibleIndex != index)
     row.id = id.replace(regEx, "$1" + index);
   }
  }
 },
 NeedShowLoadingPanelAtBottom: function(){
  return this.showLoadingPanelAtBottom && this.grid.GetEndlessPagingLPContainer();
 },
 OnCallback: function(str) {
  if(!this.grid.GetMainElement())
   return;
  var result = eval(str.slice(str.indexOf("|") + 1));
  this.grid.GetCallbackStateInput().value = result[0];
  this.grid.GetSelectionInput().value = result[1];
  this.UpdateKeyValues(result[2]);
  this.UpdateGroupState(result[3]);
  if(result[4])
   this.RemoveEditFormRow();
  if(result[5])
   _aspxSetInnerHtml(this.grid.GetEndlessPagingUpdatableContainer(), result[5]);
  this.UpdateStyleTable(result[6]);
  this.UpdateDataTable(result[7]);
  this.endlessCallbackComplete = true;
 },
 UpdateDataTable: function(updateInfo) {
  if(!updateInfo || updateInfo.length == 0)
   return;
  for(var i = 0; i < updateInfo.length; i++)
   this.UpdateDataTableCore(updateInfo[i]);
 },
 UpdateDataTableCore: function(updateInfo) {
  if(!updateInfo) 
   return;
  var removeIndex = updateInfo[0];
  var removeCount = updateInfo[1];
  var addIndex = updateInfo[2];
  var html = updateInfo[3];
  this.RemoveDataTableRows(removeIndex, removeCount);
  if(addIndex < 0 || !html)
   return;
  var table = this.grid.GetMainTable();
  var startRow = null;
  var visibleIndex = addIndex;
  do {
   startRow = this.grid.GetRow(visibleIndex);
  } while(!startRow && ++visibleIndex < this.grid.pageRowCount)
  var startRowIndex = startRow ? _aspxArrayIndexOf(table.rows, startRow) : table.rows.length;
  this.InsertRows(table, html, startRowIndex);
 },
 RemoveDataTableRows: function(removeIndex, removeCount) {
  if(removeIndex < 0 || removeCount <= 0)
   return;
  var table = this.grid.GetMainTable();
  var startRow = this.grid.GetRow(removeIndex);
  if(!startRow) {
   startRow = this.grid.GetRow(++removeIndex);
   removeCount--;
  }
  var endRow = null;
  var visibleIndex = removeIndex + removeCount;
  do {
   endRow = this.grid.GetRow(visibleIndex);
  } while(!endRow && ++visibleIndex < this.grid.pageRowCount)
  var startRowIndex = _aspxArrayIndexOf(table.rows, startRow);
  var endRowIndex = endRow ? _aspxArrayIndexOf(table.rows, endRow) : table.rows.length;
  for(var i = endRowIndex - 1; i >= startRowIndex && startRowIndex >= 0; i--)
   _aspxRemoveElement(table.rows[i]);
 },
 UpdateStyleTable: function(updateInfo) {
  if(!updateInfo) return;
  var removeIndex = updateInfo[0];
  var removeCount = updateInfo[1];
  var addIndex = updateInfo[2];
  var html = updateInfo[3];
  var table = this.grid.GetStyleTable();
  for(var i = 0; i < removeCount; i++)
   _aspxRemoveElement(table.rows[removeIndex + 5]);
  if(addIndex < 0 || !html)
   return;
  this.InsertRows(table, html, addIndex + 5);
 },
 InsertRows: function(table, rowsHtml, index) {
  if(__aspxIE && __aspxBrowserVersion < 10) {
   this.InsertRows_IE(table, rowsHtml, index);
   return;
  }
  var row;
  if(index >= 0 && index < table.rows.length) { 
   row = table.rows[index];
  } else if(table.tBodies.length > 0) {
   row = document.createElement("TR");
   table.tBodies[0].appendChild(row);
   row.shouldRemove = true;
  }
  if(row) {
   row.insertAdjacentHTML("beforeBegin", rowsHtml);
   if(row.shouldRemove)
    _aspxRemoveElement(row);
  }
 },
 InsertRows_IE: function(table, rowsHtml, index) {
  var row = document.createElement("TR");
  var cell = document.createElement("TD");
  cell.innerHTML = "<table><tbody>" + rowsHtml + "</tbody></table>";
  var tbody = table.tBodies[0];
  tbody.appendChild(row);
  row.appendChild(cell);
  var newTable = _aspxGetChildByTagName(cell, "TABLE", 0);
  var rowCount = newTable.rows.length;
  var nextRow = null;
  if(index >= 0 && index < table.rows.length)
   nextRow = table.rows[index];
  for(var i = rowCount - 1; i >= 0; i--) {
   var newRow = newTable.rows[i];
   if(nextRow == null)
    tbody.appendChild(newRow);
   else
    tbody.insertBefore(newRow, nextRow);
   nextRow = newRow;
  }
  _aspxRemoveElement(row);
 },
 RemoveEditFormRow: function() {
  _aspxRemoveElement(this.grid.GetEditingRow(this.grid));
  _aspxRemoveElement(this.grid.GetEditingErrorRow(this.grid));
 },
 UpdateKeyValues: function(updateInfo) {
  this.UpdateArray(this.grid.keys, updateInfo);
  this.grid.GetKeyValuesInput().value = _aspxToJson(this.grid.keys);
 },
 UpdateGroupState: function(updateInfo) {
  var input = this.grid.GetEndlessPagingGroupStateInput();
  var groupState = eval(input.value);
  this.UpdateArray(groupState, updateInfo);
  input.value = _aspxToJson(groupState);
 },
 UpdateArray: function(array, updateInfo) {
  if(!updateInfo)
   return;
  var removeIndex = updateInfo[0];
  var removeCount = updateInfo[1];
  var addIndex = updateInfo[2];
  var newArray = updateInfo[3];
  for(var i = 0; i < removeCount; i++)
   _aspxArrayRemoveAt(array, removeIndex);
  for(var i = 0; i < newArray.length; i++)
   _aspxArrayInsert(array, newArray[i], addIndex + i);
 }
});
ASPxClientGridView = _aspxCreateClass(ASPxClientControl, {
 MainTableID: "DXMainTable",
 HeaderTableID: "DXHeaderTable", 
 FooterTableID: "DXFooterTable",
 DataRowID: "DXDataRow",
 DetailRowID: "DXDRow",
 PreviewRowID: "DXPRow",
 GroupRowID: "DXGroupRow",
 EmptyDataRowID: "DXEmptyRow",
 FixedColumnsDivID: "DXFixedColumnsDiv",
 FixedColumnsContentDivID: "DXFixedColumnsContentDiv",
 CustomizationWindowSuffix: "_custwindow",
 EmptyHeaderSuffix: "_emptyheader", 
 HeaderRowID: "_DXHeadersRow",
 PagerBottomID: "DXPagerBottom",
 PagerTopID: "DXPagerTop",
 HeaderFilterButtonClassName: "dxgv__hfb",
 CommandColumnItemClassName: "dxgv__cci",
 CommandId: {
  NextPage: "NEXTPAGE",
  PreviousPage: "PREVPAGE",
  GotoPage: "GOTOPAGE",
  SelectRows: "SELECTROWS",
  SelectRowsKey: "SELECTROWSKEY",
  Group: "GROUP",
  UnGroup: "UNGROUP",
  Sort: "SORT",
  ColumnMove: "COLUMNMOVE",
  CollapseAll: "COLLAPSEALL",
  ExpandAll: "EXPANDALL",
  ExpandRow: "EXPANDROW",
  CollapseRow: "COLLAPSEROW",
  HideAllDetail: "HIDEALLDETAIL",
  ShowAllDetail: "SHOWALLDETAIL",
  ShowDetailRow: "SHOWDETAILROW",
  HideDetailRow: "HIDEDETAILROW",
  PagerOnClick: "PAGERONCLICK",
  ApplyFilter: "APPLYFILTER",
  ApplyColumnFilter: "APPLYCOLUMNFILTER",
  ApplyMultiColumnFilter: "APPLYMULTICOLUMNFILTER",
  ApplyHeaderColumnFilter: "APPLYHEADERCOLUMNFILTER",
  FilterRowMenu: "FILTERROWMENU",
  StartEdit: "STARTEDIT",
  CancelEdit: "CANCELEDIT",
  UpdateEdit: "UPDATEEDIT",
  AddNewRow: "ADDNEWROW",
  DeleteRow: "DELETEROW",
  CustomButton: "CUSTOMBUTTON",
  CustomCallback: "CUSTOMCALLBACK",
  ShowFilterControl: "SHOWFILTERCONTROL",
  CloseFilterControl: "CLOSEFILTERCONTROL",
  SetFilterEnabled: "SETFILTERENABLED",
  Refresh: "REFRESH",
  SelFieldValues: "SELFIELDVALUES",
  RowValues: "ROWVALUES",
  PageRowValues: "PAGEROWVALUES",
  FilterPopup: "FILTERPOPUP",
  CustomValues: "CUSTOMVALUES"
 },
 constructor: function(name){
  this.constructor.prototype.constructor.call(this, name);
  this.callBacksEnabled = true;
  this.custwindowLeft = null;
  this.custwindowTop = null;
  this.custwindowVisible = null;
  this.activeElement = null;
  this.filterKeyPressInputValue = "";
  this.userChangedSelection = false;
  this.lockFilter = false;
  this.confirmDelete = "";
  this.filterKeyPressTimerId = -1;
  this.filterRowMenuColumnIndex = -1;
  this.editorIDList = [ ];
  this.keys = [ ];
  this.lastMultiSelectIndex = -1;
  this.hasFooterRowTemplate = false;
  this.mainTableClickData = {
   processing: false,
   focusChanged: false,
   selectionChanged: false
  };
  this.afterCallbackRequired = false;
  this.headerFilterPopupDimensions = { };
  this.enableHeaderFilterCaching = true;
  this.postbackRequestCount = 0;
  this.supportGestures = true;
  this.checkBoxImageProperties = null;
  this.internalCheckBoxCollection = null;
  this.sizingConfig.adjustControl = true;
  this.lookupBehavior = false;
  this.SelectionChanged = new ASPxClientEvent();
  this.FocusedRowChanged = new ASPxClientEvent();
  this.ColumnSorting = new ASPxClientEvent();
  this.ColumnGrouping = new ASPxClientEvent();
  this.ColumnMoving = new ASPxClientEvent();
  this.ColumnStartDragging  = new ASPxClientEvent();
  this.ColumnResizing  = new ASPxClientEvent();
  this.ColumnResized  = new ASPxClientEvent();
  this.RowExpanding  = new ASPxClientEvent();
  this.RowCollapsing  = new ASPxClientEvent();
  this.DetailRowExpanding  = new ASPxClientEvent();
  this.DetailRowCollapsing  = new ASPxClientEvent();
  this.RowClick  = new ASPxClientEvent();
  this.RowDblClick  = new ASPxClientEvent();
  this.ContextMenu = new ASPxClientEvent();
  this.CustomizationWindowCloseUp = new ASPxClientEvent();
  this.CustomButtonClick = new ASPxClientEvent();
  this.BatchEditConfirmShowing = new ASPxClientEvent();
  this.InternalCheckBoxClick = new ASPxClientEvent();
  this.funcCallbacks = [ ];
  this.pendingCommands = [ ];
  this.pageRowCount = 0;
  this.pageRowSize = 0;
  this.pageIndex = 0;
  this.pageCount = 1;
  this.allowFocusedRow = false;
  this.allowSelectByRowClick = false;
  this.allowSelectSingleRowOnly = false;
  this.allowMultiColumnAutoFilter = false,
  this.focusedRowIndex = -1;
  this.selectedWithoutPageRowCount = 0;
  this.visibleStartIndex = 0;
  this.columns = [ ];
  this.columnResizeMode = ASPxColumnResizeMode.None;
  this.fixedColumnCount = 0;
  this.horzScroll = ASPxScrollBarMode.Hidden;
  this.vertScroll = ASPxScrollBarMode.Hidden;
  this.scrollToRowIndex = -1;
  this.isVirtualScrolling = false;
  this.useEndlessPaging = false;
  this.allowBatchEditing = false;
  this.batchEditClientState = { };
  this.resetScrollTop = false;
  this.callbackOnFocusedRowChanged = false;
  this.callbackOnSelectionChanged = false;
  this.autoFilterDelay = 1200;
  this.editState = 0;
  this.editMode = 2;
  this.kbdHelper = null;
  this.tableHelper = null;
  this.enableKeyboard = false;
  this.keyboardLock = false;
  this.accessKey = null;
  this.customKbdHelperName = null;
  this.dragHelper = null;
  this.endlessPagingHelper = null;
  this.batchEditHelper = null;
  this.icbFocusedStyle = null;
  this.pendingEvents = [ ];
  this.rowHotTrackStyle = null;
  this.rowHotTrackItemsBag = { };
  this.filterEditorState = [];
 },
 HasHorzScroll: function() { return this.horzScroll != ASPxScrollBarMode.Hidden; },
 HasVertScroll: function() { return this.vertScroll != ASPxScrollBarMode.Hidden; },
 HasScrolling: function() { return this.HasHorzScroll() || this.HasVertScroll(); },
 AllowResizing: function() { return this.columnResizeMode != ASPxColumnResizeMode.None; },
 _isGroupRow: function(row) { return row.id.indexOf(this.GroupRowID) > -1; },
 IsHeaderRow: function(row) { return this.IsHeaderRowID(row.id); },
 IsHeaderRowID: function(id) { return id.indexOf(this.name + this.HeaderRowID) == 0; },
 IsEmptyHeaderID: function(id) { return id.indexOf(this.EmptyHeaderSuffix) > -1 },
 GetRootTable: function() { return _aspxGetElementById(this.name); },
 GetGridTD: function() { 
  var table = this.GetRootTable();
  if(!table) return null;
  return table.rows[0].cells[0];
 },
 GetArrowDragDownImage: function() { return this.GetChildElementById("IADD"); },
 GetArrowDragUpImage: function() { return this.GetChildElementById("IADU"); },
 GetArrowDragFieldImage: function() { return this.GetChildElementById("IDHF"); },
 GetCallbackStateInput: function() { return this.GetChildElementById("CallbackState"); },
 GetSelectionInput: function() { return this.GetChildElementById("DXSelInput"); },
 GetKeyValuesInput: function() { return this.GetChildElementById("DXKVInput"); },
 GetFocusedRowInput: function() { return this.GetChildElementById("DXFocusedRowInput"); },
 GetColResizedInput: function() { return this.GetChildElementById("DXColResizedInput"); },
 GetPostBackSyncInput: function() { return this.GetChildElementById("DXSyncInput"); },
 GetEndlessPagingGroupStateInput: function() { return this.GetChildElementById("DXEPGSInput"); },
 GetEndlessPagingUpdatableContainer: function() { return this.GetChildElementById("DXEPUC"); },
 GetEndlessPagingLPContainer: function() { return this.GetChildElementById("DXEPLPC"); },
 GetBatchEditorContainer: function(columnIndex) { return this.GetChildElementById("DXBEC" + columnIndex); },
 GetBatchEditPageValuesInput: function() { return this.GetChildElementById("DXBEPVInput"); },
 GetBatchEditClientModifiedValuesInput: function() { return this.GetChildElementById("DXBECMVInput"); },
 GetBatchEditCellErrorTable: function() { return this.GetChildElementById("DXCErrorTable"); },
 GetLoadingPanelDiv: function() {  return this.GetChildElementById("LPD"); },
 GetFixedColumnsDiv: function() {  return this.GetChildElementById(this.FixedColumnsDivID); },
 GetRow: function(visibleIndex) { 
  var res = this.GetDataRow(visibleIndex);
  if(res == null) res = this.GetGroupRow(visibleIndex);
  return res;
 },
 GetDataRow: function(visibleIndex) { return this.GetChildElementById(this.DataRowID + visibleIndex); },
 GetDetailRow: function(visibleIndex) { return this.GetChildElementById(this.DetailRowID + visibleIndex); },
 GetPreviewRow: function(visibleIndex) { return this.GetChildElementById(this.PreviewRowID + visibleIndex); },
 GetGroupRow: function(visibleIndex) { 
  var element = this.GetChildElementById(this.GroupRowID + visibleIndex);
  if(!element)
   element = this.GetExpandedGroupRow(visibleIndex);
  return element; 
 },
 GetExpandedGroupRow: function(visibleIndex) { return this.GetChildElementById(this.GroupRowID + "Exp" + visibleIndex); },
 GetEmptyDataRow: function() { return this.GetChildElementById(this.EmptyDataRowID); },
 GetDataRowSelBtn: function(index) { return this.GetChildElementById("DXSelBtn" + index); },
 GetMainTable: function() { return this.GetChildElementById(this.MainTableID); },
 GetStyleTable: function() { return this.GetChildElementById("DXStyleTable"); },
 GetLoadingPanelContainer: function() { return this.GetChildElementById("DXLPContainer"); },
 GetGroupPanel: function() { return this.GetChildElementById("grouppanel"); },
 GetHeader: function(columnIndex, inGroupPanel) { 
  var id = "col" + columnIndex;
  if(inGroupPanel)
   id = "group" + id;
  return this.GetChildElementById(id); 
 },
 GetHeaderRow: function(index) {
  return _aspxGetElementById(this.name + this.HeaderRowID + index);
 },
 GetEditingRow: function(obj) { return _aspxGetElementById(obj.name + "_DXEditingRow"); },
 GetEditingErrorRow: function(obj) { return _aspxGetElementById(obj.name + "_DXEditingErrorRow"); },
 GetEditFormTable: function() { return _aspxGetElementById(this.name + "_DXEFT"); },
 GetCustomizationWindow: function() { return aspxGetControlCollection().Get(this.name + this.CustomizationWindowSuffix); },
 GetParentRowsWindow: function() { return aspxGetControlCollection().Get(this.name + "_DXparentrowswindow"); },
 GetEditorPrefix: function() { return "DXEditor"; },
 GetPopupEditForm: function() { return aspxGetControlCollection().Get(this.name  + "_DXPEForm"); },
 GetFilterRowMenu: function() { return aspxGetControlCollection().Get(this.name + "_DXFilterRowMenu"); },
 GetFilterControlPopup: function() { return aspxGetControlCollection().Get(this.name + "_DXPFCForm"); },
 GetFilterControl: function() { return aspxGetControlCollection().Get(this.name +  "_DXPFCForm_DXPFC"); }, 
 GetHeaderFilterPopup: function() { return aspxGetControlCollection().Get(this.name + "_DXHFP"); },
 GetHeaderFilterListBox: function() { return aspxGetControlCollection().Get(this.name + "_HFListBox"); },
 GetHeaderFilterSelectAllCheckBox: function() { return aspxGetControlCollection().Get(this.name + "_HFSACheckBox"); },
 GetEditorByColumnIndex: function(colIndex) {
  var list = this._getEditors();
  for(var i = 0; i < list.length; i++) {
   if(this.tryGetNumberFromEndOfString(list[i].name).value === colIndex)
    return list[i];
  }
  return null;
 },
 Initialize: function() {
  this.constructor.prototype.Initialize.call(this);
  if(this.enabled)
   this.SetHeadersClientEvents();
  this.EnsureRowKeys();
  this._setFocusedRowInputValue();
  this.AddSelectStartHandler();
  this.EnsureRowHotTrackItems();
  if(this.enableKeyboard) {
   this.kbdHelper = this.customKbdHelperName ? new window[this.customKbdHelperName](this) : new ASPxGridViewKbdHelper(this);
   this.kbdHelper.Init();
   ASPxKbdHelper.RegisterAccessKey(this);
  }
  if(this.checkBoxImageProperties) 
   this.CreateInternalCheckBoxCollection();
  this.CheckPendingEvents();
  this.InitializeHeaderFilterPopup();
  var resizingHelper = this.GetResizingHelper();
  if(resizingHelper)
   resizingHelper.ResetStretchedColumnWidth();
  this.CheckEndlessPagingLoadNextPage();
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper)
   batchEditHelper.Init();
  this.PrepareEditorsToKeyboardNavigation();
  window.setTimeout(function() { this.SaveAutoFilterColumnEditorState(); }.aspxBind(this), 0);
  window.setTimeout(function() { this.EnsureVisibleRowFromServer(); }.aspxBind(this), 0);
 },
 PrepareEditorsToKeyboardNavigation: function() {
  if(!this.RequireEditorsKeyboardNavigation()) return;
  for(var i = 0; i < this.columns.length; i++) {
   this.AttachEventToEditor(this.columns[i].index, "GotFocus", function(s, e) { this.OnEditorGotFocus(s, e); }.aspxBind(this));
   this.AttachEventToEditor(this.columns[i].index, "KeyDown", function(s, e) { this.OnEditorKeyDown(s, e); }.aspxBind(this));
  }
 },
 RequireEditorsKeyboardNavigation: function() {
  return this.IsInlineEditMode() && this.GetFixedColumnsHelper();
 },
 OnEditorGotFocus: function(s, e) {
  if(!this.RequireEditorsKeyboardNavigation()) return;
  var helper = this.GetFixedColumnsHelper();
  helper.TryShowColumn(s.dxgvColumnIndex);
 },
 OnEditorKeyDown: function(s, e) {
  if(!this.RequireEditorsKeyboardNavigation()) return;
  var keyCode = _aspxGetKeyCode(e.htmlEvent);
  if(keyCode !== ASPxKey.Tab) return;
  var helper = this.GetFixedColumnsHelper();
  var matrix = this.GetHeaderMatrix();
  var neighborColumnIndex = e.htmlEvent.shiftKey ? matrix.GetLeftNeighbor(s.dxgvColumnIndex) : matrix.GetRightNeighbor(s.dxgvColumnIndex);
  var neighborEditor = this.GetEditorByColumnIndex(neighborColumnIndex);
  if(neighborEditor && helper.TryShowColumn(neighborColumnIndex, true)) {
   _aspxPreventEventAndBubble(e.htmlEvent);
   _aspxClearInputSelection(s.GetInputElement());
   neighborEditor.Focus();
  }
 },
 AttachEventToEditor: function(columnIndex, eventName, handler) {
  var editor = this.GetEditorByColumnIndex(columnIndex);
  if(!ASPxIdent.IsASPxClientEdit(editor))
   return;
  var attachKeyDownToInput = eventName === "KeyDown" && this.IsCheckEditor(editor);
  if(!editor[eventName] && !attachKeyDownToInput)
   return;
  var duplicateAttachLocker = "dxgv" + eventName + "Assigned";
  if(editor[duplicateAttachLocker]) 
   return;
  if(attachKeyDownToInput)
   _aspxAttachEventToElement(editor.GetInputElement(), "keydown", function(e) { handler(editor, { htmlEvent: e }); });
  else
   editor[eventName].AddHandler(handler);
  editor.dxgvColumnIndex = columnIndex;
  editor[duplicateAttachLocker] = true;
 },
 IsInlineEditMode: function() { return this.editMode === 0; },
 IsCheckEditor: function(editor) {
  return ASPxIdent.IsASPxClientCheckEdit && ASPxIdent.IsASPxClientCheckEdit(editor);
 },
 CheckEndlessPagingLoadNextPage: function() {
  window.setTimeout(function() {
   var scrollHelper = this.GetScrollHelper();
   if(this.useEndlessPaging && scrollHelper)
    scrollHelper.CheckEndlessPagingLoadNextPage();
  }.aspxBind(this), 0);
 },
 EnsureRowKeys: function() {
  var keyValuesInput = this.GetKeyValuesInput();
  if(keyValuesInput)
   this.keys = eval(keyValuesInput.value);
  if(!this.keys)
   this.keys = [ ];
 }, 
 InitializeHeaderFilterPopup: function() {
  var popup = this.GetHeaderFilterPopup();
  if(!popup)
   return;
  popup.PopUp.AddHandler(function() { this.OnPopUpHeaderFilterWindow(); }.aspxBind(this));
  popup.CloseUp.AddHandler(function(s) { 
   if(!this.UseHFContentCaching())
    window.setTimeout(function() { s.SetContentHtml(""); }, 0);
  }.aspxBind(this));
  popup.Resize.AddHandler(function(s) { 
   var colIndex = this.FindColumnIndexByHeaderChild(s.GetCurrentPopupElement());
   var column = this._getColumn(colIndex);
   if(!column) return;
   this.SetHeaderFilterPopupSize(colIndex, s.GetWidth(), s.GetHeight());
  }.aspxBind(this));
  var buttons = this.GetHeaderFilterButtons();
  for(var i = 0; i < buttons.length; i++)
   popup.AddPopupElement(buttons[i]);
 },
 GetHeaderFilterButtons: function() {
  var buttons = [ ];
  for(var i = 0; i < this.GetColumnsCount(); i++) {
   if(!this.GetColumn(i).visible)
    continue;
   this.PopulateHeaderFilterButtons(this.GetHeader(i, false), buttons);
   this.PopulateHeaderFilterButtons(this.GetHeader(i, true), buttons);
  }
  var custWindow = this.GetCustomizationWindow();
  if(custWindow)
   this.PopulateHeaderFilterButtons(custWindow.GetWindowClientTable(-1), buttons);
  return buttons;
 },
 PopulateHeaderFilterButtons: function(container, buttons) {
  if(!container) return;
  var images = container.getElementsByTagName("IMG");
  for(var i = 0; i < images.length; i++) {
   var image = images[i];
   if(_aspxElementCssClassContains(image, this.HeaderFilterButtonClassName))
    buttons.push(image);
  }
 },
 UseHFContentCaching: function() {
  var listBox = this.GetHeaderFilterListBox();
  if(listBox && listBox.GetMainElement())
   return this.enableHeaderFilterCaching && listBox.GetItemCount() < 1000;
  return false;
 },
 OnPopUpHeaderFilterWindow: function() {
  var popup = this.GetHeaderFilterPopup();
  var colIndex = this.FindColumnIndexByHeaderChild(popup.GetCurrentPopupElement());
  var column = this._getColumn(colIndex);
  if(!column) return;
  var shiftKey = popup.GetPopUpReasonMouseEvent().shiftKey;
  var listBox = this.GetHeaderFilterListBox();
  if(listBox && listBox.cpGVColumnIndex == colIndex && this.UseHFContentCaching() && popup.savedShiftKey === shiftKey) {
   this.RestoreHFListBoxPreviousState(listBox, column);
   return;
  }
  popup.savedShiftKey = shiftKey;
  this.gridFuncCallBack([this.CommandId.FilterPopup, this.name, colIndex, shiftKey ? "T" : ""], this.onFilterPopupCallback);
  popup.SetContentHtml("");
  var buttonPanel = document.getElementById(popup.cpButtonPanelID);
  if(buttonPanel) {
   buttonPanel.style.display = column.HFCheckedList ? "" : "none";
   this.SetHFOkButtonEnabled(false);
  }
  var size = this.GetHeaderFilterPopupSize(colIndex);
  if(size) {
   popup.SetSize(size[0], size[1]);
   if(__aspxFirefox)
    popup.Shown.AddHandler(function(s) { 
     window.setTimeout(function() { s.SetSize(size[0], size[1]); }, 0); 
    });
  }
  this.CreateLoadingPanelWithoutBordersInsideContainer(popup.GetContentContainer(-1));
 },
 RestoreHFListBoxPreviousState: function(listBox, column) {
  if(!column.HFCheckedList) 
   return;
  listBox.UnselectAll();
  listBox.SelectIndices(listBox.HFSavedSelectedIndices);
  this.UpdateHFSelectAllCheckState();
  this.SetHFOkButtonEnabled(false);
 },
 SetHFOkButtonEnabled: function(enabled) {
  var popup = this.GetHeaderFilterPopup();
  if(!popup) return;
  var button = aspxGetControlCollection().Get(popup.cpOkButtonID);
  if(!button) return;
  button.SetEnabled(enabled);
 },
 GetHeaderFilterPopupSize: function(key) {
  var size = this.headerFilterPopupDimensions[key];
  if(size) return size;
  if(!this.headerFilterPopupDimensions["Default"]) {
   var popup = this.GetHeaderFilterPopup();
   this.SetHeaderFilterPopupSize("Default", popup.GetWidth(), popup.GetHeight());
  }
  return this.headerFilterPopupDimensions["Default"];
 },
 SetHeaderFilterPopupSize: function(key, width, height) {
  this.headerFilterPopupDimensions[key] = [ width, height ];
 },
 FindColumnIndexByHeaderChild: function(element) {
  if(!element) 
   return -1;
  var level = 0;
  while(level < 6) {
   var index = this.getColumnIndex(element.id);
   if(index > -1)
    return index;
   element = element.parentNode;
   level++;
  }
  return -1;
 },
 InitializeHFListBox: function(listBox) {
  _aspxAttachEventToElement(listBox.GetListTable(), "mousedown", function() { window.setTimeout(_aspxClearSelection, 0); });
  listBox.SelectedIndexChanged.AddHandler(function(s) { this.OnHFListBoxSelectionChanged(s); }.aspxBind(this));
  listBox.HFSavedSelectedIndices = listBox.GetSelectedIndices();
 },
 OnHFListBoxSelectionChanged: function(listBox) {
  var column = this.GetColumn(listBox.cpGVColumnIndex);
  if(!column) return;
  if(!column.HFCheckedList) {
   this.ApplyHeaderFilterByColumn();
   return;
  }
  this.UpdateHFSelectAllCheckState();
  this.SetHFOkButtonEnabled(this.IsHFSelectedIndicesChanged());
 },
 UpdateHFSelectAllCheckState: function() {
  var listBox = this.GetHeaderFilterListBox();
  var selectedItemCount = listBox.GetSelectedIndices().length;
  var checkState = ASPxClientCheckBoxCheckState.Indeterminate;
  if(selectedItemCount == 0)
   checkState = ASPxClientCheckBoxCheckState.Unchecked;
  else if(selectedItemCount == listBox.GetItemCount())
   checkState = ASPxClientCheckBoxCheckState.Checked;
  this.GetHeaderFilterSelectAllCheckBox().SetCheckState(checkState);
 },
 OnHFSelectAllCheckedChanged: function(checkBox) {
  var listBox = this.GetHeaderFilterListBox();
  if(checkBox.GetChecked())
   listBox.SelectAll();
  else
   listBox.UnselectAll();
  this.SetHFOkButtonEnabled(this.IsHFSelectedIndicesChanged());
 },
 IsHFSelectedIndicesChanged: function() {
  var listBox = this.GetHeaderFilterListBox();
  if(!listBox) return;
  var indices = listBox.GetSelectedIndices();
  var savedIndices = listBox.HFSavedSelectedIndices;
  if(indices.length != savedIndices.length)
   return true;
  for(var i = 0; i < indices.length; i++) {
   if(_aspxArrayBinarySearch(savedIndices, indices[i]) < 0)
    return true;
  }
  return false;
 },
 CheckPendingEvents: function() {
  if(this.pendingEvents.length < 1)
   return;
  for(var i = 0; i < this.pendingEvents.length; i++)
   this.ScheduleRaisingEvent(this.pendingEvents[i]);
  this.pendingEvents.length = 0;
 },
 ScheduleRaisingEvent: function(eventName) {
  window.setTimeout(function() { this[eventName](); }.aspxBind(this), 0);
 },
 CreateInternalCheckBoxCollection: function() {
  if(!this.internalCheckBoxCollection)
   this.internalCheckBoxCollection = new ASPxCheckBoxInternalCollection(this.checkBoxImageProperties);
  else
   this.internalCheckBoxCollection.SetImageProperties(this.checkBoxImageProperties);
  this.CompleteInternalCheckBoxCollection();
 },
 CompleteInternalCheckBoxCollection: function() {
  if(!this.IsLastCallbackProcessedAsEndless())
   this.internalCheckBoxCollection.Clear();
  for(var i = 0; i < this.pageRowCount; i ++) {
   var index = i + this.visibleStartIndex;
   var icbInputElement = this.GetDataRowSelBtn(index);
   if(icbInputElement) {
    var enabled = !this.IsCheckBoxDisabled(icbInputElement);
    this.AddInternalCheckBoxToCollection(icbInputElement, index, enabled);
   }
  }
 },
 IsCheckBoxDisabled: function(icbInputElement) {
   var icbMainElement = ASPxCheckableElementHelper.Instance.GetICBMainElementByInput(icbInputElement);
   return icbMainElement.className.indexOf("dxgv_cd") != -1;
 },
 AddInternalCheckBoxToCollection: function (icbInputElement, visibleIndex, enabled) {
  var internalCheckBox = null;
  if(this.IsLastCallbackProcessedAsEndless())
   internalCheckBox = this.internalCheckBoxCollection.Get(icbInputElement.id);
  if(!internalCheckBox)
   internalCheckBox = this.internalCheckBoxCollection.Add(icbInputElement.id, icbInputElement);
  internalCheckBox.CreateFocusDecoration(this.icbFocusedStyle);
  internalCheckBox.SetEnabled(enabled && this.GetEnabled());
  internalCheckBox.readOnly = this.readOnly;
  internalCheckBox.autoSwitchEnabled = !this.allowSelectSingleRowOnly;
  var grid = this;
  internalCheckBox.CheckedChanged.AddHandler(
   function(s, e) {
    if(!s.autoSwitchEnabled && s.GetValue() == ASPxClientCheckBoxInputKey.Unchecked){
     var value = s.stateController.GetNextCheckBoxValue(s.GetValue(), s.allowGrayedByClick && s.allowGrayed);
     s.SetValue(value);
    }
    var rowCheckBox = grid.GetDataRowSelBtn(visibleIndex);
    if(grid.allowSelectSingleRowOnly)
     grid._selectAllSelBtn(false, rowCheckBox.id);
    if(!grid.RaiseInternalCheckBoxClick(visibleIndex)){
     grid.ScheduleCommand(function() { grid.SelectRow(visibleIndex, s.GetChecked()); }, true);
     grid.mainTableClickCore(e, true);
    }
   }
  );
 },
 AdjustControlCore: function() {
  ASPxClientControl.prototype.AdjustControlCore.call(this);
  this.UpdateScrollableControls();
  this.UpdateIndentCellWidths();
  this.ValidateColumnWidths();
  this.ApplyPostBackSyncData();
  this.AdjustPagerControls();
 },
 IsAdjustmentRequired: function() {
  if(ASPxClientControl.prototype.IsAdjustmentRequired.call(this))
   return true;
  var scrollHelper = this.GetScrollHelper()
  return scrollHelper ? scrollHelper.IsRestoreScrollPosition() : false;
 },
 NeedCollapseControlCore: function() {
  return this.HasScrolling();
 },
 GetChildElementById: function(childName){
  if(!this.childrenCache) 
   this.childrenCache = { };
  if(!_aspxIsExistsElement(this.childrenCache[childName])) 
   this.childrenCache[childName] = _aspxGetElementById(this.name + "_" + childName);
  return this.childrenCache[childName];
 }, 
 SerializeCallbackArgs: function(array) {
  if(!_aspxIsExists(array) || array.constructor != Array || array.length == 0)
   return "";
  var sb = [ ];
  for(var i = 0; i < array.length; i++) {
   var item = array[i].toString();
   sb.push(item.length);
   sb.push('|');
   sb.push(item);
  }
  return sb.join("");
 }, 
 gridCallBack: function (args) {
  this.OnBeforeCallbackOrPostBack();
  var serializedArgs = this.SerializeCallbackArgs(args); 
  if(!this.callBack || !this.callBacksEnabled) {
   this.lockFilter = true;
   this.postbackRequestCount++;
   this.SendPostBack(serializedArgs);
  } else {
   var command = this.GetCorrectedCommand(args);
   this.OnBeforeCallback(command);
   var preparedArgs = this.prepareCallbackArgs(serializedArgs, this.GetGridTD());
   this.lockFilter = true;
   this.userChangedSelection = false;
   this.CreateCallback(preparedArgs, command);
  }
 },
 GetCorrectedCommand: function(args) {
  if(args.length == 0)
   return "";
  var command = args[0];
  if(args.length > 1 && command == this.CommandId.ColumnMove) {
   if(args[args.length - 1])
    command = this.CommandId.UnGroup;
   if(args[args.length - 2])
    command = this.CommandId.Group;
  }
  return command;
 },
 GetFuncCallBackIndex: function(onCallBack) {
  var item = { date: new Date(), callback: onCallBack };
  for(var i = 0; i < this.funcCallbacks.length; i ++) {
   if(this.funcCallbacks[i] == null) {
    this.funcCallbacks[i] = item;
    return i;
   }
  }
  this.funcCallbacks.push(item);
  return this.funcCallbacks.length - 1;
 },
 GetFuncCallBack: function(index) {
  if(index < 0 || index >= this.funcCallbacks.length) return null;
  var result = this.funcCallbacks[index];
  this.funcCallbacks[index] = null;
  return result;
 },
 gridFuncCallBack: function(args, onCallBack) {
  var serializedArgs = this.SerializeCallbackArgs(args); 
  var callbackArgs = this.formatCallbackArg("FB", this.GetFuncCallBackIndex(onCallBack).toString()) +
   this.prepareCallbackArgs(serializedArgs, null);
  this.CreateCallback(callbackArgs, "FUNCTION");
 }, 
 prepareCallbackArgs: function(serializedArgs, rootTD) {
  var preparedArgs =
   this.formatCallbackArg("EV", this.GetEditorValues(rootTD)) +
   this.formatCallbackArg("SR", this.GetSelectedState()) +
   this.formatCallbackArg("KV", this.GetKeyValuesInput()) + 
   this.formatCallbackArg("FR", this.GetFocusedRowInput()) +
   this.formatCallbackArg("CR", this.GetColResizedInput()) +
   this.formatCallbackArg("GB", serializedArgs);
  return preparedArgs;
 },
 formatCallbackArg: function(prefix, arg) {
  if(arg == null) return "";
  if(!_aspxIsExists(arg.length) && _aspxIsExists(arg.value)) {
   arg = arg.value;
  }
  if(arg == null || arg == "") return "";
  return prefix + "|" + arg.length + ';' + arg + ';';
 },
 OnCallback: function (result) {
  this.HideFilterControlPopup();
  var isFuncCallback = result.indexOf("FB|") == 0;
  this.afterCallbackRequired = !isFuncCallback; 
  if(isFuncCallback) {
   this.OnFunctionalCallback(result);
   return;
  }
  var helper = this.GetEndlessPagingHelper();
  if(result.indexOf("EP|") == 0 && helper){
   helper.OnCallback(result);
  } else{
   var rootTD = this.GetGridTD();
   if(rootTD)
    _aspxSetInnerHtml(rootTD, result);
  }
 },
 OnFunctionalCallback: function(result){
  this.PreventCallbackAnimation();
  var result = this.ParseFuncCallbackResult(result.substr(3));
  if(!result) return;
  if(this.IsHeaderFilterFuncCallback(result.callback))
   this.OnFuncCallback(result);
  else 
   window.setTimeout(function() { this.OnFuncCallback(result); }.aspxBind(this), 0);
 },
 OnCallbackFinalized: function() {
  if(this.afterCallbackRequired)
   this.OnAfterCallback();
 },
 IsHeaderFilterFuncCallback: function(callback) {
  return callback === this.onFilterPopupCallback;
 },
 ParseFuncCallbackResult: function(result) {
  var pos = result.indexOf("|");
  if(pos < 0) return;
  var index = parseInt(result.substr(0, pos), 10);
  var callbackItem = this.GetFuncCallBack(index);
  if(!callbackItem || !callbackItem.callback) return;
  result = result.substr(pos + 1);
  return { callback: callbackItem.callback, params: result };
 },
 OnFuncCallback: function(result) {
  if(result && result.callback)
   result.callback(eval(result.params));
 },
 OnCallbackError: function(result, data){
  this.showingError = result;
  this.errorData = data;
  if(this.GetGridTD())
   this.afterCallbackRequired = true;
 },
 ShowError: function(errorText, errorData) {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper && batchEditHelper.ShowError(errorText, errorData))
   return;
  var displayIn = this;
  var popupForm = this.GetPopupEditForm();
  if(popupForm) {
   displayIn = popupForm;
   if(!popupForm.IsVisible()) {
    popupForm.Show();
   }
  }
  var errorRow = this.GetEditingErrorRow(displayIn);
  if(!errorRow) {
   var editRow = this.GetEditingRow(displayIn);
   if(editRow) {
    errorRow = this.CreateEditingErrorRow();
    errorRow.id = editRow.id.replace("DXEditingRow", "DXEditingErrorRow");
    _aspxInsertElementAfter(errorRow, editRow);
   }
  }
  if(errorRow)
   errorRow.cells[errorRow.cells.length - 1].innerHTML = errorText;
  else
    alert(errorText);
 },
 CreateEditingErrorRow: function() {
  var row = this.GetStyleTable().rows[1].cloneNode(true);
  for(var i = 0; i < row.cells.length; i++) {
   var cell = row.cells[i];
   var colSpan = parseInt(_aspxGetAttribute(cell, "data-colSpan"));
   if(!isNaN(colSpan)) 
    cell.colSpan = colSpan;
  }
  return row;
 },
 OnBeforeCallbackOrPostBack: function() {
  this.HidePopupEditForm();
  ASPxClientGridView.SaveActiveElementSettings(this);
  var resizingHelper = this.GetResizingHelper();
  if(resizingHelper)
   resizingHelper.SaveControlDimensions(true);
 },
 OnBeforeCallback: function(command) {
  this.keyboardLock = true;
  var endlessPagingHelper = this.GetEndlessPagingHelper();
  if(endlessPagingHelper)
   endlessPagingHelper.OnBeforeCallback(command);
  this.ShowLoadingElements();
  this.SaveCallbackSettings();
  this.RemoveSelectStartHandler();
  var popup = this.GetHeaderFilterPopup();
  if(popup)
   popup.RemoveAllPopupElements();
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper && this.isVirtualScrolling)
   scrollHelper.ClearVirtualScrollTimer();
 },
 OnAfterCallback: function() {
  var checkBoxCollectionReinitializeRequired = true; 
  if(this.showingError) {
   checkBoxCollectionReinitializeRequired = false;
   this.ShowError(this.showingError, this.errorData);
      this.showingError = null;
   this.errorData = null;
    }
  this.childrenCache = { };
  this.pendingCommands = [ ];
  this.lockFilter = true;
  try {
   this.EnsureRowKeys();
   this.headerMatrix && this.headerMatrix.Invalidate();
   this.SetHeadersClientEvents();
   this.RestoreCallbackSettings();
   this.AddSelectStartHandler();
   this.EnsureRowHotTrackItems();
   if(this.kbdHelper && !this.useEndlessPaging)
    this.kbdHelper.EnsureFocusedRowVisible();
  }
  finally {
   window.setTimeout(function() { this.lockFilter = false; }.aspxBind(this), 0); 
   this.keyboardLock = false;
  }
  if(this.checkBoxImageProperties && checkBoxCollectionReinitializeRequired)
   this.CreateInternalCheckBoxCollection();
  this.CheckPendingEvents();
  this.InitializeHeaderFilterPopup();
  var resizingHelper = this.GetResizingHelper();
  if(resizingHelper)
   resizingHelper.SaveControlDimensions(true);
  var endlessPagingHelper = this.GetEndlessPagingHelper();
  if(endlessPagingHelper)
   endlessPagingHelper.OnAfterCallback();
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper)
   batchEditHelper.OnAfterCallback();
  this.CheckEndlessPagingLoadNextPage();
  this.PrepareEditorsToKeyboardNavigation();
  window.setTimeout(function() { this.SaveAutoFilterColumnEditorState(); }.aspxBind(this), 0);
  window.setTimeout(function() { this.EnsureVisibleRowFromServer(); }.aspxBind(this), 0);
 },
 SaveAutoFilterColumnEditorState: function() {
  for(var i = 0; i < this.columns.length; i++) {
   var columnIndex = this.columns[i].index;
   this.filterEditorState[columnIndex] = this.GetAutoFilterEditorValue(columnIndex);
  }
 },
 GetAutoFilterEditorValue: function(columnIndex) {
  var editor = this.GetAutoFilterEditor(columnIndex);
  var editorValue = "";
  if(editor && editor.GetMainElement())
   editorValue = editor.GetValueString();
  return {
   value: editorValue,
   filterCondition: this.filterRowConditions ? this.filterRowConditions[columnIndex] : ""
  };
 },
 ClearAutoFilterState: function() {
  this.filterEditorState = [];
 },
 SaveCallbackSettings: function() {
  var custWindow = this.GetCustomizationWindow();
  if(custWindow != null) {
   var custWindowElement = custWindow.GetWindowElement(-1);
   if(custWindowElement) {
    this.custwindowLeft = _aspxGetAbsoluteX(custWindowElement);
    this.custwindowTop = _aspxGetAbsoluteY(custWindowElement);
    this.custwindowVisible = custWindow.IsVisible();
   }
  } else {
   this.custwindowVisible = null;
  }
  var helper = this.GetFixedColumnsHelper();
  if(helper != null) helper.SaveCallbackSettings();  
 },
 RestoreCallbackSettings: function() {
  var custWindow = this.GetCustomizationWindow();
  if(custWindow != null && this.custwindowVisible != null) {
   if(this.custwindowVisible){
    custWindow.LockAnimation();
    custWindow.ShowAtPos(this.custwindowLeft, this.custwindowTop);
    custWindow.UnlockAnimation();
   }
  }
  var resizingHelper = this.GetResizingHelper();
  if(resizingHelper)
   resizingHelper.ResetStretchedColumnWidth();
  var fixedColumnsHelper = this.GetFixedColumnsHelper();
  if(fixedColumnsHelper != null)
   fixedColumnsHelper.RestoreCallbackSettings();
  this.UpdateScrollableControls();
  if(fixedColumnsHelper != null)
   fixedColumnsHelper.HideColumnsRelyOnScrollPosition();
  this.UpdateIndentCellWidths();
  if(resizingHelper)
   resizingHelper.ValidateColumnWidths();
  this.ApplyPostBackSyncData();
  this.ResetControlAdjustment(); 
  ASPxClientGridView.RestoreActiveElementSettings(this); 
 },
 HidePopupEditForm: function() {
  var popup = this.GetPopupEditForm();
  if(popup != null) {
   popup.Hide();
  }
 },
 OnPopupEditFormInit: function(popup) {
  if(this.HasHorzScroll() && this.GetVisibleRowsOnPage() > 0) {
   var popupHorzOffset = popup.GetPopupHorizontalOffset();
   popup.SetPopupHorizontalOffset(popupHorzOffset - this.GetPopupEditFormHorzOffsetCorrection(popup));
  }
  popup.Show();
 },
 GetPopupEditFormHorzOffsetCorrection: function(popup) {
  var scrollHelper = this.GetScrollHelper();
  if(!scrollHelper) return 0;
  var scrollDiv = scrollHelper.GetHorzScrollableControl();
  if(!scrollDiv)  return 0;
  var horzAlign = popup.GetHorizontalAlign();
  if(_aspxIsRightSidesAlign(horzAlign) || _aspxIsOutsideRightAlign(horzAlign))
   return scrollDiv.scrollWidth - scrollDiv.offsetWidth;
  if(_aspxIsCenterAlign(horzAlign))
   return (scrollDiv.scrollWidth - scrollDiv.offsetWidth) / 2;
  return 0;
 },
 _isRowSelected: function(visibleIndex) {
  if(!this.GetDataRow(visibleIndex)) return false;
  var index = this._getRowIndexOnPage(visibleIndex);
  var selInput = this.GetSelectionInput();
  if(!selInput) return false;
  return this._isTrueInCheckList(selInput.value, index);
 },
 _isTrueInCheckList: function(checkList, index) {
  if(index < 0 ||  index >= checkList.length) return false;
  return checkList.charAt(index) == "T";
 },
 _getSelectedRowCount: function() {
  var res = this.selectedWithoutPageRowCount;
  var selInput = this.GetSelectionInput();
  if(!selInput) return res;
  var checkList = selInput.value;
  var selCount = 0;
  for(var i = 0; i < checkList.length; i++) {
   if(checkList.charAt(i) == "T") selCount ++;
  }
  return res + selCount;
 },
 _selectAllRowsOnPage: function(checked) {
  if(checked && this.allowSelectSingleRowOnly) {
   this.SelectRow(0, true);
   return;
  }
  var selInput = this.GetSelectionInput();
  if(!selInput) return;
  this._selectAllSelBtn(checked);
  var prevSelectedRowCount = 0;
  var isTrueInCheckList = false;
  for(var i = 0; i < this.pageRowCount; i ++) {
   isTrueInCheckList = this._isTrueInCheckList(selInput.value, i);
   if(isTrueInCheckList) prevSelectedRowCount++; 
   if(isTrueInCheckList != checked) {
    this.ChangeRowStyle(i + this.visibleStartIndex, checked ? 0 : 4);
   }
  }
  if (prevSelectedRowCount == 0 && !checked) return;
  var selValue = "";
  if(checked) {
   for(var i = 0; i < this.pageRowCount; i ++)
    selValue += this.IsDataRow(this.visibleStartIndex + i ) ? "T" : "F";
  }
  if(selValue != selInput.value) {
   this.userChangedSelection = true;
   if(selValue == "") selValue = "U";
   selInput.value = selValue;
  }
  this.DoSelectionChanged(-1, checked, true);
 },
 DeleteGridRow: function(visibleIndex) {
  if(this.confirmDelete != "" && !confirm(this.confirmDelete)) return;
  this.DeleteRow(visibleIndex);
 },
 _selectAllSelBtn: function(checked, exceptInternalCheckBoxName) {
  if(this.checkBoxImageProperties) {
   for(var internalCheckBoxName in this.internalCheckBoxCollection.checkBoxes) {
    if(exceptInternalCheckBoxName !== internalCheckBoxName &&  this.internalCheckBoxCollection.checkBoxes[internalCheckBoxName].SetValue) 
     this.internalCheckBoxCollection.checkBoxes[internalCheckBoxName].SetValue(checked ? ASPxClientCheckBoxInputKey.Checked : ASPxClientCheckBoxInputKey.Unchecked);
   }
  }
 },
 doRowMultiSelect: function(row, rowIndex, evt) {
  var ctrlKey = evt.ctrlKey || evt.metaKey,
   shiftKey = evt.shiftKey;
  if((ctrlKey || shiftKey) && (!__aspxIE || __aspxBrowserVersion > 8))
   _aspxClearSelection();
  if(this.allowSelectSingleRowOnly)
   shiftKey = false;
  if(!ctrlKey && !shiftKey) {
   this._selectAllRowsOnPage(false);
   this.SelectRow(rowIndex, true);
   this.lastMultiSelectIndex = rowIndex;
  } else {
   if(ctrlKey) {
    this.SelectRow(rowIndex, !this._isRowSelected(rowIndex));
    this.lastMultiSelectIndex = rowIndex;
   } else {
    var startIndex = rowIndex > this.lastMultiSelectIndex ? this.lastMultiSelectIndex + 1 : rowIndex;
    var endIndex = rowIndex > this.lastMultiSelectIndex ? rowIndex : this.lastMultiSelectIndex - 1;
    for(var i = this.visibleStartIndex; i < this.pageRowCount + this.visibleStartIndex; i ++) {
     if(i == this.lastMultiSelectIndex) 
      continue;
     this.SelectRow(i, i >= startIndex && i <= endIndex);
    }
   }
  }
  this.UpdatePostBackSyncInput();
 },
 AddSelectStartHandler: function() {   
  if(!this.allowSelectByRowClick || !__aspxIE || __aspxBrowserVersion > 8 )
   return;
  _aspxAttachEventToElement(this.GetMainTable(), "selectstart", ASPxClientGridView.SelectStartHandler);
 },
 RemoveSelectStartHandler: function() {
  if(!this.allowSelectByRowClick || !__aspxIE)
   return; 
  _aspxDetachEventFromElement(this.GetMainTable(), "selectstart", ASPxClientGridView.SelectStartHandler);
 },
 SelectRow: function(visibleIndex, checked, fromCheckBox) {
  if(!this.IsDataRow(visibleIndex) || visibleIndex < 0) return;
  if(this._isRowSelected(visibleIndex) == checked) return;
  if(_aspxIsExists(fromCheckBox)) fromCheckBox = false;
  var index = this._getRowIndexOnPage(visibleIndex);
  if(index < 0) return;
  if(checked && this.allowSelectSingleRowOnly)
   this._selectAllRowsOnPage(false);
  var selInput = this.GetSelectionInput();
  if(selInput) {
   this.userChangedSelection = true;
   var checkList = selInput.value;
   if(index >= checkList.length) {
    if(!checked) return;
    for(var i = checkList.length; i <= index; i ++)
     checkList += "F";
   }
   checkList = checkList.substr(0, index) + (checked ? "T" : "F") + checkList.substr(index + 1, checkList.length - index - 1);
   if(checkList.indexOf("T") < 0) checkList = "U";
   selInput.value = checkList;
  }
  var checkBox = this.GetDataRowSelBtn(visibleIndex);
  if(checkBox) {
   var internalCheckBox = this.internalCheckBoxCollection.Get(checkBox.id);
   internalCheckBox.SetValue(checked ? ASPxClientCheckBoxInputKey.Checked : ASPxClientCheckBoxInputKey.Unchecked);
  }
  this.ChangeRowStyle(visibleIndex, checked ? 0 : 4);
  this.DoSelectionChanged(visibleIndex, checked, false);
 },
 ScheduleUserCommand: function(args, postponed, e) {
  if(!args || args.length == 0) 
   return;
  var commandName = args[0];
  var rowCommands = [ "CustomButton", "Select", "StartEdit", "Delete" ];
  if((this.useEndlessPaging || this.allowBatchEditing) && _aspxArrayIndexOf(rowCommands, commandName) > -1)
   args[args.length - 1] = this.FindParentRowVisibleIndex(_aspxGetEventSource(e), true);
  this.ScheduleCommand(args, postponed);
 },
 FindParentRowVisibleIndex: function(element, dataAndGroupOnly) {
  var regEx = this.GetRowVisibleIndexRegExp(dataAndGroupOnly);
  while(element) {
   if(element.tagName === "BODY" || element.id == this.name)
    return -1;
   var matches = regEx.exec(element.id);
   if(matches && matches.length == 3)
    return parseInt(matches[2]);
   element = element.parentNode;
  }
  return -1;
 },
 GetRowVisibleIndexRegExp: function(dataAndGroupOnly) {
  var idParts = [ this.DataRowID, this.GroupRowID + "(?:Exp)?" ];
  if(!dataAndGroupOnly) {
   idParts.push(this.PreviewRowID);
   idParts.push(this.DetailRowID);
  }
  return new RegExp("^(" + this.name + "_(?:" + idParts.join("|") + "))(-?\\d+)$");
 },
 ScheduleCommand: function(args, postponed) {
  if(postponed)
   this.pendingCommands.push(args);
  else 
   this.PerformScheduledCommand(args);
 },
 PerformScheduledCommand: function(args) {
  if(_aspxIsFunction(args)) {
   args(); 
   return;
  }
  if(args && args.length > 0) {
   var commandName = "UA_" + args[0];
   if(this[commandName])
    this[commandName].apply(this, args.slice(1));
  }
 },
 PerformPendingCommands: function() {
  var commandCount = this.pendingCommands.length;
  for(var i = 0; i < commandCount; i++)
   this.PerformScheduledCommand(this.pendingCommands.pop());
 },
 getRowByHtmlEvent: function(evt) {
  var row = this.getRowByHtmlEventCore(evt, this.DataRowID);
  if(!row)
   row = this.getRowByHtmlEventCore(evt, this.GroupRowID);
  return row;
 },
 getRowByHtmlEventCore: function(evt, partialID) {
  var row = _aspxGetParentByPartialId(_aspxGetEventSource(evt), partialID);
  if(row && row.id.indexOf(this.name) > -1)
   return row;
  return null;
 },
 NeedProcessTableClick: function(evt) {
  var headerTable = _aspxGetParentByPartialId(_aspxGetEventSource(evt), this.HeaderTableID);
  if(headerTable) {
   var headerTableID = headerTable.id;
   var gridID = headerTableID.substr(0, headerTableID.length - this.HeaderTableID.length - 1);
   return this.name == gridID;
  }
  var mainTable = _aspxGetParentByPartialId(_aspxGetEventSource(evt), this.MainTableID);
  if(mainTable) {
   var mainTableID = mainTable.id;
   var gridID = mainTableID.substr(0, mainTableID.length - this.MainTableID.length - 1);
   return this.name == gridID;
  }
  return false;
 },
 mainTableClick: function(evt) { this.mainTableClickCore(evt); },
 mainTableDblClick: function(evt) { 
  var row = this.getRowByHtmlEvent(evt);
  if(row) {
   var batchEditHelper = this.GetBatchEditHelper();
   if(batchEditHelper)
    batchEditHelper.ProcessTableClick(row, evt, true);
   this.RaiseRowDblClick(this.getRowIndex(row.id), evt); 
  }
 },
 mainTableClickCore: function(evt, fromCheckBox) {
  if(this.kbdHelper)
   this.kbdHelper.HandleClick(evt);
  var sendNotificationCallack = true;
  this.mainTableClickData.processing = true;
  try {
   this.ProcessTableClick(evt, fromCheckBox);
   var savedRequestCount = this.requestCount + this.postbackRequestCount;
   this.PerformPendingCommands();
   var currentRequestCount = this.requestCount + this.postbackRequestCount;
   sendNotificationCallack = currentRequestCount == savedRequestCount;
  } finally {
   if(sendNotificationCallack)
    if(this.mainTableClickData.focusChanged && !this.mainTableClickData.selectionChanged) {
     this.gridCallBack(["FOCUSEDROW"]);
    } else if(this.mainTableClickData.selectionChanged) {
     this.gridCallBack(["SELECTION"]);
    }
   this.mainTableClickData.processing = false;
   this.mainTableClickData.focusChanged = false;
   this.mainTableClickData.selectionChanged = false;
  }
 },
 ProcessTableClick: function(evt, fromCheckBox) {
  var source = _aspxGetEventSource(evt);
  var row = this.getRowByHtmlEvent(evt);
  if(row) {
   var rowIndex = this.getRowIndex(row.id);
   var isCommandColumnItem = this.IsCommandColumnItem(source);
   if(!isCommandColumnItem && !fromCheckBox) {
    var batchEditHelper = this.GetBatchEditHelper();
    if(batchEditHelper && batchEditHelper.ProcessTableClick(row, evt))
     return;
    if(this.RaiseRowClick(rowIndex, evt)) 
     return;
   }
   if(this.allowFocusedRow) {
    this.focusRow(row);
   }
   if(this.allowSelectByRowClick) {
    var isActionElement = source && source.tagName.match(/input|select|textarea|^a$/i);
    if(!isActionElement && !isCommandColumnItem && !fromCheckBox) {
     if(this.lookupBehavior){
      var checked = this.allowSelectSingleRowOnly || !this._isRowSelected(rowIndex);
      this.SelectRow(rowIndex, checked);
     } else
      this.doRowMultiSelect(row, rowIndex, evt);
    }
   } else {
    this.lastMultiSelectIndex = rowIndex;
   }
  }
 },
 IsCommandColumnItem: function(element) {
  if(!element)
   return false;
  if(_aspxElementHasCssClass(element, this.CommandColumnItemClassName))
   return true;
  if(element.tagName == "IMG" && element.parentNode.tagName == "A")
   return _aspxElementHasCssClass(element.parentNode, this.CommandColumnItemClassName);
  return false;
 },
 focusRow: function(row) {
  if(!row) return;
  var index = this.getRowIndex(row.id);
  this._setFocusedRowIndex(index);
 },
 _setFocusedRowIndex: function(visibleIndex) {
  if(visibleIndex < 0) 
   visibleIndex = -1;
  if(!this.allowFocusedRow || visibleIndex == this.focusedRowIndex) 
   return;
  var oldIndex = this.focusedRowIndex;
  this.focusedRowIndex = visibleIndex;
  this.ChangeFocusedRowStyle(oldIndex, false);
  this.ChangeFocusedRowStyle(this.focusedRowIndex, true);
  this._setFocusedRowInputValue();
  if(this.callbackOnFocusedRowChanged) {
   this.UpdatePostBackSyncInput(true);
   if(!this.mainTableClickData.processing) {
    this.gridCallBack(["FOCUSEDROW"]);
   } else {
    this.mainTableClickData.focusChanged = true;
   }
   return;
  }
  this.RaiseFocusedRowChanged();
 },
 ChangeFocusedRowStyle: function(visibleIndex, focused) {
  if(visibleIndex < 0) return;
  var rowStyle = -1;
  var row = this.GetRow(visibleIndex);
  if(focused && row)
   rowStyle = this._isGroupRow(row) ? 2 : 1;
  if(!focused)
   rowStyle = this._isRowSelected(visibleIndex) ? 0 : 4;
  if(rowStyle > -1)
   this.ChangeRowStyle(visibleIndex, rowStyle);
 },
 _setFocusedRowInputValue: function() {
  if(this.GetFocusedRowInput() != null) {
   this.GetFocusedRowInput().value = this.focusedRowIndex;
  }
 },
 _getFocusedRowIndex: function() {
  if(!this.allowFocusedRow) return -1;
  return this.focusedRowIndex;
 },
 getRowIndex: function(rowId) {   
  if(this.IsHeaderRowID(rowId))
   return -1;
  return this.tryGetNumberFromEndOfString(rowId).value;
 },
 tryGetNumberFromEndOfString: function(str) {
  var value = -1;
  var success = false;
  var n = str.length - 1;
  while(!isNaN(parseInt(str.substr(n), 10))) {
   value = parseInt(str.substr(n), 10);
   success = true;
   n--;
  }
  return { success: success, value: value };
 },
 GetSelectedState: function() {
  if(!this.userChangedSelection) return null;
  var input = this.GetSelectionInput();
  if(!input) return null;
  return input.value;
 },
 ChangeRowStyle: function(visibleIndex, rowStyle) {
  if(this._getFocusedRowIndex() == visibleIndex && rowStyle != 1 && rowStyle != 2) return;
  var row = this.GetRow(visibleIndex);
  if(!row) return;
  if(rowStyle == 0 && this._isGroupRow(row)) return; 
  var index = this._getRowIndexOnPage(visibleIndex);
  var styleRow = this._getStyleRow(index, rowStyle);
  if(!styleRow) return;
  row.className = styleRow.className;
  row.style.cssText = styleRow.style.cssText;
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper && batchEditHelper.IsDeletedRow(this.GetRowKey(visibleIndex)))
   _aspxSetElementDisplay(row, false);
 },
 _getRowIndexOnPage: function(visibleIndex) { 
  return visibleIndex - this.visibleStartIndex; 
 },
 getColumnIndex: function(colId) {
  if(this.IsEmptyHeaderID(colId))
   return -1;
  var index = this.tryGetNumberFromEndOfString(colId).value;
  var postfix = "col" + index;
  if(colId.lastIndexOf(postfix) == colId.length - postfix.length)
   return index;
  return -1;
 },
 getColumnObject: function(colId) {
  var index = this.getColumnIndex(colId);
  return index > -1 ? this._getColumn(index) : null;
 },
 _getColumnIndexByColumnArgs: function(column) {
  column = this._getColumnObjectByArg(column);
  if(!column) return null;
  return column.index;
 },
 _getColumnObjectByArg: function(arg) {
  if(!_aspxIsExists(arg)) return null;
  if(typeof(arg) == "number") return this._getColumn(arg);
  if(_aspxIsExists(arg.index)) return arg;
  var column = this._getColumnById(arg);
  if(column) return column;
  return this._getColumnByField(arg);  
 },
 _getColumnsCount: function() { return this.columns.length; },
 _getColumn: function(index) { 
  if(index < 0 || index >= this.columns.length) return null;
  return this.columns[index];
 },
 _getColumnById: function(id) {
  if(!_aspxIsExists(id)) return null;
  for(var i = 0; i < this.columns.length; i++) {
   if(this.columns[i].id == id) return this.columns[i];
  }
  return null;
 },
 _getColumnByField: function(fieldName) {
  if(!_aspxIsExists(fieldName)) return null;
  for(var i = 0; i < this.columns.length; i++) {
   if(this.columns[i].fieldName == fieldName) return this.columns[i];
  }
  return null;
 },
 _getStyleRow: function(index, rowStyle) {
  var styleTable = this.GetStyleTable();
  if(!styleTable) return null;
  if(rowStyle < 4) return styleTable.rows[rowStyle + 2];
  return styleTable.rows[6 + index];
 },
 DoSelectionChanged: function(index, isSelected, isSelectAllOnPage){
  if(this.callbackOnSelectionChanged) {
   this.UpdatePostBackSyncInput(true);
   if(!this.mainTableClickData.processing) {
    this.gridCallBack(["SELECTION"]);
   } else {
    this.mainTableClickData.selectionChanged = true;
   }
   return;
  }
  this.RaiseSelectionChanged(index, isSelected, isSelectAllOnPage, false);
 },
 CommandCustomButton:function(id, index) {
  var processOnServer = true;
  if(!this.CustomButtonClick.IsEmpty()) {
   var e = new ASPxClientGridViewCustomButtonEventArgs(index, id);
   this.CustomButtonClick.FireEvent(this, e);
   processOnServer = e.processOnServer;
  }
  if(processOnServer)
   this.gridCallBack(["CUSTOMBUTTON", id, index]);
 },
 HeaderMouseDown: function(element, e){
  if(!_aspxGetIsLeftButtonPressed(e)) 
   return;
  var source = _aspxGetEventSource(e);
  if(_aspxElementCssClassContains(source, this.HeaderFilterButtonClassName))
   return;
  if(this.TryStartColumnResizing(e, element))
   return;
  var column = this._getColumnObjectByArg(this.getColumnIndex(element.id));
  var dragCanceled = this.RaiseColumnStartDragging(column);
  var canDrag = !dragCanceled && this.canDragColumn(element) && source.tagName != "IMG";
  if(!this.dragHelper)
   this.dragHelper = new ASPxClientGridViewDragHelper(this);
  var drag = this.dragHelper.CreateDrag(e, element, canDrag);
  if(!canDrag && (e.shiftKey || e.ctrlKey))
   drag.clearSelectionOnce = true;
  this.dragHelper.CreateTargets(drag, e);
 },
 TryStartColumnResizing: function(e, headerCell) {
  var helper = this.GetResizingHelper();
  if(!helper || !helper.CanStartResizing(e, headerCell))
   return false;
  var column = this.columns[helper.GetResizingColumnIndex(e, headerCell)];
  if(this.RaiseColumnResizing(column))
   return false;
  helper.StartResizing(column.index);
  return true;
 }, 
 OnParentRowMouseEnter: function(element) {
  if(this.GetParentRowsWindow() == null) return;
  if(this.GetParentRowsWindow().IsWindowVisible()) return;
  this.ParentRowsTimerId = _aspxSetTimeout("aspxGVParentRowsTimer(\""+this.name+"\", \"" + element.id + "\");", 500);
 },
 OnParentRowMouseLeave: function(evt) {
  _aspxClearTimer(this.ParentRowsTimerId);
  if(this.GetParentRowsWindow() == null) return;
  if(evt && evt.toElement) {
   if(_aspxGetParentByPartialId(evt.toElement, this.GetParentRowsWindow().name) != null)
     return;
  }
  this.HideParentRows();
 },
 ShowParentRows: function(element) {
  this.ParentRowsTimerId = null;
  if(this.GetParentRowsWindow() != null) {
   this.GetParentRowsWindow().ShowAtElement(element);
  }
 },
 onFilterPopupCallback: function(values) {
  var grid = aspxGetControlCollection().Get(values[0]);
  if(grid != null)
   grid.GetHeaderFilterPopup().SetContentHtml(values[1], grid.enableCallbackAnimation);
 },
 HideParentRows: function() {
  this.ParentRowsTimerId = null;
  if(this.GetParentRowsWindow() != null) {
   this.GetParentRowsWindow().Hide();
  }
 }, 
 canSortByColumn: function(headerElement) {
  return this.getColumnObject(headerElement.id).allowSort;
 },
 canGroupByColumn: function(headerElement) {
  return this.getColumnObject(headerElement.id).allowGroup;
 },
 canDragColumn: function(headerElement) {
  return this.getColumnObject(headerElement.id).allowDrag;  
 },
 doPagerOnClick: function(id) {
  if(!_aspxIsExists(id)) return;
  this.AssignSlideAnimationDirectionByPagerArgument(id, this.pageIndex);
  if(__aspxIE && this.kbdHelper)
   this.kbdHelper.Focus();
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.ResetScrollTop();
  this.gridCallBack([this.CommandId.PagerOnClick, id]);
 },
 CanHandleGesture: function(evt) {
  var source = _aspxGetEventSource(evt);
  var table = this.GetMainTable();
  if(!table) return false;
  if(_aspxGetIsParent(table, source))
   return !this.IsHeaderChild(source);
  if(table.parentNode.tagName == "DIV" && _aspxGetIsParent(table.parentNode, source))
   return __aspxTouchUI || evt.offsetX < table.parentNode.clientWidth;
  return false;
 },
 AllowStartGesture: function() {
  return ASPxClientControl.prototype.AllowStartGesture.call(this) && 
   (this.AllowExecutePagerGesture(this.pageIndex, this.pageCount, 1) || this.AllowExecutePagerGesture(this.pageIndex, this.pageCount, -1));
 },
 AllowExecuteGesture: function(value) {
  return this.AllowExecutePagerGesture(this.pageIndex, this.pageCount, value);
 },
 ExecuteGesture: function(value, count) {
  this.ExecutePagerGesture(this.pageIndex, this.pageCount, value, count, function(arg) { this.doPagerOnClick(arg); }.aspxBind(this));
 },
 OnColumnFilterInputChanged: function(editor) {
  this.ApplyColumnAutoFilterCore(editor);
 },
 OnColumnFilterInputSpecKeyPress: function(editor, e) {
  if(e.htmlEvent)
   e = e.htmlEvent;
  if(e.keyCode == ASPxKey.Tab)
   return true;
  if(e.keyCode == ASPxKey.Enter) {
   _aspxPreventEventAndBubble(e);
   editor.Validate();
   if(this.allowMultiColumnAutoFilter)
    this.ApplyMultiColumnAutoFilter(editor);
   else
    this.ApplyColumnAutoFilterCore(editor);
   return true;
  }
  if(e.keyCode == ASPxKey.Delete && e.ctrlKey) {
   _aspxPreventEventAndBubble(e);
   editor.SetValue(null);
   if(!this.allowMultiColumnAutoFilter)
    this.ApplyColumnAutoFilterCore(editor);
   return true;
  }
  return false;
 },
 OnColumnFilterInputKeyPress: function(editor, e) {
  if(this.OnColumnFilterInputSpecKeyPress(editor, e))
   return;
  if(e.htmlEvent) e = e.htmlEvent;
  this.ClearAutoFilterInputTimer();
  if(editor != this.FilterKeyPressEditor)
   this.filterKeyPressInputValue = editor.GetValueString();
  this.FilterKeyPressEditor = editor;
  this.filterKeyPressTimerId = _aspxSetTimeout("aspxGVTimer(\"" + this.name + "\");", this.autoFilterDelay);
 },
 ClearAutoFilterInputTimer: function() {
  this.filterKeyPressTimerId = _aspxClearTimer(this.filterKeyPressTimerId);
 },
 GetAutoFilterEditorInputElement: function(editor) {
  if(document.activeElement) return document.activeElement;
  if(editor.GetInputElement) return editor.GetInputElement();
  return null;
 },
 OnFilterKeyPressTick: function() {
  if(this.FilterKeyPressEditor) {
   this.ApplyColumnAutoFilterCore(this.FilterKeyPressEditor);
  }
 },
 ApplyColumnAutoFilterCore: function(editor) {
  if(this.lockFilter) return;
  this.ClearAutoFilterInputTimer();
  if(this.FilterKeyPressEditor && editor == this.FilterKeyPressEditor) {
   if(this.FilterKeyPressEditor.GetValueString() == this.filterKeyPressInputValue) return;
  }
  var column = this.getColumnIndex(editor.name);
  if(column < 0) return;
  this.SaveAutoFilterActiveElement(editor);
  this.AutoFilterByColumn(column, editor.GetValueString());
 },
 ApplyMultiColumnAutoFilter: function(editor) {
  if(this.lockFilter) return;
  this.SaveAutoFilterActiveElement(editor);
  var args = [];
  var modifiedValues = this.GetModifiedAutoFilterValues();
  for(var columnIndex in modifiedValues) {
   args.push(columnIndex);
   args.push(modifiedValues[columnIndex].value);
   args.push(modifiedValues[columnIndex].filterCondition);
  }
  if(args.length > 0)
   this.gridCallBack([this.CommandId.ApplyMultiColumnFilter].concat(args));
 },
 SaveAutoFilterActiveElement: function(editor) {
  if(!editor)
   return;
  if(this.getColumnIndex(editor.name) >= 0)
   this.activeElement = this.GetAutoFilterEditorInputElement(editor);
 },
 GetModifiedAutoFilterValues: function() {
  var result = {};
  for(var i = 0; i < this.columns.length; ++i) {
   var columnIndex = this.columns[i].index;
   var editorState = this.GetAutoFilterEditorValue(columnIndex);
   var chachedEditorState = this.filterEditorState[columnIndex];
   if(chachedEditorState.value !== editorState.value || chachedEditorState.filterCondition !== editorState.filterCondition) {
    result[columnIndex] = {
     value: editorState.value != null ? editorState.value : "",
     filterCondition: editorState.filterCondition
    }
   }
  }
  return result;
 },
 FilterRowMenuButtonClick: function(columnIndex, element) {
  var menu = this.GetFilterRowMenu();
  if(!menu) return;
  var column = this._getColumn(columnIndex);
  if(!column) return;
  for(var i = menu.GetItemCount() - 1; i >= 0; i--) {
   var item = menu.GetItem(i);
   item.SetChecked(item.name.substr(0, item.name.indexOf("|")) == this.filterRowConditions[columnIndex]);
   item.SetVisible(this.GetFilterRowMenuItemVisible(item, column));
  }
  menu.ShowAtElement(element);
  this.filterRowMenuColumnIndex = columnIndex;
 },
 GetFilterRowMenuItemVisible: function(item, column) {
  if(column.filterRowTypeKind) {
   var visible = item.name.indexOf(column.filterRowTypeKind) > -1;
   if(!visible && column.showFilterMenuLikeItem)
    return item.name.indexOf("L") > -1;
   return visible;
  }
  return false;
 },
 FilterRowMenuItemClick: function(item) {
  var itemName = item.name.substr(0, item.name.indexOf("|"));
  if(this.allowMultiColumnAutoFilter) {
   this.filterRowConditions[this.filterRowMenuColumnIndex] = parseInt(itemName);
  } else {
   var args = [this.filterRowMenuColumnIndex, itemName];
   this.gridCallBack(["FILTERROWMENU"].concat(args));
  }
 },
 ShowLoadingPanel: function() {
  var gridMainCell = this.GetGridTD();
  if(!gridMainCell)
   return;
  var endlessPagingHelper = this.GetEndlessPagingHelper();
  if(endlessPagingHelper && endlessPagingHelper.NeedShowLoadingPanelAtBottom()) {
   var container = this.GetEndlessPagingLPContainer();
   _aspxSetElementDisplay(container, true);
   this.CreateLoadingPanelWithoutBordersInsideContainer(container);
   return;
  }
  var lpContainer = this.GetLoadingPanelContainer();
  if(lpContainer)
   this.CreateLoadingPanelInline(lpContainer);
  else
   this.CreateLoadingPanelWithAbsolutePosition(gridMainCell, this.GetLoadingPanelOffsetElement(gridMainCell));
 },
 ShowLoadingDiv: function () {
  var endlessPagingHelper = this.GetEndlessPagingHelper();
  if(endlessPagingHelper && endlessPagingHelper.NeedShowLoadingPanelAtBottom())
   return;
  this.CreateLoadingDiv(this.GetGridTD());
 },
 GetCallbackAnimationElement: function() {
  var table = this.GetMainTable();
  if(table && table.parentNode && table.parentNode.tagName == "DIV")
   return table.parentNode;
  return table;
 },
 NeedPreventTouchUIMouseScrolling: function(element) {
  return this.IsHeaderChild(element);
 },
 IsHeaderChild: function(source) {
  var mainElement = this.GetMainElement();
  if(!mainElement) 
   return false;
  if(!_aspxGetIsParent(mainElement, source))
   return false;
  var headerRowCount = this.GetHeaderMatrix().GetRowCount();
  for(var i = 0; i < headerRowCount; i++) {
   if(_aspxGetIsParent(this.GetHeaderRow(i), source))
    return true;
  }
  return false;
 },
 _updateEdit: function() {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper && !batchEditHelper.CanUpdate())
   return;
  if(!batchEditHelper && !this._validateEditors())
   return;
  if(batchEditHelper)
   batchEditHelper.OnUpdate();
  this.gridCallBack(["UPDATEEDIT"]);
 },
 _validateEditors: function() {
  var editors = this._getEditors();
  var isValid = true;
  if(editors.length > 0)
   isValid &= this._validate(editors);
  if(window.ASPxClientEdit)
   isValid &= ASPxClientEdit.ValidateEditorsInContainer(this.GetEditFormTable(), this.name);
  return isValid;
 },
 _validate: function(list) {
  var isValid = true;
  var firstInvalid = null;
  var edit;
  for(var i = 0; i < list.length; i ++) {
   edit = list[i];
   edit.Validate();
   isValid = edit.GetIsValid() && isValid;
   if(firstInvalid == null && edit.setFocusOnError && !edit.GetIsValid())
    firstInvalid = edit;
  }
  if (firstInvalid != null)
   firstInvalid.Focus();
  return isValid;
 },
 _getEditors: function() {
  var list = [ ];
  for(var i = 0; i < this.editorIDList.length; i++) {
   var editor = aspxGetControlCollection().Get(this.editorIDList[i]);
   if(editor && editor.enabled && editor.GetMainElement && _aspxIsExistsElement(editor.GetMainElement())) {
    if(!editor.Validate) continue; 
    list.push(editor);
   }
  }
  return list;
 },
 GetEditorValues: function() {
  if(this.allowBatchEditing) return null;
  var list = this._getEditors();
  if(list.length == 0) return null;
  var res = list.length + ";";
  for(var i = 0; i < list.length; i ++) {
   res += this.GetEditorValue(list[i]);
  }
  return res;
 },
 GetEditorValue: function(editor) {
  var value = editor.GetValueString();
  var valueLength = -1;
  if(!_aspxIsExists(value)) {
   value = "";
  } else {
   value = value.toString();
   valueLength = value.length;
  }
  return this.GetEditorIndex(editor.name) + "," + valueLength + "," + value + ";";
 },
 GetEditorIndex: function(editorId) {
  var i = editorId.lastIndexOf(this.GetEditorPrefix());
  if(i < 0) return -1;
  var result = editorId.substr(i + this.GetEditorPrefix().length);
  i = result.indexOf('_'); 
  return i > 0
   ? result.substr(0, i)
   : result;
 },
 GetBatchEditHelper: function() {
  if(!this.allowBatchEditing) return null;
  if(!this.batchEditHelper)
   this.batchEditHelper = new ASPxClientGridViewBatchEditHelper(this);
  return this.batchEditHelper;
 },
 GetTableHelper: function() {
  if(!this.tableHelper && typeof(ASPxClientGridViewTableHelper) != "undefined")
   this.tableHelper = new ASPxClientGridViewTableHelper(this, this.MainTableID, this.HeaderTableID, this.FooterTableID, this.horzScroll, this.vertScroll);
  return this.tableHelper;
 },
 GetScrollHelper: function() {
  if(!this.HasScrolling()) return null;
  if(!this.scrollableHelper)
   this.scrollableHelper = new ASPxClientGridViewTableScrollHelper(this.GetTableHelper());
  return this.scrollableHelper;
 },
 GetFixedColumnsHelper: function() {
  if(!this.GetFixedColumnsDiv()) return null;
  if(!this.fixedColumnsHelper)
   this.fixedColumnsHelper = new ASPxClientTableFixedColumnsHelper(this.GetTableHelper(), this.FixedColumnsDivID, this.FixedColumnsContentDivID, this.fixedColumnCount);
  return this.fixedColumnsHelper;
 },
 GetResizingHelper: function() {
  if(!this.AllowResizing()) return null;
  if(!this.resizingHelper)
   this.resizingHelper = new ASPxClientGridViewTableResizingHelper(this.GetTableHelper());
  return this.resizingHelper;
 },
 GetEndlessPagingHelper: function() {
  if(!this.useEndlessPaging) return null;
  if(!this.endlessPagingHelper)
   this.endlessPagingHelper = new ASPxClientGridViewEndlessPagingHelper(this);
  return this.endlessPagingHelper;
 },
 IsLastCallbackProcessedAsEndless: function() {
  var helper = this.GetEndlessPagingHelper();
  return helper && helper.endlessCallbackComplete;
 },
 GetHeaderMatrix: function() {
  if(!this.headerMatrix)
   this.headerMatrix = new ASPxClientGridViewHeaderMatrix(this);
  return this.headerMatrix;
 },
 UpdateScrollableControls: function() {
  var helper = this.GetScrollHelper();
  if(helper)
   helper.Update();
 },
 ValidateColumnWidths: function() {
  var helper = this.GetResizingHelper();
  if(helper)
   helper.ValidateColumnWidths();
 },
 SetHeadersClientEvents: function() {
  if(!this.AllowResizing())
   return;
  var helper = this.GetResizingHelper();
  var attachMouseMove = function(headerCell) { 
   _aspxAttachEventToElement(headerCell, "mousemove", function(e) { helper.UpdateCursor(e, headerCell); });
  };
  for(var i = 0; i < this.columns.length; i++) {
   var header = this.GetHeader(this.columns[i].index);
   if(header) 
    attachMouseMove(header);
  }
 },
 OnBrowserWindowResize: function(e) {
  if(this.AllowResizing() && !this.HasScrolling())
   this.GetResizingHelper().ValidateColumnWidths();
  this.AdjustControl();
 },
 UpdatePostBackSyncInput: function(isChangedNotification) {
  var input = this.GetPostBackSyncInput();
  if(!input) return;
  var selectedIndex = isChangedNotification ? -1 : this.lastMultiSelectIndex; 
  ASPxSimpleHiddenField.Set("SI", selectedIndex, input);
 },
 ApplyPostBackSyncData: function() {
  var savedState = ASPxSimpleHiddenField.Get("SI", this.GetPostBackSyncInput());
  if(savedState && savedState.length > 0)
   this.lastMultiSelectIndex = Number(savedState);
 },
 EnsureVisibleRowFromServer: function() {
  if(this.scrollToRowIndex < 0) return;
  this.MakeRowVisible(this.scrollToRowIndex);
  this.scrollToRowIndex = -1;
 },
 EnsureRowHotTrackItems: function() {
  if(this.rowHotTrackStyle == null) return;
  var list = [ ];
  for(var i = 0; i < this.pageRowCount; i++) {
   var index = i + this.visibleStartIndex;
   if(this.rowHotTrackItemsBag[index]) continue;
   list.push(this.DataRowID + index);
   this.rowHotTrackItemsBag[index] = true;
  }
  if(list.length > 0) {
   aspxAddHoverItems(this.name, [
    [ 
     [this.rowHotTrackStyle[0]], 
     [this.rowHotTrackStyle[1]], 
     list
    ]
   ]);
  }
 },
 UpdateIndentCellWidths: function() {
  if(this.indentColumnCount <= 0) 
   return;
  if(this.HasScrolling() || this.AllowResizing()) 
   this.GetTableHelper().UpdateIndentCellWidths();
 },
 OnContextMenuClick: function(e) {
  var args = this.GetContextMenuArgs(e);
  if(args)
   return !this.RaiseContextMenu(args.objectType, args.index, e);
  return false;
 },
 GetContextMenuArgs: function(e) {
  var objectTypes = { };
  objectTypes[this.name + "_" + this.DataRowID]     = "row";
  objectTypes[this.name + "_" + "col"]     = "header";
  objectTypes[this.name + "_" + "groupcol"]      = "header";
  objectTypes[this.name + "_" + this.GroupRowID]    = "grouprow";
  objectTypes[this.name + "_" + this.GroupRowID + "Exp"]  = "grouprow";
  var src = _aspxGetEventSource(e);
  var element = src;
  while(element) {
   if(element.tagName == "BODY")
    return;
   var id = element.id;
   element = element.parentNode;
   if(!id) continue;
   var indexInfo = this.tryGetNumberFromEndOfString(id);
   if(!indexInfo.success) continue;
   var index = indexInfo.value;
   for(var partialID in objectTypes)
    if(id == partialID + index)
     return { objectType: objectTypes[partialID], index: index };
  }
 },
 Focus: function() {
  if(this.kbdHelper)
   this.kbdHelper.Focus();
 },
 PerformCallback: function(args){
  if(!_aspxIsExists(args)) args = "";
  this.gridCallBack([this.CommandId.CustomCallback, args]);
 },
 GetValuesOnCustomCallback: function(args, onCallBack) {
  this.gridFuncCallBack([this.CommandId.CustomValues, args], onCallBack);
 },
 GotoPage: function(pageIndex){
  if(this.useEndlessPaging)
   return;
  this.gridCallBack([this.CommandId.GotoPage, pageIndex]);
 },
 GetPageIndex: function(){
  return this.pageIndex;
 },
 GetPageCount: function(){
  return this.pageCount;
 },
 NextPage: function(){
  this.gridCallBack([this.CommandId.NextPage]);
 },
 PrevPage: function(focusBottomRow){
  if(this.useEndlessPaging)
   return;
  this.gridCallBack([this.CommandId.PreviousPage, focusBottomRow ? "T" : "F"]);
 },
 UnGroup: function(column){
  column = this._getColumnIndexByColumnArgs(column);
  this.GroupBy(column, -1);
 },
 ExpandAll: function(){
  this.gridCallBack([this.CommandId.ExpandAll]);
 },
 CollapseAll: function(){
  this.gridCallBack([this.CommandId.CollapseAll]);
 },
 ExpandAllDetailRows: function(){
  this.gridCallBack([this.CommandId.ShowAllDetail]);
 },
 CollapseAllDetailRows: function(){
  this.gridCallBack([this.CommandId.HideAllDetail]);
 },
 ExpandRow: function(visibleIndex, recursive){
  if(this.RaiseRowExpanding(visibleIndex)) return;
  recursive = !!recursive;
  this.gridCallBack([this.CommandId.ExpandRow, visibleIndex, recursive]);
 },
 CollapseRow: function(visibleIndex, recursive){
  if(this.RaiseRowCollapsing(visibleIndex)) return;
  recursive = !!recursive;
  this.gridCallBack([this.CommandId.CollapseRow, visibleIndex, recursive]);
 },
 MakeRowVisible: function(visibleIndex) {
  if(!this.HasVertScroll()) return;
  var row = this.GetRow(visibleIndex);
  if(row == null && visibleIndex >= this.visibleStartIndex 
   && visibleIndex < this.visibleStartIndex + this.pageRowCount) {
   row = this.GetEditingRow(this);
  }
  if(row == null) return;
  this.GetScrollHelper().MakeRowVisible(row);
 },
 ExpandDetailRow: function(visibleIndex){
  var key = this.GetRowKey(visibleIndex);
  if(key == null) return;
  if(this.RaiseDetailRowExpanding(visibleIndex)) return;
  this.gridCallBack([this.CommandId.ShowDetailRow, key]);
 },
 CollapseDetailRow: function(visibleIndex){
  var key = this.GetRowKey(visibleIndex);
  if(key == null) return;
  if(this.RaiseDetailRowCollapsing(visibleIndex)) return;
  this.gridCallBack([this.CommandId.HideDetailRow, key]);
 },
 GetRowKey: function(visibleIndex) {
  var arrayIndex = visibleIndex - this.visibleStartIndex;
  if(arrayIndex < 0 || arrayIndex > this.keys.length - 1) 
   return null;
  var key = this.keys[arrayIndex];
  if(key == "/^DXN")
   key = null;
  return key;
 },   
 StartEditRow: function(visibleIndex) {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.StartEdit(visibleIndex);
   return;
  }
  var key = this.GetRowKey(visibleIndex);
  if(key != null)
   this.StartEditRowByKey(key);
 },
 StartEditRowByKey: function(key) {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.StartEdit(batchEditHelper.FindRowVisibleIndexByKey(key)); 
   return;
  }
  this.gridCallBack([this.CommandId.StartEdit, key]);
 },
 IsEditing: function() {
  return this.editState > 0;
 },
 IsNewRowEditing: function() {
  return this.editState > 1;
 },
 IsNewRowAtBottom: function() {
  return this.editState == 3;
 },
 UpdateEdit: function(){
  this._updateEdit();
 },
 CancelEdit: function() {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.CancelEdit();
   return;
  }
  this.gridCallBack([this.CommandId.CancelEdit]);
 },
 AddNewRow: function(){
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.AddNewRow();
   return;
  }
  this.gridCallBack([this.CommandId.AddNewRow]);
 },
 DeleteRow: function(visibleIndex){
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.DeleteRow(visibleIndex);
   return;
  }
  var key = this.GetRowKey(visibleIndex);
  if(key != null)
   this.DeleteRowByKey(key);
 },
 DeleteRowByKey: function(key) {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper) {
   batchEditHelper.DeleteRowByKey(key);
   return;
  }
  this.gridCallBack([this.CommandId.DeleteRow, key]);
 },
 Refresh: function(){
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper)
   batchEditHelper.CancelEdit();
  this.gridCallBack([this.CommandId.Refresh]);
 },
 ApplyFilter: function(expression){
  expression = expression || "";
  this.gridCallBack([this.CommandId.ApplyFilter, expression]);
 },
 ClearFilter: function () {
  this.ClearAutoFilterState();
  this.ApplyFilter();
 },
 GetAutoFilterEditor: function(column) { 
  var index = this._getColumnIndexByColumnArgs(column);
  if(!_aspxIsExists(index)) return null;
  return aspxGetControlCollection().Get(this.name + "_DXFREditorcol" + index);
 },
 AutoFilterByColumn: function(column, val){
  var index = this._getColumnIndexByColumnArgs(column);
  if(!_aspxIsExists(index)) return;
  if(!_aspxIsExists(val)) val = "";  
  this.gridCallBack([this.CommandId.ApplyColumnFilter, index, val]);
 },
 ApplyHeaderFilterByColumn: function(){
  this.GetHeaderFilterPopup().Hide();
  var listBox = this.GetHeaderFilterListBox();
  var column = this.GetColumn(listBox.cpGVColumnIndex);
  if(!column) return;
  var values = listBox.GetSelectedValues();
  this.gridCallBack([this.CommandId.ApplyHeaderColumnFilter, column.index, _aspxToJson(values)]);
 },
 GroupBy: function(column, groupIndex, sortOrder){
  if(this.RaiseColumnGrouping(this._getColumnObjectByArg(column))) return;
  column = this._getColumnIndexByColumnArgs(column);
  if(!_aspxIsExists(groupIndex)) groupIndex = "";
  if(!_aspxIsExists(sortOrder)) sortOrder = "ASC";
  this.gridCallBack([this.CommandId.Group, column, groupIndex, sortOrder]);
 },
 SortBy: function(column, sortOrder, reset, sortIndex){
  if(this.RaiseColumnSorting(this._getColumnObjectByArg(column))) return;
  column = this._getColumnIndexByColumnArgs(column);
  if(!_aspxIsExists(sortIndex)) sortIndex = "";
  if(!_aspxIsExists(sortOrder)) sortOrder = "";
  if(!_aspxIsExists(reset)) reset = true;
  this.gridCallBack([this.CommandId.Sort, column, sortIndex, sortOrder, reset]);
 },
 MoveColumn: function(column, columnMoveTo, moveBefore, moveToGroup, moveFromGroup){
  if(!_aspxIsExists(column)) return;
  if(!_aspxIsExists(columnMoveTo)) columnMoveTo = -1;
  if(!_aspxIsExists(moveBefore)) moveBefore = true;
  if(!_aspxIsExists(moveToGroup)) moveToGroup = false;
  if(!_aspxIsExists(moveFromGroup)) moveFromGroup = false;
  if(moveToGroup) {
   if(this.RaiseColumnGrouping(this._getColumnObjectByArg(column))) return;
  }
  column = this._getColumnIndexByColumnArgs(column);
  this.gridCallBack([this.CommandId.ColumnMove, column, columnMoveTo, moveBefore, moveToGroup, moveFromGroup]);
 },
 GetFocusedRowIndex: function() {
  return this._getFocusedRowIndex();
 },
 SetFocusedRowIndex: function(visibleIndex) {
  return this._setFocusedRowIndex(visibleIndex);
 },
 IsCustomizationWindowVisible: function(){
  var custWindow = this.GetCustomizationWindow();
  return custWindow != null && custWindow.IsVisible();
 },
 ShowCustomizationWindow: function(showAtElement){
  var custWindow = this.GetCustomizationWindow();
  if(!showAtElement) showAtElement = this.GetMainElement();
  custWindow.ShowAtElement(showAtElement);
 },
 HideCustomizationWindow: function(){
  var custWindow = this.GetCustomizationWindow();
  if(custWindow != null) custWindow.Hide();
 },
 SelectRows: function(visibleIndices, selected){
  if(!_aspxIsExists(selected)) selected = true;
  if(!_aspxIsExists(visibleIndices)) {
   selected = selected ? "all" : "unall";
   visibleIndices = [ ];
  } else {
   if(visibleIndices.constructor != Array)
    visibleIndices = [visibleIndices];
  }
  this.gridCallBack([this.CommandId.SelectRows, selected].concat(visibleIndices));
 },
 SelectRowsByKey: function(keys, selected){
  if(!_aspxIsExists(selected)) selected = true;
  if(!_aspxIsExists(keys)) return;
  if(keys.constructor != Array)
   keys = [keys];
  this.gridCallBack([this.CommandId.SelectRowsKey, selected].concat(keys));
 },
 UnselectRowsByKey: function(keys){
  this.SelectRowsByKey(keys, false);
 },
 UnselectRows: function(visibleIndices){
  this.SelectRows(visibleIndices, false);
 },
 UnselectFilteredRows: function() {
  this.gridCallBack([this.CommandId.SelectRows, "unallf"]);
 },
 SelectRowOnPage: function(visibleIndex, selected){
  if(!_aspxIsExists(selected)) selected = true;
  this.SelectRow(visibleIndex, selected);
 },
 UnselectRowOnPage: function(visibleIndex){
  this.SelectRowOnPage(visibleIndex, false);
 },
 SelectAllRowsOnPage: function(selected){
  if(!_aspxIsExists(selected)) selected = true;
  this._selectAllRowsOnPage(selected);
 },
 UnselectAllRowsOnPage: function(){
  this._selectAllRowsOnPage(false);
 },
 GetSelectedRowCount: function() {
  return this._getSelectedRowCount();
 },
 GetSelectedFieldValues: function(fieldNames, onCallBack) {
  this.gridFuncCallBack([this.CommandId.SelFieldValues, fieldNames], onCallBack);
 },
 GetSelectedKeysOnPage: function() {
  var keys = [];
  for(var i = 0; i < this.pageRowCount; i++) {
   if(this._isRowSelected(this.visibleStartIndex + i))
    keys.push(this.keys[i]);
  }
  return keys; 
 },
 IsRowSelectedOnPage: function(visibleIndex) {
  return this._isRowSelected(visibleIndex);
 },
 GetRowValues: function(visibleIndex, fieldNames, onCallBack) {
  this.gridFuncCallBack([this.CommandId.RowValues, visibleIndex, fieldNames], onCallBack);
 },
 GetPageRowValues: function(fieldNames, onCallBack) {
  this.gridFuncCallBack([this.CommandId.PageRowValues, fieldNames], onCallBack);
 },
 GetVisibleRowsOnPage: function() {
  var batchEditHelper = this.GetBatchEditHelper();
  if(batchEditHelper)
   return batchEditHelper.GetVisibleRowsOnPageCount();
  return this.pageRowCount;
 },
 GetTopVisibleIndex: function() {
  return this.visibleStartIndex;
 },
 IsGroupRow: function(visibleIndex) {
  return this.GetGroupRow(visibleIndex) != null;
 },
 IsDataRow: function(visibleIndex) {
  return this.GetDataRow(visibleIndex) != null;
 },
 IsGroupRowExpanded: function(visibleIndex) { 
  return this.GetExpandedGroupRow(visibleIndex) != null;
 },
 GetColumnsCount: function() {
  return this._getColumnsCount();
 },
 GetColumn: function(index) {
  return this._getColumn(index);
 },
 GetColumnById: function(id) {
  return this._getColumnById(id);
 },
 GetColumnByField: function(fieldName) {
  return this._getColumnByField(fieldName);
 },
 GetEditor: function(column) {
  var columnObject = this._getColumnObjectByArg(column);
  return columnObject != null ? this.GetEditorByColumnIndex(columnObject.index) : null;
 },
 FocusEditor: function(column) {
  var editor = this.GetEditor(column);
  if(editor && editor.SetFocus) {
   editor.SetFocus();  
  }
 },
 GetEditValue: function(column) {
  var editor = this.GetEditor(column);
  return editor != null && editor.enabled ? editor.GetValue() : null;
 },
 SetEditValue: function(column, value) {
  var editor = this.GetEditor(column);
  if(editor != null && editor.enabled) {
   editor.SetValue(value);
  }
 },
 ShowFilterControl: function() {
  this.PreventCallbackAnimation();
  this.gridCallBack([this.CommandId.ShowFilterControl]);
 },
 CloseFilterControl: function() {
  this.PreventCallbackAnimation();
  this.HideFilterControlPopup();
  this.gridCallBack([this.CommandId.CloseFilterControl]);
 },
 HideFilterControlPopup: function() {
  var popup = this.GetFilterControlPopup();
  if(popup) popup.Hide();
 },
 ApplyFilterControl: function() {
  this.PreventCallbackAnimation();
  var fc = this.GetFilterControl();
  if(fc == null) return;
  if(!this.callBacksEnabled)
   this.HideFilterControlPopup();
  if(!fc.isApplied)
   fc.Apply(this);
 },
 SetFilterEnabled: function(isFilterEnabled) {
  this.gridCallBack([this.CommandId.SetFilterEnabled, isFilterEnabled]);
 },
 SetWidth: function(width) {
  if(this.GetMainElement().offsetWidth === width)
   return;
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.OnSetWidth(width);
  this.ResetControlAdjustment();
  this.constructor.prototype.SetWidth.call(this, width);
 },
 SetHeight: function(height) {
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.SetHeight(height);
 },
 GetVertScrollPos: function() {
  return this.GetVerticalScrollPosition();
 },
 GetVerticalScrollPosition: function() {
  if(this.isVirtualScrolling) 
   return 0;
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   return scrollHelper.GetVertScrollPosition();
  return 0;
 },
 GetHorzScrollPos: function() {
  return this.GetHorizontalScrollPosition();
 },
 GetHorizontalScrollPosition: function() {
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   return scrollHelper.GetHorzScrollPosition();
  return 0;
 },
 SetVertScrollPos: function(value) {
  this.SetVerticalScrollPosition(value);
 },
 SetVerticalScrollPosition: function(value) {
  if(this.isVirtualScrolling) 
   return;
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.SetVertScrollPosition(value);
 },
 SetHorzScrollPos: function(value) {
  this.SetHorizontalScrollPosition(value);
 },
 SetHorizontalScrollPosition: function(value) {
  var scrollHelper = this.GetScrollHelper();
  if(scrollHelper)
   scrollHelper.SetHorzScrollPosition(value);
 },
 RaiseSelectionChangedOutOfServer: function() {
  this.RaiseSelectionChanged(-1, false, false, true);
 },
 RaiseSelectionChanged: function(visibleIndex, isSelected, isAllRecordsOnPage, isChangedOnServer) {
  if(!this.SelectionChanged.IsEmpty()){
   var args = new ASPxClientGridViewSelectionEventArgs(visibleIndex, isSelected, isAllRecordsOnPage, isChangedOnServer);
   this.SelectionChanged.FireEvent(this, args);
   if(args.processOnServer) {
    this.gridCallBack(["SELECTION"]);
   }
  }
  return false; 
 },
 RaiseFocusedRowChanged: function() {
  if(!this.FocusedRowChanged.IsEmpty()){
   var args = new ASPxClientProcessingModeEventArgs(false);
   this.FocusedRowChanged.FireEvent(this, args);
   if(args.processOnServer) {
    this.gridCallBack(["FOCUSEDROW"]);
   }
  }
  return false; 
 },
 RaiseColumnSorting: function(column) {
  if(!this.ColumnSorting.IsEmpty()){
   var args = new ASPxClientGridViewColumnCancelEventArgs(column);
   this.ColumnSorting.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseColumnGrouping: function(column) {
  if(!this.ColumnGrouping.IsEmpty()){
   var args = new ASPxClientGridViewColumnCancelEventArgs(column);
   this.ColumnGrouping.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseColumnStartDragging: function(column) {
  if(!this.ColumnStartDragging.IsEmpty()){
   var args = new ASPxClientGridViewColumnCancelEventArgs(column);
   this.ColumnStartDragging.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseColumnResizing: function(column) {
  if(!this.ColumnResizing.IsEmpty()){
   var args = new ASPxClientGridViewColumnCancelEventArgs(column);
   this.ColumnResizing.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseColumnResized: function(column) {
  if(!this.ColumnResized.IsEmpty()){
   var args = new ASPxClientGridViewColumnProcessingModeEventArgs(column);
   this.ColumnResized.FireEvent(this, args);
   if(args.processOnServer)
    this.Refresh();
  }
 },
 RaiseRowExpanding: function(visibleIndex) {
  if(!this.RowExpanding.IsEmpty()){
   var args = new ASPxClientGridViewRowCancelEventArgs(visibleIndex);
   this.RowExpanding.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseRowCollapsing: function(visibleIndex) {
  if(!this.RowCollapsing.IsEmpty()){
   var args = new ASPxClientGridViewRowCancelEventArgs(visibleIndex);
   this.RowCollapsing.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseDetailRowExpanding: function(visibleIndex) {
  if(!this.DetailRowExpanding.IsEmpty()){
   var args = new ASPxClientGridViewRowCancelEventArgs(visibleIndex);
   this.DetailRowExpanding.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseDetailRowCollapsing: function(visibleIndex) {
  if(!this.DetailRowCollapsing.IsEmpty()){
   var args = new ASPxClientGridViewRowCancelEventArgs(visibleIndex);
   this.DetailRowCollapsing.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseRowClick: function(visibleIndex, htmlEvent) {
  if(!this.RowClick.IsEmpty()){
   var args = new ASPxClientGridViewRowClickEventArgs(visibleIndex, htmlEvent);
   this.RowClick.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseRowDblClick: function(visibleIndex, htmlEvent) {
  if(!this.RowDblClick.IsEmpty()){
   _aspxClearSelection(); 
   var args = new ASPxClientGridViewRowClickEventArgs(visibleIndex, htmlEvent);
   this.RowDblClick.FireEvent(this, args);
   return args.cancel;
  }
  return false; 
 },
 RaiseContextMenu: function(objectType, index, htmlEvent) {
  var args = new ASPxClientGridViewContextMenuEventArgs(objectType, index, htmlEvent);
  if(!this.ContextMenu.IsEmpty())
   this.ContextMenu.FireEvent(this, args);
  return !args.showBrowserMenu;
 },
 RaiseCustomizationWindowCloseUp: function() {
  if(!this.CustomizationWindowCloseUp.IsEmpty()){
   var args = new ASPxClientEventArgs();
   this.CustomizationWindowCloseUp.FireEvent(this, args);
  }
  return false; 
 },
 RaiseColumnMoving: function(targets) {
  if(this.ColumnMoving.IsEmpty()) return;
  var srcColumn = this.getColumnObject(targets.obj.id);
  var destColumn = this.getColumnObject(targets.targetElement.id);
  var isLeft = targets.isLeftPartOfElement();
  var isGroupPanel = targets.targetElement == targets.grid.GetGroupPanel();
  var args = new ASPxClientGridViewColumnMovingEventArgs(srcColumn, destColumn, isLeft, isGroupPanel);
  this.ColumnMoving.FireEvent(this, args);
  if(!args.allow) {
   targets.targetElement = null;
  }
 },
 RaiseBatchEditConfirmShowing: function(requestTriggerID) {
  if(!this.BatchEditConfirmShowing.IsEmpty()) {
   var args = new ASPxClientGridViewBatchEditConfirmShowingEventArgs(requestTriggerID);
   this.BatchEditConfirmShowing.FireEvent(this, args);
   return args.cancel;
  }
  return false;
 },
 RaiseInternalCheckBoxClick: function(visibleIndex) {
  if(!this.InternalCheckBoxClick.IsEmpty()){
   var args = {"visibleIndex": visibleIndex, cancel: false};
   this.InternalCheckBoxClick.FireEvent(this, args);
   return args.cancel;
  }
  return false;
 },
 UA_AddNew: function() {
  this.AddNewRow();
 },
 UA_StartEdit: function(visibleIndex) {
  this.StartEditRow(visibleIndex);
 },
 UA_Delete: function(visibleIndex) {
  this.DeleteGridRow(visibleIndex);
 },
 UA_UpdateEdit: function() {
  this.UpdateEdit();
 },
 UA_CancelEdit: function() {
  this.CancelEdit();
 },
 UA_CustomButton: function(id, visibleIndex) {
  this.CommandCustomButton(id, visibleIndex);
 },
 UA_Select: function(visibleIndex) {
  if(!this.lookupBehavior || this.allowSelectByRowClick)
   this.SelectRow(visibleIndex, !this._isRowSelected(visibleIndex));
 },
 UA_ClearFilter: function() {
  this.ClearFilter();
 },
 UA_ApplyMultiColumnAutoFilter: function() {
  this.ApplyMultiColumnAutoFilter();
 }
});
ASPxClientGridView.Cast = ASPxClientControl.Cast;
ASPxClientGridViewColumn = _aspxCreateClass(null, {
 constructor: function(name, index, parentIndex, fieldName, visible, filterRowTypeKind, showFilterMenuLikeItem,
  allowGroup, allowSort, allowDrag, HFCheckedList, inCustWindow, minWidth) {
  this.name = name;
  this.id = name;
  this.index = index;
  this.parentIndex = parentIndex;
  this.fieldName = fieldName;
  this.visible = !!visible;
  this.filterRowTypeKind = filterRowTypeKind;
  this.showFilterMenuLikeItem = !!showFilterMenuLikeItem;
  this.allowGroup = !!allowGroup;
  this.allowSort = !!allowSort;
  this.allowDrag = !!allowDrag;
  this.HFCheckedList = !!HFCheckedList;
  this.inCustWindow = !!inCustWindow;
  this.minWidth = minWidth;
 }
});
ASPxClientGridViewColumnCancelEventArgs = _aspxCreateClass(ASPxClientCancelEventArgs, {
 constructor: function(column){
  this.constructor.prototype.constructor.call(this);
  this.column = column;
 }
});
ASPxClientGridViewColumnProcessingModeEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(column){
  this.constructor.prototype.constructor.call(this, false);
  this.column = column;
 }
});
ASPxClientGridViewRowCancelEventArgs = _aspxCreateClass(ASPxClientCancelEventArgs, {
 constructor: function(visibleIndex){
  this.constructor.prototype.constructor.call(this);
  this.visibleIndex = visibleIndex;
 }
});
ASPxClientGridViewSelectionEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(visibleIndex, isSelected, isAllRecordsOnPage, isChangedOnServer){
  this.constructor.prototype.constructor.call(this, false);
  this.visibleIndex = visibleIndex;
  this.isSelected = isSelected;
  this.isAllRecordsOnPage = isAllRecordsOnPage;
  this.isChangedOnServer = isChangedOnServer;
 }
});
ASPxClientGridViewRowClickEventArgs = _aspxCreateClass(ASPxClientGridViewRowCancelEventArgs, {
 constructor: function(visibleIndex, htmlEvent){
  this.constructor.prototype.constructor.call(this, visibleIndex);
  this.htmlEvent = htmlEvent;
 }
});
ASPxClientGridViewContextMenuEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(objectType, index, htmlEvent){
  this.constructor.prototype.constructor.call(this);
  this.objectType = objectType;
  this.index = index;
  this.htmlEvent = htmlEvent;
  this.showBrowserMenu = false;
 }
});
ASPxClientGridViewCustomButtonEventArgs = _aspxCreateClass(ASPxClientProcessingModeEventArgs, {
 constructor: function(visibleIndex, buttonID) {
  this.constructor.prototype.constructor.call(this, false);
  this.visibleIndex = visibleIndex;
  this.buttonID = buttonID;
 } 
});
ASPxClientGridViewColumnMovingEventArgs = _aspxCreateClass(ASPxClientEventArgs, {
 constructor: function(sourceColumn, destinationColumn, isDropBefore, isGroupPanel) {
  this.constructor.prototype.constructor.call(this);
  this.allow = true;
  this.sourceColumn = sourceColumn;
  this.destinationColumn = destinationColumn;
  this.isDropBefore = isDropBefore;
  this.isGroupPanel = isGroupPanel;
 }
});
ASPxClientGridViewBatchEditConfirmShowingEventArgs = _aspxCreateClass(ASPxClientCancelEventArgs, {
 constructor: function(requestTriggerID) {
  this.constructor.prototype.constructor.call(this);
  this.requestTriggerID = requestTriggerID;
 }
});
ASPxGridViewKbdHelper = _aspxCreateClass(ASPxKbdHelper, {
 HandleKeyDown: function(e) {  
  var grid = this.control;
  var index = grid.GetFocusedRowIndex();
  var busy = grid.keyboardLock;
  var key = _aspxGetKeyCode(e);
  if(grid.rtl) {
   if(key == ASPxKey.Left)
    key = ASPxKey.Right;
   else if(key == ASPxKey.Right)
    key = ASPxKey.Left;
  }
  switch(key) {
   case ASPxKey.Down:
    if(!busy) 
     this.TryMoveFocusDown(index, e.shiftKey);
    return true;
   case ASPxKey.Up:
    if(!busy) 
     this.TryMoveFocusUp(index, e.shiftKey);
    return true;
   case ASPxKey.Right:
    if(!busy) {
     if(!this.TryExpand(index))
      this.TryMoveFocusDown(index, e.shiftKey);
    }
    return true;
   case ASPxKey.Left:
    if(!busy) {
     if(!this.TryCollapse(index))
      this.TryMoveFocusUp(index, e.shiftKey);
    }
    return true;
   case ASPxKey.PageDown:
    if(e.shiftKey) {
     if(!busy && grid.pageIndex < grid.pageCount - 1)
      grid.NextPage();
     return true; 
    }
    break;
   case ASPxKey.PageUp:
    if(e.shiftKey) {
     if(!busy && grid.pageIndex > 0)
      grid.PrevPage();
     return true; 
    }
    break;     
  }
  return false;
 },
 HandleKeyPress: function(e) {
  var grid = this.control;
  var index = grid.GetFocusedRowIndex();
  var busy = grid.keyboardLock;
  switch(_aspxGetKeyCode(e)) {
   case ASPxKey.Space:
    if(!busy && this.IsRowSelectable(index))
     grid.IsRowSelectedOnPage(index) ? grid.UnselectRowOnPage(index) : grid.SelectRowOnPage(index);
    return true;
    case 43:
    if(!busy)
     this.TryExpand(index);
    return true;
    case 45: 
    if(!busy)   
     this.TryCollapse(index);    
    return true;
  }
  return false;
 },
 EnsureFocusedRowVisible: function() {
  var grid = this.control;
  if(!grid.HasVertScroll()) return;
  var row = grid.GetRow(grid.GetFocusedRowIndex());
  grid.GetScrollHelper().MakeRowVisible(row, true);
 },
 HasDetailButton: function(expanded) {
  var grid = this.control;
  var row = grid.GetRow(grid.GetFocusedRowIndex());
  if(!row) return;
  var needle = expanded ? "aspxGVHideDetailRow" : "aspxGVShowDetailRow";
  return row.innerHTML.indexOf(needle) > -1;
 },
 IsRowSelectable: function(index) {
  if(this.control.allowSelectByRowClick)
   return true;
  var row = this.control.GetRow(index);
  if(row && row.innerHTML.indexOf("aspxGVSelectRow") > -1)
   return true;
  var check = this.control.GetDataRowSelBtn(index); 
  if(check && this.control.internalCheckBoxCollection && !!this.control.internalCheckBoxCollection.Get(check.id))
   return true;
  return false;
 },
 UpdateShiftSelection: function(start, end) {
  var grid = this.control;
  grid.UnselectAllRowsOnPage();
  if(grid.lastMultiSelectIndex > -1)   
   start = grid.lastMultiSelectIndex;
  else   
   grid.lastMultiSelectIndex = start;
  for(var i = Math.min(start, end); i <= Math.max(start, end); i++)
   grid.SelectRowOnPage(i);
 },
 TryExpand: function(index) {
  var grid = this.control;
  if(grid.IsGroupRow(index) && !grid.IsGroupRowExpanded(index)) {
   grid.ExpandRow(index);
   return true;
  }
  if(this.HasDetailButton(false)) {
   grid.ExpandDetailRow(index);
   return true;
  }
  return false;
 },
 TryCollapse: function(index) {
  var grid = this.control;
  if(grid.IsGroupRow(index) && grid.IsGroupRowExpanded(index)) {
   grid.CollapseRow(index);
   return true;
  }
  if(this.HasDetailButton(true)) {
   grid.CollapseDetailRow(index);
   return true;
  }
  return false;
 },
 TryMoveFocusDown: function(index, select) {
  var grid = this.control;
  if(index < grid.visibleStartIndex + grid.pageRowCount - 1) {
   if(index < 0) 
    grid.SetFocusedRowIndex(grid.visibleStartIndex);
    else
    grid.SetFocusedRowIndex(index + 1);
   this.EnsureFocusedRowVisible();
   if(this.IsRowSelectable(index)) {
    if(select) {
     this.UpdateShiftSelection(index, index + 1);
    } else {
     grid.lastMultiSelectIndex = -1;
    }
   }
  } else {
   if(grid.pageIndex < grid.pageCount - 1 && grid.pageIndex >= 0) {       
    grid.NextPage();
   }
  }  
 },
 TryMoveFocusUp: function(index, select) {
  var grid = this.control;
  if(index > grid.visibleStartIndex || index == -1) {
   if(index < 0) 
    grid.SetFocusedRowIndex(grid.visibleStartIndex + grid.pageRowCount - 1);
   else
    grid.SetFocusedRowIndex(index - 1);
   this.EnsureFocusedRowVisible();
   if(this.IsRowSelectable(index)) {
    if(select) {
     this.UpdateShiftSelection(index, index - 1);
    } else {
     grid.lastMultiSelectIndex = -1;
    }
   }
  } else {
   if(grid.pageIndex > 0) {
    grid.PrevPage(true);
   }
  }
 }
});
ASPxClientGridViewDragHelper = _aspxCreateClass(null, {
 constructor: function(grid) {
  this.grid = grid;
 },
 CreateDrag: function(e, element, canDrag) {
  var drag = new ASPxClientDragHelper(e, element, true);
  drag.centerClone = true;
  drag.canDrag = canDrag;  
  drag.grid = this.grid;
  drag.ctrl = e.ctrlKey;
  drag.shift = e.shiftKey;
  drag.onDragDivCreating = this.OnDragDivCreating;
  drag.onDoClick = this.OnDoClick;
  drag.onCloneCreating = this.OnCloneCreating;
  drag.onEndDrag = this.OnEndDrag;
  drag.onCancelDrag = this.OnCancelDrag;
  return drag;
 },
 PrepareTargetHeightFunc: function() {
  ASPxClientGridViewDragHelper.Target_GetElementHeight = null;
  var headerRowCount = this.grid.GetHeaderMatrix().GetRowCount();
  if(headerRowCount) {
   var row = this.grid.GetHeaderRow(headerRowCount - 1);
   var headerBottom = _aspxGetAbsoluteY(row) + row.offsetHeight;
   ASPxClientGridViewDragHelper.Target_GetElementHeight = function() {
    return headerBottom - this.absoluteY;
   };
  }
 },
 CreateTargets: function(drag, e) {
  if(!drag.canDrag) return;
  var grid = this.grid;
  this.PrepareTargetHeightFunc();
  var targets = new ASPxClientCursorTargets();
  targets.obj = drag.obj;
  targets.grid = grid;
  targets.onTargetCreated = this.OnTargetCreated;
  targets.onTargetChanging = this.OnTargetChanging;
  targets.onTargetChanged = this.OnTargetChanged;
  var scrollLeft = null, scrollRight;
  var scrollHelper = grid.GetScrollHelper();
  var scrollableControl = scrollHelper && scrollHelper.GetHorzScrollableControl();
  if(scrollableControl) {
   scrollLeft = _aspxGetAbsoluteX(scrollableControl);
   scrollRight = scrollLeft + scrollableControl.offsetWidth;
  }
  var sourceColumn = grid.getColumnObject(drag.obj.id);
  var win = grid.GetCustomizationWindow();
  if(win && !sourceColumn.inCustWindow)
   this.AddDragDropTarget(targets, win.GetWindowClientTable(-1));
  for(var i = 0; i < grid.columns.length; i++) {
   var column = grid.columns[i];
   for(var grouped = 0; grouped <= 1; grouped++) {
    var targetElement = grid.GetHeader(column.index, !!grouped);
    if(!targetElement)
     continue;
    if(scrollLeft !== null) {
     var targetX = _aspxGetAbsoluteX(targetElement);
     if(targetX < scrollLeft || targetX + targetElement.offsetWidth > scrollRight)
      continue;
    }
    if(this.IsValidColumnDragDropTarget(drag.obj, targetElement, sourceColumn, column))
     this.AddDragDropTarget(targets, targetElement);  
   }
  }
  this.AddDragDropTarget(targets, grid.GetGroupPanel());
  this.AddDragDropTarget(targets, _aspxGetElementById(grid.name + this.grid.EmptyHeaderSuffix));
 },
 IsValidColumnDragDropTarget: function(sourceElement, targetElement, sourceColumn, targetColumn) {
  if(sourceColumn == targetColumn)
   return false;
  if(sourceColumn.parentIndex == targetColumn.parentIndex)
   return true;
  if(sourceColumn.parentIndex == targetColumn.index) {
   return (sourceColumn.inCustWindow || this.IsGroupingTarget(sourceElement))
    && this.grid.GetHeaderMatrix().IsLeaf(targetColumn.index);
  }
  if(this.IsGroupingTarget(targetElement))
   return true;
  return false;
 },
 AddDragDropTarget: function(targets, element) {
  element && targets.addElement(element);
 },
 IsGroupHeaderTarget: function(element) {
  if(!element)
   return false;
  return element.id.indexOf(this.grid.name + "_groupcol") == 0;
 },
 IsGroupingTarget: function(element) { 
  return element == this.grid.GetGroupPanel() || this.IsGroupHeaderTarget(element);
 },
 IsCustWindowTarget: function(element) {
  var win = this.grid.GetCustomizationWindow();
  return win && element == win.GetWindowClientTable(-1); 
 },
 OnDragDivCreating: function(drag, dragDiv) {
  var rootTable = drag.grid.GetRootTable();
  if(!dragDiv || !rootTable) return;
  dragDiv.className = rootTable.className;
  dragDiv.style.cssText = rootTable.style.cssText;
 },
 OnDoClick: function(drag) {
  if(!drag.grid.canSortByColumn(drag.obj)) return;
  drag.grid.SortBy(drag.grid.getColumnIndex(drag.obj.id), drag.ctrl ? "NONE" : "", !drag.shift && !drag.ctrl);
 },
 OnCancelDrag: function(drag) {
  drag.grid.dragHelper.ChangeTargetImagesVisibility(false);
 },
 OnEndDrag: function(drag) {
  if(!drag.targetElement)
   return;
  var grid = drag.grid;
  var sourceElement = drag.obj;
  var targetElement = drag.targetElement;
  var isLeft = drag.targetTag;
  if(grid.rtl)
   isLeft = !isLeft;
  grid.MoveColumn(
   grid.getColumnIndex(sourceElement.id),
   grid.IsEmptyHeaderID(targetElement.id) ? 0 : grid.getColumnIndex(targetElement.id),
   isLeft,
   grid.dragHelper.IsGroupingTarget(targetElement),
   grid.dragHelper.IsGroupingTarget(sourceElement)
  );
 },
 OnCloneCreating: function(clone) {
  var table = document.createElement("table");
  table.cellSpacing = 0;
  if(this.obj.offsetWidth > 0)
   table.style.width = Math.min(200, this.obj.offsetWidth) + "px";
  if(this.obj.offsetHeight > 0)
   table.style.height = this.obj.offsetHeight + "px";
  var row = table.insertRow(-1);
  clone.style.borderLeftWidth = "";
  clone.style.borderTopWidth = "";
  clone.style.borderRightWidth = "";
  row.appendChild(clone);
  table.style.opacity = 0.80;
  table.style.filter = "alpha(opacity=80)"; 
  if(_aspxIsElementRightToLeft(this.obj))
   table.dir = "rtl";
  return table;
 },
 OnTargetCreated: function(targets, targetObj) {
  var f = ASPxClientGridViewDragHelper.Target_GetElementHeight;
  var h = targets.grid.dragHelper;
  var el = targetObj.element;
  if(f && !h.IsCustWindowTarget(el) && !h.IsGroupingTarget(el))
   targetObj.GetElementHeight = f;
 },
 OnTargetChanging: function(targets) {
  if(!targets.targetElement)
   return;
  targets.targetTag = targets.isLeftPartOfElement();
  var grid = targets.grid;
  var grouping = false;
  if(targets.targetElement == grid.GetGroupPanel()) {
   targets.targetTag = true;
   grouping = true;
  }  
  if(grid.dragHelper.IsGroupHeaderTarget(targets.targetElement)) {
   grouping = true;
  }
  if(grouping && !grid.canGroupByColumn(targets.obj))
   targets.targetElement = null;
  if(targets.targetElement) {
   grid.RaiseColumnMoving(targets);
  }
 },
 OnTargetChanged: function(targets) {
  if(__aspxDragHelper == null)
   return;
  var element = targets.targetElement;
  if(element == __aspxDragHelper.obj)
   return;
  var grid = targets.grid;
  grid.dragHelper.ChangeTargetImagesVisibility(false);
  if(!element) {
   __aspxDragHelper.targetElement = null;
   return;
  }
  __aspxDragHelper.targetElement = element;
  __aspxDragHelper.targetTag = targets.targetTag;
  var moveToGroup = grid.dragHelper.IsGroupingTarget(element);
  var moveToCustWindow = grid.dragHelper.IsCustWindowTarget(element);
  if(moveToCustWindow) {
   __aspxDragHelper.addElementToDragDiv(grid.GetArrowDragFieldImage());
   return;
  }
  var matrix =  grid.GetHeaderMatrix();
  var targetColumnIndex = grid.getColumnIndex(element.id);
  var isRightSide = !targets.targetTag;
  var left = _aspxGetAbsoluteX(element);
  var neighbor;
  if(moveToGroup) {
   var method = isRightSide ^ grid.rtl ? "nextSibling" : "previousSibling";
   neighbor = grid.dragHelper.GetGroupNodeNeighbor(element, method);
   if(neighbor && neighbor.id == __aspxDragHelper.obj.id) {
    __aspxDragHelper.targetElement = null;
    return;
   }
  } else {
   if(targetColumnIndex > -1) {
    var method = isRightSide ^ grid.rtl ? "GetRightNeighbor" : "GetLeftNeighbor";
    var neighborIndex = matrix[method](targetColumnIndex);
    var sourceColumn = grid.getColumnObject(__aspxDragHelper.obj.id);
    if(neighborIndex == sourceColumn.index && !sourceColumn.inCustWindow && !grid.dragHelper.IsGroupHeaderTarget(__aspxDragHelper.obj)) {
     __aspxDragHelper.targetElement = null;
     return;
    } 
    if(!isNaN(neighborIndex))
     neighbor = grid.GetHeader(neighborIndex)
   }
   }
  if(element == grid.GetGroupPanel()) {
   if(grid.rtl)
    left += element.offsetWidth;
  } else {
   if(isRightSide) {
    if(neighbor)
     left = _aspxGetAbsoluteX(neighbor);
    else
     left += element.offsetWidth;
   }
  }
  var bottomElement = element;
  if(!moveToGroup && targetColumnIndex > -1)
   bottomElement = grid.GetHeader(matrix.GetLeaf(targetColumnIndex, !isRightSide, false));
  grid.dragHelper.SetDragImagesPosition(left, _aspxGetAbsoluteY(element),  _aspxGetAbsoluteY(bottomElement) + bottomElement.offsetHeight);
  grid.dragHelper.ChangeTargetImagesVisibility(true);
 },
 GetGroupNodeNeighbor: function(element, method) {
  return this.GetGroupNodeNeighborCore(element, method, 2);
 },
 GetGroupNodeNeighborCore: function(element, method, distance) {
  var neighbor = element[method];
  if(neighbor && neighbor.nodeType == 1) {
   if(this.IsGroupingTarget(neighbor)) 
    return neighbor;
   if(distance > 1)
    return this.GetGroupNodeNeighborCore(neighbor, method, --distance);
  }
  return null;
 },
 ChangeTargetImagesVisibility: function(vis) {
  if(this.grid.GetArrowDragDownImage() == null) return;
  var value = vis ? "visible" : "hidden";
  this.grid.GetArrowDragDownImage().style.visibility = value;
  this.grid.GetArrowDragUpImage().style.visibility = value;
  if(__aspxDragHelper != null) {
   __aspxDragHelper.removeElementFromDragDiv();
  }
 },
 SetDragImagesPosition: function(left, top, bottom) {
  var downImage = this.grid.GetArrowDragDownImage();
  if(downImage) {
   _aspxSetAbsoluteX(downImage, left - downImage.offsetWidth / 2);
   _aspxSetAbsoluteY(downImage, top - downImage.offsetHeight);
  }
  var upImage = this.grid.GetArrowDragUpImage();
  if(upImage) {
   _aspxSetAbsoluteX(upImage, left - upImage.offsetWidth / 2);
   _aspxSetAbsoluteY(upImage, bottom);
  }
 }
});
ASPxClientGridViewDragHelper.Target_GetElementHeight = null;
ASPxClientGridViewHeaderMatrix = _aspxCreateClass(null, {
 constructor: function(grid) {
  this.grid = grid;
 },
 Invalidate: function() {
  this.matrix = null;
  this.inverseMatrix = null;
 }, 
 GetRowCount: function() {
  this.EnsureMatrix();
  return this.matrix.length;
 },
 IsLeftmostColumn: function(columnIndex) {
  this.EnsureMatrix();
  return this.inverseMatrix[columnIndex].left == 0;
 },
 IsRightmostColumn: function(columnIndex) {
  this.EnsureMatrix();  
  return this.inverseMatrix[columnIndex].right == this.matrix[0].length - 1;
 },
 IsLeaf: function(columnIndex) {
  this.EnsureMatrix();
  return this.inverseMatrix[columnIndex].bottom == this.matrix.length - 1;
 },
 GetLeaf: function(columnIndex, isLeft, isOuter) {
  this.EnsureMatrix();
  var rect = this.inverseMatrix[columnIndex];
  var row = this.matrix[this.matrix.length - 1];
  if(isLeft) {
   if(isOuter)
    return row[rect.left - 1];
   return row[rect.left];
  }
  if(isOuter)
   return row[rect.right + 1];
  return row[rect.right];
 },
 GetLeafIndex: function(columnIndex) {
  this.EnsureMatrix();
  return this.inverseMatrix[columnIndex].left;
 },
 GetLeafIndices: function() {
  return this.GetRowIndices(this.GetRowCount() - 1);
 },
 GetRowIndices: function(rowIndex) {
  this.EnsureMatrix();
  return this.matrix[rowIndex] || [];
 },
 GetRowSpan: function(columnIndex) {
  this.EnsureMatrix();
  var rect = this.inverseMatrix[columnIndex];
  return rect.bottom - rect.top + 1;
 },
 GetLeftNeighbor: function(columnIndex) {
  this.EnsureMatrix();
  var rect = this.inverseMatrix[columnIndex];
  return this.matrix[rect.top][rect.left - 1];
 },
 GetRightNeighbor: function(columnIndex) {
  this.EnsureMatrix();
  var rect = this.inverseMatrix[columnIndex];
  return this.matrix[rect.top][rect.right + 1];
 },
 GetRightNeighborLeaf: function(columnIndex) {
  return this.GetLeaf(columnIndex, false, true);
 },
 EnsureMatrix: function() {
  this.matrix || this.Fill();
 },
 Fill: function() {
  this.matrix = [ ];
  this.inverseMatrix = { };
  var rowIndex = 0;
  while(true) {
   var row = this.grid.GetHeaderRow(rowIndex);
   if(!row)
    break;
   var lastFreeIndex = 0;
   for(var cellIndex = !rowIndex ? this.grid.indentColumnCount : 0; cellIndex < row.cells.length; cellIndex++) {
    var cell = row.cells[cellIndex];
    var columnIndex = this.grid.getColumnIndex(cell.id);
    if(columnIndex < 0)
     break;
    lastFreeIndex = this.FindFreeCellIndex(rowIndex, lastFreeIndex);
    this.FillBlock(rowIndex, lastFreeIndex, cell.rowSpan, cell.colSpan, columnIndex);
    lastFreeIndex += cell.colSpan;
   }
   ++rowIndex;
  }
 },
 FindFreeCellIndex: function(rowIndex, lastFreeCell) {
  var row = this.matrix[rowIndex];
  var result = lastFreeCell;
  if(row) {
   while(!isNaN(row[result]))
    result++;
  } 
  return result;
 },
 FillBlock: function(rowIndex, cellIndex, rowSpan, colSpan, columnIndex) {
  var rect = {
   top: rowIndex,
   bottom: rowIndex + rowSpan - 1,
   left: cellIndex,
   right: cellIndex + colSpan - 1
  };
  for(var i = rect.top; i <= rect.bottom; i++) {
   while(!this.matrix[i])
    this.matrix.push([]);
   for(var j = rect.left; j <= rect.right; j++)
    this.matrix[i][j] = columnIndex;
  }
  this.inverseMatrix[columnIndex] = rect;
 }
});
function aspxGVContextMenu(name, e) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  return gv.OnContextMenuClick(e);
}
function aspxGVExpandRow(name, visibleIndex, event) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  if(gv.useEndlessPaging && event)
   visibleIndex = gv.FindParentRowVisibleIndex(_aspxGetEventSource(event), true);
  gv.ExpandRow(visibleIndex);
 }
}
function aspxGVCollapseRow(name, visibleIndex, event) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  if(gv.useEndlessPaging && event)
   visibleIndex = gv.FindParentRowVisibleIndex(_aspxGetEventSource(event), true);
  gv.CollapseRow(visibleIndex);
 }
}
function aspxGVShowDetailRow(name, visibleIndex, event) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  if(gv.useEndlessPaging && event)
   visibleIndex = gv.FindParentRowVisibleIndex(_aspxGetEventSource(event), true);
  gv.ExpandDetailRow(visibleIndex);
 }
}
function aspxGVHideDetailRow(name, visibleIndex, event) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  if(gv.useEndlessPaging && event)
   visibleIndex = gv.FindParentRowVisibleIndex(_aspxGetEventSource(event), true);
  gv.CollapseDetailRow(visibleIndex);
 }
}
function aspxGVHeaderMouseDown(name, element, e) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) 
  gv.HeaderMouseDown(element, e);
}
function aspxGVPopupEditFormOnInit(name, popup) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  window.setTimeout(function() { gv.OnPopupEditFormInit(popup); }, 0);
}
function aspxGVPagerOnClick(name, value) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) 
  gv.doPagerOnClick(value);
}
function aspxGVFilterKeyPress(name, element, e) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) 
  gv.OnColumnFilterInputKeyPress(element, e);
}
function aspxGVFilterSpecKeyPress(name, element, e) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) 
  gv.OnColumnFilterInputSpecKeyPress(element, e);
}
function aspxGVFilterChanged(name, element) {
 _aspxSetTimeout("aspxGVFilterChangedDelayed(\""+name+"\", \"" + element.name + "\");", 0);
}
function aspxGVFilterChangedDelayed(name, elementName) {
 var gv = aspxGetControlCollection().Get(name);
 var element = aspxGetControlCollection().Get(elementName);
 if(gv != null && element != null) 
  gv.OnColumnFilterInputChanged(element);
}
function aspxGVTimer(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) 
  gv.OnFilterKeyPressTick();
}
function aspxGVShowParentRows(name, evt, element) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  if(element)
   gv.OnParentRowMouseEnter(element);  
  else 
   gv.OnParentRowMouseLeave(evt);
 }
}
function aspxGVTableClick(name, evt) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null && gv.NeedProcessTableClick(evt))
  gv.mainTableClick(evt);
}
function aspxGVTableDblClick(name, evt) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null && gv.NeedProcessTableClick(evt))
  gv.mainTableDblClick(evt);
}
function aspxGVParentRowsTimer(name, rowId) {
 var gv = aspxGetControlCollection().Get(name);
 var element = _aspxGetElementById(rowId);
 if(!element || !gv) return;
 gv.ShowParentRows(element);
}
function aspxGVCustWindowShown_IE(s) {
 var div = document.getElementById(s.name + "_Scroller");
 div.style.overflow = "hidden";
 var width1 = div.clientWidth;
 div.style.overflow = "auto";
 var width2 = div.clientWidth;
 if(width2 > width1) {
  div.style.width = width1 + "px";
  div.style.paddingRight = (width2 - width1) + "px";
  window.setTimeout(function() { 
   div.className = "_";
   div.className = "";
  }, 0);
 }
}
function aspxGVCustWindowCloseUp(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  gv.RaiseCustomizationWindowCloseUp();
 }
}
function aspxGVApplyFilterPopup(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.ApplyHeaderFilterByColumn();
}
function aspxGVShowFilterControl(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  gv.ShowFilterControl();
 }
}
function aspxGVCloseFilterControl(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  gv.CloseFilterControl();
 }
}
function aspxGVSetFilterEnabled(name, value) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null) {
  gv.SetFilterEnabled(value);
 }
}
function aspxGVApplyFilterControl(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.ApplyFilterControl();
}
function aspxGVFilterRowMenu(name, columnIndex, element) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.FilterRowMenuButtonClick(columnIndex, element);
}
function aspxGVFilterRowMenuClick(name, e) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.FilterRowMenuItemClick(e.item);
}
function aspxGVSort(name, columnIndex) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)  
  gv.SortBy(columnIndex);
}
function aspxGVScheduleCommand(name, commandArgs, postponed, event) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.ScheduleUserCommand(commandArgs, postponed, event);
}
function aspxGVHFListBoxInit(name, listBox) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null && listBox)
  gv.InitializeHFListBox(listBox);
}
function aspxGVHFSelectAllCheckedChanged(name, checkBox) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null && checkBox)
  gv.OnHFSelectAllCheckedChanged(checkBox);
}
function aspxGVHFCancelButtonClick(name) {
 var gv = aspxGetControlCollection().Get(name);
 if(gv != null)
  gv.GetHeaderFilterPopup().Hide();
}
ASPxClientGridView.SelectStartHandler = function(e) {
 if(_aspxGetEventSource(e).tagName.match(/input|select|textarea/i))
  return;
 if(e.ctrlKey || e.shiftKey) {
  _aspxClearSelection();
  _aspxPreventEventAndBubble(e);
 }
};
ASPxClientGridView.SaveActiveElementSettings = function(grid) {
 var element = grid.activeElement;
 grid.activeElement = null;
 ASPxClientGridView.activeElementData = null;
 if (!element || !element.id || element.tagName != "INPUT" || element.id.indexOf(grid.name + "_") != 0)
  return;  
 ASPxClientGridView.activeElementData = [ grid.name, element.id, _aspxGetSelectionInfo(element).endPos ];
 if(typeof(Sys) != "undefined" && typeof(Sys.Application) != "undefined") {
  if(!ASPxClientGridView.MsAjaxActiveElementHandlerAdded) {
   Sys.Application.add_load(function() { ASPxClientGridView.RestoreActiveElementSettings(); } );
   ASPxClientGridView.MsAjaxActiveElementHandlerAdded = true;
  }
 } 
};
ASPxClientGridView.RestoreActiveElementSettings = function(grid) {
 var data = ASPxClientGridView.activeElementData;
 if(!data || grid && data[0] != grid.name) return;
 var element = _aspxGetElementById(data[1]);
 if(element) {
  window.setTimeout(function() {
   element.focus();
   _aspxSetInputSelection(element, data[2], data[2]);
  }, 0);
 }
 ASPxClientGridView.activeElementData = null;
};
