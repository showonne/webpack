import Vue from 'vue'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
import Router from 'vue-router'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
import Hello from '@/components/Hello'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}

Vue.use(Router){{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}

export default new Router({
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}routes: [
    {{#if_eq lintConfig "kaola"}}    {{/if_eq}}{
      {{#if_eq lintConfig "kaola"}}      {{/if_eq}}path: '/',
      {{#if_eq lintConfig "kaola"}}      {{/if_eq}}name: 'Hello',
      {{#if_eq lintConfig "kaola"}}      {{/if_eq}}component: Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{#if_eq lintConfig "kaola"}}   {{/if_eq}} }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
