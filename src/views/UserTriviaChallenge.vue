<template>
  <div class="bg-light">
    <div class="d-flex justify-content-center align-items-center vh-100" v-if="isLoading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="container py-5" v-else>
      <h3 class="d-flex justify-content-center mb-4">
        <span class="me-2 fs-1 fw-bolder">冷知識大考驗</span>
        <span class="fs-3 text-primary align-self-end">/ Challenge</span>
      </h3>
      <div class="row" v-if="!answered">
        <div class="col-lg-5 col-xl-6">
          <div class="w-100 h-100">
            <div class="d-none d-lg-block w-100 h-100 bg-cover" :style="{'background-image': `url(${nowQuestion.imageUrl})`}"></div>
            <img :src="nowQuestion.imageUrl" :alt="nowQuestion.title" height="300" class="d-block d-lg-none w-100">
          </div>
        </div>
        <div class="col-lg-7 col-xl-6 position-relative">
          <div class="d-flex flex-column justify-content-center h-100 p-5 bg-white">
            <h1 class="fs-2 fw-bold text-center mb-3 mb-lg-5">
              {{ nowQuestion.title }}
            </h1>
            <div class="d-flex flex-column mb-5">
              <button type="button" class="btn btn-outline-primary fw-bold mb-2" :class="{ 'choose': nowAnswer === 'A'}" @click="answer('A')">
                {{ nowQuestion.optionA }}
              </button>
              <button type="button" class="btn btn-outline-primary fw-bold mb-2" :class="{ 'choose': nowAnswer === 'B'}" @click="answer('B')">
                {{ nowQuestion.optionB }}
              </button>
              <button type="button" class="btn btn-outline-primary fw-bold mb-2" :class="{ 'choose': nowAnswer === 'C'}" @click="answer('C')">
                {{ nowQuestion.optionC }}
              </button>
              <button type="button" class="btn btn-outline-primary fw-bold" :class="{ 'choose': nowAnswer === 'D'}" @click="answer('D')">
                {{ nowQuestion.optionD }}
              </button>
            </div>
            <div class="position-relative">
              <p class="text-center text-muted py-2 mb-0 mt-lg-auto">
                {{ nowQuestionIndex + 1 }} / {{ questions.length }}
              </p>
              <div class="position-absolute bottom-0 end-0">
                <button type="button" class="btn btn-outline-primary fw-bold" @click="nextQuestion" v-if="nowAnswer && nowQuestionIndex !== 4">
                  下一題
                </button>
                <button type="button" class="btn btn-outline-primary fw-bold" @click="checkAnswers" v-if="nowAnswer && nowQuestionIndex === 4">
                  檢查答案
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="row">
          <div class="col-lg-5 col-xl-6">
            <div class="w-100 h-100">
              <div class="d-none d-lg-block w-100 h-100 bg-cover" :style="{'background-image': 'url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650445651410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OX5DseHqXL0OoVS0PqUmLQ9cBERn3oAVQwpaYwGmoPdHe8U2pzUY1GJjxyszbsUSeTslQC1Buk2FFSTxin2rGzFu8kO7G0fqcaZOHh8hhQSwmgl22wMgjjQE5MZXXPl6FQnePBNUwC4fi69QrgIrcQU3xwTXgSKkVah407lGCVzBNqmiHP3juPKI5ojhZpagyhGXGwjwNqklyYLtQBqrFYZ9qCx5uu64R2wlYLH2rJxrol4AQVPqpalZKDaWcPCkjZgiJrcZl9erzy2eujtdCRznPj4wA95w3HJYiq6pLWb%2B%2FtJzLClH%2BfM6hHawZmN7wnhJXne5pYkdOBFL1kcl7g%3D%3D)'}"></div>
              <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650445651410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OX5DseHqXL0OoVS0PqUmLQ9cBERn3oAVQwpaYwGmoPdHe8U2pzUY1GJjxyszbsUSeTslQC1Buk2FFSTxin2rGzFu8kO7G0fqcaZOHh8hhQSwmgl22wMgjjQE5MZXXPl6FQnePBNUwC4fi69QrgIrcQU3xwTXgSKkVah407lGCVzBNqmiHP3juPKI5ojhZpagyhGXGwjwNqklyYLtQBqrFYZ9qCx5uu64R2wlYLH2rJxrol4AQVPqpalZKDaWcPCkjZgiJrcZl9erzy2eujtdCRznPj4wA95w3HJYiq6pLWb%2B%2FtJzLClH%2BfM6hHawZmN7wnhJXne5pYkdOBFL1kcl7g%3D%3D" height="300" class="d-block d-lg-none w-100">
            </div>
          </div>
          <div class="col-lg-7 col-xl-6">
            <div class="h-100 p-5 bg-white text-center">
              <span class="material-icons checkCircle text-primary mb-3">check_circle</span>
              <p class="fs-5 mb-5">你的分數 {{ score }} / {{ this.answers.length }} ({{ score/this.answers.length *100 }}%)</p>
              <p class="mb-0">恭喜獲得冷知識大考驗{{ coupon.percent }}優惠券</p>
              <p class="mb-0">折扣碼: <span class="fw-bold">{{ coupon.couponCode }}</span></p>
              <p class="mb-3">已可在結帳頁使用</p>
              <router-link to="/cart" class="btn btn-primary btn-lg border-2 fw-bold text-white" type="button">立刻使用</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <SectionBanner :info="SectionCouponBanner" />
