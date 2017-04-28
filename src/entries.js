const resolvePicture = (folder) => (picture) => Object.assign(
  {}, picture, {file: folder(`./${picture.file}`, true)});

export default (data, folder) => {
  return Object.keys(data)
  .map((key) => data[key])
  .map((entry) => Object.assign(
    {}, entry, {pictures: entry.pictures.map(resolvePicture(folder))}
  ));
};
