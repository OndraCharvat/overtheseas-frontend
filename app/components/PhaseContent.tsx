type PhaseContentProps = {
    contentPages: { title: string; content: string }[];
  };
  
  const PhaseContent = ({ contentPages }: PhaseContentProps) => {
    return (
      <section>
        {contentPages.map((page, index) => (
          <div
            key={index}
            className="mb-8 bg-brightpurple p-6 rounded-2xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-2">{page.title}</h3>
            <p className="text-gray-700 whitespace-pre-line">{page.content}</p>
          </div>
        ))}
      </section>
    );
  };
  
  export default PhaseContent;
  