import React from 'react';
import Header from '../../components/Header';

import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

const CreateEvent: React.FC = () => {
  return (
    <Container>
      <Header
        icon={FiArrowLeft}
        name="Voltar"
      />

      <Content>
        <div className="input-create">
          <label>Name</label>
          <input type="text" placeholder="Name event"/>
        </div>

        <div className="textarea-create">
          <label>Description <span>optional</span></label>
          <textarea placeholder="Name event"/>
        </div>
      </Content>
    </Container>
    );
}

export default CreateEvent;