import React, { useContext } from 'react';
import StyledProjects, { ProjectsList } from './projects.style';

import { AppContext } from '../../context';

import { Anchor } from '../../utils/components';
import Title from '../__pure__/Title/title.component';


interface ProjectsProps extends React.HTMLAttributes<HTMLElement>{ }

const Projects: React.FC<ProjectsProps> = (props) => {
  const { repos } = useContext(AppContext);

  return (<>
    <StyledProjects {...props} id={'projects'}>
      <Title>Live Web Apps</Title>
      <ProjectsList>
        <li>
          <Anchor href={'/p'} title={'Live Web Apps'}>
            {'https://lycuid.dev/p/'}
          </Anchor>
        </li>
      </ProjectsList>
      <hr />
      <Title>Github repos</Title>
      <ProjectsList>
      {repos && repos.map(({ name, description, language, html_url }) => (
        <li key={name}>
          <Anchor href={html_url} title={description}>{name}</Anchor> -- {language}
        </li>
      ))}
      </ProjectsList>
    </StyledProjects>
  </>);
}

export default Projects;

