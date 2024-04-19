import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm Angga. I am a dedicated and results-driven technology professional
          with a strong educational background in Electrical Engineering from
          Universitas Siliwangi. My passion lies in leveraging cutting-edge
          technologies to create innovative solutions that address real-world
          challenges. With 2 years of experience as an IoT Engineer and 1 year
          as a Flutter Developer, I have honed my skills in both hardware and
          software development.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              'https://drive.google.com/file/d/1LR2OAJp4G60ETzCpDJnYsh7pjBewbHyg/view?usp=sharing';
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
