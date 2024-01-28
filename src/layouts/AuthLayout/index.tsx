import { FC, PropsWithChildren } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => (
  <div>
    <h1>AuthLayout</h1>
    {children}
  </div>
);

export default AuthLayout;
