const S = require('sanctuary');

function getOpacityFromConf(config) {
  return S.get(Object, 'hypertermCrosshair', config).chain(S.get(Number, 'opacity'));
}

exports.decorateConfig = (config) => {
  const opacity = S.maybe(0.2, (x) => +x, getOpacityFromConf(config));

  return Object.assign({}, config, {
    termCSS: `
${config.termCSS || ''}
.cursor-node:before {
  content: '';
  position: absolute;
  background-color: rgba(255, 255, 255, ${opacity});
  width: 200vw;
  margin-left: -100vw;
  height: 100%;
}
.cursor-node:after {
  content: '';
  position: absolute;
  background-color: rgba(255, 255, 255, ${opacity});
  width: 100%;
  height: 200vh;
  margin-top: -100vh;
}`,
  });
};
