/**
 * 邻近设施分析，找到网络上的任何位置周围最近的设施
 * 15min生活圈
 * @param url 网址
 * @param param 参数配置对象
 * @returns {Promise<unknown>} 异步
 */
function closestFacilityTask(url, param) {
    return new Promise(resolve => {
        const {ClosestFacilityTask, ClosestFacilityParameters} = window.esri
        const cft = new ClosestFacilityTask(url)
        const cfp = new ClosestFacilityParameters({
            accumulateAttributes: '',// 要作为相应返回的属性列表
            attributeParameterValues: [{
                attributeName: '',//属性名称
                parameterName: '',// 参数名称
                value: '',//值
            }],// 车辆可以使用哪些网络元素
            defaultCutoff: '',//停止遍历的值
            defaultTargetFacilityCount: '',//要找的设施数量
            directionsLanguage: '',// 生成行车路线时使用的语言
            directionsLengthUnits: '',// 计算行车路线时使用的长度单位
            directionsOutputType: '',//定义返回的方向信息量
            directionsStyleName: '',//返回路线时使用的样式
            directionsTimeAttribute:'',//包含驱动器时间值的属性字段的名称
            outSpatialReference:'',// 输出空间参考
            returnIncidents: false,// 事件将与分析结果一起返回
            returnRoutes: true,// 将在每个ClosestFacilitySolveResult的route属性中生成并返回最近的设施路由
            returnDirections: true,//应为每条路线生成行车路线
        })
        cft.solve(cfp).then(data => resolve(data))
    })
}

export {closestFacilityTask}