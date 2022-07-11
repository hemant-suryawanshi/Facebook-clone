import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
// import "Location.css";
import { ImLocation } from "react-icons/im";
import { LocationContext } from "../../Context/locationContext";
const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [location,setLocation ]=useState("")
  const [url,setUrl]=useState()
  const[isLocation,issetLocation]=useState(false)
  const {locationContext,setLocationContext} = useContext(LocationContext);

  const setlocationurl=()=>{
    issetLocation(true)
    setUrl( `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
    setLocationContext(location)
  }

  return (
    <>
      <Button onClick={onOpen}>
        {" "}
        <ImLocation />
        {locationContext==""?"Location":locationContext}
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size="sm" placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Location
          </DrawerHeader>
          <DrawerBody>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  width="400"
                  height="300"
                  id="gmap_canvas"
                  src={isLocation?url:"https://maps.google.com/maps?q=dehli&t=&z=13&ie=UTF8&iwloc=&output=embed"}
                ></iframe>
              </div>
            </div>
           
          </DrawerBody>
          <DrawerFooter>
          <Box id="searchlocationbox">
              <Input value={location} onChange={(e)=>setLocation(e.target.value)} id="setLocationinputBox" width="350px"/>
              <Button onClick={()=>setlocationurl()} id="setlocationButton">Set Location</Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Location;
