<template>
    <h3 class="d-flex justify-content-center mt-5 mb-3">
        <span class="pb-2 me-2 fs-1 fw-bolder">促銷商品</span>
        <span class="fs-3 text-primary align-self-end">/ On Sale</span>
    </h3>
    <div class="row g-4 pb-5">
        <div class="col-md-6 col-lg-4 col-xl-3" v-for="(item, index) in products" :key="item.id" :class="{'d-none d-xl-block': index === 3, 'd-none d-lg-block': index === 0}" @click="viewProduct(item.id)">
          <div class="bg-white border cursorPointer">
            <div class="overflow-hidden position-relative">
              <button class="btn fs-4 position-absolute text-white w-100 h-100 bg-dark bg-opacity-75">查看更多</button>
              <img class="img-fit" :src="item.imageUrl">
            </div>
            <div class="d-flex flex-column text-center pt-4 px-4 fw-bold">
              <span class="fs-5 mb-1">{{ item.title }}</span>
              <span class="fs-5">NT ${{ item.price }}
                <span class="text-muted text-decoration-line-through fs-6 ms-1">${{ item.origin_price }}</span>
              </span>
            </div>
            <div class="p-4">
              <button type="button" class="btn btn-primary fw-bold text-white w-100" @click.stop="addCart(item.id)">
                <div class="spinner-border text-white spinner-border-sm" role="status" v-if="loadingItem === item.id">
                  <span class="visually-hidden">Loading...</span>
                </div>
              加到購物車</button>
            </div>
          </div>
        </div>
      </div>
</template>

<style lang="scss" scoped>
.img-fit{
    height: 250px;
    width: 100%;
    object-fit: cover;
    transition: .5s;
}
.cursorPointer{
    cursor: pointer;
    &:hover{
      .btn{
        opacity: 1;
      }
      img{
        transform: scale(1.15);
      }
      box-shadow:0 0 8px rgb(128, 209, 214, .2);
    }
}
.btn.bg-dark{
    z-index: 1;
    opacity: 0;
    transition: .5s;      
}
</style>

<script>
import emitter from '@/methods/emitter';
export default {
  data() {
    return {
      products: [
        {
          title: "Cardistry-Con 2019",
          id: "-N-HexEVmkB61Cs9WAf8",
          imageUrl: "https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1649580666820.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YeF3L%2Fpo%2BKxg1x77hewWF9elqifKtT0JW8sOE9UTnAOM55oXPqlHYIhWuUxpfSr%2FeBofcGoUOYjlhykZEhU9bz7plQCj2V%2BhLzdKDrBLCtyYBgxgHxr7xubbaNEjI8YHRN0q6NAspyvY4uSXFS1KV%2Fu%2BT3fiBMoVDI2wa48RcryfOz4OUxt65aUFSjPpmwz0RT0zs3gltBCnYqWPGXfY5niSZg2EUDD1mN91yd7ZfMKlFKoTnKXjAXd0cyHl0NSzO3ysTpo9w9cBDv%2BuF8EKjDcu6sbfxQh5Sltj8zb%2F1INcQ1fZWXQQuKPs%2B74uf%2Bc0Gv1WWApkrhkwgFjUkJYITg%3D%3D",
          origin_price: 500,
          price: 400
        },
        {
          title: "加拿大國家公園紀念牌",
          id: "-N-HfxO4rb_sLZJ3Eg5o",
          imageUrl: "https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1649580939089.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=lu8bgBiQ3OylFi1Qnii8hixrTgpF9cfdKidmWdCv%2B2CmGZyUdGP7O4nKeWp%2F9tL89nWeIRoe3uemEfGKi2NSmCI9G%2BqV2Hto5JPCtX4IGEttXLs9TUOyf%2B120c7gxSbajqXXn%2BrdAXNn5g6Yya6aQZz6vjxZ8bQ0fQCk5PPcpjMbGwwsKCuzuvyRD%2FHyhhmBOGYlGnLpr2rCTdTnrU7LsApkxWKixLUCTLn%2FC%2FWWMjwu%2BNnFBwCSRhIID1HClaph2cKsSKaNtYj%2FuGSpYLHdg1IAGPtjEUlCM4%2BHjp4jRrIN5VzpnS7txLFOkH1YqbwMYCb7IDJQpmjQ85k7iM2GQg%3D%3D",
          origin_price: 800,
          price: 680
        },
        {
          title: "紀念牌保護盒",
          id: "-N-HfkrNHQrf4OXk-1cf",
          imageUrl: "https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1649580901753.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=hxFrtgLRqxDLsEvh%2FtqiYcmipfSHg9ZQy6xWcJ8AlqP%2Fg9J23nvRAqEg2NXfVTTZv3Oiy0yWqVArNK2%2BGln%2BtOeUfyegK63J972UHgZVRctV4cZXHX9AVbMLgGM9XJOHBcuzjGlRsjKi2fKOow15h2roQhskwNCxEH4XsuamG7IDKKWAtbp1HP5dXd6r4r%2Bmfb7%2BRg0X7IBcj5A%2BmmVfmy4sAgShzA6LZd%2BIccPlCerZyRBkz4gXe5iuzs6SMptLgRFqnSX0IjCvNGBsWNo42JSOOUwWtnCSL4nBCCFRvm5VJl4%2FILg7M1w9PZSfAikUja3H%2FUsEjZ32cbmanAPfNA%3D%3D",
          origin_price: 280,
          price: 200
        },{
          title: "經典單車牌（藍）",
          id: "-MzUqau2-81yrO0osEL9",
          imageUrl: "https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650423229822.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JXznmeP0pxSQ8W3h%2FSDGGS9TZBKE0zYCxtCGoBL8kEg3w8avQWqJWPOo4nW%2F7QCMi7Mk%2FN90ckpV1RbbXAVwjSzdpnre909Jt3gwCBnopF4vlrXlIXZ%2BEvelcIb3UfbRCOeCnD9lx3JzlUTgM%2B5%2F5eyM2mgxIKcvGJUwi%2BGp%2BKkdBhP7zNCWYhG4b5hMP2S1qStgCmS2r4X%2BkDFOE2F7SAA6jNRRjv3FZ%2BFnUt7GGLLajyG88R836s3BV4%2BAvA%2FnEZZj%2BTbGosXI5WDfC9PJjRMEhsQp5aDjIaRlMRicn81NQ33%2BWGO46OCt%2F%2F45ptJPna0DqNQgHD5lRQM4bAVc%2BQ%3D%3D",
          origin_price: 100,
          price: 65
        }
      ],
      loadingItem: ""
    }
  },
  methods: {
    addCart(id){
      this.loadingItem = id;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.post(api, { data: { product_id: id, qty: 1 } }).then(() => {
          this.$swal('商品已加入購物車');
          emitter.emit('update-cart');
          this.loadingItem = "";
        });
    },
    viewProduct(id){
      this.$router.push(`/product/${id}`);
    }
  }
}
</script>