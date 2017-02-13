<template>
<div id="sidebar">
  <div class="panel">
    <div class="inner">
      <p>CNode：Node.js专业中文社区</p>
      <div>
        您可以
        <a href="/signin">登录</a>
        或
        <a href="/signup">注册</a>
        , 也可以
        <a href="/auth/github">
          <span class="span-info">
            通过 GitHub 登录
          </span>
        </a>
      </div>
    </div>
  </div>
<div class="panel">
  <div class="inner ads">
      <a href="https://alinode.aliyun.com/?ref=cnode" target="_blank" class="banner sponsor_outlink" data-label="alinode">
        <img src="//dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_">
      </a>  
        <div class="sep10"></div>
      <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc&amp;utm_campaign=kuai&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
        <img src="//dn-cnode.qbox.me/FnShQd73xj4HDHApe8umrioB9INR">
      </a>
        <div class="sep10"></div> 
      <a href="https://www.tenxcloud.com/?utm_source=cnode" target="_blank" class="banner sponsor_outlink" data-label="shisu">
        <img src="//dn-cnode.qbox.me/FroiK8TWgdPmAm0Dvzmr5l91vWsv">
      </a>
  </div>
</div>
  <div class="panel">
    <div class="header">
      <span class="col_fade">无人回复的话题</span>
    </div>
    <div class="inner">
      <ul class="unstyled">
        <li v-for="item in items">
			<div>
				<router-link class="dark topic_title" :to="'/topic/' + item.id" :title="item.title">{{item.title}}</router-link>
			</div>
		</li>
      </ul>
      
    </div>
  </div>
 <!-- 
   <div class="panel">
    <div class="header">
      <span class="col_fade">积分榜</span>
      &nbsp;
      <a class="dark" href="/users/top100">TOP 100 &gt;&gt;</a>
    </div>
    <div class="inner">
      <ol>
        <li v-for="user in top100">
			<span class="top_score">{{user.count}}</span>
			<span class="user_name"><a href="/user/i5ting">{{user.name}}</a></span>
		</li>
      </ol>
    </div>
  </div>
  -->
  <div class="panel">
    <div class="header">
      <span class="col_fade">友情社区</span>
    </div>
    <div class="inner">
      <ol class="friendship-community">
        <li>
          <a href="https://ruby-china.org/" target="_blank">
            <img src="//o4j806krb.qnssl.com/public/images/ruby-china-20150529.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="http://golangtc.com/" target="_blank">
            <img src="//o4j806krb.qnssl.com/public/images/golangtc-logo.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="http://phphub.org/" target="_blank">
            <img src="//o4j806krb.qnssl.com/public/images/phphub-logo.png">
          </a>
        </li>
        <div class="sep10"></div>
        <li>
          <a href="https://testerhome.com/" target="_blank">
            <img src="//dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK">
          </a>
        </li>
      </ol>
    </div>
  </div>
</div>
</template>

<script> 

const API = 'https://cnodejs.org/api/v1/'
	export default {
    	data(){
			return {
				items:[]
			}
		},
		created(){
			this.$http.get(API + 'topics', {
				params: {
					limit: 5
				}
			}).then(res => {
				this.items = res.body.data;
			}, res => {
				console.log('error')
			})
		}
	}
</script>