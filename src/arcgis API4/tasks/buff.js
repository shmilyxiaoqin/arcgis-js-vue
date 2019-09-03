/**
 * 缓冲区分析
 * @param param 缓冲区参数配置
 * @param url 几何服务网址
 * @returns {Promise<unknown>} 异步
 */
function setBuffer(param, url) {
    return new Promise(resolve => {
        const {GeometryService,BufferParameters} = window.esri
        const gs = new GeometryService(url)
        const bp = new BufferParameters({
            bufferSpatialReference:'',// 缓冲几何的空间参考
            distances:'',// 缓冲距离
            geometries:[],// 几何
            unionResults:'',// 在给定距离缓冲的所有几何图形合并为单个（可能是多部分）多边形
            unit:'',//单位
        })
        gs.buffer(bp).then(data => resolve(data))
    })
}

export {setBuffer}