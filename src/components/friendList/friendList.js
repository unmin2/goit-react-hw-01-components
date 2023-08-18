import {
  Friends,
  FriendItem,
  FriendSpan,
  FriendImage,
  FriendName,
} from './friendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <FriendSpan isOnline={isOnline}></FriendSpan>
          <FriendImage src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </Friends>
  );
};