/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router';
import classes from './Footer.module.scss';
import Container from '@/utils/components/Container';
// import OfertaLink from '@/assets/docs/oferta.docx';
import { goBlank, goWithScroll } from '@/utils/functions/dom';

type IProps = {

}

const Footer: React.FC<IProps> = () => {
  const history = useHistory();

  return (
    <Container className={classes.root} wrapperClassName={classes['root-wrapper']}>
      dasdas
    </Container>
  );
};

export default Footer;
