/**
 * 标识查询，只可查询arcgis server上公开的地图服务层。
 * @param geometry
 * @param view
 * @param url
 * @returns {Promise<unknown>}
 */
function identifyTask (geometry, view, url) {
    return new Promise(resolve => {
        const { IdentifyTask, IdentifyParameters } =window.esri
        const idt = new IdentifyTask(url)
        const idp = new IdentifyParameters({
            tolerance: '',// 屏幕像素距指定几何体的距离
            returnGeometry: '',// 返回的几何
            layerIds: '',// 要执行识别操作的图层
            geometry:'',// 要查询的几何
            layerOption: '',// 指定使用Identify使用的层
            mapExtent: '',// 当前地图视图的范围或边界框
        })
        idt.execute(idp).then(data => resolve(data))
    })
}
export { identifyTask }