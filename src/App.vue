<template>
  <div id="app">
<!--    <ComponentsList/>-->
    <ComponentsList/>
    <UIContainer/>
    <FunctionArea/>
  </div>
</template>

<script>
import ComponentsList from '@/components/ComponentsList'
import UIContainer from '@/components/UIContainer'
import FunctionArea from '@/components/FunctionArea'

export default {
  name: 'App',
  components: {
    ComponentsList,
    UIContainer,
    FunctionArea,
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
}
</style>
