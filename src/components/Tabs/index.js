import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TabsContainer, TabItem, TabText } from './styles';


export default function tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#fff"></Icon>
          <TabText>Indicar amigos</TabText>
        </TabItem>
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff"></Icon>
          <TabText>Cobrar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#fff"></Icon>
          <TabText>Depositar</TabText>
        </TabItem>
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#fff"></Icon>
          <TabText>Transferrir</TabText>
        </TabItem>
        <TabItem>
          <Icon name="lock" size={24} color="#fff"></Icon>
          <TabText>Bloquear cartão</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
