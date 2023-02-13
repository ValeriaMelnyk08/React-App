import Pitt from './img/Pitt.jpg';
import Babylon from './img/Babylon.jpeg';
import Com from './img/Com.svg';
import Repeat from './img/Repeat.svg';
import Like from './img/Like.svg';
import Down from './img/Down.svg';
import './App.css';


    function App(props) {
      return (
        <div className="post">
          <div className="postHead">
            <div className="postPhoto">
              <img src={Pitt} alt="" />
            </div>
            <div className="postHeadName">{props.author.name}</div>
            <div className="postHeadNick">{props.author.nickname}</div>
            <div className="postHeadDate">{props.date}</div>
          </div>
          <div className="postMainPhoto">
            <div className="postMainText">{props.content}</div>
            <div className="postMainImg"><img src={Babylon} alt="{props.content}" /></div>
          </div>
          <div className='icons'>
            <div className='comment'> <img src={Com} alt="{props.content}" /> </div>
            <div className='repeat'> <img src={Repeat} alt="{props.content}"/> </div>
            <div className='like'> <img src={Like} alt="{props.content}"/> </div>
            <div className='download'> <img src={Down} alt="{props.content}"/> </div>
          </div>
        </div>
      );
    }
    
   
     

export default App;