</template>

<script>
import SectionBanner from '@/components/SectionBanner'
export default {
  data () {
    return {
      answered: false,
      questions: [],
      nowQuestion: {},
      nowQuestionIndex: 0,
      answers: [],
      userAnswers: [],
      nowAnswer: '',
      score: 0,
      coupon: {
        percent: 0,
        couponCode: '',
        score: 0
      },
      isLoading: false,
      SectionCouponBanner: {
        bgImg: 'url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444886897.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=AKertjf%2FwFKlifZWfQaubvQuXyW6h0WPSlanbt0WKYDgAEN%2Bemhi8JNkt0k3s3rhVYn29eVKkMfUYWGSZBb%2FLFjSJ8Y4sU3vMJxtfRcP5nHsBp%2FRhxrPsus4Ivx0t9YMQuLSmpwzteuwAMJGpsqDUBXVP9jEcCnEV%2FXibgxOAJxRgK9xYwOcMPujFscM8VLBeSq%2Fxl3vl5eUqZVMER7x577FJzmEMMe%2Bq%2FNMqJgnEEkDRDwkuAL%2B7JIFMmVG%2Bu%2Bsipo6U1X%2F6iBon5trL8HgjcF8MhFMkh%2Bj5rlcBK7SVns76nC8XfbQ6Apu%2FGlM9gSyXuFqgLok%2BqWdRiqf7RW9BA%3D%3D)',
        title: '周年慶優惠券',
        titleEn: 'Coupon',
        text: '尚未領取周年慶優惠大獎嗎？快來翻出你的專屬優惠券',
        btnText: '手刀領取',
        btnPath: '/coupon'
      }
    }
  },
  watch: {
    nowQuestionIndex () {
      this.nowQuestion = this.questions[this.nowQuestionIndex]
    }
  },
  components: {
    SectionBanner
  },
  methods: {
    getQuestions (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          const triviaData = res.data.articles
          triviaData.forEach((item) => {
            if (item.category === '題目') {
              this.questions.push(item)
              this.answers.push(item.answer)
            }
          })
        }
        this.nowQuestion = this.questions[0]
        this.isLoading = false
      })
    },
    answer (option) {
      this.nowAnswer = option
    },
    nextQuestion () {
      this.userAnswers.push(this.nowAnswer)
      this.nowAnswer = ''
      this.nowQuestionIndex += 1
    },
    checkAnswers () {
      this.userAnswers.push(this.nowAnswer)
      this.nowAnswer = ''
      this.userAnswers.forEach((item, i) => {
        if (item === this.answers[i]) {
          this.score += 1
        }
      })
      this.coupon.score = this.score
      if (this.score === 5) {
        this.coupon.percent = '五折'
        this.coupon.couponCode = '100points'
      } else if (this.score > 1) {
        this.coupon.percent = '七折'
        this.coupon.couponCode = 'card30off'
      } else {
        this.coupon.percent = '八五折'
        this.coupon.couponCode = 'card15off'
      }
      this.answered = true
      localStorage.setItem('ChallengeCoupon', JSON.stringify(this.coupon))
    }
  },
  created () {
    this.answered = JSON.parse(localStorage.getItem('ChallengeCoupon')) || false
    if (this.answered) {
      this.coupon = this.answered
      this.score = this.answered.score
    }
    this.getQuestions()
  }
}
</script>

<style lang="scss" scoped>
.text-indent{
  text-indent: 2em;
}
.bg-cover{
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
img{
  object-fit: cover;
}
.btn-outline-primary:hover,.choose{
  background-color: #587778;
  color: #ffffff;
}
.checkCircle{
  font-size: 80px;
}
</style>
