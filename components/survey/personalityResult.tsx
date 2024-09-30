import axios from 'axios';

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

// Function to fetch initial data
const fetchInitialData = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(`${apiUrl}/survey/answer`);
    return response.data;
  } catch (error) {
    console.error('Error fetching personality data:', error);
    return {}; // Return an empty object in case of error
  }
};

// Map personality data from strings to numbers
const mapPersonalityData = (personalityData: { [key: string]: string }) => {
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

  return mappedData;
};

// Calculate the Big Five personality traits
const calculateBigFive = (mappedData: { [key: string]: number }) => {
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

// Fetch data and calculate personality big five
const getPersonalityBigFive = async () => {
  const initialData = await fetchInitialData();
  const mappedData = mapPersonalityData(initialData);
  return calculateBigFive(mappedData);
};

// Export personality big five
export const personalityBigFive = getPersonalityBigFive();