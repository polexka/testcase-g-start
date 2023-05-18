import Card from '../Card/Card';
import './CardList.css';

function CardList({ cards }) {
  return (
    <ul className='cards'>
      {
        cards.map((card) => (
          <li key={card.id}>
            <Card
              title={card.name}
            />
          </li>
        ))
      }
    </ul>
  )
}

export default CardList;