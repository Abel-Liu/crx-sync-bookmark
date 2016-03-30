syncing = false;

$(function() {
	loadLastSyncTime();
	
    $('#img_sync').click(function() {
        if (!syncing) {
            doSync();
        }
    });
});

function doSync() {
    syncing = true;
    $('#img_sync').addClass('animated infinite rotateIn');
    showMsg("正在同步...");
}

function endRotate() {
    $('#img_sync').removeClass('animated infinite rotateIn');
}

function loadLastSyncTime() {
    showMsg("最后同步时间：<br />2016-3-20 15:22");
}

function showMsg(msg) {
    $("#msg").html(msg);
}
