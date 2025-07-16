{"version":3,"names":["MAX_UID","MILLISECONDS_MULTIPLIER","TRANSITION_END","toType","object","Object","prototype","toString","call","match","toLowerCase","getUID","prefix","Math","floor","random","document","getElementById","getSelector","element","selector","getAttribute","hrefAttribute","includes","startsWith","split","trim","getSelectorFromElement","querySelector","getElementFromSelector","getTransitionDurationFromElement","transitionDuration","transitionDelay","window","getComputedStyle","floatTransitionDuration","Number","parseFloat","floatTransitionDelay","triggerTransitionEnd","dispatchEvent","Event","isElement","jquery","nodeType","getElement","length","isVisible","getClientRects","elementIsVisible","getPropertyValue","closedDetails","closest","summary","parentNode","isDisabled","Node","ELEMENT_NODE","classList","contains","disabled","hasAttribute","findShadowRoot","documentElement","attachShadow","getRootNode","root","ShadowRoot","noop","reflow","offsetHeight","getjQuery","jQuery","body","DOMContentLoadedCallbacks","onDOMContentLoaded","callback","readyState","addEventListener","push","isRTL","dir","defineJQueryPlugin","plugin","$","name","NAME","JQUERY_NO_CONFLICT","fn","jQueryInterface","Constructor","noConflict","execute","executeAfterTransition","transitionElement","waitForTransition","emulatedDuration","called","handler","target","removeEventListener","setTimeout","getNextActiveElement","list","activeElement","shouldGetNext","isCycleAllowed","listLength","index","indexOf","max","min","namespaceRegex","stripNameRegex","stripUidRegex","eventRegistry","uidEvent","customEvents","mouseenter","mouseleave","nativeEvents","Set","makeEventUid","uid","getElementEvents","bootstrapHandler","event","hydrateObj","delegateTarget","oneOff","EventHandler","off","type","apply","bootstrapDelegationHandler","domElements","querySelectorAll","this","domElement","findHandler","events","callable","delegationSelector","values","find","normalizeParameters","originalTypeEvent","delegationFunction","isDelegated","typeEvent","getTypeEvent","has","addHandler","wrapFunction","relatedTarget","handlers","previousFunction","replace","removeHandler","Boolean","removeNamespacedHandlers","namespace","storeElementEvent","handlerKey","keys","on","one","inNamespace","isNamespace","elementEvent","slice","keyHandlers","trigger","args","jQueryEvent","bubbles","nativeDispatch","defaultPrevented","isPropagationStopped","isImmediatePropagationStopped","isDefaultPrevented","evt","cancelable","preventDefault","obj","meta","key","value","entries","_unused","defineProperty","configurable","get","elementMap","Map","Data","set","instance","instanceMap","size","console","error","Array","from","remove","delete","normalizeData","JSON","parse","decodeURIComponent","normalizeDataKey","chr","Manipulator","setDataAttribute","setAttribute","removeDataAttribute","removeAttribute","getDataAttributes","attributes","bsKeys","dataset","filter","pureKey","charAt","getDataAttribute","Config","Default","DefaultType","Error","_getConfig","config","_mergeConfigObj","_configAfterMerge","_typeCheckConfig","jsonConfig","constructor","configTypes","property","expectedTypes","valueType","RegExp","test","TypeError","toUpperCase","VERSION","BaseComponent","super","_element","_config","DATA_KEY","dispose","EVENT_KEY","propertyName","getOwnPropertyNames","_queueCallback","isAnimated","static","getInstance","enableDismissTrigger","component","method","clickEvent","tagName","getOrCreateInstance","EVENT_CLOSE","EVENT_CLOSED","CLASS_NAME_FADE","CLASS_NAME_SHOW","Alert","close","_destroyElement","each","data","undefined","DATA_API_KEY","CLASS_NAME_ACTIVE","SELECTOR_DATA_TOGGLE","EVENT_CLICK_DATA_API","Button","toggle","button","SelectorEngine","concat","Element","findOne","children","child","matches","parents","ancestor","prev","previous","previousElementSibling","next","nextElementSibling","focusableChildren","focusables","map","join","el","EVENT_TOUCHSTART","EVENT_TOUCHMOVE","EVENT_TOUCHEND","EVENT_POINTERDOWN","EVENT_POINTERUP","POINTER_TYPE_TOUCH","POINTER_TYPE_PEN","CLASS_NAME_POINTER_EVENT","SWIPE_THRESHOLD","endCallback","leftCallback","rightCallback","Swipe","isSupported","_deltaX","_supportPointerEvents","PointerEvent","_initEvents","_start","_eventIsPointerPenTouch","clientX","touches","_end","_handleSwipe","_move","absDeltaX","abs","direction","add","pointerType","navigator","maxTouchPoints","ARROW_LEFT_KEY","ARROW_RIGHT_KEY","TOUCHEVENT_COMPAT_WAIT","ORDER_NEXT","ORDER_PREV","DIRECTION_LEFT","DIRECTION_RIGHT","EVENT_SLIDE","EVENT_SLID","EVENT_KEYDOWN","EVENT_MOUSEENTER","EVENT_MOUSELEAVE","EVENT_DRAG_START","EVENT_LOAD_DATA_API","CLASS_NAME_CAROUSEL","CLASS_NAME_SLIDE","CLASS_NAME_END","CLASS_NAME_START","CLASS_NAME_NEXT","CLASS_NAME_PREV","SELECTOR_ACTIVE","SELECTOR_ITEM","SELECTOR_ACTIVE_ITEM","SELECTOR_ITEM_IMG","SELECTOR_INDICATORS","SELECTOR_DATA_SLIDE","SELECTOR_DATA_RIDE","KEY_TO_DIRECTION","ArrowLeft","ArrowRight","interval","keyboard","pause","ride","touch","wrap","Carousel","_interval","_activeElement","_isSliding","touchTimeout","_swipeHelper","_indicatorsElement","_addEventListeners","cycle","_slide","nextWhenVisible","hidden","_clearInterval","_updateInterval","setInterval","_maybeEnableCycle","to","items","_getItems","activeIndex","_getItemIndex","_getActive","order","defaultInterval","_keydown","_addTouchEventListeners","img","swipeConfig","_directionToOrder","clearTimeout","_setActiveIndicatorElement","activeIndicator","newActiveIndicator","elementInterval","parseInt","isNext","nextElement","nextElementIndex","triggerEvent","eventName","_orderToDirection","isCycling","directionalClassName","orderClassName","_isAnimated","clearInterval","carousel","slideIndex","carousels","EVENT_SHOW","EVENT_SHOWN","EVENT_HIDE","EVENT_HIDDEN","CLASS_NAME_COLLAPSE","CLASS_NAME_COLLAPSING","CLASS_NAME_COLLAPSED","CLASS_NAME_DEEPER_CHILDREN","CLASS_NAME_HORIZONTAL","WIDTH","HEIGHT","SELECTOR_ACTIVES","parent","Collapse","_isTransitioning","_triggerArray","toggleList","elem","filterElement","foundElement","_initializeChildren","_addAriaAndCollapsedClass","_isShown","hide","show","activeChildren","_getFirstLevelChildren","activeInstance","dimension","_getDimension","style","scrollSize","getBoundingClientRect","selected","triggerArray","isOpen","selectorElements","ESCAPE_KEY","TAB_KEY","ARROW_UP_KEY","ARROW_DOWN_KEY","RIGHT_MOUSE_BUTTON","EVENT_KEYDOWN_DATA_API","EVENT_KEYUP_DATA_API","CLASS_NAME_DROPUP","CLASS_NAME_DROPEND","CLASS_NAME_DROPSTART","CLASS_NAME_DROPUP_CENTER","CLASS_NAME_DROPDOWN_CENTER","SELECTOR_DATA_TOGGLE_SHOWN","SELECTOR_MENU","SELECTOR_NAVBAR","SELECTOR_NAVBAR_NAV","SELECTOR_VISIBLE_ITEMS","PLACEMENT_TOP","PLACEMENT_TOPEND","PLACEMENT_BOTTOM","PLACEMENT_BOTTOMEND","PLACEMENT_RIGHT","PLACEMENT_LEFT","PLACEMENT_TOPCENTER","PLACEMENT_BOTTOMCENTER","autoClose","boundary","display","offset","popperConfig","reference","Dropdown","_popper","_parent","_menu","_inNavbar","_detectNavbar","_createPopper","focus","_completeHide","destroy","update","Popper","referenceElement","_getPopperConfig","createPopper","_getPlacement","parentDropdown","isEnd","_getOffset","popperData","defaultBsPopperConfig","placement","modifiers","options","enabled","_selectMenuItem","openToggles","context","composedPath","isMenuTarget","isInput","isEscapeEvent","isUpOrDownEvent","getToggleButton","stopPropagation","dataApiKeydownHandler","clearMenus","SELECTOR_FIXED_CONTENT","SELECTOR_STICKY_CONTENT","PROPERTY_PADDING","PROPERTY_MARGIN","ScrollBarHelper","getWidth","documentWidth","clientWidth","innerWidth","width","_disableOverFlow","_setElementAttributes","calculatedValue","reset","_resetElementAttributes","isOverflowing","_saveInitialAttribute","overflow","styleProperty","scrollbarWidth","_applyManipulationCallback","setProperty","actualValue","removeProperty","callBack","sel","EVENT_MOUSEDOWN","className","clickCallback","rootElement","Backdrop","_isAppended","_append","_getElement","_emulateAnimation","backdrop","createElement","append","EVENT_FOCUSIN","EVENT_KEYDOWN_TAB","TAB_NAV_FORWARD","TAB_NAV_BACKWARD","autofocus","trapElement","FocusTrap","_isActive","_lastTabNavDirection","activate","_handleFocusin","_handleKeydown","deactivate","elements","shiftKey","EVENT_HIDE_PREVENTED","EVENT_RESIZE","EVENT_CLICK_DISMISS","EVENT_MOUSEDOWN_DISMISS","EVENT_KEYDOWN_DISMISS","CLASS_NAME_OPEN","CLASS_NAME_STATIC","OPEN_SELECTOR","SELECTOR_DIALOG","SELECTOR_MODAL_BODY","Modal","_dialog","_backdrop","_initializeBackDrop","_focustrap","_initializeFocusTrap","_scrollBar","_adjustDialog","_showElement","_hideModal","htmlElement","handleUpdate","scrollTop","modalBody","_triggerBackdropTransition","event2","_resetAdjustments","isModalOverflowing","scrollHeight","clientHeight","initialOverflowY","overflowY","isBodyOverflowing","paddingLeft","paddingRight","showEvent","alreadyOpen","CLASS_NAME_SHOWING","CLASS_NAME_HIDING","CLASS_NAME_BACKDROP","scroll","Offcanvas","blur","position","uriAttributes","ARIA_ATTRIBUTE_PATTERN","SAFE_URL_PATTERN","DATA_URL_PATTERN","allowedAttribute","attribute","allowedAttributeList","attributeName","nodeName","nodeValue","attributeRegex","some","regex","DefaultAllowlist","a","area","b","br","col","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","li","ol","p","pre","s","small","span","sub","sup","strong","u","ul","sanitizeHtml","unsafeHtml","allowList","sanitizeFunction","createdDocument","DOMParser","parseFromString","elementName","attributeList","allowedAttributes","innerHTML","content","extraClass","html","sanitize","sanitizeFn","template","DefaultContentType","entry","TemplateFactory","getContent","_resolvePossibleFunction","hasContent","changeContent","_checkContent","toHtml","templateWrapper","_maybeSanitize","text","_setContent","arg","templateElement","_putElementInTemplate","textContent","DISALLOWED_ATTRIBUTES","CLASS_NAME_MODAL","SELECTOR_TOOLTIP_INNER","SELECTOR_MODAL","EVENT_MODAL_HIDE","TRIGGER_HOVER","TRIGGER_FOCUS","TRIGGER_CLICK","TRIGGER_MANUAL","EVENT_INSERTED","EVENT_CLICK","EVENT_FOCUSOUT","AttachmentMap","AUTO","TOP","RIGHT","BOTTOM","LEFT","animation","container","customClass","delay","fallbackPlacements","title","Tooltip","_isEnabled","_timeout","_isHovered","_activeTrigger","_templateFactory","_newContent","tip","_setListeners","_fixTitle","enable","disable","toggleEnabled","click","_leave","_enter","_hideModalHandler","_disposePopper","_isWithContent","isInTheDom","ownerDocument","_getTipElement","_isWithActiveTrigger","_getTitle","_createTipElement","_getContentForTemplate","_getTemplateFactory","tipId","setContent","_initializeOnDelegatedTarget","_getDelegateConfig","attachment","phase","state","triggers","eventIn","eventOut","_setTimeout","timeout","dataAttributes","dataAttribute","SELECTOR_TITLE","SELECTOR_CONTENT","Popover","_getContent","EVENT_ACTIVATE","CLASS_NAME_DROPDOWN_ITEM","SELECTOR_DATA_SPY","SELECTOR_TARGET_LINKS","SELECTOR_NAV_LIST_GROUP","SELECTOR_NAV_LINKS","SELECTOR_NAV_ITEMS","SELECTOR_LIST_ITEMS","SELECTOR_LINK_ITEMS","SELECTOR_DROPDOWN","SELECTOR_DROPDOWN_TOGGLE","rootMargin","smoothScroll","threshold","ScrollSpy","_targetLinks","_observableSections","_rootElement","_activeTarget","_observer","_previousScrollData","visibleEntryTop","parentScrollTop","refresh","_initializeTargetsAndObservables","_maybeEnableSmoothScroll","disconnect","_getNewObserver","section","observe","observableSection","hash","height","offsetTop","scrollTo","top","behavior","IntersectionObserver","_observerCallback","targetElement","id","_process","userScrollsDown","isIntersecting","_clearActiveClass","entryIsLowerThanPrevious","targetLinks","anchor","_activateParents","listGroup","item","activeNodes","node","spy","CLASS_DROPDOWN","SELECTOR_DROPDOWN_MENU","NOT_SELECTOR_DROPDOWN_TOGGLE","SELECTOR_TAB_PANEL","SELECTOR_OUTER","SELECTOR_INNER","SELECTOR_INNER_ELEM","SELECTOR_DATA_TOGGLE_ACTIVE","Tab","_setInitialAttributes","_getChildren","innerElem","_elemIsActive","active","_getActiveElem","hideEvent","_deactivate","_activate","relatedElem","_toggleDropDown","nextActiveElement","preventScroll","_setAttributeIfNotExists","_setInitialAttributesOnChild","_getInnerElement","isActive","outerElem","_getOuterElement","_setInitialAttributesOnTargetPanel","open","EVENT_MOUSEOVER","EVENT_MOUSEOUT","CLASS_NAME_HIDE","autohide","Toast","_hasMouseInteraction","_hasKeyboardInteraction","_clearTimeout","_maybeScheduleHide","isShown","_onInteraction","isInteracting"],"sources":["../../js/src/util/index.js","../../js/src/dom/event-handler.js","../../js/src/dom/data.js","../../js/src/dom/manipulator.js","../../js/src/util/config.js","../../js/src/base-component.js","../../js/src/util/component-functions.js","../../js/src/alert.js","../../js/src/button.js","../../js/src/dom/selector-engine.js","../../js/src/util/swipe.js","../../js/src/carousel.js","../../js/src/collapse.js","../../js/src/dropdown.js","../../js/src/util/scrollbar.js","../../js/src/util/backdrop.js","../../js/src/util/focustrap.js","../../js/src/modal.js","../../js/src/offcanvas.js","../../js/src/util/sanitizer.js","../../js/src/util/template-factory.js","../../js/src/tooltip.js","../../js/src/popover.js","../../js/src/scrollspy.js","../../js/src/tab.js","../../js/src/toast.js"],"sourcesContent":["/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/index.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst MAX_UID = 1_000_000\nconst MILLISECONDS_MULTIPLIER = 1000\nconst TRANSITION_END = 'transitionend'\n\n// Shout-out Angus Croll (https://goo.gl/pxwQGp)\nconst toType = object => {\n  if (object === null || object === undefined) {\n    return `${object}`\n  }\n\n  return Object.prototype.toString.call(object).match(/\\s([a-z]+)/i)[1].toLowerCase()\n}\n\n/**\n * Public Util API\n */\n\nconst getUID = prefix => {\n  do {\n    prefix += Math.floor(Math.random() * MAX_UID)\n  } while (document.getElementById(prefix))\n\n  return prefix\n}\n\nconst getSelector = element => {\n  let selector = element.getAttribute('data-bs-target')\n\n  if (!selector || selector === '#') {\n    let hrefAttribute = element.getAttribute('href')\n\n    // The only valid content that could double as a selector are IDs or classes,\n    // so everything starting with `#` or `.`. If a \"real\" URL is used as the selector,\n    // `document.querySelector` will rightfully complain it is invalid.\n    // See https://github.com/twbs/bootstrap/issues/32273\n    if (!hrefAttribute || (!hrefAttribute.includes('#') && !hrefAttribute.startsWith('.'))) {\n      return null\n    }\n\n    // Just in case some CMS puts out a full URL with the anchor appended\n    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {\n      hrefAttribute = `#${hrefAttribute.split('#')[1]}`\n    }\n\n    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null\n  }\n\n  return selector\n}\n\nconst getSelectorFromElement = element => {\n  const selector = getSelector(element)\n\n  if (selector) {\n    return document.querySelector(selector) ? selector : null\n  }\n\n  return null\n}\n\nconst getElementFromSelector = element => {\n  const selector = getSelector(element)\n\n  return selector ? document.querySelector(selector) : null\n}\n\nconst getTransitionDurationFromElement = element => {\n  if (!element) {\n    return 0\n  }\n\n  // Get transition-duration of the element\n  let { transitionDuration, transitionDelay } = window.getComputedStyle(element)\n\n  const floatTransitionDuration = Number.parseFloat(transitionDuration)\n  const floatTransitionDelay = Number.parseFloat(transitionDelay)\n\n  // Return 0 if element or transition duration is not found\n  if (!floatTransitionDuration && !floatTransitionDelay) {\n    return 0\n  }\n\n  // If multiple durations are defined, take the first\n  transitionDuration = transitionDuration.split(',')[0]\n  transitionDelay = transitionDelay.split(',')[0]\n\n  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER\n}\n\nconst triggerTransitionEnd = element => {\n  element.dispatchEvent(new Event(TRANSITION_END))\n}\n\nconst isElement = object => {\n  if (!object || typeof object !== 'object') {\n    return false\n  }\n\n  if (typeof object.jquery !== 'undefined') {\n    object = object[0]\n  }\n\n  return typeof object.nodeType !== 'undefined'\n}\n\nconst getElement = object => {\n  // it's a jQuery object or a node element\n  if (isElement(object)) {\n    return object.jquery ? object[0] : object\n  }\n\n  if (typeof object === 'string' && object.length > 0) {\n    return document.querySelector(object)\n  }\n\n  return null\n}\n\nconst isVisible = element => {\n  if (!isElement(element) || element.getClientRects().length === 0) {\n    return false\n  }\n\n  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'\n  // Handle `details` element as its content may falsie appear visible when it is closed\n  const closedDetails = element.closest('details:not([open])')\n\n  if (!closedDetails) {\n    return elementIsVisible\n  }\n\n  if (closedDetails !== element) {\n    const summary = element.closest('summary')\n    if (summary && summary.parentNode !== closedDetails) {\n      return false\n    }\n\n    if (summary === null) {\n      return false\n    }\n  }\n\n  return elementIsVisible\n}\n\nconst isDisabled = element => {\n  if (!element || element.nodeType !== Node.ELEMENT_NODE) {\n    return true\n  }\n\n  if (element.classList.contains('disabled')) {\n    return true\n  }\n\n  if (typeof element.disabled !== 'undefined') {\n    return element.disabled\n  }\n\n  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false'\n}\n\nconst findShadowRoot = element => {\n  if (!document.documentElement.attachShadow) {\n    return null\n  }\n\n  // Can find the shadow root otherwise it'll return the document\n  if (typeof element.getRootNode === 'function') {\n    const root = element.getRootNode()\n    return root instanceof ShadowRoot ? root : null\n  }\n\n  if (element instanceof ShadowRoot) {\n    return element\n  }\n\n  // when we don't find a shadow root\n  if (!element.parentNode) {\n    return null\n  }\n\n  return findShadowRoot(element.parentNode)\n}\n\nconst noop = () => {}\n\n/**\n * Trick to restart an element's animation\n *\n * @param {HTMLElement} element\n * @return void\n *\n * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation\n */\nconst reflow = element => {\n  element.offsetHeight // eslint-disable-line no-unused-expressions\n}\n\nconst getjQuery = () => {\n  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {\n    return window.jQuery\n  }\n\n  return null\n}\n\nconst DOMContentLoadedCallbacks = []\n\nconst onDOMContentLoaded = callback => {\n  if (document.readyState === 'loading') {\n    // add listener on the first call when the document is in loading state\n    if (!DOMContentLoadedCallbacks.length) {\n      document.addEventListener('DOMContentLoaded', () => {\n        for (const callback of DOMContentLoadedCallbacks) {\n          callback()\n        }\n      })\n    }\n\n    DOMContentLoadedCallbacks.push(callback)\n  } else {\n    callback()\n  }\n}\n\nconst isRTL = () => document.documentElement.dir === 'rtl'\n\nconst defineJQueryPlugin = plugin => {\n  onDOMContentLoaded(() => {\n    const $ = getjQuery()\n    /* istanbul ignore if */\n    if ($) {\n      const name = plugin.NAME\n      const JQUERY_NO_CONFLICT = $.fn[name]\n      $.fn[name] = plugin.jQueryInterface\n      $.fn[name].Constructor = plugin\n      $.fn[name].noConflict = () => {\n        $.fn[name] = JQUERY_NO_CONFLICT\n        return plugin.jQueryInterface\n      }\n    }\n  })\n}\n\nconst execute = callback => {\n  if (typeof callback === 'function') {\n    callback()\n  }\n}\n\nconst executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {\n  if (!waitForTransition) {\n    execute(callback)\n    return\n  }\n\n  const durationPadding = 5\n  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding\n\n  let called = false\n\n  const handler = ({ target }) => {\n    if (target !== transitionElement) {\n      return\n    }\n\n    called = true\n    transitionElement.removeEventListener(TRANSITION_END, handler)\n    execute(callback)\n  }\n\n  transitionElement.addEventListener(TRANSITION_END, handler)\n  setTimeout(() => {\n    if (!called) {\n      triggerTransitionEnd(transitionElement)\n    }\n  }, emulatedDuration)\n}\n\n/**\n * Return the previous/next element of a list.\n *\n * @param {array} list    The list of elements\n * @param activeElement   The active element\n * @param shouldGetNext   Choose to get next or previous element\n * @param isCycleAllowed\n * @return {Element|elem} The proper element\n */\nconst getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {\n  const listLength = list.length\n  let index = list.indexOf(activeElement)\n\n  // if the element does not exist in the list return an element\n  // depending on the direction and if cycle is allowed\n  if (index === -1) {\n    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0]\n  }\n\n  index += shouldGetNext ? 1 : -1\n\n  if (isCycleAllowed) {\n    index = (index + listLength) % listLength\n  }\n\n  return list[Math.max(0, Math.min(index, listLength - 1))]\n}\n\nexport {\n  defineJQueryPlugin,\n  execute,\n  executeAfterTransition,\n  findShadowRoot,\n  getElement,\n  getElementFromSelector,\n  getjQuery,\n  getNextActiveElement,\n  getSelectorFromElement,\n  getTransitionDurationFromElement,\n  getUID,\n  isDisabled,\n  isElement,\n  isRTL,\n  isVisible,\n  noop,\n  onDOMContentLoaded,\n  reflow,\n  triggerTransitionEnd,\n  toType\n}\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): dom/event-handler.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { getjQuery } from '../util/index'\n\n/**\n * Constants\n */\n\nconst namespaceRegex = /[^.]*(?=\\..*)\\.|.*/\nconst stripNameRegex = /\\..*/\nconst stripUidRegex = /::\\d+$/\nconst eventRegistry = {} // Events storage\nlet uidEvent = 1\nconst customEvents = {\n  mouseenter: 'mouseover',\n  mouseleave: 'mouseout'\n}\n\nconst nativeEvents = new Set([\n  'click',\n  'dblclick',\n  'mouseup',\n  'mousedown',\n  'contextmenu',\n  'mousewheel',\n  'DOMMouseScroll',\n  'mouseover',\n  'mouseout',\n  'mousemove',\n  'selectstart',\n  'selectend',\n  'keydown',\n  'keypress',\n  'keyup',\n  'orientationchange',\n  'touchstart',\n  'touchmove',\n  'touchend',\n  'touchcancel',\n  'pointerdown',\n  'pointermove',\n  'pointerup',\n  'pointerleave',\n  'pointercancel',\n  'gesturestart',\n  'gesturechange',\n  'gestureend',\n  'focus',\n  'blur',\n  'change',\n  'reset',\n  'select',\n  'submit',\n  'focusin',\n  'focusout',\n  'load',\n  'unload',\n  'beforeunload',\n  'resize',\n  'move',\n  'DOMContentLoaded',\n  'readystatechange',\n  'error',\n  'abort',\n  'scroll'\n])\n\n/**\n * Private methods\n */\n\nfunction makeEventUid(element, uid) {\n  return (uid && `${uid}::${uidEvent++}`) || element.uidEvent || uidEvent++\n}\n\nfunction getElementEvents(element) {\n  const uid = makeEventUid(element)\n\n  element.uidEvent = uid\n  eventRegistry[uid] = eventRegistry[uid] || {}\n\n  return eventRegistry[uid]\n}\n\nfunction bootstrapHandler(element, fn) {\n  return function handler(event) {\n    hydrateObj(event, { delegateTarget: element })\n\n    if (handler.oneOff) {\n      EventHandler.off(element, event.type, fn)\n    }\n\n    return fn.apply(element, [event])\n  }\n}\n\nfunction bootstrapDelegationHandler(element, selector, fn) {\n  return function handler(event) {\n    const domElements = element.querySelectorAll(selector)\n\n    for (let { target } = event; target && target !== this; target = target.parentNode) {\n      for (const domElement of domElements) {\n        if (domElement !== target) {\n          continue\n        }\n\n        hydrateObj(event, { delegateTarget: target })\n\n        if (handler.oneOff) {\n          EventHandler.off(element, event.type, selector, fn)\n        }\n\n        return fn.apply(target, [event])\n      }\n    }\n  }\n}\n\nfunction findHandler(events, callable, delegationSelector = null) {\n  return Object.values(events)\n    .find(event => event.callable === callable && event.delegationSelector === delegationSelector)\n}\n\nfunction normalizeParameters(originalTypeEvent, handler, delegationFunction) {\n  const isDelegated = typeof handler === 'string'\n  // todo: tooltip passes `false` instead of selector, so we need to check\n  const callable = isDelegated ? delegationFunction : (handler || delegationFunction)\n  let typeEvent = getTypeEvent(originalTypeEvent)\n\n  if (!nativeEvents.has(typeEvent)) {\n    typeEvent = originalTypeEvent\n  }\n\n  return [isDelegated, callable, typeEvent]\n}\n\nfunction addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {\n  if (typeof originalTypeEvent !== 'string' || !element) {\n    return\n  }\n\n  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)\n\n  // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position\n  // this prevents the handler from being dispatched the same way as mouseover or mouseout does\n  if (originalTypeEvent in customEvents) {\n    const wrapFunction = fn => {\n      return function (event) {\n        if (!event.relatedTarget || (event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget))) {\n          return fn.call(this, event)\n        }\n      }\n    }\n\n    callable = wrapFunction(callable)\n  }\n\n  const events = getElementEvents(element)\n  const handlers = events[typeEvent] || (events[typeEvent] = {})\n  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null)\n\n  if (previousFunction) {\n    previousFunction.oneOff = previousFunction.oneOff && oneOff\n\n    return\n  }\n\n  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''))\n  const fn = isDelegated ?\n    bootstrapDelegationHandler(element, handler, callable) :\n    bootstrapHandler(element, callable)\n\n  fn.delegationSelector = isDelegated ? handler : null\n  fn.callable = callable\n  fn.oneOff = oneOff\n  fn.uidEvent = uid\n  handlers[uid] = fn\n\n  element.addEventListener(typeEvent, fn, isDelegated)\n}\n\nfunction removeHandler(element, events, typeEvent, handler, delegationSelector) {\n  const fn = findHandler(events[typeEvent], handler, delegationSelector)\n\n  if (!fn) {\n    return\n  }\n\n  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector))\n  delete events[typeEvent][fn.uidEvent]\n}\n\nfunction removeNamespacedHandlers(element, events, typeEvent, namespace) {\n  const storeElementEvent = events[typeEvent] || {}\n\n  for (const handlerKey of Object.keys(storeElementEvent)) {\n    if (handlerKey.includes(namespace)) {\n      const event = storeElementEvent[handlerKey]\n      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)\n    }\n  }\n}\n\nfunction getTypeEvent(event) {\n  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')\n  event = event.replace(stripNameRegex, '')\n  return customEvents[event] || event\n}\n\nconst EventHandler = {\n  on(element, event, handler, delegationFunction) {\n    addHandler(element, event, handler, delegationFunction, false)\n  },\n\n  one(element, event, handler, delegationFunction) {\n    addHandler(element, event, handler, delegationFunction, true)\n  },\n\n  off(element, originalTypeEvent, handler, delegationFunction) {\n    if (typeof originalTypeEvent !== 'string' || !element) {\n      return\n    }\n\n    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction)\n    const inNamespace = typeEvent !== originalTypeEvent\n    const events = getElementEvents(element)\n    const storeElementEvent = events[typeEvent] || {}\n    const isNamespace = originalTypeEvent.startsWith('.')\n\n    if (typeof callable !== 'undefined') {\n      // Simplest case: handler is passed, remove that listener ONLY.\n      if (!Object.keys(storeElementEvent).length) {\n        return\n      }\n\n      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null)\n      return\n    }\n\n    if (isNamespace) {\n      for (const elementEvent of Object.keys(events)) {\n        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1))\n      }\n    }\n\n    for (const keyHandlers of Object.keys(storeElementEvent)) {\n      const handlerKey = keyHandlers.replace(stripUidRegex, '')\n\n      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {\n        const event = storeElementEvent[keyHandlers]\n        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector)\n      }\n    }\n  },\n\n  trigger(element, event, args) {\n    if (typeof event !== 'string' || !element) {\n      return null\n    }\n\n    const $ = getjQuery()\n    const typeEvent = getTypeEvent(event)\n    const inNamespace = event !== typeEvent\n\n    let jQueryEvent = null\n    let bubbles = true\n    let nativeDispatch = true\n    let defaultPrevented = false\n\n    if (inNamespace && $) {\n      jQueryEvent = $.Event(event, args)\n\n      $(element).trigger(jQueryEvent)\n      bubbles = !jQueryEvent.isPropagationStopped()\n      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped()\n      defaultPrevented = jQueryEvent.isDefaultPrevented()\n    }\n\n    let evt = new Event(event, { bubbles, cancelable: true })\n    evt = hydrateObj(evt, args)\n\n    if (defaultPrevented) {\n      evt.preventDefault()\n    }\n\n    if (nativeDispatch) {\n      element.dispatchEvent(evt)\n    }\n\n    if (evt.defaultPrevented && jQueryEvent) {\n      jQueryEvent.preventDefault()\n    }\n\n    return evt\n  }\n}\n\nfunction hydrateObj(obj, meta) {\n  for (const [key, value] of Object.entries(meta || {})) {\n    try {\n      obj[key] = value\n    } catch {\n      Object.defineProperty(obj, key, {\n        configurable: true,\n        get() {\n          return value\n        }\n      })\n    }\n  }\n\n  return obj\n}\n\nexport default EventHandler\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): dom/data.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\n/**\n * Constants\n */\n\nconst elementMap = new Map()\n\nexport default {\n  set(element, key, instance) {\n    if (!elementMap.has(element)) {\n      elementMap.set(element, new Map())\n    }\n\n    const instanceMap = elementMap.get(element)\n\n    // make it clear we only want one instance per element\n    // can be removed later when multiple key/instances are fine to be used\n    if (!instanceMap.has(key) && instanceMap.size !== 0) {\n      // eslint-disable-next-line no-console\n      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`)\n      return\n    }\n\n    instanceMap.set(key, instance)\n  },\n\n  get(element, key) {\n    if (elementMap.has(element)) {\n      return elementMap.get(element).get(key) || null\n    }\n\n    return null\n  },\n\n  remove(element, key) {\n    if (!elementMap.has(element)) {\n      return\n    }\n\n    const instanceMap = elementMap.get(element)\n\n    instanceMap.delete(key)\n\n    // free up element references if there are no instances left for an element\n    if (instanceMap.size === 0) {\n      elementMap.delete(element)\n    }\n  }\n}\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): dom/manipulator.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nfunction normalizeData(value) {\n  if (value === 'true') {\n    return true\n  }\n\n  if (value === 'false') {\n    return false\n  }\n\n  if (value === Number(value).toString()) {\n    return Number(value)\n  }\n\n  if (value === '' || value === 'null') {\n    return null\n  }\n\n  if (typeof value !== 'string') {\n    return value\n  }\n\n  try {\n    return JSON.parse(decodeURIComponent(value))\n  } catch {\n    return value\n  }\n}\n\nfunction normalizeDataKey(key) {\n  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`)\n}\n\nconst Manipulator = {\n  setDataAttribute(element, key, value) {\n    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value)\n  },\n\n  removeDataAttribute(element, key) {\n    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`)\n  },\n\n  getDataAttributes(element) {\n    if (!element) {\n      return {}\n    }\n\n    const attributes = {}\n    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'))\n\n    for (const key of bsKeys) {\n      let pureKey = key.replace(/^bs/, '')\n      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length)\n      attributes[pureKey] = normalizeData(element.dataset[key])\n    }\n\n    return attributes\n  },\n\n  getDataAttribute(element, key) {\n    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))\n  }\n}\n\nexport default Manipulator\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/config.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { isElement, toType } from './index'\nimport Manipulator from '../dom/manipulator'\n\n/**\n * Class definition\n */\n\nclass Config {\n  // Getters\n  static get Default() {\n    return {}\n  }\n\n  static get DefaultType() {\n    return {}\n  }\n\n  static get NAME() {\n    throw new Error('You have to implement the static method \"NAME\", for each component!')\n  }\n\n  _getConfig(config) {\n    config = this._mergeConfigObj(config)\n    config = this._configAfterMerge(config)\n    this._typeCheckConfig(config)\n    return config\n  }\n\n  _configAfterMerge(config) {\n    return config\n  }\n\n  _mergeConfigObj(config, element) {\n    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {} // try to parse\n\n    return {\n      ...this.constructor.Default,\n      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),\n      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),\n      ...(typeof config === 'object' ? config : {})\n    }\n  }\n\n  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {\n    for (const property of Object.keys(configTypes)) {\n      const expectedTypes = configTypes[property]\n      const value = config[property]\n      const valueType = isElement(value) ? 'element' : toType(value)\n\n      if (!new RegExp(expectedTypes).test(valueType)) {\n        throw new TypeError(\n          `${this.constructor.NAME.toUpperCase()}: Option \"${property}\" provided type \"${valueType}\" but expected type \"${expectedTypes}\".`\n        )\n      }\n    }\n  }\n}\n\nexport default Config\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): base-component.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport Data from './dom/data'\nimport { executeAfterTransition, getElement } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport Config from './util/config'\n\n/**\n * Constants\n */\n\nconst VERSION = '5.2.2'\n\n/**\n * Class definition\n */\n\nclass BaseComponent extends Config {\n  constructor(element, config) {\n    super()\n\n    element = getElement(element)\n    if (!element) {\n      return\n    }\n\n    this._element = element\n    this._config = this._getConfig(config)\n\n    Data.set(this._element, this.constructor.DATA_KEY, this)\n  }\n\n  // Public\n  dispose() {\n    Data.remove(this._element, this.constructor.DATA_KEY)\n    EventHandler.off(this._element, this.constructor.EVENT_KEY)\n\n    for (const propertyName of Object.getOwnPropertyNames(this)) {\n      this[propertyName] = null\n    }\n  }\n\n  _queueCallback(callback, element, isAnimated = true) {\n    executeAfterTransition(callback, element, isAnimated)\n  }\n\n  _getConfig(config) {\n    config = this._mergeConfigObj(config, this._element)\n    config = this._configAfterMerge(config)\n    this._typeCheckConfig(config)\n    return config\n  }\n\n  // Static\n  static getInstance(element) {\n    return Data.get(getElement(element), this.DATA_KEY)\n  }\n\n  static getOrCreateInstance(element, config = {}) {\n    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null)\n  }\n\n  static get VERSION() {\n    return VERSION\n  }\n\n  static get DATA_KEY() {\n    return `bs.${this.NAME}`\n  }\n\n  static get EVENT_KEY() {\n    return `.${this.DATA_KEY}`\n  }\n\n  static eventName(name) {\n    return `${name}${this.EVENT_KEY}`\n  }\n}\n\nexport default BaseComponent\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/component-functions.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport EventHandler from '../dom/event-handler'\nimport { getElementFromSelector, isDisabled } from './index'\n\nconst enableDismissTrigger = (component, method = 'hide') => {\n  const clickEvent = `click.dismiss${component.EVENT_KEY}`\n  const name = component.NAME\n\n  EventHandler.on(document, clickEvent, `[data-bs-dismiss=\"${name}\"]`, function (event) {\n    if (['A', 'AREA'].includes(this.tagName)) {\n      event.preventDefault()\n    }\n\n    if (isDisabled(this)) {\n      return\n    }\n\n    const target = getElementFromSelector(this) || this.closest(`.${name}`)\n    const instance = component.getOrCreateInstance(target)\n\n    // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method\n    instance[method]()\n  })\n}\n\nexport {\n  enableDismissTrigger\n}\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): alert.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport BaseComponent from './base-component'\nimport { enableDismissTrigger } from './util/component-functions'\n\n/**\n * Constants\n */\n\nconst NAME = 'alert'\nconst DATA_KEY = 'bs.alert'\nconst EVENT_KEY = `.${DATA_KEY}`\n\nconst EVENT_CLOSE = `close${EVENT_KEY}`\nconst EVENT_CLOSED = `closed${EVENT_KEY}`\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_SHOW = 'show'\n\n/**\n * Class definition\n */\n\nclass Alert extends BaseComponent {\n  // Getters\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  close() {\n    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE)\n\n    if (closeEvent.defaultPrevented) {\n      return\n    }\n\n    this._element.classList.remove(CLASS_NAME_SHOW)\n\n    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE)\n    this._queueCallback(() => this._destroyElement(), this._element, isAnimated)\n  }\n\n  // Private\n  _destroyElement() {\n    this._element.remove()\n    EventHandler.trigger(this._element, EVENT_CLOSED)\n    this.dispose()\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Alert.getOrCreateInstance(this)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config](this)\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nenableDismissTrigger(Alert, 'close')\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Alert)\n\nexport default Alert\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): button.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'button'\nconst DATA_KEY = 'bs.button'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\n\nconst CLASS_NAME_ACTIVE = 'active'\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"button\"]'\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\n\n/**\n * Class definition\n */\n\nclass Button extends BaseComponent {\n  // Getters\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  toggle() {\n    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method\n    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE))\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Button.getOrCreateInstance(this)\n\n      if (config === 'toggle') {\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, event => {\n  event.preventDefault()\n\n  const button = event.target.closest(SELECTOR_DATA_TOGGLE)\n  const data = Button.getOrCreateInstance(button)\n\n  data.toggle()\n})\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Button)\n\nexport default Button\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): dom/selector-engine.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { isDisabled, isVisible } from '../util/index'\n\n/**\n * Constants\n */\n\nconst SelectorEngine = {\n  find(selector, element = document.documentElement) {\n    return [].concat(...Element.prototype.querySelectorAll.call(element, selector))\n  },\n\n  findOne(selector, element = document.documentElement) {\n    return Element.prototype.querySelector.call(element, selector)\n  },\n\n  children(element, selector) {\n    return [].concat(...element.children).filter(child => child.matches(selector))\n  },\n\n  parents(element, selector) {\n    const parents = []\n    let ancestor = element.parentNode.closest(selector)\n\n    while (ancestor) {\n      parents.push(ancestor)\n      ancestor = ancestor.parentNode.closest(selector)\n    }\n\n    return parents\n  },\n\n  prev(element, selector) {\n    let previous = element.previousElementSibling\n\n    while (previous) {\n      if (previous.matches(selector)) {\n        return [previous]\n      }\n\n      previous = previous.previousElementSibling\n    }\n\n    return []\n  },\n  // TODO: this is now unused; remove later along with prev()\n  next(element, selector) {\n    let next = element.nextElementSibling\n\n    while (next) {\n      if (next.matches(selector)) {\n        return [next]\n      }\n\n      next = next.nextElementSibling\n    }\n\n    return []\n  },\n\n  focusableChildren(element) {\n    const focusables = [\n      'a',\n      'button',\n      'input',\n      'textarea',\n      'select',\n      'details',\n      '[tabindex]',\n      '[contenteditable=\"true\"]'\n    ].map(selector => `${selector}:not([tabindex^=\"-\"])`).join(',')\n\n    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el))\n  }\n}\n\nexport default SelectorEngine\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/swipe.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport Config from './config'\nimport EventHandler from '../dom/event-handler'\nimport { execute } from './index'\n\n/**\n * Constants\n */\n\nconst NAME = 'swipe'\nconst EVENT_KEY = '.bs.swipe'\nconst EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`\nconst EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`\nconst EVENT_TOUCHEND = `touchend${EVENT_KEY}`\nconst EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`\nconst EVENT_POINTERUP = `pointerup${EVENT_KEY}`\nconst POINTER_TYPE_TOUCH = 'touch'\nconst POINTER_TYPE_PEN = 'pen'\nconst CLASS_NAME_POINTER_EVENT = 'pointer-event'\nconst SWIPE_THRESHOLD = 40\n\nconst Default = {\n  endCallback: null,\n  leftCallback: null,\n  rightCallback: null\n}\n\nconst DefaultType = {\n  endCallback: '(function|null)',\n  leftCallback: '(function|null)',\n  rightCallback: '(function|null)'\n}\n\n/**\n * Class definition\n */\n\nclass Swipe extends Config {\n  constructor(element, config) {\n    super()\n    this._element = element\n\n    if (!element || !Swipe.isSupported()) {\n      return\n    }\n\n    this._config = this._getConfig(config)\n    this._deltaX = 0\n    this._supportPointerEvents = Boolean(window.PointerEvent)\n    this._initEvents()\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  dispose() {\n    EventHandler.off(this._element, EVENT_KEY)\n  }\n\n  // Private\n  _start(event) {\n    if (!this._supportPointerEvents) {\n      this._deltaX = event.touches[0].clientX\n\n      return\n    }\n\n    if (this._eventIsPointerPenTouch(event)) {\n      this._deltaX = event.clientX\n    }\n  }\n\n  _end(event) {\n    if (this._eventIsPointerPenTouch(event)) {\n      this._deltaX = event.clientX - this._deltaX\n    }\n\n    this._handleSwipe()\n    execute(this._config.endCallback)\n  }\n\n  _move(event) {\n    this._deltaX = event.touches && event.touches.length > 1 ?\n      0 :\n      event.touches[0].clientX - this._deltaX\n  }\n\n  _handleSwipe() {\n    const absDeltaX = Math.abs(this._deltaX)\n\n    if (absDeltaX <= SWIPE_THRESHOLD) {\n      return\n    }\n\n    const direction = absDeltaX / this._deltaX\n\n    this._deltaX = 0\n\n    if (!direction) {\n      return\n    }\n\n    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback)\n  }\n\n  _initEvents() {\n    if (this._supportPointerEvents) {\n      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event))\n      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event))\n\n      this._element.classList.add(CLASS_NAME_POINTER_EVENT)\n    } else {\n      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event))\n      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event))\n      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event))\n    }\n  }\n\n  _eventIsPointerPenTouch(event) {\n    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH)\n  }\n\n  // Static\n  static isSupported() {\n    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0\n  }\n}\n\nexport default Swipe\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): carousel.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport {\n  defineJQueryPlugin,\n  getElementFromSelector,\n  getNextActiveElement,\n  isRTL,\n  isVisible,\n  reflow,\n  triggerTransitionEnd\n} from './util/index'\nimport EventHandler from './dom/event-handler'\nimport Manipulator from './dom/manipulator'\nimport SelectorEngine from './dom/selector-engine'\nimport Swipe from './util/swipe'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'carousel'\nconst DATA_KEY = 'bs.carousel'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\n\nconst ARROW_LEFT_KEY = 'ArrowLeft'\nconst ARROW_RIGHT_KEY = 'ArrowRight'\nconst TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch\n\nconst ORDER_NEXT = 'next'\nconst ORDER_PREV = 'prev'\nconst DIRECTION_LEFT = 'left'\nconst DIRECTION_RIGHT = 'right'\n\nconst EVENT_SLIDE = `slide${EVENT_KEY}`\nconst EVENT_SLID = `slid${EVENT_KEY}`\nconst EVENT_KEYDOWN = `keydown${EVENT_KEY}`\nconst EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`\nconst EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`\nconst EVENT_DRAG_START = `dragstart${EVENT_KEY}`\nconst EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\n\nconst CLASS_NAME_CAROUSEL = 'carousel'\nconst CLASS_NAME_ACTIVE = 'active'\nconst CLASS_NAME_SLIDE = 'slide'\nconst CLASS_NAME_END = 'carousel-item-end'\nconst CLASS_NAME_START = 'carousel-item-start'\nconst CLASS_NAME_NEXT = 'carousel-item-next'\nconst CLASS_NAME_PREV = 'carousel-item-prev'\n\nconst SELECTOR_ACTIVE = '.active'\nconst SELECTOR_ITEM = '.carousel-item'\nconst SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM\nconst SELECTOR_ITEM_IMG = '.carousel-item img'\nconst SELECTOR_INDICATORS = '.carousel-indicators'\nconst SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]'\nconst SELECTOR_DATA_RIDE = '[data-bs-ride=\"carousel\"]'\n\nconst KEY_TO_DIRECTION = {\n  [ARROW_LEFT_KEY]: DIRECTION_RIGHT,\n  [ARROW_RIGHT_KEY]: DIRECTION_LEFT\n}\n\nconst Default = {\n  interval: 5000,\n  keyboard: true,\n  pause: 'hover',\n  ride: false,\n  touch: true,\n  wrap: true\n}\n\nconst DefaultType = {\n  interval: '(number|boolean)', // TODO:v6 remove boolean support\n  keyboard: 'boolean',\n  pause: '(string|boolean)',\n  ride: '(boolean|string)',\n  touch: 'boolean',\n  wrap: 'boolean'\n}\n\n/**\n * Class definition\n */\n\nclass Carousel extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._interval = null\n    this._activeElement = null\n    this._isSliding = false\n    this.touchTimeout = null\n    this._swipeHelper = null\n\n    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element)\n    this._addEventListeners()\n\n    if (this._config.ride === CLASS_NAME_CAROUSEL) {\n      this.cycle()\n    }\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  next() {\n    this._slide(ORDER_NEXT)\n  }\n\n  nextWhenVisible() {\n    // FIXME TODO use `document.visibilityState`\n    // Don't call next when the page isn't visible\n    // or the carousel or its parent isn't visible\n    if (!document.hidden && isVisible(this._element)) {\n      this.next()\n    }\n  }\n\n  prev() {\n    this._slide(ORDER_PREV)\n  }\n\n  pause() {\n    if (this._isSliding) {\n      triggerTransitionEnd(this._element)\n    }\n\n    this._clearInterval()\n  }\n\n  cycle() {\n    this._clearInterval()\n    this._updateInterval()\n\n    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)\n  }\n\n  _maybeEnableCycle() {\n    if (!this._config.ride) {\n      return\n    }\n\n    if (this._isSliding) {\n      EventHandler.one(this._element, EVENT_SLID, () => this.cycle())\n      return\n    }\n\n    this.cycle()\n  }\n\n  to(index) {\n    const items = this._getItems()\n    if (index > items.length - 1 || index < 0) {\n      return\n    }\n\n    if (this._isSliding) {\n      EventHandler.one(this._element, EVENT_SLID, () => this.to(index))\n      return\n    }\n\n    const activeIndex = this._getItemIndex(this._getActive())\n    if (activeIndex === index) {\n      return\n    }\n\n    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV\n\n    this._slide(order, items[index])\n  }\n\n  dispose() {\n    if (this._swipeHelper) {\n      this._swipeHelper.dispose()\n    }\n\n    super.dispose()\n  }\n\n  // Private\n  _configAfterMerge(config) {\n    config.defaultInterval = config.interval\n    return config\n  }\n\n  _addEventListeners() {\n    if (this._config.keyboard) {\n      EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event))\n    }\n\n    if (this._config.pause === 'hover') {\n      EventHandler.on(this._element, EVENT_MOUSEENTER, () => this.pause())\n      EventHandler.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle())\n    }\n\n    if (this._config.touch && Swipe.isSupported()) {\n      this._addTouchEventListeners()\n    }\n  }\n\n  _addTouchEventListeners() {\n    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {\n      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault())\n    }\n\n    const endCallBack = () => {\n      if (this._config.pause !== 'hover') {\n        return\n      }\n\n      // If it's a touch-enabled device, mouseenter/leave are fired as\n      // part of the mouse compatibility events on first tap - the carousel\n      // would stop cycling until user tapped out of it;\n      // here, we listen for touchend, explicitly pause the carousel\n      // (as if it's the second time we tap on it, mouseenter compat event\n      // is NOT fired) and after a timeout (to allow for mouse compatibility\n      // events to fire) we explicitly restart cycling\n\n      this.pause()\n      if (this.touchTimeout) {\n        clearTimeout(this.touchTimeout)\n      }\n\n      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval)\n    }\n\n    const swipeConfig = {\n      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),\n      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),\n      endCallback: endCallBack\n    }\n\n    this._swipeHelper = new Swipe(this._element, swipeConfig)\n  }\n\n  _keydown(event) {\n    if (/input|textarea/i.test(event.target.tagName)) {\n      return\n    }\n\n    const direction = KEY_TO_DIRECTION[event.key]\n    if (direction) {\n      event.preventDefault()\n      this._slide(this._directionToOrder(direction))\n    }\n  }\n\n  _getItemIndex(element) {\n    return this._getItems().indexOf(element)\n  }\n\n  _setActiveIndicatorElement(index) {\n    if (!this._indicatorsElement) {\n      return\n    }\n\n    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement)\n\n    activeIndicator.classList.remove(CLASS_NAME_ACTIVE)\n    activeIndicator.removeAttribute('aria-current')\n\n    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to=\"${index}\"]`, this._indicatorsElement)\n\n    if (newActiveIndicator) {\n      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE)\n      newActiveIndicator.setAttribute('aria-current', 'true')\n    }\n  }\n\n  _updateInterval() {\n    const element = this._activeElement || this._getActive()\n\n    if (!element) {\n      return\n    }\n\n    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10)\n\n    this._config.interval = elementInterval || this._config.defaultInterval\n  }\n\n  _slide(order, element = null) {\n    if (this._isSliding) {\n      return\n    }\n\n    const activeElement = this._getActive()\n    const isNext = order === ORDER_NEXT\n    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap)\n\n    if (nextElement === activeElement) {\n      return\n    }\n\n    const nextElementIndex = this._getItemIndex(nextElement)\n\n    const triggerEvent = eventName => {\n      return EventHandler.trigger(this._element, eventName, {\n        relatedTarget: nextElement,\n        direction: this._orderToDirection(order),\n        from: this._getItemIndex(activeElement),\n        to: nextElementIndex\n      })\n    }\n\n    const slideEvent = triggerEvent(EVENT_SLIDE)\n\n    if (slideEvent.defaultPrevented) {\n      return\n    }\n\n    if (!activeElement || !nextElement) {\n      // Some weirdness is happening, so we bail\n      // todo: change tests that use empty divs to avoid this check\n      return\n    }\n\n    const isCycling = Boolean(this._interval)\n    this.pause()\n\n    this._isSliding = true\n\n    this._setActiveIndicatorElement(nextElementIndex)\n    this._activeElement = nextElement\n\n    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END\n    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV\n\n    nextElement.classList.add(orderClassName)\n\n    reflow(nextElement)\n\n    activeElement.classList.add(directionalClassName)\n    nextElement.classList.add(directionalClassName)\n\n    const completeCallBack = () => {\n      nextElement.classList.remove(directionalClassName, orderClassName)\n      nextElement.classList.add(CLASS_NAME_ACTIVE)\n\n      activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName)\n\n      this._isSliding = false\n\n      triggerEvent(EVENT_SLID)\n    }\n\n    this._queueCallback(completeCallBack, activeElement, this._isAnimated())\n\n    if (isCycling) {\n      this.cycle()\n    }\n  }\n\n  _isAnimated() {\n    return this._element.classList.contains(CLASS_NAME_SLIDE)\n  }\n\n  _getActive() {\n    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element)\n  }\n\n  _getItems() {\n    return SelectorEngine.find(SELECTOR_ITEM, this._element)\n  }\n\n  _clearInterval() {\n    if (this._interval) {\n      clearInterval(this._interval)\n      this._interval = null\n    }\n  }\n\n  _directionToOrder(direction) {\n    if (isRTL()) {\n      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT\n    }\n\n    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV\n  }\n\n  _orderToDirection(order) {\n    if (isRTL()) {\n      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT\n    }\n\n    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Carousel.getOrCreateInstance(this, config)\n\n      if (typeof config === 'number') {\n        data.to(config)\n        return\n      }\n\n      if (typeof config === 'string') {\n        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, function (event) {\n  const target = getElementFromSelector(this)\n\n  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {\n    return\n  }\n\n  event.preventDefault()\n\n  const carousel = Carousel.getOrCreateInstance(target)\n  const slideIndex = this.getAttribute('data-bs-slide-to')\n\n  if (slideIndex) {\n    carousel.to(slideIndex)\n    carousel._maybeEnableCycle()\n    return\n  }\n\n  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {\n    carousel.next()\n    carousel._maybeEnableCycle()\n    return\n  }\n\n  carousel.prev()\n  carousel._maybeEnableCycle()\n})\n\nEventHandler.on(window, EVENT_LOAD_DATA_API, () => {\n  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE)\n\n  for (const carousel of carousels) {\n    Carousel.getOrCreateInstance(carousel)\n  }\n})\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Carousel)\n\nexport default Carousel\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): collapse.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport {\n  defineJQueryPlugin,\n  getElement,\n  getElementFromSelector,\n  getSelectorFromElement,\n  reflow\n} from './util/index'\nimport EventHandler from './dom/event-handler'\nimport SelectorEngine from './dom/selector-engine'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'collapse'\nconst DATA_KEY = 'bs.collapse'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\n\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\n\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_COLLAPSE = 'collapse'\nconst CLASS_NAME_COLLAPSING = 'collapsing'\nconst CLASS_NAME_COLLAPSED = 'collapsed'\nconst CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`\nconst CLASS_NAME_HORIZONTAL = 'collapse-horizontal'\n\nconst WIDTH = 'width'\nconst HEIGHT = 'height'\n\nconst SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing'\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"collapse\"]'\n\nconst Default = {\n  parent: null,\n  toggle: true\n}\n\nconst DefaultType = {\n  parent: '(null|element)',\n  toggle: 'boolean'\n}\n\n/**\n * Class definition\n */\n\nclass Collapse extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._isTransitioning = false\n    this._triggerArray = []\n\n    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE)\n\n    for (const elem of toggleList) {\n      const selector = getSelectorFromElement(elem)\n      const filterElement = SelectorEngine.find(selector)\n        .filter(foundElement => foundElement === this._element)\n\n      if (selector !== null && filterElement.length) {\n        this._triggerArray.push(elem)\n      }\n    }\n\n    this._initializeChildren()\n\n    if (!this._config.parent) {\n      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown())\n    }\n\n    if (this._config.toggle) {\n      this.toggle()\n    }\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  toggle() {\n    if (this._isShown()) {\n      this.hide()\n    } else {\n      this.show()\n    }\n  }\n\n  show() {\n    if (this._isTransitioning || this._isShown()) {\n      return\n    }\n\n    let activeChildren = []\n\n    // find active children\n    if (this._config.parent) {\n      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES)\n        .filter(element => element !== this._element)\n        .map(element => Collapse.getOrCreateInstance(element, { toggle: false }))\n    }\n\n    if (activeChildren.length && activeChildren[0]._isTransitioning) {\n      return\n    }\n\n    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW)\n    if (startEvent.defaultPrevented) {\n      return\n    }\n\n    for (const activeInstance of activeChildren) {\n      activeInstance.hide()\n    }\n\n    const dimension = this._getDimension()\n\n    this._element.classList.remove(CLASS_NAME_COLLAPSE)\n    this._element.classList.add(CLASS_NAME_COLLAPSING)\n\n    this._element.style[dimension] = 0\n\n    this._addAriaAndCollapsedClass(this._triggerArray, true)\n    this._isTransitioning = true\n\n    const complete = () => {\n      this._isTransitioning = false\n\n      this._element.classList.remove(CLASS_NAME_COLLAPSING)\n      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)\n\n      this._element.style[dimension] = ''\n\n      EventHandler.trigger(this._element, EVENT_SHOWN)\n    }\n\n    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1)\n    const scrollSize = `scroll${capitalizedDimension}`\n\n    this._queueCallback(complete, this._element, true)\n    this._element.style[dimension] = `${this._element[scrollSize]}px`\n  }\n\n  hide() {\n    if (this._isTransitioning || !this._isShown()) {\n      return\n    }\n\n    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE)\n    if (startEvent.defaultPrevented) {\n      return\n    }\n\n    const dimension = this._getDimension()\n\n    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`\n\n    reflow(this._element)\n\n    this._element.classList.add(CLASS_NAME_COLLAPSING)\n    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW)\n\n    for (const trigger of this._triggerArray) {\n      const element = getElementFromSelector(trigger)\n\n      if (element && !this._isShown(element)) {\n        this._addAriaAndCollapsedClass([trigger], false)\n      }\n    }\n\n    this._isTransitioning = true\n\n    const complete = () => {\n      this._isTransitioning = false\n      this._element.classList.remove(CLASS_NAME_COLLAPSING)\n      this._element.classList.add(CLASS_NAME_COLLAPSE)\n      EventHandler.trigger(this._element, EVENT_HIDDEN)\n    }\n\n    this._element.style[dimension] = ''\n\n    this._queueCallback(complete, this._element, true)\n  }\n\n  _isShown(element = this._element) {\n    return element.classList.contains(CLASS_NAME_SHOW)\n  }\n\n  // Private\n  _configAfterMerge(config) {\n    config.toggle = Boolean(config.toggle) // Coerce string values\n    config.parent = getElement(config.parent)\n    return config\n  }\n\n  _getDimension() {\n    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT\n  }\n\n  _initializeChildren() {\n    if (!this._config.parent) {\n      return\n    }\n\n    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE)\n\n    for (const element of children) {\n      const selected = getElementFromSelector(element)\n\n      if (selected) {\n        this._addAriaAndCollapsedClass([element], this._isShown(selected))\n      }\n    }\n  }\n\n  _getFirstLevelChildren(selector) {\n    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent)\n    // remove children if greater depth\n    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element))\n  }\n\n  _addAriaAndCollapsedClass(triggerArray, isOpen) {\n    if (!triggerArray.length) {\n      return\n    }\n\n    for (const element of triggerArray) {\n      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen)\n      element.setAttribute('aria-expanded', isOpen)\n    }\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    const _config = {}\n    if (typeof config === 'string' && /show|hide/.test(config)) {\n      _config.toggle = false\n    }\n\n    return this.each(function () {\n      const data = Collapse.getOrCreateInstance(this, _config)\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n\n        data[config]()\n      }\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element\n  if (event.target.tagName === 'A' || (event.delegateTarget && event.delegateTarget.tagName === 'A')) {\n    event.preventDefault()\n  }\n\n  const selector = getSelectorFromElement(this)\n  const selectorElements = SelectorEngine.find(selector)\n\n  for (const element of selectorElements) {\n    Collapse.getOrCreateInstance(element, { toggle: false }).toggle()\n  }\n})\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Collapse)\n\nexport default Collapse\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): dropdown.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport * as Popper from '@popperjs/core'\nimport {\n  defineJQueryPlugin,\n  getElement,\n  getNextActiveElement,\n  isDisabled,\n  isElement,\n  isRTL,\n  isVisible,\n  noop\n} from './util/index'\nimport EventHandler from './dom/event-handler'\nimport Manipulator from './dom/manipulator'\nimport SelectorEngine from './dom/selector-engine'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'dropdown'\nconst DATA_KEY = 'bs.dropdown'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\n\nconst ESCAPE_KEY = 'Escape'\nconst TAB_KEY = 'Tab'\nconst ARROW_UP_KEY = 'ArrowUp'\nconst ARROW_DOWN_KEY = 'ArrowDown'\nconst RIGHT_MOUSE_BUTTON = 2 // MouseEvent.button value for the secondary button, usually the right button\n\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\nconst EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`\nconst EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`\n\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_DROPUP = 'dropup'\nconst CLASS_NAME_DROPEND = 'dropend'\nconst CLASS_NAME_DROPSTART = 'dropstart'\nconst CLASS_NAME_DROPUP_CENTER = 'dropup-center'\nconst CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center'\n\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)'\nconst SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`\nconst SELECTOR_MENU = '.dropdown-menu'\nconst SELECTOR_NAVBAR = '.navbar'\nconst SELECTOR_NAVBAR_NAV = '.navbar-nav'\nconst SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'\n\nconst PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start'\nconst PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end'\nconst PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start'\nconst PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end'\nconst PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start'\nconst PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start'\nconst PLACEMENT_TOPCENTER = 'top'\nconst PLACEMENT_BOTTOMCENTER = 'bottom'\n\nconst Default = {\n  autoClose: true,\n  boundary: 'clippingParents',\n  display: 'dynamic',\n  offset: [0, 2],\n  popperConfig: null,\n  reference: 'toggle'\n}\n\nconst DefaultType = {\n  autoClose: '(boolean|string)',\n  boundary: '(string|element)',\n  display: 'string',\n  offset: '(array|string|function)',\n  popperConfig: '(null|object|function)',\n  reference: '(string|element|object)'\n}\n\n/**\n * Class definition\n */\n\nclass Dropdown extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._popper = null\n    this._parent = this._element.parentNode // dropdown wrapper\n    // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/\n    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] ||\n      SelectorEngine.prev(this._element, SELECTOR_MENU)[0] ||\n      SelectorEngine.findOne(SELECTOR_MENU, this._parent)\n    this._inNavbar = this._detectNavbar()\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  toggle() {\n    return this._isShown() ? this.hide() : this.show()\n  }\n\n  show() {\n    if (isDisabled(this._element) || this._isShown()) {\n      return\n    }\n\n    const relatedTarget = {\n      relatedTarget: this._element\n    }\n\n    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, relatedTarget)\n\n    if (showEvent.defaultPrevented) {\n      return\n    }\n\n    this._createPopper()\n\n    // If this is a touch-enabled device we add extra\n    // empty mouseover listeners to the body's immediate children;\n    // only needed because of broken event delegation on iOS\n    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {\n      for (const element of [].concat(...document.body.children)) {\n        EventHandler.on(element, 'mouseover', noop)\n      }\n    }\n\n    this._element.focus()\n    this._element.setAttribute('aria-expanded', true)\n\n    this._menu.classList.add(CLASS_NAME_SHOW)\n    this._element.classList.add(CLASS_NAME_SHOW)\n    EventHandler.trigger(this._element, EVENT_SHOWN, relatedTarget)\n  }\n\n  hide() {\n    if (isDisabled(this._element) || !this._isShown()) {\n      return\n    }\n\n    const relatedTarget = {\n      relatedTarget: this._element\n    }\n\n    this._completeHide(relatedTarget)\n  }\n\n  dispose() {\n    if (this._popper) {\n      this._popper.destroy()\n    }\n\n    super.dispose()\n  }\n\n  update() {\n    this._inNavbar = this._detectNavbar()\n    if (this._popper) {\n      this._popper.update()\n    }\n  }\n\n  // Private\n  _completeHide(relatedTarget) {\n    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE, relatedTarget)\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    // If this is a touch-enabled device we remove the extra\n    // empty mouseover listeners we added for iOS support\n    if ('ontouchstart' in document.documentElement) {\n      for (const element of [].concat(...document.body.children)) {\n        EventHandler.off(element, 'mouseover', noop)\n      }\n    }\n\n    if (this._popper) {\n      this._popper.destroy()\n    }\n\n    this._menu.classList.remove(CLASS_NAME_SHOW)\n    this._element.classList.remove(CLASS_NAME_SHOW)\n    this._element.setAttribute('aria-expanded', 'false')\n    Manipulator.removeDataAttribute(this._menu, 'popper')\n    EventHandler.trigger(this._element, EVENT_HIDDEN, relatedTarget)\n  }\n\n  _getConfig(config) {\n    config = super._getConfig(config)\n\n    if (typeof config.reference === 'object' && !isElement(config.reference) &&\n      typeof config.reference.getBoundingClientRect !== 'function'\n    ) {\n      // Popper virtual elements require a getBoundingClientRect method\n      throw new TypeError(`${NAME.toUpperCase()}: Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.`)\n    }\n\n    return config\n  }\n\n  _createPopper() {\n    if (typeof Popper === 'undefined') {\n      throw new TypeError('Bootstrap\\'s dropdowns require Popper (https://popper.js.org)')\n    }\n\n    let referenceElement = this._element\n\n    if (this._config.reference === 'parent') {\n      referenceElement = this._parent\n    } else if (isElement(this._config.reference)) {\n      referenceElement = getElement(this._config.reference)\n    } else if (typeof this._config.reference === 'object') {\n      referenceElement = this._config.reference\n    }\n\n    const popperConfig = this._getPopperConfig()\n    this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig)\n  }\n\n  _isShown() {\n    return this._menu.classList.contains(CLASS_NAME_SHOW)\n  }\n\n  _getPlacement() {\n    const parentDropdown = this._parent\n\n    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {\n      return PLACEMENT_RIGHT\n    }\n\n    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {\n      return PLACEMENT_LEFT\n    }\n\n    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {\n      return PLACEMENT_TOPCENTER\n    }\n\n    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {\n      return PLACEMENT_BOTTOMCENTER\n    }\n\n    // We need to trim the value because custom properties can also include spaces\n    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end'\n\n    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {\n      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP\n    }\n\n    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM\n  }\n\n  _detectNavbar() {\n    return this._element.closest(SELECTOR_NAVBAR) !== null\n  }\n\n  _getOffset() {\n    const { offset } = this._config\n\n    if (typeof offset === 'string') {\n      return offset.split(',').map(value => Number.parseInt(value, 10))\n    }\n\n    if (typeof offset === 'function') {\n      return popperData => offset(popperData, this._element)\n    }\n\n    return offset\n  }\n\n  _getPopperConfig() {\n    const defaultBsPopperConfig = {\n      placement: this._getPlacement(),\n      modifiers: [{\n        name: 'preventOverflow',\n        options: {\n          boundary: this._config.boundary\n        }\n      },\n      {\n        name: 'offset',\n        options: {\n          offset: this._getOffset()\n        }\n      }]\n    }\n\n    // Disable Popper if we have a static display or Dropdown is in Navbar\n    if (this._inNavbar || this._config.display === 'static') {\n      Manipulator.setDataAttribute(this._menu, 'popper', 'static') // todo:v6 remove\n      defaultBsPopperConfig.modifiers = [{\n        name: 'applyStyles',\n        enabled: false\n      }]\n    }\n\n    return {\n      ...defaultBsPopperConfig,\n      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)\n    }\n  }\n\n  _selectMenuItem({ key, target }) {\n    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element))\n\n    if (!items.length) {\n      return\n    }\n\n    // if target isn't included in items (e.g. when expanding the dropdown)\n    // allow cycling to get the last item in case key equals ARROW_UP_KEY\n    getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus()\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Dropdown.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (typeof data[config] === 'undefined') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config]()\n    })\n  }\n\n  static clearMenus(event) {\n    if (event.button === RIGHT_MOUSE_BUTTON || (event.type === 'keyup' && event.key !== TAB_KEY)) {\n      return\n    }\n\n    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN)\n\n    for (const toggle of openToggles) {\n      const context = Dropdown.getInstance(toggle)\n      if (!context || context._config.autoClose === false) {\n        continue\n      }\n\n      const composedPath = event.composedPath()\n      const isMenuTarget = composedPath.includes(context._menu)\n      if (\n        composedPath.includes(context._element) ||\n        (context._config.autoClose === 'inside' && !isMenuTarget) ||\n        (context._config.autoClose === 'outside' && isMenuTarget)\n      ) {\n        continue\n      }\n\n      // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu\n      if (context._menu.contains(event.target) && ((event.type === 'keyup' && event.key === TAB_KEY) || /input|select|option|textarea|form/i.test(event.target.tagName))) {\n        continue\n      }\n\n      const relatedTarget = { relatedTarget: context._element }\n\n      if (event.type === 'click') {\n        relatedTarget.clickEvent = event\n      }\n\n      context._completeHide(relatedTarget)\n    }\n  }\n\n  static dataApiKeydownHandler(event) {\n    // If not an UP | DOWN | ESCAPE key => not a dropdown command\n    // If input/textarea && if key is other than ESCAPE => not a dropdown command\n\n    const isInput = /input|textarea/i.test(event.target.tagName)\n    const isEscapeEvent = event.key === ESCAPE_KEY\n    const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)\n\n    if (!isUpOrDownEvent && !isEscapeEvent) {\n      return\n    }\n\n    if (isInput && !isEscapeEvent) {\n      return\n    }\n\n    event.preventDefault()\n\n    // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/\n    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ?\n      this :\n      (SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE)[0] ||\n        SelectorEngine.next(this, SELECTOR_DATA_TOGGLE)[0] ||\n        SelectorEngine.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode))\n\n    const instance = Dropdown.getOrCreateInstance(getToggleButton)\n\n    if (isUpOrDownEvent) {\n      event.stopPropagation()\n      instance.show()\n      instance._selectMenuItem(event)\n      return\n    }\n\n    if (instance._isShown()) { // else is escape and we check if it is shown\n      event.stopPropagation()\n      instance.hide()\n      getToggleButton.focus()\n    }\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler)\nEventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler)\nEventHandler.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus)\nEventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus)\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n  event.preventDefault()\n  Dropdown.getOrCreateInstance(this).toggle()\n})\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Dropdown)\n\nexport default Dropdown\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/scrollBar.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport SelectorEngine from '../dom/selector-engine'\nimport Manipulator from '../dom/manipulator'\nimport { isElement } from './index'\n\n/**\n * Constants\n */\n\nconst SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top'\nconst SELECTOR_STICKY_CONTENT = '.sticky-top'\nconst PROPERTY_PADDING = 'padding-right'\nconst PROPERTY_MARGIN = 'margin-right'\n\n/**\n * Class definition\n */\n\nclass ScrollBarHelper {\n  constructor() {\n    this._element = document.body\n  }\n\n  // Public\n  getWidth() {\n    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes\n    const documentWidth = document.documentElement.clientWidth\n    return Math.abs(window.innerWidth - documentWidth)\n  }\n\n  hide() {\n    const width = this.getWidth()\n    this._disableOverFlow()\n    // give padding to element to balance the hidden scrollbar width\n    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width)\n    // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth\n    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width)\n    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width)\n  }\n\n  reset() {\n    this._resetElementAttributes(this._element, 'overflow')\n    this._resetElementAttributes(this._element, PROPERTY_PADDING)\n    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING)\n    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN)\n  }\n\n  isOverflowing() {\n    return this.getWidth() > 0\n  }\n\n  // Private\n  _disableOverFlow() {\n    this._saveInitialAttribute(this._element, 'overflow')\n    this._element.style.overflow = 'hidden'\n  }\n\n  _setElementAttributes(selector, styleProperty, callback) {\n    const scrollbarWidth = this.getWidth()\n    const manipulationCallBack = element => {\n      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {\n        return\n      }\n\n      this._saveInitialAttribute(element, styleProperty)\n      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty)\n      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`)\n    }\n\n    this._applyManipulationCallback(selector, manipulationCallBack)\n  }\n\n  _saveInitialAttribute(element, styleProperty) {\n    const actualValue = element.style.getPropertyValue(styleProperty)\n    if (actualValue) {\n      Manipulator.setDataAttribute(element, styleProperty, actualValue)\n    }\n  }\n\n  _resetElementAttributes(selector, styleProperty) {\n    const manipulationCallBack = element => {\n      const value = Manipulator.getDataAttribute(element, styleProperty)\n      // We only want to remove the property if the value is `null`; the value can also be zero\n      if (value === null) {\n        element.style.removeProperty(styleProperty)\n        return\n      }\n\n      Manipulator.removeDataAttribute(element, styleProperty)\n      element.style.setProperty(styleProperty, value)\n    }\n\n    this._applyManipulationCallback(selector, manipulationCallBack)\n  }\n\n  _applyManipulationCallback(selector, callBack) {\n    if (isElement(selector)) {\n      callBack(selector)\n      return\n    }\n\n    for (const sel of SelectorEngine.find(selector, this._element)) {\n      callBack(sel)\n    }\n  }\n}\n\nexport default ScrollBarHelper\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/backdrop.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport EventHandler from '../dom/event-handler'\nimport { execute, executeAfterTransition, getElement, reflow } from './index'\nimport Config from './config'\n\n/**\n * Constants\n */\n\nconst NAME = 'backdrop'\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_SHOW = 'show'\nconst EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`\n\nconst Default = {\n  className: 'modal-backdrop',\n  clickCallback: null,\n  isAnimated: false,\n  isVisible: true, // if false, we use the backdrop helper without adding any element to the dom\n  rootElement: 'body' // give the choice to place backdrop under different elements\n}\n\nconst DefaultType = {\n  className: 'string',\n  clickCallback: '(function|null)',\n  isAnimated: 'boolean',\n  isVisible: 'boolean',\n  rootElement: '(element|string)'\n}\n\n/**\n * Class definition\n */\n\nclass Backdrop extends Config {\n  constructor(config) {\n    super()\n    this._config = this._getConfig(config)\n    this._isAppended = false\n    this._element = null\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  show(callback) {\n    if (!this._config.isVisible) {\n      execute(callback)\n      return\n    }\n\n    this._append()\n\n    const element = this._getElement()\n    if (this._config.isAnimated) {\n      reflow(element)\n    }\n\n    element.classList.add(CLASS_NAME_SHOW)\n\n    this._emulateAnimation(() => {\n      execute(callback)\n    })\n  }\n\n  hide(callback) {\n    if (!this._config.isVisible) {\n      execute(callback)\n      return\n    }\n\n    this._getElement().classList.remove(CLASS_NAME_SHOW)\n\n    this._emulateAnimation(() => {\n      this.dispose()\n      execute(callback)\n    })\n  }\n\n  dispose() {\n    if (!this._isAppended) {\n      return\n    }\n\n    EventHandler.off(this._element, EVENT_MOUSEDOWN)\n\n    this._element.remove()\n    this._isAppended = false\n  }\n\n  // Private\n  _getElement() {\n    if (!this._element) {\n      const backdrop = document.createElement('div')\n      backdrop.className = this._config.className\n      if (this._config.isAnimated) {\n        backdrop.classList.add(CLASS_NAME_FADE)\n      }\n\n      this._element = backdrop\n    }\n\n    return this._element\n  }\n\n  _configAfterMerge(config) {\n    // use getElement() with the default \"body\" to get a fresh Element on each instantiation\n    config.rootElement = getElement(config.rootElement)\n    return config\n  }\n\n  _append() {\n    if (this._isAppended) {\n      return\n    }\n\n    const element = this._getElement()\n    this._config.rootElement.append(element)\n\n    EventHandler.on(element, EVENT_MOUSEDOWN, () => {\n      execute(this._config.clickCallback)\n    })\n\n    this._isAppended = true\n  }\n\n  _emulateAnimation(callback) {\n    executeAfterTransition(callback, this._getElement(), this._config.isAnimated)\n  }\n}\n\nexport default Backdrop\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/focustrap.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport EventHandler from '../dom/event-handler'\nimport SelectorEngine from '../dom/selector-engine'\nimport Config from './config'\n\n/**\n * Constants\n */\n\nconst NAME = 'focustrap'\nconst DATA_KEY = 'bs.focustrap'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst EVENT_FOCUSIN = `focusin${EVENT_KEY}`\nconst EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`\n\nconst TAB_KEY = 'Tab'\nconst TAB_NAV_FORWARD = 'forward'\nconst TAB_NAV_BACKWARD = 'backward'\n\nconst Default = {\n  autofocus: true,\n  trapElement: null // The element to trap focus inside of\n}\n\nconst DefaultType = {\n  autofocus: 'boolean',\n  trapElement: 'element'\n}\n\n/**\n * Class definition\n */\n\nclass FocusTrap extends Config {\n  constructor(config) {\n    super()\n    this._config = this._getConfig(config)\n    this._isActive = false\n    this._lastTabNavDirection = null\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  activate() {\n    if (this._isActive) {\n      return\n    }\n\n    if (this._config.autofocus) {\n      this._config.trapElement.focus()\n    }\n\n    EventHandler.off(document, EVENT_KEY) // guard against infinite focus loop\n    EventHandler.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event))\n    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event))\n\n    this._isActive = true\n  }\n\n  deactivate() {\n    if (!this._isActive) {\n      return\n    }\n\n    this._isActive = false\n    EventHandler.off(document, EVENT_KEY)\n  }\n\n  // Private\n  _handleFocusin(event) {\n    const { trapElement } = this._config\n\n    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {\n      return\n    }\n\n    const elements = SelectorEngine.focusableChildren(trapElement)\n\n    if (elements.length === 0) {\n      trapElement.focus()\n    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {\n      elements[elements.length - 1].focus()\n    } else {\n      elements[0].focus()\n    }\n  }\n\n  _handleKeydown(event) {\n    if (event.key !== TAB_KEY) {\n      return\n    }\n\n    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD\n  }\n}\n\nexport default FocusTrap\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): modal.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin, getElementFromSelector, isRTL, isVisible, reflow } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport SelectorEngine from './dom/selector-engine'\nimport ScrollBarHelper from './util/scrollbar'\nimport BaseComponent from './base-component'\nimport Backdrop from './util/backdrop'\nimport FocusTrap from './util/focustrap'\nimport { enableDismissTrigger } from './util/component-functions'\n\n/**\n * Constants\n */\n\nconst NAME = 'modal'\nconst DATA_KEY = 'bs.modal'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\nconst ESCAPE_KEY = 'Escape'\n\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_RESIZE = `resize${EVENT_KEY}`\nconst EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`\nconst EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`\nconst EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\n\nconst CLASS_NAME_OPEN = 'modal-open'\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_STATIC = 'modal-static'\n\nconst OPEN_SELECTOR = '.modal.show'\nconst SELECTOR_DIALOG = '.modal-dialog'\nconst SELECTOR_MODAL_BODY = '.modal-body'\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"modal\"]'\n\nconst Default = {\n  backdrop: true,\n  focus: true,\n  keyboard: true\n}\n\nconst DefaultType = {\n  backdrop: '(boolean|string)',\n  focus: 'boolean',\n  keyboard: 'boolean'\n}\n\n/**\n * Class definition\n */\n\nclass Modal extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element)\n    this._backdrop = this._initializeBackDrop()\n    this._focustrap = this._initializeFocusTrap()\n    this._isShown = false\n    this._isTransitioning = false\n    this._scrollBar = new ScrollBarHelper()\n\n    this._addEventListeners()\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  toggle(relatedTarget) {\n    return this._isShown ? this.hide() : this.show(relatedTarget)\n  }\n\n  show(relatedTarget) {\n    if (this._isShown || this._isTransitioning) {\n      return\n    }\n\n    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {\n      relatedTarget\n    })\n\n    if (showEvent.defaultPrevented) {\n      return\n    }\n\n    this._isShown = true\n    this._isTransitioning = true\n\n    this._scrollBar.hide()\n\n    document.body.classList.add(CLASS_NAME_OPEN)\n\n    this._adjustDialog()\n\n    this._backdrop.show(() => this._showElement(relatedTarget))\n  }\n\n  hide() {\n    if (!this._isShown || this._isTransitioning) {\n      return\n    }\n\n    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)\n\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    this._isShown = false\n    this._isTransitioning = true\n    this._focustrap.deactivate()\n\n    this._element.classList.remove(CLASS_NAME_SHOW)\n\n    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())\n  }\n\n  dispose() {\n    for (const htmlElement of [window, this._dialog]) {\n      EventHandler.off(htmlElement, EVENT_KEY)\n    }\n\n    this._backdrop.dispose()\n    this._focustrap.deactivate()\n    super.dispose()\n  }\n\n  handleUpdate() {\n    this._adjustDialog()\n  }\n\n  // Private\n  _initializeBackDrop() {\n    return new Backdrop({\n      isVisible: Boolean(this._config.backdrop), // 'static' option will be translated to true, and booleans will keep their value,\n      isAnimated: this._isAnimated()\n    })\n  }\n\n  _initializeFocusTrap() {\n    return new FocusTrap({\n      trapElement: this._element\n    })\n  }\n\n  _showElement(relatedTarget) {\n    // try to append dynamic modal\n    if (!document.body.contains(this._element)) {\n      document.body.append(this._element)\n    }\n\n    this._element.style.display = 'block'\n    this._element.removeAttribute('aria-hidden')\n    this._element.setAttribute('aria-modal', true)\n    this._element.setAttribute('role', 'dialog')\n    this._element.scrollTop = 0\n\n    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog)\n    if (modalBody) {\n      modalBody.scrollTop = 0\n    }\n\n    reflow(this._element)\n\n    this._element.classList.add(CLASS_NAME_SHOW)\n\n    const transitionComplete = () => {\n      if (this._config.focus) {\n        this._focustrap.activate()\n      }\n\n      this._isTransitioning = false\n      EventHandler.trigger(this._element, EVENT_SHOWN, {\n        relatedTarget\n      })\n    }\n\n    this._queueCallback(transitionComplete, this._dialog, this._isAnimated())\n  }\n\n  _addEventListeners() {\n    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {\n      if (event.key !== ESCAPE_KEY) {\n        return\n      }\n\n      if (this._config.keyboard) {\n        event.preventDefault()\n        this.hide()\n        return\n      }\n\n      this._triggerBackdropTransition()\n    })\n\n    EventHandler.on(window, EVENT_RESIZE, () => {\n      if (this._isShown && !this._isTransitioning) {\n        this._adjustDialog()\n      }\n    })\n\n    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {\n      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks\n      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {\n        if (this._element !== event.target || this._element !== event2.target) {\n          return\n        }\n\n        if (this._config.backdrop === 'static') {\n          this._triggerBackdropTransition()\n          return\n        }\n\n        if (this._config.backdrop) {\n          this.hide()\n        }\n      })\n    })\n  }\n\n  _hideModal() {\n    this._element.style.display = 'none'\n    this._element.setAttribute('aria-hidden', true)\n    this._element.removeAttribute('aria-modal')\n    this._element.removeAttribute('role')\n    this._isTransitioning = false\n\n    this._backdrop.hide(() => {\n      document.body.classList.remove(CLASS_NAME_OPEN)\n      this._resetAdjustments()\n      this._scrollBar.reset()\n      EventHandler.trigger(this._element, EVENT_HIDDEN)\n    })\n  }\n\n  _isAnimated() {\n    return this._element.classList.contains(CLASS_NAME_FADE)\n  }\n\n  _triggerBackdropTransition() {\n    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED)\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight\n    const initialOverflowY = this._element.style.overflowY\n    // return if the following background transition hasn't yet completed\n    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {\n      return\n    }\n\n    if (!isModalOverflowing) {\n      this._element.style.overflowY = 'hidden'\n    }\n\n    this._element.classList.add(CLASS_NAME_STATIC)\n    this._queueCallback(() => {\n      this._element.classList.remove(CLASS_NAME_STATIC)\n      this._queueCallback(() => {\n        this._element.style.overflowY = initialOverflowY\n      }, this._dialog)\n    }, this._dialog)\n\n    this._element.focus()\n  }\n\n  /**\n   * The following methods are used to handle overflowing modals\n   */\n\n  _adjustDialog() {\n    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight\n    const scrollbarWidth = this._scrollBar.getWidth()\n    const isBodyOverflowing = scrollbarWidth > 0\n\n    if (isBodyOverflowing && !isModalOverflowing) {\n      const property = isRTL() ? 'paddingLeft' : 'paddingRight'\n      this._element.style[property] = `${scrollbarWidth}px`\n    }\n\n    if (!isBodyOverflowing && isModalOverflowing) {\n      const property = isRTL() ? 'paddingRight' : 'paddingLeft'\n      this._element.style[property] = `${scrollbarWidth}px`\n    }\n  }\n\n  _resetAdjustments() {\n    this._element.style.paddingLeft = ''\n    this._element.style.paddingRight = ''\n  }\n\n  // Static\n  static jQueryInterface(config, relatedTarget) {\n    return this.each(function () {\n      const data = Modal.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (typeof data[config] === 'undefined') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config](relatedTarget)\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n  const target = getElementFromSelector(this)\n\n  if (['A', 'AREA'].includes(this.tagName)) {\n    event.preventDefault()\n  }\n\n  EventHandler.one(target, EVENT_SHOW, showEvent => {\n    if (showEvent.defaultPrevented) {\n      // only register focus restorer if modal will actually get shown\n      return\n    }\n\n    EventHandler.one(target, EVENT_HIDDEN, () => {\n      if (isVisible(this)) {\n        this.focus()\n      }\n    })\n  })\n\n  // avoid conflict when clicking modal toggler while another one is open\n  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR)\n  if (alreadyOpen) {\n    Modal.getInstance(alreadyOpen).hide()\n  }\n\n  const data = Modal.getOrCreateInstance(target)\n\n  data.toggle(this)\n})\n\nenableDismissTrigger(Modal)\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Modal)\n\nexport default Modal\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): offcanvas.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport {\n  defineJQueryPlugin,\n  getElementFromSelector,\n  isDisabled,\n  isVisible\n} from './util/index'\nimport ScrollBarHelper from './util/scrollbar'\nimport EventHandler from './dom/event-handler'\nimport BaseComponent from './base-component'\nimport SelectorEngine from './dom/selector-engine'\nimport Backdrop from './util/backdrop'\nimport FocusTrap from './util/focustrap'\nimport { enableDismissTrigger } from './util/component-functions'\n\n/**\n * Constants\n */\n\nconst NAME = 'offcanvas'\nconst DATA_KEY = 'bs.offcanvas'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\nconst EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`\nconst ESCAPE_KEY = 'Escape'\n\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_SHOWING = 'showing'\nconst CLASS_NAME_HIDING = 'hiding'\nconst CLASS_NAME_BACKDROP = 'offcanvas-backdrop'\nconst OPEN_SELECTOR = '.offcanvas.show'\n\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_RESIZE = `resize${EVENT_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`\nconst EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`\n\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"offcanvas\"]'\n\nconst Default = {\n  backdrop: true,\n  keyboard: true,\n  scroll: false\n}\n\nconst DefaultType = {\n  backdrop: '(boolean|string)',\n  keyboard: 'boolean',\n  scroll: 'boolean'\n}\n\n/**\n * Class definition\n */\n\nclass Offcanvas extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._isShown = false\n    this._backdrop = this._initializeBackDrop()\n    this._focustrap = this._initializeFocusTrap()\n    this._addEventListeners()\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  toggle(relatedTarget) {\n    return this._isShown ? this.hide() : this.show(relatedTarget)\n  }\n\n  show(relatedTarget) {\n    if (this._isShown) {\n      return\n    }\n\n    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, { relatedTarget })\n\n    if (showEvent.defaultPrevented) {\n      return\n    }\n\n    this._isShown = true\n    this._backdrop.show()\n\n    if (!this._config.scroll) {\n      new ScrollBarHelper().hide()\n    }\n\n    this._element.setAttribute('aria-modal', true)\n    this._element.setAttribute('role', 'dialog')\n    this._element.classList.add(CLASS_NAME_SHOWING)\n\n    const completeCallBack = () => {\n      if (!this._config.scroll || this._config.backdrop) {\n        this._focustrap.activate()\n      }\n\n      this._element.classList.add(CLASS_NAME_SHOW)\n      this._element.classList.remove(CLASS_NAME_SHOWING)\n      EventHandler.trigger(this._element, EVENT_SHOWN, { relatedTarget })\n    }\n\n    this._queueCallback(completeCallBack, this._element, true)\n  }\n\n  hide() {\n    if (!this._isShown) {\n      return\n    }\n\n    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)\n\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    this._focustrap.deactivate()\n    this._element.blur()\n    this._isShown = false\n    this._element.classList.add(CLASS_NAME_HIDING)\n    this._backdrop.hide()\n\n    const completeCallback = () => {\n      this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING)\n      this._element.removeAttribute('aria-modal')\n      this._element.removeAttribute('role')\n\n      if (!this._config.scroll) {\n        new ScrollBarHelper().reset()\n      }\n\n      EventHandler.trigger(this._element, EVENT_HIDDEN)\n    }\n\n    this._queueCallback(completeCallback, this._element, true)\n  }\n\n  dispose() {\n    this._backdrop.dispose()\n    this._focustrap.deactivate()\n    super.dispose()\n  }\n\n  // Private\n  _initializeBackDrop() {\n    const clickCallback = () => {\n      if (this._config.backdrop === 'static') {\n        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED)\n        return\n      }\n\n      this.hide()\n    }\n\n    // 'static' option will be translated to true, and booleans will keep their value\n    const isVisible = Boolean(this._config.backdrop)\n\n    return new Backdrop({\n      className: CLASS_NAME_BACKDROP,\n      isVisible,\n      isAnimated: true,\n      rootElement: this._element.parentNode,\n      clickCallback: isVisible ? clickCallback : null\n    })\n  }\n\n  _initializeFocusTrap() {\n    return new FocusTrap({\n      trapElement: this._element\n    })\n  }\n\n  _addEventListeners() {\n    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {\n      if (event.key !== ESCAPE_KEY) {\n        return\n      }\n\n      if (!this._config.keyboard) {\n        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED)\n        return\n      }\n\n      this.hide()\n    })\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Offcanvas.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config](this)\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n  const target = getElementFromSelector(this)\n\n  if (['A', 'AREA'].includes(this.tagName)) {\n    event.preventDefault()\n  }\n\n  if (isDisabled(this)) {\n    return\n  }\n\n  EventHandler.one(target, EVENT_HIDDEN, () => {\n    // focus on trigger when it is closed\n    if (isVisible(this)) {\n      this.focus()\n    }\n  })\n\n  // avoid conflict when clicking a toggler of an offcanvas, while another is open\n  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR)\n  if (alreadyOpen && alreadyOpen !== target) {\n    Offcanvas.getInstance(alreadyOpen).hide()\n  }\n\n  const data = Offcanvas.getOrCreateInstance(target)\n  data.toggle(this)\n})\n\nEventHandler.on(window, EVENT_LOAD_DATA_API, () => {\n  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {\n    Offcanvas.getOrCreateInstance(selector).show()\n  }\n})\n\nEventHandler.on(window, EVENT_RESIZE, () => {\n  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {\n    if (getComputedStyle(element).position !== 'fixed') {\n      Offcanvas.getOrCreateInstance(element).hide()\n    }\n  }\n})\n\nenableDismissTrigger(Offcanvas)\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Offcanvas)\n\nexport default Offcanvas\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/sanitizer.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nconst uriAttributes = new Set([\n  'background',\n  'cite',\n  'href',\n  'itemtype',\n  'longdesc',\n  'poster',\n  'src',\n  'xlink:href'\n])\n\nconst ARIA_ATTRIBUTE_PATTERN = /^aria-[\\w-]*$/i\n\n/**\n * A pattern that recognizes a commonly useful subset of URLs that are safe.\n *\n * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts\n */\nconst SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i\n\n/**\n * A pattern that matches safe data URLs. Only matches image, video and audio types.\n *\n * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts\n */\nconst DATA_URL_PATTERN = /^data:(?:image\\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\\/(?:mpeg|mp4|ogg|webm)|audio\\/(?:mp3|oga|ogg|opus));base64,[\\d+/a-z]+=*$/i\n\nconst allowedAttribute = (attribute, allowedAttributeList) => {\n  const attributeName = attribute.nodeName.toLowerCase()\n\n  if (allowedAttributeList.includes(attributeName)) {\n    if (uriAttributes.has(attributeName)) {\n      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue))\n    }\n\n    return true\n  }\n\n  // Check if a regular expression validates the attribute.\n  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp)\n    .some(regex => regex.test(attributeName))\n}\n\nexport const DefaultAllowlist = {\n  // Global attributes allowed on any supplied element below.\n  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],\n  a: ['target', 'href', 'title', 'rel'],\n  area: [],\n  b: [],\n  br: [],\n  col: [],\n  code: [],\n  div: [],\n  em: [],\n  hr: [],\n  h1: [],\n  h2: [],\n  h3: [],\n  h4: [],\n  h5: [],\n  h6: [],\n  i: [],\n  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],\n  li: [],\n  ol: [],\n  p: [],\n  pre: [],\n  s: [],\n  small: [],\n  span: [],\n  sub: [],\n  sup: [],\n  strong: [],\n  u: [],\n  ul: []\n}\n\nexport function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {\n  if (!unsafeHtml.length) {\n    return unsafeHtml\n  }\n\n  if (sanitizeFunction && typeof sanitizeFunction === 'function') {\n    return sanitizeFunction(unsafeHtml)\n  }\n\n  const domParser = new window.DOMParser()\n  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html')\n  const elements = [].concat(...createdDocument.body.querySelectorAll('*'))\n\n  for (const element of elements) {\n    const elementName = element.nodeName.toLowerCase()\n\n    if (!Object.keys(allowList).includes(elementName)) {\n      element.remove()\n\n      continue\n    }\n\n    const attributeList = [].concat(...element.attributes)\n    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || [])\n\n    for (const attribute of attributeList) {\n      if (!allowedAttribute(attribute, allowedAttributes)) {\n        element.removeAttribute(attribute.nodeName)\n      }\n    }\n  }\n\n  return createdDocument.body.innerHTML\n}\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): util/template-factory.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { DefaultAllowlist, sanitizeHtml } from './sanitizer'\nimport { getElement, isElement } from '../util/index'\nimport SelectorEngine from '../dom/selector-engine'\nimport Config from './config'\n\n/**\n * Constants\n */\n\nconst NAME = 'TemplateFactory'\n\nconst Default = {\n  allowList: DefaultAllowlist,\n  content: {}, // { selector : text ,  selector2 : text2 , }\n  extraClass: '',\n  html: false,\n  sanitize: true,\n  sanitizeFn: null,\n  template: '<div></div>'\n}\n\nconst DefaultType = {\n  allowList: 'object',\n  content: 'object',\n  extraClass: '(string|function)',\n  html: 'boolean',\n  sanitize: 'boolean',\n  sanitizeFn: '(null|function)',\n  template: 'string'\n}\n\nconst DefaultContentType = {\n  entry: '(string|element|function|null)',\n  selector: '(string|element)'\n}\n\n/**\n * Class definition\n */\n\nclass TemplateFactory extends Config {\n  constructor(config) {\n    super()\n    this._config = this._getConfig(config)\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  getContent() {\n    return Object.values(this._config.content)\n      .map(config => this._resolvePossibleFunction(config))\n      .filter(Boolean)\n  }\n\n  hasContent() {\n    return this.getContent().length > 0\n  }\n\n  changeContent(content) {\n    this._checkContent(content)\n    this._config.content = { ...this._config.content, ...content }\n    return this\n  }\n\n  toHtml() {\n    const templateWrapper = document.createElement('div')\n    templateWrapper.innerHTML = this._maybeSanitize(this._config.template)\n\n    for (const [selector, text] of Object.entries(this._config.content)) {\n      this._setContent(templateWrapper, text, selector)\n    }\n\n    const template = templateWrapper.children[0]\n    const extraClass = this._resolvePossibleFunction(this._config.extraClass)\n\n    if (extraClass) {\n      template.classList.add(...extraClass.split(' '))\n    }\n\n    return template\n  }\n\n  // Private\n  _typeCheckConfig(config) {\n    super._typeCheckConfig(config)\n    this._checkContent(config.content)\n  }\n\n  _checkContent(arg) {\n    for (const [selector, content] of Object.entries(arg)) {\n      super._typeCheckConfig({ selector, entry: content }, DefaultContentType)\n    }\n  }\n\n  _setContent(template, content, selector) {\n    const templateElement = SelectorEngine.findOne(selector, template)\n\n    if (!templateElement) {\n      return\n    }\n\n    content = this._resolvePossibleFunction(content)\n\n    if (!content) {\n      templateElement.remove()\n      return\n    }\n\n    if (isElement(content)) {\n      this._putElementInTemplate(getElement(content), templateElement)\n      return\n    }\n\n    if (this._config.html) {\n      templateElement.innerHTML = this._maybeSanitize(content)\n      return\n    }\n\n    templateElement.textContent = content\n  }\n\n  _maybeSanitize(arg) {\n    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg\n  }\n\n  _resolvePossibleFunction(arg) {\n    return typeof arg === 'function' ? arg(this) : arg\n  }\n\n  _putElementInTemplate(element, templateElement) {\n    if (this._config.html) {\n      templateElement.innerHTML = ''\n      templateElement.append(element)\n      return\n    }\n\n    templateElement.textContent = element.textContent\n  }\n}\n\nexport default TemplateFactory\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): tooltip.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport * as Popper from '@popperjs/core'\nimport { defineJQueryPlugin, findShadowRoot, getElement, getUID, isRTL, noop } from './util/index'\nimport { DefaultAllowlist } from './util/sanitizer'\nimport EventHandler from './dom/event-handler'\nimport Manipulator from './dom/manipulator'\nimport BaseComponent from './base-component'\nimport TemplateFactory from './util/template-factory'\n\n/**\n * Constants\n */\n\nconst NAME = 'tooltip'\nconst DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn'])\n\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_MODAL = 'modal'\nconst CLASS_NAME_SHOW = 'show'\n\nconst SELECTOR_TOOLTIP_INNER = '.tooltip-inner'\nconst SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`\n\nconst EVENT_MODAL_HIDE = 'hide.bs.modal'\n\nconst TRIGGER_HOVER = 'hover'\nconst TRIGGER_FOCUS = 'focus'\nconst TRIGGER_CLICK = 'click'\nconst TRIGGER_MANUAL = 'manual'\n\nconst EVENT_HIDE = 'hide'\nconst EVENT_HIDDEN = 'hidden'\nconst EVENT_SHOW = 'show'\nconst EVENT_SHOWN = 'shown'\nconst EVENT_INSERTED = 'inserted'\nconst EVENT_CLICK = 'click'\nconst EVENT_FOCUSIN = 'focusin'\nconst EVENT_FOCUSOUT = 'focusout'\nconst EVENT_MOUSEENTER = 'mouseenter'\nconst EVENT_MOUSELEAVE = 'mouseleave'\n\nconst AttachmentMap = {\n  AUTO: 'auto',\n  TOP: 'top',\n  RIGHT: isRTL() ? 'left' : 'right',\n  BOTTOM: 'bottom',\n  LEFT: isRTL() ? 'right' : 'left'\n}\n\nconst Default = {\n  allowList: DefaultAllowlist,\n  animation: true,\n  boundary: 'clippingParents',\n  container: false,\n  customClass: '',\n  delay: 0,\n  fallbackPlacements: ['top', 'right', 'bottom', 'left'],\n  html: false,\n  offset: [0, 0],\n  placement: 'top',\n  popperConfig: null,\n  sanitize: true,\n  sanitizeFn: null,\n  selector: false,\n  template: '<div class=\"tooltip\" role=\"tooltip\">' +\n            '<div class=\"tooltip-arrow\"></div>' +\n            '<div class=\"tooltip-inner\"></div>' +\n            '</div>',\n  title: '',\n  trigger: 'hover focus'\n}\n\nconst DefaultType = {\n  allowList: 'object',\n  animation: 'boolean',\n  boundary: '(string|element)',\n  container: '(string|element|boolean)',\n  customClass: '(string|function)',\n  delay: '(number|object)',\n  fallbackPlacements: 'array',\n  html: 'boolean',\n  offset: '(array|string|function)',\n  placement: '(string|function)',\n  popperConfig: '(null|object|function)',\n  sanitize: 'boolean',\n  sanitizeFn: '(null|function)',\n  selector: '(string|boolean)',\n  template: 'string',\n  title: '(string|element|function)',\n  trigger: 'string'\n}\n\n/**\n * Class definition\n */\n\nclass Tooltip extends BaseComponent {\n  constructor(element, config) {\n    if (typeof Popper === 'undefined') {\n      throw new TypeError('Bootstrap\\'s tooltips require Popper (https://popper.js.org)')\n    }\n\n    super(element, config)\n\n    // Private\n    this._isEnabled = true\n    this._timeout = 0\n    this._isHovered = null\n    this._activeTrigger = {}\n    this._popper = null\n    this._templateFactory = null\n    this._newContent = null\n\n    // Protected\n    this.tip = null\n\n    this._setListeners()\n\n    if (!this._config.selector) {\n      this._fixTitle()\n    }\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  enable() {\n    this._isEnabled = true\n  }\n\n  disable() {\n    this._isEnabled = false\n  }\n\n  toggleEnabled() {\n    this._isEnabled = !this._isEnabled\n  }\n\n  toggle() {\n    if (!this._isEnabled) {\n      return\n    }\n\n    this._activeTrigger.click = !this._activeTrigger.click\n    if (this._isShown()) {\n      this._leave()\n      return\n    }\n\n    this._enter()\n  }\n\n  dispose() {\n    clearTimeout(this._timeout)\n\n    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler)\n\n    if (this.tip) {\n      this.tip.remove()\n    }\n\n    if (this._element.getAttribute('data-bs-original-title')) {\n      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'))\n    }\n\n    this._disposePopper()\n    super.dispose()\n  }\n\n  show() {\n    if (this._element.style.display === 'none') {\n      throw new Error('Please use show on visible elements')\n    }\n\n    if (!(this._isWithContent() && this._isEnabled)) {\n      return\n    }\n\n    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW))\n    const shadowRoot = findShadowRoot(this._element)\n    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element)\n\n    if (showEvent.defaultPrevented || !isInTheDom) {\n      return\n    }\n\n    // todo v6 remove this OR make it optional\n    if (this.tip) {\n      this.tip.remove()\n      this.tip = null\n    }\n\n    const tip = this._getTipElement()\n\n    this._element.setAttribute('aria-describedby', tip.getAttribute('id'))\n\n    const { container } = this._config\n\n    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {\n      container.append(tip)\n      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED))\n    }\n\n    if (this._popper) {\n      this._popper.update()\n    } else {\n      this._popper = this._createPopper(tip)\n    }\n\n    tip.classList.add(CLASS_NAME_SHOW)\n\n    // If this is a touch-enabled device we add extra\n    // empty mouseover listeners to the body's immediate children;\n    // only needed because of broken event delegation on iOS\n    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html\n    if ('ontouchstart' in document.documentElement) {\n      for (const element of [].concat(...document.body.children)) {\n        EventHandler.on(element, 'mouseover', noop)\n      }\n    }\n\n    const complete = () => {\n      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN))\n\n      if (this._isHovered === false) {\n        this._leave()\n      }\n\n      this._isHovered = false\n    }\n\n    this._queueCallback(complete, this.tip, this._isAnimated())\n  }\n\n  hide() {\n    if (!this._isShown()) {\n      return\n    }\n\n    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE))\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    const tip = this._getTipElement()\n    tip.classList.remove(CLASS_NAME_SHOW)\n\n    // If this is a touch-enabled device we remove the extra\n    // empty mouseover listeners we added for iOS support\n    if ('ontouchstart' in document.documentElement) {\n      for (const element of [].concat(...document.body.children)) {\n        EventHandler.off(element, 'mouseover', noop)\n      }\n    }\n\n    this._activeTrigger[TRIGGER_CLICK] = false\n    this._activeTrigger[TRIGGER_FOCUS] = false\n    this._activeTrigger[TRIGGER_HOVER] = false\n    this._isHovered = null // it is a trick to support manual triggering\n\n    const complete = () => {\n      if (this._isWithActiveTrigger()) {\n        return\n      }\n\n      if (!this._isHovered) {\n        tip.remove()\n      }\n\n      this._element.removeAttribute('aria-describedby')\n      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN))\n\n      this._disposePopper()\n    }\n\n    this._queueCallback(complete, this.tip, this._isAnimated())\n  }\n\n  update() {\n    if (this._popper) {\n      this._popper.update()\n    }\n  }\n\n  // Protected\n  _isWithContent() {\n    return Boolean(this._getTitle())\n  }\n\n  _getTipElement() {\n    if (!this.tip) {\n      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())\n    }\n\n    return this.tip\n  }\n\n  _createTipElement(content) {\n    const tip = this._getTemplateFactory(content).toHtml()\n\n    // todo: remove this check on v6\n    if (!tip) {\n      return null\n    }\n\n    tip.classList.remove(CLASS_NAME_FADE, CLASS_NAME_SHOW)\n    // todo: on v6 the following can be achieved with CSS only\n    tip.classList.add(`bs-${this.constructor.NAME}-auto`)\n\n    const tipId = getUID(this.constructor.NAME).toString()\n\n    tip.setAttribute('id', tipId)\n\n    if (this._isAnimated()) {\n      tip.classList.add(CLASS_NAME_FADE)\n    }\n\n    return tip\n  }\n\n  setContent(content) {\n    this._newContent = content\n    if (this._isShown()) {\n      this._disposePopper()\n      this.show()\n    }\n  }\n\n  _getTemplateFactory(content) {\n    if (this._templateFactory) {\n      this._templateFactory.changeContent(content)\n    } else {\n      this._templateFactory = new TemplateFactory({\n        ...this._config,\n        // the `content` var has to be after `this._config`\n        // to override config.content in case of popover\n        content,\n        extraClass: this._resolvePossibleFunction(this._config.customClass)\n      })\n    }\n\n    return this._templateFactory\n  }\n\n  _getContentForTemplate() {\n    return {\n      [SELECTOR_TOOLTIP_INNER]: this._getTitle()\n    }\n  }\n\n  _getTitle() {\n    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title')\n  }\n\n  // Private\n  _initializeOnDelegatedTarget(event) {\n    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig())\n  }\n\n  _isAnimated() {\n    return this._config.animation || (this.tip && this.tip.classList.contains(CLASS_NAME_FADE))\n  }\n\n  _isShown() {\n    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW)\n  }\n\n  _createPopper(tip) {\n    const placement = typeof this._config.placement === 'function' ?\n      this._config.placement.call(this, tip, this._element) :\n      this._config.placement\n    const attachment = AttachmentMap[placement.toUpperCase()]\n    return Popper.createPopper(this._element, tip, this._getPopperConfig(attachment))\n  }\n\n  _getOffset() {\n    const { offset } = this._config\n\n    if (typeof offset === 'string') {\n      return offset.split(',').map(value => Number.parseInt(value, 10))\n    }\n\n    if (typeof offset === 'function') {\n      return popperData => offset(popperData, this._element)\n    }\n\n    return offset\n  }\n\n  _resolvePossibleFunction(arg) {\n    return typeof arg === 'function' ? arg.call(this._element) : arg\n  }\n\n  _getPopperConfig(attachment) {\n    const defaultBsPopperConfig = {\n      placement: attachment,\n      modifiers: [\n        {\n          name: 'flip',\n          options: {\n            fallbackPlacements: this._config.fallbackPlacements\n          }\n        },\n        {\n          name: 'offset',\n          options: {\n            offset: this._getOffset()\n          }\n        },\n        {\n          name: 'preventOverflow',\n          options: {\n            boundary: this._config.boundary\n          }\n        },\n        {\n          name: 'arrow',\n          options: {\n            element: `.${this.constructor.NAME}-arrow`\n          }\n        },\n        {\n          name: 'preSetPlacement',\n          enabled: true,\n          phase: 'beforeMain',\n          fn: data => {\n            // Pre-set Popper's placement attribute in order to read the arrow sizes properly.\n            // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement\n            this._getTipElement().setAttribute('data-popper-placement', data.state.placement)\n          }\n        }\n      ]\n    }\n\n    return {\n      ...defaultBsPopperConfig,\n      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)\n    }\n  }\n\n  _setListeners() {\n    const triggers = this._config.trigger.split(' ')\n\n    for (const trigger of triggers) {\n      if (trigger === 'click') {\n        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, event => {\n          const context = this._initializeOnDelegatedTarget(event)\n          context.toggle()\n        })\n      } else if (trigger !== TRIGGER_MANUAL) {\n        const eventIn = trigger === TRIGGER_HOVER ?\n          this.constructor.eventName(EVENT_MOUSEENTER) :\n          this.constructor.eventName(EVENT_FOCUSIN)\n        const eventOut = trigger === TRIGGER_HOVER ?\n          this.constructor.eventName(EVENT_MOUSELEAVE) :\n          this.constructor.eventName(EVENT_FOCUSOUT)\n\n        EventHandler.on(this._element, eventIn, this._config.selector, event => {\n          const context = this._initializeOnDelegatedTarget(event)\n          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true\n          context._enter()\n        })\n        EventHandler.on(this._element, eventOut, this._config.selector, event => {\n          const context = this._initializeOnDelegatedTarget(event)\n          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] =\n            context._element.contains(event.relatedTarget)\n\n          context._leave()\n        })\n      }\n    }\n\n    this._hideModalHandler = () => {\n      if (this._element) {\n        this.hide()\n      }\n    }\n\n    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler)\n  }\n\n  _fixTitle() {\n    const title = this._element.getAttribute('title')\n\n    if (!title) {\n      return\n    }\n\n    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {\n      this._element.setAttribute('aria-label', title)\n    }\n\n    this._element.setAttribute('data-bs-original-title', title) // DO NOT USE IT. Is only for backwards compatibility\n    this._element.removeAttribute('title')\n  }\n\n  _enter() {\n    if (this._isShown() || this._isHovered) {\n      this._isHovered = true\n      return\n    }\n\n    this._isHovered = true\n\n    this._setTimeout(() => {\n      if (this._isHovered) {\n        this.show()\n      }\n    }, this._config.delay.show)\n  }\n\n  _leave() {\n    if (this._isWithActiveTrigger()) {\n      return\n    }\n\n    this._isHovered = false\n\n    this._setTimeout(() => {\n      if (!this._isHovered) {\n        this.hide()\n      }\n    }, this._config.delay.hide)\n  }\n\n  _setTimeout(handler, timeout) {\n    clearTimeout(this._timeout)\n    this._timeout = setTimeout(handler, timeout)\n  }\n\n  _isWithActiveTrigger() {\n    return Object.values(this._activeTrigger).includes(true)\n  }\n\n  _getConfig(config) {\n    const dataAttributes = Manipulator.getDataAttributes(this._element)\n\n    for (const dataAttribute of Object.keys(dataAttributes)) {\n      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {\n        delete dataAttributes[dataAttribute]\n      }\n    }\n\n    config = {\n      ...dataAttributes,\n      ...(typeof config === 'object' && config ? config : {})\n    }\n    config = this._mergeConfigObj(config)\n    config = this._configAfterMerge(config)\n    this._typeCheckConfig(config)\n    return config\n  }\n\n  _configAfterMerge(config) {\n    config.container = config.container === false ? document.body : getElement(config.container)\n\n    if (typeof config.delay === 'number') {\n      config.delay = {\n        show: config.delay,\n        hide: config.delay\n      }\n    }\n\n    if (typeof config.title === 'number') {\n      config.title = config.title.toString()\n    }\n\n    if (typeof config.content === 'number') {\n      config.content = config.content.toString()\n    }\n\n    return config\n  }\n\n  _getDelegateConfig() {\n    const config = {}\n\n    for (const key in this._config) {\n      if (this.constructor.Default[key] !== this._config[key]) {\n        config[key] = this._config[key]\n      }\n    }\n\n    config.selector = false\n    config.trigger = 'manual'\n\n    // In the future can be replaced with:\n    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])\n    // `Object.fromEntries(keysWithDifferentValues)`\n    return config\n  }\n\n  _disposePopper() {\n    if (this._popper) {\n      this._popper.destroy()\n      this._popper = null\n    }\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Tooltip.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (typeof data[config] === 'undefined') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config]()\n    })\n  }\n}\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Tooltip)\n\nexport default Tooltip\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): popover.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin } from './util/index'\nimport Tooltip from './tooltip'\n\n/**\n * Constants\n */\n\nconst NAME = 'popover'\n\nconst SELECTOR_TITLE = '.popover-header'\nconst SELECTOR_CONTENT = '.popover-body'\n\nconst Default = {\n  ...Tooltip.Default,\n  content: '',\n  offset: [0, 8],\n  placement: 'right',\n  template: '<div class=\"popover\" role=\"tooltip\">' +\n    '<div class=\"popover-arrow\"></div>' +\n    '<h3 class=\"popover-header\"></h3>' +\n    '<div class=\"popover-body\"></div>' +\n    '</div>',\n  trigger: 'click'\n}\n\nconst DefaultType = {\n  ...Tooltip.DefaultType,\n  content: '(null|string|element|function)'\n}\n\n/**\n * Class definition\n */\n\nclass Popover extends Tooltip {\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Overrides\n  _isWithContent() {\n    return this._getTitle() || this._getContent()\n  }\n\n  // Private\n  _getContentForTemplate() {\n    return {\n      [SELECTOR_TITLE]: this._getTitle(),\n      [SELECTOR_CONTENT]: this._getContent()\n    }\n  }\n\n  _getContent() {\n    return this._resolvePossibleFunction(this._config.content)\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Popover.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (typeof data[config] === 'undefined') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config]()\n    })\n  }\n}\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Popover)\n\nexport default Popover\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): scrollspy.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin, getElement, isDisabled, isVisible } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport SelectorEngine from './dom/selector-engine'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'scrollspy'\nconst DATA_KEY = 'bs.scrollspy'\nconst EVENT_KEY = `.${DATA_KEY}`\nconst DATA_API_KEY = '.data-api'\n\nconst EVENT_ACTIVATE = `activate${EVENT_KEY}`\nconst EVENT_CLICK = `click${EVENT_KEY}`\nconst EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`\n\nconst CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item'\nconst CLASS_NAME_ACTIVE = 'active'\n\nconst SELECTOR_DATA_SPY = '[data-bs-spy=\"scroll\"]'\nconst SELECTOR_TARGET_LINKS = '[href]'\nconst SELECTOR_NAV_LIST_GROUP = '.nav, .list-group'\nconst SELECTOR_NAV_LINKS = '.nav-link'\nconst SELECTOR_NAV_ITEMS = '.nav-item'\nconst SELECTOR_LIST_ITEMS = '.list-group-item'\nconst SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`\nconst SELECTOR_DROPDOWN = '.dropdown'\nconst SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle'\n\nconst Default = {\n  offset: null, // TODO: v6 @deprecated, keep it for backwards compatibility reasons\n  rootMargin: '0px 0px -25%',\n  smoothScroll: false,\n  target: null,\n  threshold: [0.1, 0.5, 1]\n}\n\nconst DefaultType = {\n  offset: '(number|null)', // TODO v6 @deprecated, keep it for backwards compatibility reasons\n  rootMargin: 'string',\n  smoothScroll: 'boolean',\n  target: 'element',\n  threshold: 'array'\n}\n\n/**\n * Class definition\n */\n\nclass ScrollSpy extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    // this._element is the observablesContainer and config.target the menu links wrapper\n    this._targetLinks = new Map()\n    this._observableSections = new Map()\n    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element\n    this._activeTarget = null\n    this._observer = null\n    this._previousScrollData = {\n      visibleEntryTop: 0,\n      parentScrollTop: 0\n    }\n    this.refresh() // initialize\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  refresh() {\n    this._initializeTargetsAndObservables()\n    this._maybeEnableSmoothScroll()\n\n    if (this._observer) {\n      this._observer.disconnect()\n    } else {\n      this._observer = this._getNewObserver()\n    }\n\n    for (const section of this._observableSections.values()) {\n      this._observer.observe(section)\n    }\n  }\n\n  dispose() {\n    this._observer.disconnect()\n    super.dispose()\n  }\n\n  // Private\n  _configAfterMerge(config) {\n    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case\n    config.target = getElement(config.target) || document.body\n\n    // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only\n    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin\n\n    if (typeof config.threshold === 'string') {\n      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value))\n    }\n\n    return config\n  }\n\n  _maybeEnableSmoothScroll() {\n    if (!this._config.smoothScroll) {\n      return\n    }\n\n    // unregister any previous listeners\n    EventHandler.off(this._config.target, EVENT_CLICK)\n\n    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {\n      const observableSection = this._observableSections.get(event.target.hash)\n      if (observableSection) {\n        event.preventDefault()\n        const root = this._rootElement || window\n        const height = observableSection.offsetTop - this._element.offsetTop\n        if (root.scrollTo) {\n          root.scrollTo({ top: height, behavior: 'smooth' })\n          return\n        }\n\n        // Chrome 60 doesn't support `scrollTo`\n        root.scrollTop = height\n      }\n    })\n  }\n\n  _getNewObserver() {\n    const options = {\n      root: this._rootElement,\n      threshold: this._config.threshold,\n      rootMargin: this._config.rootMargin\n    }\n\n    return new IntersectionObserver(entries => this._observerCallback(entries), options)\n  }\n\n  // The logic of selection\n  _observerCallback(entries) {\n    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`)\n    const activate = entry => {\n      this._previousScrollData.visibleEntryTop = entry.target.offsetTop\n      this._process(targetElement(entry))\n    }\n\n    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop\n    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop\n    this._previousScrollData.parentScrollTop = parentScrollTop\n\n    for (const entry of entries) {\n      if (!entry.isIntersecting) {\n        this._activeTarget = null\n        this._clearActiveClass(targetElement(entry))\n\n        continue\n      }\n\n      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop\n      // if we are scrolling down, pick the bigger offsetTop\n      if (userScrollsDown && entryIsLowerThanPrevious) {\n        activate(entry)\n        // if parent isn't scrolled, let's keep the first visible item, breaking the iteration\n        if (!parentScrollTop) {\n          return\n        }\n\n        continue\n      }\n\n      // if we are scrolling up, pick the smallest offsetTop\n      if (!userScrollsDown && !entryIsLowerThanPrevious) {\n        activate(entry)\n      }\n    }\n  }\n\n  _initializeTargetsAndObservables() {\n    this._targetLinks = new Map()\n    this._observableSections = new Map()\n\n    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target)\n\n    for (const anchor of targetLinks) {\n      // ensure that the anchor has an id and is not disabled\n      if (!anchor.hash || isDisabled(anchor)) {\n        continue\n      }\n\n      const observableSection = SelectorEngine.findOne(anchor.hash, this._element)\n\n      // ensure that the observableSection exists & is visible\n      if (isVisible(observableSection)) {\n        this._targetLinks.set(anchor.hash, anchor)\n        this._observableSections.set(anchor.hash, observableSection)\n      }\n    }\n  }\n\n  _process(target) {\n    if (this._activeTarget === target) {\n      return\n    }\n\n    this._clearActiveClass(this._config.target)\n    this._activeTarget = target\n    target.classList.add(CLASS_NAME_ACTIVE)\n    this._activateParents(target)\n\n    EventHandler.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target })\n  }\n\n  _activateParents(target) {\n    // Activate dropdown parents\n    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {\n      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN))\n        .classList.add(CLASS_NAME_ACTIVE)\n      return\n    }\n\n    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {\n      // Set triggered links parents as active\n      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor\n      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {\n        item.classList.add(CLASS_NAME_ACTIVE)\n      }\n    }\n  }\n\n  _clearActiveClass(parent) {\n    parent.classList.remove(CLASS_NAME_ACTIVE)\n\n    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE}`, parent)\n    for (const node of activeNodes) {\n      node.classList.remove(CLASS_NAME_ACTIVE)\n    }\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = ScrollSpy.getOrCreateInstance(this, config)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config]()\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(window, EVENT_LOAD_DATA_API, () => {\n  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {\n    ScrollSpy.getOrCreateInstance(spy)\n  }\n})\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(ScrollSpy)\n\nexport default ScrollSpy\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): tab.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin, getElementFromSelector, getNextActiveElement, isDisabled } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport SelectorEngine from './dom/selector-engine'\nimport BaseComponent from './base-component'\n\n/**\n * Constants\n */\n\nconst NAME = 'tab'\nconst DATA_KEY = 'bs.tab'\nconst EVENT_KEY = `.${DATA_KEY}`\n\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\nconst EVENT_CLICK_DATA_API = `click${EVENT_KEY}`\nconst EVENT_KEYDOWN = `keydown${EVENT_KEY}`\nconst EVENT_LOAD_DATA_API = `load${EVENT_KEY}`\n\nconst ARROW_LEFT_KEY = 'ArrowLeft'\nconst ARROW_RIGHT_KEY = 'ArrowRight'\nconst ARROW_UP_KEY = 'ArrowUp'\nconst ARROW_DOWN_KEY = 'ArrowDown'\n\nconst CLASS_NAME_ACTIVE = 'active'\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_DROPDOWN = 'dropdown'\n\nconst SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle'\nconst SELECTOR_DROPDOWN_MENU = '.dropdown-menu'\nconst NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)'\n\nconst SELECTOR_TAB_PANEL = '.list-group, .nav, [role=\"tablist\"]'\nconst SELECTOR_OUTER = '.nav-item, .list-group-item'\nconst SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role=\"tab\"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`\nconst SELECTOR_DATA_TOGGLE = '[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]' // todo:v6: could be only `tab`\nconst SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`\n\nconst SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle=\"tab\"], .${CLASS_NAME_ACTIVE}[data-bs-toggle=\"pill\"], .${CLASS_NAME_ACTIVE}[data-bs-toggle=\"list\"]`\n\n/**\n * Class definition\n */\n\nclass Tab extends BaseComponent {\n  constructor(element) {\n    super(element)\n    this._parent = this._element.closest(SELECTOR_TAB_PANEL)\n\n    if (!this._parent) {\n      return\n      // todo: should Throw exception on v6\n      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)\n    }\n\n    // Set up initial aria attributes\n    this._setInitialAttributes(this._parent, this._getChildren())\n\n    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event))\n  }\n\n  // Getters\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  show() { // Shows this elem and deactivate the active sibling if exists\n    const innerElem = this._element\n    if (this._elemIsActive(innerElem)) {\n      return\n    }\n\n    // Search for active tab on same parent to deactivate it\n    const active = this._getActiveElem()\n\n    const hideEvent = active ?\n      EventHandler.trigger(active, EVENT_HIDE, { relatedTarget: innerElem }) :\n      null\n\n    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW, { relatedTarget: active })\n\n    if (showEvent.defaultPrevented || (hideEvent && hideEvent.defaultPrevented)) {\n      return\n    }\n\n    this._deactivate(active, innerElem)\n    this._activate(innerElem, active)\n  }\n\n  // Private\n  _activate(element, relatedElem) {\n    if (!element) {\n      return\n    }\n\n    element.classList.add(CLASS_NAME_ACTIVE)\n\n    this._activate(getElementFromSelector(element)) // Search and activate/show the proper section\n\n    const complete = () => {\n      if (element.getAttribute('role') !== 'tab') {\n        element.classList.add(CLASS_NAME_SHOW)\n        return\n      }\n\n      element.removeAttribute('tabindex')\n      element.setAttribute('aria-selected', true)\n      this._toggleDropDown(element, true)\n      EventHandler.trigger(element, EVENT_SHOWN, {\n        relatedTarget: relatedElem\n      })\n    }\n\n    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE))\n  }\n\n  _deactivate(element, relatedElem) {\n    if (!element) {\n      return\n    }\n\n    element.classList.remove(CLASS_NAME_ACTIVE)\n    element.blur()\n\n    this._deactivate(getElementFromSelector(element)) // Search and deactivate the shown section too\n\n    const complete = () => {\n      if (element.getAttribute('role') !== 'tab') {\n        element.classList.remove(CLASS_NAME_SHOW)\n        return\n      }\n\n      element.setAttribute('aria-selected', false)\n      element.setAttribute('tabindex', '-1')\n      this._toggleDropDown(element, false)\n      EventHandler.trigger(element, EVENT_HIDDEN, { relatedTarget: relatedElem })\n    }\n\n    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE))\n  }\n\n  _keydown(event) {\n    if (!([ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key))) {\n      return\n    }\n\n    event.stopPropagation()// stopPropagation/preventDefault both added to support up/down keys without scrolling the page\n    event.preventDefault()\n    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key)\n    const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true)\n\n    if (nextActiveElement) {\n      nextActiveElement.focus({ preventScroll: true })\n      Tab.getOrCreateInstance(nextActiveElement).show()\n    }\n  }\n\n  _getChildren() { // collection of inner elements\n    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent)\n  }\n\n  _getActiveElem() {\n    return this._getChildren().find(child => this._elemIsActive(child)) || null\n  }\n\n  _setInitialAttributes(parent, children) {\n    this._setAttributeIfNotExists(parent, 'role', 'tablist')\n\n    for (const child of children) {\n      this._setInitialAttributesOnChild(child)\n    }\n  }\n\n  _setInitialAttributesOnChild(child) {\n    child = this._getInnerElement(child)\n    const isActive = this._elemIsActive(child)\n    const outerElem = this._getOuterElement(child)\n    child.setAttribute('aria-selected', isActive)\n\n    if (outerElem !== child) {\n      this._setAttributeIfNotExists(outerElem, 'role', 'presentation')\n    }\n\n    if (!isActive) {\n      child.setAttribute('tabindex', '-1')\n    }\n\n    this._setAttributeIfNotExists(child, 'role', 'tab')\n\n    // set attributes to the related panel too\n    this._setInitialAttributesOnTargetPanel(child)\n  }\n\n  _setInitialAttributesOnTargetPanel(child) {\n    const target = getElementFromSelector(child)\n\n    if (!target) {\n      return\n    }\n\n    this._setAttributeIfNotExists(target, 'role', 'tabpanel')\n\n    if (child.id) {\n      this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`)\n    }\n  }\n\n  _toggleDropDown(element, open) {\n    const outerElem = this._getOuterElement(element)\n    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {\n      return\n    }\n\n    const toggle = (selector, className) => {\n      const element = SelectorEngine.findOne(selector, outerElem)\n      if (element) {\n        element.classList.toggle(className, open)\n      }\n    }\n\n    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE)\n    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW)\n    outerElem.setAttribute('aria-expanded', open)\n  }\n\n  _setAttributeIfNotExists(element, attribute, value) {\n    if (!element.hasAttribute(attribute)) {\n      element.setAttribute(attribute, value)\n    }\n  }\n\n  _elemIsActive(elem) {\n    return elem.classList.contains(CLASS_NAME_ACTIVE)\n  }\n\n  // Try to get the inner element (usually the .nav-link)\n  _getInnerElement(elem) {\n    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem)\n  }\n\n  // Try to get the outer element (usually the .nav-item)\n  _getOuterElement(elem) {\n    return elem.closest(SELECTOR_OUTER) || elem\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Tab.getOrCreateInstance(this)\n\n      if (typeof config !== 'string') {\n        return\n      }\n\n      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {\n        throw new TypeError(`No method named \"${config}\"`)\n      }\n\n      data[config]()\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nEventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {\n  if (['A', 'AREA'].includes(this.tagName)) {\n    event.preventDefault()\n  }\n\n  if (isDisabled(this)) {\n    return\n  }\n\n  Tab.getOrCreateInstance(this).show()\n})\n\n/**\n * Initialize on focus\n */\nEventHandler.on(window, EVENT_LOAD_DATA_API, () => {\n  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {\n    Tab.getOrCreateInstance(element)\n  }\n})\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Tab)\n\nexport default Tab\n","/**\n * --------------------------------------------------------------------------\n * Bootstrap (v5.2.2): toast.js\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n * --------------------------------------------------------------------------\n */\n\nimport { defineJQueryPlugin, reflow } from './util/index'\nimport EventHandler from './dom/event-handler'\nimport BaseComponent from './base-component'\nimport { enableDismissTrigger } from './util/component-functions'\n\n/**\n * Constants\n */\n\nconst NAME = 'toast'\nconst DATA_KEY = 'bs.toast'\nconst EVENT_KEY = `.${DATA_KEY}`\n\nconst EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`\nconst EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`\nconst EVENT_FOCUSIN = `focusin${EVENT_KEY}`\nconst EVENT_FOCUSOUT = `focusout${EVENT_KEY}`\nconst EVENT_HIDE = `hide${EVENT_KEY}`\nconst EVENT_HIDDEN = `hidden${EVENT_KEY}`\nconst EVENT_SHOW = `show${EVENT_KEY}`\nconst EVENT_SHOWN = `shown${EVENT_KEY}`\n\nconst CLASS_NAME_FADE = 'fade'\nconst CLASS_NAME_HIDE = 'hide' // @deprecated - kept here only for backwards compatibility\nconst CLASS_NAME_SHOW = 'show'\nconst CLASS_NAME_SHOWING = 'showing'\n\nconst DefaultType = {\n  animation: 'boolean',\n  autohide: 'boolean',\n  delay: 'number'\n}\n\nconst Default = {\n  animation: true,\n  autohide: true,\n  delay: 5000\n}\n\n/**\n * Class definition\n */\n\nclass Toast extends BaseComponent {\n  constructor(element, config) {\n    super(element, config)\n\n    this._timeout = null\n    this._hasMouseInteraction = false\n    this._hasKeyboardInteraction = false\n    this._setListeners()\n  }\n\n  // Getters\n  static get Default() {\n    return Default\n  }\n\n  static get DefaultType() {\n    return DefaultType\n  }\n\n  static get NAME() {\n    return NAME\n  }\n\n  // Public\n  show() {\n    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW)\n\n    if (showEvent.defaultPrevented) {\n      return\n    }\n\n    this._clearTimeout()\n\n    if (this._config.animation) {\n      this._element.classList.add(CLASS_NAME_FADE)\n    }\n\n    const complete = () => {\n      this._element.classList.remove(CLASS_NAME_SHOWING)\n      EventHandler.trigger(this._element, EVENT_SHOWN)\n\n      this._maybeScheduleHide()\n    }\n\n    this._element.classList.remove(CLASS_NAME_HIDE) // @deprecated\n    reflow(this._element)\n    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING)\n\n    this._queueCallback(complete, this._element, this._config.animation)\n  }\n\n  hide() {\n    if (!this.isShown()) {\n      return\n    }\n\n    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE)\n\n    if (hideEvent.defaultPrevented) {\n      return\n    }\n\n    const complete = () => {\n      this._element.classList.add(CLASS_NAME_HIDE) // @deprecated\n      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW)\n      EventHandler.trigger(this._element, EVENT_HIDDEN)\n    }\n\n    this._element.classList.add(CLASS_NAME_SHOWING)\n    this._queueCallback(complete, this._element, this._config.animation)\n  }\n\n  dispose() {\n    this._clearTimeout()\n\n    if (this.isShown()) {\n      this._element.classList.remove(CLASS_NAME_SHOW)\n    }\n\n    super.dispose()\n  }\n\n  isShown() {\n    return this._element.classList.contains(CLASS_NAME_SHOW)\n  }\n\n  // Private\n\n  _maybeScheduleHide() {\n    if (!this._config.autohide) {\n      return\n    }\n\n    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {\n      return\n    }\n\n    this._timeout = setTimeout(() => {\n      this.hide()\n    }, this._config.delay)\n  }\n\n  _onInteraction(event, isInteracting) {\n    switch (event.type) {\n      case 'mouseover':\n      case 'mouseout': {\n        this._hasMouseInteraction = isInteracting\n        break\n      }\n\n      case 'focusin':\n      case 'focusout': {\n        this._hasKeyboardInteraction = isInteracting\n        break\n      }\n\n      default: {\n        break\n      }\n    }\n\n    if (isInteracting) {\n      this._clearTimeout()\n      return\n    }\n\n    const nextElement = event.relatedTarget\n    if (this._element === nextElement || this._element.contains(nextElement)) {\n      return\n    }\n\n    this._maybeScheduleHide()\n  }\n\n  _setListeners() {\n    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true))\n    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false))\n    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true))\n    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false))\n  }\n\n  _clearTimeout() {\n    clearTimeout(this._timeout)\n    this._timeout = null\n  }\n\n  // Static\n  static jQueryInterface(config) {\n    return this.each(function () {\n      const data = Toast.getOrCreateInstance(this, config)\n\n      if (typeof config === 'string') {\n        if (typeof data[config] === 'undefined') {\n          throw new TypeError(`No method named \"${config}\"`)\n        }\n\n        data[config](this)\n      }\n    })\n  }\n}\n\n/**\n * Data API implementation\n */\n\nenableDismissTrigger(Toast)\n\n/**\n * jQuery\n */\n\ndefineJQueryPlugin(Toast)\n\nexport default Toast\n"],"mappings":"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"}                                                                                                                                                                                                                                                                                                      /*!
  * Bootstrap v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
import * as Popper from '@popperjs/core';

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = 'transitionend'; // Shout-out Angus Croll (https://goo.gl/pxwQGp)

const toType = object => {
  if (object === null || object === undefined) {
    return `${object}`;
  }

  return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */


