<template>
  <div id="app">
      <c-header/>
      <c-content/>
      <c-footer/>
  </div>
</template>

<script>
import CHeader from './components/CHeader'
import CContent from './components/CContent'
import CFooter from'./components/CFooter'
export default {
  name: 'App',
  components: {
      CHeader,
      CContent,
      CFooter
  }
}
</script>

<style>
    @import "styles/base.css";

</style>
