import React from 'react';
import { DiFirebase, DiReact, DiZend  } from 'react-icons/di';
import {SiTensorflow} from 'react-icons/si'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with a range of Technologies in ML and Full-Stack development world.</SectionText>
    <List>
      <ListItem><DiReact size='3rem' />
      <ListContainer> <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br/> React.js
      </ListParagraph></ListContainer>
     </ListItem>
     <ListItem><DiFirebase size='3rem' />
      <ListContainer> <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br/> Node and Databases
      </ListParagraph></ListContainer>
     </ListItem>
     <ListItem><SiTensorflow size='3rem' />
      <ListContainer> <ListTitle>Machine Learning</ListTitle>
      <ListParagraph>
        Experience with <br/> TensorFlow
      </ListParagraph></ListContainer>
     </ListItem>
      
    </List>
  </Section>
);

export default Technologies;
