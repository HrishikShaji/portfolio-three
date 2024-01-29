interface AboutDescSectionProps {
  data: Record<string, any>;
}

export const AboutDescSection: React.FC<AboutDescSectionProps> = ({ data }) => {
  return <div className="w-full flex-grow  bg-red-500">{data.title}</div>;
};
