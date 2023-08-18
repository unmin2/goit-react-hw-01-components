import { styled } from 'styled-components';

export const Friends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
  list-style: none;
  padding: 10px 0;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 25px;
  align-items: center;
  padding-left: 30px;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 0 10px;
`;

export const FriendSpan = styled.span`
  max-width: 25px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendImage = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 10px;
  background-color: lightgrey;
`;

export const FriendName = styled.p`
  display: flex;
`;