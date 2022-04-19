import React from "react";

import { Button } from '../../components/Button'
import { Container, Content, Title } from './styles'

export function Home(){
  return(
    <Container>
      <Title>
        Vamos calcular a média de idade da sua família?
      </Title>

      <Content>
        <Button 
          title="Começar!"
        />
      </Content>
    </Container>
  )
}