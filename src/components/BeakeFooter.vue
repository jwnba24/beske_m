<template>
  <div class="" id="BeskeFooter" class="beake-footer">
    <el-row>
      <el-col :span="12">
        <ul>
          <li>隐私条款</li>
          <li>电话: 12345</li>
          <li>邮箱: info@beske.com</li>
        </ul>
      </el-col>
      <el-col :span="12"></el-col>
    </el-row>
    <hr style="height:2px; border:none;border-top:2px solid #666666;"/>
    <el-row>
      <p>百思凯 BESKE, GLOBAL FOOD IMPORT SERVICE PROVIDER</p>
      <p>Copyright &copy; 2017 beske.com</p>
      <p>All Rights Reserved 沪ICP备14004129号-1</p>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BeskeFooter',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.beake-footer {
  background-color: #000000;
  height: 150px;
  color: #ffffff;
}
.beake-footer ul {
  margin: 4px 10px;
}
.beake-footer p{
  width: 100%;
  text-align: center;
  font-size: 12px;
}
</style>
