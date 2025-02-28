import { ComponentProps } from 'react';

/**
 * Defines a component's prop types using the props of one component `Comp`,
 * optionally merged with any extra user supplied props `Props`.
 *
 * For example, to define a link with an `href` of type `URL`, you would:
 * ```ts
 * type LinkProps = ExtendProps<'a', { href?: URL }>;
 * ```
 */
export type ExtendProps<
  // `ComponentProps` internally constrains `Comp` to be `JSXElementConstructor<any>`,
  // and since our type must have the same constraints to avoid errors, `any` is required here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Comp extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  Props = object,
> = Props & Omit<ComponentProps<Comp>, keyof Props>;
