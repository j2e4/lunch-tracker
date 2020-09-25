import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDatabase, faTable, faHome } from '@fortawesome/free-solid-svg-icons'

// solid (https://github.com/FortAwesome/vue-fontawesome#using-solid-icons)
library.add(faDatabase, faTable, faHome);

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
