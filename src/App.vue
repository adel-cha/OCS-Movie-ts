<template>
  <header>
    <router-link to="/">
      <h1><span>OCS</span>Movies</h1>
    </router-link>
  </header>
  <main>
  <router-view />
  </main>
  <footer>

  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-family: 'Fira Sans',sans-serif;
  &::selection{
    background: transparentize(#ff9800, 0.5);
  }
}
body{
  background-color: #35495E;
}
a{
  text-decoration: none;
}
header {
  display: flex;
  align-items: center;
  justify-content:center;
  padding: 10px 16px;
  background-color: #2C3D4E;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.2);
  h1{
  color:#fff;
  font-size: 28px;
    span{
      color:#ff9800
    }
  }
}


</style>
