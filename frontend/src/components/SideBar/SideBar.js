import './SideBar.css';

function SideBar({ right, listCards, shownStart }) {
  function handleClick() {
    listCards(right);
  }

  return (
    <aside
      className={'sidebar ' + (right ? 'sidebar_right' : 'sidebar_left')}
    >
      <p className='sidebar__text'>
        {right ? 'Right' : 'Left'} side
      </p>
      {
        right ?
          <button
            className='sidebar__button sidebar__button_right'
            type='button'
            onClick={handleClick}
          /> :
          (shownStart <= 0) ?
            <></> :
            <button
              className='sidebar__button sidebar__button_left'
              type='button'
              onClick={handleClick}
            />
      }

    </aside>
  )
}

export default SideBar;