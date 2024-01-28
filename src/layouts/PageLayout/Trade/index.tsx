import { FC, PropsWithChildren } from 'react';

export const Trade: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>Orders</h1>
    {children}
  </div>
);
