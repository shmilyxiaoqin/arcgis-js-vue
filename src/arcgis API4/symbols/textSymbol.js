/**
 * 文本符号，可渲染点、多点、线、多边形
 * 支持FeatureLayer，MapView，Graphic，CSVLayer，Sublayer,StreamLayer
 * @type {{backgroundColor: string, kerning: string, color: string, yoffset: string, xoffset: string, haloColor: string, rotated: string, type: string, borderLineColor: string, borderLineSize: string, horizontalAlignment: string, haloSize: string, angle: string, text: string, font: {size: string, weight: string, family: string}}}
 */
let textSymbol = {
    type: "text",
    color: " ",// 颜色
    angle: '',// 相对于屏幕的角度，不支持3D
    backgroundColor: '',// 标签边界框的背景颜色,仅MapImageLayer支持此属性
    borderLineColor: '',//标签边界框的边框颜色。仅MapImageLayer支持此属性
    borderLineSize: '',//标签边界框的边框大小或宽度。仅MapImageLayer支持此属性
    haloColor: " ",// 文本符号的光环颜色。要在TextSymbol中包含光晕，还必须在haloSize中设置光晕的大小
    haloSize: " ",//文本符号晕的点的大小
    horizontalAlignment:'',//调整多行标签中文本的水平对齐方式
    kerning:"",//确定是否调整文本字符串中字符之间的间距
    rotated:'',//是否旋转
    text: " ",//文本
    xoffset: '',
    yoffset: '',
    font: {
        size: '',//大小
        family: "",//字体
        weight: ""//粗细
    }// 字体
}
export default textSymbol