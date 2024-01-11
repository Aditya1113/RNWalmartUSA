import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Counter from './Components/Counter';

const App = () => {

  const [count,setCount] = useState(0)

  useEffect(()=>{
    SplashScreen.hide();
  },[]);

    const clickHandler=(val)=>{


        // setCount(count+1)
        setCount(prevCount=>prevCount+val)  // optimised
    }

  return <Counter count={count} clickHandler={clickHandler} />;
};

export default App;
