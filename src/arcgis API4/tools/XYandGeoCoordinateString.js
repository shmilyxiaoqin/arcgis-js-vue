/**
 * 将字符串转换为XY坐标
 * @param url 几何服务网址
 * @returns {Promise<unknown>}  返回XY坐标
 */
function geoCoordinateStringToXY(url) {
    return new Promise(resolve => {
        const {GeometryService} = window.esri
        const gs = new GeometryService(url)
        let params={
            strings:'',//字符串
            sr:'',// 空间参考或ID
            conversionType:'',// 字符串转换类型
        }
        gs.fromGeoCoordinateString(params).then(data => resolve(data))
    })
}
/**
 * 将XY坐标转换为字符串
 * @param url 几何服务网址
 * @returns {Promise<unknown>}  返回字符串
 */
function XYToGeoCoordinateString (url) {
    return new Promise(resolve => {
        const {GeometryService} = window.esri
        const gs = new GeometryService(url)
        let params={
            coordinates:'',//坐标
            sr:'',// 空间参考或ID
            conversionType:'',// 字符串转换类型
            numOfDigits:'',// 字符串输出位数
        }
        gs.toGeoCoordinateString(params).then(data => resolve(data))
    })
}

export {geoCoordinateStringToXY,XYToGeoCoordinateString}