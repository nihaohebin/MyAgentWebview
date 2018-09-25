/**
 * 从 file 域获取 本地图片 url
 *
 */
function getFileUrl(sourceId) {
    var url;
    console.log(navigator.userAgent);
    if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
        url = document.getElementById(sourceId).value;
    } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
        url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
    }
    return url;
}

/**
 * 将本地图片 显示到浏览器上
 *
 */
function preImg(sourceId, targetId) {
    document.getElementById("uploadFile")
    var url = getFileUrl(sourceId);
    console.log(url);
    var imgPre = document.getElementById(targetId);
    imgPre.src = url;
}


bindEvent(window, 'load', function () {
    var ip = document.getElementById("file_upload");


    bindEvent(ip, 'click', function (e) {
        // alert("我是" + this + "元素, 你点击了我!");

        //alert("Js  调 Android 方法成功");
        if (window.agentWeb != null && typeof(window.agentWeb) !== "undefined") {
            window.agentWeb.uploadFile();
        } else {
            alert(typeof(window.agentWeb));
        }
    });


});

//这里返回来的是一个 Json 数组 //
function uploadFileResult(objs) {

    // console.log(message);
    //alert(objs);
    //alert("Android 调 Js 方法");

    if (objs == null || typeof(objs) == "undefined" || objs.length == 0) {

        //alert("");

    } else {

        var img = document.getElementById("preview");
        /*for(var i=0;i<objs.length;i++){  //
        img.src="data:image/png;base64," + objs[i].fileBase64*/
        if (objs[0] == null || objs[0] == 'undefined' || objs[0] == '' || objs[0].fileBase64 == null || objs[0].fileBase64 == 'undefined') {

        } else {
            img.src = "data:image/png;base64," + objs[0].fileBase64;
        }

    }

}
