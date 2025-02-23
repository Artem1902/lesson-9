<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ShopPage",
  computed: {
    ...mapGetters(['categoriesList'])
  },
  methods: {
    ...mapActions(['loadCategories'])
  },
  created() {
    this.loadCategories();
  }
}
</script>

<template>
  <h1>Список товарів:</h1>
  <ul>
    <li v-for="category in categoriesList"
        :key='category.id'>
      <router-link :to="{
        name: 'category',
        params: {category: category.value}
      }">
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>

</style>