const constants = {
  error: '#f5222d',
  vote: '#b6b6b6',
  upvote: '#12F9D7',
  downvote: '#D64461'
};

const dark = {
  ...constants,
  normalText: '#ffffff',
  mutedText: '#b0b8bf',
  border: '#333333',
  accent: '#12F9D7',
  pageBackground: '#1b1b1b',
  voteButtonHover: '#383838',
  foreground: '#262626',
  activeBackground: '#333333',
  inputBackground: '#212121',
  shadow: 'rgba(0, 0, 0, 0.4)'
};

const light = {
  ...constants,
  normalText: '#454f5b',
  mutedText: '#818e99',
  border: '#ebedf0',
  accent: '#1890ff',
  pageBackground: '#f4f6f8',
  voteButtonHover: '#f2f2f2',
  foreground: '#ffffff',
  activeBackground: '#fafafa',
  inputBackground: '#fcfcfc',
  shadow: 'rgba(0, 0, 0, 0.05)'
};

const theme = isDark => (isDark ? dark : light);

export default theme;
