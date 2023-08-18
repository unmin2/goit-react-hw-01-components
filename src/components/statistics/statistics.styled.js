import { styled } from 'styled-components';

export const SectionStatistics = styled.section`
  margin: 20px auto;
  width: 300px;
  display: block;
  text-align: center;
  border: 1px solid grey;
  border-radius: 10px;
`;

export const TitleStatistics = styled.h2``;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  padding: 16px 0;
  margin: 0;
  background-color: #E198C0;
  border-top: 1px solid gray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  text-align: center;
`;