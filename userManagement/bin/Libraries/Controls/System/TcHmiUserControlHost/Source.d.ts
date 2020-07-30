/**
* TcHmiUserControlHost
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module System {
            interface TcHmiUserControlParameter {
                attrDescr: TcHmi.System.ControlAttributeDescription | null;
                value: any;
            }
            class TcHmiUserControlHost extends TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __markup: string | null | undefined;
                protected __config: TcHmi.System.UserControlConfig | null | undefined;
                protected readonly __targetUserControlUrl: string;
                protected readonly __targetUserControlUrlClean: string;
                protected readonly __targetUserControlConfigUrl: string;
                protected readonly __targetUserControlConfigUrlClean: string;
                protected __targetUserControlControlObject: TcHmi.Controls.System.TcHmiUserControl | null;
                protected __params: Dictionary<TcHmiUserControlParameter>;
                protected __partialDefaultVirtualRights: Dictionary<TcHmi.System.ControlAccessDescription>;
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
                protected __onUserControlChangedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlConfigChangedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlCreatedEventDestroyEvent: DestroyFunction | null;
                protected __onUserControlRemovedEventDestroyEvent: DestroyFunction | null;
                protected __elementTemplateRoot: JQuery;
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
                 * @function
                 * @param e
                 * @param data
                 */
                protected __onUserControlChanged(): (evt: EventProvider.Event, data: {
                    url: string;
                    content: string;
                }) => void;
                /**
                * @function
                * @param e
                * @param data
                */
                protected __onUserControlConfigChanged(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                 * @function
                 * @param e
                 * @param data
                 */
                protected __onUserControlCreated(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                * @function
                * @param e
                * @param data
                */
                protected __onUserControlRemoved(): (evt: EventProvider.Event, data: {
                    url: string;
                }) => void;
                /**
                * Returns the current value of attribute member "targetPartial".
                * @function
                * @returns {string}
                */
                getTargetUserControl(): string;
                /**
                * Calls the base isEnabled function, clones the attribute to the inner UserControl which calls __processIsEnabled of its Childrens
                * @function
                * @param   {string}    valueNew     -   The new value for isEnabled.
                */
                setIsEnabled(valueNew: boolean | null): void;
                /**
                * Processes the current isEnabled attribute value and of its UserControl.
                * @function
                */
                __processIsEnabled(): void;
                /**
                * Processes the current AccessConfig attribute value and of its UserControl.
                * @function
                */
                __processAccessConfig(): void;
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
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the usercontrol.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the usercontrol.
                 */
                __getContentHeight(): number | null;
                /**
                 * Gets virtual access of a user control
                 * @param name name of the control right to fetch
                 */
                getDescriptionAccessByName(name: string | null): TcHmi.System.ControlAccessDescription | null;
            }
        }
    }
}
