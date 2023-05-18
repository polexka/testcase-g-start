import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import { api } from './utils/Api';
import {
  cardHeight,
  cardWidth,
  footerHeight,
  headerHeight,
  sideLeftWidth,
  sideRightWidth
} from './utils/constants';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [cards, setCards] = useState([]);
  const [cardsCount, setCardsCount] = useState(0);
  const [shownStart, setStart] = useState(0);
  const [isLoading, setLoading] = useState(false);

  // подгружает нужное количество карточек
  function uploadCards(old, limit) {
    setLoading(true);
    api.getCards(old + 1, limit - old)
      .then((res) => {
        setCards([...cards, ...res]);
      })
      .finally(() => {
        setLoading(false);
      })
  }

  function listCards(right) {
    if (right) {
      uploadCards(cards.length, cardsCount + cards.length);
      setStart(shownStart + cardsCount);
    } else {
      setStart(shownStart - cardsCount);
    }
  }

  function updateWindowSize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  function calculateCards() {
    // расчет размеров рабочей области
    let width = windowSize.width - sideLeftWidth - sideRightWidth;
    let height = windowSize.height - headerHeight - footerHeight;

    if (width < 0 || height < 0) {
      width = 0;
      height = 0;
    }

    //расчет нужного количества карточек
    const cardsPerRow = Math.floor(width / (cardWidth));
    const cardsPerColumn = Math.floor(height / (cardHeight));
    const totalCards = cardsPerRow * cardsPerColumn;

    // если карточек требуется больше, чем загружено, подгружаем карточки
    if (totalCards > cards.length) {
      uploadCards(cards.length, totalCards);
    }

    setCardsCount(totalCards);
  };

  useEffect(() => {
    calculateCards();
    window.addEventListener('resize', updateWindowSize);

    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    calculateCards();
  }, [windowSize]);

  return (
    <div className="app">
      <Header />
      <SideBar
        right={false}
        listCards={listCards}
        shownStart={shownStart}
      />
      <Main
        isLoading={isLoading}
        cardsCount={cardsCount}
        cards={cards.slice(shownStart, cardsCount+shownStart)}
      />
      <SideBar
        right={true}
        listCards={listCards}
        shownStart={shownStart}
      />
      <Footer />
    </div>
  );
}

export default App;
