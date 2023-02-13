import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const ANAKIN_IMAGE = "https://kino-teatr.ua/uk/person_photos/pitt-brad-1051.phtml?photo_id=30057";
const RAY_IMAGE = "https://poltavawave.com.ua/p/vavilon-nova-komediina-drama-vid-oskaronosnogo-rezhisera-739558";
root.render(
  <React.StrictMode>
     <App 
      author={
        {
          name: "Brad Pitt",
          photo: ANAKIN_IMAGE,
          nickname: "@PittOfficial"
        }
      }
      content="WTF? I have the new movie? Whith Margot Robbie? WOW......."
      image={RAY_IMAGE}
      date={"19 Jan."}
    />


    
  </React.StrictMode>
);

