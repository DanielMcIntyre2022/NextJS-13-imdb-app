import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';

function Header() {
  return (
    <div>
        <div className="flex">
            <MenuItem title="HOME" address={'/'} Icon={AiFillHome}/>   
            <MenuItem title="ABOUT" address={'/about'} Icon={BsFillInfoCircleFill}/>
        </div>

        <div className="">

        </div>
    </div>
  )
}

export default Header;