<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from './components/Hello'{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}

{{/unless}}
export default {
{{#if_eq lintConfig "kaola"}}  {{/if_eq}}  name: 'app'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  {{#if_eq lintConfig "kaola"}}  {{/if_eq}}components: {
    {{#if_eq lintConfig "kaola"}}    {{/if_eq}}Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
{{#if_eq lintConfig "kaola"}}  {{/if_eq}}  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_includes lintConfig "['kaola', 'airbnb']"}};{{/if_includes}}
</script>

<style{{#unless_eq styleConfig 'postcss'}} lang="{{styleConfig}}"{{/unless_eq}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
