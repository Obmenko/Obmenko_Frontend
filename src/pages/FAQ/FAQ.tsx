/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import clsx from 'clsx';
import classes from './FAQ.module.scss';
import Container from '@/utils/components/Container';
import CONTACTS from '@/const/contacts';
import { ROUTES } from '@/const/routes';

const FAQ: React.FC = () => (
  <Container className={clsx(classes.root, 'docs')} wrapperClassName={classes['root-wrapper']}>
    <h2>FAQ</h2>
    <section>
      <h3>
        В каком режиме работает обменник
        {' '}
        <a href={ROUTES.HOME}>{CONTACTS.name}</a>
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
          <p>
            Заполните свои данные в столбце «Ввод данных», а именно, укажите свой
            {' '}
            <span>E-mail, номер кошелька (карты или счета)</span>
            , на который хотите получить деньги.
          </p>
        </li>
        <li>
          <p>
            Нажмите кнопку
            {' '}
            <span>«Обменять сейчас»</span>
            , после чего во всплывающем окне Вы увидите наши реквизиты для перевода.
          </p>
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
          <p>
            Обмен производится оператором в ручном режиме и занимает
            {' '}
            <span>от 5 до 60 минут</span>
            {' '}
            после поступления платежа по заявке, также скорость обмена зависит от загруженности наших операторов.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Как отследить статус моей заявки?</h3>
      <ul>
        <li>
          <p>
            Статус Вашей заявки Вы можете отслеживать в Личном кабинете в разделе
            {' '}
            <span>«Мои заявки»</span>
            .
          </p>
        </li>
        <li>
          <p>Также эта информация доступна на почте, которую Вы указывали при создании заявки (регистрации). Вам автоматически будут поступать сообщения с информацией о смене статуса Вашей заявки.</p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Заявку оплатил, но деньги на мой счет не поступили. В чем причина?</h3>
      <p>Причины могут быть разные. Для того, чтобы обмен был успешно завершен, пожалуйста, убедитесь, что Вы все сделали правильно:</p>
      <ul>
        <li>
          <p>
            Проверьте, правильно ли Вы указали свои реквизиты для перевода (кошелек, счет или карту). Если реквизиты указаны неверно, Ваша заявка получит статус
            {' '}
            <span>«Ошибочная»</span>
            , после чего вам на почту придет письмо с описанием причины. В случае, если Ваша заявка обработана на ошибочные реквизиты, возврат средств невозможен. Рекомендуем тщательно проверять верность указываемых данных до создания заявки;
          </p>
        </li>
        <li>
          <p>Проверьте, списались ли с Вашего счета средства. Если поступления от Вас мы не увидим, заявка будет удалена;</p>
        </li>
        <li>
          <p>Возможна задержка перевода со стороны платежной системы или банка. В этом случае ускорить процесс мы не в силах, остается только ждать. Для выяснения причин задержки Вы можете позвонить или написать в тех.поддержку Вашей платежной системы или банка;</p>
        </li>
        <li>
          <div>
            <p>Все причины индивидуальны. Поэтому, если Ваша причина не относиться ни к одной из вышеперечисленных, Вы можете:</p>
            <ul className="inner">
              <li>
                <p>
                  Написать нам на почту:
                  {' '}
                  <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
                </p>
              </li>
              <li>
                <p>
                  В
                  {' '}
                  <span>online поддержку</span>
                  {' '}
                  на нашем сайте
                </p>
              </li>
              <li>
                <p>
                  А так же на наш Телеграм:
                  {' '}
                  <a href={CONTACTS.telegramLink} target="_blank" rel="noopener noreferrer">{CONTACTS.telegram}</a>
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
    <section>
      <h3>Почему моя заявка долго обрабатывается?</h3>
      <ul>
        <li>
          <p>
            Обмен производится оператором в ручном режиме и занимает
            {' '}
            <span>от 5 до 60 минут</span>
            . После поступления платежа, заявка обрабатывается в порядке очереди. Скорость обработки заявки зависит от загруженности наших операторов. Также могут быть и другие причины:
          </p>
        </li>
        <li>
          <p>Первая и самая частая причина — заявка не создалась. Помните, если Вы не нажали кнопку «Я оплатил», заявка не создается и мы не видим ее в списке заявок, ожидающих обработки. Если у Вас случайно закрылась или обновилась страница с этой кнопкой, напишите нам в online поддержку и мы поможем Вам с этой проблемой.</p>
        </li>
        <li>
          <p>
            Проверьте, соответствует ли отправленная Вами сумма указанной в заявке. Возможно, Вы не учли комиссию платежной системы или банка, и у Вас не хватило средств для перевода. Будьте внимательны! Если сумма платежа отличается от суммы, указанной в заявке, заявка получит статус
            {' '}
            <span>«Удаленная»</span>
            . В этом случае также обратитесь в online поддержку на нашем сайте и мы с радостью поможем Вам.
          </p>
        </li>
        <li>
          <p>
            Неверно указанные реквизиты также могут являться причиной задержки обработки Вашей заявки. Тщательно проверяйте указываемые реквизиты при оформлении заявки. В случае если будет допущена ошибка, мы не сможем перевести Вам средства и заявка получит статус
            {' '}
            <span>«Ошибочная»</span>
            . В этом случае пришлите нам на почту
            {' '}
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
            {' '}
            верные реквизиты с указанием номера Вашей заявки с почты, указанной Вами при создании заявки и мы в кратчайшие сроки обработаем Вашу заявку.
          </p>
        </li>
        <li>
          <p>
            Проверьте, верно ли Вы скопировали наши реквизиты для оплаты заявки. Если оплата по заявке не поступит на наш счет, Ваша заявка получит статус
            {' '}
            <span>«Удаленная»</span>
            . Также в настоящее время часты случаи подмены адресов в буфере обмена. В этом случае необходимо срочно проверить компьютер на наличие вирусов и не использовать его для проведения платежей до полного уничтожения вируса. В случае, если Вы не заметили подмены и совершили перевод на ошибочные реквизиты, мы, к сожалению, помочь не сможем.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Возможно ли отменить заявку?</h3>
      <ul>
        <li>
          <p>
            В случае, если Ваша заявка обработана, средства возврату не подлежат.
            Если заявка оплачена, но еще не выполнена, Вы можете вернуть свои средства (за вычетом комиссии за перевод), написав в службу online поддержки нашего сайта.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Какие у вас комиссии?</h3>
      <ul>
        <li>
          <p>Комиссии нашего сервиса уже включены в курс обмена и отображаются на стадии оформления заявки, в том числе, и комиссия за перевод платежной системы.</p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Я забыл пароль к аккаунту, как его восстановить?</h3>
      <ul>
        <li>
          <p>
            Перейдите на страницу восстановления пароля (кнопка
            {' '}
            <span>«Забыли пароль»</span>
            ) и укажите зарегистрированный
            {' '}
            <span>E-mail (логин)</span>
            . На Вашу почту будет отправлено письмо со ссылкой для подтверждения восстановления пароля. Необходимо открыть письмо и перейти по ссылке. После подтверждения изменения пароля, можно будет указать новый пароль.
          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Не пришло письмо с паролем/ активацией аккаунта?</h3>
      <p>Если вам не пришло письмо с подтверждением электронного адреса в течение 24 часов с момента регистрации, то, в первую очередь, необходимо убедиться, что при регистрации вы указали верный адрес. Помимо этого, некоторые почтовые сервисы могут воспринимать подобные письма как нежелательные, помечать их как спам или же вовсе не доставлять их до адресата. Для решения проблемы вам могут помочь следующие пункты:</p>
      <ul>
        <li>
          <p>Убедитесь, что при регистрации Вы указали верный адрес. Для этого пройдите процедуру регистрации повторно. Если появляется сообщение, что электронный адрес занят, значит он был введен верно;</p>
        </li>
        <li>
          <p>Убедитесь, что Вы проверяете тот почтовый ящик, который указали при регистрации. Данный пункт особенно актуален для тех, кто использует несколько электронных ящиков, или же компьютером пользуются несколько членов семьи;</p>
        </li>
        <li>
          <p>
            Проверьте папку
            {' '}
            <span>«Спам»</span>
            ;
          </p>
        </li>
        <li>
          <p>Проверьте настройки вашего спам-фильтра (если используется);</p>
        </li>
        <li>
          <p>Свяжитесь со службой поддержки вашего почтового сервиса и выясните, нет ли каких-либо ограничений с их стороны.</p>
        </li>
      </ul>
      <p>Если ни один из пунктов не помог, пожалуйста, обратитесь в online поддержку на нашем сайте.</p>
    </section>
    <section>
      <h3>Что делать, если я потерял доступ к почте?</h3>
      <ul>
        <li>
          <p>В данное время для авторизации на нашем сайте и совершения операций необходимо иметь полный доступ к почте, указанной при регистрации аккаунта. Если Вы утратили доступ к Вашей почте, необходимо воспользоваться формой восстановления пароля либо обратиться в техническую поддержку Вашего почтового аккаунта.</p>
        </li>
        <li>
          <p>После восстановления доступа к почте, в целях безопасности, настоятельно рекомендуем сменить пароль от личного кабинета на нашем сервисе.</p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Что такое верификация карты и зачем она нужна?</h3>
      <ul>
        <li>
          <p>Это процедура подтверждения данных пользователя, которая повышает безопасность операций и личных данных внутри обменного сервиса. В ходе верификации необходимо загрузить фотографии и скан-копии документов, а также подтвердить номер мобильного телефона. После верификации аккаунта пользователю становятся доступны продажа/покупка криптовалюты с помощью банковских карт.</p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Что такое реферальная программа и как на ней можно заработать?</h3>
      <ul>
        <li>
          <p>Реферальная программа — это Ваш доход от всех обменов пользователей, зарегистрированных по вашей реферальной ссылке. В реферальной программе может участвовать каждый пользователь, зарегистрировавшийся на нашем сервисе.</p>
        </li>
        <li>
          <p>
            Как это работает?
            <br />
            В личном кабинете скопируйте реферальную ссылку и рекламные материалы, разместите их в своем блоге, сайте, социальной сети и т.д. и мы автоматически начислим Вам вознаграждения за обмены всех пользователей, перешедших к нам по Вашей ссылке.
          </p>
        </li>
      </ul>
      <p>Условия реферальных начислений за обмен Ваших рефералов:</p>
      <ul>
        <li>
          <p>0,5 % от суммы обмена — после регистрации на сайте;</p>
        </li>
        <li>
          <p>0,6% от суммы обмена — за 20 приглашенных рефералов;</p>
        </li>
        <li>
          <p>0,8 % от суммы обмена + фирменный подарок — за 50 приглашенных рефералов;</p>
        </li>
        <li>
          <p>0,9 % от суммы обмена + фирменный подарок — за 100 рефералов;</p>
        </li>
        <li>
          <p>1 % от суммы обмена + фирменный подарок — за 300 рефералов;</p>
        </li>
      </ul>
      <p>Вы получаете процент реферальных начислений от заработка сервиса с каждой Вашей обменной операции. Вы получаете вознаграждения только если комиссия сервиса за обмен больше 0%. Если сервис не имеет заработка (комиссия отсутствует) по данному направлению обмена, Вы не получаете вознаграждения за обмен.</p>
    </section>
    <section>
      <h3>Меня просят очистить Куки (Cookies) и Кеш (Cache). Как это сделать?</h3>
      <ul>
        <li>
          <p>Веб-страницы нашего сайта могут отображаться некорректно в связи с тем, что в них были внесены изменения, а Ваш браузер продолжает использовать устаревшие данные из кэша.</p>
        </li>
      </ul>
      <p>В таких случаях мы просим почистить Куки и Кеш для того чтобы весь функционал полноценно и безошибочно работал.</p>
    </section>
    <section>
      <h3>Что такое подтверждение от сети Bitcoin?</h3>
      <ul>
        <li>
          <p>Обычно при получении Bitcoin новый владелец не может сразу же распоряжаться ими. Как только транзакция произведена, она отправляется в сеть Bitcoin для исполнения и должна быть включена в блок, чтобы стать легитимной. Процесс включения транзакции в состав найденного блока называется подтверждением транзакции. Включение в 1 блок = 1 подтверждение, когда таких подтверждений набирается 6 и выше — транзакция считается подтвержденной. Такая функция была введена для защиты от повторной траты одних и тех же биткоинов.</p>
        </li>
      </ul>
      <p>На нашем сервисе действует требование 1-го подтверждения от сети Bitcoin, только после этого Ваша заявка будет обработана.</p>
    </section>
    <section>
      <h3>Уважаемые пользователи сервиса!</h3>
      <ul>
        <li>
          <p>
            Доводим до Вашего сведения, что не существует возможности отображать актуальный курс обмена, который будет подходить для всех направлений наличные — Криптовалюта, криптовалюта — наличные.
            <br />
            Надеемся, Вы понимаете что, что курс обмена зависит от многих факторов (сумма обмена, город, направление обмена, наличия резервов, спроса на рынке (в частности в городе обмена), стоимость курьера, и даже от времени суток). В связи с этим, чтобы узнать актуальный курс обмена именно для Вас, обратитесь в чат к оператору. Оператор запросит у Вас необходимую информацию и вернется с актуальным предложением по Вашему запросу.

          </p>
        </li>
      </ul>
    </section>
    <section>
      <h3>Всегда рады сотрудничать!</h3>
    </section>
  </Container>
);

export default FAQ;
