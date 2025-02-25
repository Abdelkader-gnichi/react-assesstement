
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" className="bg-black shadow-md">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" className="text-red-500 font-gluten">
          Central Texas Fly Fishing
        </Typography>
        <div className="flex gap-6">
          <Button sx={{
              color: "#18181B",
              transparent: 'true',
              borderRadius: 0.5,
              justifyContent: "center",
              alignItems: "center",
             
            }}>
            Home
          </Button>
          <Button color="inherit" className="text-black">
            About
          </Button>
          <Button color="inherit" className="text-black">
            Services
          </Button>
          <Button color="inherit" className="text-black">
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;