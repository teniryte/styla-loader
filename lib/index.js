'use strict';

const _ = require('lodash');
const styla = require('styla');
const fs = require('fs');
const utils = require('loader-utils');
const Loader = require('plp/wp/loader');
const path = require('path');

class StylaLoader extends Loader {

  render () {
    var options = this.opts,
      filename = this.filename,
      css = styla.renderFile(filename, options);

    return `
      module.exports = (() => {
        const cssCode = decodeURIComponent(\`${encodeURIComponent(css)}\`);

        document.addEventListener('DOMContentLoaded', ev => {
          let style = getStyle();
          style.innerHTML = style.innerHTML + '\\n' + cssCode;
        });
        
        function getStyle() {
          let style = document.head.querySelector('style[data-loader="styla"]');
          if (!style) {
            style = document.createElement('style');
            style.dataset.loader = 'styla';
            document.head.appendChild(style);
          }
          return style;
        }
      })();
    `;
  }

}

module.exports = StylaLoader.loader;
