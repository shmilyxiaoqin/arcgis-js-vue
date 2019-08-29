/**
 * 热力图渲染，使用高斯模糊来确定每个点在由blurRadius确定的区域上的影响强度，渲染成栅格表面
 * 字段
 * 支持FeatureLayer、CSVLayer、GeoJSONLayer
 * @type {{maxPixelIntensity: string, minPixelIntensity: string, field: string, blurRadius: string, colorStops: {color: string, ratio: number}[], type: string}}
 */
let heatmapRenderer={
    type:'heatmap',
    blurRadius:'',// 图层中每个点的影响区域,像素半径
    colorStops:[ { ratio: 0, color: "rgba(255, 140, 0, 0)" },],//渐变的对象数组【ratio：位置，color：颜色】
    field:'',// 字段名称
    maxPixelIntensity:'',// 最大像素值
    minPixelIntensity:'',// 最小像素值

}
export default heatmapRenderer