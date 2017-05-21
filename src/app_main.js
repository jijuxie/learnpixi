/**
 * Created by qinxy on 2017/5/20.
 */
//获取body宽高
var bodyWidth = document.body.offsetWidth;
var bodyHeight = document.body.offsetHeight;
//设置别名
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    MovieClip = PIXI.extras.MovieClip,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text,
    audioManager = PIXI.audioManager,
    Graphics = PIXI.Graphics;

//生成画布，和渲染器

/*
 *
 名称	类型	默认	描述
 width	数	800	可选的
 渲染器视图的宽度
 height	数	600	可选的
 渲染器视图的高度
 view	HTMLCanvasElement		可选的
 画布用作视图，可选
 transparent	布尔	假	可选的
 如果渲染视图是透明的，则默认为false
 antialias	布尔	假	可选的
 设置抗锯齿（目前仅适用于铬）
 preserveDrawingBuffer	布尔	假	可选的
 启用绘图缓冲区保存，如果需要在webgl上下文中调用toDataUrl，则启用此功能
 resolution	数	1	可选的
 渲染器，视网膜的分辨率/设备像素比为2
 forceCanvas	布尔	假	可选的
 防止WebGL渲染器的选择，即使存在
 *
 *
 * */
var stage = new Container(), renderer = autoDetectRenderer(
    bodyWidth,
    bodyHeight,
    {backgroundColor: 0xfe8e8e8, antialias: false, transparent: false, resolution: 1}
);
//通过js为页面的某处添加画面 renderer.view是生成的画布元素
$("#main").append(renderer.view);
//加载资源方法
function loadScene1Src(){
    loader
        .add([
            "./images/shou.png",
            {name:"scan", url: ["./images/music_scan.mp3"]}
        ])
        .on("progress", loadProgressHandler)
        .load(enterScene1);
}
//加载资源后执行的回调方法 loader是这个loader， resources里面包含了资源名称的，也可以不写这个回调
function enterScene1(loader, resources) {


}
function cont() {
    //获取到已经加载的资源
    theSprite=new Sprite(
        resources[".aa.jpg"].texture
    );
    //设置大小和位置
theSprite.width=renderer.width;
theSprite.height=renderer.height;
    theSprite.position.set(0,0);
    //设置透明度
    theSprite.alpha=1;
    // 设置锚点的位置(0-1,0-1)
    theSprite.anchor.set(0.5,0.5);
// 开启事件相应
    theSprite.interactive = true;
    //开启响应后的事件绑定
    theSprite
        .on('click', complete_btnOnMousedown)
        .on('tap', complete_btnOnMousedown);
    stage.addChild(Scene_bg);
}
    //在场景中添加

