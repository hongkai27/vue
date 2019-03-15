<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <h1>light blog share</h1>
      <p>精品博客汇聚</p>
      <div class="btns">
        <router-link to="/login"><el-button >立即登录</el-button></router-link>
        <router-link to="/register"><el-button>注册账号</el-button></router-link>
      </div> 
    </template>
    <template v-if="isLogin">
      <h1>light share</h1>
      <i class="edit el-icon-edit"></i>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
        </ul>
      </div>         
    </template>
  </header>
</template>

<script>
import auth from '../api/auth'
  window.auth = auth

import {mapGetters,mapActions}from 'vuex'//vuex里面提供的函数API，可以把vuex里面的状态都映射到这里

export default {
  data() {
      return {}
    },
  computed:{//computed直接反应渲染data里面的数据
    ...mapGetters([
      'isLogin','user'
      ])
  },
//created可以使用阿贾克斯发送请求获取数据，再放到data里面，经过渲染就可以呈现在页面上
  created(){//钩子函数，created是当组件创建的时候，数据已经准备好，但模板还未渲染，created就会来做最早的事情
    this.checklogin()//也可以写成原来的引用this.$store.dispatch('checklogin')
  },//但我们在下面已经引用了mapActions

  methods:{//methods是触发后执行
    ...mapActions([//把vuex里面的状态在这里引到这里
      'checklogin',//checklogin现在就相当于是当前组件的方法,可以引用
      'logout'
    ]),
    onLogout() {
        this.logout()
      }
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
  .user {
    position: relative;

    ul {
      display: none;
      position: absolute;
      right: 0;
      list-style: none;
      border: 1px solid #eaeaea;
      margin:0;
      padding: 0;
      background-color: #fff;

      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;

        &:hover {
          background-color: #eaeaea;
        }
      }

    }

    &:hover ul {
      display: block;
    }
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
