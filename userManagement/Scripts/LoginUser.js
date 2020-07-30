// Keep this lines for a best effort IntelliSense of Visual Studio 2017.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.d.ts" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Controls\System\TcHmiControl\Source.d.ts" />

// Keep this lines for a best effort IntelliSense of Visual Studio 2013/2015.
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\Lib\jquery\jquery.js" />
/// <reference path="C:\TwinCAT\Functions\TE2000-HMI-Engineering\Infrastructure\TcHmiFramework\Latest\TcHmi.js" />

(function (TcHmi) {

    var LoginUser = function (UserName,Password,StayLoggedIn,ReloadPage) {

        if (TcHmi.Server.isWebsocketReady()) {
            var request = {
                "requestType": "ReadWrite",
                "commands": [
                    {
                        "commandOptions": ["SendErrorMessage", "SendWriteValue"],
                        "symbol": "Login",
                        "writeValue":
                        {
                            "userName": UserName,
                            "password": Password,
                            "persistent": StayLoggedIn
                        }
                    }
                ]
            };

            // Send request to TwinCAT HMI Server.
            TcHmi.Server.request(request, function (data) {
                // Callback handling.
                if (data.error !== TcHmi.Errors.NONE) {
                    // Handle TcHmi.Server class level error here.
                    return;
                }
                var response = data.response;
                if (response.error !== undefined) {
                    // Handle TwinCAT HMI Server response level error here.
                    return;
                }
                var commands = response.commands;
                if (commands === undefined) {
                    return;
                }
                for (var i = 0, ii = commands.length; i < ii; i++) {
                    var command = response.commands[i];
                    if (command === undefined) {
                        return;
                    }
                    if (command.error !== undefined) {
                        // Handle TwinCAT HMI Server command level error here.
                        return;
                    }
                    // Handle result...
                    if (command.symbol = "Login") {

                        if (StayLoggedIn) {
                            // Remember the current session for 30 days
                            document.cookie = "sessionId=" + command.readValue + ";path=/;max-age=" + 60 * 60 * 24 * 30;
                        } else {
                            // Reset max-age
                            document.cookie = "sessionId=" + command.readValue + ";path=/";
                        }

                        if (ReloadPage) {
                            // login was successful, load base url
                            if (window.location.href.indexOf("Login") != -1) {
                                window.location.href = window.location.href.replace(/Login.*?\//, '');
                            }
                            else {
                                window.location.reload();
                            }
                        }
                    }
                }
            });
        }
    };
    
    TcHmi.Functions.registerFunction('LoginUser', LoginUser);
})(TcHmi);