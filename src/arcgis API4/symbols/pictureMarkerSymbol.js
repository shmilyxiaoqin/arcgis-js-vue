/**
 * 图片符号，用来渲染点或者FeatureLayer中的单个图形
 * 支持FeatureLayer，MapView，Graphic
 * @type {{yoffset: string, width: string, xoffset: string, angle: string, type: string, url: string, height: string}}
 */
let pictureMarkerSymbol={
    type:'picture-marker',
    url:'',//图片链接，png或SVG文档的URL。
    width:'',// 宽度
    height:'',// 高度
    angle:'',// 相对于屏幕的角度，不支持3D
    xoffset:'',//X轴上的偏移
    yoffset:'',// Y轴上的偏移
}
export default pictureMarkerSymbol