import styled, { css } from "styled-components";
import { 
  HiArrowLeft,
  MdHome,
  MdSearch,
  MdNotifications, 
  MdEmail } from "../../styles/icons"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }

`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: center;

  padding: 8px 0 9px 15px;
  border-bottom: 1px solid var(--primary);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`

export const BackIcon = styled(HiArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`

export const ProfileInfo = styled.div`
  margin-left: 17px;
  text-align: left;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(40px, max(10vw, 10px));

  @media(min-width: 500px) {
    display: none;
  }
`

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  &:hover, 
  &.active {
    fill: var(--twitter);
  }
`

export const HomeIcon = styled(MdHome)`
  ${iconCSS}
`

export const SearchIcon = styled(MdSearch)`
  ${iconCSS}
`

export const BellIcon = styled(MdNotifications)`
  ${iconCSS}
`

export const EmailIcon = styled(MdEmail)`
  ${iconCSS}
`
