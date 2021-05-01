import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'nativescript-plugin-firebase'
Vue.use(Vuex)

firebase.init({
    url: "https://test-project-3af11.firebaseio.com"
}).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})

const doctorService = {
    fetch() {

    }
}

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {
        fetchDoctors() {
            const a = firebase.firestore().collection("doctors");
            console.log(a)
        }
    }
})