var mockServer = require('mockserver-grunt');

mockServer.start_mockserver({
                serverPort: 1080,
                proxyPort: 1090,
                verbose: false
            });

//mockserver.stop_mockserver();