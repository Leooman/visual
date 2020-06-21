<template>
    <el-menu router default-active="/" background-color="#fff" text-color="#000" active-text-color="#0747A6">
        <template v-for="item in menuList">
            <el-submenu class="submenuList" :index="item.path" v-if="item.children && item.children.length" :key="item.path">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.label}}</span>
                </template>
                <template v-for="item_c in item.children">
                    <el-menu-item :key="item_c.path" :index="item_c.path" >
                        {{ item_c.label }}
                    </el-menu-item>
                </template>
            </el-submenu>
            <el-menu-item v-else :index="item.path" :key="item.path">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.label}}</span>
            </el-menu-item>
        </template>
    </el-menu>
</template>
<script>
import menuList from "@/plugins/menu"
export default {
    data(){
        return {
            menuList:menuList
        }
    }
}
</script>
<style lang="less" scoped>
</style>