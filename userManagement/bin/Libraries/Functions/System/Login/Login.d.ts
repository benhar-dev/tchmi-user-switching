declare module TcHmi {
    module Functions {
        module System {
            function Login(username: string | null, password: string | null, persistent: boolean): boolean;
        }
    }
}
