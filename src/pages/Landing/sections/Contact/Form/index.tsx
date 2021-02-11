import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';

import TextField from '@material-ui/core/TextField';
import { useScreenProperties } from 'hooks/ScreenPropertiesContext';
import { Button, FormContainer } from '../styles';

interface ContactMeFormData {
  name: string;
  email: string;
  message: string;
}

const FormComponent: React.FC = () => {
  const { isMobile } = useScreenProperties();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback((data: ContactMeFormData) => {
    console.log(data);
  }, []);

  return (
    <FormContainer
      isMobile={isMobile}
      ref={formRef}
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}
    >
      <TextField
        style={{ width: '100%', margin: '25px 0' }}
        name="name"
        id="outlined-helperText"
        label="Qual o seu nome?"
        defaultValue=""
        variant="outlined"
      />

      <TextField
        style={{ width: '100%', margin: '25px 0' }}
        name="email"
        id="outlined-helperText"
        label="Qual o seu e-mail?"
        defaultValue=""
        variant="outlined"
      />

      <TextField
        style={{ width: '100%', margin: '25px 0' }}
        name="message"
        id="outlined-helperText"
        label="Qual a sua mensagem?"
        defaultValue=""
        variant="outlined"
        multiline
        rows="4"
      />

      <Button type="submit">
        <p>Enviar Mensagem</p>
      </Button>
    </FormContainer>
  );
};

export default FormComponent;