const getUID = prefix => {
  do {
    prefix += Math.floor(Math.random() * MAX_UID);
  } while (document.getElementById(prefix));

  return prefix;
};

const getSelector = element => {
  let selector = element.getAttribute('data-bs-target');

  if (!selector || selector === '#') {
    let hrefAttribute = element.getAttribute('href'); // The only valid content that could double as a selector are IDs or classes,
    // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
    // `document.querySelector` will rightfully complain it is invalid.
    // See https://github.com/twbs/bootstrap/issues/32273

    if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
      return null;
    } // Just in case some CMS puts out a full URL with the anchor appended


    if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
      hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
    }

    selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
  }

  return selector;
};

const getSelectorFromElement = element => {
  const selector = getSelector(element);

  if (selector) {
    return document.querySelector(selector) ? selector : null;
  }

  return null;
};

const getElementFromSelector = element => {
  const selector = getSelector(element);
  return selector ? document.querySelector(selector) : null;
};

const getTransitionDurationFromElement = element => {
  if (!element) {
    return 0;
  } // Get transition-duration of the element


  let {
    transitionDuration,
    transitionDelay
  } = window.getComputedStyle(element);
  const floatTransitionDuration = Number.parseFloat(transitionDuration);
  const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

  if (!floatTransitionDuration && !floatTransitionDelay) {
    return 0;
  } // If multiple durations are defined, take the first


  transitionDuration = transitionDuration.split(',')[0];
  transitionDelay = transitionDelay.split(',')[0];
  return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};

