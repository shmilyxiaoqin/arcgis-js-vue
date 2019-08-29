/**
 * 唯一值渲染，基于一个或多个匹配的字符串属性对图层中的要素进行符号化，通常通过使用唯一颜色，填充样式或图像来表示字符串字段中具有相等值的要素来完成。
 * 同一个字段不同值的不同符号，一个字段或者多个字段，最多三个
 * 字符串
 * 支持FeatureLayer、MapImageLayer、CSVLayer、StreamLayer、ImageryLayer
 * @type {{field: string, visualVariables: [], legendOptions: string, uniqueValueInfos: {}[], type: string}}
 */
let uniqueValueRenderer = {
    type: 'unique-value',
    field: '', //字段名称
    uniqueValueInfos: [{
        value: " ",// 值
        symbol:'' // 符号
    }],//与渲染器关联的唯一值的信息，配置不同值的符号
    legendOptions: '',//提供在图例中显示渲染器的选项的对象。
    visualVariables: [],// 视觉化变量，用来制作专题图
}
export {uniqueValueRenderer}