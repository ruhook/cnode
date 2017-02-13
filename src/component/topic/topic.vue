<template>
    <div id="content">
  <div class="panel">
    <div class="header topic_header">
      <span class="topic_full_title">{{topic.title}}</span>
      <div class="changes">
        <span>
          发布于 {{topic.last_reply_at | getLastTime}}前
        </span>
        <span>
          作者 <a href="/user/zgzglike">{{topic.author && topic.author.loginname}}</a>
        </span>
        <span>
          {{topic.visit_count}} 次浏览
        </span>
          <span> 来自 {{topic | getTab}}</span>
          <input class="span-common span-success pull-right collect_btn" type="submit" value="收藏" action="collect">
      </div>
    </div>
    <div class="inner topic">
      <div class="topic_content" v-html="topic.content">
      </div>
    </div>
  </div>
  
  <div class="panel">
    <div class="header">
      <span class="col_fade">{{replies.length}} 回复</span>
    </div>
    <div class="cell reply_area reply_item" :id="item.id" v-for="(item,index) in replies">
    <div class="author_content">
        <a href="/user/i5ting" class="user_avatar">
        <img :src="item.author && item.author.avatar_url" :title="item.author && item.author.loginname"></a>
        <div class="user_info">
        <a class="dark reply_author" href="/user/i5ting">{{item.author && item.author.loginname}}</a>
        <a class="reply_time" :href="'#'+item.id">{{index+1}}楼•3 天前</a>
        </div>
    </div>    
    <div class="reply_content from-i5ting" v-html="item.content">
    </div>
    </div>
  </div>
</div>
</template>

<script>
import { getTab, getLastTime } from '../../filter.js';
    export default {
        data(){
            return { 
                topic: {},
                replies:[]
            }
        },
        methods:{
			getTopic(topicId){
				this.$http.get('https://cnodejs.org/api/v1/topic/'+topicId).then(res => {
					this.topic = res.body.data;
					this.replies = res.body.data['replies'];
				})
			}
        },
        created(){
			const topicId = this.$route.params.id;
        	this.getTopic(topicId);
        },
        filters:{
            getTab,
            getLastTime
        },
        watch:{
            $route(to, from, next){
                this.getTopic(to.params.id)
            }
        }
    }
</script>