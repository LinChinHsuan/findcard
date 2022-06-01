<template>
  <div class="heroBanner position-relative">
    <div class="row h-100 g-0">
      <div class="col-lg-6 h-100 position-absolute slogan">
        <div class="h-100 d-flex flex-column justify-content-center text-white">
          <h1 class="text-center mt-5 mb-4">
            <span class="d-none">找。牌</span>
            <img src="../assets/images/findcardWhite.png" alt="找。牌" width="200">
          </h1>
          <p class="fs-4 text-center mx-auto mb-0">「魔術師為觀眾找牌，我們替您找牌。」</p>
          <router-link to="products" type="button" class="btn btn-outline-light btn-lg fw-bold border-2 px-4 mt-5 align-self-center">瀏覽商品</router-link>
        </div>
      </div>
      <div class="col-lg-6 ms-auto h-100">
        <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650445651410.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=OX5DseHqXL0OoVS0PqUmLQ9cBERn3oAVQwpaYwGmoPdHe8U2pzUY1GJjxyszbsUSeTslQC1Buk2FFSTxin2rGzFu8kO7G0fqcaZOHh8hhQSwmgl22wMgjjQE5MZXXPl6FQnePBNUwC4fi69QrgIrcQU3xwTXgSKkVah407lGCVzBNqmiHP3juPKI5ojhZpagyhGXGwjwNqklyYLtQBqrFYZ9qCx5uu64R2wlYLH2rJxrol4AQVPqpalZKDaWcPCkjZgiJrcZl9erzy2eujtdCRznPj4wA95w3HJYiq6pLWb%2B%2FtJzLClH%2BfM6hHawZmN7wnhJXne5pYkdOBFL1kcl7g%3D%3D" alt="找。牌" class="w-100 h-100 img-fit">
      </div>
      <div class="userScroll d-flex justify-content-center" v-if="height < 50">
        <img src="../assets/images/down-arrow.png" alt="arrow-down">
      </div>
    </div>
  </div>
  <div class="bg-light">
    <div class="container py-5">
      <div class="d-none d-md-block">
        <h3 class="d-flex justify-content-center mb-4">
          <span class="me-2 fs-1 fw-bolder">關於找。牌</span>
          <span class="fs-3 text-primary align-self-end">/ About Us</span>
        </h3>
        <div class="row about pb-5" ref="about">
          <div class="col-6 col-md-8">
            <div class="row h-100 align-content-center">
              <div class="col-xl-10 mx-auto pt-3 pt-lg-0 mb-4 mb-lg-5">
                <div class="fw-bold mb-lg-2 slogan">
                  <p class="fs-2 d-none d-lg-block mb-0">「魔術師為觀眾找牌，我們替您找牌。」</p>
                  <p class="fs-4 d-block d-lg-none mb-0">「魔術師為觀眾找牌，我們替您找牌。」</p>
                </div>
                <p class="fs-6 text-end text mb-0">—— 魔術師林店長 2019.03.09</p>
              </div>
              <div class="col-10 col-xl-8 mx-auto">
                <p class="d-none d-lg-block fs-5 text-indent mb-0">
                 《找。牌》是由曾榮獲韓國蔚山魔術特別獎的林店長所創辦的牌店，專注於提供各位魔術師高品質的撲克牌，每副牌皆以最高標準把關，從印刷到噴墨從未鬆懈一絲一毫。
                </p>
                <p class="d-block d-lg-none text-indent mb-0">
                  《找。牌》是由曾榮獲韓國蔚山魔術特別獎的林店長所創辦的牌店，專注於提供各位魔術師高品質的撲克牌，每副牌皆以最高標準把關，從印刷到噴墨從未鬆懈一絲一毫。
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1653952790181.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=qo48tYLGvST1i%2FfjPOUP98Zk9gy6yhEtZPYHP5yxG93XCr9WWz3zQgfBtqlReRIHrYfOQVl9PAycD3neWJIXCQ3s3kj0g4mFHblWCuzVdxIw8MJZ5yDLX2kjQbxk7OhNMywtdLca2N4706eJs0h4bPCiBsl8VYfwu6Y37VoKNlAOP9aPZrpvXwRUkZaydkD%2BQQ2nXZxyey1UNzzwBpgbxDfpDpGkzzNaArxc%2FLFwEPeWEXm%2FiHX3UpMkVJuGcx6c%2FydRXBlnOmiFmMWNIlha9vAvgrPLckTEjjSuKINS6k0DDIbGP1i7lSJy1p5zyT5H9%2Fk5YQbF3%2BdfpJOq2iyvLw%3D%3D" alt="關於找。牌">
          </div>
        </div>
      </div>
      <h3 class="d-flex justify-content-center mb-4">
        <span class="me-2 fs-1 fw-bolder">熱銷商品</span>
        <span class="fs-3 text-primary align-self-end">/ Hot Sale</span>
      </h3>
      <div class="row hotSale">
        <div class="col-lg-6">
          <div ref="carousel" id="carouselIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active"></div>
              <div class="carousel-item"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="h-100 d-flex flex-column justify-content-center px-2 px-md-0 px-lg-4 py-2 py-md-0">
            <h2 class="fs-1 fw-bold mt-5 mt-lg-0 mb-3">加拿大國家公園紀念牌</h2>
            <p class="fs-5 fw-bold mb-2 pt-4 border-top">產品介紹</p>
            <p class="lh-lg mb-4 text-indent">本產品為加拿大國家公園所推出的紀念牌，其每張牌面都是根據該國家公園內的風景與野生動物所繪製，具有濃濃的生態氣息和觀賞性，作為紀念牌價值十足。同時，金屬製的牌盒給人相當的安全感，給您與傳統的紙質牌盒截然不同的體驗。</p>
            <p class="d-none d-xl-block mb-5">規格：一盒53張、金屬製牌盒</p>
            <p class="fs-3 fw-bold text-end mb-3">NT $680 / 副
              <span class="fs-5 text-decoration-line-through text-muted">
                $800
              </span>
            </p>
            <div class="d-flex">
              <button type="button" class="btn btn-outline-primary border-2 fw-bold w-50 me-2" @click.stop="addCart('-N-HfxO4rb_sLZJ3Eg5o')">
                <div class="spinner-border text-white spinner-border-sm" role="status" v-if="isloading">
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
              <button class="btn btn-primary text-white fw-bold w-50" type="button" @click.stop="buyNow('-N-HfxO4rb_sLZJ3Eg5o')">
                  <div class="spinner-border text-white spinner-border-sm" role="status" v-if="buyNowLoading">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                立即購買
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SectionBanner :info="SectionCouponBanner" />
    <div class="container pt-5">
      <h3 class="d-flex justify-content-center mb-4">
        <span class="me-2 fs-1 fw-bolder">最新消息</span>
        <span class="fs-3 text-primary align-self-end">/ News</span>
      </h3>
      <div class="row news" ref="news">
        <div class="d-none d-md-block col-md-6">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650378741488.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=ebEvHRRmi1Lc%2FgnaZ3iqmG3dyk4MX2w%2FLWm7VW5eI9Zv7zd0HKL0nE%2B7czZ9x%2B7WhgP1jFvYENzLUjg7jNk9%2Fbc3ULK%2FUJPM3nbUthGK0JtpqeTRFcaZ1%2FNP4KNM59jWmYopSqJLc6%2FTYUyCzTd9oEjrLlAV4H6R9%2BM9hZvNPav2n%2FJogBCuUHHlDqSxRkuB4br3%2F5X8STIFIXQBB07unjxQDpEpyloPRKEqpmZM6O9%2F8si%2BwHR4Q5u3TjBvkF9rstOjHKUHEDqKj%2BD%2F%2F1MIvHdsYH5Od1SyC8Sj1%2BPVy9M8C5WV0S%2FOUlehAbIrdDjCsYN4aWpTMq%2BrD7MAikYX6A%3D%3D" alt="最新消息">
        </div>
        <div class="col-md-6 my-auto">
          <ul class="list-group list-group-flush">
            <li class="list-group-item bg-transparent d-flex align-item-center">
              <div class="d-flex flex-column">
                <span class="text-muted">2022</span>
                <span class="fs-5 text-primary">02/21</span>
              </div>
              <p class="mb-0 ms-3 align-self-center">歡慶找。牌兩週年，歡迎參加週年慶抽獎活動！</p>
            </li>
            <li class="list-group-item bg-transparent d-flex align-item-center">
              <div class="d-flex flex-column">
                <span class="text-muted">2022</span>
                <span class="fs-5 text-primary">03/09</span>
              </div>
              <p class="mb-0 ms-3 align-self-center">店長生日！輸入此優惠碼即可享七折：0309</p>
            </li>
            <li class="list-group-item bg-transparent d-flex align-item-center">
              <div class="d-flex flex-column">
                <span class="text-muted">2021</span>
                <span class="fs-5 text-primary">08/17</span>
              </div>
              <p class="mb-0 ms-3 align-self-center">店長出國比賽，暫停營業至05/20</p>
            </li>
            <li class="list-group-item bg-transparent d-flex align-item-center">
              <div class="d-flex flex-column">
                <span class="text-muted">2021</span>
                <span class="fs-5 text-primary">03/21</span>
              </div>
              <p class="mb-0 ms-3 align-self-center">狂賀，店長榮獲蔚山魔術特別獎！</p>
            </li>
            <li class="list-group-item bg-transparent d-flex align-item-center">
              <div class="d-flex flex-column">
                <span class="text-muted">2020</span>
                <span class="fs-5 text-primary">02/21</span>
              </div>
              <p class="mb-0 ms-3 align-self-center">歡慶找。牌開幕，歡迎參加開幕抽獎活動！</p>
            </li>
          </ul>
        </div>
      </div>
      <SectionOnSale />
    </div>
    <SectionBanner :info="SectionTriviaBanner" />
    <div class="container py-5">
      <h3 class="d-flex justify-content-center mb-4">
        <span class="me-2 fs-1 fw-bolder">顧客評價</span>
        <span class="fs-3 text-primary align-self-end">/ Feedback</span>
      </h3>
      <div class="row feedback" ref="feedback">
        <div class="d-none d-lg-block col-lg-4">
          <div class="border p-3 h-100 d-flex flex-column justify-content-between">
            <div class="mb-5">
              <div class="d-flex">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650443794813.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=GzA4usNx%2BEJX69RKZdUED8r9Ew%2BULj%2BqY0wNsmUyEWhgqSzyFep1MovLtwnXSeH4e%2BmeeTmU8rkuSMQUGOV0%2Bl0X3%2FBkGBhaqH3Um%2FhFIkPK%2FhkFfKruzIJA91DziLH8y6%2Fwn5ncZnyUlKwN%2FFPcWHtC7%2BHTgWORkVWZZUCmM0y5dUlb6PFrsvOwwhdnGz3flZ392aGohXy4qTxGhaagz%2BXbUPBdScbopmUNLUxuiLe6yzt6FRaMf907vGNVSCtDOoPPW3JNgNQKlDEAifG2ThNS70js9wqLwF9JeTxE3JXL3nozJkCNLM91d966jp85bCkXziS0bGu2dDcyIC0hzQ%3D%3D" alt="user" class="user rounded-circle">
                <div class="mx-3 d-flex flex-column justify-content-center">
                  <h2 class="fs-5">吳品宜</h2>
                  <small class="text-secondary">2022年3月22日 18:07</small>
                </div>
                <span class="badge rounded-pill bg-primary ms-auto align-self-start">
                  4.8
                  <span class="material-icons">grade</span>
                </span>
              </div>
              <p class="mt-3 mb-0">原本以為只買一副會很慢才處理，結果下單隔天就出貨了，完全沒有因為買少量被影響到，良心店家。</p>
            </div>
            <button type="button" class="btn p-0 align-self-end" @click="$router.push('/product/-MzUM_vUNQPUVW8OWiu-')">
              <div class="d-flex">
                <span class="ms-auto ps-2 me-2">經典單車牌(紅)</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1653953113763.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=JrvLZGT2Pp%2B%2Fad2h6V78GK5ja8yan1k7mYI%2BJmPOItuVqEw59tzL3nfHNz9ou%2BpCWaVQdBcz8guJKjU5LQGygcJP4UvPcTBdkrmvW4arM6G1TMxTK8KIOXLLUn%2BfNP0EIwsK%2BUQd6mF3mk%2FN2Rsy1tlP14NAndBZA2LJYgPaekQFWMULFA8tKzzI8Ucvkls%2FdVIPNlyqOl1Y8COMeIC6DcnrlBYxoekTKPW2yKMP2C1QTEX1sKYw64ABkqYxRj91bYvoDpEGVnbzMSy0ZboxUk1qThMfPt%2BECqJQwOHMGvRnDNYoeRxW1yh4SZG40oRvYJ9GZ5AcfH8twSgOseWCxg%3D%3D" alt="經典單車牌(紅)">
              </div>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-3 mb-md-0">
          <div class="border p-3 h-100 d-flex flex-column justify-content-between">
            <div class="mb-5">
              <div class="d-flex">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650443960110.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=LYQU3vHzX34aVcydGeJOsPNtGzKXvZLFiz5Hd9n%2FnI8HFEhuD9aFcPsBnJOdSL9aALXv3MikoJQlO1qh72cajkT3jv%2BuSHFZNFcOZK4vLaGh4Eb%2FBs4df606WnrFTRagyOtULwL9Ps56u3NgOV2Ys%2BKHBBPzbfGYNruzfiveHOK%2FJApl16kHz9TknEjSMLRVsLgrH1IK8wSc5sU2u%2BXNjZCVbhoCKTbsSA%2FPEFbvc7KegyeUgBGin0XYGirjnzYMrm5TLwzrTZSCRADT3JqxeJoIHOad7f2N6ooWs5NrcmO6OLK6ByB9rJrWR3Pi4YSet5Rz%2Bva9Iahe68MJBcLh1g%3D%3D" alt="user" class="user rounded-circle">
                <div class="mx-3 d-flex flex-column justify-content-center">
                  <h2 class="fs-5">鄭伊如</h2>
                  <small class="text-secondary">2022年1月27日 15:43</small>
                </div>
                <span class="badge rounded-pill bg-primary ms-auto align-self-start">
                  5.0
                  <span class="material-icons">grade</span>
                </span>
              </div>
              <p class="mt-3 mb-0">金屬牌盒質感相當好，每張牌都經過特別的設計，且紙質和噴墨品質都很完美，不愧為主打商品。</p>
            </div>
            <button type="button" class="btn p-0 align-self-end" @click="$router.push('/product/-N-HfxO4rb_sLZJ3Eg5o')">
              <div class="d-flex">
                <span class="ms-auto ps-2 me-2">加拿大國家公園紀念牌</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1653952994193.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=DKMJTurj2%2BhAMoRGHxE3ZTawNttEpN3esdNR0gTTgA2QuBpuiJ%2FnWMoNHso0UjfG67wWZBURIdj7YWZVaGSCNRo%2FH74uL9ukivAwOcXciSvJx%2BUKzxm1NCkAZN6BaADDSO3lBMHYaNi%2FKHu24ag0e8e4datUYCWnUCr6BGSHcKAsbk5Gd2KBLHD2URtcXDeszpGBpxc46orU6qVL86Ld0ajIV9x4J2wILV%2Fzp3tyITqZWKf97n5mYWwD03ZDmu76DuyDbs4c%2Fd2NdBJq%2FzqHTwo4LRWPlY5YjlHeRgpE9AHVP1NzE8YVZRxtkMMOBPZay%2Bnpu%2FEUSQfy8vgNArpsBg%3D%3D" alt="加拿大國家公園紀念牌">
              </div>
            </button>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="border p-3 h-100 d-flex flex-column justify-content-between">
            <div class="mb-5">
              <div class="d-flex">
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650443883897.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Y%2FMnkiG9xbzkISd4XEEygtgZzqFt2YF3qp2iI1VE9SUs3vlQZmMiDoS4HTyyw8k8bRSIuPnFGtV%2FXEaWtaPEMfYNf%2BWX%2FesnQ0h2yumchGuCToZSJH7sa8hc%2BO%2FZj7toThMOIJb1XqLKBoqzhHZD9kN2qobsQRr%2BkSwRBHeEXmafuAEr1To5gmvF0mpD7fCYR9qKfo7DolbyUuDmx8QKcqMfc0YQAwzvNA0LtNIJ2Wl7DYRe91PDm2YoEWoOQaAH15tOq8tDoA6%2FQYui6v4i235L%2F6X87xP4Btzn9WieunrMWgXH43g02r3LsgkUqQ5PUx9snFRovW6mvsM8z7kV5Q%3D%3D" alt="user" class="user rounded-circle">
                <div class="mx-3 d-flex flex-column justify-content-center">
                  <h2 class="fs-5">林思穎</h2>
                  <small class="text-secondary">2022年2月18日 11:32</small>
                </div>
                <span class="badge rounded-pill bg-primary ms-auto align-self-start">
                  4.9
                  <span class="material-icons">grade</span>
                </span>
              </div>
              <p class="mt-3 mb-0">2019年度卡牌大會的紀念產品居然還找得到，光是這點就足以給好評，簡直是神店！</p>
            </div>
            <button type="button" class="btn p-0 align-self-end" @click="$router.push('/product/-N-HexEVmkB61Cs9WAf8')">
              <div class="d-flex">
                <span class="ms-auto ps-2 me-2">Cardistry-Con 2019</span>
                <img src="https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1653952654128.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=jn6wmPv4Vfzu2lIAcwSn3KcyYyvaIsapOiH9eF1V2ftVz%2Bhg%2F8G9QfLdVJfBws50olgUNdyrquBT49ZkCSadL5gucvJxXqhB1sVfT%2B6BdtLJblptMebiRQCYbdNik%2B4AqF8Mr6HA4voIYJP4GqEPlUK56B8bTzIAK8yg4ZqOYsAtI3D9uQecMOlyFWrsy1f%2Bn0o51ymXdsWJgyXeCOUfVMXhGrmxj2esuBeM4LBGugRV1sGaPvnrgy%2F9TGCCnpSbqxHFo7%2Fs1HexykyLsIvoXqeE5biaUgExtFMZkmg8LlrgQugSyOu5qqdPozZI1L4rCiiL7YTZGCf7OvCNjZlwog%3D%3D" alt="Cardistry-Con 2019">
              </div>
            </button>
          </div>
        </div>
      </div>
      <h3 class="d-flex justify-content-center mt-5 mb-4">
        <span class="me-2 fs-1 fw-bolder">常見問題</span>
        <span class="fs-3 text-primary align-self-end">/ FAQ</span>
      </h3>
      <div class="row faq">
        <div class="col-lg-7 col-xl-6 mx-auto">
          <ul class="accordion list-unstyled" id="accordionFAQ">
            <li class="accordion-item">
              <h4 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <span class="text-center lh-lg fw-bold me-3">Q1</span>
                  運送及付款方式有哪些呢？
                </button>
              </h4>
              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                <div class="accordion-body bg-white">
                  <p class="p-3 mb-0 ms-4">可以選擇超商取貨及宅配，付款方式有銀行轉帳及信用卡支付。</p>
                </div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  <span class="text-center lh-lg fw-bold me-3">Q2</span>
                  退貨方式及規則
                </button>
              </h4>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                <div class="accordion-body bg-white">
                  <p class="p-3 mb-0 ms-4">因商品封條為一次性包裝，商品退貨時必須回復至您收到商品時的原始狀態，請您務必確認後再行拆封，感謝您的配合。</p>
                </div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                  <span class="text-center lh-lg fw-bold me-3">Q3</span>
                  有辦法單獨購買某張卡嗎？
                </button>
              </h4>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                <div class="accordion-body bg-white">
                  <p class="p-3 mb-0 ms-4">因為本店進牌都是以副來算，最小購買單位是一副，因此無法單獨購買一張牌，感謝您的配合。</p>
                </div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                  <span class="text-center lh-lg fw-bold me-3">Q4</span>
                  產品有損，可以換貨嗎？
                </button>
              </h4>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                <div class="accordion-body bg-white">
                  <p class="p-3 mb-0 ms-4">如果當場發現產品有損，將立刻幫您換新，並附上本店折價券。</p>
                </div>
              </div>
            </li>
            <li class="accordion-item">
              <h4 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                  <span class="text-center lh-lg fw-bold me-3">Q5</span>
                  請問有賣其他魔術道具嗎？
                </button>
              </h4>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                <div class="accordion-body bg-white">
                  <p class="p-3 mb-0 ms-4">本店「找。牌」為專門販賣撲克牌的牌店，因此只有販售牌類產品。</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter'
