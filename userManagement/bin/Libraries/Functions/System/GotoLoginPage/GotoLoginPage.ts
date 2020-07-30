module TcHmi {
    export module Functions {
        export module System {
            export function GoToLoginPage(): boolean {
                let conf = TcHmi.Server.getCurrentUserConfig();
                if (conf.state !== TcHmi.Server.userConfigState.usergroup) {
                    return false;
                }
                window.location.href = '/Login?Location=' + window.location.pathname;
                return true;
            }
        }
        registerFrameworkFunction('GoToLoginPage', System.GoToLoginPage, 'System/GotoLoginPage/GoToLoginPage.function.json');
    }
}