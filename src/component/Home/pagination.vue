<template>
<div class="pagination" current_page="1">
<ul> 
	<li :class="page === 1 ? 'disabled' : ''" @click="pageCount(-1)"><a>«</a></li>    
    <li v-for="(item,index) in pages" :class="page == item ? 'active disabled' : '' ">
        <a @click="toPage(item)" :key="index">{{item}}</a>
    </li>
    <li :class="page === 6 ? 'disabled' : ''" @click="pageCount(1)"><a>»</a></li>
</ul>
</div>
</template>

<script>

    export default {
        data(){
            return {
                pages:[1,2,3,4,5,6],
                page:1,
            }
        },
        methods:{
            toPage(index){
                this.page = index;
                routerPush.call(this,index)
            },
            pageCount(n){
                console.log(this.page)
                this.page += n;
                routerPush.bind(this)(this.page)
            }
        }
    }

    function routerPush(page){
        this.$router.push({
            query: { page }
        })
    }
</script>
<style lang="">
    .pagination a{
        cursor: pointer;
    }
</style>