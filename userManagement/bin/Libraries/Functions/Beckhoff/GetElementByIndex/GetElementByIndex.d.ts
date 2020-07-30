declare module TcHmi {
    module Functions {
        module Beckhoff {
            function GetElementByIndex(ctx: Required<TcHmi.Context>, arraySymbol: TcHmi.Symbol | null, arrayIndex: number | null): void;
        }
    }
}
