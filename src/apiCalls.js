export const getElonMuskDreams = () => {
  return fetch('https://api.spacexdata.com/v3/launches/').then(response =>
    response.json()
  );
};
