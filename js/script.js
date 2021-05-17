//先抓到畫面上的cv元素
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  
  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
  
  //城堡主體繪製開始
  
  //地面上的線
  ctx.beginPath() //清掉先前路徑
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2 //被吃掉看不到，所以增加寬度
  ctx.strokeStyle="black" //原先沿用到上個色彩設定，所以改回來黑色
  ctx.stroke()

  //拱門繪製
  ctx.beginPath()
    //右半邊
    ctx.moveTo(100,225)
    ctx.lineTo(300,225)
    ctx.lineTo(300,350)
    ctx.lineTo(250,350)
    //圓弧拱門
    ctx.arc(200,350,50,Math.PI*2,Math.PI,true)
    //左半邊
    ctx.lineTo(150,350)
    ctx.lineTo(100,350)
    ctx.closePath()
    ctx.fillStyle="#B8AA95"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
    //方形主體
    ctx.beginPath()
      ctx.moveTo(150,150)
      ctx.lineTo(250,150)
      ctx.lineTo(250,225)
      ctx.lineTo(150,225)
    ctx.closePath()
    ctx.fillStyle="#B8AA95"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
   // 主三角形尖塔
  ctx.beginPath()
    ctx.moveTo(140,100)
    ctx.lineTo(200,50)
    ctx.lineTo(260,100)
  ctx.closePath()
  ctx.fillStyle="#96473C"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //主城門頭蓋
  ctx.beginPath()
      ctx.moveTo(140,125)
      ctx.lineTo(260,125)
      ctx.lineTo(250,150)
      ctx.lineTo(150,150)
    ctx.closePath()
    ctx.fillStyle="#5E5A54"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  ctx.fillStyle = "#B8AA95"
  ctx.fillRect(140,100,120,25)
  ctx.strokeRect(140,100,120,25)
  
    //窗戶
    ctx.beginPath()
      ctx.arc(200,175,15,Math.PI*2,Math.PI,true)
      ctx.lineTo(185,200)
      ctx.lineTo(215,200)
    ctx.closePath()
      ctx.fillStyle="white"
      ctx.fill()
      ctx.strokeStyle="black"
      ctx.stroke()
  
  //左城門
  ctx.beginPath()
      ctx.moveTo(50,200)
      ctx.lineTo(100,200)
      ctx.lineTo(125,350)
      ctx.lineTo(25,350)
    ctx.closePath()
    ctx.fillStyle="#B8AA95"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  // 左三角形尖塔
  ctx.beginPath()
    ctx.moveTo(50,200)
    ctx.lineTo(75,100)
    ctx.lineTo(100,200)
  ctx.closePath()
  ctx.fillStyle="#96473C"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //左城門頭蓋
  ctx.fillStyle = "#5E5A54"
  ctx.fillRect(40,175,70,25)
  ctx.strokeRect(40,175,70,25)
  
  //右城門
  ctx.beginPath()
      ctx.moveTo(300,200)
      ctx.lineTo(350,200)
      ctx.lineTo(375,350)
      ctx.lineTo(275,350)
    ctx.closePath()
    ctx.fillStyle="#B8AA95"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
  
  // 右三角形尖塔
  ctx.beginPath()
    ctx.moveTo(300,200)
    ctx.lineTo(325,100)
    ctx.lineTo(350,200)
  ctx.closePath()
  ctx.fillStyle="#96473C"
  ctx.fill()
  ctx.strokeStyle="black"
  ctx.stroke()
  
  //右城門頭蓋
  ctx.fillStyle = "#5E5A54"
  ctx.fillRect(290,175,70,25)
  ctx.strokeRect(290,175,70,25)
  
  //左城門旗子
      ctx.beginPath()
        ctx.moveTo(75,100)
        ctx.lineTo(75,75-mouse.y/5)
        ctx.lineTo(100,90 - (time%3)-mouse.y/5)
        ctx.lineTo(75,100-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#3E6B7E"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()  
  
  //右城門旗子
      ctx.beginPath()
        ctx.moveTo(325,100)
        ctx.lineTo(325,75-mouse.y/5)
        ctx.lineTo(350,90 - (time%3)-mouse.y/5)
        ctx.lineTo(325,100-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#3E6B7E"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke() 

  
  //車子
    ctx.fillStyle="#FCE4A8"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
  
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
  
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
// draw()

//設定連續繪製
setInterval(draw,1) //不斷畫圖，每隔30毫秒，約一秒鐘執行1次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})