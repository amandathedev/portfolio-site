const TrashContent = () => (
  <div style={{ textAlign: 'center', padding: '40px 20px', color: '#888' }}>
    <svg viewBox="0 0 48 48" width="64" height="64" style={{ opacity: 0.4, marginBottom: 12 }}>
      <path d="M14 16H34V42H14V16Z" fill="#D0D0D0" stroke="#777" strokeWidth="1.5"/>
      <path d="M10 12H38V16H10V12Z" fill="#BFBFBF" stroke="#777" strokeWidth="1.5" rx="1"/>
      <path d="M18 8H30V12H18V8Z" fill="#CCCCCC" stroke="#777" strokeWidth="1.5" rx="1"/>
      <line x1="20" y1="20" x2="20" y2="38" stroke="#999" strokeWidth="1.5"/>
      <line x1="24" y1="20" x2="24" y2="38" stroke="#999" strokeWidth="1.5"/>
      <line x1="28" y1="20" x2="28" y2="38" stroke="#999" strokeWidth="1.5"/>
    </svg>
    <div style={{ fontSize: 12, fontWeight: 'bold', marginBottom: 4 }}>Trash is empty</div>
    <div style={{ fontSize: 11 }}>0 items, zero K available</div>
  </div>
);

export default TrashContent;
