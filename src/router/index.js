import {createWebHistory, createRouter} from 'vue-router'
import MainPage from "@/pages/MainPage.vue";
import ShopPage from "@/pages/ShopPage.vue";
import PaymentsPage from "@/pages/PaymentsPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import ProductsList from "@/pages/ProductsList.vue";
import CartPage from "@/pages/CartPage.vue";


const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShopPage
    },
    {
        path: '/shop/:category',
        name: 'category',
        component: ProductsList
    },
    {
        path: '/payments',
        name: 'payments',
        component: PaymentsPage
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: ContactsPage
    },
    {
        path: '/cart',
        name: 'cart',
        component: CartPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router