<template>
  <div class="vh-100 bg-light d-flex flex-column align-items-center justify-content-center">
    <h1 class="d-flex">
      <span class="pb-2 me-2 fs-1 fw-bolder">找不到頁面</span>
      <span class="fs-3 text-primary align-self-end">/ 404 Not Found</span>
    </h1>
    <p class="fs-5 mb-5">Oops！您要找的頁面被魔術師消失了</p>
    <router-link to="/" class="btn btn-outline-primary btn-lg fw-bold px-4 py-3">回到 找。牌 首頁</router-link>
  </div>
</template>

<style lang="scss" scoped>
.btn-outline-primary{
  transition: .5s;
  &:hover,
  &:focus {
    color: #ffffff;
    box-shadow: inset 0 0 0 2em #587778;
  }
}
</style>
