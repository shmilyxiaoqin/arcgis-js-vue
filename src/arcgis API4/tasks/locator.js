/**
 * 地理编码服务
 * @param param 配置参数
 * @param url url
 * @returns {Promise<unknown>} 异步
 */
function locator(param, url) {
    return new Promise(resolve => {
        const {Locator} = window.esri
        const lt = new Locator({
            url:'',// 网址
            outSpatialReference: '',// 输出空间参考
        })

    })
}

export {locator}
