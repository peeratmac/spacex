export const getElonMuskDreams = () => {
  return fetch('https://api.spacexdata.com/v3/launches/').then(response => {
    if (!response.ok) {
      throw Error('Error with GET request to retreive all Launches Data');
    }
    return response.json();
  });
};
