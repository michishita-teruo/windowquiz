
//時刻と日時取得
function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // JavaScriptの月は0から始まるため、1を加えます
  const date = now.getDate().toString().padStart(2, '0');

  // 時間の先頭数値が0の場合は表示しない
  if (hours < 10) {
    hours = hours.toString().slice(-1);
  }

  document.getElementById('time').textContent = `${hours}:${minutes}`;
  document.getElementById('date').textContent = `${year}/${month}/${date}`;
}

// 初回実行
updateTime();
// 1分ごとに更新
setInterval(updateTime, 60000);


// 天気取得
// API_cd217e2705d305b6d4161baaf8dc20b3

const apiKey = 'cd217e2705d305b6d4161baaf8dc20b3'; // あなたのAPIキーに置き換えてください
const city = 'Sapporo'; // 天気情報を取得したい都市名に置き換えてください

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    const temperature = data.main.temp - 273.15;
    document.getElementById('weather').textContent = `札幌の気温: ${temperature.toFixed(2)}°C`;
  })
  .catch(error => console.error('Error:', error));


// Bootstrap tooltip の再設定


// ツールチップの有効化

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    delay: 0 // 遅延時間を0に設定
  })
})



// クイズscript

const quiz = [
  {
    question: "<br><span>問題1:VSCodeの正式な名称は？</span><br>",
    answers: [
      "a) Visual Studio",
      "b) Visual Studio Code",
      "c) Code Visual Studio"
    ],
    correct: "b) Visual Studio Code",
    explanation: "<br>解説<br>Visual Studio Codeは略してVSCodeとも呼ばれ、Microsoftによって開発された無料かつオープンソースのソースコードエディタです。<br>"
  },
  {
    question: "<br><span>問題2: VSCodeで現在のファイルを閉じるショートカットは？</span><br>",
    answers: [
      "a) Ctrl + W",
      "b) Ctrl + Shift + W",
      "c) Ctrl + F4"
    ],
    correct: "a) Ctrl + W",
    explanation: "<br>解説<br>Ctrl + Wは現在のファイルを閉じるためのショートカットです。<br>"
  },
  {
    question: "<br><span>問題3: VSCodeでコードの自動補完を行うにはどの機能を利用しますか？</span><br>",
    answers: [
      "a) IntelliSense",
      "b) Code Assist",
      "c) AutoComplete"
    ],
    correct: "a) IntelliSense",
    explanation: "<br>解説<br>IntelliSenseはコードの自動補完やヒントを提供する機能です。<br>"
  },
  {
    question: "<br><span>問題4: VSCodeで行を削除するショートカットは？</span><br>",
    answers: [
      "a) Ctrl + Backspace",
      "b) Ctrl + K, Ctrl + D",
      "c) Ctrl + Shift + K"
    ],
    correct: "c) Ctrl + Shift + K",
    explanation: "<br>解説<br>選択した行を削除するためにはCtrl + Shift + Kを使用します。<br>"
  },
  {
    question: "<br><span>問題5: VSCodeで現在のファイルを新しいウィンドウで開くショートカットは？</span><br>",
    answers: [
      "a) Ctrl + N",
      "b) Ctrl + Shift + N",
      "c) Ctrl + \`"
    ],
    correct: "c) Ctrl + \`",
    explanation: "<br>解説<br>Ctrl + \`は現在のファイルを新しいウィンドウで開くためのショートカットです。<br>"
  },
  {
    question: "<br><span>問題6: VSCodeで全てのファイルから特定のテキストを検索する機能は？</span><br>",
    answers: [
      "a) Ctrl + Shift + F",
      "b) Ctrl + Shift + P",
      "c) Ctrl + Shift + S"
    ],
    correct: "a) Ctrl + Shift + F",
    explanation: "<br>解説<br>Ctrl + Shift + Fは全体のファイルでテキストを検索するための検索バーを開きます。<br>"
  },
  {
    question: "<br><span>問題7: VSCodeで行をコピーして貼り付けるときのショートカットは？</span><br>",
    answers: [
      "a) Ctrl + C / Ctrl + V",
      "b) Ctrl + D",
      "c) Ctrl + X / Ctrl + P"
    ],
    correct: "a) Ctrl + C / Ctrl + V",
    explanation: "<br>解説<br>行をコピーして貼り付けるためには通常のコピー・貼り付けショートカットを使用します。<br>"
  },
  {
    question: "<br><span>問題8: VSCodeでデフォルトのテーマを変更する方法は？</span><br>",
    answers: [
      "a) File > Preferences > Themes",
      "b) View > Appearance > Themes",
      "c) Settings > Theme"
    ],
    correct: "b) View > Appearance > Themes",
    explanation: "<br>解説<br>テーマはVSCodeの外観をカスタマイズするために使用され、このオプションは外観メニューの下にあります。<br>"
  },
  {
    question: "<br><span>問題9: VSCodeで現在のファイルを保存するショートカットは？</span><br>",
    answers: [
      "a) Ctrl + S",
      "b) Ctrl + Shift + S",
      "c) Ctrl + Alt + S"
    ],
    correct: "a) Ctrl + S",
    explanation: "<br>解説<br>Ctrl + Sは現在のファイルを保存するための標準的なショートカットです。<br>"
  },
  {
    question: "<br><span>問題10: VSCodeのファイルエクスプローラーで、ファイルやフォルダを削除するためのショートカットは？</span><br>",
    answers: [
      "a) Delete",
      "b) Ctrl + X",
      "c) Ctrl + Delete"
    ],
    correct: "a) Delete",
    explanation: "<br>解説<br>ファイルエクスプローラーでファイルやフォルダを選択してDeleteキーを使用すると削除できます。<br>"
  },

];

