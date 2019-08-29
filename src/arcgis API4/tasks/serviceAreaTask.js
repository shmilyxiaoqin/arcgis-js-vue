/**
 * 区域分析，查找周围的服务区域、街道、
 * 5min服务区域
 * @param url 网址
 * @param param 参数配置对象
 * @returns {Promise<unknown>} 异步
 */
function serviceAreaTask (param, url) {
    return new Promise(resolve => {
        const { ServiceAreaTask, ServiceAreaParameters } = window.esri
        const sat = new ServiceAreaTask(url)
        const sap = new ServiceAreaParameters({
            accumulateAttributes: '',//哪些属性应作为响应的一部分返回
            attributeParameterValues: [],//数组中的每个元素都是描述参数值的对象
            outSpatialReference:'',//输出空间参考
            defaultBreaks:'',// 定义中断的数字数组
            returnFacilities:'',//设施将与分析结果一起返回。
            travelDirection:'',//前往或离开设施的选择
            timeOfDay:'',//设施的当地日期和时间
        })
        sat.solve(sap).then(data => resolve(data))
    })
}

export { serviceAreaTask }