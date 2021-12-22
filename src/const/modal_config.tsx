/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { ModalTypeEnum } from '@/context/modal';
import AuthModal from '@/components/AuthModal';

const MODAL_CONFIG = {
  [ModalTypeEnum.AUTH]: (data: any): JSX.Element => (
    <AuthModal {...data} />
  ),
};

export default MODAL_CONFIG;
