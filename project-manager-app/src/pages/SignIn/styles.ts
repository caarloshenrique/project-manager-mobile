import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
  text-align: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const DeleteButtonText = styled.Text`
  color: #e83f5b;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ProjectList = styled(FlatList).attrs({
  numColumns: 2,
})`
  flex: 1;
  padding: 0 10px;
`;

export const CardProject = styled.View`
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  min-width: 100%;
`;
export const ProjectTitle = styled.Text`
  font-size: 15px;
  margin-top: 10px;
  color: #232129;
  font-family: 'RobotoSlab-Regular';
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProjectPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #e83f5b;
`;
