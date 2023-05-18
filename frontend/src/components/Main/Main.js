import CardList from '../CardList/CardList';
import './Main.css';

function Main({ cardsCount, cards, isLoading }) {

  return (
    <main className='main'>
      {
        isLoading ?
          <p className='main__preloader'>
            Загрузка...
          </p> :
          <CardList
            cardsCount={cardsCount}
            cards={cards}
          />
      }
    </main>
  )
}

export default Main;
