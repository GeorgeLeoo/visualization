<template>
  <el-tabs class="function-area" type="border-card">
    <el-tab-pane label="属性">属性属性属性属性属性属性属性属性</el-tab-pane>
    <el-tab-pane label="事件">事件</el-tab-pane>
  </el-tabs>
</template>

<script>
import {Tabs, TabPane} from 'element-ui'

export default {
    name: "FunctionArea",
    components: {
      [Tabs.name]: Tabs,
      [TabPane.name]: TabPane
    },
    props: {},
    data() {
        return {
        }
    },
    computed: {},
    watch: {},
    filters: {},
    created() {},
    methods: {},
}
</script>

<style scoped lang="less">
.function-area {
  width: 300px;
    z-index: 9;
}
</style>
