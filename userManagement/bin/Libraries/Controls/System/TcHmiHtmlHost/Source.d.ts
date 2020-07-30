/**
* TcHmiHtmlHost
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module System {
            class TcHmiHtmlHost extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /** */
                protected __elementTemplateRoot: JQuery;
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
                */
                setContent(value: string | null): void;
                /**
                * @function
                */
                getContent(): string;
            }
        }
    }
}
