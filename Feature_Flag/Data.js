const dummyApiResponse = {
  showLightAndDarkMode: false,
  showTicTacToeBoard: true,
  showStarRating: true,
  showQRGenerator: false,
  showTreeView: true,
};

const featureFlagsDataServiceCall = () => {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    else reject("Some error occrued! Please try again...");
  });
};

export default featureFlagsDataServiceCall;
