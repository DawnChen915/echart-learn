<template>
	<div style="background-color: #F4F3EC;height:100%;">
		<div id="list" style="float:left ;">
			<ul>
				<li v-for="item in 6" :key=item>
					<el-button @click="changeclass(item)">{{item}}</el-button>
				</li>
			</ul>
		</div>
		<div class="main-content">
			<div class="item" v-for="item in 6" :key="item">
				<p style="color: #F06431;font-size: 15px;background-color: #000000;">{{item}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				listNames: [],
				activeName: '1',
				height: '',
				text:'',
			}
		},
		computed:{
			...mapState({
				count:state=>state.count
			})
		},
		mounted() {
			window.addEventListener('scroll', this.watchscroll)

		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.watchscroll)
		},
		methods: {
			changeclass(i) {
				console.log(i)
				this.activeName = i
				document.documentElement.scrollTop=i*100
			},
			watchscroll() {
				var t = document.documentElement.scrollTop || document.body.scrollTop;
				console.log(t)
			}
		}
	}
</script>

<style>
	div#list ul li {
		list-style-type: none;
	}

	#list {
		position: fixed;
		top: 100px;
		position: -webkit-sticky;
		z-index: 999;
	}

	.main-content {
		width: 80%;
		float: right;
	}

	.item {
		height: 100px;
		text-align: center;
		margin-top: 20px;
	}
</style>
