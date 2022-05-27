<template>
  <div class="bg-light d-flex justify-content-center align-items-center vh-100" v-if="isLoading">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="container-fliud productBanner">
    <div class="bg-dark bg-opacity-50 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
        <span class="pb-2 me-2 fs-1 fw-bolder text-white">所有商品</span>
        <span class="fs-3 text-primary align-self-end">/ All Product</span>
      </h1>
    </div>
  </div>
  <div class="container-fluid bg-light py-4 py-xl-5">
    <div class="container">
        <div class="list-group list-group-flush flex-row justify-content-center flex-wrap flex-md-nowrap fs-5 mb-3 mb-xl-4">
          <button type="button"
            class="list-group-item list-group-item-action border-0 p-sm-3 px-md-4 py-3 fs-5 fw-bold text-center" :class="{'active': category === 'all' }"
            @click="category = 'all'">
            所有商品<sup class="fw-normal d-none d-md-inline">{{ products.length }}</sup>
          </button>
          <button type="button"
            class="list-group-item list-group-item-action border-0 p-sm-3 px-md-4 py-3 fs-5 fw-bold text-center" :class="{'active': category === 'onSale' }"
            @click="category = 'onSale'">
            活動促銷<sup class="fw-normal d-none d-md-inline">4</sup>
          </button>
          <button type="button"
            class="list-group-item list-group-item-action border-0 p-sm-3 px-md-4 py-3 fs-5 fw-bold text-center" :class="{'active': category === 'memorial' }"
            @click="category = 'memorial'">
            紀念牌<sup class="fw-normal d-none d-md-inline">5</sup>
          </button>
          <button type="button"
            class="list-group-item list-group-item-action border-0 p-sm-3 px-md-4 py-3 fs-5 fw-bold text-center" :class="{'active': category === 'bicycle' }"
            @click="category = 'bicycle'">
            經典單車牌<sup class="fw-normal d-none d-md-inline">3</sup>
          </button>
          <button type="button"
            class="d-none d-md-block list-group-item list-group-item-action border-0 p-sm-3 px-md-4 py-3 fs-5 fw-bold text-center" :class="{'active': category === 'other' }"
            @click="category = 'other'">
            其他<sup class="fw-normal d-none d-md-inline">4</sup>
          </button>
        </div>
      <div class="row mb-3">
        <div class="col-xl-10 mx-auto">
          <div class="row">
            <div class="col-md-6 col-lg-4 mb-3" v-for="item in filterProducts" :key="item.id">
              <div class="bg-white border cursorPointer" @click="viewProduct(item.id)">
                <div class="overflow-hidden position-relative">
                  <img class="img-fit" :src="item.imageUrl">
                  <span class="material-icons position-absolute rounded-circle fs-4 p-2" :class="{'favorite': isFavorite(item.id)}" @click.stop="toggleFavorite(item)">favorite</span>
                </div>
                <div class="d-flex flex-column text-center pt-4 px-4 fw-bold">
                  <span class="fs-5 mb-1">{{ item.title }}</span>
                  <span class="fs-5">NT ${{ $filters.currency(item.price) }}
                  <span class="text-muted text-decoration-line-through fs-6 ms-1" v-if="item.price !== item.origin_price">${{ $filters.currency(item.origin_price) }}</span>
                  </span>
                </div>
                <div class="p-4">
                  <button type="button" class="btn btn-primary fw-bold text-white w-100" @click.stop="addCart(item.id)">
                    <div class="spinner-border text-white spinner-border-sm" role="status" v-if="status.loadingItem === item.id">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SectionBanner :info="SectionCouponBanner" />
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter';
import SectionBanner from '@/components/SectionBanner';
import Footer from '@/components/Footer';
export default {
    data() {
        return {
            products: [],
            favorite: [],
            favoriteIds: [],
            category: "all",
            isLoading: false,
            status: {
              loadingItem: ""
            },
            SectionCouponBanner: {
                bgImg: "url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444886897.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AKertjf%2FwFKlifZWfQaubvQuXyW6h0WPSlanbt0WKYDgAEN%2Bemhi8JNkt0k3s3rhVYn29eVKkMfUYWGSZBb%2FLFjSJ8Y4sU3vMJxtfRcP5nHsBp%2FRhxrPsus4Ivx0t9YMQuLSmpwzteuwAMJGpsqDUBXVP9jEcCnEV%2FXibgxOAJxRgK9xYwOcMPujFscM8VLBeSq%2Fxl3vl5eUqZVMER7x577FJzmEMMe%2Bq%2FNMqJgnEEkDRDwkuAL%2B7JIFMmVG%2Bu%2Bsipo6U1X%2F6iBon5trL8HgjcF8MhFMkh%2Bj5rlcBK7SVns76nC8XfbQ6Apu%2FGlM9gSyXuFqgLok%2BqWdRiqf7RW9BA%3D%3D)",
                title: "周年慶優惠券",
                titleEn: "Coupon",
                text: "尚未領取周年慶優惠大獎嗎？快來翻出你的專屬優惠券",
                btnText: "手刀領取",
                btnPath: "coupon"
            }
        }
    },
    components: {
        SectionBanner,
        Footer
    },
    methods: {
        getProducts(){
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
            this.$http.get(api).then((res) => {
                this.isLoading = false;
                if(res.data.success){
                    this.products = res.data.products.reverse();
                }
            });
        },
        getFavorite(){
          this.favorite = JSON.parse(localStorage.getItem("favorite")) || [];
          this.favoriteIds = [];
          this.favorite.forEach((item) => {
            this.favoriteIds.push(item.id);
          });
        },
        viewProduct(id){
          this.$router.push(`/product/${id}`);
        },
        isFavorite (id) {
          return this.favoriteIds.some(function (item) {
            return item === id;
          });
        },
        toggleFavorite(item){
          const id = item.id;
          let hasFavorite = this.favorite.some((item) =>{
            return item.id === id;
          });
          if(!hasFavorite){
            this.favorite.push(item);
            localStorage.setItem("favorite", JSON.stringify(this.favorite));
            this.$swal({
              title: `已將 ${item.title} 加入我的最愛`,
              width: '28rem'
            });
          }else{
            let delItem = this.favorite.find((item) =>{
              return item.id === id;
            });
            this.favorite.splice(this.favorite.indexOf(delItem), 1);
            localStorage.setItem("favorite", JSON.stringify(this.favorite));
            this.$swal({
              title: `取消關注 ${item.title}`,
              width: '24rem'
            });
          }
          this.getFavorite();
          emitter.emit('update-favorite');
        },
        addCart(id){
            this.status.loadingItem = id;
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.post(api, { data: { product_id: id, qty: 1 } }).then(() => {
                this.$swal('商品已加入購物車');
                emitter.emit('update-cart');
                this.status.loadingItem = "";
            });
        },
    },
    computed: {
      filterProducts(){
        let filterProducts;
        switch(this.category){
          case "all":
            filterProducts = this.products.filter((item) => {
              return item
            });
            break;
          case "onSale":
            filterProducts = this.products.filter((item) => {
                return item.price !== item.origin_price
            });
            break;
          case "memorial":
            filterProducts = this.products.filter((item) => {
                return item.category === "紀念牌"
            });
            break;
          case "bicycle":
            filterProducts = this.products.filter((item) => {
                return item.category === "經典單車牌"
            });
            break;
          case "other":
            filterProducts = this.products.filter((item) => {
                return item.category === "其他"
            });
            break;
        }
        return filterProducts;
      }
    },
    created(){
        this.getProducts();
        this.getFavorite();
    }
}
</script>

