<template>
<div class="inner no-padding">
<transition name="fade" mode="in-out">
<div id="topic_list" v-if="!loading">
	<div class="cell" v-for="(item,index) in items" :key="index">
    <a class="user_avatar pull-left" href="/user/nswbmw">
      <img :src="item.author.avatar_url" :title="item.author.loginname">
    </a>
    <span class="reply_count pull-left">
		<span class="count_of_replies" title="回复数">{{item.reply_count}}</span>
		<span class="count_seperator">/</span>
		<span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
	</span>
	<router-link class="last_time pull-right" :to="'/topic/' + item.id ">
		<span class="last_active_time">{{item.last_reply_at | getLastTime}}前</span>
 	</router-link>
	<div class="topic_title_wrapper">	
		<span 
			:class="item.top || item.good ? 'put_top' : 'topiclist-tab'" 
			v-if="$route.params.id == 'all' || item.top || item.good ">
			{{item | getTab}}</span>
		<router-link class="topic_title" :to="'/topic/' + item.id " :title="items.title"> 
			{{item.title}}
		</router-link>
  	</div>
  	</div>
</div>
</transition>
	<pagination/>
</div>
</template>

<script>
import Pagination from './pagination.vue'
import { getTab, getLastTime } from '../../filter.js';
	export default {
		data(){
			return {
				items:[],
				loading:true
			}
		},
		components:{ Pagination },
		created(){
			this.getData()
		},
		filters:{
			getTab,
			getLastTime
		},
		methods:{
			getData(params = {}){
				params.limit = params.limit || 20
				this.loading = true;
				this.$http.get('https://cnodejs.org/api/v1/topics',{
					params
				}).then(res => {
					this.items = res.body.data;
					this.loading = false;
				})
			}
		},
		 watch:{
            $route(to, from, next){
                const tab = to.params.id;
				const query = to.query;
				this.getData({
					tab,
					...query
				})
            }
        }
	}
</script>

<style lang="">
	.loading h2{
		font-weight: 200;
		color: lawngreen;
		text-align: center;
		padding: 20px;
		position: absolute;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .2s
	}
	.fade-enter, .fade-leave-active {
		opacity: 0
	}
</style>