const quiz02 = [
  {
    question: "<br><span>問題1: 変数(variable)の略称は何ですか？</span><br>",
    answers: [
      "a) VAR",
      "b) VARI",
      "c) VARIA"
    ],
    correct: "a) VAR",
    explanation: "<br>解説<br>変数は通常、VARと略されます。<br>"
  },
  {
    question: "<br><span>問題2: 条件分岐を意味する言葉は何ですか？</span><br>",
    answers: [
      "a) Section",
      "b) Selection",
      "c) Division"
    ],
    correct: "b) Selection",
    explanation: "<br>解説<br>条件分岐はSelectionを指します。<br>"
  },
  {
    question: "<br><span>問題3: 再利用可能なコードのブロックを何と呼びますか？</span><br>",
    answers: [
      "a) Module",
      "b) Block",
      "c) Package"
    ],
    correct: "a) Module",
    explanation: "<br>解説<br>再利用可能なコードのブロックは通常Moduleと呼ばれます。<br>"
  },
  {
    question: "<br><span>問題4: 無限ループを作るために使われるキーワードは何ですか？</span><br>",
    answers: [
      "a) BREAK",
      "b) EXIT",
      "c) REPEAT"
    ],
    correct: "c) REPEAT",
    explanation: "<br>解説<br>無限ループを作成するためには通常REPEATキーワードが使用されます。<br>"
  },
  {
    question: "<br><span>問題5: 関数やメソッド内で使われ、特定の値を返すキーワードは何ですか？</span><br>",
    answers: [
      "a) RETURN",
      "b) RESULT",
      "c) OUTPUT"
    ],
    correct: "a) RETURN",
    explanation: "<br>解説<br>関数やメソッド内で特定の値を返すためには通常RETURNキーワードが使用されます。<br>"
  },
  {
    question: "<br><span>問題6: クラス内で初期化メソッドを表す一般的な名前は何ですか？</span><br>",
    answers: [
      "a) initMethod",
      "b) initialize",
      "c) start"
    ],
    correct: "b) initialize",
    explanation: "<br>解説<br>クラス内の初期化メソッドは通常initializeと呼ばれます。<br>"
  },
  {
    question: "<br><span>問題7: オブジェクト指向プログラミングで、クラスの設計図を何と呼びますか？</span><br>",
    answers: [
      "a) Blueprint",
      "b) Map",
      "c) Outline"
    ],
    correct: "a) Blueprint",
    explanation: "<br>解説<br>オブジェクト指向プログラミングでは、クラスの設計図をBlueprintと呼びます。<br>"
  },
  {
    question: "<br><span>問題8: 非同期処理を行うためのキーワードは何ですか？</span><br>",
    answers: [
      "a) SYNC",
      "b) ASYNC",
      "c) AWAIT"
    ],
    correct: "b) ASYNC",
    explanation: "<br>解説<br>非同期処理のためには通常ASYNCキーワードが使用されます。<br>"
  },
  {
    question: "<br><span>問題9: エラーをハンドリングするための構文は何ですか？</span><br>",
    answers: [
      "a) TRY-CATCH",
      "b) IF-ELSE",
      "c) ERROR-HANDLE"
    ],
    correct: "a) TRY-CATCH",
    explanation: "<br>解説<br>エラーハンドリングにはTRY-CATCH構文が一般的に使用されます。<br>"
  },
  {
    question: "<br><span>問題10: プログラム内で同じ処理を繰り返すための構文は何ですか？</span><br>",
    answers: [
      "a) REPEAT",
      "b) REDO",
      "c) LOOP"
    ],
    correct: "c) LOOP",
    explanation: "<br>解説<br>同じ処理を繰り返すためには通常LOOP構文が使用されます。<br>"
  }
];