<style lang="scss" scoped>
sup{
  top: -.65rem;
  left: .1rem;
}
.productBanner {
  height: 300px;
  background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650381522049.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D32yCABvgJflufQeWm08X4iYr7HyUnA10nJAT1gJ7w7kVmPMFsizdyloy3RZQezUSXikrngiIIeGfalSz01f1bDyYH8GwhrVuLE%2Ba8E4xtZmfJ9MZUuVs9nujeeRqHn0FNBjU6WErkbIF52MW6Z3YcjyXG2wz0TEC7SH%2FssRuxi%2FAspMfVI%2BB2lPhhxdlrZ0HlDztO1X3Q78iAbKmW5%2FV68hzUSucyQuiJVtBoZpoBwsXxirTp0oYBzRuY3A40dg9ixO%2B4zJJd3A2%2FMjoz7L2nQiWH9MjEMoWWJ2rEWe%2BYySWTN6m2udHqMPMx91X%2BNN8wO9wTC%2Bhg8VeDTWn0ifQQ%3D%3D);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width:768px) {
    height: 250px;
  }
  @media (max-width:576px) {
    height: 200px;
  }
}
.list-group-flush > .list-group-item {
  white-space: nowrap;
  width: auto;
  transition: .7s;
  background-color: transparent;
  color: #80D1D6;
  &:hover,&:focus,&.active {
    color: #ffffff;
    box-shadow: inset 0 0 0 3em #80D1D6;
  }
  @media(max-width: 768px){
    flex-grow: 1;
  }
  @media(max-width: 576px){
    flex-grow: 0;
    width: 50%;
  }
}
.list-group-item + .list-group-item.active{
  margin-top: 0;
}
.img-fit{
    height: 250px;
    width: 100%;
    object-fit: cover;
    transition: .5s;
}
.cursorPointer{
    cursor: pointer;
    &:hover{
      img{
        transform: scale(1.15);
      }
      box-shadow:0 0 8px rgb(128, 209, 214, .2);
    }
    .material-icons {
      transition: .3s;
      top: 8px;
      right: 8px;
      background-color: rgb(255, 255, 255, .3);
      color: #dee2e6;
      &:hover,&.favorite {
          color: #FF5959;
      }
    }
}
</style>