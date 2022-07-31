import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        My name is Dip and Welcome to <br/>
        My Personal Portfolio
      </SectionTitle>

      <SectionText>
        Primarily Working with Machine Learning models, ANN, CNN, TensorFlow with occasional deepdive into Web Development.
      </SectionText>
      <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;