let currentQuiz;
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
let element = document.getElementById('js-question');
const windowOpened = document.getElementById('window');
const $button = document.getElementsByClassName('quiz-button');
const buttonLength = $button.length;
let windowElement = document.querySelector('.window-content')//ウインドウスクロール用

// Desktop VScode icon click
function openWindow() {
  if (windowOpened.style.display === 'none') {//ウインドウが出ていなければ開く
    windowOpened.style.display = 'block';
    document.getElementById("task_vscode_icon").style.display = 'block'; //タスクiconを表示
    document.getElementById('select_btn').classList.remove('d-none'); // ボタンを表示
    currentQuiz = quiz; // クイズ配列の選択
    if (!document.querySelector('#js-question #question0')) {
      setupQuiz();
    }
    // ウィンドウのヘッダーの名前と画像を変更
    document.querySelector('.win_head_title').textContent = 'VSCodeクイズ';
    document.querySelector('.win_head_img').src = './icon/vscode.png';
  }
}

// Desktop python icon click
function openWindowQuiz02() {
  if (windowOpened.style.display === 'none') {//ウインドウが出ていなければ開く
    windowOpened.style.display = 'block';
    document.getElementById("task_python_icon").style.display = 'block'; //タスクiconを表示
    document.getElementById('select_btn').classList.remove('d-none'); // ボタンを表示
    currentQuiz = quiz02; // クイズ配列の選択
    if (!document.querySelector('#js-question #question0')) {
      setupQuiz();
    }
    // ウィンドウのヘッダーの名前と画像を変更
    document.querySelector('.win_head_title').textContent = 'よく使う英語クイズ';
    document.querySelector('.win_head_img').src = './icon/icons8-python-48.png';
  }
}

//  クイズの問題文、選択肢を定義
const setupQuiz = () => {
  let new_element = document.createElement('div'); //divを作成
  new_element.id = `question${quizIndex}`;//id="question[index数値付与]"
  console.log(new_element);
  new_element.innerHTML = currentQuiz[quizIndex].question; //問題文を追加
  element.appendChild(new_element); //作成したdivタグを問題文の最後に追加

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = currentQuiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
  // スクロール位置を最下部に設定
  windowElement.scrollTop = windowElement.scrollHeight;
}





