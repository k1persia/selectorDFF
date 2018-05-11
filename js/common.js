////////////////////
// 抽選
////////////////////
function getRadioValue(){
	var result = new Array();
	// ラジオボタンオブジェクトを取得する
	// TODO 追加した際は、loop値の最大値を変更すること
	for (loop=1; loop<=28; loop++) {
		var radios = document.getElementsByName('grp' + loop);

		// 取得したラジオボタンオブジェクトから選択されたものを探し出す
		for(var i=0; i<radios.length; i++){
			if (radios[i].checked) {
				if (radios[i].value !== '0') {
					// 選択されたラジオボタンのvalue値を取得する
					result.push(radios[i].value);
					break;
				}
			}
		}
	}
	// 選択されていない場合
	if (result.length == 0) {
		alert("選択されていません");
	} else {
		// 選択されたvalue値からランダムで表示する
		alert("「" + result[Math.floor(Math.random() * result.length)] + "」です");
	}
}

////////////////////
// ラジオボタン一括変更
////////////////////
function setCheck(checkname){
	var elm = document.getElementsByClassName(checkname);
	for (var elmloop=0; elmloop<elm.length; elmloop++) {
		elm[elmloop].checked = true;
	}
}