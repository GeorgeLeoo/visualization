<template>
    <div class="ui-container">
        <header>
            <div class="left">
                <el-select v-model="device" placeholder="请选择" @change="handlerModelChange">
                    <el-option
                        v-for="item in devices"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <span class="size">{{sizeInfo.width}} x {{sizeInfo.height}}</span>
                <i class="el-icon-mobile mobile-icon" :class="[rotate ? 'rotate' : '']" @click="handlerClick"></i>
                <el-select v-model="zoom" class="zooms" placeholder="请选择" @change="handlerModelChange">
                    <el-option
                        v-for="item in zooms"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <el-button type="primary">生成</el-button>
        </header>
        <section class="main">
            <!--            <draggable id="app-ui-container" class="app-ui-container" :style="appStyle" group="people" :value="list">-->
            <!--                div-->
            <!--            </draggable>-->
            <!--            ondrop="drop(event)" ondragover="allowDrop(event)"-->
            <div id="app-ui-container" class="app-ui-container" :style="appStyle" @drop="drop"
                 @dragover="allowDrop"></div>
        </section>
    </div>
</template>

<script>
import { Select, Option, Button } from 'element-ui'
// import draggable from 'vuedraggable'

const webStyle = {
    width: '100%',
    height: 'calc(100vh - 60px - 60px)'
}

const iPhone6_7_8Style = {
    width: '375px',
    height: '667px'
}

const iPhoneXStyle = {
    width: '375px',
    height: '812px'
}

const iPadProStyle = {
    width: '1020px',
    height: '1366px'
}

const pixel2Style = {
    width: '411px',
    height: '731px'
}

export default {
    name: 'UIContainer',
    components: {
        [Select.name]: Select,
        [Option.name]: Option,
        [Button.name]: Button,
        // draggable
    },
    props: {},
    data () {
        return {
            list: [],
            devices: [
                {
                    value: 'Web',
                    label: 'Web'
                },
                {
                    value: 'iPhone6/7/8',
                    label: 'iPhone6/7/8'
                },
                {
                    value: 'iPhoneX',
                    label: 'iPhoneX'
                },
                {
                    value: 'pixel2',
                    label: 'pixel2'
                },
                {
                    value: 'iPad Pro',
                    label: 'iPad Pro'
                }
            ],
            device: 'Web',
            zooms: [
                {
                    value: '50%',
                    label: '50%'
                },
                {
                    value: '75%',
                    label: '75%'
                },
                {
                    value: '100%',
                    label: '100%'
                },
                {
                    value: '125%',
                    label: '125%'
                },
                {
                    value: '150%',
                    label: '150%'
                },
            ],
            zoom: '100%',
            appStyle: {},
            sizeInfo: {},
            rotate: false
        }
    },
    computed: {},
    watch: {
        device: {
            handler (val) {
                if (val === 'iPhone6/7/8') {
                    this.appStyle = Object.assign(this.appStyle, iPhone6_7_8Style)
                    this.sizeInfo = iPhone6_7_8Style
                }
                if (val === 'iPhoneX') {
                    this.appStyle = Object.assign(this.appStyle, iPhoneXStyle)
                    this.sizeInfo = iPhoneXStyle
                }
                if (val === 'iPad Pro') {
                    this.appStyle = Object.assign(this.appStyle, iPadProStyle)
                    this.sizeInfo = iPadProStyle
                }
                if (val === 'pixel2') {
                    this.appStyle = Object.assign(this.appStyle, pixel2Style)
                    this.sizeInfo = pixel2Style
                }
                if (val === 'Web') {
                    this.appStyle = Object.assign(this.appStyle, webStyle)

                    setTimeout(() => {
                        const appUiContainer = document.getElementById('app-ui-container')
                        this.sizeInfo = {
                            width: appUiContainer.offsetWidth + 'px',
                            height: appUiContainer.offsetHeight + 'px'
                        }
                    }, 100)
                }
            },
            immediate: true
        },
        zoom: {
            handler (val) {
                let scale = 1
                if (val === '50%') {
                    scale = 0.5
                }
                if (val === '75%') {
                    scale = 0.75
                }
                if (val === '100%') {
                    scale = 1
                }
                if (val === '125%') {
                    scale = 1.25
                }
                if (val === '150%') {
                    scale = 1.5
                }
                let style = { transform: `scale(${scale})`}
                this.appStyle = Object.assign(this.appStyle, style)
            },
            immediate: true
        }
    },
    filters: {},
    created () {
    },
    methods: {
        handlerZoom (type) {
            console.log(type)
        },
        handlerModelChange () {
            this.rotate = false
        },
        drop (ev) {
            ev.preventDefault()
            const data = ev.dataTransfer.getData('Text')
            const el = document.getElementById(data)
            console.log(el.dataset.path)
            ev.target.appendChild(el.cloneNode(true))
        },
        allowDrop (ev) {
            ev.preventDefault()
        },
        handlerClick () {
            this.rotate = !this.rotate
            this.appStyle = {
                width: this.appStyle.height,
                height: this.appStyle.width,
            }
            this.sizeInfo = {
                width: this.sizeInfo.height,
                height: this.sizeInfo.width,
            }
        }
    },
}
</script>

<style scoped lang="less">
@import '../../theme/index.less';

.ui-container {
    flex: 1;

    header {
        height: 60px;
        padding: 10px 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #DCDFE6;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
        user-select: none;
        z-index: 9;

        .left {
            display: flex;
            flex-direction: row;
            align-items: center;

            .size {
                margin-left: 10px;
            }

            .mobile-icon {
                margin-left: 10px;
                transition: all 0.3s ease;
                font-size: 20px;
                cursor: pointer;
            }

            .zoom-icon {
                margin-left: 20px;
                font-size: 20px;
                cursor: pointer;
            }

            .rotate {
                transform: rotateZ(90deg);
            }

            .zooms {
                margin-left: 20px;
            }
        }
    }

    .main {
        height: calc(100vh - 60px);
        background-color: @bg-color-grey;
        padding: 30px;
        display: flex;
        justify-content: center;
        overflow: auto;
    }

    .app-ui-container {
        border: 1px solid @border-color;
        overflow: auto;
    }
}
</style>
