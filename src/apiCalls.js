export const getElonMuskDreams = () => {
  return fetch('https://api.spacexdata.com/v3/launches/').then(response => {
    if (!response.ok) {
      throw Error('Error with GET request to retreive all Launches Data');
    }
    return response.json();
  });
};

export const getFutureElonMuskDreams = () => {
  return fetch('https://api.spacexdata.com/v3/launches/upcoming').then(
    response => {
      if (!response.ok) {
        throw Error('Error with GET request to retrieve future Launches Data');
      }
      return response.json();
    }
  );
};
