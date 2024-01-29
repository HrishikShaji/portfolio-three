interface TitleSectionProps {
	title: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
	return (
		<div className="w-full h-full text-red-500 flex items-center ">
			<h1 className="text-9xl">{title}</h1>
		</div>
	);
};
