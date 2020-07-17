import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "md"
    },
    theme: {
        themes: {
            light: {
                primary: '#851486',
                secondary: '#22D2B9',
                tertiary: '#736A73',
            },
        },
    },
});
