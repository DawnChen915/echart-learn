import Vue from 'vue'
import VueRouter from 'vue-router'
import scroll from './view/scroll'
import echart1 from './view/echart1'
import myresume from './view/myresume.vue'
import CP from './view/amappppppp.vue'
import amap from './view/amap.vue'
import table from './view/table.vue'

Vue.use(VueRouter)

let router = new VueRouter({
	routes:[{
		path:'/scroll',
		component:scroll,
		name:'scroll'
	},
	{
		path:'/',
		component:echart1,
		name:'ecahrt1'
	},
	{
		path:'/resume',
		component:myresume,
		name:'myresume'
	},
	{
		path:'/cp',
		component:CP,
		name:'cpsb'
	},
	{
		path:'/amap',
		component:amap,
		name:'amap'
	},
	{
		path:'/table',
		component:table,
		name:'table'
	}]
})

export default router