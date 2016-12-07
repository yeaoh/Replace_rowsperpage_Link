chrome.storage.local.get(
	{
		rowsNum: 2000
	},
	function(items) {
		replaceRowsperpageValue(items.rowsNum);
	}
);

function replaceRowsperpageValue(newRowsNum) {
	// ▼のclassをもとに「増やす」リンクを取得
	var $link = $(".moreArrow").parent();
	if(!$link.is("*")){
		return;
	}

	var moreLinkUrl = $link.attr("href");
	const REG_ROWSPERPAGE = /rowsperpage=[0-9]+/i;
	if (REG_ROWSPERPAGE.test(moreLinkUrl)) {
		var param = moreLinkUrl.match(REG_ROWSPERPAGE);
		var rows = param[0].split("=");

		if (parseInt(rows[1], 10) < parseInt(newRowsNum, 10)) {
			var moreLinkUrl_new = moreLinkUrl.replace(REG_ROWSPERPAGE, "rowsperpage=" + newRowsNum);
			$link.attr("href", moreLinkUrl_new);
		}
	}
};
