import React, { useState } from 'react';
import Footer from '@/utils/components/Layout/components/Footer';
import classes from './Home.module.scss';
import AsideMenu from '@/utils/components/Layout/components/AsideMenu';

const Home: React.FC = () => {
  const [isAsideMenuOpen, setAsideMenuOpenState] = useState(false);

  return (
    <div className={classes.root}>
      <Footer />
      {
        isAsideMenuOpen && (
          <AsideMenu
            onClose={() => setAsideMenuOpenState(false)}
          />
        )
      }
    </div>
  );
};

export default Home;
