import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStylez = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`

const TopBarContainerStylez = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`

const TopBarContainerLeftStylez = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`

const TopBarContainerCenterStylez = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`

const TopBarContainerRightStylez = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`

const LeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`

const CenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
`

const LastCenterSpan = styled.span`
cursor: pointer;
margin-right: 0;
`
const RightSpan = styled.span`
cursor: pointer;
`

const TopBar = () => {
  return (
    <TopBarStylez>
      <TopBarContainerStylez>
        <TopBarContainerLeftStylez>
          <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </TopBarContainerLeftStylez>
        <TopBarContainerCenterStylez>
          <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><LastCenterSpan>ANNOUNCEMENTS</LastCenterSpan>
        </TopBarContainerCenterStylez>
        <TopBarContainerRightStylez>
          <RightSpan>LOG IN</RightSpan>
        </TopBarContainerRightStylez>
      </TopBarContainerStylez>
    </TopBarStylez>
  )
}

export default TopBar;