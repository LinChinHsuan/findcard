<template>
    <Navbar></Navbar>
    <div class="container position-relative">
        <ToastMessages></ToastMessages>
        <router-view />    
    </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/AdminNavbar';
export default {
    components:{
        Navbar,
        ToastMessages
    },
    provide() {
        return {
            emitter
        }
    },
    created() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)findcardCookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
        this.$http.defaults.headers.common['Authorization'] = token;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api).then((res) => {
            if(!res.data.success){
                this.$router.push("/login");
            }
        });
    },
}
</script>