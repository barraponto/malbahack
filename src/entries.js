import data from './data.json';

const picturesFolder = require.context('../data/images', true);

const loadFiles = (picture) => Object.assign(
  picture, {file: picturesFolder(`./${picture.file}`, true)});

const entries = Object.keys(data)
  .map((key) => data[key])
  .map((entry) => Object.assign(
    entry, {pictures: entry.pictures.map(loadFiles)}));

const about = entries.find((entry) => entry.basename === 'about');

export default entries.filter((entry) => entry.basename !== 'about');
export {about};
