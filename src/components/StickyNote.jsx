import { useState, useEffect, useRef, useCallback } from 'react';

const StickyNote = ({ id, color, text, position, size, zIndex, onMove, onResize, onClose, onFocus, onTextChange }) => {
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ mouseX: 0, mouseY: 0, w: 0, h: 0 });
  const onMoveRef = useRef(onMove);
  const onResizeRef = useRef(onResize);
  onMoveRef.current = onMove;
  onResizeRef.current = onResize;

  const handleDragDown = useCallback((e) => {
    if (e.target.closest('.sticky-note-close')) return;
    e.preventDefault();
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  }, [position.x, position.y, onFocus]);

  const handleResizeDown = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setResizing(true);
    resizeStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      w: size.width,
      h: size.height,
    };
    onFocus();
  }, [size.width, size.height, onFocus]);

  useEffect(() => {
    if (!dragging) return;
    document.documentElement.classList.add('dragging-active');
    const handleMouseMove = (e) => {
      onMoveRef.current(id, {
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };
    const handleMouseUp = () => setDragging(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.documentElement.classList.remove('dragging-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, id]);

  useEffect(() => {
    if (!resizing) return;
    document.documentElement.classList.add('dragging-active');
    const handleMouseMove = (e) => {
      const { mouseX, mouseY, w, h } = resizeStart.current;
      onResizeRef.current(id, {
        width: Math.max(140, w + (e.clientX - mouseX)),
        height: Math.max(80, h + (e.clientY - mouseY)),
      });
    };
    const handleMouseUp = () => setResizing(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.documentElement.classList.remove('dragging-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizing, id]);

  return (
    <div
      className="sticky-note-float"
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        background: color.bg,
        borderColor: color.border,
        zIndex,
      }}
      onMouseDown={onFocus}
    >
      <div
        className="sticky-note-header"
        style={{ background: color.header }}
        onMouseDown={handleDragDown}
      >
        <button
          className="sticky-note-close"
          style={{ borderColor: color.border }}
          aria-label="Close sticky note"
          onClick={(e) => { e.stopPropagation(); onClose(id); }}
        />
      </div>
      <textarea
        className="sticky-note-text"
        value={text}
        onChange={(e) => onTextChange(id, e.target.value)}
        spellCheck={false}
        style={{ background: color.bg }}
        placeholder="Type a note..."
      />
      <div
        className="sticky-note-resize"
        onMouseDown={handleResizeDown}
        style={{ borderColor: color.border }}
      />
    </div>
  );
};

export default StickyNote;