const triggerTransitionEnd = element => {
  element.dispatchEvent(new Event(TRANSITION_END));
};

const isElement = object => {
  if (!object || typeof object !== 'object') {
    return false;
  }

  if (typeof object.jquery !== 'undefined') {
    object = object[0];
  }

  return typeof object.nodeType !== 'undefined';
};

const getElement = object => {
  // it's a jQuery object or a node element
  if (isElement(object)) {
    return object.jquery ? object[0] : object;
  }

  if (typeof object === 'string' && object.length > 0) {
    return document.querySelector(object);
  }

  return null;
};

const isVisible = element => {
  if (!isElement(element) || element.getClientRects().length === 0) {
    return false;
  }

  const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible'; // Handle `details` element as its content may falsie appear visible when it is closed

  const closedDetails = element.closest('details:not([open])');

  if (!closedDetails) {
    return elementIsVisible;
  }

  if (closedDetails !== element) {
    const summary = element.closest('summary');

    if (summary && summary.parentNode !== closedDetails) {
      return false;
    }

    if (summary === null) {
      return false;
    }
  }

  return elementIsVisible;
};

const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }

  if (element.classList.contains('disabled')) {
    return true;
  }

  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }

  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

const findShadowRoot = element => {
  if (!document.documentElement.attachShadow) {
    return null;
  } // Can find the shadow root otherwise it'll return the document


  if (typeof element.getRootNode === 'function') {
    const root = element.getRootNode();
    return root instanceof ShadowRoot ? root : null;
  }

  if (element instanceof ShadowRoot) {
    return element;
  } // when we don't find a shadow root


  if (!element.parentNode) {
    return null;
  }

  return findShadowRoot(element.parentNode);
};

