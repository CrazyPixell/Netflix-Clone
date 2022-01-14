import './SectionFAQ.css';
import FAQItem from './FAQItem';
import Form from '../Form/Form';

const SectionFAQ = ({ language, onSignIn }) => {
  return (
    <section className='section faq'>
      <h2 className='faq__title'>
        {language === 'russian'
          ? 'Распространенные вопросы'
          : 'Frequently Asked Questions'}
      </h2>
      <FAQItem
        question={
          language === 'russian'
            ? 'Что из себя представляет Netflix ?'
            : 'What is Netflix ?'
        }
        answer={
          language === 'russian'
            ? `Netflix — это стриминговый сервис, позволяющий смотреть разнообразные удостоенные наград фильмы, сериалы, аниме, документальные фильмы и многое другое на тысячах устройств с подключением к интернету.

        Вы можете смотреть сколько угодно и когда угодно без рекламы по фиксированной низкой цене за месяц. Вы всегда сможете найти что-нибудь новое — мы добавляем сериалы и фильмы каждую неделю!`
            : `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
        }
      />
      <FAQItem
        question={
          language === 'russian'
            ? 'Сколько Netflix ?'
            : 'How much does Netflix cost ?'
        }
        answer={
          language === 'russian'
            ? `Смотрите Netflix на смартфоне, планшете, Smart TV, ноутбуке или телеприставке за единую фиксированную ежемесячную плату. Стоимость планов составляет от 599 ₽ до 999 ₽ в месяц. Никаких лишних расходов и обязательств.`
            : `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from RUB599 to RUB999 a month. No extra costs, no contracts.`
        }
      />
      <FAQItem
        question={
          language === 'russian' ? 'Где смотреть ?' : 'Where can i watch ?'
        }
        answer={
          language === 'russian'
            ? `Смотрите где угодно, когда угодно. Войдите в свой аккаунт Netflix и смотрите через интернет на сайте netflix.com на персональном компьютере или любом устройстве с подключением к интернету и приложением Netflix, включая телевизоры Smart TV, смартфоны, планшеты, плееры для потокового видео и игровые консоли.

            Также вы сможете загружать свои любимые сериалы через приложение для iOS, Android или Windows 10. Загружайте видео для просмотра в поездках без подключения к интернету. Возьмите с собой Netflix куда угодно.`
            : `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
        }
      />
      <FAQItem
        question={
          language === 'russian'
            ? 'Как отменить подписку ?'
            : 'How do I cancel ?'
        }
        answer={
          language === 'russian'
            ? `Netflix — гибкий сервис. Никаких запутанных контрактов и обязательств. Вы можете легко отменить подписку на сайте в два клика. Никакой платы за отмену не взимается, открыть или закрыть аккаунт можно когда угодно.`
            : `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
        }
      />
      <FAQItem
        question={
          language === 'russian'
            ? 'Что можно посмотреть на Netflix ?'
            : 'What can I watch on Netflix ?'
        }
        answer={
          language === 'russian'
            ? `Netflix предлагает огромную библиотеку полнометражных фильмов, документальных фильмов, сериалов, аниме, удостоенного наград оригинального контента Netflix и многое другое. Смотрите сколько угодно и когда угодно.`
            : `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`
        }
      />
      <FAQItem
        question={
          language === 'russian'
            ? 'Подходит ли контент Netflix для детей ?'
            : 'Is Netflix good for kids ?'
        }
        answer={
          language === 'russian'
            ? `В подписку включен пакет Netflix Kids, который обеспечивает родителям необходимый контроль, а детям возможность получать удовольствие от просмотра фильмов и сериалов для всей семьи в своем собственном пространстве.

            Для детских профилей используется родительский контроль с использованием PIN-кода, который позволяет указать рейтинг контента, который могут смотреть дети, и заблокировать определенные видео, которые вы не хотите, чтобы смотрели дети.`
            : `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
        }
      />
      <p className='faq__form-question'>
        {language === 'russian'
          ? 'Готовы смотреть? Введите адрес электронной почты, чтобы оформить или возобновить подписку.'
          : 'Ready to watch? Enter your email to create or restart your membership.'}
      </p>
      <Form className='faq__form' language={language} onSignIn={onSignIn} />
    </section>
  );
};

export default SectionFAQ;
