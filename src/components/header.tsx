import { ButtonGroup, Button } from '@chakra-ui/react';
import '../App.css'

export default function Header() {
  return (
    <div className="header h-[297px] flex flex-col justify-center pl-[20%]">
      
      <ButtonGroup isAttached padding="0" margin="0">
        <Button color="white" backgroundColor="transparent" size="xs">HOME</Button>
        <Button color="white"  backgroundColor="transparent" size="xs">ABOUT US</Button>
      </ButtonGroup>
      <p className='font-bold text-2xl text-white'>ABOUT US</p>
    </div>
  );
}
