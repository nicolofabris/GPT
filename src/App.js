import './App.css'
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import messageIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span>
            <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query"><img src={messageIcon} alt="query" />What is programming?</button>
              <button className="query"><img src={messageIcon} alt='query' />How to use an API?</button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="rocket" className="listItemsImg" />Upgrade</div>
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
