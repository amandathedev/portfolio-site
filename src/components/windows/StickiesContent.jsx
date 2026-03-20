import { useState, useCallback } from 'react';

const COLORS = [
  { name: 'yellow', bg: '#FFFC79', border: '#D4C84E', header: '#EDE86A' },
  { name: 'pink', bg: '#FF9CBF', border: '#D4738A', header: '#F08DAD' },
  { name: 'green', bg: '#92ED8D', border: '#6ABF66', header: '#80D97C' },
  { name: 'blue', bg: '#7EC8FC', border: '#5A9AD4', header: '#6EB8EC' },
  { name: 'purple', bg: '#C9A4F7', border: '#9D79C9', header: '#B994E7' },
  { name: 'orange', bg: '#FFB861', border: '#D49540', header: '#F0A852' },
];

let stickyId = 0;

const DEFAULT_STICKIES = [
  {
    id: stickyId++,
    text: "Welcome to my portfolio!\nDouble-click the icons to explore 🖥️",
    colorIdx: 0,
    x: 0, y: 0,
  },
  {
    id: stickyId++,
    text: "TODO:\n- Check out Portfolio\n- Read the Blog\n- Say hi via Contact!",
    colorIdx: 1,
    x: 0, y: 0,
  },
];

const StickiesContent = ({ onCreateDesktopSticky }) => {
  const [stickies, setStickies] = useState(DEFAULT_STICKIES);
  const [selectedColor, setSelectedColor] = useState(0);

  const addSticky = useCallback(() => {
    setStickies((prev) => [
      ...prev,
      {
        id: stickyId++,
        text: '',
        colorIdx: selectedColor,
        x: 0, y: 0,
      },
    ]);
  }, [selectedColor]);

  const updateText = useCallback((id, text) => {
    setStickies((prev) =>
      prev.map((s) => (s.id === id ? { ...s, text } : s))
    );
  }, []);

  const deleteSticky = useCallback((id) => {
    setStickies((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const changeColor = useCallback((id) => {
    setStickies((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, colorIdx: (s.colorIdx + 1) % COLORS.length } : s
      )
    );
  }, []);

  return (
    <div className="stickies-manager">
      <div className="stickies-toolbar">
        <button className="stickies-new-btn" onClick={addSticky}>
          + New Note
        </button>
        <div className="stickies-color-picker">
          {COLORS.map((c, i) => (
            <button
              key={c.name}
              className={`stickies-color-dot${i === selectedColor ? ' active' : ''}`}
              style={{ background: c.bg, borderColor: c.border }}
              onClick={() => setSelectedColor(i)}
              aria-label={c.name}
            />
          ))}
        </div>
      </div>
      <div className="stickies-grid">
        {stickies.map((sticky) => {
          const color = COLORS[sticky.colorIdx];
          return (
            <div
              key={sticky.id}
              className="sticky-note"
              style={{ background: color.bg, borderColor: color.border }}
            >
              <div className="sticky-header" style={{ background: color.header }}>
                <button
                  className="sticky-close"
                  onClick={() => deleteSticky(sticky.id)}
                  style={{ borderColor: color.border }}
                >
                  ×
                </button>
                <button
                  className="sticky-color-btn"
                  onClick={() => changeColor(sticky.id)}
                  style={{ borderColor: color.border }}
                  title="Change color"
                >
                  🎨
                </button>
              </div>
              <textarea
                className="sticky-textarea"
                value={sticky.text}
                onChange={(e) => updateText(sticky.id, e.target.value)}
                placeholder="Type a note..."
                spellCheck={false}
                style={{ background: color.bg }}
              />
            </div>
          );
        })}
        {stickies.length === 0 && (
          <div className="stickies-empty">
            No stickies yet — click "+ New Note" to create one!
          </div>
        )}
      </div>
    </div>
  );
};

export default StickiesContent;
