<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    ...mapActions(['addToCart', 'changeQuantityProd']),
    onAddProduct() {
      const isAlreadyAdded = this.cartList.some(el => el.id === this.product.id)
      if (!isAlreadyAdded) {
        let currentProduct = {
          ...this.product,
          quantity: 1
        }
        this.addToCart(currentProduct);
        alert('Товар доданий в кошик!')
      } else {
          this.changeQuantityProd({id: this.product.id, quantity: 1})
      }
    }
  }
}
</script>

<template>
  <div class="column">
    <div class="card">
      <div class="image"><img :src="product.img"
                              :alt="product.name"></div>
      <div class="content">
        <h3 class="title">{{ product.name }}</h3>
        <div class="bottom">
          <p class="price">${{ product.price }}</p>
          <button @click='onAddProduct' class="btn">
            Придбати
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 20px;
  border-radius: 10px;
  color: darkslategray;
  cursor: pointer;
}

.image img {
  max-width: 100%;
}
</style>