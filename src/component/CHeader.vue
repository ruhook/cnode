<template>
    <div class="header">
        <router-link v-for="link in links" :to="link.path" class="topic-tab">{{link.name}}</router-link>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                links:[
                    { path: 'all', name: '全部' },
                    { path: 'good', name: '精华' },
                    { path: 'share', name: '分享' },
                    { path: 'ask', name: '问答' },
                    { path: 'job', name: '招聘' }
                ],
                cl:'current-tab'
            }
        }
    }
</script>