import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";
// import "Location.css";
import { ImLocation } from "react-icons/im";
const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button  onClick={onOpen}>
        {" "}
        <ImLocation />
        Location
      </Button>

      <Drawer onClose={onClose} isOpen={isOpen} size='sm' placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hello World</DrawerHeader>
          <DrawerBody></DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Location;
