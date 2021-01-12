import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faChartLine,
    faHome,
    faTable
} from "@fortawesome/free-solid-svg-icons";

// solid (https://github.com/FortAwesome/vue-fontawesome#using-solid-icons)
// 자동으로 prettier가 여러 줄로 표시하기 전까진 prettier-ignore하자.
// prettier-ignore
library.add(
    faChartLine,
    faHome,
    faTable
);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);
