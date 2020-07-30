declare module TcHmi {
    module Controls {
        module System {
            class TcHmiUserControl extends TcHmi.Controls.System.TcHmiPartial {
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                static readonly __type: 'tchmi-user-control';
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
