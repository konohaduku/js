{"filter":false,"title":"app.js","tooltip":"/.c9/app.js","undoManager":{"mark":19,"position":19,"stack":[[{"start":{"row":0,"column":0},"end":{"row":0,"column":21},"action":"insert","lines":["alert('Hello World');"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":21},"action":"remove","lines":["alert('Hello World');"],"id":2},{"start":{"row":0,"column":0},"end":{"row":1,"column":13},"action":"insert","lines":["let hello = 'Hello World';","alert(hello);"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":13},"action":"remove","lines":["let hello = 'Hello World';","alert(hello);"],"id":4},{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"insert","lines":["let int1 = 1;"]}],[{"start":{"row":0,"column":13},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":13},"action":"insert","lines":["alert(int1); "],"id":6}],[{"start":{"row":1,"column":12},"end":{"row":1,"column":13},"action":"remove","lines":[" "],"id":7}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":13},"action":"remove","lines":["let int1 = 1;"],"id":8},{"start":{"row":0,"column":0},"end":{"row":0,"column":29},"action":"insert","lines":["let str1 = 'JavaScriptを覚えよう';"]}],[{"start":{"row":1,"column":6},"end":{"row":1,"column":10},"action":"remove","lines":["int1"],"id":9},{"start":{"row":1,"column":6},"end":{"row":1,"column":10},"action":"insert","lines":["str1"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":12},"action":"remove","lines":["let str1 = 'JavaScriptを覚えよう';","alert(str1);"],"id":10},{"start":{"row":0,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["let orange = 100;","let apple = 120;","","if(orange < apple){","  alert('みかんの値段がりんごより安い');","} else if(orange == apple){","  alert('みかんとりんごが同じ値段');","} else{","  alert('みかんの値段がりんごより高い');","}"]}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":["let orange = 100;","let apple = 120;","","if(orange < apple){","  alert('みかんの値段がりんごより安い');","} else if(orange == apple){","  alert('みかんとりんごが同じ値段');","} else{","  alert('みかんの値段がりんごより高い');","}"],"id":11},{"start":{"row":0,"column":0},"end":{"row":9,"column":58},"action":"insert","lines":["let max = 100;","let num = 1;","let count = 0;","","while(num < max){","  num = num * 2;","  count = count + 1;","}","","alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');"]}],[{"start":{"row":0,"column":0},"end":{"row":9,"column":58},"action":"remove","lines":["let max = 100;","let num = 1;","let count = 0;","","while(num < max){","  num = num * 2;","  count = count + 1;","}","","alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');"],"id":12},{"start":{"row":0,"column":0},"end":{"row":13,"column":1},"action":"insert","lines":["// メイン部分","let alertString;","","// 作成した関数を呼び出し、変数へ格納","alertString = addString(\"WebCamp\");","","//変数の中身をアラートで表示する","alert(alertString);","","// 作成した関数","function addString(strA){","  let addStr = \"Hello \" + strA;","  return addStr;","}"]}],[{"start":{"row":0,"column":0},"end":{"row":13,"column":1},"action":"remove","lines":["// メイン部分","let alertString;","","// 作成した関数を呼び出し、変数へ格納","alertString = addString(\"WebCamp\");","","//変数の中身をアラートで表示する","alert(alertString);","","// 作成した関数","function addString(strA){","  let addStr = \"Hello \" + strA;","  return addStr;","}"],"id":13},{"start":{"row":0,"column":0},"end":{"row":2,"column":17},"action":"insert","lines":["let promptStr = prompt('何か好きな文字を入力してください。');","","alert(promptStr);"]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":17},"action":"remove","lines":["let promptStr = prompt('何か好きな文字を入力してください。');","","alert(promptStr);"],"id":14},{"start":{"row":0,"column":0},"end":{"row":2,"column":39},"action":"insert","lines":["let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');","","alert('あなたの選んだ手は' + user_hand + 'です。');"]}],[{"start":{"row":2,"column":39},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":15},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');","","alert('あなたの選んだ手は' + user_hand + 'です。');","",""],"id":16},{"start":{"row":0,"column":0},"end":{"row":59,"column":1},"action":"insert","lines":["// じゃんけんの手を入力してもらうプロンプト欄を生成","let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');","","// じゃんけんの手をランダムに作成する関数を呼び出す","let js_hand = getJShand();","","// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる","let judge = winLose(user_hand, js_hand);","","// 結果を表示する","alert('あなたの選んだ手は' + user_hand + 'です。\\nJavaScriptの選んだ手は' + js_hand + 'です。\\n結果は' + judge + 'です。');","","// ランダムでじゃんけんの手を作成する関数","function getJShand(){","  let js_hand_num = Math.floor( Math.random() * 3 );","  let hand_name;","","  if(js_hand_num == 0){","    hand_name = \"グー\";","  } else if(js_hand_num == 1){","    hand_name = \"チョキ\";","  } else if(js_hand_num == 2){","    hand_name = \"パー\";","  }","","  return hand_name;","}","","// ユーザの手とJavaScriptのじゃんけんの手を比べる関数","function winLose(user, js){","  let winLoseStr;","","  if(user == \"グー\"){","    if(js == \"グー\"){","      winLoseStr = \"あいこ\";","    } else if(js == \"チョキ\"){","      winLoseStr = \"勝ち\";","    } else if(js == \"パー\"){","      winLoseStr = \"負け\";","    }","  } else if(user == \"チョキ\"){","    if(js == \"グー\"){","      winLoseStr = \"負け\";","    } else if(js == \"チョキ\"){","      winLoseStr = \"あいこ\";","    } else if(js == \"パー\"){","      winLoseStr = \"勝ち\";","    }","  } else if(user == \"パー\"){","    if(js == \"グー\"){","      winLoseStr = \"勝ち\";","    } else if(js == \"チョキ\"){","      winLoseStr = \"負け\";","    } else if(js == \"パー\"){","      winLoseStr = \"あいこ\";","    }","  }","","  return winLoseStr;","}"]}],[{"start":{"row":1,"column":54},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":17}],[{"start":{"row":2,"column":0},"end":{"row":4,"column":52},"action":"insert","lines":["while ((user_hand != \"グー\") && (user_hand != \"チョキ\") && (user_hand != \"パー\") && (user_hand != null)){","  alert('グー・チョキ・パーのいずれかを入力して下さい');","  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');"],"id":18}],[{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"remove","lines":["alert('あなたの選んだ手は' + user_hand + 'です。\\nJavaScriptの選んだ手は' + js_hand + 'です。\\n結果は' + judge + 'です。');",""],"id":19},{"start":{"row":13,"column":0},"end":{"row":17,"column":1},"action":"insert","lines":["if (user_hand != null){","  alert('あなたの選んだ手は' + user_hand + 'です。\\nJavaScriptの選んだ手は' + js_hand + 'です。\\n結果は' + judge + 'です。');","} else {","  alert(\"またチャレンジしてね\")","}"]}],[{"start":{"row":4,"column":52},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["}"],"id":21},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]}]]},"ace":{"folds":[],"scrolltop":219.409423828125,"scrollleft":0,"selection":{"start":{"row":5,"column":1},"end":{"row":5,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":14,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1688395264124,"hash":"eb2f665ed383469ce63a35b0917a5acf8a293b50"}