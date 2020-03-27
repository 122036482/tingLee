<template>
  <div class="footer-container">
    <div class="footer-container-f fl">
      <p>Copyright © 英语听听, 2011~2019</p>
      <p>
        <a href="mailto:yingyutingting123@163.com">email: yingyutingting123@163.com</a>
      </p>
    </div>
    <div class="footer-container-f fr">
      <p>QQ: 1525401988</p>
      <p>粤ICP备12073657号</p>
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
