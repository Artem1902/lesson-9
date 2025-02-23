import {createStore} from "vuex";
import {categoriesList} from "@/constants/CategoriesList";
import {
    phoneProductsData,
    macProductsData,
    watchProductsData,
    ipadProductsData
} from '@/constants/productsListData'

export default createStore({
    state: {
        categoriesList: [],
        phonesList: [],
        laptopsList: [],
        watchesList: [],
        ipadsList: [],
        cartList: []
    },
    getters: {
        categoriesList: ({categoriesList}) => categoriesList,
        phonesList: ({phonesList}) => phonesList,
        laptopsList: ({laptopsList}) => laptopsList,
        watchesList: ({watchesList}) => watchesList,
        ipadsList: ({ipadsList}) => ipadsList,
        cartList: ({cartList}) => cartList,
    },
    mutations: {
        setCategoriesList(state, categoriesList) {
            state.categoriesList = categoriesList;
        },
        setPhonesList(state, phonesList) {
            state.phonesList = phonesList;
        },
        setWatchesList(state, watchesList) {
            state.watchesList = watchesList;
        },
        setIpadsList(state, ipadsList) {
            state.ipadsList = ipadsList;
        },
        setLaptopsList(state, laptopsList) {
            state.laptopsList = laptopsList;
        },
        setToCart(state, product) {
            state.cartList.push(product);
        },
        changeQuantityProd(state, {id, quantity}) {
            let foundedProd = state.cartList.find(item => item.id === id);
            if (foundedProd && foundedProd.quantity + quantity > 0) {
                foundedProd.quantity += quantity;
            }
        },
        deleteFromCart(state, payload) {
            state.cartList = state.cartList.filter(item => item.id !== payload);
        },
        deleteAllProductsFromCart(state) {
            state.cartList = []
        }
    },
    actions: {
        loadCategories({commit}) {
            commit('setCategoriesList', categoriesList);
        },
        loadPhonesList({commit}) {
            commit('setPhonesList', phoneProductsData)
        },
        loadWatchesList({commit}) {
            commit('setWatchesList', watchProductsData)
        },
        loadIpadsList({commit}) {
            commit('setIpadsList', ipadProductsData)
        },
        loadLaptopsList({commit}) {
            commit('setLaptopsList', macProductsData)
        },
        addToCart({commit}, product) {
            commit('setToCart', product)
        },
        changeQuantityProd({commit}, payload) {
            console.log(payload);
            commit('changeQuantityProd', payload)
        },
        deleteFromCart({commit}, payload) {
            commit('deleteFromCart', payload)
        },
        deleteAllProductsFromCart({commit}) {
            commit('deleteAllProductsFromCart')
        }
    },
})