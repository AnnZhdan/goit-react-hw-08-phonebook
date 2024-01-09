import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  font-size: 20px;
  width: 30vw;
  padding: 20px;
  gap: 20px;
  border-radius: 3px;
  border: 2px solid pink;
`;

export const Input = styled.input`
  height: 20px;
  padding: 5px;
  width: 200px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
`;

export const ButtonAdd = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  border: 1px solid pink;
  border-radius: 10px;
  font-weight: 500px;
  background-color: pink;

  &:hover {
    background-color: lightpink;
  }
`;
