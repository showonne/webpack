<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>\{{greet}}</p>
    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import Hello from 'components/Hello';
{{/unless}}
import api from 'api';

export default {
    name: 'app',
    data() {
        return {
            greet: ''
        };
    },
    created() {
        api.greet()
            .then(({code, data}) => {
                if(code === 200){
                    this.greet = data.content;
                }
            });
    }{{#unless router}},
    components: {
        Hello
    }{{/unless}}
};
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
