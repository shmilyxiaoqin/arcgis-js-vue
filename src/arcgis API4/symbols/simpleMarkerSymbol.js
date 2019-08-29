/**
 * 使用颜色和图形渲染点
 * 支持FeatureLayer，MapView，Graphic
 * @type {{path: string, outline: {color: string, width: string}, color: string, size: string, yoffset: string, xoffset: string, angle: string, style: string, type: string}}
 */
let simpleMarkerSymbol = {
    type: "simple-marker",
    angle: '',// 相对于屏幕的角度，不支持3D
    style: " ",// 样式：圆圈、加号、菱形、正方形、三角形、叉
    color: " ",//颜色
    size: " ",  //大小
    path : '', // svg路径
    outline: {  //轮廓
        color: '',// 颜色
        width: '' // 宽度
    },
    xoffset: '',//X轴上的偏移
    yoffset: '',// Y轴上的偏移

}
export default simpleMarkerSymbol