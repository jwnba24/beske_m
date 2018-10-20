<template>
  <div id="login">
    <BeskeHeader></BeskeHeader>
    <div style="background-color: #ffffff; height: 550px;">

    </div>
    <BeskeFooter></BeskeFooter>
  </div>
</template>

<script>
import BeskeHeader from "./BeskeHeader.vue"
import BeskeFooter from "./BeakeFooter.vue"

export default {
  name: 'login',
  components: {
    BeskeHeader,
    BeskeFooter
  },
  data () {
    return {

    }
  }
}
</script>
