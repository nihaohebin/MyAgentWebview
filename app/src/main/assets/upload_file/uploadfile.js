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

$(function () {
    form.reset(); //清除浏览器记录的上次记录
    var file;
    $(form).on("change", "#file_upload", function () {

        // alert("call back")
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview");

        if (fileObj && fileObj.files && fileObj.files[0]) {

            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            //dataURL = getFileUrl('file_upload');;
            //console.log(" upload:"+dataURL+"    file:"+fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            console.log("else  upload");
            dataURL = $file.val();


            var imgObj = document.getElementById("preview");
            // 两个坑:
            // 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
            // 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;

        }
        //输出选中结果
        console.log(this.value);
        alert(this.value);
        //每次选中都保存旧元素，并使用新的控件替换
        $(this).clone().replaceAll(file = this);
    }).submit(function () {
        //提交时把之前保存的旧元素替换回去
        $("#file_upload").replaceWith(file);
    });
});