<template>
  <div class="container-fliud banner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
          <span class="pb-2 me-2 fs-1 fw-bolder text-white">周年慶抽獎</span>
          <span class="fs-3 text-primary align-self-end">/ Raffle</span>        
      </h1>
    </div>
  </div>
  <div class="bg-light">
    <div class="container">
      <div class="d-flex justify-content-center">
        <div class="py-5">
          <div class="h-100 d-flex flex-column align-items-center">
            <p class="mb-0 fs-5"> 歡慶本店開幕兩週年</p>
            <p class="mb-4 fs-5">歡迎您參與「週年慶抽獎」活動
              <span class="d-none d-sm-inline">，翻出您的專屬優惠券</span>
            </p>
            <div class="d-flex align-items-center mb-3">
              <p class="fs-5 mb-0 me-1">請翻開您的卡</p>
              <span class="material-icons">expand_more</span>
            </div>
            <div class="d-flex">
              <div class="couponCard d-md-block mx-2" v-for="(item,index) in coupons" :key="index" @click="chooseCard(item)" :class="{'choose': choose.code === item.code, 'd-none':  choose.code !== item.code}">
                <img src="images/card.png" alt="抽獎卡" :class="{'cursorPointer': choose === ''}">
                <div class="text h-100 w-100 d-flex flex-column justify-content-center text-center text-white border border-4 border-white">
                  <p class="fs-4 mb-4">{{ item.title }}</p>
                  <p class="fs-5 mb-0">折扣碼</p>
                  <p class="fs-5 mb-4">{{ item.code }}</p>
                  <p class="fs-5 mb-0">可在結帳頁使用</p>
                </div>
              </div>
              <div class="couponCard d-md-none mx-2" @click="chooseCard(coupons[1])" :class="{'d-none': choose !== ''}">
                <img src="images/card.png" alt="抽獎卡">
              </div>
            </div>
            <div class="text-center mt-4">
              <template v-if="choose !== ''">
                <p class="fs-5 mb-0">恭喜獲得周年慶{{ choose.title }}</p>
                <p class="fs-5 mb-0">折扣碼: {{ choose.code }}</p>
                <p class="fs-5 mb-3">已可在結帳頁使用</p>
                <router-link to="/products" class="btn btn-outline-primary btn-lg border-2 fw-bold me-3" type="button">瀏覽商品</router-link>
                <router-link to="/cart" class="btn btn-primary btn-lg border-2 fw-bold text-white" type="button">立刻使用</router-link>              
              </template>
            </div>
          </div>
        </div>
      </div>
      <SectionOnSale></SectionOnSale>
    </div>
  </div>
  <SectionBanner :info="SectionTriviaBanner"></SectionBanner>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
.banner{
  height: 300px;
  background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444886897.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AKertjf%2FwFKlifZWfQaubvQuXyW6h0WPSlanbt0WKYDgAEN%2Bemhi8JNkt0k3s3rhVYn29eVKkMfUYWGSZBb%2FLFjSJ8Y4sU3vMJxtfRcP5nHsBp%2FRhxrPsus4Ivx0t9YMQuLSmpwzteuwAMJGpsqDUBXVP9jEcCnEV%2FXibgxOAJxRgK9xYwOcMPujFscM8VLBeSq%2Fxl3vl5eUqZVMER7x577FJzmEMMe%2Bq%2FNMqJgnEEkDRDwkuAL%2B7JIFMmVG%2Bu%2Bsipo6U1X%2F6iBon5trL8HgjcF8MhFMkh%2Bj5rlcBK7SVns76nC8XfbQ6Apu%2FGlM9gSyXuFqgLok%2BqWdRiqf7RW9BA%3D%3D");
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
.couponCard{
    height: 282px;
    width: 200px;
    position: relative;
    img,.text{
        transition: .9s;
        position: absolute;
        backface-visibility: hidden;
        border-radius: 15px;
    }
    .text{
        background-color: rgba(128, 209, 214, .9);
        height: 282px;
        transform: rotateY(-180deg);
    }
    img{
        width: 200px;
    }
}
.cursorPointer{
  cursor: pointer;
}
.choose{
    .text{
        transform: rotateY(0deg);
    }
    img{
        transform: rotateY(-180deg);
    }    
}
.btn{
  transition: .8s;
  &:hover,
  &:focus {
    color: #ffffff;
    box-shadow: inset 0 0 0 2em #80D1D6;
  }
}
</style>

<script>
import SectionOnSale from '@/components/SectionOnSale';
import SectionBanner from '@/components/SectionBanner';
import Footer from '@/components/Footer';
export default {
    data() {
        return {
          coupons: [
            {
              title: "全館85折優惠",
              code: "card15off"
            },
            {
              title: "全館5折優惠",
              code: "findcard"
            },
            {
              title: "全館7折優惠",
              code: "card30off"
            }
          ],
          choose: "",
          SectionTriviaBanner: {
            bgImg: "url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444820513.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bH91qiBlELvko2ff5FaMMA4xh%2BjVWxjdyh8UZvb2vDttAzlHj8OatXNicPefiNpwQCEWLuqkICdZRf10taPBCnxGT6J%2F573ntuoxcthyKS9R5tN0c9VJMkJNrDIBKF68ej3nF3hx6y8D92%2FWF9b7I6UyJaw1ZyyfJMKwIPoo7w7exwi5NHS01uw9e0TuALCCV%2B%2BGaUmU84C5t4ejN8xnTQwgj5RMkt7xDVdfySH8ZD8MBOD6HfUAgfijtI9TdDHoVFhCS%2BIM2x5VBvb3%2BJ9Xw%2Bm8kJXuynmTFaP4RzUxl5j%2BugpZGllD%2BLaQVX%2BIHXHU2RLR7S%2BL0YOle%2FFfEmTheg%3D%3D)",
            title: "撲克冷知識",
            titleEn: "Trivia",
            text: "你知道嗎？將撲克牌四種花色重疊在一起的話，就會跑出星星喔",
            btnText: "了解更多",
            btnPath: "/trivia"
          }
        }
    },
    components: {
      SectionOnSale,
      SectionBanner,
      Footer
    },
    methods: {
        chooseCard(item){
          if(this.choose === ""){
            this.choose = item;
            setTimeout(()=>{
              this.$swal({
                title: `恭喜獲得周年慶${item.title}`,
                width: '22rem',
                timer: 7000,
                timerProgressBar: false
              });              
            }, 1500);
            localStorage.setItem("AnniversaryCoupon", JSON.stringify(item));
          }else{
            return
          }
        }
    },
    created() {
      this.choose = JSON.parse(localStorage.getItem("AnniversaryCoupon")) || "";
    }
}
</script>