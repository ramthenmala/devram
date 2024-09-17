import React from 'react'; 
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow as codeTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const supportedLanguages = [
    'javascript', 'typescript', 'python', 'java', 'csharp', 'html', 'css',
    'scss', 'sass', 'php', 'sql', 'mysql', 'markdown', 'ruby', 'sh', 'xml',
    'yaml', 'golang', 'json'
];

interface CodeBlockProps {
    code: string;
    language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
    const lang = supportedLanguages.includes(language) ? language : 'text';

    return (
        <div className="relative bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <SyntaxHighlighter language={lang} style={codeTheme} customStyle={{ padding: 0 }}>
                {code}
            </SyntaxHighlighter>
            <div className="absolute top-2 right-2 text-xs text-gray-400">{language}</div>
        </div>
    );
};

export default CodeBlock;
