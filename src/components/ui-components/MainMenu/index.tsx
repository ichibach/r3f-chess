import {Container, BackgroundVideo, Menu, MenuContainer, MenuTitle ,MenuItem} from "./styles";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {initGame, selectGame} from "../../../features/game/gameSlice";
import {GameMode} from "../../../features/game/GameState";


function MainMenu () {

    const dispatch = useAppDispatch();
    const { mode } = useAppSelector(selectGame);
    
    const selectGameMode = ( gamemode: GameMode) => dispatch(initGame(gamemode));
    
  
    return (
      <>{ mode == null &&
        <Container>
          <BackgroundVideo src="/AmazingChessVideo.mp4" muted autoPlay loop />
          <Menu>
            <MenuContainer>
              <MenuTitle>Шахматы</MenuTitle>

              <MenuItem onClick={() => selectGameMode('single')}>Одиночная игра</MenuItem>
              <MenuItem disabled >Играть с ботом</MenuItem>
              <MenuItem disabled >Игра по сети</MenuItem>

            </MenuContainer>
          </Menu>
        </Container>
      }
      </>
    );
}

export default MainMenu;