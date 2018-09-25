function sendHelloToAndroid() {
    // body...
    //console.log("call android")
    if (window.android != null && typeof(window.android) != "undefined") {
        window.android.callAndroid("你好，Android! ");
    } else {
        alert(typeof(window.android));
    }
}

function callByAndroid() {
    console.log("callByAndroid")
    alert("Js收到消息");
    showElement("Js收到消息-->无参方法callByAndroid被调用");
}

function callByAndroidParam(msg1) {
    console.log("callByAndroid_param")
    alert("Js收到消息：" + msg1);
    showElement("Js收到消息-->方法callByAndroidParam被调用,参数:" + msg1);

}

function callByAndroidMoreParams(objs, msg2, msg3) {

    alert("Js收到消息：" + "id:" + objs.id.toString() + " name:" + objs.name + " age:" + objs.age.toString() + msg2 + msg3);
    showElement("Js收到消息-->方法callByAndroidMoreParam被调用 , 参数1:" + objs + "  参数2:" + msg2 + "  参数3:" + msg3);
    return "ok";
}

function callByAndroidInteraction(msg) {

    showElement(msg)

    window.setTimeout(sendHelloToAndroid, 1000);

}


function showElement(msg) {
    var div = document.getElementById("div_box");       //获取div
    var ele = document.createElement('h6');             //创建h2元素节点
    ele.innerHTML = msg;                                //设置h2节点的内容
    div.appendChild(ele);                               //添加子节点ele
}