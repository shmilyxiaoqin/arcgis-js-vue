/**
 * 添加作为地理背景的图层，即通常所说的底图
 * @type {{name: string, TileLayer(*=): void}[]} // 类型，添加方法
 */
let addBaseMapLayer = [
  {
    name: '添加切片图层',
    /**
     * 添加切片图层，可查询，不可编辑，客户端处理，缓存的，引用缓存的URL
     * @param param 参数配置
     * @returns {*} 返回图层
     */
    addTileLayer(param) {
      let layer
      const {TileLayer} = window.esri
      layer = new TileLayer({
        url: param.url,
        attributionDataUrl: '',// 指向图层属性数据位置的url
        id: '',// 图层名称
        maxScale: '',// 最大比例尺
        minScale: '', //最小比例尺
        opacity: '',// 透明度
        tileInfo: '',// 图层切片方案信息
        spatialReference: '',// 空间参考
        visible: '',// 是否可见
        listMode: '',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加矢量切片图层',
    /**
     * 点，折线，多边形的矢量切片，客户端处理
     * @param param 参数配置
     * @returns {*} 显示图层
     */
    addVectorTileLayer(param) {
      let layer
      const {VectorTileLayer} = window.esri
      layer = new VectorTileLayer({
        url: param.url,
        attributionDataUrl: '',// 指向图层属性数据位置的url
        currentStyleInfo:'',// 当前切片的样式信息
        id: '',// 图层名称
        opacity: '',// 透明度
        visible: '',// 是否可见
        maxScale: '',// 最大比例尺
        minScale: '', //最小比例尺
        title: '',// 图层标题，用于在诸如Legend和LayerList小部件之类的位置标识它的图层的标题。
        spatialReference: '',// 空间参考
        tileInfo: '',// 图层切片方案信息
        style:'',// 样式信息
        listMode: '',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加OpenStreetMap图层',
    /**
     * 添加OpenStreetMap类型图层，切片方案符合OpenStreetMap
     * @param param 配置参数
     * @returns {*} 返回图层
     */
    addMapImageLayer(param) {
      let layer
      const {MapImageLayer} = window.esri
      layer = new MapImageLayer({
        url: param.url,
        id: '',// 图层名称
        maxScale: '',// 最大比例尺
        minScale: '', //最小比例尺
        opacity: '',// 透明度
        spatialReference: '',// 空间参考
        visible: '',// 是否可见
        listMode: '',// 图层在listMode中的显示方式
        tileInfo: '',// 图层切片方案信息
        tileServers:'',// 图层图块服务器的url列表
        urlTemplate:'',// 托管切片的URL模板
        subDomains:'',// 一系列子域名，提供快速切片检索
      })
      return layer
    }
  }
]
export default addBaseMapLayer
