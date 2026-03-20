import { useState } from 'react';

const NetscapeWindow = ({ url, imageUrl }) => {
  const [loading, setLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);
  const domain = url.replace(/^https?:\/\//, '').split('/')[0];
  const isImage = !!imageUrl;

  const handleReload = () => {
    setLoading(true);
    if (isImage) {
      setTimeout(() => setLoading(false), 300);
    } else {
      setIframeKey((k) => k + 1);
    }
  };

  return (
    <div className="netscape-window">
      <div className="netscape-toolbar">
        <div className="netscape-toolbar-row">
          <div className="netscape-brand">
            <span className="netscape-n">N</span>
          </div>
          <div className="netscape-buttons">
            <button className="netscape-btn" disabled>Back</button>
            <button className="netscape-btn" disabled>Forward</button>
            <button className="netscape-btn" onClick={handleReload}>Reload</button>
            <button className="netscape-btn" disabled>Stop</button>
          </div>
          <div className={`netscape-globe${loading ? ' spinning' : ''}`}>
            <div className="netscape-globe-inner">🌐</div>
          </div>
        </div>
        <div className="netscape-address-row">
          <span className="netscape-address-label">Location:</span>
          <div className="netscape-address-input">{url}</div>
        </div>
      </div>

      <div className="netscape-content">
        {isImage ? (
          <img
            className="netscape-screenshot"
            src={imageUrl}
            alt={`Screenshot of ${domain}`}
            onLoad={() => setLoading(false)}
          />
        ) : (
          <iframe
            key={iframeKey}
            title={`Netscape: ${domain}`}
            src={url}
            onLoad={() => setLoading(false)}
          />
        )}
      </div>

      <div className="netscape-status">
        <span>{loading ? `Transferring data from ${domain}...` : 'Document: Done'}</span>
      </div>
    </div>
  );
};

export default NetscapeWindow;
