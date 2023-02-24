export function getUserGeoLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let userLongitude = position.coords.longitude;
          let userLatitude = position.coords.latitude;
          resolve({ latitude: userLatitude, longitude: userLongitude });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      reject(new Error('Geolocation not supported'));
    }
  });
}
