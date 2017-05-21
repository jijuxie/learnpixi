/**
 * Created by qinxy on 2017/5/20.
 */
//判断浏览器支不支持webgl
var type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}
PIXI.utils.sayHello('当前浏览器运行方式'+type);

//设置简写属性
var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,

    Texture = PIXI.Texture,
    TextureBase =   PIXI.BaseTexture,
    MovieClip = PIXI.extras.MovieClip,
    Sprite = PIXI.Sprite,
    Rectangle = PIXI.Rectangle,
    Text = PIXI.Text,
    audioManager = PIXI.audioManager,
    Graphics = PIXI.Graphics;

//记载指示
function loadProgressHandler(loader, resource) {
    //Display the file `url` currently being loaded
    console.log("loading: " + resource.url);
    //Display the precentage of files currently loaded
    console.log("progress: " + loader.progress + "%");
    //If you gave your files names as the first argument
    //of the `add` method, you can access them like this
    //console.log("loading: " + resource.name);
}

