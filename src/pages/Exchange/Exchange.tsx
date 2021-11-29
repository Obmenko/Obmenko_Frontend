import React, { useState } from 'react';
import Footer from '@/utils/components/Layout/components/Footer';
import classes from './Exchange.module.scss';
import AsideMenu from '@/utils/components/Layout/components/AsideMenu';

const Exchange: React.FC = () => {
  const [isAsideMenuOpen, setAsideMenuOpenState] = useState(false);

  return (
    <div className={classes.root}>
      <Footer />
    </div>
  );
};

export default Exchange;
