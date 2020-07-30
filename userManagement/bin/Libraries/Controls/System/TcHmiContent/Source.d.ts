declare module TcHmi {
    module Controls {
        module System {
            class TcHmiContent extends TcHmi.Controls.System.TcHmiPartial {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                static readonly __type: 'tchmi-content';
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @function
                */
                destroy(): void;
            }
        }
    }
}