const noop = () => {};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */


const reflow = element => {
  element.offsetHeight; // eslint-disable-line no-unused-expressions
};

const getjQuery = () => {
  if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
    return window.jQuery;
  }

  return null;
};

const DOMContentLoadedCallbacks = [];

const onDOMContentLoaded = callback => {
  if (document.readyState === 'loading') {
    // add listener on the first call when the document is in loading state
    if (!DOMContentLoadedCallbacks.length) {
      document.addEventListener('DOMContentLoaded', () => {
        for (const callback of DOMContentLoadedCallbacks) {
          callback();
        }
      });
    }

    DOMContentLoadedCallbacks.push(callback);
  } else {
    callback();
  }
};

const isRTL = () => document.documentElement.dir === 'rtl';

const defineJQueryPlugin = plugin => {
  onDOMContentLoaded(() => {
    const $ = getjQuery();
    /* istanbul ignore if */

    if ($) {
      const name = plugin.NAME;
      const JQUERY_NO_CONFLICT = $.fn[name];
      $.fn[name] = plugin.jQueryInterface;
      $.fn[name].Constructor = plugin;

      $.fn[name].noConflict = () => {
        $.fn[name] = JQUERY_NO_CONFLICT;
        return plugin.jQueryInterface;
      };
    }
  });
};

