<template>
  <div id="app">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'map'" :zoom="zoom" :plugin="plugin" :center="center">
        <el-amap-marker
          v-for="marker in markers"
          :key="marker.title"
          :text="marker.text"
          :title="marker.title"
          :position="marker.position"
          :events="marker.events"
          :visible="marker.visible"
        ></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "vue-amap欢迎您！",
      center: [104.067571, 30.639665],
      lng: 0,
      lat: 0,
      loaded: false,
      zoom: 12,
	  show: true,
	  plugin:[{
        pName: 'ToolBar',
        events: {
			init(instance) {
			console.log(instance);
			}
		}
	  }],
      markers: [
        {
          position: [116.397026, 39.918058],
          events: {
            click: () => {
              this.center = [116.397026, 39.918058];
              self.zoom = 18;
              console.log(this.center, this.zoom);
            },
            dragend: (e) => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          title: "bejing",
        },
        {
          position: [104.067571, 30.639665],
          events: {
            click: () => {
              this.center = [104.067571, 30.639665];
              this.zoom = 15;
              console.log(this.center, this.zoom);
            },
            dragend: (e) => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          title: "tiyuguan",
        },
        {
          position: [104.07332, 30.665513],
          events: {
            click: () => {
              this.center = [104.07332, 30.665513];
              this.zoom = 15;
              console.log(this.center, this.zoom);
            },
            dragend: (e) => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          title: "这是哪里",
        },
        {
          position: [104.016403, 30.657064, "龙爪堰地铁站"],
          events: {
            click: () => {
              this.center = [104.016403, 30.657064, "龙爪堰地铁站"];
              this.zoom = 16;
              console.log(this.center, this.zoom);
            },
            dragend: (e) => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          title: "这是龙爪堰",
        },
        {
          position: [104.067571, 30.639665],
          events: {
            click: () => {
              this.center = [104.067571, 30.639665];
              this.zoom = 18;
              console.log(this.center, this.zoom);
            },
            dragend: (e) => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            },
          },
          visible: true,
          title: "这是天赋广场",
        },
      ],
    };
  },
  watch: {
    center(val) {
      this.center = val;
    },
    zoom(val) {
      this.zoom = val;
      console.log(val);
    },
  },
  methods: {
    change() {
      console.log("lalalla");
    },
  },
};
</script>

<style>
.amap-wrapper {
  width: 100%;
  height: 600px;
}
</style>
