// Define the mapping from string values to numeric scale
const scaleMapping: { [key: string]: number } = {
  'strongly disagree': 1,
  'disagree': 2,
  'somewhat disagree': 3,
  'neither agree nor disagree': 4,
  'somewhat agree': 5,
  'agree': 6,
  'strongly agree': 7
};

// Define the reverse scoring items
const reverseItems = ['Q7.2_3', 'Q7.2_6', 'Q7.2_10', 'Q7.2_14'];

// Initial data with answers in string format
const initialData = {
  'Q7.2_1': 'agree',
  'Q7.2_2': 'somewhat agree',
  'Q7.2_3': 'disagree',
  'Q7.2_4': 'strongly agree',
  'Q7.2_5': 'neither agree nor disagree',
  'Q7.2_6': 'agree',
  'Q7.2_7': 'strongly agree',
  'Q7.2_8': 'agree',
  'Q7.2_9': 'somewhat disagree',
  'Q7.2_10': 'disagree',
  'Q7.2_11': 'agree',
  'Q7.2_12': 'strongly agree',
  'Q7.2_13': 'somewhat agree',
  'Q7.2_14': 'strongly disagree',
  'Q7.2_15': 'agree'
};

// Define the interface for personality data
interface PersonalityData {
  [key: string]: string;
}

// Map personality data from strings to numbers
const personalityData: PersonalityData = initialData;

const mappedData: { [key: string]: number } = Object.keys(personalityData).reduce((acc, key) => {
  const value = personalityData[key];
  if (value in scaleMapping) {
    acc[key] = scaleMapping[value];
  }
  return acc;
}, {} as { [key: string]: number });

// Handle reverse scoring for specific items
reverseItems.forEach(item => {
  if (mappedData[item] !== undefined) {
    mappedData[item] = 8 - mappedData[item];
  }
});

// Calculate the Big Five personality traits
const calculateBigFive = () => {
  const Openness = (mappedData['Q7.2_7'] + mappedData['Q7.2_8'] + mappedData['Q7.2_9']) / 3;
  const Conscientiousness = (mappedData['Q7.2_13'] + mappedData['Q7.2_14'] + mappedData['Q7.2_15']) / 3;
  const Extraversion = (mappedData['Q7.2_4'] + mappedData['Q7.2_5'] + mappedData['Q7.2_6']) / 3;
  const Agreeableness = (mappedData['Q7.2_10'] + mappedData['Q7.2_11'] + mappedData['Q7.2_12']) / 3;
  const Neuroticism = (mappedData['Q7.2_1'] + mappedData['Q7.2_2'] + mappedData['Q7.2_3']) / 3;

  return {
    Conscientiousness,
    Openness,
    Extraversion,
    Agreeableness,
    Neuroticism
  };
};

// Calculate and export the Big Five personality traits
export const personalityBigFive = calculateBigFive();