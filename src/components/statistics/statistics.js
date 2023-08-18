import {
  SectionStatistics,
  TitleStatistics,
  StatList,
  StatItem,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <SectionStatistics>
      <TitleStatistics>{title}</TitleStatistics>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </SectionStatistics>
  );
};