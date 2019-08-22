/**
 * 为地图添加一个底图，这个底图通常不进行任何操作，仅作为地理背景的作用
 * 新建一个地图对象，将创建的底图作为地图底图对象
 * 新建一个视图对象，装载地图
 * @param url  底图图层网址
 * @param webTileLayer  底图图层对象
 */
function addBaseMap(url, webTileLayer) {
  let mapView
  const {Basemap, Map, MapView} = window.esri
  const basemap = new Basemap({
    baseLayers: webTileLayer,   // 用于构成地图功能的切片图层集合
    // 用于显示标签的平铺图层
    referenceLayers: webTileLayer,
    title: '地图底图', // 标题
    id: 'basemap', // 地图id
    thumbnailUrl: url // 指向表示底图图像的url,可在BaseMap中使用自定义地图
  })
  const map = new Map({
    basemap: basemap // 底图
  })
   mapView = new MapView({
    map: map, // 地图
    container: 'mapDiv', // 容器
    scale: '', // 比例尺
    center: '', // 中心点（值为Point或者经纬度），可改变当前视图，经纬度为当前框的空间参考
    zoom: '',   // 缩放比例
    extent: '', // 显示范围
    constraints: '', // 控制用户的缩放级别和比例尺
    spatialReference:''// 空间参考
  })
  return mapView

}
export default addBaseMap
