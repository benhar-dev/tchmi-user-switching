declare module TcHmi {
    module Functions {
        module Beckhoff {
            function ConvertBooleanToEnum<T>(value: boolean, trueValue: T, falseValue: T): T;
        }
    }
}
