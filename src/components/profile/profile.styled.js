import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 480px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  max-width: 300px;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const Description = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const DescriptionImage = styled.img`
  display: block;
  margin: 20px auto;
  width: 100%;
  max-width: 120px;
  border-radius: 50%;
  background-color: #E198C0;
`;

export const DescriptionName = styled.h2`
  margin: 0 auto 8px;
  font-size: 24px;
  font-weight: 700;
`;

export const DescriptionItem = styled.p`
  margin: 0 auto 8px;
`;

export const StatsList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #E198C0;
  border-top: 1px solid grey;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const StatsItem = styled.li`
  padding: 20px;
  width: 120px;
  display: flex;
  text-align: center;
  flex-direction: column;
`;