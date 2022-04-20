import React from "react";

import { Container, Title, InputContainer, Buttons} from './styles'
import { Input } from "../../components/TitleInput";
import { Button } from "../../components/Button";

export function Calculating() {
  return(
    <Container>   
      <InputContainer>
        <Input 
          placeholder="Qual a idade do primeiro familiar?"
        />
      </InputContainer>   
      
      <Title>
        Tem mais alguem na familia?
      </Title>

    <Buttons>
      <Button 
        title="sim"
      />

      <Button 
        title="não"
      />
    </Buttons>



    </Container>
  )
}