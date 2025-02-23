<template>
  <nav class="navbar">
    <ul class="list">
      <li>
        <router-link :to="{
        name: 'main'
      }">Головна
        </router-link>
      </li>
      <li>
        <router-link :to="{
        name: 'shop'
      }">Магазин
        </router-link>
      </li>
      <li>
        <router-link :to="{
        name: 'payments'
      }">Правила оплати
        </router-link>
      </li>
      <li>
        <router-link :to="{
        name: 'contacts'
      }">Контакти
        </router-link>
      </li>
      <li>
        <router-link :to="{
        name: 'cart'
      }">Кошик
        </router-link>
      </li>
    </ul>
  </nav>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
.list {
  display: flex;
  gap: 40px;

}
</style>
