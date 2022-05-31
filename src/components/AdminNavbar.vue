<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom border-4 border-primary py-0 py-lg-2">
    <span class="navbar-brand ps-3">
      <img src="../../public/images/logo.png" alt="logo" height="40" class="px-2">
      <img src="../../public/images/findcard.png" alt="找。牌" height="24">
    </span>
    <button class="navbar-toggler border-0 py-0 me-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
      ref="navbarBtn" @click="isCollapse = !isCollapse">
      <span class="material-icons fs-2" :class="{ 'active': isCollapse }">menu</span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav w-100">
        <li class="nav-item">
          <router-link to="products" class="nav-link fw-bold p-3" :class="{ 'active':  status === 'adminProducts' }">產品列表</router-link>
        </li>
        <li class="nav-item">
          <router-link to="orders" class="nav-link fw-bold p-3" :class="{ 'active':  status === 'adminOrders' }">訂單</router-link>
        </li>
        <li class="nav-item">
          <router-link to="coupons" class="nav-link fw-bold p-3" :class="{ 'active':  status === 'adminCoupons' }">優惠券</router-link>
        </li>
        <li class="nav-item">
          <router-link to="trivia" class="nav-link fw-bold p-3" :class="{ 'active':  status === 'adminTrivia' }">撲克冷知識</router-link>
        </li>
        <li class="nav-item ms-lg-auto">
          <router-link to="cart" class="nav-link fw-bold p-3" :class="{ 'active':  status === 'adminCart' }">模擬購物車</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold p-3" href="#" @click.prevent="logout">登出</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import 'bootstrap/js/dist/collapse'
export default {
  data () {
    return {
      isCollapse: false,
      status: ''
    }
  },
  watch: {
    $route (to) {
      if (document.body.offsetWidth < 992) {
        this.$refs.navbarBtn.click()
      }
      this.status = to.name
    }
  },
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          this.$router.push('/login')
        }
      })
    }
  },
  mounted () {
    this.status = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
.navbar-light .navbar-nav .nav-link {
  &.active,&:hover {
    color: #587778;
    @media(max-width:992px) {
      background-color: #587778;
      color: #ffffff;
    }
  }
}
.navbar-toggler{
  &:focus{
    box-shadow: none;
  }
}
.material-icons{
  line-height: 40px;
  &.active{
    color: #587778;
  }
}
</style>
