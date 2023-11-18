
import './style.css'

import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice';


import App from './App.vue'
import { createApp } from 'vue';

import AnimateOnScroll from 'primevue/animateonscroll';
import Tooltip from 'primevue/tooltip'
import BadgeDirective from 'primevue/badgedirective'
import Ripple from 'primevue/ripple'
import StyleClass from 'primevue/styleclass'
import FocusTrap from 'primevue/focustrap'
import ToastService from 'primevue/toastservice'
import DialogService from 'primevue/dialogservice'
import './assets/theme_lara_claro.css'

const app = createApp(App);
app.use(PrimeVue, { ripple: true  });
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.directive('animateonscroll', AnimateOnScroll);
app.directive('tooltip', Tooltip);
app.directive('badge', BadgeDirective);
app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('focustrap', FocusTrap);
app.directive('animateonscroll', AnimateOnScroll);

app.mount("#app")
