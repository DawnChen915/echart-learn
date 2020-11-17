<template>
	<div>
		<div id="main" style="width: 60%;margin-left: 20%;">
			<el-button @click="show()">show</el-button>
			<el-button @click="change()">change</el-button>
			<el-button @click="change1()">change1</el-button>
		</div>
		<div>{{count.id}}</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{}
		},
		computed:{
			// ...mapState({
			// 	count:state=>state.count
			// }),
			count:{
				get(){
					return this.$store.state.count
				},
				set(val){
					this.$store.commit('increment',val)
				}
			}
		},
		watch:{
			count(val){
				this.count=val
			}
		},
		methods:{
			show(){
				console.log(this.count)
			},
			change(){
				var i=100
				this.$store.commit('increment',i)
			},
			
			change1(){
				this.count.id = 1000
				var arr=[
					{
					  id:1,
					  name:'修',
					  sex:1
					},
					{
					  id:2,
					  name:'峰',
					  sex:0
					},
				]
				for(let item of arr){
					if(item.id==1){
						arr.splice(item.index,1)
					}
				}
				console.log(arr)
			},
		}
	}
</script>

<style>
</style>
