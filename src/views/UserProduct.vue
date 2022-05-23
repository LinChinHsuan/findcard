<template>
    <div class="bg-light pt-5">
        <div class="container pt-4">
            <nav class="d-none d-lg-block" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/">首頁</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/products">產品列表</router-link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">{{ product.title}}</li>
                </ol>
            </nav>
            <div class="row">
                <div class="col-lg-5 col-xl-6">
                    <div v-if="!product.imageUrl" class="d-flex justify-content-center align-items-center h-100">
                        <div class="spinner-border text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    <div v-else>
                        <img :src="product.imageUrl" :alt="product.title" class="productImage w-100" v-if="!product.imagesUrl">
                        <div ref="carousel" id="carouselIndicators" class="carousel slide" data-bs-ride="carousel" v-else>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active"></button>
                                <button type="button" data-bs-target="#carouselIndicators" :data-bs-slide-to="i" v-for="i in product.imagesUrl.length" :key="i"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img :src="product.imageUrl" class="productImage d-block w-100" :alt="product.title">
                                </div>
                                <div class="carousel-item" v-for="item in product.imagesUrl" :key="item">
                                    <img :src="item" class="productImage d-block w-100" :alt="product.title">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>                    
                    </div>
                </div>
                <div class="col-lg-7 col-xl-6">
                    <div class="d-flex flex-column justify-content-center h-100 px-lg-5">
                        <h1 class="fs-1 fw-bold mt-5 mt-lg-0 mb-3">{{ product.title}}</h1>
                        <p class="fs-5 fw-bold mb-2 pt-4 border-top">產品介紹</p>
                        <p class="lh-lg mb-5 text-description">{{ product.description }}</p>
                        <p class="mb-4">{{ product.content }}</p>
                        <p class="fs-3 fw-bold text-end mb-0">NT ${{ product.price}} / 副 
                            <span class="fs-5 text-decoration-line-through text-muted" v-if="product.price !== product.origin_price">
                                ${{ product.origin_price }}
                            </span>
                        </p>
                        <div class="d-flex mt-5">
                            <div class="d-flex align-items-center w-50 me-3">
                                <span class="material-icons text-primary p-2 qtyCounter" @click="qtyAdjust(-1)">remove</span>
                                <span class="flex-grow-1 text-center">{{ qty }}</span>
                                <span class="material-icons text-primary p-2 qtyCounter" @click="qtyAdjust(1)">add</span>
                            </div>
                            <button class="btn btn-primary fw-bold text-white w-50" type="button" @click="addCart(product.id)">
                                <div class="spinner-border text-white spinner-border-sm" role="status" v-if="isLoading">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                加入購物車
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <SectionOnSale></SectionOnSale>
        </div>        
    </div>
    <SectionBanner :info="SectionCouponBanner"></SectionBanner>
    <Footer></Footer>
</template>

<script>
import emitter from '@/methods/emitter';
import Carousel from "bootstrap/js/dist/carousel";
import SectionOnSale from '@/components/SectionOnSale';
import SectionBanner from '@/components/SectionBanner';
import Footer from '@/components/Footer';
export default {
    data() {
        return {
            carousel: {},
            product: {},
            qty: 1,
            isLoading: false,
            SectionCouponBanner: {
                bgImg: "url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444886897.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AKertjf%2FwFKlifZWfQaubvQuXyW6h0WPSlanbt0WKYDgAEN%2Bemhi8JNkt0k3s3rhVYn29eVKkMfUYWGSZBb%2FLFjSJ8Y4sU3vMJxtfRcP5nHsBp%2FRhxrPsus4Ivx0t9YMQuLSmpwzteuwAMJGpsqDUBXVP9jEcCnEV%2FXibgxOAJxRgK9xYwOcMPujFscM8VLBeSq%2Fxl3vl5eUqZVMER7x577FJzmEMMe%2Bq%2FNMqJgnEEkDRDwkuAL%2B7JIFMmVG%2Bu%2Bsipo6U1X%2F6iBon5trL8HgjcF8MhFMkh%2Bj5rlcBK7SVns76nC8XfbQ6Apu%2FGlM9gSyXuFqgLok%2BqWdRiqf7RW9BA%3D%3D)",
                title: "周年慶優惠券",
                titleEn: "Coupon",
                text: "尚未領取周年慶優惠大獎嗎？快來翻出你的專屬優惠券",
                btnText: "手刀領取",
                btnPath: "/coupon"
            }
        }
    },
    components: {
        SectionOnSale,
        SectionBanner,
        Footer
    },
    watch: {
        $route(){
            this.getProduct();
        }
    },
    methods: {
        getProduct(){
            const id = this.$route.params.id;
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`;
            this.$http.get(api).then((res) => {
                if(res.data.success){
                    this.product = res.data.product;
                }
            });
        },
        qtyAdjust(num){
            if(num === 1){
                this.qty += 1;
            }else if(this.qty === 1){
                return
            }else{
                this.qty -= 1;
            }
        },
        addCart(id){
            this.isLoading = true;
            const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
            this.$http.post(api, { data: { product_id: id, qty: this.qty } }).then(() => {
                emitter.emit('update-cart');
                this.$swal('商品已加入購物車');
                this.isLoading = false;
            });
        }
    },
    created(){
        this.getProduct();
    },
    mounted() {
        this.carousel = new Carousel(this.$refs.carousel);
    }
}
</script>

<style lang="scss">
.qtyCounter{
    cursor: pointer;
    &:hover{
      background-color: #e9ecef;
    }
}
img{
    object-fit: cover;
}
.productImage{
    height: 500px;
    @media (max-width: 992px) {
        height: 350px;
    }
    @media (max-width: 768px) {
        height: 250px;
    }
}
.carousel-indicators [data-bs-target]{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #80D1D6;
}
.text-description{
    text-indent: 2em;
    text-align: justify;
}
</style>