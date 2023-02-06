<script>
export default {};
</script>

<template>
  <header>
    <h1>Boolfolio</h1>
    <nav class="navbar-expand-lg bg-light">
      <div class="container" >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
          <li  class="nav-item me-3"><router-link :to="{ name: 'homepage' }" class="text-decoration-none">Home Page</router-link></li>
          <li  class="nav-item me-3"><router-link :to="{ name: 'about-us' }" class="text-decoration-none">Chi Siamo</router-link></li>
          <li  class="nav-item me-3"><router-link :to="{ name: 'contact-us' }" class="text-decoration-none">Contattaci</router-link></li>
        </ul>
    </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>