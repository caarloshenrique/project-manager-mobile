import React, { useRef, useCallback, useState, useEffect } from 'react';
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
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './styles';

interface SignUpFormData {
  name: string;
  price: number;
}

interface Project {
  id: string;
  name: string;
  price: number;
}

type RootStackParamList = {
  Dashboard: {
    project: {
      id: string;
      name: string;
      price: number;
    };
  };
};

type ProjectScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

const Dashboard: React.FC = () => {
  const route = useRoute<ProjectScreenRouteProp>();

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const project = route.params.project;

  const [name, setName] = useState<String>(project.name);
  const [price, setPrice] = useState<Number>(project.price);

  const editProject = useCallback(
    async (data: SignUpFormData) => {
      try {
        console.log('Project', name, price);
        await api.put(`projects/${project.id}`, { name, price });

        Alert.alert(
          'Sucesso!',
          'As alterações foram registradas no banco de dados.',
        );

        navigation.navigate('SignIn');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }

        Alert.alert(
          'Erro',
          'Não foi possível alterar os dados, tente novamente.',
        );
      }
    },
    [navigation],
  );

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
              <Title>Editar projeto</Title>
            </View>

            <Form ref={formRef} onSubmit={editProject}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
                value={name}
                onChangeText={setName}
              />

              <Input
                ref={passwordInputRef}
                name="price"
                icon="lock"
                keyboardType="numeric"
                placeholder="Preço"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
                value={price}
                onChangeText={setPrice}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Salvar alterações
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Ver lista de projetos</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default Dashboard;
