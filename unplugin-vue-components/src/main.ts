import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.prototype.$ELEMENT = { size: 'mini' }
new Vue({
	router,
	render: (h) => h(App),
}).$mount('#app')
