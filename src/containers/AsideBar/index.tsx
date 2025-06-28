import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { Button, Input, SaveButton } from '../../styles'
import type { RootReducer } from '../../store'
import { changeSearch, toggleFavorites } from '../../store/reducers/filter'
import { useNavigate } from 'react-router-dom'

type Props = {
  showFilters?: boolean
}

const AsideBar = ({ showFilters = false }: Props) => {
  const dispatch = useDispatch()
  const { search, showFavorites } = useSelector(
    (state: RootReducer) => state.filter
  )
  const navigate = useNavigate()

  return (
    <S.Aside>
      <div>
        {showFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar contatos..."
              onChange={(e) => dispatch(changeSearch(e.target.value))}
              value={search}
            />
            <SaveButton onClick={() => dispatch(toggleFavorites())}>
              {showFavorites ? 'Mostrar Todos' : 'Apenas Favoritos'}
            </SaveButton>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de contatos
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
export default AsideBar
