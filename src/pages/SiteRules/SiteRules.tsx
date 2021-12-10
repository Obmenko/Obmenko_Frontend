/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import clsx from 'clsx';
import classes from './SiteRules.module.scss';
import Container from '@/utils/components/Container';

const SiteRules: React.FC = () => {
  console.log('object');

  return (
    <Container className={clsx(classes.root, 'docs')} wrapperClassName={classes['root-wrapper']}>
      <h2>SiteRules</h2>
      <section>
        <h3>
          В каком режиме работает обменник
          {' '}
          <a href="https://coins.gives">Coins.gives</a>
          ?
        </h3>
        <p>Мы работаем круглосуточно.</p>
      </section>
      <section>
        <h3>Как создать заявку?</h3>
        <p>Для того, чтобы создать заявку, Вам необходимо следовать дальнейшей инструкции:</p>
        <ul>
          <li>
            <p>Выберите направление обмена (например: в столбце «Отдаю» — Ethereum, в столбце «Получаю» — Сбербанк) и укажите сумму, которую Вы хотите обменять или получить.</p>
          </li>
          <li>
            <p>Заполните свои данные в столбце «Ввод данных», а именно, укажите свой E-mail, номер кошелька (карты или счета), на который хотите получить деньги.</p>
          </li>
          <li>
            <p>Нажмите кнопку «Обменять сейчас», после чего во всплывающем окне Вы увидите наши реквизиты для перевода.</p>
          </li>
          <li>
            <p>Скопируйте наши реквизиты, перейдите в Ваш кошелек. Вставьте сумму, указанную в заявке, и наши реквизиты. Подтвердите перевод. Обязательно убедитесь в том, что сумма у Вас списалась.</p>
          </li>
          <li>
            <p>Далее вернитесь на наш сайт и подтвердите оплату, нажав на кнопку «Я оплатил». Готово.</p>
          </li>
          <li>
            <p>После создания заявки Вам на почту придет письмо со статусом вашей заявки, а так же Вы автоматически будете зарегистрированы на нашем сервисе. Для того, чтобы подтвердить регистрацию, Вам необходимо пройти по ссылке, указанной в письме. Подтвердив регистрацию, Вы сможете отслеживать статус заявок в своем личном кабинете, а также участвовать в реферальной программе и получать скидки.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Сколько времени обрабатывается заявка?</h3>
        <ul>
          <li>
            <p>Обмен производится оператором в ручном режиме и занимает от 5 до 60 минут после поступления платежа по заявке, также скорость обмена зависит от загруженности наших операторов.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>Как отследить статус моей заявки?</h3>
        <ul>
          <li>
            <p>Статус Вашей заявки Вы можете отслеживать в Личном кабинете в разделе «Мои заявки».</p>
          </li>
          <li>
            <p>Также эта информация доступна на почте, которую Вы указывали при создании заявки (регистрации). Вам автоматически будут поступать сообщения с информацией о смене статуса Вашей заявки.</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
      <section>
        <h3>header</h3>
        <p>pretitle</p>
        <ul>
          <li>
            <p>listitem</p>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default SiteRules;
