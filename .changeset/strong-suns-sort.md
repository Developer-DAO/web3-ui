---
"@web3-ui/hooks": minor
---

You can now pass in args to the exec fn in useTransaction just like you would with ethers. You don't need to pass it all inside an array anymore.

```tsx
execute(['Hello', { value: '10' }]);

// is now
execute('Hello', { value: '10' });
```
