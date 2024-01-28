import { FC, PropsWithChildren } from 'react';

const AppLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>AppLayout</h1>
    {children}
  </div>
);

export default AppLayout;
