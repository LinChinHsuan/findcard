<template>
  <div class="bg-light">
    <div class="d-flex justify-content-center align-items-center vh-100" v-if="isLoading">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div class="container py-5" v-else>
      <h3 class="d-flex justify-content-center mb-4">
        <span class="me-2 fs-1 fw-bolder">你知道嗎？</span>
        <span class="fs-3 text-primary align-self-end">/ Do you know?</span>
      </h3>
      <div class="row">
        <div class="col-lg-5 col-xl-6">
          <div class="w-100 h-100">
            <div class="d-none d-lg-block w-100 h-100 bg-cover" :style="{'background-image': 'url(' + nowTrivia.imageUrl + ')'}"></div>
            <img :src="nowTrivia.imageUrl" :alt="nowTrivia.title" height="300" class="d-block d-lg-none w-100">
          </div>
        </div>
        <div class="col-lg-7 col-xl-6">
          <div class="d-flex flex-column justify-content-center h-100 p-5 bg-white">
            <h1 class="fs-2 fw-bold mb-3">{{ nowTrivia.title }}</h1>
            <p class="mb-1 pt-3 pt-lg-5 border-top">說明：</p>
            <p class="lh-lg mb-3 text-indent">{{ nowTrivia.explanation }}</p>
            <button class="btn btn-primary btn-lg text-white fw-bold mt-3 mt-lg-auto" type="button" @click="nextTrivia">下則冷知識</button>
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
      trivia: [],
      nowTrivia: {},
      nowTriviaIndex: 0,
      isLoading: false,
      SectionCouponBanner: {
        bgImg: 'url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650445294774.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=grJuMaRwCsP03enc90wmLU%2B7km1lwkR5DjZKbxXhREAbamECWC2DXG%2B4ePigCva9WFcwbBMYZ0%2Bd2twdoHuQ8JXasMZrAWqXm4jm9t%2Bhno2L2Iwzn%2B9n1lzFSbSomV07j5elBAe5L3aHqvNVgJ5j1rkqHFJtCtJVjJuoaLpyLAdQ8Y052MLx40FIdCTDk5x5oPrPFqPKehojpoigbedSVhZF%2BPgCMRUhop9m3cwM%2FdOFWbTQqMf9fH77AVi%2FrRHED2imiI%2F3A76YXLChamA%2B9MARHUuk1YjS%2BkuEnOlgKcmi6RNLSDpKbZqn9TqoNS01P7j2dXK3FlFLs9%2FsNk8SRA%3D%3D)',
        title: '冷知識大考驗',
        titleEn: 'Challenge',
        text: '快來參加撲克牌冷知識大考驗，最大獎可獲得半價優惠券！',
        btnText: '立刻參加',
        btnPath: '/trivia/triviaChallenge'
      }
    }
  },
  components: {
    SectionBanner
  },
  methods: {
    getTrivia (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          const triviaData = res.data.articles
          triviaData.forEach((item) => {
            if (item.category === '冷知識') {
              this.trivia.push(item)
            }
          })
        }
        this.nowTrivia = this.trivia[0]
        this.isLoading = false
      })
    },
    nextTrivia () {
      if (this.nowTriviaIndex !== this.trivia.length - 1) {
        this.nowTriviaIndex += 1
      } else {
        this.nowTriviaIndex = 0
      }
      this.nowTrivia = this.trivia[this.nowTriviaIndex]
    }
  },
  created () {
    this.getTrivia()
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
</style>
