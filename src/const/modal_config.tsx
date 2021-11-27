/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ModalTypeEnum } from '@/context/modal';
import CertificateModal from '@/components/CertificateModal/CertificateModal';

const MODAL_CONFIG = {
  [ModalTypeEnum.CERTIFICATE]: (data: any): JSX.Element => (
    <CertificateModal {...data} />
  ),
};

export default MODAL_CONFIG;
