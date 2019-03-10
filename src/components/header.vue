<template>
  <header :class="{'login':islogin,'no-login':!islogin}">
    <h1>Light share</h1>
    <p>记录轻享生活</p>
    <div class="btns">
      <el-button>立即登录</el-button>
      <el-button>注册账号</el-button>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {islogin:true}
  }
}
</script>




<style lang="less">
header.login {
  display: flex;
  align-items: center;
  background: rgb(88, 180, 233);

  h1 {
    margin: 0;
    padding: 0;
    color: rgb(240, 233, 233);
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;
  }
  p {
    color: #fff;
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .btns{display: none;}

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
  }
}

header.no-login {
  padding: 0 12% 30px 12%;
  display: grid;
  justify-items: center;
  background: rgb(88, 180, 233);

  h1 {
    color: #fff;
    font-size: 40px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
  }

  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
}



</style>
