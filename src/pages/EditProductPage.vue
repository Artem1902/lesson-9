<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "EditProductPage",
  data() {
    return {
      productData: {
        img: null,
        name: null,
        price: null,
      }
    }
  },
  computed: {
    ...mapGetters(['phonesList', 'ipadsList', "watchesList", "laptopsList"]),
    selectedCategory() {
      return this.$route.params.category
    },
    productId() {
      return this.$route.params.id
    },
    currentCategoryProductList() {
      let currentProductList = null;
      switch (this.selectedCategory) {
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
    },
    findProduct() {
      return this.currentCategoryProductList.find(el => el.id == this.productId)
    },
    saveButtonTitle() {
      return this.findProduct ? 'Змінити' : 'Створити'
    }
  },
  methods: {
    ...mapActions(['updateProduct', 'createNewProduct']),
    onSave() {
      if (this.findProduct) {
        this.updateProduct({
          productData: this.productData,
          category: this.selectedCategory
        });
      } else {
        this.createNewProduct({
          productData: {
            ...this.productData,
            id: new Date().getTime()
          },
          category: this.selectedCategory
        })
      }
      this.$router.push({
        name: 'category',
        params: {category: this.selectedCategory}
      })
    },
    onCancel() {
      this.$router.push({
        name: 'category',
        params: {category: this.selectedCategory}
      })
    }
  },
  created() {
    if (this.findProduct) this.productData = {...this.findProduct};
  }
}
</script>

<template>
  <h1>Інформація стосовно товару</h1>
  <div class="content">
    <label>
      Назва
      <input type="text" v-model="productData.name"/>
    </label>
    <label>
      Зображення
      <input type="text" v-model="productData.img"/>
    </label>
    <label>
      Ціна
      <input type="number" v-model="productData.price"/>
    </label>
  </div>
  <div class="btns">
    <button @click='onSave' class="btn">{{ saveButtonTitle }}</button>
    <button @click='onCancel' class="btn">Відміна</button>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}
.btns{
  display: flex;
  align-items: center;
  gap: 5px;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px 10px;
  border-radius: 10px;
  color: darkslategray;
  cursor: pointer;
}
</style>