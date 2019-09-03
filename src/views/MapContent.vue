<template>
    <div id="mapDiv"></div>
</template>

<script>
    export default {
        name: "mapcontent",
        data() {
            return {}
        },
        mounted() {
            const v = this
            window.arcgis(({
                               Map, MapView,
                           }) => {
                let pMap = new Map({
                    basemap: 'streets'

                })
                let view = new MapView({
                    container: 'mapView',
                    map: pMap,
                    zoom: 5,
                    spatialReference: 102100
                })
                view.ui.remove('zoom')
                view.ui.remove('attribution')
            })
        }
    }
</script>

<style scoped>
    #mapDiv {
        margin: 0;
        padding: 0;
        height: 500px;
        width: 700px;
    }
</style>