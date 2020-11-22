import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
posts: [],
users: [],
user: {}
}

//to handle state
const getters = {}

//to handle actions
const actions = {
getPosts({ commit }) {
axios.get('https://private-517bb-wad20postit.apiary-mock.com/posts')
    .then(response => {commit('SET_POSTS', response.data)})
    },
getUsers({ commit }) {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/profiles')
    .then(response => {commit('SET_USERS', response.data)})
    },
getUser({ commit }) {
    axios.get('https://private-517bb-wad20postit.apiary-mock.com/users/1')
    .then(response => {commit('SET_USER', response.data)})
    }
}

//to handle mutations
const mutations = {
SET_POSTS(state, posts) {
state.posts = posts
    },
SET_USERS(state, users) {
    state.users = users
    },
SET_USER(state, user) {
    state.user = user
    }
}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})