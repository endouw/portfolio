import React from 'react';
import { DiFirebase, DiHtml5} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The projects that I have made showcase my front-end work.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem"/>
        <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experience with <br/>
          HTML/CSS/JS
        </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
        <ListTitle>Back-end</ListTitle>
        <ListParagraph>
          Experience with <br/>
          React js with Node.
        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
