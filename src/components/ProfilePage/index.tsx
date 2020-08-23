import React from 'react';

import Feed from '../Feed'

import { 
  Container,
  Banner,
  Avatar,
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  FollowPage,
  EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar src='https://avatars1.githubusercontent.com/u/62678551?s=460&u=afc1d0e3a046f7b1546d6109a90cca2d3ae1bd0a&v=4'/>
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Gustavo Emanuel</h1>
        <h2>@emanuel_gust03</h2>

        <p> 
          <a href="https://pt-br.reactjs.org/" target="_blank" rel="noopener noreferre">ReactJS</a> Developer
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Curitiba, Brasil
          </li>

          <li>
            <CakeIcon/>
            Nascido(a) em 12 de Fevereiro de 2003
          </li>
        </ul>

        <FollowPage>
          <span>
            seguindo <strong>100</strong>
          </span>

          <span>
            <strong>100</strong> seguidores
          </span>
        </FollowPage>
      </ProfileData>

      <Feed/>
    </Container>
  );
}

export default ProfilePage;