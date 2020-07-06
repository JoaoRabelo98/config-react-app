/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repo, setRepo] = useState('');
  const [repositories, setRepositories] = useState<Array<Repository>>(() => {
    const repositoriesInLocalStorage = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (repositoriesInLocalStorage)
      return JSON.parse(repositoriesInLocalStorage);

    return [];
  });

  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repo) {
      setInputError('Digite o autor/nome do repositório 😒');

      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${repo}`);

      const repositoryToAdd = response.data;

      setRepositories([...repositories, repositoryToAdd]);
      setRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Repositório não encontrado 😥');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />

      <Title>Explore repositórios no github</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={repo}
          onChange={e => setRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
