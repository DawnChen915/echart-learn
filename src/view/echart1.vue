<template>
	<div>
		<div id="list1" style="width: 20px;height: 200px;" >
			<ul v-for="item in 4" :key="item" @click="changedata(item)">
				<li style="display: inline;"><button>{{item}}</button></li>
			</ul>
		</div>
		<div id="box" style="width: 500px;height: 500px;float: left;" ></div>
		<div id="map" style="width: 900px;height: 500px;float: right;" ></div>
	</div>

</template>
<script>
	import Vue from 'vue'
	import echarts from 'echarts'
	import '../../node_modules/echarts/map/js/china'
	import '../../node_modules/echarts/map/js/province/sichuan.js'
	Vue.use(echarts)
	export default {
		data() {
			return {
				data: ['700', '800', '900', '1000', '600', '500', '700'],
				data1: ['700', '800', '900', '1000', '600', '500', '700'],
				data2: ['234', '564', '349', '974', '732', '324', '940'],
				data3: ['632', '127', '611', '993', '398', '237', '1234'],
				data4: ['688', '17', '6161', '9933', '98', '287', '24'],
				map: {
					center: {
						lng:104.067571,lat: 30.639665
					},
					zoom: 15,
					show: true,
					dragging: true
				},
				ifshow:'',
				data_info1:[
					{position:{lng:104.067571,lat: 30.639665},name: "省体育馆"},
					{position:{lng:104.07332,lat: 30.665513},name: "天府广场"},
					{position:{lng:104.016403,lat: 30.657064},name: "龙爪堰地铁站"},
				],
				cities:['北京','成都','深圳'],
				selected:''
			}
		},
		mounted() {
			this.drawLine()
			this.drawMap()
		},
		methods: {
			changedata(item) {
				console.log(item);
				if (item == 1) {
					this.data = this.data1
					this.drawLine()
				};
				if (item == 2) {
					this.data = this.data2
					this.drawLine()
				}
				if (item == 3) {
					this.data = this.data3
					this.drawLine()
				}
				if (item == 4) {
					this.data = this.data4
					this.drawLine()
				}
			},
			drawLine() {
				var myChart = echarts.init(document.getElementById('box'));
				var optoin = {
					legend: {
						data: ['降雨量']
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: this.data,
						areaStyle: {},
						type: 'line'
					}],
				}
				myChart.setOption(optoin)

			},

			drawMap() {
				var myMap = echarts.init(document.getElementById('map'))
				var option = {
					title: {
						text: "四川",
					},
					visualMap: {
						min: 800,
						max: 50000,
						text: ["High", "Low"],
						realtime: false,
						calculable: true,
						inRange: {
							color: ["lightskyblue", "blue", "mediumblue"],
						},
					},
					series: [{
						type: "map",
						map: '四川',
						data: [{
								name: "成都市",
								value: 20000
							},
							{
								name: "南充市",
								value: 10000
							},
							{
								name: "达州市",
								value: 12000
							},
							{
								name: "德阳市",
								value: 8000
							},
							{
								name: "绵阳市",
								value: 30000
							},
							{
								name: "攀枝花市",
								value: 50000
							},
						]
					}],
				};
				myMap.setOption(option)
			},
		},
	}
</script>

<style>
	.baidu-map-box {
		height: 500px;
		width: 100%;
	}
</style>
