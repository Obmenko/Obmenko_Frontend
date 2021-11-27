/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import classes from './CertificateModal.module.scss';
import IMAGE_DICT from '@/const/assets/image';

export type CertificateModalData = {
  id: number
}

const CertificateModal: React.FC<CertificateModalData> = ({
  id,
}) => (
  <div className={classes.root}>
    <div className={classes.content}>
      <img src={IMAGE_DICT.certificates[id].src} alt="" />
    </div>
  </div>
);

export default CertificateModal;
