/**
* TcHmiContainerControl
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContainerControl extends TcHmi.Controls.System.TcHmiControl {
                /** Constructor */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __widthMode: SizeModeWithContent | undefined;
                protected __heightMode: SizeModeWithContent | undefined;
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
               * Get all children controls
               * @function
               */
                getChildren(): TcHmi.Controls.System.baseTcHmiControl[];
                /**
                 * Adds a child to the __children Array and links the parent. No DOM insertion is done!
                 * @function
                 */
                addChild(co: TcHmi.Controls.System.baseTcHmiControl, pos: number | null): void;
                __addChild(co: TcHmi.Controls.System.baseTcHmiControl, pos: number | null): void;
                /**
                 * Remove a child control.
                 * @function
                 */
                removeChild(co: TcHmi.Controls.System.baseTcHmiControl): void;
                __removeChild(co: TcHmi.Controls.System.baseTcHmiControl): void;
                /**
                * Processes the current isEnabled attribute value and of its children.
                * @function
                */
                __processIsEnabled(): void;
                /**
                * Processes the current AccessConfig attribute value and of its children.
                * @function
                */
                __processAccessConfig(): void;
                /**
                * Processes the current height and height unit.
                * @function
                */
                __processHeight(callerControl?: TcHmiControl): void;
                /**
                * Processes the current width and width unit.
                * @function
                */
                __processWidth(callerControl?: TcHmiControl): void;
                /**
                * Sets the value of the width mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new width mode value..
                */
                setWidthMode(valueNew: SizeModeWithContent | null): void;
                /**
                * Sets the value of the height mode attribute.
                * @function
                * @param    {string}    valueNew   -   The new height mode value..
                */
                setHeightMode(valueNew: SizeModeWithContent | null): void;
                /**
                 * Returns the calculated width in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentWidth(): number | null;
                /**
                 * Returns the calculated height in pixel if self defined (not percent based) or based on the children.
                 */
                __getContentHeight(): number | null;
            }
        }
    }
}
