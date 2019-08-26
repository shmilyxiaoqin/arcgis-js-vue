/**
 * findTask,属性查图形，搜索的是ARCGIS Server上的服务，可跨图层
 * @param text
 * @param url
 * @returns {Promise<unknown>}
 */
function findTask (text, url) {
    return new Promise(resolve => {
        const { FindTask, FindParameters } = window.esri
        const fdt = new FindTask(url)
        const fdp = new FindParameters({
            layerIds:'', // 要执行操作的图层
            searchFields:'', // 要搜索的图层字段的名称
            searchText:'', //搜索的文本索引
            contains:'', // 确定是否查找搜索文本的完全匹配
            returnGeometry: '',// 是否输出几何
            outSpatialReference:'',// 输出几何的空间参考

        })
        fdt.execute(fdp).then(data => resolve(data))
    })
}

export { findTask }