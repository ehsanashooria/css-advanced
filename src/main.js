import './assets/css/main.scss'

// Vuetify
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {aliases, mdi} from 'vuetify/iconsets/mdi'


// Bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.min.css"

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// Components
import BaseButton from "@/components/UI/BaseButton.vue"
import BaseCard from "@/components/UI/BaseCard.vue"

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },

})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app
    .component("base-button", BaseButton)
    .component("base-card", BaseCard)

app.mount('#app')
