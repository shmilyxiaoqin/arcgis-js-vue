/**
 * 渲染线，或者标记符号和填充符号的轮廓
 * 支持FeatureLayer，MapView，Graphic
 * @type {{cap: string, color: string, width: string, style: string, join: string, miterLimit: string, type: string}}
 */
let simpleLineSymbol = {
    type: "simple-line",
    cap: ' ',// 指定折线的结束节点，或者是不与同一折线的另一个段连接的线段的末端的样式
    color: " ",// 颜色
    width: " ",// 宽度
    style: " ",// 线条样式
    join: '',// 连接样式
    miterLimit: '',// 斜接连接宽度与线宽的最大允许比率
}
export default simpleLineSymbol