const execute = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
  if (!waitForTransition) {
    execute(callback);
    return;
  }

  const durationPadding = 5;
  const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
  let called = false;

  const handler = ({
    target
  }) => {
    if (target !== transitionElement) {
      return;
    }

    called = true;
    transitionElement.removeEventListener(TRANSITION_END, handler);
    execute(callback);
  };

  transitionElement.addEventListener(TRANSITION_END, handler);
  setTimeout(() => {
    if (!called) {
      triggerTransitionEnd(transitionElement);
    }
  }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */


const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
  const listLength = list.length;
  let index = list.indexOf(activeElement); // if the element does not exist in the list return an element
  // depending on the direction and if cycle is allowed

  if (index === -1) {
    return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
  }

  index += shouldGetNext ? 1 : -1;

  if (isCycleAllowed) {
    index = (index + listLength) % listLength;
  }

  return list[Math.max(0, Math.min(index, listLength - 1))];
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {}; // Events storage

let uidEvent = 1;
const customEvents = {
  mouseenter: 'mouseover',
  mouseleave: 'mouseout'
};
const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);
/**
 * Private methods
 */

function makeEventUid(element, uid) {
  return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}

function getElementEvents(element) {
  const uid = makeEventUid(element);
  element.uidEvent = uid;
  eventRegistry[uid] = eventRegistry[uid] || {};
  return eventRegistry[uid];
}

function bootstrapHandler(element, fn) {
  return function handler(event) {
    hydrateObj(event, {
      delegateTarget: element
    });

    if (handler.oneOff) {
      EventHandler.off(element, event.type, fn);
    }

    return fn.apply(element, [event]);
  };
}

function bootstrapDelegationHandler(element, selector, fn) {
  return function handler(event) {
    const domElements = element.querySelectorAll(selector);

    for (let {
      target
    } = event; target && target !== this; target = target.parentNode) {
      for (const domElement of domElements) {
        if (domElement !== target) {
          continue;
        }

        hydrateObj(event, {
          delegateTarget: target
        });

        if (handler.oneOff) {
          EventHandler.off(element, event.type, selector, fn);
        }

        return fn.apply(target, [event]);
      }
    }
  };
}

function findHandler(events, callable, delegationSelector = null) {
  return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
}

function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
  const isDelegated = typeof handler === 'string'; // todo: tooltip passes `false` instead of selector, so we need to check

  const callable = isDelegated ? delegationFunction : handler || delegationFunction;
  let typeEvent = getTypeEvent(originalTypeEvent);

  if (!nativeEvents.has(typeEvent)) {
    typeEvent = originalTypeEvent;
  }

  return [isDelegated, callable, typeEvent];
}

function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
  if (typeof originalTypeEvent !== 'string' || !element) {
    return;
  }

  let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction); // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
  // this prevents the handler from being dispatched the same way as mouseover or mouseout does

  if (originalTypeEvent in customEvents) {
    const wrapFunction = fn => {
      return function (event) {
        if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
          return fn.call(this, event);
        }
      };
    };

    callable = wrapFunction(callable);
  }

  const events = getElementEvents(element);
  const handlers = events[typeEvent] || (events[typeEvent] = {});
  const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);

  if (previousFunction) {
    previousFunction.oneOff = previousFunction.oneOff && oneOff;
    return;
  }

  const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
  const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
  fn.delegationSelector = isDelegated ? handler : null;
  fn.callable = callable;
  fn.oneOff = oneOff;
  fn.uidEvent = uid;
  handlers[uid] = fn;
  element.addEventListener(typeEvent, fn, isDelegated);
}

function removeHandler(element, events, typeEvent, handler, delegationSelector) {
  const fn = findHandler(events[typeEvent], handler, delegationSelector);

  if (!fn) {
    return;
  }

  element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
  delete events[typeEvent][fn.uidEvent];
}

function removeNamespacedHandlers(element, events, typeEvent, namespace) {
  const storeElementEvent = events[typeEvent] || {};

  for (const handlerKey of Object.keys(storeElementEvent)) {
    if (handlerKey.includes(namespace)) {
      const event = storeElementEvent[handlerKey];
      removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
  }
}

function getTypeEvent(event) {
  // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
  event = event.replace(stripNameRegex, '');
  return customEvents[event] || event;
}

const EventHandler = {
  on(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, false);
  },

  one(element, event, handler, delegationFunction) {
    addHandler(element, event, handler, delegationFunction, true);
  },

  off(element, originalTypeEvent, handler, delegationFunction) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }

    const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    const inNamespace = typeEvent !== originalTypeEvent;
    const events = getElementEvents(element);
    const storeElementEvent = events[typeEvent] || {};
    const isNamespace = originalTypeEvent.startsWith('.');

    if (typeof callable !== 'undefined') {
      // Simplest case: handler is passed, remove that listener ONLY.
      if (!Object.keys(storeElementEvent).length) {
        return;
      }

      removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
      return;
    }

    if (isNamespace) {
      for (const elementEvent of Object.keys(events)) {
        removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
      }
    }

    for (const keyHandlers of Object.keys(storeElementEvent)) {
      const handlerKey = keyHandlers.replace(stripUidRegex, '');

      if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
        const event = storeElementEvent[keyHandlers];
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  },

  trigger(element, event, args) {
    if (typeof event !== 'string' || !element) {
      return null;
    }

    const $ = getjQuery();
    const typeEvent = getTypeEvent(event);
    const inNamespace = event !== typeEvent;
    let jQueryEvent = null;
    let bubbles = true;
    let nativeDispatch = true;
    let defaultPrevented = false;

    if (inNamespace && $) {
      jQueryEvent = $.Event(event, args);
      $(element).trigger(jQueryEvent);
      bubbles = !jQueryEvent.isPropagationStopped();
      nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
      defaultPrevented = jQueryEvent.isDefaultPrevented();
    }

    let evt = new Event(event, {
      bubbles,
      cancelable: true
    });
    evt = hydrateObj(evt, args);

    if (defaultPrevented) {
      evt.preventDefault();
    }

    if (nativeDispatch) {
      element.dispatchEvent(evt);
    }

    if (evt.defaultPrevented && jQueryEvent) {
      jQueryEvent.preventDefault();
    }

    return evt;
  }

};

