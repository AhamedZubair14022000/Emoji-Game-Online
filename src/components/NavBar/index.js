// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  //   const scoreItem = () => {
  //     if (isGameInProgress) {
  //       return (
  //         <div className="score-container">
  //           <p className="score">Score: {currentScore}</p>
  //           <p className="score">topScore: {topScore}</p>
  //         </div>
  //       )
  //     }
  //     return ''
  //   }

  return (
    <nav className="navbar-container">
      <div className="title-width-score-container">
        <div className="logo-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        <div>
          {isGameInProgress && (
            <div className="score-container">
              <p className="score">Score: {currentScore}</p>
              <p className="score">TopScore: {topScore}</p>
            </div>
          )}
          {/* {scoreItem()} */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar
