/**
* TcHmiCheckbox
* -------------------------------------------------------------------
* (c) 2016 BECKHOFF Automation GmbH & Co. KG http://www.beckhoff.com
* -------------------------------------------------------------------
* @ignore
*/
declare module TcHmi {
    module Controls {
        module Beckhoff {
            class TcHmiCheckbox extends TcHmi.Controls.System.TcHmiControl {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                /**
                * Internal reference to the attribute 'data-tchmi-toggle-group'.
                * @type {string}
                */
                protected __toggleGroup: string | null | undefined;
                /**
                 * Internal reference to the attribute 'data-tchmi-toggle-state'.
                 */
                protected __toggleState: ToggleState | undefined;
                /**
                * Internal reference to the attribute "data-tchmi-state-symbol"
                */
                protected __stateSymbol: TcHmi.Symbol | undefined | null;
                /**
                * Internal reference to the attribute "data-tchmi-toggle-state-icon-color"
                */
                protected __toggleStateIconColor: TcHmi.SolidColor | null | undefined;
                /** Event destroy functions */
                protected __onPressedEventDestroyEvent: DestroyFunction | null;
                protected __resizedEventDestroyEvent: DestroyFunction | null;
                protected __onToggleGroupToggledEventDestroyEvent: DestroyFunction | null;
                /** Helper */
                protected __stateOld: boolean;
                protected __state: boolean;
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
                * Is raised if a member of 'toggleGroup' has raised the toggled event.
                * @function
                * @callback
                */
                protected __onToggleGroupToggled(): (evt: EventProvider.Event, data: {
                    ActiveElementId: string;
                }) => void;
                /**
                * Sets the toggleGroup attribute to a new value.
                * @function
                * @param   {string}    valueNew    -   The new value for the toggleGroup attribute.
                */
                setToggleGroup(valueNew: string | null): void;
                /**
                * Returns the current  value of the toggleGroup attribute
                * @function
                */
                getToggleGroup(): string | null | undefined;
                /**
                * Processes the current value of the toggleGroup attribute.
                * @function
                */
                protected __processToggleGroup(): void;
                /**
                 * Processes the current state if state has changed.
                 * @function
                 * @param   {boolean}    forwardStateSymbol      -   Controls if a change should be reflected to an possible existing state symbol.
                 *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                 */
                protected __processState(state: boolean, forwardStateSymbol?: boolean): void;
                /**
                 * Returns an event handler function for the onResized event.
                 * @function
                 */
                protected __onResized(): (evt: EventProvider.Event, ctrl: System.TcHmiControl) => void;
                /**
                 * Is raised when the onPressed event is fired from the base control.
                 * @function
                 * @callback
                 */
                protected __onPressed(): () => void;
                /**
                * Sets the toggleState attribute to a new value.
                * @function
                * @param   {string}     valueNew                -   The new value for the toggleState attribute.
                *                                                   Possible values: Normal, Active
                * @param   {boolean}    forwardStateSymbol      -   Controls if a change should be reflected to an possible existing state symbol.
                *                                                   This is required to prevent changes from the symbol to be written to the symbol again.
                 * @param  {boolean}    process                 -   Allows to disable underlying calls to processToggleState. Required if a StateSymbol change is reflected to the ToggleState.
                */
                protected __setToggleState(valueNew: ToggleState | null, forwardStateSymbol?: boolean, process?: boolean): void;
                /**
                 * Sets the toggleState attribute to a new value.
                 * @function
                 * @param   {string}    valueNew    -   The new value for the toggleState attribute.
                 *                                      Possible values: Normal, Active
                 */
                setToggleState(valueNew: ToggleState | null): void;
                /**
                 * Returns the current  value of the toggleState attribute
                 * @function
                 */
                getToggleState(): "Normal" | "Active" | undefined;
                /**
                 * Processes the current value of the toggleState attribute.
                 * @function
                 */
                protected __processToggleState(forwardStateSymbol?: boolean): void;
                /**
                * Sets the text color and calls the associated process function (processToggleStateIconColor).
                * @function
                * @param   {string}    valueNew     -   The new value for toggleStateIconColor.
                */
                setToggleStateIconColor(valueNew: SolidColor | null): void;
                /**
                 * The watch callback for the toggleStateIconColor object resolver.
                 */
                protected __onResolverForToggleStateIconColorWatchCallback: (data: Symbol.ObjectResolver.IWatchResultObject<SolidColor>) => void;
                /**
                * Returns the current value of toggleStateIconColor.
                * @function
                * @returns      {string}    The current value of toggleStateIconColor.
                */
                getToggleStateIconColor(): SolidColor | null | undefined;
                /**
                * Processes the current toggleStateIconColor attribute value.
                * @function
                */
                protected __processToggleStateIconColor(): void;
                protected __destroyStateSymbolWatch: DestroyFunction | null;
                protected __onStateSymbolWatch(): (data: Symbol.IReadResultObject) => void;
                /**
                 * @function
                 * @param valuewNew
                 */
                setStateSymbol(valuewNew: TcHmi.Symbol | null): void;
                /**
                 * @function
                 */
                getStateSymbol(): Symbol | null | undefined;
            }
        }
    }
}
