"use client";
import { useState, useEffect } from "react";

interface Idocument {
  id: string;
  url: string; 
}

export default function DocumentsPage() {
  const [documents, setDocuments] = useState<Idocument[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("http://localhost:3001/documents"); 
        const data = await response.json();
        setDocuments(data);
      } catch (error) {
        console.error("Chyba při načítání dokumentů:", error);
      }
    };
    fetchDocuments();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {documents.map((doc) => (
        <div
          key={doc.id}
          className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 cursor-pointer"
          onClick={() => window.open(doc.url, "_blank")}
        >
        </div>
      ))}
    </div>
  );
}