import Carousel from 'bootstrap/js/dist/carousel'
import SectionOnSale from '@/components/SectionOnSale'
import SectionBanner from '@/components/SectionBanner'
import Footer from '@/components/Footer'
export default {
  data () {
    return {
      carousel: {},
      isloading: false,
      buyNowLoading: false,
      SectionCouponBanner: {
        bgImg: 'url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650381522049.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=D32yCABvgJflufQeWm08X4iYr7HyUnA10nJAT1gJ7w7kVmPMFsizdyloy3RZQezUSXikrngiIIeGfalSz01f1bDyYH8GwhrVuLE%2Ba8E4xtZmfJ9MZUuVs9nujeeRqHn0FNBjU6WErkbIF52MW6Z3YcjyXG2wz0TEC7SH%2FssRuxi%2FAspMfVI%2BB2lPhhxdlrZ0HlDztO1X3Q78iAbKmW5%2FV68hzUSucyQuiJVtBoZpoBwsXxirTp0oYBzRuY3A40dg9ixO%2B4zJJd3A2%2FMjoz7L2nQiWH9MjEMoWWJ2rEWe%2BYySWTN6m2udHqMPMx91X%2BNN8wO9wTC%2Bhg8VeDTWn0ifQQ%3D%3D)',
        attachment: true,
        title: '周年慶優惠券',
        titleEn: 'Coupon',
        text: '尚未領取周年慶優惠大獎嗎？快來翻出你的專屬優惠券',
        btnText: '手刀領取',
        btnPath: '/coupon'
      },
      SectionTriviaBanner: {
        bgImg: 'url(https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650444820513.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=bH91qiBlELvko2ff5FaMMA4xh%2BjVWxjdyh8UZvb2vDttAzlHj8OatXNicPefiNpwQCEWLuqkICdZRf10taPBCnxGT6J%2F573ntuoxcthyKS9R5tN0c9VJMkJNrDIBKF68ej3nF3hx6y8D92%2FWF9b7I6UyJaw1ZyyfJMKwIPoo7w7exwi5NHS01uw9e0TuALCCV%2B%2BGaUmU84C5t4ejN8xnTQwgj5RMkt7xDVdfySH8ZD8MBOD6HfUAgfijtI9TdDHoVFhCS%2BIM2x5VBvb3%2BJ9Xw%2Bm8kJXuynmTFaP4RzUxl5j%2BugpZGllD%2BLaQVX%2BIHXHU2RLR7S%2BL0YOle%2FFfEmTheg%3D%3D)',
        title: '撲克冷知識',
        titleEn: 'Trivia',
        text: '你知道嗎？將撲克牌四種花色重疊在一起的話，就會跑出星星喔',
        btnText: '了解更多',
        btnPath: '/trivia'
      },
      height: 0
    }
  },
  components: {
    SectionOnSale,
    SectionBanner,
    Footer
  },
  watch: {
    height () {
      if (this.height >= 200) {
        this.$refs.about.classList.add('animation')
      }
      if (this.height >= 1900 && document.body.clientWidth >= 768) {
        this.$refs.news.classList.add('animation')
      } else if (this.height >= 1500 && document.body.clientWidth < 768) {
        this.$refs.news.classList.add('animation')
      }
      if (this.height >= 3150) {
        this.$refs.feedback.classList.add('animation')
      }
    }
  },
  methods: {
    scroll () {
      this.height = document.body.scrollTop || document.documentElement.scrollTop
    },
    addCart (id) {
      this.isloading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: { product_id: id, qty: 1 } }).then(() => {
        this.$swal('商品已加入購物車')
        emitter.emit('update-cart')
        this.isloading = false
      })
    },
    buyNow (id) {
      this.buyNowLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: { product_id: id, qty: 1 } }).then(() => {
        this.$swal('商品已加入購物車')
        this.buyNowLoading = false
        this.$router.push('/cart')
      })
    }
  },
  mounted () {
    this.carousel = new Carousel(this.$refs.carousel)
    document.addEventListener('scroll', this.scroll)
  },
  unmounted () {
    document.removeEventListener('scroll', this.scroll)
  }
}
</script>

