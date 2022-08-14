import { defineConfig } from 'dumi';

// 此处更换为自己的仓库名
let base = '/ts-react-base-library';
let publicPath = '/ts-react-base-library/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'TS-REACT-BASE',
  mode: 'site',
  outputPath: 'doc-site',
  exportStatic: {},
  dynamicImport: {},
  webpack5: {},
  base,
  publicPath,
  sass: {
    implementation: require('node-sass'),
  },
});
