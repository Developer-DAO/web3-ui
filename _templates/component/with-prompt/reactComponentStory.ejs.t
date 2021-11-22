---
to: src/components/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import React from 'react';

export interface <%= h.changeCase.pascalCase(name) %>Props {}

export const <%= h.changeCase.pascalCase(name) %>: React.FC<<%= h.changeCase.pascalCase(name) %>Props> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
