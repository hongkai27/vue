<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer
  }
};
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto 1fr auto; /*fr表示尽可能的撑开*/
  grid-template-areas:
    "header header header"
    ".       main  ."
    "footer footer footer";
}
#header {
  grid-area: header; /*表示占用header这个区域*/
  padding-left: 12%;
  padding-right: 12%;
}
#main {
  grid-area: main;
}
#footer {
  grid-area: footer;
  padding-left: 12%;
  padding-right: 12%;
}
</style>
