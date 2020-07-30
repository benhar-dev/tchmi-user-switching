declare module TcHmi {
    module Functions {
        module Beckhoff {
            /**
             * SetElementByIndex
             * @param array
             * @param arrayIndex
             * @param value
             */
            function SetElementByIndex(ctx: Required<TcHmi.Context>, arraySymbol: TcHmi.Symbol | null, arrayIndex: number | null, value: any): void;
        }
    }
}
