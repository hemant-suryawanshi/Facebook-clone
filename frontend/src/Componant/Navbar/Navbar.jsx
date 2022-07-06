import "./Navbar.css";
import img1 from "../../Images/img1.svg";
import { ImLocation } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { BiWallet } from "react-icons/bi";

import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { logoutAuth, token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelNavigate = () => {
    navigate("/", { replace: true });
  };
  const handelLogout = () => {
    logoutAuth();
    navigate("/", { replace: true });
  };
  return (
    <div id="Navmain">
      <div id="navlogo1111" onClick={handelNavigate}>
        <img src={img1}></img>
      </div>

      <div id="div2" >
        <div id="div21">
          <ImLocation />
        </div>
        <div id="div22">Pawai</div>
      </div>

      <div id="div3">
        <InputGroup w={"570px"} rounded={"xl"}>
          <Input
            placeholder="find Fresh vegitable frute and dairy"
            rounded={"full"}
          />
          <InputRightElement children={<FaSearch color="green.500" />} />
        </InputGroup>
      </div>

      <div id="div4">
        <Cart />
      </div>

      <div id="div5" >
        <div>
          <BiWallet />
        </div>
        <div>Credit</div>
      </div>

      <div id="div6">
        {token == "" ? (
          <Login />
        ) : (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {user}
                </MenuButton>
                <MenuList>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Invite a Freind</MenuItem>
                  <MenuItem>Help & Support</MenuItem>
                  <MenuItem onClick={handelLogout}>Logout</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
