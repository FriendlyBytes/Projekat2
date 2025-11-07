<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/createproduct">Create product</RouterLink>
        <RouterLink to="/myprofile">My profile</RouterLink>
      </nav>
  </header>

  <RouterView />

</template>

<style scoped>
header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;

}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  width: 100vw;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    top: 0;
    left:0;
    right:0;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: calc(var(--section-gap) / 2);
    position: fixed;
    top: 0;
    
  }

 

  
}
</style>
