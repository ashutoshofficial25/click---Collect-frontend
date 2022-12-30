import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import logo from "../public/static/Myntra_Logo.png";
import Image from "next/image";



const Navbar = () => {
  return (
    <Box>
      <div className="bg-white ">
  <div className="border py-3 px-6">
    <div className="flex justify-between items-center">

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>

      {/* items section */}
      <div className="flex items-center hidden w-full md:flex md:w-auto " id="navbar-default">

        <img className="h-6 w-10 mx-8 text-red-500" src="https://www.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"/>
        
        <div className="flex gap-x-8">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Men</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Women</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Kids</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Home & Living</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Beauty</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:border-b-2 border-red-500">Studio</span>
      </div>

      </div>

      {/* search section */}
      <div className="ml-6  hidden w-full md:flex md:w-auto" >
        <input type="text" className="from-control w-80  w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="" placeholder="Search for products, brands & more"/>
      </div>

      {/* account section */}
      <div className="ml-2 flex ">
        <div className=" flex flex-col items-center  cursor-pointer  rounded-md py-2 px-4 hover:bg-gray-100">
        <img className="h5 w-5" src="https://cdn-icons-png.flaticon.com/512/1250/1250689.png"/>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg> */}
          <span className="text-sm font-medium">Profile</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer   rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Wishlist</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer   rounded-md py-2 px-4 hover:bg-gray-100">
          <div className="relative">
          <img className="h5 w-5" src="https://img.icons8.com/fluency-systems-regular/48/null/shopping-bag--v1.png"/>
            
            {/* <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span> */}
          </div>
          <span className="text-sm font-medium">Bag</span>
        </div>
      </div>

     
      
    </div>
   
    
  </div>
</div>
    </Box>
  );
};

{/* sign in btn-- <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
<span className="text-sm font-medium">Sign in</span>
</div> */}

export default Navbar;
{/* <AppBar position="static" elevation={8}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Image src={logo} height={50} />

            <Box display="flex" gap={3}>
              <Typography variant="h6">Men</Typography>
              <Typography variant="h6">Women</Typography>
              <Typography variant="h6">Kids</Typography>
              <Typography variant="h6">Home & Living </Typography>
              <Typography variant="h6">Beauty</Typography>
              <Typography variant="h6">Studio</Typography>
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <Box display="flex" gap={3}>
              <Typography variant="h6">Profile</Typography>
              <Typography variant="h6">Wishlist</Typography>
              <Typography variant="h6">Bag</Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar> */}