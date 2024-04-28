function generateNickname() {
    const lastName = document.getElementById('lastName').value;
    const firstName = document.getElementById('firstName').value;
    
    // 入力がひらがなかどうかをチェック
    if (!lastName.match(/^[ぁ-ん]+$/) || !firstName.match(/^[ぁ-ん]+$/)) {
        document.getElementById('error').textContent = "苗字と名前はひらがなで入力してください。";
        return;
    } else {
        document.getElementById('error').textContent = ""; // エラーメッセージをクリア
    }

    // ナベさん設定
    if (lastName === "わたなべ") {
        document.getElementById('result').innerHTML = "あなたのあだ名は<div class='nickname'>ナベさん</div>です！";
        return;
    }

    
    const combinedName = lastName + firstName;
    let namePart;

    // 5%の確率で特別なあだ名を選択
    const specialNicknames = ["ミスターRUNTEQ", "神", "天使の遣い", "ジャイアン", "ナベさん", "上位魔人", "ストリートミュージシャン", "机が恋人", "いつも眠い人"];
    shuffleArray(specialNicknames);  // 特別なあだ名リストをシャッフル
    if (Math.random() < 0.05) {
        const specialNickname = specialNicknames[0];
        document.getElementById('result').innerHTML = "あなたのあだ名は<div class='nickname'>" + specialNickname + "</div>です！";
        return;
    }

    // 95%の通常のあだ名生成
    let nicknameSuffixes = ["たん", "っち", "ぴぃ", "っぺ", "てぃー", "ぽん", "っちょ", "ぺ～"];
    if ((lastName + firstName).length === 2) {  // 名前が2文字の場合、あだ名を追加
        nicknameSuffixes = nicknameSuffixes.concat(["くん", "ちゃん"]);
    }
    shuffleArray(nicknameSuffixes);  // あだ名リストをシャッフル

    // ランダムにあだ名を選ぶ
    const suffix = nicknameSuffixes[0];

    // "先生", "教授", "氏"が選ばれた場合、苗字を選択
    if (["先生", "教授", "氏"].includes(suffix)) {
        namePart = lastName;
    } else if (["くん", "ちゃん"].includes(suffix)) {
        // "くん", "ちゃん"が選ばれたら、名前を選択
        namePart = firstName;
    } else {
        // それ以外の場合、苗字・名前からランダムに選択
        namePart = Math.random() < 0.5 ? lastName.slice(0, 2) : firstName.slice(0, 2);
    }

    const nickname = namePart + suffix;
    document.getElementById('result').innerHTML = "あなたのあだ名は<div class='nickname'>" + nickname + "</div>です！";
}

function displaySpecialMessage() {
    const specialMessageElement = document.getElementById('specialMessage');
    specialMessageElement.textContent = "祝！SRあだ名！！";
    specialMessageElement.style.display = "block";
    specialMessageElement.className = "specialAnimation";
}

// フィッシャー-イェーツシャッフルアルゴリズム
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // 二つの要素の位置を交換
    }
}
