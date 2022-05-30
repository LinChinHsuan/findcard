<template>
  <div class="container-fliud banner">
    <div class="bg-dark bg-opacity-75 w-100 h-100 d-flex align-items-center">
      <h1 class="w-100 d-flex align-items-center justify-content-center mb-0 mt-5">
        <span class="pb-2 me-2 fs-1 fw-bolder text-white">撲克冷知識</span>
        <span class="fs-3 text-primary align-self-end">/ Trivia</span>
      </h1>
    </div>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Footer from '@/components/Footer'
export default {
  components: {
    Footer
  }
}
</script>

<style lang="scss" scoped>
.banner{
  height: 300px;
  background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444820513.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bH91qiBlELvko2ff5FaMMA4xh%2BjVWxjdyh8UZvb2vDttAzlHj8OatXNicPefiNpwQCEWLuqkICdZRf10taPBCnxGT6J%2F573ntuoxcthyKS9R5tN0c9VJMkJNrDIBKF68ej3nF3hx6y8D92%2FWF9b7I6UyJaw1ZyyfJMKwIPoo7w7exwi5NHS01uw9e0TuALCCV%2B%2BGaUmU84C5t4ejN8xnTQwgj5RMkt7xDVdfySH8ZD8MBOD6HfUAgfijtI9TdDHoVFhCS%2BIM2x5VBvb3%2BJ9Xw%2Bm8kJXuynmTFaP4RzUxl5j%2BugpZGllD%2BLaQVX%2BIHXHU2RLR7S%2BL0YOle%2FFfEmTheg%3D%3D");
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
</style>
