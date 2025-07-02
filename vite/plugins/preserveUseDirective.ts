import fs from 'node:fs';
import type { Plugin } from 'vite';

const ENCODING = 'utf-8';

export const preserveUseDirective = (directive: 'use client' | 'use server'): Plugin => {
  const directiveMap = new Set<string>();

  return {
    name: `preserve-${directive.replace(' ', '-')}-directive`,
    enforce: 'pre',

    async load(id) {
      if (id.endsWith('.tsx') || id.endsWith('.ts')) {
        const code = await fs.promises.readFile(id, ENCODING);
        if (code.includes(`"${directive}"`) || code.includes(`'${directive}'`)) {
          directiveMap.add(id);
          this?.warn?.(`[preserveUseDirective] Detected ${directive} in: ${id}`);
        }
      }
      return null;
    },

    renderChunk(code, chunk) {
      const usesDirective = Object.keys(chunk.modules).some((id) => directiveMap.has(id));
      const normalized = `"${directive}"`;

      if (usesDirective && !code.startsWith(normalized)) {
        this?.warn?.(
          `[preserveUseDirective] Prepending ${directive} directive in chunk: ${chunk.fileName}`,
        );
        return {
          code: `${normalized};\n${code}`,
          map: null,
        };
      }

      return null;
    },
  };
};
