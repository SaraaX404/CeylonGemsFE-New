import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ChatBody from '../ChatBody'; // Import your ChatBody component here

type RightSideDrawerProps = {
  name?: string;
  id?:string;
  ChatButton: React.ComponentType<any>;
};

const RightSideDrawer: React.FC<RightSideDrawerProps> = ({ name, ChatButton,id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(open);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ChatButton/>
      </Button>
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)} sx={{ width: 600 }}>
        <div
          role="presentation"
        >
          <ChatBody name={name} id={id} />
        </div>
      </Drawer>
    </div>
  );
};

export default RightSideDrawer;
