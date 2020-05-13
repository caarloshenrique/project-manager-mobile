import React, { useCallback, useRef, useEffect, useState } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import api from '../../services/api';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  DeleteButton,
  DeleteButtonText,
  CreateAccountButton,
  CreateAccountButtonText,
  ProjectTitle,
  CardProject,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

interface Project {
  id: string;
  name: string;
  price: number;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();

  const { signIn } = useAuth();

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects(): Promise<void> {
      const response = await api.get('projects');
      console.log(response);
      setProjects(response.data);
    }

    loadProjects();
  }, []);

  async function deleteProject(id) {
    await api.delete(`projects/${id}`);
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <View>
              <Title>Projetos</Title>
              {projects.map(function (object) {
                return (
                  <CardProject key={object.id}>
                    <ProjectTitle>{object.name}</ProjectTitle>
                    <ProjectTitle>R${object.price}</ProjectTitle>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <DeleteButton>
                        <DeleteButtonText
                          onPress={() =>
                            navigation.navigate('Dashboard', { object })
                          }
                        >
                          Editar
                        </DeleteButtonText>
                      </DeleteButton>
                      <View></View>
                      <DeleteButton>
                        <DeleteButtonText
                          onPress={() => deleteProject(object.id)}
                        >
                          Excluir
                        </DeleteButtonText>
                      </DeleteButton>
                    </View>
                  </CardProject>
                );
              })}
            </View>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Cadastrar projetos</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
