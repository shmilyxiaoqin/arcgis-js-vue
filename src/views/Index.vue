<template>
    <div>
        <el-row class="row-bg">
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="nav-top-left">
                        <!--标志-->
                        <img src="/public/favicon.ico" alt="vue"/>
                        <label>Vue.js</label>
                    </div>
                    <!--导航栏-->
                    <div class="nav-top-right">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                                 @select="handleSelect">
                            <el-menu-item index="1">处理中心</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                                <el-submenu index="2-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="3">消息中心</el-menu-item>
                            <el-menu-item index="4">订单管理</el-menu-item>
                        </el-menu>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <div class="nav-left-content">我是左侧导航栏</div>
            </el-col>
            <el-col :span="18">
                <div class="content-info">
                    <map-content></map-content>
                </div>
              <!--  <text-content></text-content>-->
                <!--       <router-view></router-view>-->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import TextContent from "./TextContent";
    import MapContent from "./MapContent";

    export default {
        name: "index",
        components: {TextContent,MapContent},
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        },
        /*  mounted() {
              this.$router.push('/TextContent')
          }*/
    }
</script>

<style lang="scss" scoped>
    .el-row {
        margin-bottom: 0;

        &:last-child {
            margin-bottom: 0;
        }
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #fff;
    }

    .bg-purple {
        background: #fff;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        position: relative;
        border-radius: 4px;
        min-height: 72px;
        border: 1px solid white;

    }

    .row-bg {
        padding: 5px 0;
        background-color: #f9fafc;
    }

    .nav-left-content {
        width: 60%;
        overflow-y: scroll;
        height: 850px;

    }

    .nav-top-left {
        position: absolute;
        top: 30px;
        left: 45px;
        flex: 1;
    }

    .nav-top-right {
        position: absolute;
        right: 0;
        top: 0;
        flex: 1;
    }
    .content-info{
        margin: 0;
        padding: 0;
        height: 500px;
        width: 900px;
    }
</style>