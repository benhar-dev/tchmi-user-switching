declare module TcHmi {
    module Functions {
        module Beckhoff {
            function Decrement(ctx: Required<TcHmi.Context>, symbol: TcHmi.Symbol | null, minValue?: number | null, stepWidth?: number | null): void;
        }
    }
}
