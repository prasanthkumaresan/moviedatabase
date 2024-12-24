import './cast.css'

const Cast = props => {
  const {person} = props
  const {character, name, profile} = person
  return (
    <li className="cast-maincont">
      <img
        src={`https://image.tmdb.org/t/p/w500${profile}`}
        alt={name}
        className="cast-profileimg"
      />
      <h1 className="cast-mainname">{name}</h1>
      <p className="cast-chrname">{character}</p>
    </li>
  )
}

export default Cast
