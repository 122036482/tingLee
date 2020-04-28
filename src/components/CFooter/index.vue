<template>
  <div class="footer-container">
    <div class="footer-container-f fl">
      <p>Copyright © 英语听听, 2011~2020</p>
      <p>
        <a href="mailto:zxllf23@foxmail.com" target="_blank">email: zxllf23@foxmail.com</a>
      </p>
    </div>
    <div class="footer-container-f fr">
      <p>微信：roenluo</p>
      <p><a href="http://www.beian.miit.gov.cn/" target="_blank">赣ICP备20005425号</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CFooter"
};
</script>

<style scoped lang="less">
.footer-container {
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  .footer-container-f {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      p{
          margin: 10px;
      }
  }
}
</style>
