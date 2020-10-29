<template>
    <div class="main">
        <router-view />
        <div id="tabber">
            <Tabbar />
        </div>
    </div>
</template>
<script>
import Tabbar from '@/components/Tabbar'
export default {
    components: {
        Tabbar,
    },
}
</script>
<style lang="less" scoped>
.main {
    padding-bottom: 5/3.75rem;
}
</style>