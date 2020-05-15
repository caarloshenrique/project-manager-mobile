import React, { useCallback, useRef, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
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
  CreateAccountButton,
  CreateAccountButtonText,
  CardProject,
  DeleteButton,
  DeleteButtonText,
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

  function navigateToEdit(project) {
    navigation.navigate('Dashboard', { project });
  }

  const { signIn } = useAuth();

  const [projects, setProjects] = useState<Project[]>([]);

  async function loadProjects(): Promise<void> {
    const response = await api.get('projects');
    setProjects(response.data);
  }

  useEffect(() => {
    loadProjects();
  }, []);

  async function deleteProject(id) {
    await api.delete(`projects/${id}`);
    Alert.alert('Sucesso', 'O projeto foi deletado do banco de dados.');
    loadProjects();
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

              <FlatList
                data={projects}
                keyExtractor={(project) => String(project.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProjects}
                onEndReachedThreshold={0.2}
                renderItem={({ item: project }) => (
                  <CardProject>
                    <Text>{project.name}</Text>
                    <Text>Valor: {project.price}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <DeleteButton>
                        <DeleteButtonText
                          onPress={() => navigateToEdit(project)}
                        >
                          Editar
                        </DeleteButtonText>
                      </DeleteButton>
                      <DeleteButton>
                        <DeleteButtonText
                          onPress={() => deleteProject(project.id)}
                        >
                          Excluir
                        </DeleteButtonText>
                      </DeleteButton>
                    </View>
                  </CardProject>
                )}
              />
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
