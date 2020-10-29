<template>
    <van-tabbar
        v-model="active"
        @change="onChange"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
    >
        <van-tabbar-item :icon="item.icon" v-for="(item, index) in list" :key="index">
            {{ item.text }}
        </van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
    data() {
        return {
            active: this.$route.meta.active || 0,
            inactiveColor: '#282828',
            activeColor: '#fc4141',
            list: [
                {
                    pagePath: '/',
                    text: '首页',
                    icon: 'home-o',
                },
                {
                    pagePath: '/category',
                    text: '分类',
                    icon: 'apps-o',
                },
                {
                    pagePath: '/cart',
                    text: '购物车',
                    icon: 'shopping-cart-o',
                },
                {
                    pagePath: '/user',
                    text: '我的',
                    icon: 'user-o',
                },
            ],
        }
    },
    methods: {
        onChange(index) {
            let pagePath = this.list[index].pagePath
            this.$router.push({ path: pagePath })
        },
    },
}
</script>
<style lang="less" scoped>
</style>