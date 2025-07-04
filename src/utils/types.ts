import { ComponentProps, ReactNode } from 'react';

export type ExtendProps<
  // `ComponentProps` internally constrains `Comp` to be `JSXElementConstructor<any>`,
  // and since our type must have the same constraints to avoid errors, `any` is required here
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Comp extends keyof React.JSX.IntrinsicElements | React.JSXElementConstructor<any>,
  Props = object,
> = Props & Omit<ComponentProps<Comp>, keyof Props>;

// Define an interface for the decoded JWT payload
export type DecodedJWT = {
  name: string;
  email: string;
  groupInfoIds: string[];
  exp?: number; // Optional: JWT expiration timestamp
  [key: string]: unknown; // Additional claims
};

export type Credentials = {
  token: string;
  user: DecodedJWT;
};

export type NavLink = {
  label: string;
  url: string;
  isExternal: boolean;
  icon?: ReactNode;
};
