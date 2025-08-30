module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended'
  ],
  plugins: [
    'vue'
  ],
  rules: {
    // Enforce explicit component imports
    'vue/no-undef-components': 'error',
    
    // Enforce component naming conventions
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    
    // Enforce prop definitions
    'vue/require-prop-types': 'error',
    'vue/require-default-prop': 'error',
    
    // Enforce component options
    'vue/require-name-property': 'error',
    
    // Code quality
    'no-console': 'warn',
    'no-debugger': 'error',
    
    // Vue 3 Composition API best practices
    'vue/prefer-import-from-vue': 'error',
    'vue/no-ref-as-operand': 'error',
    
    // Accessibility
    'vue/require-v-for-key': 'error',
    
    // Performance
    'vue/no-unused-components': 'warn',
    'vue/no-unused-vars': 'warn',
    
    // Styling
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    
    // Template formatting
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 3
      },
      'multiline': {
        'max': 1
      }
    }]
  },
  
  // Custom rules for this project
  overrides: [
    {
      files: ['app/components/**/*.vue'],
      rules: {
        // All components must have explicit names
        'vue/require-name-property': 'error',
        
        // Components should be properly structured
        'vue/component-tags-order': ['error', {
          'order': ['template', 'script', 'style']
        }]
      }
    },
    {
      files: ['app/pages/**/*.vue'],
      rules: {
        // Pages should use useHead for SEO
        'nuxt/no-globals-in-created': 'error'
      }
    }
  ]
}