import {
  ProfileCard,
  Description,
  DescriptionImage,
  DescriptionName,
  DescriptionItem,
  StatsList,
  StatsItem,
} from './profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileCard>
      <Description>
        <DescriptionImage src={avatar} alt={username} />
        <DescriptionName>{username}</DescriptionName>
        <DescriptionItem>@{tag}</DescriptionItem>
        <DescriptionItem>{location}</DescriptionItem>
      </Description>

      <StatsList>
        <StatsItem>
          Followers
          <b>{followers}</b>
        </StatsItem>
        <StatsItem>
          Views
          <b>{views}</b>
        </StatsItem>
        <StatsItem>
          Likes
          <b>{likes}</b>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};