const clickHandler = (e) => {
  const new_div_Element = document.getElementById(`question${quizIndex}`);
  const clickedButtonValue = e.target.textContent;
  const correctAnswer = currentQuiz[quizIndex].correct;
  const explanation = currentQuiz[quizIndex].explanation;


  if (clickedButtonValue === correctAnswer) {
    score++;
    quizIndex++;
    new_div_Element.innerHTML = new_div_Element.innerHTML +
      `<br><strong><span>正解！</span></strong><br>
      答えは${currentQuiz[quizIndex - 1].correct}<br>
    ${explanation}<br>`;

    if (quizIndex < quizLength) {
      new_div_Element.innerHTML += `全${quizLength}問題中${score}問正解しています。<br>
      残りあと${quizLength - quizIndex}問あります`;
    }
  } else {
    quizIndex++;
    new_div_Element.innerHTML = new_div_Element.innerHTML +
      `<br><strongred>不正解！</strongred><br>
      答えは${currentQuiz[quizIndex - 1].correct}<br>
  ${explanation}<br>`;

    new_div_Element.innerHTML += `全${quizLength}問題中${score}問正解しています。<br>
    残りあと${[quizLength - quizIndex]}問あります`;
  }

  if (quizIndex < quizLength) {
    // 問題数がまだあるればこちら実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    new_div_Element.innerHTML = new_div_Element.innerHTML + '終了！あなたの正解数は' + score + '/' + quizLength + 'です！' + '<br>';

    const accuracyRate = (score / quizLength) * 100;
    let comment = "";

    if (accuracyRate >= 0 && accuracyRate <= 25) {
      comment = "残念ながら正解率が低いですね。焦らず問題を注意深く確認し、理解を深めましょう。頑張ってください！";
    } else if (accuracyRate <= 50) {
      comment = "まだまだ向上の余地がありますね。正解となるポイントをしっかり押さえ、次回に期待しましょう。";
    } else if (accuracyRate <= 75) {
      comment = "良いスタートですね！もっと問題に慣れて、正解率を一層高めていきましょう。頑張り続けてください！";
    } else if (accuracyRate <= 99) {
      comment = "素晴らしい！正解率が高いですね。これからも同じ調子で問題に取り組んで、さらなる向上を目指しましょう。";
    } else if (accuracyRate === 100) {
      comment = "おめでとうございます！完璧な正解率ですね。これからも難易度を上げながら挑戦し、知識を深めていきましょう。素晴らしい成績です！";
    } else {
      comment = "正解率が正しくありません。";
    }

    new_div_Element.innerHTML = new_div_Element.innerHTML + 'あなたの正解数は' + score + '/' + quizLength + 'です！' + '<br>' + comment;
    document.getElementById('select_btn').classList.add('d-none');

  };
  windowElement.scrollTop = windowElement.scrollHeight;  // スクロール位置を最下部に設定
};



// quiz-buttonクラスを持つすべてのボタンにイベントリスナーを追加
let $buttons = document.getElementsByClassName('quiz-button');
let buttonsLength = $buttons.length;

let handlerIndex = 0;
while (handlerIndex < buttonsLength) {
  $buttons[handlerIndex].addEventListener('click', clickHandler);
  handlerIndex++;
}



// メニュー画面表示
function taskWindow() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    menu.classList.remove('slide-down'); // 下に下がるアニメーションを削除
  } else {
    menu.classList.add('slide-down'); // 下に下がるアニメーションを追加
    setTimeout(() => {
      menu.style.display = 'none';
    }, 500); // アニメーションが終了するまで待つ
  }
}

//
const resetQuiz = () => {
  document.getElementById('window').style.display = 'none';
  quizIndex = 0;
  score = 0;
  document.getElementById("task_vscode_icon").style.display = 'none';
  document.getElementById("task_python_icon").style.display = 'none';
  element.innerHTML = 'Microsoft Windows [Version 10.0.22621.2715]<br>(c) Microsoft Corporation. All rights reserved.<br><br>C:\Users\admin><br>  ';// 既存の問題文と選択肢を削除
}


//window ✖button click
function closeWindow() {
  resetQuiz();
}
//window -button click
function minimizeWindow() {
  windowOpened.style.display = 'none';
}
//window □button click
function maximizeWindow() {
  document.getElementById('maximizeWindow').style.display = 'none';
  document.getElementById('windowWindow').style.display = 'block';

  windowOpened.style.width = window.innerWidth + 'px';
  windowOpened.style.height = window.innerHeight + 'px';
}
//window □□button click
function windowWindow() {
  document.getElementById('windowWindow').style.display = 'none';
  document.getElementById('maximizeWindow').style.display = 'block';

  if (window.innerWidth <= 520) {
    windowOpened.style.width = '95vw';
    windowOpened.style.height = '95vh';
  } else if (window.innerWidth <= 960) {
    windowOpened.style.width = '80vw';
    windowOpened.style.height = '80vh';
  } else {
    windowOpened.style.width = '900px';
    windowOpened.style.height = '80vh';
  }
}

function closeCurrentTab() {
  // 現在のタブを閉じる
  window.close();
}