<template>
	<div>
		<el-container>
			<el-header>
				<router-link to="/">
					<el-button>
						echart
					</el-button>
				</router-link>
				<router-link to="/scroll">
					<el-button>
						scroll
					</el-button>
				</router-link>
				<router-link to="/resume">
					<el-button>
						myresume
					</el-button>
				</router-link>
				<router-link to="/cp">
					<el-button>
						CP
					</el-button>
				</router-link>
				<router-link to="/amap">
					<el-button>
						amap
					</el-button>
				</router-link>
			</el-header>
			<el-main style="width: 100%;height: 1000px;">
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>
<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>
<style>
	body{
		margin: 0px;
	}
</style>
