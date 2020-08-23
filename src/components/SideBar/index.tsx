import React from 'react';

import StickyBox from 'react-sticky-box'

import List from '../List';
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import { 
  Container,
  SearchInput,
  SearchWrapper,
  SearchIcon,
  Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Buscar no Twitter'/>
        <SearchIcon/>
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title='Talvez você curta'
            elements={[
              <FollowSuggestion
                name='Taila Naiara'
                nickname='@tailanaiara'
              />,

              <FollowSuggestion
                name='Douglas Miguel'
                nickname='@dmp1987'
              />,

              <FollowSuggestion
                name='Davi Lucas'
                nickname='@DavLuc206'
              />,
            ]}
          />

          <List
            title='O que está acontecendo'
            elements={[
                <News/>,
                <News/>,
                <News/>
            ]}
          />

          <List
            title='O que está acontecendo'
            elements={[
                <News/>,
                <News/>,
                <News/>
            ]}
          />
          
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;