{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
import App from './App'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
{{#router}}
import router from './router'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
{{/router}}

Vue.config.productionTip = false{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}

/* eslint-disable no-new */
new Vue({
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}el: '#app',
  {{#router}}
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}router,
  {{/router}}
  {{#if_eq build "runtime"}}
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}template: '<App/>',
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
