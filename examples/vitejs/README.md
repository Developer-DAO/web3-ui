# ViteJS Web3-UI Example

This is a default scaffolded React TypeScript project from [ViteJS](https://vitejs.dev/).

## Requirements

- NVM or NodeJS `v16.13.0`

## Required Adjustment

If a developer would like any future projects working with web3-ui, which uses web3-modal, then the following adjustment needs to be made in order to support and get things working.

PS: Thanks to [@Niputi](https://github.com/Niputi) for this work around:
[https://github.com/vitejs/vite/issues/3817](https://github.com/vitejs/vite/issues/3817)

**File:** `./index.html`

```diff
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+    <!-- SOLUTION FROM: https://github.com/vitejs/vite/issues/3817#issuecomment-864450199 -->
+    <!-- web3-modal support -->
+    <script>window.global = window;</script>
+    <script type="module">
+      import process from "process";
+      import { Buffer } from "buffer";
+      window.Buffer = Buffer;
+      window.process = process;
+    </script>
+    <!-- END web3-modal support -->
    <title>Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## Get Started

Commands to run local development:

```bash
yarn dev;
```
