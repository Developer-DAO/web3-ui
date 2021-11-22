---
to: src/components/index.ts
inject: true
append: true
---
export * from './<%= h.changeCase.pascalCase(name) %>'
