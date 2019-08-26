/**
 * 查询，从图层和图层视图进行查询,
 * @param url
 * @returns {Promise<unknown>}
 */
function queryTask(url) {
    return new Promise((resolve) => {
        const {QueryTask, Query} = window.esri
        let task = new QueryTask(url)
        const query = new Query()
            query.where = '',
            query.returnGeometry = '',// 是否返回几何
            query.outFields = '',// 输出字段
            query.datumTransformation = '', // 当输出的空间参考不同于图层时，在查询结果中投影几何的基准变换
            query.distance = '',// 若执行缓冲区，缓冲区的距离
            query.geometry = '',// 查询的几何
            query.outSpatialReference = '',// 返回几何的空间参考
            query.spatialRelationship  = '',// 空间关系
            task.execute(query).then(data => resolve(data))
    })
}

export {queryTask}
