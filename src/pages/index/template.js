import request from '@/helpers/request.js'

window.request = request

export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      onclick(){
        this.$message('这是一条消息提示');
    }
  }
}