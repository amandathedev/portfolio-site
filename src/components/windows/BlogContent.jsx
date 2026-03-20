const posts = [
  {
    title: 'How to Solve an Anagram Algorithm Using a Frequency Counter',
    url: 'https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef?source=friends_link&sk=ba35bb0ca601145b6f7e7dc5803eaed3',
    date: 'December 20, 2019',
  },
  {
    title: 'CSS Specificity Made Simple',
    url: 'https://levelup.gitconnected.com/css-specificity-made-simple-772f1d31f094?source=friends_link&sk=bac87b411006b8c9f8782cac24bff1e3',
    date: 'December 14, 2019',
  },
  {
    title: 'The Basics of Web Design Accessibility',
    url: 'https://levelup.gitconnected.com/the-basics-of-web-design-accessibility-af8b642124c4?source=friends_link&sk=0d0cb4493dbcaf433912657a8597605f',
    date: 'December 7, 2019',
  },
  {
    title: 'Building a Chrome Extension in React in 10 Minutes',
    url: 'https://levelup.gitconnected.com/building-a-chrome-extension-in-react-in-10-minutes-737023fa4918?source=friends_link&sk=dabe44713a926fabd6f4181e028cb146',
    date: 'November 23, 2019',
  },
  {
    title: 'What I wish someone had told me before starting a coding boot camp',
    url: 'https://medium.com/swlh/what-i-wish-someone-had-told-me-before-starting-a-coding-boot-camp-ccbdfe9ddf60?source=friends_link&sk=4f4d4c6a6128a799e39d7f42b8d15aa3',
    date: 'October 21, 2019',
  },
  {
    title: 'The Demise of form_for',
    url: 'https://medium.com/@amandathedev/the-demise-of-form-for-11905643e97b',
    date: 'August 1, 2019',
  },
];

const DocIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 1H10L13 4V15H3V1Z" fill="#FAFAFA" stroke="#999" strokeWidth="1" />
    <path d="M10 1V4H13" fill="#E0E0E0" stroke="#999" strokeWidth="1" />
    <line x1="5" y1="7" x2="11" y2="7" stroke="#CCC" strokeWidth="0.8" />
    <line x1="5" y1="9.5" x2="11" y2="9.5" stroke="#CCC" strokeWidth="0.8" />
    <line x1="5" y1="12" x2="9" y2="12" stroke="#CCC" strokeWidth="0.8" />
  </svg>
);

const BlogContent = () => (
  <div className="blog-content">
    {posts.map((post) => (
      <div key={post.title} className="blog-item">
        <div className="blog-item-icon">
          <DocIcon />
        </div>
        <div className="blog-item-text">
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
          <div className="blog-date">{post.date}</div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogContent;
