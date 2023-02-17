import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';

function Header() {
  return (
    <div>
        <div className="">
            <MenuItem title="HOME" address={'/'} Icon={AiFillHome}/>
        </div>

        <div className="">

        </div>
    </div>
  )
}

export default Header;