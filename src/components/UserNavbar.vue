<template>
  <nav class="navbar navbar-expand-lg navbar-light p-0 bg-white position-fixed top-0 w-100">
      <a class="navbar-brand" href="#">
        <img src="../../public/images/logo.png" alt="logo" height="40" class="px-2">
        <img src="../../public/images/findcard.png" alt="找。牌" height="24">
      </a>
      <button class="navbar-toggler border-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" ref="navbarBtn" @click="isCollapse = !isCollapse">
        <span class="material-icons fs-2" :class="{ 'active': isCollapse }">menu</span>
      </button>
      <div class="collapse navbar-collapse pt-2 pt-lg-0" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'home' }">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'products' }">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/coupon" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'coupon' }">優惠活動</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/trivia" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'trivia' }">撲克冷知識</router-link>
          </li>
          <li class="d-block d-lg-none nav-item">
            <router-link to="/cart" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'cart' }">購物車</router-link>
          </li>
          <li class="d-block d-lg-none nav-item">
            <router-link to="/favorite" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'favorite' }">關注商品</router-link>
          </li>
          <li class="d-block d-lg-none nav-item">
            <router-link to="/login" class="nav-link fw-bold px-4 px-lg-3 py-3" :class="{ 'active':  status === 'login' }">後台登入</router-link>
          </li>
        </ul>
        <ul class="d-none d-lg-flex navbar-nav ms-auto me-2">
          <li class="nav-item position-relative">
            <router-link to="/cart" class="nav-link px-3" :class="{ 'active':  status === 'cart' }">
              <span class="material-icons">shopping_cart</span>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num" v-if="cartNum !== 0">
                {{ cartNum }}
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/favorite" class="nav-link px-3" :class="{ 'active':  status === 'favorite' }">
              <span class="material-icons">favorite</span>
              <div class="bg-danger text-white rounded-circle text-center position-absolute num" v-if="favoriteNum !== 0">
                {{ favoriteNum }}
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link px-3" :class="{ 'active':  status === 'login' }">
              <span class="material-icons">manage_accounts</span>
            </router-link>
          </li>
        </ul>
      </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar{
    z-index: 3;
}
.navbar-light .navbar-nav .nav-link {
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 0%;
    background-color: #80D1D6;
    transition: width .3s ease;
  }
  &.active,&:hover {
    color: #80D1D6;
    &::after{
      width: 100%;
    }
    @media(max-width:992px) {
      background-color: #80D1D6;
      color: #ffffff;
      &::after{
        width: 0;
      }
    }
  }
}
.material-icons{
  line-height: 40px;
}
.navbar-toggler{
  &:focus{
    box-shadow: none;
  }
  .material-icons{
    &.active{
      color: #80D1D6;
    }
  }
}
.num{
  width:20px;
  line-height: 20px;
  top: 8px;
  right: 8px;
  font-size: 12px;
}
</style>

<script>
import emitter from '@/methods/emitter';
import "bootstrap/js/dist/collapse";
export default {
  data() {
    return {
      isCollapse: false,
      status: "",
      favoriteNum: 0,
      cartNum: 0
    }
  },
  watch: {
    $route(to){
      if(document.body.offsetWidth < 992){
        let classList = [...this.$refs.navbarBtn.classList];
        if(classList.indexOf("collapsed") === -1){
          this.$refs.navbarBtn.click();
        }
      }
      this.status = to.name;
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }
    }
  },
  methods: {
    getCart() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartNum = res.data.data.carts.length;
        }
      });
    },
    getFavorite() {
      this.favoriteNum = (JSON.parse(localStorage.getItem("favorite")) || []).length;
    }
  },
  created(){
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cartNum = res.data.data.carts.length;
        }
      });
      this.favoriteNum = (JSON.parse(localStorage.getItem("favorite")) || []).length;
  },
  mounted() {
    this.status = this.$route.name;
    emitter.on('update-cart', () => {
      this.getCart();
    });
    emitter.on('update-favorite', () => {
      this.getFavorite();
    });
  }
}
</script>