type PhaseContentProps = {
  description?: string;
};

const PhaseContent = ({ description }: PhaseContentProps) => {
  return (
    <div className="mb-8 bg-brightpurple p-6 rounded-2xl shadow-sm">
      <p className="text-gray-700 whitespace-pre-line">{description}</p>
    </div>
  );
};

export default PhaseContent;