<style lang="scss" scoped>
//hero banner開始
.heroBanner{
  height: calc(100vh - 56px);
  margin-top: 56px;
  .img-fit{
    object-fit: cover;
  }
  .slogan{
    background-color: #587778;
    top:0;
    @media (max-width: 992px) {
      background-color: transparent;
      z-index: 2;
      background-color: rgba(0, 0, 0, .6);
      border: 5px double rgba(254, 254, 254, .6);
    }
    p{
      width: 18em;
      white-space: nowrap;
      overflow: hidden;
      animation: typing 2s steps(18),Wcaret 2s steps(1);
      @media (max-width: 424px) {
        font-size: 16px !important;
      }
    }
  }
  .btn{
    transition: .8s;
    color: #FFFFFF;
    &:hover,
    &:focus {
      box-shadow: inset 0 0 0 2em #FFFFFF;
      color: #587778;
    }
    @media (max-width: 992px) {
      background-color: #587778;
      color: #FFFFFF;
    }
  }
  .userScroll{
    position: absolute;
    width: 100%;
    height: 40px;
    bottom: 30px;
    z-index: 4;
    animation: slideDown 1s infinite;
  }
}
@keyframes typing {
  0% { width: 0 }
}
@keyframes Wcaret {
  0% { border-right: .05em solid #ffffff; }
  33% { border-right: .05em solid transparent; }
  67% { border-right: .05em solid #ffffff; }
  100% { border-right: .05em solid transparent; }
}
@keyframes slideDown {
  0% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }
  100% {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
}
//hero banner結束

//關於我們開始
.about{
  img{
    width: 90%;
    box-shadow: 20px 20px #587778;
    transform: translateY(-20px);
    opacity: 0;
    transition: 1.5s .5s ease-out;
  }
  .slogan{
    p{
      width: 18em;
      white-space: nowrap;
      overflow: hidden;
      color: transparent;
    }
  }
  &.animation{
    .slogan p{
      color: rgb(33, 37, 41);
      animation: typing 2s steps(18),caret 2s steps(1);
    }
    img{
      transform: translateY(0);
      box-shadow: 20px 20px #587778;
      opacity: 1;
    }
  }
}
@keyframes caret {
  0% { border-right: .05em solid #212529; }
  33% { border-right: .05em solid transparent; }
  67% { border-right: .05em solid #212529; }
  100% { border-right: .05em solid transparent; }
}
.text-indent{
  text-indent: 2em;
}
//關於我們結束

//熱銷商品開始
.hotSale .btn{
  transition: .8s;
  border-width: 2px;
  &:hover,
  &:focus {
    color: #ffffff;
    box-shadow: inset 0 0 0 2em #587778;
  }
}
.carousel{
  .carousel-item{
    background-size: cover;
    background-position: center;
    min-height: 500px;
    &:nth-child(1){
      background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650378716872.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=iOuSIpIIApDH0DXXJO6JdpXE%2FrJKRBGViegnyoFIzItgtZHgOl%2F5kaudwEDM1DXxE6ukd57Ja%2FPHiXY26Pm6E43I%2F4xkht0e%2FEvngRYuHeefr%2BlIu229bVRYM9jVaV5kEwT%2BQF8BO0aEacEy9l%2B7jfAUragRiFCe1K330mIJxH29pNiro9L33MdOArgye5%2FdfxT%2FF4rXtv5mKB9%2ByyL3yZfWtLAUIBQ3kBA%2FLy3BzsEp7SuFl5sm32V7fdLa7%2FV6lEgGBzy4SD%2B1mlspnA81EoB8XUHoenCK9AHjsYJKxPTz5vl1SXcJzmxyOZ3VQZKDIxlB1JyPmxQ7nBfcJhMqsA%3D%3D");
    }
    &:nth-child(2){
      background-image: url("https://storage.googleapis.com/vue-course-api.appspot.com/vuefindcard/1650378700094.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=J9WF4rrceCjVUNak75ujxbEQH%2BQgwluULU502qTrRstd8XzaPSV%2FIdwthrgibdWJdD8wQAzw%2FiBHOzSv2aKjl0OfkPD6EzatbnX8%2F%2FCd0%2F%2FsB0QwA1r1zrkI5wnnXBdwDktwryuqDh0My33Kh29%2F%2BfH0Dju2KV2JdSGklmxqQsA6lX939BcSsB49t5JwHSTq9FbB3path0RdbjaT9Dtf81gYrh8wMj%2B5P4dN%2F3nIudm%2B0Nhi6rQxKB7DpcYFrb5krEJ9ESIDgMu0vbOGmabL%2BmCL85rhFOyzt1hb75%2B4wTNVF3Kf1gI8LExZVsz1D6zmypY9xgxW5INt%2F6xYgWpGGA%3D%3D");
    }
    @media (max-width:992px) {
      min-height: 400px;
    }
    @media (max-width:767px) {
      min-height: 300px;
    }
    @media (max-width:576px) {
      min-height: 250px;
    }
  }
  .carousel-indicators{
    bottom: 0;
  }
  .carousel-indicators [data-bs-target]{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #587778;
  }
}
//熱銷商品結束

//最新消息開始
.news{
  img{
    height: 400px;
    width: 100%;
    object-fit: cover;
  }
  &.animation .list-group-item{
    animation: flipX 1.2s;
  }
}
@keyframes flipX {
  0%{
    transform: perspective(600px) rotateX(-180deg);
    opacity: 0;
  }
  100%{
    transform: perspective(600px) rotateX(-360deg);
  }
}
//最新消息結束

//顧客回饋開始
.feedback{
  img{
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
  .user{
    width: 50px;
    height: 50px;
  }
  .btn:hover{
    background-color: #587778;
    color: #ffffff;
  }
  .btn span{
    line-height: 30px;
  }
  .material-icons{
    font-size: 12px;
    vertical-align: bottom;
  }
  &.animation > div{
    animation: rotateXIn 1.2s ease-out;
  }
}
@keyframes rotateXIn {
  0%{
    transform: perspective(600px) translate3d(0, -60px, -2000px) rotateX(75deg);
    opacity: 0;
  }
  5%{
    transform: perspective(600px) translate3d(0, -60px, -1500px) rotateX(75deg)
  }
}
//顧客回饋結束

//常見問題開始
.faq{
  .accordion-button{
    background-color: #ffffff;
    color: #212529;
  }
}
//常見問題結束
</style>
