import isValidString from './is-valid-string';

export const trimTop = lines => {
  const result    = [];
  let lastValid = -1;
  for (let i = 0; i < lines.length; i += 1) {

    if (isValidString(lines[i])) {
      result.push(lines[i]);
      lastValid = i;
      continue;
    }

    if (lastValid >= 0) {
      result.push(lines[i]);
    }

  }

  return result;
};
export const trimBottom = lines => {
  let result = [].concat(lines);
  result.reverse();
  result = trimTop(result);
  result.reverse();
  return result;
};
export const trim = lines => {
  return trimBottom(trimTop(lines));
};

export default trim;
