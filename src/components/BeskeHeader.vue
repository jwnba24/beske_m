<template>
  <div id="BeskeHeader">
    <el-row>
      <el-col :span="15">
        <div class="grid-content bg-purple-dark">
          <el-button type="primary">主要按钮</el-button>
        </div>
      </el-col>
      <el-col :span="5">
        <div></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-dark">c</div>
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
