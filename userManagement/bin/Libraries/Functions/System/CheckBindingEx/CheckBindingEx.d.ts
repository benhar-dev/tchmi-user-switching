declare module TcHmi {
    module Functions {
        module System {
            function CheckBindingEx(control: TcHmi.Controls.System.baseTcHmiControl, propertyName: string, symbol: TcHmi.Symbol | null): boolean;
        }
    }
}
