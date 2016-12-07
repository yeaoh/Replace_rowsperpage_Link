$(function(){
	// Saveボタン押下
	$("#save").on('click',function(){
		saveOptions();
	});

	// 初期値を設定
	restoreOptions();
});

// オプションの保存
function saveOptions(){
	var rowsNum = $("#rowsNum").val();
	chrome.storage.local.set(
		{
			rowsNum: rowsNum
		},
		function(){
			$("#saveStatus").text("Save OK!");
		}
	);
}

// オプションの取得
function restoreOptions(){
	chrome.storage.local.get(
		{
			rowsNum: 2000
		},
		function(items) {
			$("#rowsNum").val(items.rowsNum);
		}
	);

}