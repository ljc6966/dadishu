var td = new Array(),   // 初始化一个数组，保存每个格子地鼠
    playing = false,    // 游戏是否开始
    score = 0,          // 分数
    beat = 0,           // 鼠标点击次数
    success = 0,        // 命中率
    knock = 0,          // 打中老鼠的次数
    countdown = 30,     // 倒计时
    interId = null,
    timeId = null,
    audioElem = null;

  // 游戏开始
  function getStart() {
    playing = true;
    interId = setInterval("showMouse()", 1000);
    audioElem = document.getElementById('playaudio');
    document.formhead.score.value = score;
    document.formhead.success.value = success;
    showCountDown();
  }
  // 倒计时
  function showCountDown() {
    document.formhead.countdown.value = countdown;
    if(countdown === 0) {
      gameOver();
      return;
    }
    countdown += -1;
    timeId = setTimeout("showCountDown()", 1000);
  }
  // 随机出现老鼠
  function showMouse() {
    if(playing) {
      var current = Math.floor(Math.random()*25);
      document.getElementById("td["+ current +"]").innerHTML = '<img src="./img/mouse.png">';
      setTimeout("document.getElementById('td[" + current + "]').innerHTML = ''", 3000);
    }
  }
  // 清空老鼠
  function clearMouse() {
    for(var i = 0; i <= 24; i++) {
      document.getElementById("td["+ i + "]").innerHTML = "";
    }
  }
  // 点击事件
  function hit(id) {
    if(playing === false) {
      alert('请点击开始制裁');
      return;
    }
    beat += 1;
    if(document.getElementById("td["+ id +"]").innerHTML !== "") {
      score += 1;
      knock += 1;
      success = (knock/beat).toFixed(2);
      audioElem.play();
      setTimeout("audioElem.pause()", 1000);
      document.formhead.score.value = score;
      document.formhead.success.value = success;
      document.getElementById("td["+ id +"]").innerHTML = "";
      return;
    }
    success = (knock/beat).toFixed(2);
    document.formhead.score.value = score;
    document.formhead.success.value = success;
  }
  // 停止所有计时
  function timeStop() {
    clearInterval(interId);
    clearTimeout(timeId);
  }
  // 制裁结束
  function gameOver() {
    timeStop();
    playing = false;
    audioElem.pause();
    clearMouse();
    alert("本游戏由ljc966出品！\n 你获得的分数为："+ score +"\n 制裁率为："+success);
    success = 0;
    score = 0;
    knock = 0;
    beat = 0;
    countdown = 30;
  }
