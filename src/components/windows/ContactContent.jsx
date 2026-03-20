const contacts = [
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    detail: 'amandathedev',
    url: 'https://github.com/amandathedev',
  },
  {
    icon: 'fab fa-medium-m',
    label: 'Medium',
    detail: '@amandathedev',
    url: 'https://medium.com/@amandathedev',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    detail: 'amandathedev@gmail.com',
    url: 'mailto:amandathedev@gmail.com',
  },
  {
    icon: 'fab fa-chrome',
    label: 'Chrome Store',
    detail: 'Extensions',
    url: 'https://chrome.google.com/webstore/search/amanda%20treutler',
  },
];

const ContactContent = () => (
  <div className="contact-content">
    <p>Get in touch — click any card below!</p>

    <div className="contact-grid">
      {contacts.map((c) => (
        <a
          key={c.label}
          className="contact-card"
          href={c.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.label}
        >
          <i className={c.icon}></i>
          <div className="contact-card-info">
            <strong>{c.label}</strong>
            <span>{c.detail}</span>
          </div>
        </a>
      ))}
    </div>
  </div>
);

export default ContactContent;
