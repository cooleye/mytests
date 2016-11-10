function fileLoader(url,success,error) {

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                success && success(xhr.responseText, xhr.responseXML);
            } else {
                error && error(status);
            }
        }
    }

    //连接 和 发送 - 第二步
    xhr.open("GET",url, true);
    xhr.send(null);
}


export default ajax;
