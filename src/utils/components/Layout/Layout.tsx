/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useState,
} from 'react';

import clsx from 'clsx';
import { Dialog, DialogContent } from '@material-ui/core';
import classes from './Layout.module.scss';
import ModalContext, { ModalType, ModalTypeEnum, ModalTypeOptions } from '@/context/modal';
import MODAL_CONFIG from '@/const/modal_config';
import { ModalDataUnion } from '@/types/modal';
import Footer from './components/Footer';
import AsideMenu from './components/AsideMenu';
import Header from './components/Header';
import Warning from './components/Warning';

type PropsType = {
  children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  const [modalList, setModalList] = useState<ModalType[]>([]);
  const [isAsideMenuOpen, setAsideMenuOpenState] = useState(false);
  const [isWarningOpen, setWarningOpenState] = useState(true);

  const handleOpenModal = useCallback(openModal, [modalList]);
  const handleCloseModal = useCallback(closeModal, [modalList]);
  const handleCloseAllModal = useCallback(closeAllModal, []);

  return (
    <ModalContext.Provider value={{
      modalList,
      openModal: handleOpenModal,
      closeModal: handleCloseModal,
      closeAllModal: handleCloseAllModal,
    }}
    >
      <div className={classes.root}>
        {
          isWarningOpen && (
            <Warning isWarningOpen={isWarningOpen} setWarningOpenState={setWarningOpenState} />
          )
        }
        <Header isAsideMenuOpen={isAsideMenuOpen} setAsideMenuOpenState={setAsideMenuOpenState} />
        <div className={classes.content}>
          {children}
        </div>
        <Footer />
        {
          isAsideMenuOpen && (
            <AsideMenu
              onClose={() => setAsideMenuOpenState(false)}
            />
          )
        }
      </div>
      {
        modalList.map(({
          type, onClose, data, isClosingDisabled, classes: extraClasess, maxWidth,
        }) => (
          <Dialog
            key={type}
            open
            onClose={handleCloseModal(type, onClose)}
            disableEscapeKeyDown={isClosingDisabled}
            disableBackdropClick={isClosingDisabled}
            {
              ...(maxWidth ? { maxWidth: 'md' } : {})
            }
            BackdropProps={{
              classes: {
                root: clsx(extraClasess?.backdropRoot),
              },
            }}
            classes={{
              paper: clsx(classes['modal-paper'], extraClasess?.paper),
            }}
            PaperProps={{
              classes: {
                root: clsx(classes['modal-paper'], extraClasess?.paper),
              },
            }}
          >
            <DialogContent className={clsx(classes['modal-content'])}>
              <>
                {
                  MODAL_CONFIG[type](data)
                }
              </>
            </DialogContent>
          </Dialog>
        ))
      }
    </ModalContext.Provider>
  );
  function openModal(type: ModalTypeEnum, data: ModalDataUnion, onClose?: { (): void }) {
    return (options: ModalTypeOptions = {}) => {
      setModalList([
        ...modalList,
        {
          type,
          data,
          onClose,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...((options as unknown as any).target ? {} : options),
        },
      ]);
    };
  }
  function closeModal(type: ModalTypeEnum, onClose?: { (): void }) {
    return () => {
      onClose?.();
      setModalList(modalList.filter((el) => el.type !== type));
    };
  }
  function closeAllModal() {
    return () => {
      setModalList([]);
    };
  }
};
export default Layout;
