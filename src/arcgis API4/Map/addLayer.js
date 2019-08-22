/**
 * 添加可查询，分析，可视化的图层
 * @type {{name: string, addFeatureLayer(*=): void}[]} // 类型，添加方法
 */
let addLayer = [
  {
    name: '添加特征图层',
    /**
     * 添加点、折线，多边形作为矢量图形,客户端处理，有弹出模板，支持2D，3D；可渲染查询，显示数量有1000条限制
     * @param param 参数配置
     * @returns {*} 返回图层
     */
    addFeatureLayer(param) {
      let layer
      const {FeatureLayer} = window.esri
      layer = new FeatureLayer({
        url: param.url,
        definitionExpression: '', // SQL where子句用于过滤客户端上的属性。SQL语句
        displayField: '', // 图层主显示的字段名称。
        dynamicDataSource: '',// 使用地图服务中子图层进行创建动态图层。属性配置参见DynamicMapLayer和DynamicDataLayer
        featureReduction: '', // 对视图中重叠图层属性的整理办法
        fields: '',// 图层中的字段数组
        id:'',// 图层名称
        layerId:'',// 图层ID或索引
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        popupEnabled:'',// 弹出窗口，具体配合模板使用
        popupTemplate:'',//弹出模板
        renderer:'',// 单独为图层进行渲染
        source:'',//FeatureLayer 的Graphic对象集合
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加graphic图层',
    /**
     * 点，折线，多边形显示为矢量图形，没有几何，没有渲染和弹出。但能对单个要素进行上述处理
     * @param param 参数配置
     * @returns {*} 显示图层
     */
    addGraphicsLayer(param) {
      let layer
      const {GraphicsLayer} = window.esri
      layer = new GraphicsLayer({
        url: param.url,
        id:'',// 图层名称
        opacity:'',// 透明度
        visible:'',// 是否可见
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        title:'',// 图层标题，用于在诸如Legend和LayerList小部件之类的位置标识它的图层的标题。
        graphic:'',// 图层中图形的集合
        spatialReference:'',// 空间参考
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加动态图层',
    /**
     * 添加点、折线、多边形、栅格；服务器端进行处理渲染，弹出等操作。不能编辑
     * @param param 配置参数
     * @returns {*} 返回图层
     */
    addMapImageLayer(param) {
      let layer
      const {MapImageLayer} = window.esri
      layer = new MapImageLayer({
        url: param.url,
        id:'',// 图层名称
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        sublayers:'', // 子图层合集，从下到上引用
        source:'',//FeatureLayer 的Graphic对象集合
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加CSV图层',
    /**
     *  点文件，矢量；客户端处理，有弹出，支持2D，3D渲染；有数量限制
     * @param param 配置参数
     * @returns {*} 返回图层
     */
    addMapImageLayer(param) {
      let layer
      const {MapImageLayer} = window.esri
      layer = new MapImageLayer({
        url: param.url,
        id:'',// 图层名称
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        source:'',//FeatureLayer 的Graphic对象集合
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        render:'',// 单独为图层做渲染
        listMode:'',// 图层在listMode中的显示方式
        latitudeField:'',// 纬度字段显示名称
        longitudeField:'',// 经度字段显示名称
        popupEnabled:'',// 弹出窗口，具体配合模板使用
        popupTemplate:'',//弹出模板
        definitionExpression: '', // SQL where子句用于过滤客户端上的功能。SQL语句

      })
      return layer
    }
  },
  {
    name: '添加KML图层',
    /**
     *  添加点、线、多边形显示为矢量，为KML格式，不支持3D
     * @param param 配置参数
     * @returns {*} 返回图层
     */
    addKMLLayer(param) {
      let layer
      const {KMLLayer} = window.esri
      layer = new KMLLayer({
        url: param.url,
        id:'',// 图层名称
        opacity:'',// 透明度
        visible:'',// 是否可见
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        sublayers:'', // 子图层合集，从下到上引用
        title:'',// 图层标题，用于在诸如Legend和LayerList小部件之类的位置标识它的图层的标题。
        spatialReference:'',// 空间参考
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加栅格图层',
    /**
     *  添加栅格数据，客户端和服务器都能处理，
     * @param param
     * @returns {*}
     */
    addImageryLayer(param) {
      let layer
      const {ImageryLayer} = window.esri
      layer = new ImageryLayer({
        url: param.url,
        definitionExpression: '', // SQL where子句用于过滤客户端上的栅格。SQL语句
        id:'',// 图层名称
        fields:'',// 字段
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        popupEnabled:'',// 弹出窗口，具体配合模板使用
        popupTemplate:'',//弹出模板
        renderer:'',// 单独为图层进行渲染
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加Stream图层',
    /**
     *  点，实时下载和更新要素位置
     * @param param 配置参数
     * @returns {*} 返回图层
     */
    addStreamLayer(param) {
      let layer
      const {StreamLayer} = window.esri
      layer = new StreamLayer({
        url: param.url,
        definitionExpression: '', // SQL where子句用于过滤客户端上的功能。SQL语句
        featureReduction: '', //视图中对重叠特征进行整理的方法
        id:'',// 图层名称
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        popupEnabled:'',// 弹出窗口，具体配合模板使用
        popupTemplate:'',//弹出模板
        renderer:'',// 单独为图层进行渲染
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        listMode:'',// 图层在listMode中的显示方式
      })
      return layer
    }
  },
  {
    name: '添加JSON图层',
    /**
     *  点，线，多边形；可渲染，编辑，弹出；必须为WGS84坐标
     * @param param
     * @returns {*}
     */
    addGeoJSONLayer(param) {
      let layer
      const {GeoJSONLayer} = window.esri
      layer = new GeoJSONLayer({
        url: param.url,
        id:'',// 图层名称
        displayField: '', // 图层主显示的字段名称。
        featureReduction: '', // 对视图中重叠图层属性的整理办法
        fields: '',// 图层中的字段数组
        geometryType:'',// 几何类型
        maxScale:'',// 最大比例尺
        minScale:'', //最小比例尺
        opacity:'',// 透明度
        spatialReference:'',// 空间参考
        visible:'',// 是否可见
        render:'',// 单独为图层做渲染
        listMode:'',// 图层在listMode中的显示方式
        popupEnabled:'',// 弹出窗口，具体配合模板使用
        popupTemplate:'',//弹出模板
        definitionExpression: '', // SQL where子句用于过滤客户端上的功能。SQL语句
      })
      return layer
    }
  },
]
export default addLayer
