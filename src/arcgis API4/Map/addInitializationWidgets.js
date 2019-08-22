let addWidget = {
  /**
   * 添加返回初始地图范围小部件
   * @param view 视图
   */
  addHome(view) {
    const {Home} = window.esri
    const homeWidget = new Home({
      view: view
    })
    view.ui.add(homeWidget, 'top-right')
  },
  /**
   * 添加图例
   * @param view 视图
   */
  addLegend(view) {
    const {Legend} = window.esri
    const legend = new Legend({
      view: view
    })
    view.ui.padding = {top: 0, left: 0, right: 90, bottom: 197}
    let components = view.ui._components
    let widget
    components.forEach(item => {
      widget = item.widget
    })
    if (widget.label === '图例') {
      view.ui.empty('bottom-right')
    } else {
      view.ui.add(legend, 'bottom-right')
    }
  },
  /**
   * 添加比例尺
   * @param view
   */
  addScaleBar(view) {
    const {ScaleBar} = window.esri
    const scaleBar = new ScaleBar({
      view: view,
      unit: 'metric',
      style: 'line'
    })
    view.ui.add(scaleBar, 'bottom-right')
  }
}
export default addWidget

