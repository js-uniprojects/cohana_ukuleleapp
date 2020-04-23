import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.blue.lighten3, // #90CAF9
                accent: colors.orange.lighten3,  // #FFCC80
                secondary: colors.deepPurple.lighten3, // #B39DDB
                success: colors.green.lighten2, // #81C784
                info: colors.deepOrange.lighten2, //#FF8A65
                warning: colors.amber.lighten1, //#FFCA28
                error: colors.red.lighten2, //#E57373
            },
        },
    },
});