/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import clsx from 'clsx';
import classes from './Rules.module.scss';
import Container from '@/utils/components/Container';
import { ROUTES } from '@/const/routes';
import CONTACTS from '@/const/contacts';

const Rules: React.FC = () => (
  <Container className={clsx(classes.root, 'docs')} wrapperClassName={classes['root-wrapper']}>
    <h2>Правила сайта</h2>
    <section>
      <h3>
        1. Назначение и область применения Правил предоставлении услуг сервисом
        {' '}
        {CONTACTS.name}
      </h3>
      <ol>
        <li>
          <p>
            1.1. Настоящие Правила предоставления услуг сервисом
            {' '}
            {CONTACTS.name}
            {' '}
            (далее по тексту – Правила) устанавливают требования и содержат описание:
          </p>
        </li>
        <li>
          <p>
            1.1.1. Порядка предоставления услуги мультивалютного обменного сервиса
            {' '}
            {CONTACTS.name}
            .
          </p>
        </li>
        <li>
          <p>
            1.1.2. Публичной оферты Пользователям услуг сервиса
            {' '}
            {CONTACTS.name}
            .
          </p>
        </li>
        <li>
          <p>
            1.1.3. Разграничения ответственности за использование и предоставление услуг сервисом
            {' '}
            {CONTACTS.name}
            .
          </p>
        </li>
        <li>
          <p>1.1.4. Мер по минимизации риска отмывания денежных средств и финансирования терроризма.</p>
        </li>
        <li>
          <p>
            1.2.
            {' '}
            {CONTACTS.name}
            {' '}
            или Сервис – система, предоставляющая Пользователям возможность обмена криптовалюты на электронные деньги и (или) национальную валюту, а также обмен электронных денег и (или) национальной валюты на криптовалюту, расположенная и функционирующая на сайте в сети Интернет по адресу
            {' '}
            <a href={ROUTES.HOME}>
              {CONTACTS.siteUrl}
              /
            </a>
          </p>
        </li>
        <li>
          <p>
            1.3. Сервис размещается на территории государства Эстония. В соответствии с текущим законодательным регулированием, в Эстонии деятельность по гражданскому обороту криптовалюты нормативно не запрещена. Корпоративные криптовалютные кошельки размещены на бирже Binance. Зачисление средств происходит согласно правилам биржи Binance.
            <br />
            Для сети BTC необходимо 2 подтверждения, ETH — 12, ETC — 75, LTC — 4, XMR — 3, Dash — 3 и т.д. . Мы обращаем Ваше внимание, что в случае технических работ по определенным криптовалютам появляются задержки ввода Ваших средств и выплат Вам до окончания технических работ на бирже.

          </p>
        </li>
        <li>
          <p>
            1.4. Перед тем, как воспользоваться услугами сервиса
            {' '}
            {CONTACTS.name}
            , Пользователь обязан ознакомиться в полном объеме с условиями настоящих Правил, Политикой конфиденциальности Сервиса, опубликованной на сайте Сервиса, и принять их.
          </p>
        </li>
        <li>
          <p>1.5. Использование услуг Сервиса возможно, только если Пользователь принимает все условия Правил.</p>
        </li>
        <li>
          <p>
            1.6. Действующая версия Правил расположена для публичного доступа на сайте Сервиса. Администрация Сервиса вправе в любое время в одностороннем порядке изменять настоящие Правила. Такие изменения вступают в силу по истечении 3 (трех) календарных дней с момента размещения новой версии Правил на сайте, если иной порядок вступления не предусмотрен специально в новой версии Правил. При несогласии Пользователя с внесенными изменениями он обязан отказаться от доступа к сайту Сервиса и прекратить использование материалов и услуг Сервиса, направив соответствующее письмо на электронную почту
            {' '}
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
            .
          </p>
        </li>
      </ol>
    </section>
    <section>
      <h3>2. Термины и определения</h3>
      <ol>
        <li>
          <p>2.1. KYC & AML – «Know Your Customer» (знай своего клиента) и «Anti-Money Laundering» (противодействие отмыванию средств).</p>
        </li>
        <li>
          <p>2.2. P2P – оверлейная компьютерная сеть, основанная на равноправии участников.</p>
        </li>
        <li>
          <p>2.3. Аккаунт – уникальная учетная запись на сайте Сервиса, идентифицирующая Пользователя.</p>
        </li>
        <li>
          <p>2.4. Блокчейн – выстроенная по определённым правилам непрерывная последовательная цепочка блоков (связный список), содержащих информацию о проводках между цифровыми ключами (кошельками) пользователей, которую можно передавать от одного компьютера (человека) другому посредством сети интернет.</p>
        </li>
        <li>
          <p>2.5. Верификация банковкой карты — это проверка принадлежности банковской карты (или счета) её владельцу. Условия проверки принадлежности устанавливает Сервис, производится единовременно для каждого нового счета (банковской карты) Пользователя.</p>
        </li>
        <li>
          <p>2.6. Заявка – выражение намерения Пользователя воспользоваться одной из услуг, предлагаемых Сервисом, путем заполнения электронной формы через сайт Сервиса, на условиях, описанных в настоящих Правилах и указанных в параметрах этой Заявки.</p>
        </li>
        <li>
          <p>2.7. Криптовалюта — Bitcoin, Litecoin, Ethereum и любые иные валюты, основанные на блокчейне.</p>
        </li>
        <li>
          <p>2.8. Курс — стоимостное соотношение криптовалюты, электронных денег и фиатной валюты между собой при обмене.</p>
        </li>
        <li>
          <p>2.9. Национальная валюта (фиатная валюта) — законные платёжные средства соответствующего государства (рубль – для Российской Федерации, гривна – для Украины, доллар США – для США и т.д.).</p>
        </li>
        <li>
          <p>2.10. Партнер – лицо, оказывающее Сервису услуги по привлечению Пользователей, условия оказания которых описаны в настоящих Правилах.</p>
        </li>
        <li>
          <p>2.11. Платеж — перевод криптовалюты, электронных денег или фиатной валюты от Пользователя к Пользователю или от Пользователя Сервису, а также в обратном направлении.</p>
        </li>
        <li>
          <p>2.12. Платежная система — программно-аппаратный продукт, разработанный третьей стороной и представляющий собой механизм реализации учета денежных обязательств и организации взаиморасчетов между своими Пользователями.</p>
        </li>
        <li>
          <p>2.13. Пользователь — дееспособное физическое лицо старше 18 лет либо юридическое лицо, использующее услуги Сервиса.</p>
        </li>
        <li>
          <p>
            2.14. Сервис — система, предоставляющая Пользователям возможность обмена криптовалюты на электронные деньги и (или) национальную валюту, а также обмен электронных денег и (или) национальной валюты на криптовалюту, расположенная и функционирующая на сайте в сети Интернет по адресу
            {' '}
            <a href={ROUTES.HOME}>{CONTACTS.siteUrl}</a>
            /.
          </p>
        </li>
        <li>
          <p>2.15. Сообщения – письма, передаваемые посредством электронной почты.</p>
        </li>
        <li>
          <p>2.16. Средства – криптовалюта, электронные деньги и фиатная валюта, в соответствии с разделом 5 настоящих Правил.</p>
        </li>
        <li>
          <p>2.17. Услуги сервиса — оказание содействия в проведении Р2Р-операций между физическими лицами по обмену криптовалют, а также иные услуги, информация о которых размещена на витрине Сервиса.</p>
        </li>
        <li>
          <p>2.18. Электронные деньги — денежные средства, находящиеся на счетах Пользователей электронных платежных систем (QIWI, Яндекс Деньги и др.).</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>3. Режим работы сервиса</h3>
      <ol>
        <li>
          <p>3.1. Штатный режим работы:</p>
        </li>
        <li>
          <p>3.1.1. В данном режиме работы заявки Пользователей обрабатываются в течение времени, отведенного регламентом с 09:00 по 22:00 (UTC+3).</p>
        </li>
        <li>
          <p>3.1.2. Поддержка Пользователей ведется операторами на сайте, а также по другим каналам связи способами, указанными на сайте Сервиса.</p>
        </li>
        <li>
          <p>3.2. Ночной режим работы:</p>
        </li>
        <li>
          <p>3.2.1.В данном режиме, работы Средства Пользователей будут зафиксированы в автоматическом режиме при зачислении на Биржу. Поддержка Пользователей ведется операторами на сайте.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>
        4. Правила пользования учетной записью на сайте
        {' '}
        {CONTACTS.name}
      </h3>
      <ol>
        <li>
          <p>
            4.1. Сервис предназначен для использования исключительно в личных целях. Регистрируясь на сайте, Пользователь дает свое согласие на передачу
            {' '}
            {CONTACTS.name}
            {' '}
            достоверных данных о себе в соответствии с процедурой регистрации на Сайте. Пользователь также соглашается с тем, что не будет использовать какой-либо иной аккаунт, кроме своего, а также не будет пытаться получить несанкционированный доступ к аккаунтам других пользователей либо к инфраструктуре Сервиса.
          </p>
        </li>
        <li>
          <p>4.2. Сервис вправе проводить дополнительные проверки информации Пользователя и запрашивать у Пользователя любую необходимую документацию по любой причине, связанной с использованием им услуг Сервиса и/или в качестве подтверждающего доказательства для любой информации, которую Пользователь предоставляет Сервису.</p>
        </li>
        <li>
          <p>4.3. Администрация Сервиса может в любое время и по своему собственному усмотрению отказать Пользователю в возможности открыть аккаунт, заблокировать его или приостановить любую транзакцию до окончания рассмотрения информации, предоставленной Пользователем.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>5. Порядок оказания услуг Сервисом</h3>
      <ol>
        <li>
          <p>5.1. Заказ услуг Сервиса осуществляется Пользователем путем направления Заявки через сайт Сервиса.</p>
        </li>
        <li>
          <p>5.2. Воспользовавшись услугами Сервиса, Пользователь подтверждает, что законно владеет, пользуется и распоряжается криптовалютой, электронными деньгами или фиатной валютой, участвующими в соответствующем Платеже.</p>
        </li>
        <li>
          <p>5.3. Сервис не принимает и не отправляет криптовалюту, электронные деньги или фиатную валюту со счетов или на счета третьих лиц, не являющихся Пользователями. Сервис не оказывает Услуги обмена с использованием банковских карт (счетов), не принадлежащих Пользователю. Сервис не вступает в партнерские отношения с торгово-сервисными предприятиями и не является агентом во взаиморасчетах по любым сделкам Пользователя с третьими лицами.</p>
        </li>
        <li>
          <p>5.4. Путем оформления Заявки Пользователь поручает, а Сервис от своего имени и за счет Пользователя, совершает действия по обмену криптовалюты, электронных денег или фиатной валюты с другим Пользователем.</p>
        </li>
        <li>
          <p>5.5. Срок обработки Заявок Сервисом составляет не более 2-х часов после начала работы Сервиса. Средства фиксируются на момент получения их на бирже.</p>
        </li>
        <li>
          <p>5.6. Размер вознаграждения Сервиса за предоставление услуг по обмену отражается в Заявке и подтверждается Пользователем на одной из страниц пользовательского интерфейса.</p>
        </li>
        <li>
          <p>5.7. В течение отведенного регламентом времени (в зависимости от направления обмена, указывается при создании Заявки) с момента получения криптовалюты, электронных денег или фиатной валюты от Пользователя, в размере, указанном в соответствующей Заявке, Сервис обязан перечислить (передать) полученные криптовалюту, электронные деньги или фиатную валюту соответственно на реквизиты и в размере, указанные Пользователем в Заявке.</p>
        </li>
        <li>
          <p>5.8. В случае, когда в процессе обработки Заявки курс изменяется, Сервисом производится перерасчет заявки по курсу на момент поступления криптовалюты на счет либо производится возврат Средств с учетом комиссии Платежной системы в эквиваленте USDT на момент фиксации курса по Заявке.</p>
        </li>
        <li>
          <p>5.9. Если в период подтверждения перевода Платежной системой возникла задержка подтверждения транзакции, Сервисом производится перерасчет Заявки по курсу на момент поступления криптовалюты на счет либо производится возврат с учетом комиссии платежной системы в эквиваленте USDT на момент фиксации курса по Заявке.</p>
        </li>
        <li>
          <p>5.10. Сумма возврата для целей, указанных в пунктах 5.8 – 5.9 Настоящих правил, не может рассчитываться в криптовалюте.</p>
        </li>
        <li>
          <p>5.11. Обязанность Сервиса по перечислению (передаче) криптовалюты, электронных денег или фиатной валюты Пользователю считается исполненной в момент списания криптовалюты, электронных денег, или фиатной валюты в соответствующей Платежной системе со счета Сервиса, что регистрируется в истории операций соответствующей Платежной системы.</p>
        </li>
        <li>
          <p>5.12. Если Пользователь оплатил заявку, но в силу обстоятельств желает отказаться от обмена, то возврат Средств происходит за вычетом 2% (двух процентов) от суммы оплаты, а также за вычетом комиссии соответствующей Платежной системы. Возврат невозможен в случае нарушения правил обменного пункта. Возврат невозможен в случаях обнаружения высокого риска транзакции более или 90% до прохождения полной верификации личности согласно п 5.22.</p>
        </li>
        <li>
          <p>5.13. Сервис вправе отменить созданную Пользователем заявку на обмен криптовалюты, электронных денег или фиатной валюты, если оплата по такой заявке не поступила на счет сервиса по истечении 30 (тридцати) минут с момента создания такой заявки.</p>
        </li>
        <li>
          <p>5.14. Если при попытке перевода Сервисом Средств на банковскую карту (счет) Пользователя данная карта (счет) блокируются по причине того, что банковская карта (счет) Пользователя либо сам Пользователь находятся в любого рода «черном списке» или «стоп-листе» соответствующей Платежной системы либо фискального органа государства, резидентом которого является Пользователь, Сервис оставляет за собой право в одностороннем порядке отказаться от предоставления услуг по обмену и произвести возврат Средств Пользователю с удержанием комиссии в размере 20% (двадцати процентов) от текущей суммы обмена.</p>
        </li>
        <li>
          <p>5.15. Возврат Средств в случае, предусмотренном п. 5.13 настоящих Правил, возможен при предоставлении Пользователем документов согласно требованию Сервиса.</p>
        </li>
        <li>
          <p>
            5.16. Обменный сервис работает по правилам и нормам регулятора
            {' '}
            <a href="https://www.cysec.gov.cy">https://www.cysec.gov.cy</a>
          </p>
        </li>
        <li>
          <p>5.17. В случае обнаружения подозрительной активности в процессе оформления Заявки Пользователем, Сервис, во избежание ущерба, вправе приостанавливать выполнение таких операций до выяснения причин такой активности.</p>
        </li>
        <li>
          <p>5.18. Сервис вправе отказать в выполнении обмена, если передача криптовалюты, электронных денег или фиатной валюты на счет Сервиса была произведена без оформления Заявки при помощи пользовательских интерфейсов на Сайте Сервиса. Криптовалюта, электронные деньги или фиатная валюта, перечисленные на счет Сервиса Пользователем без оформления Заявки при помощи пользовательских интерфейсов на Сайте Сервиса, могут быть возвращены Пользователю по запросу с учетом вычета комиссии платежной системы в соответствии с ограничениями, установленными настоящими Правилами.</p>
        </li>
        <li>
          <p>5.19. Сервис имеет право отказать в предоставлении услуг Пользователю в случае непредоставления Пользователем полных и достаточных данных, необходимых для его идентификации, и заблокировать Средства, полученные от Пользователя до момента сообщения им таких данных.</p>
        </li>
        <li>
          <p>5.20. Сервис оказывает услуги только по обмену криптовалюты на электронные деньги или фиатную валюту, либо наоборот. Сервис не производит валютные операции в отношении национальных денег и не подпадает под национальное и международное законодательство о валютном регулировании и валютном контроле.</p>
        </li>
        <li>
          <p>
            5.21. Сервис прилагает разумные усилия для обеспечения доступа к услугам и сайту
            {' '}
            {CONTACTS.name}
            {' '}
            в соответствии с настоящими Правилами. Тем не менее, Сервис может приостановить использование сайта для технического обслуживания и приложит достаточные усилия, чтобы предварительно уведомить Пользователя об этом. Таким образом, пользователь соглашается с тем, что принимает на себя риски, связанные с тем фактом, что не всегда может пользоваться услугами Сервиса или выполнять срочные транзакции с использованием учетной записи Пользователя.
          </p>
        </li>
        <li>
          <p>5.22. Для проверки транзакций на предмет противодействия отмывания денежных средств обменный пункт использует сервис AMLbot. Более подробно с данным сервисом Вы можете ознакомиться по ссылке: amlbot.com</p>
        </li>
        <li>
          <p>5.23. Сервис имеет право аннулировать обмен при возникновении подозрений о получении Пользователем Средств в результате любой противоправной деятельности в соответствии с законодательством государства размещения Сервиса или государства, резидентом которого является Пользователь. Если средства поступили с сайтов, относящихся к противоправной деятельности( &lquot;Гидра&rquot;, &lquot;Даркнет&rquot;и прочее) — данные средства блокируются. При проведении AML проверки обменный пункт ориентируется на подробный анализ по конкретной транзакции. В случае если подробный анализ выявляет параметры высокого риска более или 90% -необходима полная верификация личности согласно п 8.2. Выплата по данным заявкам производится по заградительному тарифу согласно правил п.8.3.</p>
        </li>
        <li>
          <p>5.24. При проверке транзакций на предмет противодействия отмывания денежных средств обменный пункт ориентируется на параметры высокого риска. Параметрами высокого риска являются : &lquot;Dark Service&rquot;; &lquot;Dark Market&rquot;; &lquot;Exchange Fraudulent&rquot;; &lquot;Scam&rquot;; &lquot;Illegal Service&rquot;; &lquot;Stolen&rquot;; &lquot;Mixer&rquot;; &lquot;Ransom&rquot;; &lquot;Gambling&rquot;. Более подробно с описанием параметров высокого риска Вы можете ознакомиться по ссылке: amlbot.com/ru/chto-my-analiziruem/</p>
        </li>
        <li>
          <p>5.25. В ночное время заявки обрабатываются оператором в ручном режиме . В случае если в Вашей заявке допущена ошибка (или если Ваша заявка попала на проверку) она будет выплачена после проверки администратора в порядке очереди начиная с 9:00 . Так же в случае форс-мажорных обстоятельств заявка будет выплачена в порядке очереди начиная с 9:00.</p>
        </li>
        <li>
          <p>5.26. В случае возврата Средства, полученные от Пользователя в ночное время, могут быть возвращены в рабочее время обменного пункта в эквиваленте USDT на момент начала работы Сервиса.</p>
        </li>
        <li>
          <p>5.27. При работе с Заявками Пользователей, администрация Сервиса вправе:</p>
        </li>
        <li>
          <p>5.27.1. Прекратить общение с Пользователем, нарушающим этикет делового общения, задающим вопросы, не связанные с предоставлением Сервисом услуг или не предоставляющим Сервису необходимой для оказания услуг информации.</p>
        </li>
        <li>
          <p>5.27.2. При необходимости заблокировать проведение операции и Средства Пользователя до предоставления им полных и достаточных для идентификации его личности данных.</p>
        </li>
        <li>
          <p>5.27.3. Привлекать для исполнения своих обязательств сторонних исполнителей.</p>
        </li>
        <li>
          <p>5.27.4. Распоряжаться по собственному усмотрению любыми Средствами, поступившими на счет Сервиса без создания Заявки.</p>
        </li>
        <li>
          <p>5.27.5. Отправлять Пользователю на указанный им в Аккаунте e-mail информацию о состоянии процесса обмена, а также иную информацию, касающуюся деятельности Сервиса, в том числе рекламного характера. Отписаться от рекламных рассылок Пользователь может, нажав на соответствующую кнопку в полученном письме.</p>
        </li>
        <li>
          <p>5.28. Обменный пункт принимает транзакции только через стандартные блокчейны криптовалют. Мы не поддерживаем другие альтернативные блокчейны.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>6. Стоимость услуг</h3>
      <ol>
        <li>
          <p>6.1. Тарифы на оказание услуг определяются Сервисом и публикуются на сайте Сервиса. Администрация Сервиса вправе менять тарифы без дополнительного уведомления Пользователей.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>7. Налогообложение операций Пользователя</h3>
      <ol>
        <li>
          <p>7.1. Сервис не является налоговым агентом для Пользователя и не осуществляет исчисление налоговых платежей Пользователя, а также не обязан уведомлять Пользователя относительно его налоговых издержек. Пользователь обязуется самостоятельно выплачивать все налоги в соответствии с налоговым законодательством юрисдикции, где Пользователь является налоговым резидентом.</p>
        </li>
        <li>
          <p>7.2. Никакое взаимодействие Пользователя с Сервисом не может пониматься как установление между Пользователем и Сервисом агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного найма, либо любых иных правоотношений, прямо не предусмотренных Правилами Сервиса.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>8. KYC & AML</h3>
      <ol>
        <li>
          <p>
            8.1. Сервис
            {' '}
            {CONTACTS.name}
            {' '}
            осуществляет свою деятельность на основании законодательства государства, указанного в п. 1.3 настоящих Правил, а также ратифицированных международных соглашений:
          </p>
        </li>
        <li>
          <p>8.1.1. Guidance for a risk-based approach to virtual assets and virtual asset service providers (FATF).</p>
        </li>
        <li>
          <p>8.1.2. 5AMLD EU — Directive (EU) 2018/843 of the European Parliament and of the Council of 30 May 2018 amending Directive (EU) 2015/849 on the prevention of the use of the financial system for the purposes of money laundering or terrorist financing, and amending Directives 2009/138/EC and 2013/36/EU (Text with EEA relevance).</p>
        </li>
        <li>
          <p>8.2. Обращаем Ваше внимание, что сервисом производится проверка транзакций на предмет вывода криптовалюты с нелегальных сервисов. В случае, если процент риска 90% и более — потребуется полная верификация личности. Инструкция верификации личности предоставляется оператором на сайте.</p>
        </li>
        <li>
          <p>8.3. Заградительный тариф -это тариф направленный против оборота высокорискованных активов. Выплата по данному тарифу составляет минус 20% от суммы в заявке.</p>
        </li>
        <li>
          <p>8.4. В целях минимизации рисков легализации (отмывания) денежных средств и финансирования терроризма, Сервис оставляет за собой право отказаться от оказания услуг по обмену на любой стадии в случае предположения, что обмен любым образом связан с целями легализации (отмывания) денежных средств, финансированием терроризма или иной противоправной деятельности согласно законодательству государства размещения Сервиса, государства, резидентом которого является Пользователь, либо согласно международному законодательству.</p>
        </li>
        <li>
          <p>8.5. Защита персональных данных Пользователей обеспечивается Сервисом в соответствии с действующим законодательством государства размещения Сервиса и Конвенции о защите частных лиц в отношении автоматизированной обработки данных личного характера (СEД № 108).</p>
        </li>
        <li>
          <p>8.6. Способы обработки и защиты персональных данных Пользователей регулируются Положением об обработке и защите персональных данных, опубликованным на сайте Сервиса.</p>
        </li>
        <li>
          <p>8.7. В случае обнаружения фальсификации (компрометации) коммуникационных потоков или оказания любого негативного влияния на нормальную работу программного кода Сервиса, имеющей прямое или косвенное отношение к Заявке Пользователя, исполнение Заявки Сервисом приостанавливается, а по уже полученным средствам производится перерасчет параметров Заявки в соответствии с действующими условиями или, в случае несогласия Пользователя с перерасчетом, возврат Средств на реквизиты Пользователя.</p>
        </li>
        <li>
          <p>8.8. Любые споры, связанные с условиями настоящих Правил, стороны оферты обязуются урегулировать путем проведения переговоров. В случае недостижения соглашения, все споры подлежат разрешению в соответствии с законодательством государства нахождения Ответчика.</p>
        </li>
        <li>
          <p>8.9. Информация по обменным операциям сохраняется в базе данных Сервиса и является приоритетным источником, на который ориентируются стороны оферты, установленной настоящими Правилами, в спорных ситуациях.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>9. Ответственность</h3>
      <ol>
        <li>
          <p>9.1. Сервис не несет ответственности перед Пользователем за финансовые потери, вызванные противоправными действиями третьих лиц.</p>
        </li>
        <li>
          <p>9.2. Сервис не несет ответственности за любые отложенные или нереализованные Заявки, вызванные ошибкой Платежной системы или банка, указанных Пользователем в оформленной Заявке. Пользователь соглашается с тем, что в таком случае все претензии будут направлены в соответствующую Платежную систему или банк. Сервис по просьбе Пользователя оказывает содействие в предоставлении документов, подтверждающих использованием услуг Сервиса по обмену, при подаче Пользователем жалобы или требования администрации соответствующей Платежной системы или банку.</p>
        </li>
        <li>
          <p>9.3. Сервис не проверяет правомочность и законность владения Пользователем криптовалютой, электронными деньгами или фиатной валютой, участвующими в конкретной Операции. Сервис презюмирует добросовестность и легальность владения, пользования и распоряжения Пользователем банковских карт (счетов) и Средств на них, указываемых Пользователем при Платеже. Сервис не несет ответственности за владение, пользование и распоряжение Пользователем банковскими картами (счетами) и Средствами, ему не принадлежащими. Все риски и ответственность за владение, пользование и распоряжение банковскими картами (счетами) и Средствами на них, лежат на Пользователе.</p>
        </li>
        <li>
          <p>9.4. Пользователь обязан своевременно уведомлять администрацию Сервиса об изменениях в своем адресе электронной почты и номере телефона путем корректировки указанных данных в своем Аккаунте. В противном случае, Сервис не гарантирует получение Пользователем уведомлений о безопасности и не несет ответственности за негативные последствия для Пользователя в результате компрометации по независящим от Сервиса причинам его учетных данных для входа в Аккаунт.</p>
        </li>
        <li>
          <p>
            9.5. Пользователь обязан немедленно уведомить администрацию Сервиса о любом несанкционированном использовании учетной записи Пользователя или пароля, компрометации учетных данных, предполагаемом взломе Аккаунта или любом другом нарушении безопасности по электронной почте
            {' '}
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </p>
        </li>
        <li>
          <p>9.6. Пользователь обязан не использовать средства для сокрытия своего действительного местоположения. Пользователь обязан сообщать администрации Сервиса по ее запросу свое точное и истинное местоположение. Если Сервис определит, что активность Пользователя является подозрительной или связана с любого рода противоправной деятельностью, Сервис может приостановить действие Аккаунта, заблокировать невыполненные либо отклонить последующие транзакции.</p>
        </li>
        <li>
          <p>9.7. Пользователь несет ответственность за достоверность и полноту информации и данных, которые он предоставил при регистрации на сайте Сервиса. В случае, если Пользователь ввел недостоверные либо некорректные личные данные или предоставил неверные данные для исполнения Заявки, Сервис не несёт ответственности за любые убытки Пользователя, возникшие в результате таких действий, независимо от их преднамеренности.</p>
        </li>
        <li>
          <p>
            9.8. Сервис не несет ответственности в случаях, когда Пользователь обращается к подложному сайту либо телеграмм-аккаунту, имитирующим настоящий адрес сайта Сервиса и его телеграмм-аккаунт («зеркалу»). Актуальные адрес в сети Интернет сайта Сервиса и его телеграмм-аккаунт указаны на сайте Сервиса
            {' '}
            <a href={ROUTES.HOME}>
              {CONTACTS.siteUrl}
              /
            </a>
            .
          </p>
        </li>
        <li>
          <p>9.9. Использование Сервиса в целях осуществления любого рода противоправных действий запрещено.</p>
        </li>
        <li>
          <p>
            9.10. Все услуги Сервиса предоставляются без каких-либо явных или подразумеваемых гарантий, в частности, без подразумеваемых гарантий товарной пригодности и пригодности для определенной цели. Сервис не гарантирует, что все услуги Сервиса, а также сайт
            {' '}
            {CONTACTS.name}
            {' '}
            будут доступны в 100% случаев для удовлетворения потребностей Пользователя. Сервис будет стремиться предоставить Пользователю свои услуги как можно скорее, но нет никаких гарантий, что доступ не будет прерван или что не будет никаких задержек, сбоев, ошибок, упущений или потери передаваемой информации, в том числе по вине третьих сторон.
          </p>
        </li>
        <li>
          <p>9.11. В случае принятия настоящих Правил, Пользователь подтверждает, что:</p>
        </li>
        <li>
          <p>9.11.1. им предоставлена полная и правдивая информация о себе, а также подлинные идентификационные данные.</p>
        </li>
        <li>
          <p>9.11.2. он не является участником операций или сделок по отмыванию денег, в соответствии с правилами KYC & AML.</p>
        </li>
        <li>
          <p>9.11.3. его доход не связан с осуществлением любой противоправной деятельности в соответствии с законодательством государства размещения Сервиса или государства пребывания Пользователя, в том числе в соответствии с правилами KYC & AML.</p>
        </li>
        <li>
          <p>9.11.4. он не состоит в любого рода «черных списках», «стоп-листах» или перечнях лиц, причастных к легализации (отмыванию) доходов и финансированию терроризма на территории страны его пребывания.</p>
        </li>
        <li>
          <p>9.11.5. он не привлекается правоохранительными либо фискальными органами государства его пребывания к юридической ответственности за легализацию (отмывание) доходов и финансирование терроризма, а равно за совершение мошенничества или любых других противоправных действий, связанных с хищением чужого имущества.</p>
        </li>
        <li>
          <p>9.11.6. торговля, а также любые действия, связанные с оборотом криптовалюты, не являются противоправными в соответствии с законодательством государства пребывания Пользователя.</p>
        </li>
        <li>
          <p>9.12. Пользователь обязуется не нарушать работу Сервиса путем вмешательства в его программную или аппаратную части, а также путем искажения параметров (команд), передаваемых Сервису.</p>
        </li>
        <li>
          <p>9.13. Если в результате действий Пользователя, вне зависимости от наличия у него умысла или по неосторожности, Сервису был нанесен ущерб, Пользователь обязуется компенсировать такой ущерб в полном размере.</p>
        </li>
        <li>
          <p>9.14. В случае, если Пользователю по Заявке поступила оплата больше установленной в Заявке, Пользователь обязуется произвести возврат средств на предоставленные Сервисом реквизиты. Комиссия за перевод в таком случае оплачивается обменным пунктом.</p>
        </li>
        <li>
          <p>9.15. Пользователь признает и соглашается с тем, что Сервис не выступает в качестве финансового консультанта, не предоставляет консультационные услуги по инвестициям, а любая информация, передаваемая Сервисом Пользователю не может рассматриваться как совет или руководство к действию.</p>
        </li>
        <li>
          <p>9.16. Пользователь осознает и принимает на себя все риски, связанные с оборотом криптовалюты.</p>
        </li>
      </ol>
    </section>
    <section>
      <h3>10. Форс-мажор</h3>
      <ol>
        <li>
          <p>10.1. Пользователь или Сервис не несут ответственности друг перед другом за невыполнение обязательств, связанных с оказанием Сервисом услуг по обмену, вызванное обстоятельствами, возникшими помимо воли и желания сторон, которые нельзя было предвидеть или избежать, включая объявленную или фактическую войну, гражданские волнения, эпидемии, землетрясения, наводнения, пожары и другие стихийные бедствия, действия органов власти и прочие непреодолимые обстоятельства и не могут заявлять ни о каких убытках или ущербе, возникших из-за таких обстоятельств.</p>
        </li>
        <li>
          <p>10.2. Сторона, которая не исполняет свое обязательство вследствие действия непреодолимой силы, должна известить другую Сторону о препятствии и его влиянии на исполнение обязательств без промедления, но не позднее 3 (трех) календарных дней с момента наступления указанных обстоятельств.</p>
        </li>
        <li>
          <p>10.3. Сторона, не известившая другую Сторону о невозможности исполнения своих обязательств по настоящему договору, теряет право ссылаться на такую невозможность.</p>
        </li>
        <li>
          <p>
            10.4. При совершении некорректных транзакций на обменном сервисе, для закрытия открытых смартконтрактов и возврата цифровых и денежных средств, клиенту необходимо провести повторную транзакцию с суммой, которая была задана в заявке. В противном случае по истечении 48 часов с момента создания заявки средства будут перенаправлены регулятору
            {' '}
            <a href="https://www.cysec.gov.cy">https://www.cysec.gov.cy</a>
            . По всем возникшим вопросам, для разрешения спорных моментов просьба обращаться в поддержку сервиса.
          </p>
        </li>
      </ol>
    </section>
    <section>
      <h3>11. Заключительные положения</h3>
      <ol>
        <li>
          <p>11.1. Информация о Пользователе и о его операциях не хранится на сервере сайта Сервиса. По запросу Пользователя доступ к аккаунту может быть ограничен либо удален.</p>
        </li>
        <li>
          <p>11.2. Срок ответа Сервиса на запросы Пользователя составляет до пяти рабочих дней с момента получения соответствующего запроса Пользователя.</p>
        </li>
        <li>
          <p>11.3. Условия настоящих Правил согласовываются с Пользователем в электронной форме при регистрации. Согласие с Правилами, опубликованными в электронной форме, является действительным акцептом полного содержания настоящих Правил.</p>
        </li>
        <li>
          <p>
            11.4. Информация, размещенная на сайте Сервиса
            {' '}
            <a href={ROUTES.HOME}>
              {CONTACTS.siteUrl}
              /
            </a>
            , включая все графические изображения, текстовую информацию, коды программ и т.д. защищена национальным и международным законодательством об авторских правах и смежных с ними. Несанкционированное копирование материалов не допускается и влечет за собой полное возмещение причиненных Сервису убытков.
          </p>
        </li>
      </ol>
    </section>
    <section>
      <h3>12. Контактные данные</h3>
      <ol>
        <li>
          <p>
            12.1. Вы можете пообщаться с сотрудниками в рабочее время в онлайн-чате на сайте
            {' '}
            <a href={ROUTES.HOME}>{CONTACTS.siteUrl}</a>
            .
          </p>
        </li>
        <li>
          <p>
            12.2. Вы также можете отправить письмо на адрес электронной почты:
            {' '}
            <a href={`mailto:${CONTACTS.email}`}>{CONTACTS.email}</a>
          </p>
        </li>
        <li>
          <p>
            12.3. Написать в наш Телеграм:
            {' '}
            <a href={CONTACTS.telegramLink} target="_blank" rel="noopener noreferrer">{CONTACTS.telegram}</a>
          </p>
        </li>
      </ol>
    </section>
  </Container>
);

export default Rules;
