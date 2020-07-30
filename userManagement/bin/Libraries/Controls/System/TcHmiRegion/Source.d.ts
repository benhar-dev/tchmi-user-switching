/**
* TcHmiRegion
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module System {
            class TcHmiRegion extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** Html template loaded from templateCache. */
                protected __template: string | undefined;
                /**  Internal reference to the attribute "data-tchmi-content" */
                protected __targetContent: string | null | undefined;
                /**  Internal reference to the attribute "data-tchmi-scale-mode" */
                protected __scaleMode: ScaleModeString | undefined;
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
                /**  Internal reference to the attribute "data-tchmi-size-mode" */
                protected __scrolling: 'No' | 'Yes' | 'Auto' | undefined;
                /** Initialize content */
                protected __elementTemplateRoot: JQuery;
                /** Current Content Object */
                protected __targetObject: TcHmi.Controls.System.baseTcHmiControl | null;
                /** Current Content Markup */
                protected __targetmarkup: string | null;
                protected __onContentResizedEventDestroyEvent: DestroyFunction | null;
                protected __onResizedEventDestroyEvent: DestroyFunction | null;
                private __onContentChangedEventDestroyEvent;
                private __onContentCreatedEventDestroyEvent;
                private __onContentRemovedEventDestroyEvent;
                private __xhr;
                protected __asyncWorkData: TcHmiRegion.IControlSpecificData;
                /**
                 * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                 * Call attribute processor functions here to initialize default values!
                 */
                __previnit(): void;
                /**
                * If raised, all attributes have been set to it's default or dom values.
                */
                __init(): void;
                /**
                  * @function
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
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
                protected __doAsyncWork(): void;
                /**
                 * @function
                 * @param url
                 */
                private __tryContentRefresh;
                private __onContentChanged;
                private __onContentCreated;
                private __onContentRemoved;
                /**
                 * Checks if partial does alredy exist in parent hierarchy of current region instance!
                 * @param partial
                 */
                protected __isRecursionSave(path: string): boolean;
                /**
                * Sets the value of the width mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current width and width unit.
                * @function
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                * Sets the value of the height mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Processes the current height and height unit.
                * @function
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the content control.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the content control.
                 */
                __getContentHeight(): number | null;
                /**
                 * Sets the content value and calls the associated process function (processContent).
                 * @function
                 * @param   {string|Null}    valueNew    -   The new value for the content attribute as string. Relative path value.
                 *
                 */
                setTargetContent(valueNew: string | null): void;
                /**
                * Returns the current content value.
                * @function
                * @returns      {string}    The current value of the content member variable as string. Relative path value.
                */
                getTargetContent(): string | null | undefined;
                /**
                 * Destroy and remove currently existing content...
                 * @function
                 */
                private __destroyTargetobjObject;
                /**
                * Processes the current content value.
                * @param override
                * @function
                */
                protected __processTargetContent(override?: string | null): void;
                protected __processTargetMarkup(markup: string): void;
                /**
                * Calls the base isEnabled function, clones the attribute to the inner obj which calls __processIsEnabled of its Children
                * @function
                * @param   {string}    valueNew     -   The new value for isEnabled.
                */
                setIsEnabled(valueNew: boolean | null): void;
                /**
                * Processes the current isEnabled attribute value and of its obj.
                * @function
                */
                __processIsEnabled(): void;
                /**
                * Processes the current AccessConfig attribute value and of its obj.
                * @function
                */
                __processAccessConfig(): void;
                setScaleMode(valueNew: ScaleModeString | null): void;
                getScaleMode(): "None" | "ScaleToFill" | "ScaleToFit" | "ScaleToFitWidth" | "ScaleToFitHeight" | undefined;
                protected __processScaleMode(): void;
                setScrolling(valueNew: 'No' | 'Yes' | 'Auto' | null): void;
                getScrolling(): "No" | "Yes" | "Auto" | undefined;
                protected __processScrolling(): void;
            }
            module TcHmiRegion {
                interface IControlSpecificData extends TcHmiControl.IControlSpecificData {
                    'System.TcHmiRegion.contentResized': boolean;
                    'System.TcHmiRegion.controlResized': boolean;
                }
            }
        }
    }
}
