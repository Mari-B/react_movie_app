import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
  border: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: var(--maxWidth);
  padding: 20px 0;
  margin: 0 auto;
  color: var(--white);
`;

export const LoginBtn = styled.span`
  width: 100px;
  background: var(--white);
  border-radius: 20px;
  margin: 5px 0;
  padding: 5px 10px;
  border: 1px solid var(--white);
  text-align: center;
  a {
    text-decoration: none;
    font-size: 18px;
    color: var(--darkGrey);

  }
`;

export const LogOutBtn = styled.span`
  width: 100px;
  color: var(--darkGrey);
  background: var(--white);
  border-radius: 20px;
  margin: 5px 0;
  padding: 5px 10px;
  border: 1px solid var(--white);
  margin-left: 20px;
  cursor: pointer;
  font-size: 18px;
  text-align: center;
`;
