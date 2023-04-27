const axios = require('axios');
const { restCountryAPIKey } = require('../../config');

let previouslyCachedTimestamp = null;
const localConversionRate = {};

const updateConversionToSEK = (conversionInEuro) => {
  const euroToSEK = conversionInEuro.SEK;
  for (const [key, value] of Object.entries(conversionInEuro)) {
    localConversionRate[key] = value / euroToSEK;
  }
};

const getConversionRate () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

getConversionRate();
// setInterval(() => {
//   getConversionRate();
// }, 5000);

const getLatestRates = () => localConversionRate;

const getConversionRate2 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate3 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate4 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate5 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate6 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate7 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate8 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRate9 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate10 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate11 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate12 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate13 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate14 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate15 = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRateq = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatew = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatee = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRater = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatet = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatey = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRate = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRateu = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatei = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateo = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatep = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatea = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRates = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRated = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRatef = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateg = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateh = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatej = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatek = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatel = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatez = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRatex = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatec = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatev = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateb = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRaten = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatem = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateqq = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRateww = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateee = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRaterr = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatett = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateyy = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateuu = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateii = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRateoo = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatepp = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateaa = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatess = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRatedd = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRateff = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

const getConversionRategg = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};


const getConversionRatehh = () => {
  axios.get(`http://data.fixer.io/api/latest?access_key=${restCountryAPIKey}`)
    .then((response) => {
      const { success, timestamp, rates } = response.data;
      // Update local data only when there's an update in currency rate
      if (success && previouslyCachedTimestamp !== timestamp) {
        updateConversionToSEK(rates);
        previouslyCachedTimestamp = timestamp;
      }
    })
    .catch((error) => {
      console.error('Cannot get currency conversion info', error);
    });
};

// this is some commented code

const updateConversionToSEK = (conversionInEuro) => {
  const euroToSEK = conversionInEuro.SEK;
  for (const [key, value] of Object.entries(conversionInEuro)) {
    localConversionRate[key] = value / euroToSEK;
  }
};

module.exports = getLatestRates;
