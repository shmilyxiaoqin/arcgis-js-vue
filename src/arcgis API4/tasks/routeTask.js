/**
 * 查找两个或多个位置之间的路线，并可获取行车路线
 * @param param 配置参数
 * @param url url
 * @returns {Promise<unknown>} 异步
 */
function routeTask(param, url) {
    return new Promise(resolve => {
        const {RouteTask, RouteParameters} = window.esri
        const rt = new RouteTask(url)
        const rp = new RouteParameters({
            accumulateAttributes: '',//哪些属性应作为响应的一部分返回
            attributeParameterValues: [],//数组中的每个元素都是描述参数值的对象
            directionsLanguage: '',//计算方向时使用的语言
            directionsLengthUnits: '',//计算方向时使用的长度单位
            directionsOutputType:'',//定义返回的方向信息量
            directionsStyleName:'',//返回路线时使用的样式
            directionsTimeAttribute:'',//计算路线时用于驱动时间的网络属性的名称
            outSpatialReference:'',//输出空间参考
            returnRoutes: true,// 将在每个RouteResult的route属性中生成并返回最近的设施路由
            returnDirections: true,//应为每条路线生成行车路线

        })
        rt.solve(rp).then(data => resolve(data))
    })
}

export {routeTask}