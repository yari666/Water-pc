<template>
    <div id="allmap"></div>
</template>

<script>
export default {
    data() {
        return {
            map: null,
            pointArr: [], //地图标注
        };
    },
    props: ["data", "filterData"],
    created() {},
    mounted() {
        this.mapInit();
    },
    watch: {
        filterData() {
            this.removeMap();
        },
    },
    methods: {
        mapInit() {
            //百度地图API功能
            this.map = new BMapGL.Map("allmap");
            let map = this.map;
            var point = new BMapGL.Point(109.029773, 32.699229);
            map.centerAndZoom(point, 10);

            // // 地图皮肤
            map.setMapStyleV2({
                styleId: "3f4be6653de2b8b2ff3f78003cdc3f8d",
            });

            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放

            // 向地图添加标注
            this.filterData.forEach((item) => {
                var point = new BMapGL.Point(item.lng, item.lat);

                // 创建图标
                var myIcon = new BMapGL.Icon(
                    item.imgUrl,
                    new BMapGL.Size(40, 50)
                );
                // 创建标注
                var marker = new BMapGL.Marker(point, {
                    icon: myIcon,
                    title: item.id,
                });

                // 将标注添加到地图中
                map.addOverlay(marker);

                marker.addEventListener("click", this.clickEvent);
            });
        },
        removeMap() {
            let map = this.map;
            map.clearOverlays();

            // 向地图添加标注
            this.filterData.forEach((item) => {
                var point = new BMapGL.Point(item.lng, item.lat);

                // 创建图标
                var myIcon = new BMapGL.Icon(
                    item.imgUrl,
                    new BMapGL.Size(40, 50),
                    { anchor: new BMapGL.Size(0, 25) }
                );
                // 创建标注
                var marker = new BMapGL.Marker(point, {
                    icon: myIcon,
                    title: item.id,
                });

                // 将标注添加到地图中
                map.addOverlay(marker);

                marker.addEventListener("click", this.clickEvent);
            });
        },
        clickEvent(e) {
            let index = 0;
            let subindex = 0;
            let lng = "";
            let lat = "";

            var id = e.srcElement._config.title;

            this.data.forEach((item, i) => {
                item.seweageData.forEach((subitem, subi) => {
                    if (subitem.id == id) {
                        index = i;
                        subindex = subi;
                        lng = subitem.lng;
                        lat = subitem.lat;
                    }
                });
            });

            this.goCenter(id, lng, lat);

            this.$emit("clickMapPoint", {
                areaIndex: index,
                sewageIndex: subindex,
            });
        },
        goCenter(id, lng, lat) {
            if (!id) return;

            if (!lng || !lat) {
                this.data.forEach((item, i) => {
                    item.seweageData.forEach((subitem, subi) => {
                        if (subitem.id == id) {
                            lng = subitem.lng;
                            lat = subitem.lat;
                        }
                    });
                });
            }

            this.map.centerAndZoom(new BMapGL.Point(lng, lat), 10);
        },
    },
};
</script>

<style lang="less" scoped>
#allmap {
    height: 100%;
}
#l-map {
    height: 100%;
    width: 78%;
    float: left;
    border-right: 2px solid #bcbcbc;
}
#r-result {
    height: 100%;
    width: 20%;
    float: left;
}

.maptip {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin: 100px;
    background-color: red;
    border-radius: 100px 100px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>