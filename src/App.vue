<template>
    <Header />
    <main class="content">
      <router-view />
    </main>
    <Footer />
    <SuccessAddedChildren/>
</template>

<script>
import './assets/css/App.css'
import SuccessAddedChildren from './components/Modals/SuccessAddedChildren.vue';
import Header from './Header.vue';
import Footer from './Footer.vue';
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SuccessAddedChildren
  }
}
</script>

<style></style>
