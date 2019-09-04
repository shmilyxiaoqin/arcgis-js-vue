/**
 * 定义投影或者叫转换投影对投影的一种操作
 * @param param 参数配置
 * @param url 网址
 * @returns {Promise<unknown>}  返回转换后的投影
 */
function setProject(param, url) {
    return new Promise(resolve => {
        const {GeometryService,ProjectParameters} = window.esri
        const gs = new GeometryService(url)
        const pp = new ProjectParameters({
            outSpatialReference:'',// 输出空间参考
            geometries:[],// 几何
            transformation :'',// 转换参数
        })
        gs.project(pp).then(data => resolve(data))
    })
}

export {setProject}
