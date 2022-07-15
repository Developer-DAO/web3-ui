import * as esbuild from 'esbuild';

const isWatching = process.argv.includes('--watch');
const isCssMinified = process.env.MINIFY_CSS === 'true';

// const getRecursivePaths = async (rootPath) =>
//   (await readdir(rootPath))
//     .map((x) => x.path)
//     .filter((x) => !x.endsWith('.css.ts'));

esbuild
  .build({
    bundle: true,
    entryPoints: [
      './src/index.ts',

      // esbuild needs these additional entry points in order to support tree shaking while also supporting CSS
      // ...(await getRecursivePaths('src/themes')),

      // The build output is cleaner when bundling all components into a single chunk
      // This is done assuming that consumers use most of the components in the package, which is a reasonable assumption for now
      './src/components/index.ts',
    ],
    format: 'esm',
    loader: {
      '.png': 'dataurl',
      '.svg': 'dataurl',
    },
    outdir: 'dist',
    platform: 'browser',
    plugins: [
      {
        name: 'make-all-packages-external',
        setup(build) {
          let filter = /^[^./]|^\.[^./]|^\.\.[^/]/; // Must not start with "/" or "./" or "../"
          build.onResolve({ filter }, (args) => ({
            external: true,
            path: args.path,
          }));
        },
      },
    ],
    splitting: true, // Required for tree shaking
    watch: isWatching
      ? {
          onRebuild(error, result) {
            if (error) console.error('watch build failed:', error);
            else console.log('watch build succeeded:', result);
          },
        }
      : undefined,
  })
  .then(() => {
    if (isWatching) {
      console.log('watching...');
    }
  })
  .catch(() => process.exit(1));
