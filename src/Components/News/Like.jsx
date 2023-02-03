import React, {useState} from 'react'
import SvgHeart from '../icons/Heart';
import SvgHeartOutline from '../icons/HeartOutline';

const size="25px";
let isLike = false;


const Like = () => {
  const llke_off = <SvgHeart size={size}></SvgHeart>;
  const like_on = <SvgHeartOutline size={size}></SvgHeartOutline>;

  const [like_use, setLikeUse] = useState(isLike ? llke_off : like_on);
  const disableBtnProps = {};
  
  const switchLike = () => {
    disableBtnProps.disabled = false;
    isLike = !isLike;
    
    if (isLike) {
      setLikeUse(llke_off);
    }
    else {
      setLikeUse(like_on);
    }

    disableBtnProps.disabled = true;
  }

  let button = <button {...disableBtnProps}  onClick={switchLike} >{like_use}</button>;
  

  return (
    <div className='icon' >{button}</div>
  )
}

export default Like;