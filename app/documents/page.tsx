"use client";
import { useState, useEffect } from "react";

interface Document {
  id: number;
  title: string;
  content: string;
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Simulate fetching documents from a database
  useEffect(() => {
    const fetchDocuments = async () => {
      // Replace this with an actual API call to fetch documents from your database
      const mockDocuments: Document[] = [
        {
          id: 1,
          title: "DS-2019 Info",
          content:
            "Dokument DS-2019 je nezbytný dokument pro získání studentáckého víza J-1. Obsahuje jasné informace o programu a pobytu studenta. Dále povoluje americké organizaci za studenta přebírat zodpovědnost. Jak získat dokument DS-2019: Dokument vydává sponzorská organizace v USA, jakmile je škola a hostitelská rodina potvrzena.",
        },
        {
          id: 2,
          title: "Visa Application Process",
          content:
            "Pro získání víza J-1 je nutné podat žádost na americkém konzulátě. Předložte dokument DS-2019 a další požadované materiály. Po schválení obdržíte vízum do 2-3 týdnů.",
        },
      ];
      setDocuments(mockDocuments);
    };

    fetchDocuments();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-brightpurple rounded-2xl p-4 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Seznam dokumentů</h2>
        <ul>
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="mb-2 p-1 hover:bg-secondary rounded-lg cursor-pointer "
              onClick={() => setSelectedDocument(doc)}
            >
              {doc.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Dokument */}
      <div className="w-full md:w-2/3 p-10">
        {selectedDocument ? (
          <>
            <h1 className="text-2xl font-bold mb-4">{selectedDocument.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: selectedDocument.content }} />
          </>
        ) : (
          <div className="items-center justify-center flex h-full font-medium tracking-[-0.02em]">
          <p>Vyber dokument pro zobrazení</p>
          </div>
        )}
      </div>
    </div>
  );
}