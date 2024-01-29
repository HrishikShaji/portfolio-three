interface TitleSectionProps {
  title: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return (
    <div className="w-full h-full text-red-500 flex  ">
      <h1 className="text-8xl leading-none">{title}</h1>
    </div>
  );
};
