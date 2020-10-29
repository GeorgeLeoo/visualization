<template>
    <el-tabs class="components-list" type="border-card">
        <p>组件列表</p>
        <el-collapse v-model="activeName" accordion>
            <!--            <draggable v-model="list" :group="{ name: 'people', pull: 'clone', put: false }" @change="log">-->
            <!--                <el-collapse-item v-for="item in list" :key="item.name" :title="item.name" :name="item.name">-->
            <!--                    <div>{{item.content}}</div>-->
            <!--                </el-collapse-item>-->
            <!--            </draggable>-->
            <el-collapse-item v-for="item in list" :id="`components-${item.name}`" :key="item.name" :title="item.name"
                              :name="item.name" :data-path="item.path" draggable="true"
                              @dragstart.native="handlerDragStart">
                <div>{{item.content}}</div>
            </el-collapse-item>
        </el-collapse>
    </el-tabs>
</template>

<script>
import { Tabs, TabPane, Collapse, CollapseItem } from 'element-ui'
// import draggable from 'vuedraggable'

// import path from 'path'
// import fs from 'fs'

export default {
    name: 'ComponentsList',
    components: {
        [Tabs.name]: Tabs,
        [TabPane.name]: TabPane,
        [Collapse.name]: Collapse,
        [CollapseItem.name]: CollapseItem,
    },
    props: {},
    data () {
        return {
            activeName: '按钮',
            list: [
                {
                    name: '按钮',
                    content: '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念',
                    path: '@/appComponents/Button',
                },
                {
                    name: 'Page',
                    content: '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作',
                    path: '@/appComponents/Button',
                },
                {
                    name: '布局',
                    content: '清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策',
                    path: '@/appComponents/Button',
                },
                {
                    name: 'AI键盘',
                    content: '用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策',
                    path: '@/appComponents/Button',
                },
            ]
        }
    },
    computed: {},
    watch: {},
    filters: {},
    created () {
    },
    mounted () {
    },
    methods: {
        handlerDragStart (ev) {
            ev.dataTransfer.setData('Text', ev.target.id)
        },
        log (ev) {
            console.log(ev)
        }
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.components-list {
    width: 160px;
    z-index: 9;

    p {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 10px;
    }
}
</style>
