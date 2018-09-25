function testDiv() {
    document.getElementById("show").innerHTML = document.getElementsByTagName("html")[0].innerHTML;
}

function testClick() {
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;

    //send message to native
    var data = {id: 1, content: "这是一个图片 <img src=\"a.png\"/> test\r\nhahaha"};
    window.WebViewJavascriptBridge.send(
        data
        , function (responseData) {
            document.getElementById("show").innerHTML = "repsonseData from java, data = " + responseData
        }
    );

}

function testClick1() {
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;

    //call native method
    window.WebViewJavascriptBridge.callHandler(
        'submitFromWeb'
        , {'param': '中文测试'}
        , function (responseData) {
            document.getElementById("show").innerHTML = "send get responseData from java, data = " + responseData
        }
    );
}

function bridgeLog(logContent) {
    document.getElementById("show").innerHTML = logContent;
}

function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function () {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
}

connectWebViewJavascriptBridge(function (bridge) {
    bridge.init(function (message, responseCallback) {
        console.log('Js got a message', message);
        var data = {
            'Javascript Responds': '测试中文!'
        };
        console.log('Js responding with', data);
        responseCallback(data);
    });

    bridge.registerHandler("functionInJs", function (data, responseCallback) {
        document.getElementById("show").innerHTML = ("data from Java: = " + data);
        var responseData = "Javascript Says Right back aka!";
        responseCallback(responseData);
    });
})