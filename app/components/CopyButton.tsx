'use client';

interface CopyButtonProps {
  text: string;
  className?: string;
  title?: string;
}

export default function CopyButton({ text, className = "", title = "نسخ" }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  return (
    <button 
      onClick={handleCopy}
      className={`text-gray-500 hover:text-blue-600 transition-colors duration-200 ${className}`}
      title={title}
    >
      📋
    </button>
  );
}
