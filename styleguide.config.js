const path = require('path');

module.exports = {
  components: 'src/components/**/*.{tsx,js,jsx}',
  ignore: ['src/components/**/style.js'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap'
        }
      ]
    }
  },
  styles: {
    Playground: {
      preview: {
        backgroundImage:
          'linear-gradient(45deg,#efefef 25%,transparent 0,transparent 75%,#efefef 0,#efefef),linear-gradient(45deg,#efefef 25%,transparent 0,transparent 75%,#efefef 0,#efefef)',
        backgroundPosition: '0 0,10px 10px',
        backgroundSize: '20px 20px'
      }
    }
  },
  theme: {
    maxWidth: '100%',
    color: {
      codeBase: '#9cdcfe',
      codeBackground: '#1e1e1e',
      codeComment: '#6a9955',
      codePunctuation: '#D4D4D4',
      codeProperty: '#9cdcfe',
      codeDeleted: '#905',
      codeString: '#ce9178',
      codeInserted: '#ce9178',
      codeOperator: '#9cdcfe',
      codeKeyword: '#ce9178',
      codeFunction: '#4ec9b0',
      codeVariable: '#9cdcfe'
    },
    borderRadius: 8
  },

}