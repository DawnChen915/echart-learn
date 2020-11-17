import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import './plugins/element.js'
import router from './router.js'
import store from './store.js'
import VueRouter from 'vue-router'
import VueAMap from 'vue-amap';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
	key: '95321ed3aaacf1fd57c2c8831cbb2abf',
	//插件
	plugin: [

		"AMap.Autocomplete",
		//输入提示插件

		"AMap.PlaceSearch",
		//POI搜索插件

		"AMap.Scale",
		//右下角缩略图插件 比例尺

		"AMap.OverView",
		//地图鹰眼插件

		"AMap.ToolBar",
		//地图工具条

		"AMap.MapType",
		//类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制

		"AMap.PolyEditor",
		//编辑 折线多，边形

		"AMap.CircleEditor",
		//圆形编辑器插件

		"AMap.Geolocation"
		//定位控件，用来获取和展示用户主机所在的经纬度位置

	],

	// 默认高德 sdk 版本为 1.4.4
	v: '1.4.4',
});

Vue.use(ElementUI)
Vue.use(echarts)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
