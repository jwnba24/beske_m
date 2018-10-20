<template>
  <div id="BeskeHeader">
    <el-row>
      <el-col :span="15">
        <div class="header-logo">
        </div>
      </el-col>
      <el-col :span="9">
        <div  class="header-icon"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BeskeHeader',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
#BeskeHeader {
  height: 55px;
}
.header-logo {
  width: 250px;
  height: 45px;
  border: 1px solid #000000;
}
.header-icon {
  width: 46px;
  height: 46px;
  border: 1px solid #000000;
  float: right;
}
</style>
