<template>
    <div id="mapbox"></div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
        };
    },
    mounted() {
        this.mapInit();
    },
    methods: {
        mapInit() {
            //百度地图API功能
            this.map = new BMapGL.Map("mapbox");
            let map = this.map;
            var point = new BMapGL.Point(109.029773, 32.699229);
            map.centerAndZoom(point, 10);

            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

            //单击获取点击的经纬度
            map.addEventListener("click", function (e) {
                alert(e.point.lng + "," + e.point.lat);
            });
        },
    },
};
</script>
