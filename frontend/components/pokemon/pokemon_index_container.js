import { connect } from 'react-redux'
import { requestAllPokemon } from '../../actions/pokemon_actions'
import { selectAllPokemon } from '../../reducers/selectors'
import PokemonIndex from './pokemon_index'

const mapStateToProps = (state) => {
  return {
    pokemon: selectAllPokemon(state)
  }
}

const mapDispatchToProps = { }

export default connect(
  mapStateToProps,
  { requestAllPokemon }
)(PokemonIndex)