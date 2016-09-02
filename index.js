const S = require('sanctuary');
const Color = require('color');

function getConf(config) {
  return S.get(Object, 'hypertermCrosshair', config);
}

function getColor(confM) {
  return confM.chain(S.get(String, 'color'));
}

exports.decorateConfig = (config) => {
  const color = S.maybe(Color('rgba(255, 255, 255, 0.2)'), (x) => Color(x), getColor(getConf(config))).rgbString();

  return Object.assign({}, config, {
    termCSS: `
${config.termCSS || ''}
.cursor-node:before {
  content: '';
  position: absolute;
  background-color: ${color};
  width: 200vw;
  margin-left: -100vw;
  height: 100%;
  pointer-events: none;
}
.cursor-node:after {
  content: '';
  position: absolute;
  background-color: ${color};
  width: 100%;
  height: 200vh;
  margin-top: -100vh;
  pointer-events: none;
}`,
  });
};
