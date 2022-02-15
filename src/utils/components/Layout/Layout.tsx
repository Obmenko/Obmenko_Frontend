/* eslint-disable react/no-array-index-key */
import React, {
  FC, useCallback, useEffect, useState,
} from 'react';

import clsx from 'clsx';
import { Dialog, DialogContent } from '@material-ui/core';
import { useCookies } from 'react-cookie';
import classes from './Layout.module.scss';
import ModalContext, { ModalType, ModalTypeEnum, ModalTypeOptions } from '@/context/modal';
import MODAL_CONFIG from '@/const/modal_config';
import { ModalDataUnion } from '@/types/modal';
import Footer from './components/Footer';
import AsideMenu from './components/AsideMenu';
import Header from './components/Header';
import Warning from './components/Warning';

import { CookiesMapEnum } from '@/types/config';
import AuthContext from '@/context/auth';
import UserContext from '@/context/user';
import { getUser, UserType } from '@/api/user';
import BgBlurRedImg from '@/assets/img/bg_blur_red.svg';
import BgBlurBlueImg from '@/assets/img/bg_blur_blue.svg';

type PropsType = {
  children: React.ReactNode
}

const Layout: FC<PropsType> = ({ children }) => {
  const [modalList, setModalList] = useState<ModalType[]>([]);
  const [isAsideMenuOpen, setAsideMenuOpenState] = useState(false);
  const [isWarningOpen, setWarningOpenState] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies([
    CookiesMapEnum.AUTH_TOKEN,
  ]);
  const [token, setToken] = useState<string>(cookies.auth_token || '');
  const [user, setUser] = useState<UserType | null>(null);

  const handleOpenModal = useCallback(openModal, [modalList]);
  const handleCloseModal = useCallback(closeModal, [modalList]);
  const handleCloseAllModal = useCallback(closeAllModal, []);

  useEffect(() => {
    if (token) {
      setCookie(CookiesMapEnum.AUTH_TOKEN, token);
      getUser(token).then((data) => {
        setUser(data);
      });
    } else {
      removeCookie(CookiesMapEnum.AUTH_TOKEN);
      setUser(null);
    }
  }, [token, setCookie, removeCookie]);

  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}
    >
      <AuthContext.Provider value={{
        token,
        setToken,
      }}
      >
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
            <div className={classes.bg}>
              <img src={BgBlurRedImg} alt="" className={clsx(classes['bg-item'], classes['bg-item__red'])} />
              <img src={BgBlurBlueImg} alt="" className={clsx(classes['bg-item'], classes['bg-item__blue'], classes['bg-item__blue-right'])} />
              <img src={BgBlurBlueImg} alt="" className={clsx(classes['bg-item'], classes['bg-item__blue'], classes['bg-item__blue-left'])} />
            </div>
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
                      MODAL_CONFIG[type]({ ...data, isClosingDisabled })
                    }
                  </>
                </DialogContent>
              </Dialog>
            ))
          }
        </ModalContext.Provider>
      </AuthContext.Provider>
    </UserContext.Provider>
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
