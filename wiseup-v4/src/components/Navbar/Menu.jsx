import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//---------UI------------------
import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
//import {CgMenuMotion} from 'react-icons/cg'
// <CgMenuMotion />

const Menu = ({
  isAuthenticated,
  auth,
  setAuth,
  toggleMenu,
  setToggleMenu,
}) => {
  const [usersChange, setUsersChange] = useState(true);
  const [userID, setUserID] = useState([]);
  const navigate = useNavigate();

  const getUserID = async () => {
    try {
      const res = await fetch("/api/profile/menu", {
        method: "GET",
        headers: { jwt_token: localStorage.token },
      });
      const parseData = await res.json();

      setUserID(parseData[0].user_id);
      console.log("Menu - UserID: ", userID);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout Successfull");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    auth && getUserID();
    setUsersChange(false);
  }, [usersChange, auth]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        color: "white",
        position: "relative",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <Button
          onClick={() => {
            navigate("/");
            setToggleMenu(!toggleMenu);
          }}
        >
          Landing
        </Button>
      </Box>
      <Box>
        {isAuthenticated && (
          <Button
            onClick={() => {
              navigate("/mycryptolist");
              setToggleMenu(!toggleMenu);
            }}
          >
            My Crypto List
          </Button>
        )}
      </Box>
      {/* <Box>
        <a href="/cutz">Cutz</a>
      </Box> */}
      <Box>
        {isAuthenticated && 
        <Button 
          onClick={()=>{
            navigate(`/profile/${userID}`);
            setToggleMenu(!toggleMenu);
          }
        }
          >
            My Profile
        </Button>}
      </Box>
      <Box>
        {isAuthenticated && (
          <Button
            onClick={(e) => {
              logout(e);
              navigate("/");
              setToggleMenu(!toggleMenu);
            }}
          >
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Menu;
