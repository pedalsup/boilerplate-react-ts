import { FC } from 'react';
import { Header } from './inside/Header';
import { AllUpdates } from './modules/AllUpdates';
import { Market } from './modules/Market';

export const MarketPage: FC = () => (
  <>
    <Header />
    <h2>Market Page</h2>
    <AllUpdates />
    <Market />
  </>
);
