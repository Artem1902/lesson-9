<script>
import {mapActions, mapGetters} from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ProductsList",
  components: {ProductCard},
  computed: {
    ...mapGetters(['phonesList', 'ipadsList', 'watchesList', "laptopsList"]),
    categoryValue() {
      return this.$route.params.category;
    },
    currentCategoryProductList() {
      let currentProductList = null;
      switch (this.categoryValue) {
        case 'phones':
          currentProductList = this.phonesList;
          break;
        case 'laptops':
          currentProductList = this.laptopsList;
          break;
        case 'watches':
          currentProductList = this.watchesList;
          break;
        case 'ipads':
          currentProductList = this.ipadsList;
          break;
        default:
          console.log('Unknown category: ' + this.categoryValue);
      }
      return currentProductList;
    }
  },
  methods: {
    ...mapActions(['loadPhonesList', 'loadIpadsList', 'loadWatchesList', "loadLaptopsList"])
  },
  mounted() {
    switch (this.categoryValue) {
      case 'phones':
        this.loadPhonesList();
        break;
      case 'laptops':
        this.loadLaptopsList();
        break;
      case 'watches':
        this.loadWatchesList();
        break;
      case 'ipads':
        this.loadIpadsList();
        break;
      default:
        console.log('Unknown category: ' + this.categoryValue);
    }
  }
}
</script>

<template>
  <div>
    <div class="body">
      <product-card
          v-for="product in currentCategoryProductList"
          :key='product.id'
          :product='product'></product-card>
    </div>
  </div>
  <div>
    <router-link :to="{name: 'main'}">На головну
    </router-link>
  </div>
</template>

<style scoped>
.body {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-bottom: 20px;
}

</style>