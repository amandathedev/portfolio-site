import { useState, useEffect, useRef, useCallback } from 'react';

const MacWindow = ({
  title,
  position,
  zIndex,
  width,
  height,
  onClose,
  onFocus,
  onMove,
  onResize,
  noPadding,
  children,
}) => {
  const [dragging, setDragging] = useState(false);
  const [resizing, setResizing] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [preZoom, setPreZoom] = useState(null);
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ mouseX: 0, mouseY: 0, w: 0, h: 0 });
  const onMoveRef = useRef(onMove);
  const onResizeRef = useRef(onResize);
  onMoveRef.current = onMove;
  onResizeRef.current = onResize;

  const handleMouseDown = useCallback((e) => {
    if (e.target.closest('.window-close-box') || e.target.closest('.window-zoom-box')) return;
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
      w: width,
      h: height,
    };
    onFocus();
  }, [width, height, onFocus]);

  useEffect(() => {
    if (!dragging) return;
    document.documentElement.classList.add('dragging-active');
    const handleMouseMove = (e) => {
      onMoveRef.current({
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
  }, [dragging]);

  useEffect(() => {
    if (!resizing) return;
    document.documentElement.classList.add('dragging-active');
    const handleMouseMove = (e) => {
      const { mouseX, mouseY, w, h } = resizeStart.current;
      const newW = Math.max(200, w + (e.clientX - mouseX));
      const newH = Math.max(120, h + (e.clientY - mouseY));
      if (onResizeRef.current) {
        onResizeRef.current({ width: newW, height: newH });
      }
    };
    const handleMouseUp = () => setResizing(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.documentElement.classList.remove('dragging-active');
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [resizing]);

  const handleZoom = (e) => {
    e.stopPropagation();
    if (zoomed) {
      if (preZoom) {
        onMoveRef.current(preZoom.position);
        if (onResizeRef.current) {
          onResizeRef.current({ width: preZoom.width, height: preZoom.height });
        }
      }
      setZoomed(false);
      setPreZoom(null);
    } else {
      setPreZoom({ position: { x: position.x, y: position.y }, width, height });
      onMoveRef.current({ x: 0, y: 22 });
      if (onResizeRef.current) {
        onResizeRef.current({ width: window.innerWidth, height: window.innerHeight - 22 });
      }
      setZoomed(true);
    }
  };

  return (
    <div
      className={`mac-window${resizing ? ' resizing' : ''}`}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
        width,
        height,
      }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar" onMouseDown={handleMouseDown}>
        <button
          className="window-close-box"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close window"
        />
        <span className="window-title">{title}</span>
        <button
          className="window-zoom-box"
          onClick={handleZoom}
          aria-label="Zoom window"
        />
      </div>
      <div className={`window-content ${noPadding ? 'no-padding' : 'has-padding'}`}>
        {children}
      </div>
      <div className="window-resize-handle" onMouseDown={handleResizeDown} />
    </div>
  );
};

export default MacWindow;
