const limitText = (text, maxLength) =>
  text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

export default limitText;
