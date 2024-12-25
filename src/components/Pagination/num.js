import './num.css'

const Pagination = ({renderList, elPerPage, currentPgsetter, currentPage}) => {
  const list = []
  for (let i = 1; i <= Math.ceil(renderList.length / elPerPage); i += 1) {
    list.push(i)
  }
  console.log(currentPage)
  return (
    <ul className="pagination-cont">
      {list.map(each => (
        <button
          id={each}
          onClick={e => currentPgsetter(e.target.id)}
          className={
            each === parseInt(currentPage) ? 'page-btn active-btn' : 'page-btn'
          }
          type="button"
          key={each}
        >
          {each}
        </button>
      ))}
    </ul>
  )
}

export default Pagination
