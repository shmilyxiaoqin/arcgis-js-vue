/**
 * 中断渲染，按区域范围的属性渲染
 * 字段，只有一个字段
 * 属性范围的不同赋予不同的符号
 * 支持FeatureLayer、MapImageLayer、CSVLayer、StreamLayer、ImageryLayer
 * @type {{classValueInfos: {symbol: string, minValue: string, maxValue: string, label: string}[], field: string, visualVariables: [], legendOptions: string, type: string, normalizationType: string}}
 */
let classBreaksRenderer = {
    type: 'class-breaks',
    field: '',// 字段名称
    classValueInfos: [
        {
            minValue: '', // 最小值
            maxValue: '', // 最大值
            symbol: '', // 符号
            label: '' // 显示标签
        }
    ],//断点信息
    normalizationType: '',//数据规范化的方式
    legendOptions: '',//提供在图例中显示渲染器的选项的对象。
    visualVariables: [],// 视觉化变量，用来制作专题图
}
export default classBreaksRenderer