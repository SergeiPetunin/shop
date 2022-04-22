<template>
  <div class="main-wrapper">
    <h1>Web-shop</h1>
    <h3>Catalog</h3>
    <Catalog />
    <Cart 
    v-if="CART.length"
    :cart_data="CART"
    />

    
  </div>
</template>

<script>
import Catalog from './main-catalog.vue'
import Cart from './main-cart.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'MainWrapper',
  components: {
    Catalog,Cart
  },
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {
    ...mapGetters([
      'CART'
      ])
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  /*border: 4px solid red;*/
  max-width: 900px;
  height: auto;
  margin: 0 auto;
}
</style>