function hydrateObj(obj, meta) {
  for (const [key, value] of Object.entries(meta || {})) {
    try {
      obj[key] = value;
    } catch (_unused) {
      Object.defineProperty(obj, key, {
        configurable: true,

        get() {
          return value;
        }

      });
    }
  }

  return obj;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

/**
 * Constants
 */
const elementMap = new Map();
const Data = {
  set(element, key, instance) {
    if (!elementMap.has(element)) {
      elementMap.set(element, new Map());
    }

    const instanceMap = elementMap.get(element); // make it clear we only want one instance per element
    // can be removed later when multiple key/instances are fine to be used

    if (!instanceMap.has(key) && instanceMap.size !== 0) {
      // eslint-disable-next-line no-console
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
      return;
    }

    instanceMap.set(key, instance);
  },

  get(element, key) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }

    return null;
  },

  remove(element, key) {
    if (!elementMap.has(element)) {
      return;
    }

    const instanceMap = elementMap.get(element);
    instanceMap.delete(key); // free up element references if there are no instances left for an element

    if (instanceMap.size === 0) {
      elementMap.delete(element);
    }
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
function normalizeData(value) {
  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  if (value === Number(value).toString()) {
    return Number(value);
  }

  if (value === '' || value === 'null') {
    return null;
  }

  if (typeof value !== 'string') {
    return value;
  }

  try {
    return JSON.parse(decodeURIComponent(value));
  } catch (_unused) {
    return value;
  }
}

function normalizeDataKey(key) {
  return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
}

const Manipulator = {
  setDataAttribute(element, key, value) {
    element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
  },

  removeDataAttribute(element, key) {
    element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
  },

  getDataAttributes(element) {
    if (!element) {
      return {};
    }

    const attributes = {};
    const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));

    for (const key of bsKeys) {
      let pureKey = key.replace(/^bs/, '');
      pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
      attributes[pureKey] = normalizeData(element.dataset[key]);
    }

    return attributes;
  },

  getDataAttribute(element, key) {
    return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Class definition
 */

class Config {
  // Getters
  static get Default() {
    return {};
  }

  static get DefaultType() {
    return {};
  }

  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  }

  _configAfterMerge(config) {
    return config;
  }

  _mergeConfigObj(config, element) {
    const jsonConfig = isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

    return { ...this.constructor.Default,
      ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
      ...(isElement(element) ? Manipulator.getDataAttributes(element) : {}),
      ...(typeof config === 'object' ? config : {})
    };
  }

  _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
    for (const property of Object.keys(configTypes)) {
      const expectedTypes = configTypes[property];
      const value = config[property];
      const valueType = isElement(value) ? 'element' : toType(value);

      if (!new RegExp(expectedTypes).test(valueType)) {
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
      }
    }
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const VERSION = '5.2.2';
/**
 * Class definition
 */

class BaseComponent extends Config {
  constructor(element, config) {
    super();
    element = getElement(element);

    if (!element) {
      return;
    }

    this._element = element;
    this._config = this._getConfig(config);
    Data.set(this._element, this.constructor.DATA_KEY, this);
  } // Public


  dispose() {
    Data.remove(this._element, this.constructor.DATA_KEY);
    EventHandler.off(this._element, this.constructor.EVENT_KEY);

    for (const propertyName of Object.getOwnPropertyNames(this)) {
      this[propertyName] = null;
    }
  }

  _queueCallback(callback, element, isAnimated = true) {
    executeAfterTransition(callback, element, isAnimated);
  }

  _getConfig(config) {
    config = this._mergeConfigObj(config, this._element);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  } // Static


  static getInstance(element) {
    return Data.get(getElement(element), this.DATA_KEY);
  }

  static getOrCreateInstance(element, config = {}) {
    return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
  }

  static get VERSION() {
    return VERSION;
  }

  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }

  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }

  static eventName(name) {
    return `${name}${this.EVENT_KEY}`;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/component-functions.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

const enableDismissTrigger = (component, method = 'hide') => {
  const clickEvent = `click.dismiss${component.EVENT_KEY}`;
  const name = component.NAME;
  EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }

    if (isDisabled(this)) {
      return;
    }

    const target = getElementFromSelector(this) || this.closest(`.${name}`);
    const instance = component.getOrCreateInstance(target); // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method

    instance[method]();
  });
};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$f = 'alert';
const DATA_KEY$a = 'bs.alert';
const EVENT_KEY$b = `.${DATA_KEY$a}`;
const EVENT_CLOSE = `close${EVENT_KEY$b}`;
const EVENT_CLOSED = `closed${EVENT_KEY$b}`;
const CLASS_NAME_FADE$5 = 'fade';
const CLASS_NAME_SHOW$8 = 'show';
/**
 * Class definition
 */

class Alert extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$f;
  } // Public


  close() {
    const closeEvent = EventHandler.trigger(this._element, EVENT_CLOSE);

    if (closeEvent.defaultPrevented) {
      return;
    }

    this._element.classList.remove(CLASS_NAME_SHOW$8);

    const isAnimated = this._element.classList.contains(CLASS_NAME_FADE$5);

    this._queueCallback(() => this._destroyElement(), this._element, isAnimated);
  } // Private


  _destroyElement() {
    this._element.remove();

    EventHandler.trigger(this._element, EVENT_CLOSED);
    this.dispose();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Alert.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * Data API implementation
 */


enableDismissTrigger(Alert, 'close');
/**
 * jQuery
 */

defineJQueryPlugin(Alert);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$e = 'button';
const DATA_KEY$9 = 'bs.button';
const EVENT_KEY$a = `.${DATA_KEY$9}`;
const DATA_API_KEY$6 = '.data-api';
const CLASS_NAME_ACTIVE$3 = 'active';
const SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]';
const EVENT_CLICK_DATA_API$6 = `click${EVENT_KEY$a}${DATA_API_KEY$6}`;
/**
 * Class definition
 */

class Button extends BaseComponent {
  // Getters
  static get NAME() {
    return NAME$e;
  } // Public


