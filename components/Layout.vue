<template>
  <article class="page">
    <header>
      <img src="~/assets/img/logo.svg" class="logo" alt="" />
      <h1>@BreizhCamp 2022</h1>
    </header>

    <main><slot /></main>
  </article>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;

  h1 {
    margin: 0;
  }
}

.page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 10rem;
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("~/assets/img/background.svg") center no-repeat;
    background-size: cover;
    opacity: 0.08;
  }
}

main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  width: 24rem;
}
</style>
