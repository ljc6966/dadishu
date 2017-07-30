## 核心方法

- 1、setTimeout() - 用于在指定的毫秒数后调用函数或者计算表达式；
   只执行一次code，若果要多次调用，请使用setInterval或者code自身再调用一次setTimeout.
- 2、clearTimeout() - 清除setTimeout返回的id值，从而取消setTimeout设置的延时；
- 3、setInterval() － 按照指定周期调用函数或计算表达式，多次调用。
- 4、clearInterval() － 清除setInterval返回的id值，从而取消setInterval设置的延时；
- 5、Math.floor  - 对一个数进行向下取整；
- 6、Math.random － 返回0～1之间的一个随机数；

## 设计
  - 1、点击开始游戏；
  - 2、倒计时开始，分数等置0；
  - 3、老鼠不断显示、隐藏；
  - 4、倒计时归0结束，或者点击结束按钮结束；

## 功能
  - 1、得分统计；
  - 2、成功率；
  - 3、老鼠出现、隐藏；
  - 4、判断是否点中；
  - 5、结果显示；

## 后期优化
  1、优化游戏界面；
  2、声音；
  3、修改最后的结果提示，自己设计弹出特效；
  4、设置关卡；
  5、vue ＋ element实现；
