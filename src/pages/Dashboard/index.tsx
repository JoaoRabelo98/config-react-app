import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43295586?s=460&u=55af05a80a826be4fa0de60b1f25fc38015b14f9&v=4"
            alt="João Vitor"
          />
          <div>
            <strong>joaorabelo98</strong>
            <p>Come to the dark side of the force</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43295586?s=460&u=55af05a80a826be4fa0de60b1f25fc38015b14f9&v=4"
            alt="João Vitor"
          />
          <div>
            <strong>joaorabelo98</strong>
            <p>Come to the dark side of the force</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/43295586?s=460&u=55af05a80a826be4fa0de60b1f25fc38015b14f9&v=4"
            alt="João Vitor"
          />
          <div>
            <strong>joaorabelo98</strong>
            <p>Come to the dark side of the force</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
