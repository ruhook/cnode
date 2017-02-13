<template>
<div class="navbar">
  <div class="navbar-inner">
    <div class="container">
      <router-link class="brand" to="/">
          <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
      </router-link>
      <form id="search_form" class="navbar-search" action="/search">
        <input type="text" id="q" name="q" class="search-query span3" value="">
      </form>
      <ul class="nav pull-right">
        <li v-for="link in links">
			<router-link :to="link.path">{{link.name}}</router-link>
		</li>
      </ul>
      <a class="btn btn-navbar" id="responsive-sidebar-trigger">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
	export default {
		data(){
			return {
				links:[
					{ path: '/', name:'首页' },
					{ path: '/getstart', name: '新手入门' },
					{ path: '/api', name: 'API' },
					{ path: '/about', name: '关于' },
					{ path: '/signup', name: '注册' }
				]
			}
		}
	}
</script>