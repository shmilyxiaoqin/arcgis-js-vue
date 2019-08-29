/**
 * 多边形渲染，可以填充固体颜色或图案
 * 支持FeatureLayer，MapView，Graphic
 * @type {{outline: {color: string, width: string}, color: string, style: string, type: string}}
 */
let simpleFillSymbol = {
    type: "simple-fill",
    color: '',// 颜色
    style: " ",// 样式
    outline: {
        color: " ",//颜色
        width: '',//宽度
    }//轮廓，也可以为SimpleLineSymbol
}
export default simpleFillSymbol