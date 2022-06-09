<template>
  <Navbar />
  <div class="position-relative">
    <RouterView />
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import Navbar from '@/components/UserNavbar'
export default {
  data () {
    return {
      status: 'index'
    }
  },
  components: {
    Navbar
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
