import { useState, useRef, useEffect } from 'react';

const SimpleTextContent = () => {
  const [text, setText] = useState('Welcome to SimpleText!\n\nType anything you want here.\nIt won\'t be saved. 😄\n\n');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      const len = textareaRef.current.value.length;
      textareaRef.current.setSelectionRange(len, len);
    }
  }, []);

  return (
    <div className="simpletext-content">
      <textarea
        ref={textareaRef}
        className="simpletext-area"
        value={text}
        onChange={(e) => setText(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};

export default SimpleTextContent;
