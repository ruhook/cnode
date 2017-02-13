<template>
    <div id="content">
        <div class="panel">
            <c-header/>
            <router-view></router-view>   
        </div>
    </div>
</template>
<script>
    import CHeader from '../CHeader.vue'
    export default {
        components:{ CHeader},
    }
</script>
