/**
 * 画点、线、多边形操作（在地图上画几何的逻辑部分）
 * @param type  类型：点、线...
 * @param view  视图
 * @returns {Promise<unknown>}
 */
function drawGeometry(type, view) {
    let action
    return new Promise(resolve => {
        const {Draw, Point, Circle, Graphic, Polygon} = window.esri
        const draw = new Draw({
            view: view
        })
        if (type === 'circle') {
            action = draw.create('circle', {model: 'click'})
            view.focus()
            action.on('draw-complete', (evt) => {
                let vertices = evt.vertices
                view.graphics.removeAll()
                let center = new Point({
                    hasZ: false,
                    hasM: false,
                    x: vertices[0][0],
                    y: vertices[0][1],
                    spatialReference: view.spatialReference
                })
                let dis = center.distance(new Point({
                    hasZ: false,
                    hasM: false,
                    x: vertices[1][0],
                    y: vertices[1][1],
                    spatialReference: view.spatialReference
                }))
                let graphic = new Graphic({
                    geometry: new Circle({
                        hasZ: false,
                        hasM: false,
                        center: center,
                        radius: dis,
                        spatialReference: view.spatialReference
                    }),
                    symbol: {
                        type: 'simple-fill',
                        color: [51, 51, 204, 0.9],
                        style: 'forward-diagonal',
                        outline: {
                            color: 'blue',
                            width: 1
                        }
                    }
                })
                view.graphics.add(graphic)
                resolve(graphic)
            })
        } else if (type === 'rectangle') {
            action = draw.create('rectangle', {model: 'click'})
            view.focus()
            action.on('draw-complete', (evt) => {
                let vertices = evt.vertices
                let rings = [vertices[0], [vertices[0][0], vertices[1][1]], vertices[1], [vertices[1][0], vertices[0][1]]]
                view.graphics.removeAll()
                let graphic = new Graphic({
                    geometry: new Polygon({
                        hasZ: false,
                        hasM: false,
                        rings: [rings],
                        spatialReference: view.spatialReference
                    }),
                    symbol: {
                        type: 'simple-fill',
                        color: [51, 51, 204, 0.9],
                        style: 'forward-diagonal',
                        outline: {
                            color: 'blue',
                            width: 1
                        }
                    }
                })
                view.graphics.add(graphic)
                resolve(graphic)
            })
        } else if (type === 'polygon') {
            action = draw.create('polygon', {model: 'click'})
            view.focus()
            action.on('draw-complete', (evt) => {
                let vertices = evt.vertices
                view.graphics.removeAll()
                let graphic = new Graphic({
                    geometry: new Polygon({
                        hasZ: false,
                        hasM: false,
                        rings: [vertices],
                        spatialReference: view.spatialReference
                    }),
                    symbol: {
                        type: 'simple-fill',
                        color: [51, 51, 204, 0.9],
                        style: 'forward-diagonal',
                        outline: {
                            color: 'blue',
                            width: 1
                        }
                    }
                })
                view.graphics.add(graphic)
                resolve(graphic)
            })
        } else if (type === 'cancel') {
            view.graphics.removeAll()
        }
    }).catch(function (reson) {
     alert(reson)
    })
}

export {drawGeometry}
