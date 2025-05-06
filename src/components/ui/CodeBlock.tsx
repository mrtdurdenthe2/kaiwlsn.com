'use client';

// light syntax theme
import 'highlight.js/styles/github.css';
import { useState, useRef, Children, isValidElement } from 'react';
import type { ReactElement } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  // Flatten children and find the <code> element with className
  const childArray = Children.toArray(children) as ReactElement<{ className?: string }>[];
  const codeElement = childArray.find(
    (child) => isValidElement(child) && typeof child.props.className === 'string'
  ) as ReactElement<{ className?: string }> | undefined;
  // Only pick out the language-xxx token
  const codeClass = String(codeElement?.props.className ?? '');
  const langClass = codeClass.split(/\s+/).find((c) => c.startsWith('language-')) ?? '';
  const language = langClass.replace(/^language-/, '').toUpperCase();
  // Use a ref on the pre tag to grab its innerText for copy
  const preRef = useRef<HTMLPreElement | null>(null);

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      const text = preRef.current?.innerText || '';
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <>
      <style jsx global>{`
        /* transparent highlight.js code backgrounds inside our container */
        .codeblock-container .hljs { background: transparent !important; }
      `}</style>
      <div className="codeblock-container my-6">
        <div className="bg-white rounded-[12px]">
          {/* Gradient border pill header (v18 style) */}
          <div
            className="flex-none box-border inline-flex items-center justify-center p-[2px] gap-[10px] shadow-[0px_4px_61px_rgba(220,220,220,0.7),inset_0px_2px_1.3px_rgba(255,255,255,0.6),inset_0px_-2px_2px_rgba(255,255,255,0.6)] rounded-full bg-gradient-to-b from-white via-[#CFCFCF] to-white"
          >
            <div
              className="inline-flex items-center justify-center px-[11px] py-[5px] gap-[10px] bg-[#F1F1F1] shadow-[0px_4px_61px_rgba(220,220,220,0.7),inset_0px_2px_1.3px_rgba(255,255,255,0.6),inset_0px_-2px_2px_rgba(255,255,255,0.6)] rounded-full"
            >
              <span className="text-xs font-medium text-black">{language}</span>
              <button onClick={handleCopy} className="p-1 text-gray-500 hover:text-gray-800 focus:outline-none">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
          <pre
            ref={preRef}
            className="overflow-auto p-4 bg-white text-gray-800 "
          >
            {/* render the original code element with syntax markup */}
            {children}
          </pre>
        </div>
      </div>
    </>
  );
}
