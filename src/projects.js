// Single source of truth for the portfolio project list.
//
// Both views render from this array: the Mac OS desktop window
// (components/windows/PortfolioContent.jsx) and the iPhone home screen
// (components/IPhoneView.jsx). Add a project once, here.
//
// Link fields:
//   label      Text shown on the link.
//   url        Where it points. Desktop uses this directly.
//   embeddable Desktop only — opens inside the Netscape window instead of a
//              new tab. Set it only for sites that allow framing (no
//              X-Frame-Options, no frame-ancestors CSP). Mobile ignores it.
//   imageUrl   Renders this image instead of loading the page. Mobile has no
//              Netscape window, so it links straight to the image.
export const projects = [
  {
    name: 'The Period Collective',
    desc: 'Nonprofit providing menstrual products to people in need in Chicago.',
    icon: '🌸',
    links: [
      { label: 'Live Site', url: 'https://theperiodcollective.org/', embeddable: true },
      { label: 'GitHub', url: 'https://github.com/amandathedev/period-collective' },
    ],
  },
  {
    name: 'World Cup 2026',
    desc: 'Live schedule, standings, bracket, and pick’em for the 2026 World Cup.',
    icon: '⚽',
    links: [
      { label: 'Live Site', url: 'https://worldcupppp.netlify.app/', embeddable: true },
    ],
  },
  {
    name: 'Love Island Villa',
    desc: 'Drag-and-drop couples tracker for Love Island USA. Recouple the villa, rank islanders, keep notes.',
    icon: '🏝️',
    links: [
      { label: 'Live Site', url: 'https://loveislandvilla.netlify.app/', embeddable: true },
    ],
  },
  {
    name: 'Sequin',
    desc: 'The debit card that fights the Pink Tax. (Now defunct)',
    icon: '💳',
    links: [
      { label: 'Screenshot', url: 'https://sequincard.com/', imageUrl: '/sequin-screenshot.png' },
    ],
  },
  {
    name: 'Sample Size',
    desc: 'Chrome extension for quick analytics sampling.',
    icon: '📊',
    links: [
      { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/sample-size/liibkodidconnkfecofhjbhkbdpmaick' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sample-size' },
    ],
  },
  {
    name: 'UnitSwitch',
    desc: 'Chrome extension for instant unit conversions.',
    icon: '🔄',
    links: [
      { label: 'Chrome Store', url: 'https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/unit-switch' },
    ],
  },
  {
    name: 'Cute Sudoku',
    desc: 'A cute and fun Sudoku puzzle game.',
    icon: '🧩',
    links: [
      { label: 'Live Site', url: 'https://cutesudoku.netlify.app/', embeddable: true },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sudoku' },
    ],
  },
];

export default projects;
