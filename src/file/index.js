export const a = 
`/*
*创意来自 strml.net
*
* 大家好，我是Gio,
*
* 这张页面好无聊啊！我们加一点小东西如何？
* 首先，先来添加一下全局的动画效果！
*/

*{
  -webkit-transition: all .8s;
  transition: all .8s;
}

/* 啊？没效果么？背景变一下颜色可好？*/

html {
  /* 
  3，
  2，
  1 */
  background: rgb(56,0,60); 
}
.token.comment{ 
    color: white 
}


/* 哈哈！厉害吧！？

* 你的眼睛是不是要瞎了?那字体也变一下呗? 

*/

.page-wrapper{
  margin-top:48px;
  color: rgb(222,222,222); 
  overflow: auto;
  background: rgb(48, 48, 48);
  border: 1px solid #ccc;
  max-height: 50%;
  width: 35%;
  font-size: 14px;
  font-family: monospace;
  padding: 10px 10px 20px;
  box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);
  white-space: pre-wrap;
  outline: 0;
}



/* 
* ！
* yoyoyoyo，怎样？抱歉让你的眼睛损伤啦～ 
* 接下来我们玩一点高端的「代码高亮」！

*/


.token.comment{ color: #857F6B; font-style: italic; }
.token.selector{ color: #E69F0F; }
.token.property{ color: #64D5EA; }
.token.punctuation{ color: #64D5EA; }
.token.function{ color: #BE84F2; }


/*

* 哈哈，是不是非常不错？
* 嗯，我们准备写一点其他的东西，把这个东西往右移动一下！
* 3，
* 2，
* 1
*/

.page-wrapper {
  -webkit-transform: translateX(150%);
  transform:translateX(150%);
}

/*
* 接下来我们写一份简历好不好？
* 首先我们先准备一个打字框！
*/

.resume-wrapper{
  position:fixed;
  top:0;
  padding: .5em;  margin: .5em;
  background: white; 
  color: #222;
  margin-top:48px;
  width: 40vw; height:50%; 
  border: 1px solid;
  overflow: auto;
  color: rgb(222,222,222); 
  background: rgb(48, 48, 48);
}

/*
* 好，我们立马开写！
*/`

export const b = 
`.resume-wrapper{
  height:50%;
}

/* 还行吗？是不是很酷？

那么我们再来一点3D效果！

*/
body {
  -webkit-perspective: 1000px;
  perspective:1000px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/*  诶？没有效果吗？别急 */
.resume-wrapper {
  -webkit-transform: rotateX(0deg) rotateY(190deg) rotateZ(180deg);
}

/*  是不是很帅？？？ */
.resume-wrapper {
  box-shadow: 0px 0px 0px #888888;
  -webkit-transform: rotateY(10deg);
  -webkit-transform-origin: left;
  transform:rotateY(10deg);
  -webkit-transform-origin:rotateY(10deg);
  max
}

.page-wrapper {
  box-shadow: 0px 0px 0px #888888;
  -webkit-transform: translateX(150%) rotateY(-10deg);
  -webkit-transform-origin: right;
  transform:translateX(150%) rotateY(-10deg);
  transform-origin: right;
}

/* 
本次代码直播结束啦！
*/`

export const resumeTxt = 
`Gio
=============
- Web前端开发
- Node.js开发

技能
=============
- node.js 
- React技术栈
- Ant Design
- Echarts

工作经历
=============
- 上海同济学士信息系统有限公司:Web前端开发

链接
=============
- [本项目的源代码](https://github.com/215566435/React-awesome-resume)`