  toggle() {
    // Toggle class and sync the `aria-pressed` attribute with the return value of the `.toggle()` method
    this._element.setAttribute('aria-pressed', this._element.classList.toggle(CLASS_NAME_ACTIVE$3));
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Button.getOrCreateInstance(this);

      if (config === 'toggle') {
        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, event => {
  event.preventDefault();
  const button = event.target.closest(SELECTOR_DATA_TOGGLE$5);
  const data = Button.getOrCreateInstance(button);
  data.toggle();
});
/**
 * jQuery
 */

defineJQueryPlugin(Button);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const SelectorEngine = {
  find(selector, element = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
  },

  findOne(selector, element = document.documentElement) {
    return Element.prototype.querySelector.call(element, selector);
  },

  children(element, selector) {
    return [].concat(...element.children).filter(child => child.matches(selector));
  },

  parents(element, selector) {
    const parents = [];
    let ancestor = element.parentNode.closest(selector);

    while (ancestor) {
      parents.push(ancestor);
      ancestor = ancestor.parentNode.closest(selector);
    }

    return parents;
  },

  prev(element, selector) {
    let previous = element.previousElementSibling;

    while (previous) {
      if (previous.matches(selector)) {
        return [previous];
      }

      previous = previous.previousElementSibling;
    }

    return [];
  },

  // TODO: this is now unused; remove later along with prev()
  next(element, selector) {
    let next = element.nextElementSibling;

    while (next) {
      if (next.matches(selector)) {
        return [next];
      }

      next = next.nextElementSibling;
    }

    return [];
  },

  focusableChildren(element) {
    const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
    return this.find(focusables, element).filter(el => !isDisabled(el) && isVisible(el));
  }

};

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$d = 'swipe';
const EVENT_KEY$9 = '.bs.swipe';
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY$9}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY$9}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY$9}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY$9}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY$9}`;
const POINTER_TYPE_TOUCH = 'touch';
const POINTER_TYPE_PEN = 'pen';
const CLASS_NAME_POINTER_EVENT = 'pointer-event';
const SWIPE_THRESHOLD = 40;
const Default$c = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
};
const DefaultType$c = {
  endCallback: '(function|null)',
  leftCallback: '(function|null)',
  rightCallback: '(function|null)'
};
/**
 * Class definition
 */

class Swipe extends Config {
  constructor(element, config) {
    super();
    this._element = element;

    if (!element || !Swipe.isSupported()) {
      return;
    }

    this._config = this._getConfig(config);
    this._deltaX = 0;
    this._supportPointerEvents = Boolean(window.PointerEvent);

    this._initEvents();
  } // Getters


  static get Default() {
    return Default$c;
  }

  static get DefaultType() {
    return DefaultType$c;
  }

  static get NAME() {
    return NAME$d;
  } // Public


  dispose() {
    EventHandler.off(this._element, EVENT_KEY$9);
  } // Private


  _start(event) {
    if (!this._supportPointerEvents) {
      this._deltaX = event.touches[0].clientX;
      return;
    }

    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX;
    }
  }

  _end(event) {
    if (this._eventIsPointerPenTouch(event)) {
      this._deltaX = event.clientX - this._deltaX;
    }

    this._handleSwipe();

    execute(this._config.endCallback);
  }

  _move(event) {
    this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
  }

  _handleSwipe() {
    const absDeltaX = Math.abs(this._deltaX);

    if (absDeltaX <= SWIPE_THRESHOLD) {
      return;
    }

    const direction = absDeltaX / this._deltaX;
    this._deltaX = 0;

    if (!direction) {
      return;
    }

    execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
  }

  _initEvents() {
    if (this._supportPointerEvents) {
      EventHandler.on(this._element, EVENT_POINTERDOWN, event => this._start(event));
      EventHandler.on(this._element, EVENT_POINTERUP, event => this._end(event));

      this._element.classList.add(CLASS_NAME_POINTER_EVENT);
    } else {
      EventHandler.on(this._element, EVENT_TOUCHSTART, event => this._start(event));
      EventHandler.on(this._element, EVENT_TOUCHMOVE, event => this._move(event));
      EventHandler.on(this._element, EVENT_TOUCHEND, event => this._end(event));
    }
  }

  _eventIsPointerPenTouch(event) {
    return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
  } // Static


  static isSupported() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$c = 'carousel';
const DATA_KEY$8 = 'bs.carousel';
const EVENT_KEY$8 = `.${DATA_KEY$8}`;
const DATA_API_KEY$5 = '.data-api';
const ARROW_LEFT_KEY$1 = 'ArrowLeft';
const ARROW_RIGHT_KEY$1 = 'ArrowRight';
const TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

const ORDER_NEXT = 'next';
const ORDER_PREV = 'prev';
const DIRECTION_LEFT = 'left';
const DIRECTION_RIGHT = 'right';
const EVENT_SLIDE = `slide${EVENT_KEY$8}`;
const EVENT_SLID = `slid${EVENT_KEY$8}`;
const EVENT_KEYDOWN$1 = `keydown${EVENT_KEY$8}`;
const EVENT_MOUSEENTER$1 = `mouseenter${EVENT_KEY$8}`;
const EVENT_MOUSELEAVE$1 = `mouseleave${EVENT_KEY$8}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY$8}`;
const EVENT_LOAD_DATA_API$3 = `load${EVENT_KEY$8}${DATA_API_KEY$5}`;
const EVENT_CLICK_DATA_API$5 = `click${EVENT_KEY$8}${DATA_API_KEY$5}`;
const CLASS_NAME_CAROUSEL = 'carousel';
const CLASS_NAME_ACTIVE$2 = 'active';
const CLASS_NAME_SLIDE = 'slide';
const CLASS_NAME_END = 'carousel-item-end';
const CLASS_NAME_START = 'carousel-item-start';
const CLASS_NAME_NEXT = 'carousel-item-next';
const CLASS_NAME_PREV = 'carousel-item-prev';
const SELECTOR_ACTIVE = '.active';
const SELECTOR_ITEM = '.carousel-item';
const SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
const SELECTOR_ITEM_IMG = '.carousel-item img';
const SELECTOR_INDICATORS = '.carousel-indicators';
const SELECTOR_DATA_SLIDE = '[data-bs-slide], [data-bs-slide-to]';
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const KEY_TO_DIRECTION = {
  [ARROW_LEFT_KEY$1]: DIRECTION_RIGHT,
  [ARROW_RIGHT_KEY$1]: DIRECTION_LEFT
};
const Default$b = {
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  ride: false,
  touch: true,
  wrap: true
};
const DefaultType$b = {
  interval: '(number|boolean)',
  // TODO:v6 remove boolean support
  keyboard: 'boolean',
  pause: '(string|boolean)',
  ride: '(boolean|string)',
  touch: 'boolean',
  wrap: 'boolean'
};
/**
 * Class definition
 */

class Carousel extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._interval = null;
    this._activeElement = null;
    this._isSliding = false;
    this.touchTimeout = null;
    this._swipeHelper = null;
    this._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, this._element);

    this._addEventListeners();

    if (this._config.ride === CLASS_NAME_CAROUSEL) {
      this.cycle();
    }
  } // Getters


  static get Default() {
    return Default$b;
  }

  static get DefaultType() {
    return DefaultType$b;
  }

  static get NAME() {
    return NAME$c;
  } // Public


  next() {
    this._slide(ORDER_NEXT);
  }

  nextWhenVisible() {
    // FIXME TODO use `document.visibilityState`
    // Don't call next when the page isn't visible
    // or the carousel or its parent isn't visible
    if (!document.hidden && isVisible(this._element)) {
      this.next();
    }
  }

  prev() {
    this._slide(ORDER_PREV);
  }

  pause() {
    if (this._isSliding) {
      triggerTransitionEnd(this._element);
    }

    this._clearInterval();
  }

  cycle() {
    this._clearInterval();

    this._updateInterval();

    this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }

  _maybeEnableCycle() {
    if (!this._config.ride) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.cycle());
      return;
    }

    this.cycle();
  }

  to(index) {
    const items = this._getItems();

    if (index > items.length - 1 || index < 0) {
      return;
    }

    if (this._isSliding) {
      EventHandler.one(this._element, EVENT_SLID, () => this.to(index));
      return;
    }

    const activeIndex = this._getItemIndex(this._getActive());

    if (activeIndex === index) {
      return;
    }

    const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;

    this._slide(order, items[index]);
  }

  dispose() {
    if (this._swipeHelper) {
      this._swipeHelper.dispose();
    }

    super.dispose();
  } // Private


  _configAfterMerge(config) {
    config.defaultInterval = config.interval;
    return config;
  }

  _addEventListeners() {
    if (this._config.keyboard) {
      EventHandler.on(this._element, EVENT_KEYDOWN$1, event => this._keydown(event));
    }

    if (this._config.pause === 'hover') {
      EventHandler.on(this._element, EVENT_MOUSEENTER$1, () => this.pause());
      EventHandler.on(this._element, EVENT_MOUSELEAVE$1, () => this._maybeEnableCycle());
    }

    if (this._config.touch && Swipe.isSupported()) {
      this._addTouchEventListeners();
    }
  }

  _addTouchEventListeners() {
    for (const img of SelectorEngine.find(SELECTOR_ITEM_IMG, this._element)) {
      EventHandler.on(img, EVENT_DRAG_START, event => event.preventDefault());
    }

    const endCallBack = () => {
      if (this._config.pause !== 'hover') {
        return;
      } // If it's a touch-enabled device, mouseenter/leave are fired as
      // part of the mouse compatibility events on first tap - the carousel
      // would stop cycling until user tapped out of it;
      // here, we listen for touchend, explicitly pause the carousel
      // (as if it's the second time we tap on it, mouseenter compat event
      // is NOT fired) and after a timeout (to allow for mouse compatibility
      // events to fire) we explicitly restart cycling


      this.pause();

      if (this.touchTimeout) {
        clearTimeout(this.touchTimeout);
      }

      this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
    };

    const swipeConfig = {
      leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
      rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
      endCallback: endCallBack
    };
    this._swipeHelper = new Swipe(this._element, swipeConfig);
  }

  _keydown(event) {
    if (/input|textarea/i.test(event.target.tagName)) {
      return;
    }

    const direction = KEY_TO_DIRECTION[event.key];

    if (direction) {
      event.preventDefault();

      this._slide(this._directionToOrder(direction));
    }
  }

  _getItemIndex(element) {
    return this._getItems().indexOf(element);
  }

  _setActiveIndicatorElement(index) {
    if (!this._indicatorsElement) {
      return;
    }

    const activeIndicator = SelectorEngine.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
    activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);
    activeIndicator.removeAttribute('aria-current');
    const newActiveIndicator = SelectorEngine.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);

    if (newActiveIndicator) {
      newActiveIndicator.classList.add(CLASS_NAME_ACTIVE$2);
      newActiveIndicator.setAttribute('aria-current', 'true');
    }
  }

  _updateInterval() {
    const element = this._activeElement || this._getActive();

    if (!element) {
      return;
    }

    const elementInterval = Number.parseInt(element.getAttribute('data-bs-interval'), 10);
    this._config.interval = elementInterval || this._config.defaultInterval;
  }

  _slide(order, element = null) {
    if (this._isSliding) {
      return;
    }

    const activeElement = this._getActive();

    const isNext = order === ORDER_NEXT;
    const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);

    if (nextElement === activeElement) {
      return;
    }

    const nextElementIndex = this._getItemIndex(nextElement);

    const triggerEvent = eventName => {
      return EventHandler.trigger(this._element, eventName, {
        relatedTarget: nextElement,
        direction: this._orderToDirection(order),
        from: this._getItemIndex(activeElement),
        to: nextElementIndex
      });
    };

    const slideEvent = triggerEvent(EVENT_SLIDE);

    if (slideEvent.defaultPrevented) {
      return;
    }

    if (!activeElement || !nextElement) {
      // Some weirdness is happening, so we bail
      // todo: change tests that use empty divs to avoid this check
      return;
    }

    const isCycling = Boolean(this._interval);
    this.pause();
    this._isSliding = true;

    this._setActiveIndicatorElement(nextElementIndex);

    this._activeElement = nextElement;
    const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
    const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
    nextElement.classList.add(orderClassName);
    reflow(nextElement);
    activeElement.classList.add(directionalClassName);
    nextElement.classList.add(directionalClassName);

    const completeCallBack = () => {
      nextElement.classList.remove(directionalClassName, orderClassName);
      nextElement.classList.add(CLASS_NAME_ACTIVE$2);
      activeElement.classList.remove(CLASS_NAME_ACTIVE$2, orderClassName, directionalClassName);
      this._isSliding = false;
      triggerEvent(EVENT_SLID);
    };

    this._queueCallback(completeCallBack, activeElement, this._isAnimated());

    if (isCycling) {
      this.cycle();
    }
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_SLIDE);
  }

  _getActive() {
    return SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
  }

  _getItems() {
    return SelectorEngine.find(SELECTOR_ITEM, this._element);
  }

  _clearInterval() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  _directionToOrder(direction) {
    if (isRTL()) {
      return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
    }

    return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
  }

  _orderToDirection(order) {
    if (isRTL()) {
      return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }

    return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Carousel.getOrCreateInstance(this, config);

      if (typeof config === 'number') {
        data.to(config);
        return;
      }

      if (typeof config === 'string') {
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, function (event) {
  const target = getElementFromSelector(this);

  if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
    return;
  }

  event.preventDefault();
  const carousel = Carousel.getOrCreateInstance(target);
  const slideIndex = this.getAttribute('data-bs-slide-to');

  if (slideIndex) {
    carousel.to(slideIndex);

    carousel._maybeEnableCycle();

    return;
  }

  if (Manipulator.getDataAttribute(this, 'slide') === 'next') {
    carousel.next();

    carousel._maybeEnableCycle();

    return;
  }

  carousel.prev();

  carousel._maybeEnableCycle();
});
EventHandler.on(window, EVENT_LOAD_DATA_API$3, () => {
  const carousels = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (const carousel of carousels) {
    Carousel.getOrCreateInstance(carousel);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Carousel);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$b = 'collapse';
const DATA_KEY$7 = 'bs.collapse';
const EVENT_KEY$7 = `.${DATA_KEY$7}`;
const DATA_API_KEY$4 = '.data-api';
const EVENT_SHOW$6 = `show${EVENT_KEY$7}`;
const EVENT_SHOWN$6 = `shown${EVENT_KEY$7}`;
const EVENT_HIDE$6 = `hide${EVENT_KEY$7}`;
const EVENT_HIDDEN$6 = `hidden${EVENT_KEY$7}`;
const EVENT_CLICK_DATA_API$4 = `click${EVENT_KEY$7}${DATA_API_KEY$4}`;
const CLASS_NAME_SHOW$7 = 'show';
const CLASS_NAME_COLLAPSE = 'collapse';
const CLASS_NAME_COLLAPSING = 'collapsing';
const CLASS_NAME_COLLAPSED = 'collapsed';
const CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
const CLASS_NAME_HORIZONTAL = 'collapse-horizontal';
const WIDTH = 'width';
const HEIGHT = 'height';
const SELECTOR_ACTIVES = '.collapse.show, .collapse.collapsing';
const SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';
const Default$a = {
  parent: null,
  toggle: true
};
const DefaultType$a = {
  parent: '(null|element)',
  toggle: 'boolean'
};
/**
 * Class definition
 */

class Collapse extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isTransitioning = false;
    this._triggerArray = [];
    const toggleList = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (const elem of toggleList) {
      const selector = getSelectorFromElement(elem);
      const filterElement = SelectorEngine.find(selector).filter(foundElement => foundElement === this._element);

      if (selector !== null && filterElement.length) {
        this._triggerArray.push(elem);
      }
    }

    this._initializeChildren();

    if (!this._config.parent) {
      this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
    }

    if (this._config.toggle) {
      this.toggle();
    }
  } // Getters


  static get Default() {
    return Default$a;
  }

  static get DefaultType() {
    return DefaultType$a;
  }

  static get NAME() {
    return NAME$b;
  } // Public


  toggle() {
    if (this._isShown()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    if (this._isTransitioning || this._isShown()) {
      return;
    }

    let activeChildren = []; // find active children

    if (this._config.parent) {
      activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter(element => element !== this._element).map(element => Collapse.getOrCreateInstance(element, {
        toggle: false
      }));
    }

    if (activeChildren.length && activeChildren[0]._isTransitioning) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_SHOW$6);

    if (startEvent.defaultPrevented) {
      return;
    }

    for (const activeInstance of activeChildren) {
      activeInstance.hide();
    }

    const dimension = this._getDimension();

    this._element.classList.remove(CLASS_NAME_COLLAPSE);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.style[dimension] = 0;

    this._addAriaAndCollapsedClass(this._triggerArray, true);

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

      this._element.style[dimension] = '';
      EventHandler.trigger(this._element, EVENT_SHOWN$6);
    };

    const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
    const scrollSize = `scroll${capitalizedDimension}`;

    this._queueCallback(complete, this._element, true);

    this._element.style[dimension] = `${this._element[scrollSize]}px`;
  }

  hide() {
    if (this._isTransitioning || !this._isShown()) {
      return;
    }

    const startEvent = EventHandler.trigger(this._element, EVENT_HIDE$6);

    if (startEvent.defaultPrevented) {
      return;
    }

    const dimension = this._getDimension();

    this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
    reflow(this._element);

    this._element.classList.add(CLASS_NAME_COLLAPSING);

    this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW$7);

    for (const trigger of this._triggerArray) {
      const element = getElementFromSelector(trigger);

      if (element && !this._isShown(element)) {
        this._addAriaAndCollapsedClass([trigger], false);
      }
    }

    this._isTransitioning = true;

    const complete = () => {
      this._isTransitioning = false;

      this._element.classList.remove(CLASS_NAME_COLLAPSING);

      this._element.classList.add(CLASS_NAME_COLLAPSE);

      EventHandler.trigger(this._element, EVENT_HIDDEN$6);
    };

    this._element.style[dimension] = '';

    this._queueCallback(complete, this._element, true);
  }

  _isShown(element = this._element) {
    return element.classList.contains(CLASS_NAME_SHOW$7);
  } // Private


  _configAfterMerge(config) {
    config.toggle = Boolean(config.toggle); // Coerce string values

    config.parent = getElement(config.parent);
    return config;
  }

  _getDimension() {
    return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
  }

  _initializeChildren() {
    if (!this._config.parent) {
      return;
    }

    const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE$4);

    for (const element of children) {
      const selected = getElementFromSelector(element);

      if (selected) {
        this._addAriaAndCollapsedClass([element], this._isShown(selected));
      }
    }
  }

  _getFirstLevelChildren(selector) {
    const children = SelectorEngine.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent); // remove children if greater depth

    return SelectorEngine.find(selector, this._config.parent).filter(element => !children.includes(element));
  }

  _addAriaAndCollapsedClass(triggerArray, isOpen) {
    if (!triggerArray.length) {
      return;
    }

    for (const element of triggerArray) {
      element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
      element.setAttribute('aria-expanded', isOpen);
    }
  } // Static


  static jQueryInterface(config) {
    const _config = {};

    if (typeof config === 'string' && /show|hide/.test(config)) {
      _config.toggle = false;
    }

    return this.each(function () {
      const data = Collapse.getOrCreateInstance(this, _config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config]();
      }
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (event) {
  // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
  if (event.target.tagName === 'A' || event.delegateTarget && event.delegateTarget.tagName === 'A') {
    event.preventDefault();
  }

  const selector = getSelectorFromElement(this);
  const selectorElements = SelectorEngine.find(selector);

  for (const element of selectorElements) {
    Collapse.getOrCreateInstance(element, {
      toggle: false
    }).toggle();
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Collapse);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$a = 'dropdown';
const DATA_KEY$6 = 'bs.dropdown';
const EVENT_KEY$6 = `.${DATA_KEY$6}`;
const DATA_API_KEY$3 = '.data-api';
const ESCAPE_KEY$2 = 'Escape';
const TAB_KEY$1 = 'Tab';
const ARROW_UP_KEY$1 = 'ArrowUp';
const ARROW_DOWN_KEY$1 = 'ArrowDown';
const RIGHT_MOUSE_BUTTON = 2; // MouseEvent.button value for the secondary button, usually the right button

const EVENT_HIDE$5 = `hide${EVENT_KEY$6}`;
const EVENT_HIDDEN$5 = `hidden${EVENT_KEY$6}`;
const EVENT_SHOW$5 = `show${EVENT_KEY$6}`;
const EVENT_SHOWN$5 = `shown${EVENT_KEY$6}`;
const EVENT_CLICK_DATA_API$3 = `click${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY$6}${DATA_API_KEY$3}`;
const EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY$6}${DATA_API_KEY$3}`;
const CLASS_NAME_SHOW$6 = 'show';
const CLASS_NAME_DROPUP = 'dropup';
const CLASS_NAME_DROPEND = 'dropend';
const CLASS_NAME_DROPSTART = 'dropstart';
const CLASS_NAME_DROPUP_CENTER = 'dropup-center';
const CLASS_NAME_DROPDOWN_CENTER = 'dropdown-center';
const SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE$3}.${CLASS_NAME_SHOW$6}`;
const SELECTOR_MENU = '.dropdown-menu';
const SELECTOR_NAVBAR = '.navbar';
const SELECTOR_NAVBAR_NAV = '.navbar-nav';
const SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
const PLACEMENT_TOP = isRTL() ? 'top-end' : 'top-start';
const PLACEMENT_TOPEND = isRTL() ? 'top-start' : 'top-end';
const PLACEMENT_BOTTOM = isRTL() ? 'bottom-end' : 'bottom-start';
const PLACEMENT_BOTTOMEND = isRTL() ? 'bottom-start' : 'bottom-end';
const PLACEMENT_RIGHT = isRTL() ? 'left-start' : 'right-start';
const PLACEMENT_LEFT = isRTL() ? 'right-start' : 'left-start';
const PLACEMENT_TOPCENTER = 'top';
const PLACEMENT_BOTTOMCENTER = 'bottom';
const Default$9 = {
  autoClose: true,
  boundary: 'clippingParents',
  display: 'dynamic',
  offset: [0, 2],
  popperConfig: null,
  reference: 'toggle'
};
const DefaultType$9 = {
  autoClose: '(boolean|string)',
  boundary: '(string|element)',
  display: 'string',
  offset: '(array|string|function)',
  popperConfig: '(null|object|function)',
  reference: '(string|element|object)'
};
/**
 * Class definition
 */

class Dropdown extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._popper = null;
    this._parent = this._element.parentNode; // dropdown wrapper
    // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

    this._menu = SelectorEngine.next(this._element, SELECTOR_MENU)[0] || SelectorEngine.prev(this._element, SELECTOR_MENU)[0] || SelectorEngine.findOne(SELECTOR_MENU, this._parent);
    this._inNavbar = this._detectNavbar();
  } // Getters


  static get Default() {
    return Default$9;
  }

  static get DefaultType() {
    return DefaultType$9;
  }

  static get NAME() {
    return NAME$a;
  } // Public


  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }

  show() {
    if (isDisabled(this._element) || this._isShown()) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$5, relatedTarget);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._createPopper(); // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


    if ('ontouchstart' in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }

    this._element.focus();

    this._element.setAttribute('aria-expanded', true);

    this._menu.classList.add(CLASS_NAME_SHOW$6);

    this._element.classList.add(CLASS_NAME_SHOW$6);

    EventHandler.trigger(this._element, EVENT_SHOWN$5, relatedTarget);
  }

  hide() {
    if (isDisabled(this._element) || !this._isShown()) {
      return;
    }

    const relatedTarget = {
      relatedTarget: this._element
    };

    this._completeHide(relatedTarget);
  }

  dispose() {
    if (this._popper) {
      this._popper.destroy();
    }

    super.dispose();
  }

  update() {
    this._inNavbar = this._detectNavbar();

    if (this._popper) {
      this._popper.update();
    }
  } // Private


  _completeHide(relatedTarget) {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$5, relatedTarget);

    if (hideEvent.defaultPrevented) {
      return;
    } // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support


    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }

    if (this._popper) {
      this._popper.destroy();
    }

    this._menu.classList.remove(CLASS_NAME_SHOW$6);

    this._element.classList.remove(CLASS_NAME_SHOW$6);

    this._element.setAttribute('aria-expanded', 'false');

    Manipulator.removeDataAttribute(this._menu, 'popper');
    EventHandler.trigger(this._element, EVENT_HIDDEN$5, relatedTarget);
  }

  _getConfig(config) {
    config = super._getConfig(config);

    if (typeof config.reference === 'object' && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== 'function') {
      // Popper virtual elements require a getBoundingClientRect method
      throw new TypeError(`${NAME$a.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    }

    return config;
  }

  _createPopper() {
    if (typeof Popper === 'undefined') {
      throw new TypeError('Bootstrap\'s dropdowns require Popper (https://popper.js.org)');
    }

    let referenceElement = this._element;

    if (this._config.reference === 'parent') {
      referenceElement = this._parent;
    } else if (isElement(this._config.reference)) {
      referenceElement = getElement(this._config.reference);
    } else if (typeof this._config.reference === 'object') {
      referenceElement = this._config.reference;
    }

    const popperConfig = this._getPopperConfig();

    this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
  }

  _isShown() {
    return this._menu.classList.contains(CLASS_NAME_SHOW$6);
  }

  _getPlacement() {
    const parentDropdown = this._parent;

    if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
      return PLACEMENT_RIGHT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
      return PLACEMENT_LEFT;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
      return PLACEMENT_TOPCENTER;
    }

    if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
      return PLACEMENT_BOTTOMCENTER;
    } // We need to trim the value because custom properties can also include spaces


    const isEnd = getComputedStyle(this._menu).getPropertyValue('--bs-position').trim() === 'end';

    if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
      return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
    }

    return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
  }

  _detectNavbar() {
    return this._element.closest(SELECTOR_NAVBAR) !== null;
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _getPopperConfig() {
    const defaultBsPopperConfig = {
      placement: this._getPlacement(),
      modifiers: [{
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }]
    }; // Disable Popper if we have a static display or Dropdown is in Navbar

    if (this._inNavbar || this._config.display === 'static') {
      Manipulator.setDataAttribute(this._menu, 'popper', 'static'); // todo:v6 remove

      defaultBsPopperConfig.modifiers = [{
        name: 'applyStyles',
        enabled: false
      }];
    }

    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _selectMenuItem({
    key,
    target
  }) {
    const items = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(element => isVisible(element));

    if (!items.length) {
      return;
    } // if target isn't included in items (e.g. when expanding the dropdown)
    // allow cycling to get the last item in case key equals ARROW_UP_KEY


    getNextActiveElement(items, target, key === ARROW_DOWN_KEY$1, !items.includes(target)).focus();
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Dropdown.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

  static clearMenus(event) {
    if (event.button === RIGHT_MOUSE_BUTTON || event.type === 'keyup' && event.key !== TAB_KEY$1) {
      return;
    }

    const openToggles = SelectorEngine.find(SELECTOR_DATA_TOGGLE_SHOWN);

    for (const toggle of openToggles) {
      const context = Dropdown.getInstance(toggle);

      if (!context || context._config.autoClose === false) {
        continue;
      }

      const composedPath = event.composedPath();
      const isMenuTarget = composedPath.includes(context._menu);

      if (composedPath.includes(context._element) || context._config.autoClose === 'inside' && !isMenuTarget || context._config.autoClose === 'outside' && isMenuTarget) {
        continue;
      } // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu


      if (context._menu.contains(event.target) && (event.type === 'keyup' && event.key === TAB_KEY$1 || /input|select|option|textarea|form/i.test(event.target.tagName))) {
        continue;
      }

      const relatedTarget = {
        relatedTarget: context._element
      };

      if (event.type === 'click') {
        relatedTarget.clickEvent = event;
      }

      context._completeHide(relatedTarget);
    }
  }

  static dataApiKeydownHandler(event) {
    // If not an UP | DOWN | ESCAPE key => not a dropdown command
    // If input/textarea && if key is other than ESCAPE => not a dropdown command
    const isInput = /input|textarea/i.test(event.target.tagName);
    const isEscapeEvent = event.key === ESCAPE_KEY$2;
    const isUpOrDownEvent = [ARROW_UP_KEY$1, ARROW_DOWN_KEY$1].includes(event.key);

    if (!isUpOrDownEvent && !isEscapeEvent) {
      return;
    }

    if (isInput && !isEscapeEvent) {
      return;
    }

    event.preventDefault(); // todo: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.2/forms/input-group/

    const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE$3) ? this : SelectorEngine.prev(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.next(this, SELECTOR_DATA_TOGGLE$3)[0] || SelectorEngine.findOne(SELECTOR_DATA_TOGGLE$3, event.delegateTarget.parentNode);
    const instance = Dropdown.getOrCreateInstance(getToggleButton);

    if (isUpOrDownEvent) {
      event.stopPropagation();
      instance.show();

      instance._selectMenuItem(event);

      return;
    }

    if (instance._isShown()) {
      // else is escape and we check if it is shown
      event.stopPropagation();
      instance.hide();
      getToggleButton.focus();
    }
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus);
EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (event) {
  event.preventDefault();
  Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */

defineJQueryPlugin(Dropdown);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/scrollBar.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
const SELECTOR_STICKY_CONTENT = '.sticky-top';
const PROPERTY_PADDING = 'padding-right';
const PROPERTY_MARGIN = 'margin-right';
/**
 * Class definition
 */

class ScrollBarHelper {
  constructor() {
    this._element = document.body;
  } // Public


  getWidth() {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
    const documentWidth = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - documentWidth);
  }

  hide() {
    const width = this.getWidth();

    this._disableOverFlow(); // give padding to element to balance the hidden scrollbar width


    this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width); // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth


    this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);

    this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
  }

  reset() {
    this._resetElementAttributes(this._element, 'overflow');

    this._resetElementAttributes(this._element, PROPERTY_PADDING);

    this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);

    this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
  }

  isOverflowing() {
    return this.getWidth() > 0;
  } // Private


  _disableOverFlow() {
    this._saveInitialAttribute(this._element, 'overflow');

    this._element.style.overflow = 'hidden';
  }

  _setElementAttributes(selector, styleProperty, callback) {
    const scrollbarWidth = this.getWidth();

    const manipulationCallBack = element => {
      if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
        return;
      }

      this._saveInitialAttribute(element, styleProperty);

      const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
      element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _saveInitialAttribute(element, styleProperty) {
    const actualValue = element.style.getPropertyValue(styleProperty);

    if (actualValue) {
      Manipulator.setDataAttribute(element, styleProperty, actualValue);
    }
  }

  _resetElementAttributes(selector, styleProperty) {
    const manipulationCallBack = element => {
      const value = Manipulator.getDataAttribute(element, styleProperty); // We only want to remove the property if the value is `null`; the value can also be zero

      if (value === null) {
        element.style.removeProperty(styleProperty);
        return;
      }

      Manipulator.removeDataAttribute(element, styleProperty);
      element.style.setProperty(styleProperty, value);
    };

    this._applyManipulationCallback(selector, manipulationCallBack);
  }

  _applyManipulationCallback(selector, callBack) {
    if (isElement(selector)) {
      callBack(selector);
      return;
    }

    for (const sel of SelectorEngine.find(selector, this._element)) {
      callBack(sel);
    }
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/backdrop.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$9 = 'backdrop';
const CLASS_NAME_FADE$4 = 'fade';
const CLASS_NAME_SHOW$5 = 'show';
const EVENT_MOUSEDOWN = `mousedown.bs.${NAME$9}`;
const Default$8 = {
  className: 'modal-backdrop',
  clickCallback: null,
  isAnimated: false,
  isVisible: true,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: 'body' // give the choice to place backdrop under different elements

};
const DefaultType$8 = {
  className: 'string',
  clickCallback: '(function|null)',
  isAnimated: 'boolean',
  isVisible: 'boolean',
  rootElement: '(element|string)'
};
/**
 * Class definition
 */

class Backdrop extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isAppended = false;
    this._element = null;
  } // Getters


  static get Default() {
    return Default$8;
  }

  static get DefaultType() {
    return DefaultType$8;
  }

  static get NAME() {
    return NAME$9;
  } // Public


  show(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._append();

    const element = this._getElement();

    if (this._config.isAnimated) {
      reflow(element);
    }

    element.classList.add(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      execute(callback);
    });
  }

  hide(callback) {
    if (!this._config.isVisible) {
      execute(callback);
      return;
    }

    this._getElement().classList.remove(CLASS_NAME_SHOW$5);

    this._emulateAnimation(() => {
      this.dispose();
      execute(callback);
    });
  }

  dispose() {
    if (!this._isAppended) {
      return;
    }

    EventHandler.off(this._element, EVENT_MOUSEDOWN);

    this._element.remove();

    this._isAppended = false;
  } // Private


  _getElement() {
    if (!this._element) {
      const backdrop = document.createElement('div');
      backdrop.className = this._config.className;

      if (this._config.isAnimated) {
        backdrop.classList.add(CLASS_NAME_FADE$4);
      }

      this._element = backdrop;
    }

    return this._element;
  }

  _configAfterMerge(config) {
    // use getElement() with the default "body" to get a fresh Element on each instantiation
    config.rootElement = getElement(config.rootElement);
    return config;
  }

  _append() {
    if (this._isAppended) {
      return;
    }

    const element = this._getElement();

    this._config.rootElement.append(element);

    EventHandler.on(element, EVENT_MOUSEDOWN, () => {
      execute(this._config.clickCallback);
    });
    this._isAppended = true;
  }

  _emulateAnimation(callback) {
    executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/focustrap.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$8 = 'focustrap';
const DATA_KEY$5 = 'bs.focustrap';
const EVENT_KEY$5 = `.${DATA_KEY$5}`;
const EVENT_FOCUSIN$2 = `focusin${EVENT_KEY$5}`;
const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY$5}`;
const TAB_KEY = 'Tab';
const TAB_NAV_FORWARD = 'forward';
const TAB_NAV_BACKWARD = 'backward';
const Default$7 = {
  autofocus: true,
  trapElement: null // The element to trap focus inside of

};
const DefaultType$7 = {
  autofocus: 'boolean',
  trapElement: 'element'
};
/**
 * Class definition
 */

class FocusTrap extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
    this._isActive = false;
    this._lastTabNavDirection = null;
  } // Getters


  static get Default() {
    return Default$7;
  }

  static get DefaultType() {
    return DefaultType$7;
  }

  static get NAME() {
    return NAME$8;
  } // Public


  activate() {
    if (this._isActive) {
      return;
    }

    if (this._config.autofocus) {
      this._config.trapElement.focus();
    }

    EventHandler.off(document, EVENT_KEY$5); // guard against infinite focus loop

    EventHandler.on(document, EVENT_FOCUSIN$2, event => this._handleFocusin(event));
    EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
    this._isActive = true;
  }

  deactivate() {
    if (!this._isActive) {
      return;
    }

    this._isActive = false;
    EventHandler.off(document, EVENT_KEY$5);
  } // Private


  _handleFocusin(event) {
    const {
      trapElement
    } = this._config;

    if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
      return;
    }

    const elements = SelectorEngine.focusableChildren(trapElement);

    if (elements.length === 0) {
      trapElement.focus();
    } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
      elements[elements.length - 1].focus();
    } else {
      elements[0].focus();
    }
  }

  _handleKeydown(event) {
    if (event.key !== TAB_KEY) {
      return;
    }

    this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$7 = 'modal';
const DATA_KEY$4 = 'bs.modal';
const EVENT_KEY$4 = `.${DATA_KEY$4}`;
const DATA_API_KEY$2 = '.data-api';
const ESCAPE_KEY$1 = 'Escape';
const EVENT_HIDE$4 = `hide${EVENT_KEY$4}`;
const EVENT_HIDE_PREVENTED$1 = `hidePrevented${EVENT_KEY$4}`;
const EVENT_HIDDEN$4 = `hidden${EVENT_KEY$4}`;
const EVENT_SHOW$4 = `show${EVENT_KEY$4}`;
const EVENT_SHOWN$4 = `shown${EVENT_KEY$4}`;
const EVENT_RESIZE$1 = `resize${EVENT_KEY$4}`;
const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY$4}`;
const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY$4}`;
const EVENT_KEYDOWN_DISMISS$1 = `keydown.dismiss${EVENT_KEY$4}`;
const EVENT_CLICK_DATA_API$2 = `click${EVENT_KEY$4}${DATA_API_KEY$2}`;
const CLASS_NAME_OPEN = 'modal-open';
const CLASS_NAME_FADE$3 = 'fade';
const CLASS_NAME_SHOW$4 = 'show';
const CLASS_NAME_STATIC = 'modal-static';
const OPEN_SELECTOR$1 = '.modal.show';
const SELECTOR_DIALOG = '.modal-dialog';
const SELECTOR_MODAL_BODY = '.modal-body';
const SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]';
const Default$6 = {
  backdrop: true,
  focus: true,
  keyboard: true
};
const DefaultType$6 = {
  backdrop: '(boolean|string)',
  focus: 'boolean',
  keyboard: 'boolean'
};
/**
 * Class definition
 */

class Modal extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();
    this._isShown = false;
    this._isTransitioning = false;
    this._scrollBar = new ScrollBarHelper();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$6;
  }

  static get DefaultType() {
    return DefaultType$6;
  }

  static get NAME() {
    return NAME$7;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown || this._isTransitioning) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$4, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;
    this._isTransitioning = true;

    this._scrollBar.hide();

    document.body.classList.add(CLASS_NAME_OPEN);

    this._adjustDialog();

    this._backdrop.show(() => this._showElement(relatedTarget));
  }

  hide() {
    if (!this._isShown || this._isTransitioning) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$4);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._isShown = false;
    this._isTransitioning = true;

    this._focustrap.deactivate();

    this._element.classList.remove(CLASS_NAME_SHOW$4);

    this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
  }

  dispose() {
    for (const htmlElement of [window, this._dialog]) {
      EventHandler.off(htmlElement, EVENT_KEY$4);
    }

    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  }

  handleUpdate() {
    this._adjustDialog();
  } // Private


  _initializeBackDrop() {
    return new Backdrop({
      isVisible: Boolean(this._config.backdrop),
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }

  _showElement(relatedTarget) {
    // try to append dynamic modal
    if (!document.body.contains(this._element)) {
      document.body.append(this._element);
    }

    this._element.style.display = 'block';

    this._element.removeAttribute('aria-hidden');

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.scrollTop = 0;
    const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);

    if (modalBody) {
      modalBody.scrollTop = 0;
    }

    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW$4);

    const transitionComplete = () => {
      if (this._config.focus) {
        this._focustrap.activate();
      }

      this._isTransitioning = false;
      EventHandler.trigger(this._element, EVENT_SHOWN$4, {
        relatedTarget
      });
    };

    this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, event => {
      if (event.key !== ESCAPE_KEY$1) {
        return;
      }

      if (this._config.keyboard) {
        event.preventDefault();
        this.hide();
        return;
      }

      this._triggerBackdropTransition();
    });
    EventHandler.on(window, EVENT_RESIZE$1, () => {
      if (this._isShown && !this._isTransitioning) {
        this._adjustDialog();
      }
    });
    EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
      // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
      EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
        if (this._element !== event.target || this._element !== event2.target) {
          return;
        }

        if (this._config.backdrop === 'static') {
          this._triggerBackdropTransition();

          return;
        }

        if (this._config.backdrop) {
          this.hide();
        }
      });
    });
  }

  _hideModal() {
    this._element.style.display = 'none';

    this._element.setAttribute('aria-hidden', true);

    this._element.removeAttribute('aria-modal');

    this._element.removeAttribute('role');

    this._isTransitioning = false;

    this._backdrop.hide(() => {
      document.body.classList.remove(CLASS_NAME_OPEN);

      this._resetAdjustments();

      this._scrollBar.reset();

      EventHandler.trigger(this._element, EVENT_HIDDEN$4);
    });
  }

  _isAnimated() {
    return this._element.classList.contains(CLASS_NAME_FADE$3);
  }

  _triggerBackdropTransition() {
    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED$1);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
    const initialOverflowY = this._element.style.overflowY; // return if the following background transition hasn't yet completed

    if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
      return;
    }

    if (!isModalOverflowing) {
      this._element.style.overflowY = 'hidden';
    }

    this._element.classList.add(CLASS_NAME_STATIC);

    this._queueCallback(() => {
      this._element.classList.remove(CLASS_NAME_STATIC);

      this._queueCallback(() => {
        this._element.style.overflowY = initialOverflowY;
      }, this._dialog);
    }, this._dialog);

    this._element.focus();
  }
  /**
   * The following methods are used to handle overflowing modals
   */


  _adjustDialog() {
    const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

    const scrollbarWidth = this._scrollBar.getWidth();

    const isBodyOverflowing = scrollbarWidth > 0;

    if (isBodyOverflowing && !isModalOverflowing) {
      const property = isRTL() ? 'paddingLeft' : 'paddingRight';
      this._element.style[property] = `${scrollbarWidth}px`;
    }

    if (!isBodyOverflowing && isModalOverflowing) {
      const property = isRTL() ? 'paddingRight' : 'paddingLeft';
      this._element.style[property] = `${scrollbarWidth}px`;
    }
  }

  _resetAdjustments() {
    this._element.style.paddingLeft = '';
    this._element.style.paddingRight = '';
  } // Static


  static jQueryInterface(config, relatedTarget) {
    return this.each(function () {
      const data = Modal.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](relatedTarget);
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  EventHandler.one(target, EVENT_SHOW$4, showEvent => {
    if (showEvent.defaultPrevented) {
      // only register focus restorer if modal will actually get shown
      return;
    }

    EventHandler.one(target, EVENT_HIDDEN$4, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
  }); // avoid conflict when clicking modal toggler while another one is open

  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR$1);

  if (alreadyOpen) {
    Modal.getInstance(alreadyOpen).hide();
  }

  const data = Modal.getOrCreateInstance(target);
  data.toggle(this);
});
enableDismissTrigger(Modal);
/**
 * jQuery
 */

defineJQueryPlugin(Modal);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): offcanvas.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$6 = 'offcanvas';
const DATA_KEY$3 = 'bs.offcanvas';
const EVENT_KEY$3 = `.${DATA_KEY$3}`;
const DATA_API_KEY$1 = '.data-api';
const EVENT_LOAD_DATA_API$2 = `load${EVENT_KEY$3}${DATA_API_KEY$1}`;
const ESCAPE_KEY = 'Escape';
const CLASS_NAME_SHOW$3 = 'show';
const CLASS_NAME_SHOWING$1 = 'showing';
const CLASS_NAME_HIDING = 'hiding';
const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
const OPEN_SELECTOR = '.offcanvas.show';
const EVENT_SHOW$3 = `show${EVENT_KEY$3}`;
const EVENT_SHOWN$3 = `shown${EVENT_KEY$3}`;
const EVENT_HIDE$3 = `hide${EVENT_KEY$3}`;
const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY$3}`;
const EVENT_HIDDEN$3 = `hidden${EVENT_KEY$3}`;
const EVENT_RESIZE = `resize${EVENT_KEY$3}`;
const EVENT_CLICK_DATA_API$1 = `click${EVENT_KEY$3}${DATA_API_KEY$1}`;
const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY$3}`;
const SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';
const Default$5 = {
  backdrop: true,
  keyboard: true,
  scroll: false
};
const DefaultType$5 = {
  backdrop: '(boolean|string)',
  keyboard: 'boolean',
  scroll: 'boolean'
};
/**
 * Class definition
 */

class Offcanvas extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._isShown = false;
    this._backdrop = this._initializeBackDrop();
    this._focustrap = this._initializeFocusTrap();

    this._addEventListeners();
  } // Getters


  static get Default() {
    return Default$5;
  }

  static get DefaultType() {
    return DefaultType$5;
  }

  static get NAME() {
    return NAME$6;
  } // Public


  toggle(relatedTarget) {
    return this._isShown ? this.hide() : this.show(relatedTarget);
  }

  show(relatedTarget) {
    if (this._isShown) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW$3, {
      relatedTarget
    });

    if (showEvent.defaultPrevented) {
      return;
    }

    this._isShown = true;

    this._backdrop.show();

    if (!this._config.scroll) {
      new ScrollBarHelper().hide();
    }

    this._element.setAttribute('aria-modal', true);

    this._element.setAttribute('role', 'dialog');

    this._element.classList.add(CLASS_NAME_SHOWING$1);

    const completeCallBack = () => {
      if (!this._config.scroll || this._config.backdrop) {
        this._focustrap.activate();
      }

      this._element.classList.add(CLASS_NAME_SHOW$3);

      this._element.classList.remove(CLASS_NAME_SHOWING$1);

      EventHandler.trigger(this._element, EVENT_SHOWN$3, {
        relatedTarget
      });
    };

    this._queueCallback(completeCallBack, this._element, true);
  }

  hide() {
    if (!this._isShown) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE$3);

    if (hideEvent.defaultPrevented) {
      return;
    }

    this._focustrap.deactivate();

    this._element.blur();

    this._isShown = false;

    this._element.classList.add(CLASS_NAME_HIDING);

    this._backdrop.hide();

    const completeCallback = () => {
      this._element.classList.remove(CLASS_NAME_SHOW$3, CLASS_NAME_HIDING);

      this._element.removeAttribute('aria-modal');

      this._element.removeAttribute('role');

      if (!this._config.scroll) {
        new ScrollBarHelper().reset();
      }

      EventHandler.trigger(this._element, EVENT_HIDDEN$3);
    };

    this._queueCallback(completeCallback, this._element, true);
  }

  dispose() {
    this._backdrop.dispose();

    this._focustrap.deactivate();

    super.dispose();
  } // Private


  _initializeBackDrop() {
    const clickCallback = () => {
      if (this._config.backdrop === 'static') {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }

      this.hide();
    }; // 'static' option will be translated to true, and booleans will keep their value


    const isVisible = Boolean(this._config.backdrop);
    return new Backdrop({
      className: CLASS_NAME_BACKDROP,
      isVisible,
      isAnimated: true,
      rootElement: this._element.parentNode,
      clickCallback: isVisible ? clickCallback : null
    });
  }

  _initializeFocusTrap() {
    return new FocusTrap({
      trapElement: this._element
    });
  }

  _addEventListeners() {
    EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
      if (event.key !== ESCAPE_KEY) {
        return;
      }

      if (!this._config.keyboard) {
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
        return;
      }

      this.hide();
    });
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Offcanvas.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config](this);
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (event) {
  const target = getElementFromSelector(this);

  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  EventHandler.one(target, EVENT_HIDDEN$3, () => {
    // focus on trigger when it is closed
    if (isVisible(this)) {
      this.focus();
    }
  }); // avoid conflict when clicking a toggler of an offcanvas, while another is open

  const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);

  if (alreadyOpen && alreadyOpen !== target) {
    Offcanvas.getInstance(alreadyOpen).hide();
  }

  const data = Offcanvas.getOrCreateInstance(target);
  data.toggle(this);
});
EventHandler.on(window, EVENT_LOAD_DATA_API$2, () => {
  for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
    Offcanvas.getOrCreateInstance(selector).show();
  }
});
EventHandler.on(window, EVENT_RESIZE, () => {
  for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
    if (getComputedStyle(element).position !== 'fixed') {
      Offcanvas.getOrCreateInstance(element).hide();
    }
  }
});
enableDismissTrigger(Offcanvas);
/**
 * jQuery
 */

defineJQueryPlugin(Offcanvas);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
const uriAttributes = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']);
const ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
/**
 * A pattern that matches safe data URLs. Only matches image, video and audio types.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/12.2.x/packages/core/src/sanitization/url_sanitizer.ts
 */

const DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

const allowedAttribute = (attribute, allowedAttributeList) => {
  const attributeName = attribute.nodeName.toLowerCase();

  if (allowedAttributeList.includes(attributeName)) {
    if (uriAttributes.has(attributeName)) {
      return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue) || DATA_URL_PATTERN.test(attribute.nodeValue));
    }

    return true;
  } // Check if a regular expression validates the attribute.


  return allowedAttributeList.filter(attributeRegex => attributeRegex instanceof RegExp).some(regex => regex.test(attributeName));
};

const DefaultAllowlist = {
  // Global attributes allowed on any supplied element below.
  '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
  a: ['target', 'href', 'title', 'rel'],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};
function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
  if (!unsafeHtml.length) {
    return unsafeHtml;
  }

  if (sanitizeFunction && typeof sanitizeFunction === 'function') {
    return sanitizeFunction(unsafeHtml);
  }

  const domParser = new window.DOMParser();
  const createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
  const elements = [].concat(...createdDocument.body.querySelectorAll('*'));

  for (const element of elements) {
    const elementName = element.nodeName.toLowerCase();

    if (!Object.keys(allowList).includes(elementName)) {
      element.remove();
      continue;
    }

    const attributeList = [].concat(...element.attributes);
    const allowedAttributes = [].concat(allowList['*'] || [], allowList[elementName] || []);

    for (const attribute of attributeList) {
      if (!allowedAttribute(attribute, allowedAttributes)) {
        element.removeAttribute(attribute.nodeName);
      }
    }
  }

  return createdDocument.body.innerHTML;
}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$5 = 'TemplateFactory';
const Default$4 = {
  allowList: DefaultAllowlist,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: '',
  html: false,
  sanitize: true,
  sanitizeFn: null,
  template: '<div></div>'
};
const DefaultType$4 = {
  allowList: 'object',
  content: 'object',
  extraClass: '(string|function)',
  html: 'boolean',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  template: 'string'
};
const DefaultContentType = {
  entry: '(string|element|function|null)',
  selector: '(string|element)'
};
/**
 * Class definition
 */

class TemplateFactory extends Config {
  constructor(config) {
    super();
    this._config = this._getConfig(config);
  } // Getters


  static get Default() {
    return Default$4;
  }

  static get DefaultType() {
    return DefaultType$4;
  }

  static get NAME() {
    return NAME$5;
  } // Public


  getContent() {
    return Object.values(this._config.content).map(config => this._resolvePossibleFunction(config)).filter(Boolean);
  }

  hasContent() {
    return this.getContent().length > 0;
  }

  changeContent(content) {
    this._checkContent(content);

    this._config.content = { ...this._config.content,
      ...content
    };
    return this;
  }

  toHtml() {
    const templateWrapper = document.createElement('div');
    templateWrapper.innerHTML = this._maybeSanitize(this._config.template);

    for (const [selector, text] of Object.entries(this._config.content)) {
      this._setContent(templateWrapper, text, selector);
    }

    const template = templateWrapper.children[0];

    const extraClass = this._resolvePossibleFunction(this._config.extraClass);

    if (extraClass) {
      template.classList.add(...extraClass.split(' '));
    }

    return template;
  } // Private


  _typeCheckConfig(config) {
    super._typeCheckConfig(config);

    this._checkContent(config.content);
  }

  _checkContent(arg) {
    for (const [selector, content] of Object.entries(arg)) {
      super._typeCheckConfig({
        selector,
        entry: content
      }, DefaultContentType);
    }
  }

  _setContent(template, content, selector) {
    const templateElement = SelectorEngine.findOne(selector, template);

    if (!templateElement) {
      return;
    }

    content = this._resolvePossibleFunction(content);

    if (!content) {
      templateElement.remove();
      return;
    }

    if (isElement(content)) {
      this._putElementInTemplate(getElement(content), templateElement);

      return;
    }

    if (this._config.html) {
      templateElement.innerHTML = this._maybeSanitize(content);
      return;
    }

    templateElement.textContent = content;
  }

  _maybeSanitize(arg) {
    return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
  }

  _resolvePossibleFunction(arg) {
    return typeof arg === 'function' ? arg(this) : arg;
  }

  _putElementInTemplate(element, templateElement) {
    if (this._config.html) {
      templateElement.innerHTML = '';
      templateElement.append(element);
      return;
    }

    templateElement.textContent = element.textContent;
  }

}

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$4 = 'tooltip';
const DISALLOWED_ATTRIBUTES = new Set(['sanitize', 'allowList', 'sanitizeFn']);
const CLASS_NAME_FADE$2 = 'fade';
const CLASS_NAME_MODAL = 'modal';
const CLASS_NAME_SHOW$2 = 'show';
const SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
const SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
const EVENT_MODAL_HIDE = 'hide.bs.modal';
const TRIGGER_HOVER = 'hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';
const TRIGGER_MANUAL = 'manual';
const EVENT_HIDE$2 = 'hide';
const EVENT_HIDDEN$2 = 'hidden';
const EVENT_SHOW$2 = 'show';
const EVENT_SHOWN$2 = 'shown';
const EVENT_INSERTED = 'inserted';
const EVENT_CLICK$1 = 'click';
const EVENT_FOCUSIN$1 = 'focusin';
const EVENT_FOCUSOUT$1 = 'focusout';
const EVENT_MOUSEENTER = 'mouseenter';
const EVENT_MOUSELEAVE = 'mouseleave';
const AttachmentMap = {
  AUTO: 'auto',
  TOP: 'top',
  RIGHT: isRTL() ? 'left' : 'right',
  BOTTOM: 'bottom',
  LEFT: isRTL() ? 'right' : 'left'
};
const Default$3 = {
  allowList: DefaultAllowlist,
  animation: true,
  boundary: 'clippingParents',
  container: false,
  customClass: '',
  delay: 0,
  fallbackPlacements: ['top', 'right', 'bottom', 'left'],
  html: false,
  offset: [0, 0],
  placement: 'top',
  popperConfig: null,
  sanitize: true,
  sanitizeFn: null,
  selector: false,
  template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div>' + '</div>',
  title: '',
  trigger: 'hover focus'
};
const DefaultType$3 = {
  allowList: 'object',
  animation: 'boolean',
  boundary: '(string|element)',
  container: '(string|element|boolean)',
  customClass: '(string|function)',
  delay: '(number|object)',
  fallbackPlacements: 'array',
  html: 'boolean',
  offset: '(array|string|function)',
  placement: '(string|function)',
  popperConfig: '(null|object|function)',
  sanitize: 'boolean',
  sanitizeFn: '(null|function)',
  selector: '(string|boolean)',
  template: 'string',
  title: '(string|element|function)',
  trigger: 'string'
};
/**
 * Class definition
 */

class Tooltip extends BaseComponent {
  constructor(element, config) {
    if (typeof Popper === 'undefined') {
      throw new TypeError('Bootstrap\'s tooltips require Popper (https://popper.js.org)');
    }

    super(element, config); // Private

    this._isEnabled = true;
    this._timeout = 0;
    this._isHovered = null;
    this._activeTrigger = {};
    this._popper = null;
    this._templateFactory = null;
    this._newContent = null; // Protected

    this.tip = null;

    this._setListeners();

    if (!this._config.selector) {
      this._fixTitle();
    }
  } // Getters


  static get Default() {
    return Default$3;
  }

  static get DefaultType() {
    return DefaultType$3;
  }

  static get NAME() {
    return NAME$4;
  } // Public


  enable() {
    this._isEnabled = true;
  }

  disable() {
    this._isEnabled = false;
  }

  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }

  toggle() {
    if (!this._isEnabled) {
      return;
    }

    this._activeTrigger.click = !this._activeTrigger.click;

    if (this._isShown()) {
      this._leave();

      return;
    }

    this._enter();
  }

  dispose() {
    clearTimeout(this._timeout);
    EventHandler.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);

    if (this.tip) {
      this.tip.remove();
    }

    if (this._element.getAttribute('data-bs-original-title')) {
      this._element.setAttribute('title', this._element.getAttribute('data-bs-original-title'));
    }

    this._disposePopper();

    super.dispose();
  }

  show() {
    if (this._element.style.display === 'none') {
      throw new Error('Please use show on visible elements');
    }

    if (!(this._isWithContent() && this._isEnabled)) {
      return;
    }

    const showEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOW$2));
    const shadowRoot = findShadowRoot(this._element);

    const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);

    if (showEvent.defaultPrevented || !isInTheDom) {
      return;
    } // todo v6 remove this OR make it optional


    if (this.tip) {
      this.tip.remove();
      this.tip = null;
    }

    const tip = this._getTipElement();

    this._element.setAttribute('aria-describedby', tip.getAttribute('id'));

    const {
      container
    } = this._config;

    if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
      container.append(tip);
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
    }

    if (this._popper) {
      this._popper.update();
    } else {
      this._popper = this._createPopper(tip);
    }

    tip.classList.add(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we add extra
    // empty mouseover listeners to the body's immediate children;
    // only needed because of broken event delegation on iOS
    // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.on(element, 'mouseover', noop);
      }
    }

    const complete = () => {
      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_SHOWN$2));

      if (this._isHovered === false) {
        this._leave();
      }

      this._isHovered = false;
    };

    this._queueCallback(complete, this.tip, this._isAnimated());
  }

  hide() {
    if (!this._isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDE$2));

    if (hideEvent.defaultPrevented) {
      return;
    }

    const tip = this._getTipElement();

    tip.classList.remove(CLASS_NAME_SHOW$2); // If this is a touch-enabled device we remove the extra
    // empty mouseover listeners we added for iOS support

    if ('ontouchstart' in document.documentElement) {
      for (const element of [].concat(...document.body.children)) {
        EventHandler.off(element, 'mouseover', noop);
      }
    }

    this._activeTrigger[TRIGGER_CLICK] = false;
    this._activeTrigger[TRIGGER_FOCUS] = false;
    this._activeTrigger[TRIGGER_HOVER] = false;
    this._isHovered = null; // it is a trick to support manual triggering

    const complete = () => {
      if (this._isWithActiveTrigger()) {
        return;
      }

      if (!this._isHovered) {
        tip.remove();
      }

      this._element.removeAttribute('aria-describedby');

      EventHandler.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN$2));

      this._disposePopper();
    };

    this._queueCallback(complete, this.tip, this._isAnimated());
  }

  update() {
    if (this._popper) {
      this._popper.update();
    }
  } // Protected


  _isWithContent() {
    return Boolean(this._getTitle());
  }

  _getTipElement() {
    if (!this.tip) {
      this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
    }

    return this.tip;
  }

  _createTipElement(content) {
    const tip = this._getTemplateFactory(content).toHtml(); // todo: remove this check on v6


    if (!tip) {
      return null;
    }

    tip.classList.remove(CLASS_NAME_FADE$2, CLASS_NAME_SHOW$2); // todo: on v6 the following can be achieved with CSS only

    tip.classList.add(`bs-${this.constructor.NAME}-auto`);
    const tipId = getUID(this.constructor.NAME).toString();
    tip.setAttribute('id', tipId);

    if (this._isAnimated()) {
      tip.classList.add(CLASS_NAME_FADE$2);
    }

    return tip;
  }

  setContent(content) {
    this._newContent = content;

    if (this._isShown()) {
      this._disposePopper();

      this.show();
    }
  }

  _getTemplateFactory(content) {
    if (this._templateFactory) {
      this._templateFactory.changeContent(content);
    } else {
      this._templateFactory = new TemplateFactory({ ...this._config,
        // the `content` var has to be after `this._config`
        // to override config.content in case of popover
        content,
        extraClass: this._resolvePossibleFunction(this._config.customClass)
      });
    }

    return this._templateFactory;
  }

  _getContentForTemplate() {
    return {
      [SELECTOR_TOOLTIP_INNER]: this._getTitle()
    };
  }

  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute('data-bs-original-title');
  } // Private


  _initializeOnDelegatedTarget(event) {
    return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
  }

  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE$2);
  }

  _isShown() {
    return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW$2);
  }

  _createPopper(tip) {
    const placement = typeof this._config.placement === 'function' ? this._config.placement.call(this, tip, this._element) : this._config.placement;
    const attachment = AttachmentMap[placement.toUpperCase()];
    return Popper.createPopper(this._element, tip, this._getPopperConfig(attachment));
  }

  _getOffset() {
    const {
      offset
    } = this._config;

    if (typeof offset === 'string') {
      return offset.split(',').map(value => Number.parseInt(value, 10));
    }

    if (typeof offset === 'function') {
      return popperData => offset(popperData, this._element);
    }

    return offset;
  }

  _resolvePossibleFunction(arg) {
    return typeof arg === 'function' ? arg.call(this._element) : arg;
  }

  _getPopperConfig(attachment) {
    const defaultBsPopperConfig = {
      placement: attachment,
      modifiers: [{
        name: 'flip',
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: 'offset',
        options: {
          offset: this._getOffset()
        }
      }, {
        name: 'preventOverflow',
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: 'arrow',
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: 'preSetPlacement',
        enabled: true,
        phase: 'beforeMain',
        fn: data => {
          // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
          // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
          this._getTipElement().setAttribute('data-popper-placement', data.state.placement);
        }
      }]
    };
    return { ...defaultBsPopperConfig,
      ...(typeof this._config.popperConfig === 'function' ? this._config.popperConfig(defaultBsPopperConfig) : this._config.popperConfig)
    };
  }

  _setListeners() {
    const triggers = this._config.trigger.split(' ');

    for (const trigger of triggers) {
      if (trigger === 'click') {
        EventHandler.on(this._element, this.constructor.eventName(EVENT_CLICK$1), this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context.toggle();
        });
      } else if (trigger !== TRIGGER_MANUAL) {
        const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER) : this.constructor.eventName(EVENT_FOCUSIN$1);
        const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE) : this.constructor.eventName(EVENT_FOCUSOUT$1);
        EventHandler.on(this._element, eventIn, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;

          context._enter();
        });
        EventHandler.on(this._element, eventOut, this._config.selector, event => {
          const context = this._initializeOnDelegatedTarget(event);

          context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);

          context._leave();
        });
      }
    }

    this._hideModalHandler = () => {
      if (this._element) {
        this.hide();
      }
    };

    EventHandler.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
  }

  _fixTitle() {
    const title = this._element.getAttribute('title');

    if (!title) {
      return;
    }

    if (!this._element.getAttribute('aria-label') && !this._element.textContent.trim()) {
      this._element.setAttribute('aria-label', title);
    }

    this._element.setAttribute('data-bs-original-title', title); // DO NOT USE IT. Is only for backwards compatibility


    this._element.removeAttribute('title');
  }

  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = true;
      return;
    }

    this._isHovered = true;

    this._setTimeout(() => {
      if (this._isHovered) {
        this.show();
      }
    }, this._config.delay.show);
  }

  _leave() {
    if (this._isWithActiveTrigger()) {
      return;
    }

    this._isHovered = false;

    this._setTimeout(() => {
      if (!this._isHovered) {
        this.hide();
      }
    }, this._config.delay.hide);
  }

  _setTimeout(handler, timeout) {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(handler, timeout);
  }

  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(true);
  }

  _getConfig(config) {
    const dataAttributes = Manipulator.getDataAttributes(this._element);

    for (const dataAttribute of Object.keys(dataAttributes)) {
      if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
        delete dataAttributes[dataAttribute];
      }
    }

    config = { ...dataAttributes,
      ...(typeof config === 'object' && config ? config : {})
    };
    config = this._mergeConfigObj(config);
    config = this._configAfterMerge(config);

    this._typeCheckConfig(config);

    return config;
  }

  _configAfterMerge(config) {
    config.container = config.container === false ? document.body : getElement(config.container);

    if (typeof config.delay === 'number') {
      config.delay = {
        show: config.delay,
        hide: config.delay
      };
    }

    if (typeof config.title === 'number') {
      config.title = config.title.toString();
    }

    if (typeof config.content === 'number') {
      config.content = config.content.toString();
    }

    return config;
  }

  _getDelegateConfig() {
    const config = {};

    for (const key in this._config) {
      if (this.constructor.Default[key] !== this._config[key]) {
        config[key] = this._config[key];
      }
    }

    config.selector = false;
    config.trigger = 'manual'; // In the future can be replaced with:
    // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
    // `Object.fromEntries(keysWithDifferentValues)`

    return config;
  }

  _disposePopper() {
    if (this._popper) {
      this._popper.destroy();

      this._popper = null;
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tooltip.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * jQuery
 */


defineJQueryPlugin(Tooltip);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$3 = 'popover';
const SELECTOR_TITLE = '.popover-header';
const SELECTOR_CONTENT = '.popover-body';
const Default$2 = { ...Tooltip.Default,
  content: '',
  offset: [0, 8],
  placement: 'right',
  template: '<div class="popover" role="tooltip">' + '<div class="popover-arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div>' + '</div>',
  trigger: 'click'
};
const DefaultType$2 = { ...Tooltip.DefaultType,
  content: '(null|string|element|function)'
};
/**
 * Class definition
 */

class Popover extends Tooltip {
  // Getters
  static get Default() {
    return Default$2;
  }

  static get DefaultType() {
    return DefaultType$2;
  }

  static get NAME() {
    return NAME$3;
  } // Overrides


  _isWithContent() {
    return this._getTitle() || this._getContent();
  } // Private


  _getContentForTemplate() {
    return {
      [SELECTOR_TITLE]: this._getTitle(),
      [SELECTOR_CONTENT]: this._getContent()
    };
  }

  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Popover.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (typeof data[config] === 'undefined') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * jQuery
 */


defineJQueryPlugin(Popover);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$2 = 'scrollspy';
const DATA_KEY$2 = 'bs.scrollspy';
const EVENT_KEY$2 = `.${DATA_KEY$2}`;
const DATA_API_KEY = '.data-api';
const EVENT_ACTIVATE = `activate${EVENT_KEY$2}`;
const EVENT_CLICK = `click${EVENT_KEY$2}`;
const EVENT_LOAD_DATA_API$1 = `load${EVENT_KEY$2}${DATA_API_KEY}`;
const CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
const CLASS_NAME_ACTIVE$1 = 'active';
const SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
const SELECTOR_TARGET_LINKS = '[href]';
const SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
const SELECTOR_NAV_LINKS = '.nav-link';
const SELECTOR_NAV_ITEMS = '.nav-item';
const SELECTOR_LIST_ITEMS = '.list-group-item';
const SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
const SELECTOR_DROPDOWN = '.dropdown';
const SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
const Default$1 = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: '0px 0px -25%',
  smoothScroll: false,
  target: null,
  threshold: [0.1, 0.5, 1]
};
const DefaultType$1 = {
  offset: '(number|null)',
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: 'string',
  smoothScroll: 'boolean',
  target: 'element',
  threshold: 'array'
};
/**
 * Class definition
 */

class ScrollSpy extends BaseComponent {
  constructor(element, config) {
    super(element, config); // this._element is the observablesContainer and config.target the menu links wrapper

    this._targetLinks = new Map();
    this._observableSections = new Map();
    this._rootElement = getComputedStyle(this._element).overflowY === 'visible' ? null : this._element;
    this._activeTarget = null;
    this._observer = null;
    this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    };
    this.refresh(); // initialize
  } // Getters


  static get Default() {
    return Default$1;
  }

  static get DefaultType() {
    return DefaultType$1;
  }

  static get NAME() {
    return NAME$2;
  } // Public


  refresh() {
    this._initializeTargetsAndObservables();

    this._maybeEnableSmoothScroll();

    if (this._observer) {
      this._observer.disconnect();
    } else {
      this._observer = this._getNewObserver();
    }

    for (const section of this._observableSections.values()) {
      this._observer.observe(section);
    }
  }

  dispose() {
    this._observer.disconnect();

    super.dispose();
  } // Private


  _configAfterMerge(config) {
    // TODO: on v6 target should be given explicitly & remove the {target: 'ss-target'} case
    config.target = getElement(config.target) || document.body; // TODO: v6 Only for backwards compatibility reasons. Use rootMargin only

    config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;

    if (typeof config.threshold === 'string') {
      config.threshold = config.threshold.split(',').map(value => Number.parseFloat(value));
    }

    return config;
  }

  _maybeEnableSmoothScroll() {
    if (!this._config.smoothScroll) {
      return;
    } // unregister any previous listeners


    EventHandler.off(this._config.target, EVENT_CLICK);
    EventHandler.on(this._config.target, EVENT_CLICK, SELECTOR_TARGET_LINKS, event => {
      const observableSection = this._observableSections.get(event.target.hash);

      if (observableSection) {
        event.preventDefault();
        const root = this._rootElement || window;
        const height = observableSection.offsetTop - this._element.offsetTop;

        if (root.scrollTo) {
          root.scrollTo({
            top: height,
            behavior: 'smooth'
          });
          return;
        } // Chrome 60 doesn't support `scrollTo`


        root.scrollTop = height;
      }
    });
  }

  _getNewObserver() {
    const options = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver(entries => this._observerCallback(entries), options);
  } // The logic of selection


  _observerCallback(entries) {
    const targetElement = entry => this._targetLinks.get(`#${entry.target.id}`);

    const activate = entry => {
      this._previousScrollData.visibleEntryTop = entry.target.offsetTop;

      this._process(targetElement(entry));
    };

    const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
    const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = parentScrollTop;

    for (const entry of entries) {
      if (!entry.isIntersecting) {
        this._activeTarget = null;

        this._clearActiveClass(targetElement(entry));

        continue;
      }

      const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop; // if we are scrolling down, pick the bigger offsetTop

      if (userScrollsDown && entryIsLowerThanPrevious) {
        activate(entry); // if parent isn't scrolled, let's keep the first visible item, breaking the iteration

        if (!parentScrollTop) {
          return;
        }

        continue;
      } // if we are scrolling up, pick the smallest offsetTop


      if (!userScrollsDown && !entryIsLowerThanPrevious) {
        activate(entry);
      }
    }
  }

  _initializeTargetsAndObservables() {
    this._targetLinks = new Map();
    this._observableSections = new Map();
    const targetLinks = SelectorEngine.find(SELECTOR_TARGET_LINKS, this._config.target);

    for (const anchor of targetLinks) {
      // ensure that the anchor has an id and is not disabled
      if (!anchor.hash || isDisabled(anchor)) {
        continue;
      }

      const observableSection = SelectorEngine.findOne(anchor.hash, this._element); // ensure that the observableSection exists & is visible

      if (isVisible(observableSection)) {
        this._targetLinks.set(anchor.hash, anchor);

        this._observableSections.set(anchor.hash, observableSection);
      }
    }
  }

  _process(target) {
    if (this._activeTarget === target) {
      return;
    }

    this._clearActiveClass(this._config.target);

    this._activeTarget = target;
    target.classList.add(CLASS_NAME_ACTIVE$1);

    this._activateParents(target);

    EventHandler.trigger(this._element, EVENT_ACTIVATE, {
      relatedTarget: target
    });
  }

  _activateParents(target) {
    // Activate dropdown parents
    if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
      SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE$1);
      return;
    }

    for (const listGroup of SelectorEngine.parents(target, SELECTOR_NAV_LIST_GROUP)) {
      // Set triggered links parents as active
      // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor
      for (const item of SelectorEngine.prev(listGroup, SELECTOR_LINK_ITEMS)) {
        item.classList.add(CLASS_NAME_ACTIVE$1);
      }
    }
  }

  _clearActiveClass(parent) {
    parent.classList.remove(CLASS_NAME_ACTIVE$1);
    const activeNodes = SelectorEngine.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE$1}`, parent);

    for (const node of activeNodes) {
      node.classList.remove(CLASS_NAME_ACTIVE$1);
    }
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = ScrollSpy.getOrCreateInstance(this, config);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(window, EVENT_LOAD_DATA_API$1, () => {
  for (const spy of SelectorEngine.find(SELECTOR_DATA_SPY)) {
    ScrollSpy.getOrCreateInstance(spy);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(ScrollSpy);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME$1 = 'tab';
const DATA_KEY$1 = 'bs.tab';
const EVENT_KEY$1 = `.${DATA_KEY$1}`;
const EVENT_HIDE$1 = `hide${EVENT_KEY$1}`;
const EVENT_HIDDEN$1 = `hidden${EVENT_KEY$1}`;
const EVENT_SHOW$1 = `show${EVENT_KEY$1}`;
const EVENT_SHOWN$1 = `shown${EVENT_KEY$1}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY$1}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY$1}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY$1}`;
const ARROW_LEFT_KEY = 'ArrowLeft';
const ARROW_RIGHT_KEY = 'ArrowRight';
const ARROW_UP_KEY = 'ArrowUp';
const ARROW_DOWN_KEY = 'ArrowDown';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_FADE$1 = 'fade';
const CLASS_NAME_SHOW$1 = 'show';
const CLASS_DROPDOWN = 'dropdown';
const SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
const SELECTOR_DROPDOWN_MENU = '.dropdown-menu';
const NOT_SELECTOR_DROPDOWN_TOGGLE = ':not(.dropdown-toggle)';
const SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const SELECTOR_OUTER = '.nav-item, .list-group-item';
const SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]'; // todo:v6: could be only `tab`

const SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE}`;
const SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */

