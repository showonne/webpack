module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }
      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "styleConfig": {
      "type": "list",
      "message": "use mcss, less or postcss",
      "choices": [
        {
          "name": "mcss",
          "value": "mcss"
        },
        {
          "name": "less",
          "value": "less"
        },
        {
          "name": "postcss",
          "value": "postcss"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    // "lint": {
    //   "type": "confirm",
    //   "message": "Use ESLint to lint your code?"
    // },
    // "lintConfig": {
    //   "when": "lint",
    //   "type": "list",
    //   "message": "Pick an ESLint preset",
    //   "choices": [
    //     {
    //       "name": "Standard (https://github.com/feross/standard)",
    //       "value": "standard",
    //       "short": "Standard"
    //     },
    //     {
    //       "name": "Airbnb (https://github.com/airbnb/javascript)",
    //       "value": "airbnb",
    //       "short": "Airbnb"
    //     },
    //     {
    //       "name": "Kaola (https://github.com/kaola-fed/eslint-config-kaola)",
    //       "value": "kaola",
    //       "short": "Kaola"
    //     },
    //     {
    //       "name": "none (configure it yourself)",
    //       "value": "none",
    //       "short": "none"
    //     }
    //   ]
    // },
    // "husky": {
    //   "when": "lint",
    //   "type": "confirm",
    //   "message": "Use husky & lintStage for precommit check?"
    // },
    "port": {
      "type": "number",
      "message": "dev server port",
      "default": 8090
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    "src/mcss/**/*": "styleConfig === 'mcss'",
    "src/less/**/*": "styleConfig === 'less'",
    "src/css/**/*": "styleConfig === 'postcss'",
    ".postcssrc.js": "styleConfig === 'postcss'",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}git init\n  npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
