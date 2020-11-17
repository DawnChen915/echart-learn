<template>
	<div class="app-container">
		<div id="container" style="width:100%; height:600px;resize:both;"></div>
	</div>
</template>

<script>
	import AMap from 'AMap'
	var map
	var markers = []
	var gaters = []
	export default {
		data() {
			return {
				xx: '',
				text: {
					title: 'lalal',
					content: '',
				}
			}

		},
		mounted() {
			this.initmap()
		},
		methods: {
			initmap() {
				map = new AMap.Map("container", {
					resizeEnable: true,
					rotateEnable: true,
					pitchEnable: true,
					zoom: 14,
					pitch: 80,
					// rotation: -15,
					viewMode: "3D", // 开启3D视图,默认为关闭
					buildingAnimation: true, // 楼块出现是否带动画
					expandZoomRange: true,
					zooms: [3, 20],
					center: [104.067571, 30.639665],
				});
				var marker = new AMap.Marker({
				    position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
				    title: '北京'
				});
				
				// 将创建的点标记添加到已有的地图实例：
				map.add(marker);
				map.addControl(new AMap.ControlBar({
				        showZoomBar: false,
				        showControlButton: true,
				        position: {
				          right: '10px',
				          top: '0px'
				        }
				}))
				AMap.event.addListener(marker, 'click', function(e){
					console.log(e)
					map.setZoom(12)
					map.setCenter([e.lnglat.lng,e.lnglat.lat])
				})
				this.zoomListener()
			},
			zoomListener(){
				var zoom
				var showZoom=function(){
					zoom=map.getZoom()
				    console.log(zoom)
				}
				map.on('zoomchange',showZoom)
			}
		}
	}
</script>

<style>
</style>
