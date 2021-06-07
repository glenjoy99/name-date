import React, {useEffect, useState} from 'react'
import 'firebase/firestore';
import 'firebase/auth';
import "./config/firebase.js";
import TinderCard from 'react-tinder-card';
import './TinderCards.css'
import './index.css'
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

function Body() {

    const [db, setDB] = useState({
      list:[],
      frame:false,
    });

    useEffect(()=> {
      fetch("https://www.behindthename.com/api/random.json?key=gl543253520&number=3&usage=eng").then(response => {
        response.json().then(data => {
          if (db.frame == false) { //so names are only updated every other swipe
            setDB({
              list:data.names.concat(db.list),
              frame:!db.frame, //idk
            });
          }
        })
      }).catch(error => {
        console.log(error);
      })
    }, [db.frame]); 

    const swiped = (direction, name) => {
      db.list.splice(db.list.indexOf(name), 1);
      var test = db.list;
      console.log(test);
      setDB({
        list:test,
        frame:!db.frame, //idk
      });
      
    }
    
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
      swiped(name);
      setDB({
        list:db.list,
        frame:!db.frame, //idk
      });
    }

    return (
      <div className="body">
        <div className='cardContainer'>
            {db.list.map((n) =>
              <TinderCard onCardLeftScreen={() => {outOfFrame(n)}} className="swipe" key={n} preventSwipe={["up", "down"]}>
                <div style={{ backgroundImage: 'url("https://source.unsplash.com/1600x900/?baby")' }}
                className='card'>
                  <h3>{n}</h3>
                </div>
              </TinderCard>
            )}
        </div>
        <div className="controls">
          <div className="right">
            <IconButton aria-label="swipe-right">
              <CheckIcon />
            </IconButton>
          </div>
          <div className="left">
            <IconButton aria-label="swipe-left">
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </div>
    )
}

export default Body = React.memo(Body)
