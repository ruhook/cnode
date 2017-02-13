<template>
    <div id="app">
        <navbar/>
        <div id="main">
            <sider-bar/>
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
        <v-footer/>
    </div>
</template>

<script>
    import Navbar from './component/Navbar.vue'
    import SiderBar from './component/SiderBar.vue'
    import VFooter from './component/Footer.vue'
    export default {
        components:{ Navbar,SiderBar,VFooter }
    }
</script>