declare module TcHmi {
    module Functions {
        module Beckhoff {
            function ConvertBooleanToVisibility(value: boolean, falseValue?: 'Hidden' | 'Collapsed'): Visibility;
        }
    }
}
