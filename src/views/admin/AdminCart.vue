<template>
  <Loading :active="isLoading" />
  <div class="row mt-4">
    <div class="col-xl-6">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th class="ms-2">商品名稱</th>
              <th class="text-center">價格</th>
              <th class="text-center">功能</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 160px">
                <img :src="item.imageUrl" :alt="item.title" width="160" height="100" class="img-fit">
              </td>
              <td>
                {{ item.title }}
              </td>
              <td class="fs-5 text-end">
                {{ item.price }}元
              </td>
              <td class="text-center">
                <button type="button" class="btn btn-primary fw-bold text-white" :disabled="status.loadingItem === item.id" @click.prevent="addCart(item.id)">
                  <div class="spinner-border text-white spinner-border-sm" role="status" v-if="status.loadingItem === item.id">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-xl-6">
      <div class="table-responsive">
        <table class="table align-middle">
          <thead>
            <tr>
              <th style="width: 70px"></th>
              <th>品名</th>
              <th style="width: 150px">數量 / 單位</th>
              <th class="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart.carts">
            <tr v-for="item in cart.carts" :key="item">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm p-2 d-flex align-items-center" @click="delCartProduct(item.id)">
                  <span class="material-icons">delete</span>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div class="text-success" v-if="item.coupon">
                  已套用優惠券
                </div>
              </td>
              <td class="d-flex align-items-center">
                <input type="number" class="form-control" min="1" :disabled="status.loadingItem === item.id" v-model.number="item.qty" @blur.prevent="updateCartProduct(item)">
                / {{ item.product.unit }}
              </td>
              <td class="text-end">
                <small v-if="!item.coupon">單價：</small>
                <small class="text-success" v-else>折扣價：</small>
                {{ parseInt(item.final_total) }}
              </td>
            </tr>
            </template>
            <template v-else>
              <tr>
                <td class="text-center py-3" colspan="4">購物車空空如也</td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr v-if="cart.total === cart.final_total">
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ cart.total }}</td>
            </tr>
            <tr v-else>
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ parseInt(cart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="d-flex flex-column flex-md-row">
        <div class="input-group mt-2 mb-3 mt-md-0 mb-md-0">
          <button class="btn btn-outline-danger fw-bold" type="button" @click="delAllCartProducts">
            清空購物車
          </button>
        </div>
        <div class="input-group ms-auto">
          <input type="text" class="form-control" placeholder="請輸入優惠碼" v-model="coupon">
          <button class="btn btn-primary fw-bold text-white" type="button" @click.prevent="useCoupon">套用優惠碼</button>
        </div>
      </div>
    </div>
  </div>
  <div class="my-5 row justify-content-center">
    <template v-if="step === 1">
      <VForm class="col-lg-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <VField id="email" name="email" type="email" class="form-control" :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></VField>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <VField id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" rules="required" v-model="form.user.name"></VField>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <VField id="tel" name="電話" type="tel" class="form-control" :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話" rules="required" v-model="form.user.tel"></VField>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <VField id="address" name="地址" type="text" class="form-control" :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址" rules="required" v-model="form.user.address"></VField>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-primary btn-lg fw-bold text-white" @submit="createOrder">送出訂單</button>
        </div>
      </VForm>
    </template>
    <template v-else-if="step === 2">
      <form class="col-lg-6">
        <table class="table align-middle">
          <thead>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }} / {{ item.product.unit }}</td>
              <td class="text-end">{{ item.total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end">總計</td>
              <td class="text-end">{{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <table class="table">
          <tbody>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="order.is_paid" class="text-success">付款完成</span>
                <span v-else class="text-muted">尚未付款</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex mt-4">
          <button class="btn btn-primary btn-lg fw-bold text-white" type="button" @click="step = 1">重新購物</button>
          <button class="btn btn-primary btn-lg fw-bold text-white ms-auto" type="button" @click="payOrder">確認付款去</button>
        </div>
      </form>
    </template>
    <template v-else>
      <div class="col-md-10 col-xl-8">
        <div class="bg-white d-flex flex-column text-center p-5">
          <span class="material-icons display-2 text-primary mb-3">check_circle</span>
          <p class="fs-2 fw-bold mb-5">付款成功</p>
          <p class="mb-0">感謝您的訂購</p>
          <p class="mb-0">商品預計於三個工作天內寄送（不含週休及國定例假日）</p>
          <p class="mb-3">再請留意簡訊通知及配送人員的電話 </p>
          <button class="btn btn-primary btn-lg align-self-center fw-bold text-white" type="button" @click="step = 1">重新購物</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      cart: {},
      status: {
        loadingItem: ''
      },
      coupon: '',
      step: 1,
      form: {
        user: {
          name: 'test',
          email: 'test@gmail.com',
          tel: '0912346768',
          address: 'kaohsiung'
        },
        message: '這是留言'
      },
      orderId: '',
      order: '',
      isLoading: false
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=1`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.products = res.data.products
          this.products.splice(4, 5)
        }
      })
    },
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(api).then((res) => {
        if (res.data.success) {
          this.cart = res.data.data
        }
        this.isLoading = false
      })
    },
    addCart (id) {
      this.status.loadingItem = id
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(api, { data: { product_id: id, qty: 1 } }).then((res) => {
        this.getCart()
        this.$httpMessageState(res, '加入購物車')
        this.status.loadingItem = ''
      })
    },
    delCartProduct (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(api).then((res) => {
        this.getCart()
        this.$httpMessageState(res, '刪除商品')
      })
    },
    delAllCartProducts () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(api).then((res) => {
        this.getCart()
        this.$httpMessageState(res, '刪除商品')
      })
    },
    updateCartProduct (item) {
      this.isLoading = true
      this.status.loadingItem = item.id
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.$http.put(api, { data: { product_id: item.id, qty: item.qty } }).then((res) => {
        this.getCart()
        this.$httpMessageState(res, '編輯訂單')
        this.status.loadingItem = ''
      })
    },
    useCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`
      this.$http.post(api, { data: { code: this.coupon } }).then((res) => {
        this.getCart()
        this.$httpMessageState(res, '使用優惠券')
        this.coupon = ''
        this.isLoading = false
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then((res) => {
          this.cart = {}
          this.orderId = res.data.orderId
          this.getOrder(this.orderId)
          this.step = 2
        })
    },
    getOrder (id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${id}`
      this.$http.get(api)
        .then((res) => {
          this.order = res.data.order
        })
    },
    payOrder () {
      const id = this.orderId
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${id}`
      this.$http.post(api)
        .then(() => {
          this.step = 3
          this.getOrder(id)
        })
    }
  },
  created () {
    this.getProducts()
    this.getCart()
  }
}
</script>

<style lang="scss" scoped>
.img-fit{
  object-fit: cover;
}
th,td{
  white-space: nowrap;
}
.btn:hover,.btn:active{
  color: #FFFFFF;
}
</style>
