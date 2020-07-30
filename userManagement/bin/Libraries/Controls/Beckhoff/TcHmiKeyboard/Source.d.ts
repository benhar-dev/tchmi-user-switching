/**
* TcHmiKeyboard
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiKeyboard extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                protected __elementPaddingContainer: JQuery;
                protected __layouts: TcHmiKeyboard.LayoutCollection | null;
                protected __currentLayout: TcHmiKeyboard.Layout;
                protected __fixedTargetInputElements: HTMLCollectionOf<HTMLInputElement> | null;
                protected __fixedTargetTextareaElements: HTMLCollectionOf<HTMLTextAreaElement> | null;
                /**
                 * Internal reference to the attribute "data-tchmi-layout"
                 */
                protected __layout: string | undefined;
                protected __layoutXhr: XMLHttpRequest | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-project-layout-file"
                 */
                protected __layoutFile: string | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-scale-mode"
                 */
                protected __scaleMode: TcHmi.ScaleModeString | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-fixed-target"
                 */
                protected __fixedTarget: string | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-release-sticky-keys-manually"
                 */
                protected __releaseStickyKeysManually: boolean | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-keyboard-padding"
                 */
                protected __keyboardPadding: TcHmi.FourSidedCss | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-key-padding"
                 */
                protected __keyPadding: TcHmi.FourSidedCss | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-additional-key-backdrop-padding"
                 */
                protected __additionalKeyBackdropPadding: TcHmi.FourSidedCss | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-longpress-delay"
                 */
                protected __longpressDelay: number | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-repetition-delay"
                 */
                protected __repetitionDelay: number | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-font-size"
                 */
                protected __labelFontSize: number | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-font-size-unit"
                 */
                protected __labelFontSizeUnit: FontSizeUnit | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-font-family"
                 */
                protected __labelFontFamily: FontFamily | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-font-style"
                 */
                protected __labelFontStyle: FontStyle | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-font-style"
                 */
                protected __labelFontWeight: FontWeight | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-stroke-thickness"
                 */
                protected __labelStrokeThickness: number | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-key-background-color"
                 */
                protected __keyBackgroundColor: Color | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-color"
                 */
                protected __labelColor: TcHmi.SolidColor | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-stroke-color"
                 */
                protected __labelStrokeColor: TcHmi.SolidColor | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-label-fill-color"
                 */
                protected __labelFillColor: Color | null | undefined;
                /**
                 * Internal reference to the attribute "data-tchmi-additional-key-backdrop-color"
                 */
                protected __additionalKeyBackdropColor: Color | null | undefined;
                /** Store modifier keys */
                protected __modifiers: {
                    'Shift': boolean;
                    'Control': boolean;
                    'Alt': boolean;
                    'Meta': boolean;
                    'CapsLock': boolean;
                    'NumLock': boolean;
                    'Insert': boolean;
                };
                /** Remember which keys are interacted with to reliably detect end of interaction */
                protected __pressedKeyMouse: HTMLElement | null;
                protected __pressedKeysTouch: {
                    touchID: number;
                    keyElement: HTMLElement | null;
                }[];
                protected __pressedKeys: {
                    element: HTMLElement;
                    key: TcHmiKeyboard.SimpleKey;
                }[];
                protected __keyActions: Dictionary<{
                    press: (key: TcHmiKeyboard.Key, activeInput: HTMLInputElement | HTMLTextAreaElement | null, sequenceIndex: number) => void;
                    release?: (key: TcHmiKeyboard.Key, activeInput: HTMLInputElement | HTMLTextAreaElement | null, sequenceIndex: number) => void;
                }>;
                protected __keyCodes: Dictionary<number>;
                protected __specialKeys: Dictionary<string>;
                protected __stickiedKeys: TcHmiKeyboard.StickiedKey[];
                protected __keysToStick: TcHmiKeyboard.StickiedKey[];
                protected __compositionKey: TcHmiKeyboard.Key | null;
                protected __interactedKeys: {
                    element: HTMLElement;
                    key: TcHmiKeyboard.Key | TcHmiKeyboard.LayoutSwitch;
                    pressed: boolean;
                    timeoutID: number;
                    timedOut: boolean;
                    hideAdditionalKeys?: boolean;
                }[];
                protected __additionalKeysBaseKey: {
                    element: HTMLElement;
                    dragging: boolean;
                } | null;
                protected __arrowUpDownTarget: {
                    left: number;
                    input: HTMLInputElement | HTMLTextAreaElement;
                    selectionStart: number;
                    selectionEnd: number;
                } | null;
                /** Stores the callback function for the resize event */
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __objectResolvers: Map<string, {
                    resolver: Symbol.ObjectResolver;
                    watchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<any>) => void;
                    watchDestroyer: DestroyFunction | null;
                }>;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 * @function __previnit
                 */
                __previnit(): void;
                /**
                 * If raised, all attributes have been set to it's default or dom values.
                 * @function __init
                 */
                __init(): void;
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                 * @function
                 */
                __attach(): void;
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                 * @function
                 */
                __detach(): void;
                /**
                 * Destroy the current control instance.
                 * Will be called automatically if system destroys control!
                 * @function
                 */
                destroy(): void;
                /**
                 * Returns an event handler function for the onResized event.
                 * @function
                 */
                protected __onResized: (evt: EventProvider.Event, ctrl: System.TcHmiControl) => void;
                /**
                 * Returns an event handler for the mousedown and touchstart events on the root element.
                 * @function
                 */
                protected __onRootMouseDownOrTouchStart: (event: MouseEvent | TouchEvent) => void;
                /**
                 * Returns an event handler for the mousedown and touchstart events on the document root.
                 * @function
                 */
                protected __onDocumentMouseDownOrTouchStart: (event: MouseEvent | TouchEvent) => void;
                /**
                 * Returns an event handler for the mousedown event.
                 * @function
                 */
                protected __onMouseDown: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseenter event.
                 * @funtion
                 */
                protected __onMouseOver: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseleave event.
                 * @function
                 */
                protected __onMouseOut: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the mouseup event.
                 * @function
                 */
                protected __onMouseUp: (event: MouseEvent) => void;
                /**
                 * Returns an event handler for the touchstart event.
                 * @function
                 */
                protected __onTouchStart: (event: TouchEvent) => void;
                /**
                 * Returns an event handler for the touchmove event.
                 * @function
                 */
                protected __onTouchMove: (event: TouchEvent) => void;
                /**
                 * Returns an event handler for the touchend and touchmove events.
                 * @function
                 */
                protected __onTouchEndOrCancel: (event: TouchEvent) => void;
                /**
                 * Handles the case when the mouse cursor or a touchpoint leaves the currently interacted with key.
                 * @param keyElement    The key HTML element that is being interacted with.
                 * @param coordinates   The coordinates of the mouse cursor or touch point.
                 * @function
                 */
                protected __handleMouseOrTouchLeave(keyElement: HTMLElement, coordinates: {
                    x: number;
                    y: number;
                }): boolean;
                /**
                 * Show additional keys.
                 * @param keyElement The key HTML element containing the additional keys.
                 * @function
                 */
                protected __showAdditionalKeys(keyElement: HTMLElement): void;
                /**
                 * Hide additional keys and remove the key containing the additional keys from interactedKeys.
                 * @function
                 */
                protected __hideAdditionalKeys(): void;
                /**
                 * Handles beginning of interaction with keys. Registers the key as being interacted with and sets timeout functions if longpress action is not none.
                 * @param keyElement The key HTML element on which the interaction has started.
                 * @function
                 */
                protected __keyInteractionStarted(keyElement: HTMLElement): void;
                /**
                 * Handles end of interaction with keys. Registers the key as a stickied key when it is marked as sticky, otherwise releases it.
                 * @param keyElement The key HTML element on which the interaction has ended.
                 * @function
                 */
                protected __keyInteractionEnded(keyElement: HTMLElement): void;
                /**
                 * Dispatch events for the pressed key and call the associated action.
                 * @param key The key to press.
                 * @function
                 */
                protected __pressKey(key: TcHmiKeyboard.Key | TcHmiKeyboard.LayoutSwitch, repeat?: boolean): void;
                /**
                 * Dispatch events for the released key and call the associated action.
                 * @param key The key to release.
                 * @function
                 */
                protected __releaseKey(key: TcHmiKeyboard.Key | TcHmiKeyboard.LayoutSwitch): void;
                /**
                 * Get a key object from the HTMLElement which was interacted with.
                 * @param keyElement The HTMLElement representing the key.
                 * @function
                 */
                protected __getKey(keyElement: HTMLElement): TcHmiKeyboard.Key | TcHmiKeyboard.LayoutSwitch;
                /**
                 * Gets the input and textarea elements that KeyboardEvents should be sent to and characters typed into.
                 * @function
                 */
                protected __getTargetElements(): Element[];
                /**
                 * Dispatch a keydown, keypress or keyup event.
                 * @param target        The element which will receive the event.
                 * @param type          The type of the event; keydown, keypress or keyup.
                 * @param key           The key which was pressed or released.
                 * @param sequenceIndex The index of the key and code in the key object. Useful when more than one key is mapped to a "physical" key.
                 * @returns Whether the event propagated all the way to the root element or whether preventDefault was called.
                 * @function
                 */
                protected __dispatchEvent(target: EventTarget, type: 'keydown' | 'keypress' | 'keyup', key: TcHmiKeyboard.Key, sequenceIndex: number, repeat?: boolean): boolean;
                /**
                 * Changes the value of the specified modifier and sets the corresponding classes on the control root element.
                 * @param key   The modifier to change.
                 * @param value The new value of the modifier. If this parameter is not specified, the modifier is inverted.
                 * @function
                 */
                protected __toggleModifier(key: string, value?: boolean): void;
                /**
                 * Registers a key as stickied.
                 * @param key The key to stick.
                 * @function
                 */
                protected __stickKey(key: TcHmiKeyboard.Key, lock?: boolean): void;
                /**
                 * Unregisters a stickied key and releases it.
                 * @param key The key to unstick.
                 * @function
                 */
                protected __unstickKey(key: TcHmiKeyboard.StickiedKey | TcHmiKeyboard.Key, unlock?: boolean): boolean | undefined;
                /**
                 * Unregisters and releases all stickied keys.
                 * @function
                 */
                protected __unstickAllKeys(): void;
                /**
                 * Finds and returns the first key in the given stickied key collection that matches the key and keyPath properties of the given search key.
                 * @param searchKey             The key to search for.
                 * @param stickiedKeyCollection The collection in which to search.
                 */
                protected __getStickiedKey(searchKey: TcHmiKeyboard.Key, stickiedKeyCollection: TcHmiKeyboard.StickiedKey[]): TcHmiKeyboard.StickiedKey;
                /**
                 * Copies all properties of a key into a new object and adds locked and stickTime properties.
                 * @param key       The key to convert.
                 * @param locked    Wheter the stickied key should be locked.
                 */
                protected __keyToStickiedKey(key: TcHmiKeyboard.Key, locked: boolean): TcHmiKeyboard.StickiedKey;
                /**
                 * Gets the new caret position when an action is performed that moves the caret left. Respects the state of the control key.
                 * @param currentPosition   The current position of the caret.
                 * @param text              The text the caret is positioned in.
                 * @function
                 */
                protected __caretPositionLeft(currentPosition: number, text: string, ignoreModifiers: boolean): number;
                /**
                 * Gets the new caret position when an action is performed that moves the caret right. Respects the state of the control key.
                 * @param currentPosition   The current position of the caret.
                 * @param text              The text the caret is positioned in.
                 * @function
                 */
                protected __caretPositionRight(currentPosition: number, text: string, ignoreModifiers: boolean): number;
                /**
                 * Moves the caret of activeInput in the specified direction to a position returned by positionFinder. Respects the state of the shift key and modifies selections accordingly.
                 * @param activeInput       The input element in which the caret should be moved
                 * @param direction         The direction in which the caret will be moved. Important to distinguish between selection exapnsion and reduction.
                 * @param positionFinder    A function returning the new position of the caret.
                 * @function
                 */
                protected __moveCaret(activeInput: HTMLInputElement | HTMLTextAreaElement, direction: 'forward' | 'backward', positionFinder: (currentPosition: number) => number, ignoreModifiers: boolean): void;
                /**
                 * Sets selectionStart and selectionEnd of the specified element to the specified value and sets selectionDirection to 'forward'.
                 * @param activeInput   The element in which the caret position should be set.
                 * @param position      The new caret position.
                 * @function
                 */
                protected __setCaretPosition(activeInput: HTMLInputElement | HTMLTextAreaElement, position: number): void;
                /**
                 * Sets the caret position in the given element after clipping the given position to possible values.
                 * @param activeInput   The element in which the caret position should be set.
                 * @param startOrEnd    Whether to set the caret at the start or end of the current selection.
                 * @param position      The position to set the caret to.
                 * @function
                 */
                protected __setSelectionStartOrEnd(activeInput: HTMLInputElement | HTMLTextAreaElement, startOrEnd: 'selectionStart' | 'selectionEnd', position: number): void;
                /**
                 * Gets the caret position in the given element and clips it to possible values.
                 * @param activeInput   The element containing the caret.
                 * @param startOrEnd    Whether to get the caret at the start or at the end of the current selection.
                 * @function
                 */
                protected __getSelectionStartOrEnd(activeInput: HTMLInputElement | HTMLTextAreaElement, startOrEnd: 'selectionStart' | 'selectionEnd'): number;
                /**
                 * Scrolls activeInput so the caret is in view.
                 * @param activeInput The element which should be scrolled.
                 * @function
                 */
                protected __scrollCaretIntoViewbox(activeInput: HTMLInputElement | HTMLTextAreaElement): void;
                /**
                 * Gets a div with the same styles as the passed HTMLElement. Only styles affecting text rendering are copied. Used in conjunction with __getCaretCoordinates.
                 * @param element The element to mirror.
                 * @function
                 */
                protected __getMirrorElement(element: HTMLElement): HTMLDivElement;
                /**
                 * Gets the pixel coordinates of a caret placed in a text in the passed HTMLElement.
                 * @param mirrorElement The element in which the text should be rendered.
                 * @param text          The text in which the caret is positioned.
                 * @param caretPosition The position of the caret.
                 * @function
                 */
                protected __getCaretCoordinates(mirrorElement: HTMLElement, text: string, caretPosition: number): {
                    top: number;
                    left: number;
                };
                /**
                 * Replaces escaped characters with their unescaped counterparts.
                 * @param value The string to unescape.
                 * @function
                 */
                protected __unescape(value: string): string;
                /**
                 * Sets the value of the 'data-tchmi-layout' attribute.
                 * @param valueNew The new value for layout.
                 * @attributeSetter
                 * @function
                 */
                setLayout(valueNew: string | null): void;
                /**
                 * Gets the value of the 'data-tchmi-layout' attribute.
                 * @attributeGetter
                 * @function
                 */
                getLayout(): string | undefined;
                /**
                 * Processes the value of the 'data-tchmi-layout' attribute.
                 * @function
                 */
                protected __processLayout(): void;
                /**
                * Sets the value of the 'data-tchmi-layout-file' attribute.
                * @param valueNew The new value for layoutFile.
                * @attributeSetter
                * @function
                */
                setLayoutFile(valueNew: string | null): void;
                /**
                 * Gets the value of the 'data-tchmi-layout-file' attribute.
                 * @attributeGetter
                 * @function
                 */
                getLayoutFile(): string | null | undefined;
                /**
                 * Processes the value of the 'data-tchmi-layout-file' attribute.
                 * @function
                 */
                protected __processLayoutFile(): void;
                protected __loadLayoutFile(url: string): void;
                /**
                 * Processes the content of the received layout file.
                 * @function
                 */
                protected __processLayoutJsonFile(): void;
                /**
                 * Creates HTMLElements according to the passed layout.
                 * @param layout The layout to activate.
                 * @function
                 */
                protected __activateLayout(layout: TcHmiKeyboard.Layout): void;
                /**
                 * Creates a key HTML element.
                 * @param definition The definition of the key.
                 * @function
                 */
                protected __createKey(definition: TcHmiKeyboard.KeyDefinition): HTMLDivElement | undefined;
                /**
                 * Sets the value of the 'data-tchmi-scale-mode' attribute.
                 * @param valueNew The new value for scaleMode.
                 * @attributeSetter
                 * @function
                 */
                setScaleMode(valueNew: ScaleModeString | null): void;
                /**
                 * Gets the value of the 'data-tchmi-scale-mode' attribute.
                 * @attributeGetter
                 * @function
                 */
                getScaleMode(): "None" | "ScaleToFill" | "ScaleToFit" | "ScaleToFitWidth" | "ScaleToFitHeight" | undefined;
                /**
                 * Processes the value of the 'data-tchmi-scale-mode' attribute.
                 * @function
                 */
                protected __processScaleMode(): void;
                /**
                 * Sets the value of the 'data-tchmi-fixed-target' attribute.
                 * @param valueNew The new value for fixedTarget.
                 * @attributeSetter
                 * @function
                 */
                setFixedTarget(valueNew: string | null): void;
                /**
                 * Gets the value of the 'data-tchmi-fixed-target' attribute.
                 * @attributeGetter
                 * @function
                 */
                getFixedTarget(): string | undefined;
                /**
                 * Processes the value of the 'data-tchmi-fixed-target' attribute.
                 * @function
                 */
                protected __processFixedTarget(): void;
                /**
                 * Sets the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
                 * @param valueNew The new value for releaseStickyKeysManually.
                 * @attributeSetter
                 * @function
                 */
                setReleaseStickyKeysManually(valueNew: boolean | null): void;
                /**
                 * Gets the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
                 * @attributeGetter
                 * @function
                 */
                getReleaseStickyKeysManually(): boolean | undefined;
                /**
                 * Processes the value of the 'data-tchmi-release-sticky-keys-manually' attribute.
                 * @function
                 */
                protected __processReleaseStickyKeysManually(): void;
                /**
                 * Adds new entries to __pressedKeys and raises the .onKeyPressStarted Event.
                 * @param keyElement The key element being pressed.
                 */
                protected __raiseKeyPressStarted(keyElement: HTMLElement): void;
                /**
                 * Removes entries from __pressedKeys and raises the .onKeyPressCanceled or .onKeyPressFinished Event and the .onKeyPressEnded Event.
                 * @param keyElement            The key element which was released.
                 * @param canceledOrFinished    Whether the key press was canceled or finished.
                 */
                protected __raiseKeyPressEnded(keyElement: HTMLElement, canceledOrFinished: 'Canceled' | 'Finished'): void;
                /**
                 * Gets the value of the 'data-tchmi-pressed-keys' readonly attribute.
                 * @attributeGetter
                 * @function
                 */
                getPressedKeys(): TcHmiKeyboard.SimpleKey[];
                /**
                 * Sets the longpressDelay and calls the associated process function (processLongpressDelay).
                 * @function
                 * @param   {Number}    valueNew     -   The new value for longpressDelay.
                 */
                setLongpressDelay(valueNew: number | null): void;
                /**
                 * Returns the current value of longpressDelay.
                 * @function
                 * @returns      {MeasurementValue}    The current value of longpressDelay.
                 */
                getLongpressDelay(): number | undefined;
                /**
                 * Processes the current longpressDelay attribute value.
                 * @function
                 */
                protected __processLongpressDelay(): void;
                /**
                 * Sets the repetitionDelay and calls the associated process function (processRepetitionDelay).
                 * @function
                 * @param   {Number}    valueNew     -   The new value for repetitionDelay.
                 */
                setRepetitionDelay(valueNew: number | null): void;
                /**
                 * Returns the current value of repetitionDelay.
                 * @function
                 * @returns      {MeasurementValue}    The current value of repetitionDelay.
                 */
                getRepetitionDelay(): number | undefined;
                /**
                 * Processes the current repetitionDelay attribute value.
                 * @function
                 */
                protected __processRepetitionDelay(): void;
                /**
                 * Sets the value of the 'data-tchmi-keyboard-padding' attribute.
                 * @param valueNew The new value for keyboardPadding.
                 * @attributeSetter
                 * @function
                 */
                setKeyboardPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the keyboardPadding object resolver.
                 */
                protected __onResolverForKeyboardPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                 * Gets the value of the 'data-tchmi-keyboard-padding' attribute.
                 * @attributeGetter
                 * @function
                 */
                getKeyboardPadding(): FourSidedCss | null | undefined;
                /**
                 * Processes the value of the 'data-tchmi-keyboard-padding' attribute.
                 * @function
                 */
                protected __processKeyboardPadding(): void;
                /**
                 * Sets the value of the 'data-tchmi-key-padding' attribute.
                 * @param valueNew The new value for keyPadding.
                 * @attributeSetter
                 * @function
                 */
                setKeyPadding(valueNew: string | null): void;
                /**
                 * The watch callback for the keyPadding object resolver.
                 */
                protected __onResolverForKeyPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                 * Gets the value of the 'data-tchmi-key-padding' attribute.
                 * @attributeGetter
                 * @function
                 */
                getKeyPadding(): FourSidedCss | null | undefined;
                /**
                 * Processes the value of the 'data-tchmi-key-padding' attribute.
                 * @function
                 */
                protected __processKeyPadding(): void;
                /**
                 * Sets the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
                 * @param valueNew The new value for additionalKeyBackdropPadding.
                 * @attributeSetter
                 * @function
                 */
                setAdditionalKeyBackdropPadding(valueNew: FourSidedCss | null): void;
                /**
                 * The watch callback for the additionalKeyBackdropPadding object resolver.
                 */
                protected __onResolverForAdditionalKeyBackdropPaddingWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<FourSidedCss>) => void;
                /**
                 * Gets the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
                 * @attributeGetter
                 * @function
                 */
                getAdditionalKeyBackdropPadding(): FourSidedCss | null | undefined;
                /**
                 * Processes the value of the 'data-tchmi-additional-key-backdrop-padding' attribute.
                 * @function
                 */
                protected __processAdditionalKeyBackdropPadding(): void;
                /**
                 * Sets the font size and calls the associated process function (processLabelFontSize).
                 * @function
                 * @param   {MeasurementValue}    valueNew     -   The new value for labelFontSize.
                 */
                setLabelFontSize(valueNew: number | null): void;
                /**
                 * Returns the current value of labelFontSize.
                 * @function
                 * @returns      {MeasurementValue}    The current value of labelFontSize.
                 */
                getLabelFontSize(): number | undefined;
                /**
                 * Processes the current labelFontSize attribute value.
                 * @function
                 */
                protected __processLabelFontSize(): void;
                /**
                 * Sets the font size and calls the associated process function (processLabelFontSizeUnit).
                 * @function
                 * @param   {MeasurementUnit}    valueNew     -   The new value for labelFontSizeUnit.
                 *                                       Possible values : px, %
                 */
                setLabelFontSizeUnit(valueNew: FontSizeUnit | null): void;
                /**
                 * Returns the current value of labelFontSizeUnit.
                 * @function
                 * @returns      {MeasurementUnit}    The current value of labelFontSizeUnit.
                 */
                getLabelFontSizeUnit(): "em" | "px" | "%" | "rem" | undefined;
                /**
                 * Processes the current labelFontSizeUnit attribute value.
                 * @function
                 */
                protected __processLabelFontSizeUnit(): void;
                /**
                 * Sets the font family and calls the associated process function (processLabelFontFamily).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelFontFamily.
                 */
                setLabelFontFamily(valueNew: FontFamily | null): void;
                /**
                 * Returns the current value of labelFontFamily.
                 * @function
                 * @returns      {string}    The current value of labelFontFamily.
                 */
                getLabelFontFamily(): string | null | undefined;
                /**
                 * Processes the current labelFontFamily attribute value.
                 * @function
                 */
                protected __processLabelFontFamily(): void;
                /**
                 * Sets the font style and calls the associated process function (processLabelFontStyle).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelFontStyle.
                 */
                setLabelFontStyle(valueNew: FontStyle | null): void;
                /**
                 * Returns the current value of labelFontStyle.
                 * @function
                 * @returns      {string}    The current value of labelFontStyle.
                 */
                getLabelFontStyle(): "Normal" | "Italic" | "Oblique" | "Auto" | undefined;
                /**
                 * Processes the current labelFontStyle attribute value.
                 * @function
                 */
                protected __processLabelFontStyle(): void;
                /**
                 * Sets the font weight and calls the associated process function (processLabelFontWeight).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelFontWeight.
                 */
                setLabelFontWeight(valueNew: FontWeight | null): void;
                /**
                 * Returns the current value of labelFontWeight.
                 * @function
                 * @returns      {string}    The current value of labelFontWeight.
                 */
                getLabelFontWeight(): "Normal" | "Auto" | "Bold" | undefined;
                /**
                 * Processes the current labelFontWeight attribute value.
                 * @function
                 */
                protected __processLabelFontWeight(): void;
                /**
                 * Sets the font weight and calls the associated process function (processLabelStrokeThickness).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelStrokeThickness.
                 */
                setLabelStrokeThickness(valueNew: number | null): void;
                /**
                 * Returns the current value of labelStrokeThickness.
                 * @function
                 * @returns      {string}    The current value of labelStrokeThickness.
                 */
                getLabelStrokeThickness(): number | null | undefined;
                /**
                 * Processes the current labelStrokeThickness attribute value.
                 * @function
                 */
                protected __processLabelStrokeThickness(): void;
                /**
                 * Sets the keyBackground color and calls the associated process function (processKeyBackgroundColor).
                 * @function
                 * @param   {string}    valueNew     -   The new value for keyBackgroundColor.
                 */
                setKeyBackgroundColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the keyBackgroundColor object resolver.
                 */
                protected __onResolverForKeyBackgroundColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                 * Returns the current value of keyBackgroundColor.
                 * @function
                 * @returns      {string}    The current value of keyBackgroundColor.
                 */
                getKeyBackgroundColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Processes the current keyBackgroundColor attribute value.
                 * @function
                 */
                protected __processKeyBackgroundColor(): void;
                /**
                 * Sets the label color and calls the associated process function (processLabelColor).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelColor.
                 */
                setLabelColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the labelColor object resolver.
                 */
                protected __onResolverForLabelColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                 * Returns the current value of labelColor.
                 * @function
                 * @returns      {string}    The current value of labelColor.
                 */
                getLabelColor(): SolidColor | null | undefined;
                /**
                 * Processes the current labelColor attribute value.
                 * @function
                 */
                protected __processLabelColor(): void;
                /**
                 * Sets the labelStroke color and calls the associated process function (processLabelStrokeColor).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelStrokeColor.
                 */
                setLabelStrokeColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the labelStrokeColor object resolver.
                 */
                protected __onResolverForLabelStrokeColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                 * Returns the current value of labelStrokeColor.
                 * @function
                 * @returns      {string}    The current value of labelStrokeColor.
                 */
                getLabelStrokeColor(): SolidColor | null | undefined;
                /**
                 * Processes the current labelStrokeColor attribute value.
                 * @function
                 */
                protected __processLabelStrokeColor(): void;
                /**
                 * Sets the labelFill color and calls the associated process function (processLabelFillColor).
                 * @function
                 * @param   {string}    valueNew     -   The new value for labelFillColor.
                 */
                setLabelFillColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the labelFillColor object resolver.
                 */
                protected __onResolverForLabelFillColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                 * Returns the current value of labelFillColor.
                 * @function
                 * @returns      {string}    The current value of labelFillColor.
                 */
                getLabelFillColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Processes the current labelFillColor attribute value.
                 * @function
                 */
                protected __processLabelFillColor(): void;
                /**
                 * Sets the additionalKeyBackdrop color and calls the associated process function (processAdditionalKeyBackdropColor).
                 * @function
                 * @param   {string}    valueNew     -   The new value for additionalKeyBackdropColor.
                 */
                setAdditionalKeyBackdropColor(valueNew: Color | null): void;
                /**
                 * The watch callback for the additionalKeyBackdropColor object resolver.
                 */
                protected __onResolverForAdditionalKeyBackdropColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<Color>) => void;
                /**
                 * Returns the current value of additionalKeyBackdropColor.
                 * @function
                 * @returns      {string}    The current value of additionalKeyBackdropColor.
                 */
                getAdditionalKeyBackdropColor(): SolidColor | LinearGradientColor | null | undefined;
                /**
                 * Processes the current additionalKeyBackdropColor attribute value.
                 * @function
                 */
                protected __processAdditionalKeyBackdropColor(): void;
            }
            module TcHmiKeyboard {
                interface LayoutCollection {
                    layouts: Layout[];
                }
                interface Layout {
                    name: string;
                    dimensions: Dimensions;
                    keys: KeyDefinition[];
                }
                interface KeyDefinition {
                    geometry: {
                        top: number;
                        left: number;
                        width: number;
                        height: number;
                    };
                    type?: 'character' | 'modifier' | 'action' | 'edit' | 'layout-switch';
                    shiftType?: 'character' | 'modifier' | 'action' | 'edit';
                    ctrlType?: 'character' | 'modifier' | 'action' | 'edit';
                    altType?: 'character' | 'modifier' | 'action' | 'edit';
                    ctrlAltType?: 'character' | 'modifier' | 'action' | 'edit';
                    numlockType?: 'character' | 'modifier' | 'action' | 'edit';
                    mode?: 'normal' | 'sticky' | 'toggle';
                    code: string;
                    key: string;
                    shiftKey?: string;
                    ctrlKey?: string;
                    altKey?: string;
                    ctrlAltKey?: string;
                    numlockKey?: string;
                    longpressAction?: 'none' | 'repeat' | 'additionalKeys';
                    additionalKeys?: KeyDefinition[];
                    location?: 'standard' | 'left' | 'right' | 'numpad';
                    noCapsLock?: boolean;
                    ignoreModifiers?: boolean;
                    labels?: LabelDefinition[];
                    layoutName?: string;
                    composition?: Dictionary<string>;
                }
                interface LabelDefinition {
                    type: 'text' | 'svg' | 'image';
                    position?: string;
                    visible?: string[];
                    hidden?: string[];
                    text?: string;
                    svg?: {
                        dimensions: Dimensions;
                        path: string;
                    };
                    image?: {
                        dimensions?: Dimensions;
                        source: string;
                    };
                }
                interface Dimensions {
                    width: number;
                    height: number;
                }
                interface Key {
                    code: string[];
                    key: string[];
                    keyPath: string[];
                    unmodifiedKey: string[];
                    type: KeyType;
                    mode: KeyMode;
                    location: KeyLocation[];
                    active: boolean;
                    locked: boolean;
                    noCapsLock: boolean;
                    ignoreModifiers: boolean;
                    valid: boolean;
                    longpressAction: LongpressAction;
                    composition?: Dictionary<string>;
                }
                interface StickiedKey extends Key {
                    locked: boolean;
                    stickTime: number;
                }
                interface SimpleKey {
                    /** Special string for each physical key on the keyboard (does not have to be the same as the corresponding char) */
                    code: string;
                    /** Value of the key pressed */
                    key: string;
                    unmodifiedKey: string;
                    /** Location of the pressed key  */
                    location: 'standard' | 'left' | 'right' | 'numpad';
                }
                interface LayoutSwitch {
                    type: KeyType.LAYOUTSWITCH;
                    layoutName: string;
                }
                function isLayoutSwitch(key: Key | LayoutSwitch): key is LayoutSwitch;
                enum KeyType {
                    CHARACTER = 0,
                    MODIFIER = 1,
                    ACTION = 2,
                    EDIT = 3,
                    LAYOUTSWITCH = 4
                }
                enum KeyMode {
                    NORMAL = 0,
                    STICKY = 1,
                    TOGGLE = 2
                }
                enum KeyLocation {
                    STANDARD = 0,
                    LEFT = 1,
                    RIGHT = 2,
                    NUMPAD = 3
                }
                enum LongpressAction {
                    NONE = 0,
                    REPEAT = 1,
                    ADDITIONALKEYS = 2,
                    LOCK = 3
                }
                interface TcHmiKeyboardEventInit extends KeyboardEventInit {
                    charCode?: number;
                    keyCode?: number;
                    which?: number;
                }
            }
        }
    }
}
