import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Wrapper, Content, LoginBtn, LogOutBtn } from "./SubHeader.styles";
//Context
import { Context } from "../../context";

const SubHeader = () => {
  const [user, setUser] = useContext(Context);

  const navigate = useNavigate();
  const logOut = () => {
    setUser(false);
    navigate("/login");
  };

  return (
    <Wrapper>
      <Content>
        {user ? (
          <>
            <span className="loggedin">Logged in as: {user.username}</span>
            <LogOutBtn onClick={logOut}>Log out</LogOutBtn>
          </>
        ) : (
          <LoginBtn className="login">
            <Link to="/login">Login</Link>
          </LoginBtn>
        )}
      </Content>
    </Wrapper>
  );
};

export default SubHeader;
