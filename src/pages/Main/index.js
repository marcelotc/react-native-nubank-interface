import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header></Header>
      <Content>
        <Menu></Menu>

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"></Icon>
            <Icon name="visibility-off" size={28} color="#666"></Icon>
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 666.11,11</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Marcelo Cortes hoje ás 06:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs></Tabs>
    </Container>
  )
}