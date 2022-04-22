import React, { useState } from "react";

import { ScrollView } from 'react-native'

import { 
  Container, 
  Title,
  InputContainer,
  Buttons,
  TitleMedia,
  Media,
  TitleResults
} from './styles'

import { Input } from "../../components/TitleInput";
import { Button } from "../../components/Button";

export function Calculating() {
  const [age, setAge] = useState('')
  // const [middleAges, setMiddleAges] = useState(0)

  return(

    <ScrollView>
      <Container>   
        <InputContainer>
          <Input 
            value={age}
            placeholder="Qual a idade do familiar?"
            onChangeText={setAge}
            keyboardType={"number-pad"}
          /> 
          
        </InputContainer>   
        
        <Title>
          Tem mais alguem na família?
        </Title>

      <Buttons>
        <Button 
          title="sim"
        />

        <Button 
          title="não"
        />
      </Buttons>

      <TitleResults>
        A média de idade da família é:
      </TitleResults>

      <TitleMedia>
        <Media>
          {age}
        </Media>
      </TitleMedia>

      </Container>
   </ScrollView>
  )
}