import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  const {id, name, imageUrl, description} = planetsList

  return (
    <div className="planet-container">
      <h1 className="planet-heading">PLANETS</h1>
      <img src={imageUrl} alt={`planet ${name}`} className="image-width" />
      <h1 className="plant-name">{name}</h1>
      <p className="plant-description">{description}</p>
    </div>
  )
}

export default PlanetItem
