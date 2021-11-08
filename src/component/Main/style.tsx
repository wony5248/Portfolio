import styled from "styled-components"
import imgurl from "../../assets/notebook.jpg";

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  height: 4.5rem;
  align-items: center;
  color: hsla(0, 0%, 100%, 0.7);
  padding: 0 32px;
  z-index: 10;
`;
export const Headernav = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  font-size: 1rem;
  color: hsla(0, 0%, 100%, 0.7);
`;
export const Maindiv = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 588px;
  background: linear-gradient(
      180deg,
      rgba(112, 93, 80, 0.6) 0,
      rgba(112, 93, 80, 0.6) 50%
    ),
    url(${imgurl}) 50% no-repeat;
  background-size: cover;
`;
export const Maincontentdiv = styled.div`
  position: relative;
  padding: calc(4rem + 4.5rem) 2rem 4rem;
  word-break: keep-all;
  color: #fff;
`;
export const Maincontenttitle = styled.div`
  font-size: 4rem;
  font-family: Black Han Sans, sans-serif;
  font-weight: 400;
  word-break: keep-all;
  color: #fff;
`;
export const Maincontentbody = styled.div`
  margin: 0 auto 2rem;
  font-weight: 400;
  font-size: 1.25rem;
  color: #fff
  line-height: 1.5;
`;
export const Styledhr = styled.hr`
  width: 3.25rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  border: none;
  height: 0;
  border-top: 0.2rem solid #f4623a;
`;