class Tab extends BaseComponent {
  constructor(element) {
    super(element);
    this._parent = this._element.closest(SELECTOR_TAB_PANEL);

    if (!this._parent) {
      return; // todo: should Throw exception on v6
      // throw new TypeError(`${element.outerHTML} has not a valid parent ${SELECTOR_INNER_ELEM}`)
    } // Set up initial aria attributes


    this._setInitialAttributes(this._parent, this._getChildren());

    EventHandler.on(this._element, EVENT_KEYDOWN, event => this._keydown(event));
  } // Getters


  static get NAME() {
    return NAME$1;
  } // Public


  show() {
    // Shows this elem and deactivate the active sibling if exists
    const innerElem = this._element;

    if (this._elemIsActive(innerElem)) {
      return;
    } // Search for active tab on same parent to deactivate it


    const active = this._getActiveElem();

    const hideEvent = active ? EventHandler.trigger(active, EVENT_HIDE$1, {
      relatedTarget: innerElem
    }) : null;
    const showEvent = EventHandler.trigger(innerElem, EVENT_SHOW$1, {
      relatedTarget: active
    });

    if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
      return;
    }

    this._deactivate(active, innerElem);

    this._activate(innerElem, active);
  } // Private


  _activate(element, relatedElem) {
    if (!element) {
      return;
    }

    element.classList.add(CLASS_NAME_ACTIVE);

    this._activate(getElementFromSelector(element)); // Search and activate/show the proper section


    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.add(CLASS_NAME_SHOW$1);
        return;
      }

      element.removeAttribute('tabindex');
      element.setAttribute('aria-selected', true);

      this._toggleDropDown(element, true);

      EventHandler.trigger(element, EVENT_SHOWN$1, {
        relatedTarget: relatedElem
      });
    };

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }

  _deactivate(element, relatedElem) {
    if (!element) {
      return;
    }

    element.classList.remove(CLASS_NAME_ACTIVE);
    element.blur();

    this._deactivate(getElementFromSelector(element)); // Search and deactivate the shown section too


    const complete = () => {
      if (element.getAttribute('role') !== 'tab') {
        element.classList.remove(CLASS_NAME_SHOW$1);
        return;
      }

      element.setAttribute('aria-selected', false);
      element.setAttribute('tabindex', '-1');

      this._toggleDropDown(element, false);

      EventHandler.trigger(element, EVENT_HIDDEN$1, {
        relatedTarget: relatedElem
      });
    };

    this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE$1));
  }

  _keydown(event) {
    if (![ARROW_LEFT_KEY, ARROW_RIGHT_KEY, ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key)) {
      return;
    }

    event.stopPropagation(); // stopPropagation/preventDefault both added to support up/down keys without scrolling the page

    event.preventDefault();
    const isNext = [ARROW_RIGHT_KEY, ARROW_DOWN_KEY].includes(event.key);
    const nextActiveElement = getNextActiveElement(this._getChildren().filter(element => !isDisabled(element)), event.target, isNext, true);

    if (nextActiveElement) {
      nextActiveElement.focus({
        preventScroll: true
      });
      Tab.getOrCreateInstance(nextActiveElement).show();
    }
  }

  _getChildren() {
    // collection of inner elements
    return SelectorEngine.find(SELECTOR_INNER_ELEM, this._parent);
  }

  _getActiveElem() {
    return this._getChildren().find(child => this._elemIsActive(child)) || null;
  }

  _setInitialAttributes(parent, children) {
    this._setAttributeIfNotExists(parent, 'role', 'tablist');

    for (const child of children) {
      this._setInitialAttributesOnChild(child);
    }
  }

  _setInitialAttributesOnChild(child) {
    child = this._getInnerElement(child);

    const isActive = this._elemIsActive(child);

    const outerElem = this._getOuterElement(child);

    child.setAttribute('aria-selected', isActive);

    if (outerElem !== child) {
      this._setAttributeIfNotExists(outerElem, 'role', 'presentation');
    }

    if (!isActive) {
      child.setAttribute('tabindex', '-1');
    }

    this._setAttributeIfNotExists(child, 'role', 'tab'); // set attributes to the related panel too


    this._setInitialAttributesOnTargetPanel(child);
  }

  _setInitialAttributesOnTargetPanel(child) {
    const target = getElementFromSelector(child);

    if (!target) {
      return;
    }

    this._setAttributeIfNotExists(target, 'role', 'tabpanel');

    if (child.id) {
      this._setAttributeIfNotExists(target, 'aria-labelledby', `#${child.id}`);
    }
  }

  _toggleDropDown(element, open) {
    const outerElem = this._getOuterElement(element);

    if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
      return;
    }

    const toggle = (selector, className) => {
      const element = SelectorEngine.findOne(selector, outerElem);

      if (element) {
        element.classList.toggle(className, open);
      }
    };

    toggle(SELECTOR_DROPDOWN_TOGGLE, CLASS_NAME_ACTIVE);
    toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW$1);
    outerElem.setAttribute('aria-expanded', open);
  }

  _setAttributeIfNotExists(element, attribute, value) {
    if (!element.hasAttribute(attribute)) {
      element.setAttribute(attribute, value);
    }
  }

  _elemIsActive(elem) {
    return elem.classList.contains(CLASS_NAME_ACTIVE);
  } // Try to get the inner element (usually the .nav-link)


  _getInnerElement(elem) {
    return elem.matches(SELECTOR_INNER_ELEM) ? elem : SelectorEngine.findOne(SELECTOR_INNER_ELEM, elem);
  } // Try to get the outer element (usually the .nav-item)


  _getOuterElement(elem) {
    return elem.closest(SELECTOR_OUTER) || elem;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this);

      if (typeof config !== 'string') {
        return;
      }

      if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
        throw new TypeError(`No method named "${config}"`);
      }

      data[config]();
    });
  }

}
/**
 * Data API implementation
 */


EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
  if (['A', 'AREA'].includes(this.tagName)) {
    event.preventDefault();
  }

  if (isDisabled(this)) {
    return;
  }

  Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const element of SelectorEngine.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
    Tab.getOrCreateInstance(element);
  }
});
/**
 * jQuery
 */

defineJQueryPlugin(Tab);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.2): toast.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */
/**
 * Constants
 */

const NAME = 'toast';
const DATA_KEY = 'bs.toast';
const EVENT_KEY = `.${DATA_KEY}`;
const EVENT_MOUSEOVER = `mouseover${EVENT_KEY}`;
const EVENT_MOUSEOUT = `mouseout${EVENT_KEY}`;
const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`;
const EVENT_HIDE = `hide${EVENT_KEY}`;
const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
const EVENT_SHOW = `show${EVENT_KEY}`;
const EVENT_SHOWN = `shown${EVENT_KEY}`;
const CLASS_NAME_FADE = 'fade';
const CLASS_NAME_HIDE = 'hide'; // @deprecated - kept here only for backwards compatibility

const CLASS_NAME_SHOW = 'show';
const CLASS_NAME_SHOWING = 'showing';
const DefaultType = {
  animation: 'boolean',
  autohide: 'boolean',
  delay: 'number'
};
const Default = {
  animation: true,
  autohide: true,
  delay: 5000
};
/**
 * Class definition
 */

class Toast extends BaseComponent {
  constructor(element, config) {
    super(element, config);
    this._timeout = null;
    this._hasMouseInteraction = false;
    this._hasKeyboardInteraction = false;

    this._setListeners();
  } // Getters


  static get Default() {
    return Default;
  }

  static get DefaultType() {
    return DefaultType;
  }

  static get NAME() {
    return NAME;
  } // Public


  show() {
    const showEvent = EventHandler.trigger(this._element, EVENT_SHOW);

    if (showEvent.defaultPrevented) {
      return;
    }

    this._clearTimeout();

    if (this._config.animation) {
      this._element.classList.add(CLASS_NAME_FADE);
    }

    const complete = () => {
      this._element.classList.remove(CLASS_NAME_SHOWING);

      EventHandler.trigger(this._element, EVENT_SHOWN);

      this._maybeScheduleHide();
    };

    this._element.classList.remove(CLASS_NAME_HIDE); // @deprecated


    reflow(this._element);

    this._element.classList.add(CLASS_NAME_SHOW, CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  hide() {
    if (!this.isShown()) {
      return;
    }

    const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);

    if (hideEvent.defaultPrevented) {
      return;
    }

    const complete = () => {
      this._element.classList.add(CLASS_NAME_HIDE); // @deprecated


      this._element.classList.remove(CLASS_NAME_SHOWING, CLASS_NAME_SHOW);

      EventHandler.trigger(this._element, EVENT_HIDDEN);
    };

    this._element.classList.add(CLASS_NAME_SHOWING);

    this._queueCallback(complete, this._element, this._config.animation);
  }

  dispose() {
    this._clearTimeout();

    if (this.isShown()) {
      this._element.classList.remove(CLASS_NAME_SHOW);
    }

    super.dispose();
  }

  isShown() {
    return this._element.classList.contains(CLASS_NAME_SHOW);
  } // Private


  _maybeScheduleHide() {
    if (!this._config.autohide) {
      return;
    }

    if (this._hasMouseInteraction || this._hasKeyboardInteraction) {
      return;
    }

    this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay);
  }

  _onInteraction(event, isInteracting) {
    switch (event.type) {
      case 'mouseover':
      case 'mouseout':
        {
          this._hasMouseInteraction = isInteracting;
          break;
        }

      case 'focusin':
      case 'focusout':
        {
          this._hasKeyboardInteraction = isInteracting;
          break;
        }
    }

    if (isInteracting) {
      this._clearTimeout();

      return;
    }

    const nextElement = event.relatedTarget;

    if (this._element === nextElement || this._element.contains(nextElement)) {
      return;
    }

    this._maybeScheduleHide();
  }

  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEOVER, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_MOUSEOUT, event => this._onInteraction(event, false));
    EventHandler.on(this._element, EVENT_FOCUSIN, event => this._onInteraction(event, true));
    EventHandler.on(this._element, EVENT_FOCUSOUT, event => this._onInteraction(event, false));
  }

  _clearTimeout() {
    clearTimeout(this._timeout);
    this._timeout = null;
  } // Static


  static jQueryInterface(config) {
    return this.each(function () {
      const data = Toast.getOrCreateInstance(this, config);

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }

        data[config](this);
      }
    });
  }

}
/**
 * Data API implementation
 */


enableDismissTrigger(Toast);
/**
 * jQuery
 */

defineJQueryPlugin(Toast);

export { Alert, Button, Carousel, Collapse, Dropdown, Modal, Offcanvas, Popover, ScrollSpy, Tab, Toast, Tooltip };
//# sourceMappingURL=bootstrap.esm.js.map
