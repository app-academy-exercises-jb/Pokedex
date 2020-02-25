import React from 'react'

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)


  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // debugger
    return (<div>
      <ul>
        {this.props.pokemon.map(p => (
          <li>
            p.name
            <img src={p.image_url} />
          </li>
        ))}
      </ul>
    </div>)
  }

}

export default PokemonIndex;