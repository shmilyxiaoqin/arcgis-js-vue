/**
 * 使用一个符号呈现图层中的所有要素，通常用于政治边界、城市、建筑物、河流等
 * all/字段
 * 仅限位置
 * 支持FeatureLayer、MapImageLayer、CSVLayer、StreamLayer、ImageryLayer
 * @type {{symbol: string, visualVariables: {field: string, legendOptions: {}, normalizationField: string, stops: [], type: string}[], type: string}}
 */
let simpleRender = {
    type: 'simple', //类型
    symbol: '',   //符号化
    visualVariables: [
        {
            type: '', //图例类型
            field: '',//图例字段
            normalizationField: '',
            legendOptions: {},
            stops: []//断点
        }
    ]
}
export default simpleRender