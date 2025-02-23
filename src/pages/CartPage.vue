<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartPage",
  computed: {
    ...mapGetters(['cartList']),
    totalCount() {
      return this.cartList.reduce((acc, item) => item.price * item.quantity + acc, 0)
    },
    isCartEmpty() {
      return this.cartList.length === 0;
    }
  },
  methods: {
    ...mapActions(['changeQuantityProd', 'deleteFromCart', 'deleteAllProductsFromCart']),
    onChangeQuantityProd(prodId, quantity) {
      let payload = {
        id: prodId,
        quantity: quantity
      }
      this.changeQuantityProd(payload)
    },
    onDeleteProduct(id) {
      this.deleteFromCart(id)
    },
    completeOffer() {
      alert('Замовлення оформлене!')
      this.$router.push({name: 'main'})
      this.deleteAllProductsFromCart()
    }
  }
}
</script>

<template>
  <h1>Кошик</h1>
  <div v-if="!isCartEmpty" class="cart">
    <div v-for="product in cartList" :key='product.id'
         class="product">
      <div class="top">
        <div class="image">
          <img :src="product.img" :alt="product.name"/>
        </div>
        <div class="name">{{ product.name }}</div>
        <button @click='onDeleteProduct(product.id)'
                class="btn">Видалити
        </button>
      </div>
      <div class="middle">
        <div class="qnty">
          <button
              @click='onChangeQuantityProd(product.id, -1)'
              class="btn">-
          </button>
          {{ product.quantity }}
          <button
              @click='onChangeQuantityProd(product.id, 1)'
              class="btn">+
          </button>
        </div>
        <div>$ {{ product.price }}</div>
      </div>
    </div>
    <div class="bottom">
      <h2>Разом</h2>
      <div class="total">$ {{ totalCount }}</div>
    </div>
    <button @click='completeOffer' class="btn bottom-btn">
      Оформити замовлення
    </button>
  </div>
  <div v-else>
    Кошик порожній ...
  </div>
</template>

<style scoped>
.cart {
  padding: 10px;
}

.product {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.product:not(:last-child) {
  margin-bottom: 20px;
}

.top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.image {
  flex: 0 1 25%;
}

.name {
  flex: 1 1 auto;
}

.btn {
  align-self: center;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
}

.image img {
  max-width: 100%;
}

.middle {
  display: flex;
  justify-content: space-between;
}

.qnty {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 10px;
}

.bottom {
  display: flex;
  justify-content: space-between;
}

.bottom-btn {
  margin: 0 auto;
}

.total {
  color: brown;
  font-size: 30px;
  font-weight: 700;
}
</style>