import axios from 'axios';

// Define the mapping from string to numeric scale
const scaleMapping: { [key: string]: number } = {
  'strongly disagree': 1,
  'disagree': 2,
  'neither agree nor disagree': 3,
  'agree': 4,
  'strongly agree': 5
};

// Define the columns for each decision style
const decisionStyleColumns = {
  Intuitive: ['Q8.2_1', 'Q8.2_3', 'Q8.2_12', 'Q8.2_16', 'Q8.2_17'],
  Dependent: ['Q8.2_2', 'Q8.2_5', 'Q8.2_10', 'Q8.2_18', 'Q8.2_22'],
  Rational: ['Q8.2_4', 'Q8.2_7', 'Q8.2_11', 'Q8.2_13', 'Q8.2_25'],
  Avoidant: ['Q8.2_6', 'Q8.2_14', 'Q8.2_19', 'Q8.2_21', 'Q8.2_23'],
  Spontaneous: ['Q8.2_8', 'Q8.2_9', 'Q8.2_15', 'Q8.2_20', 'Q8.2_24'],
};

// Function to fetch initial data
const fetchInitialData = async () => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get(`${apiUrl}/survey/answer`);
    return response.data;
  } catch (error) {
    console.error('Error fetching decision making data:', error);
    return {}; // Return an empty object in case of error
  }
};

// Function to map the data and calculate decision styles
const calculateDecisionStyles = (data: { [key: string]: string }) => {
  // Map the data to numeric values
  const mappedData: { [key: string]: number } = Object.keys(data).reduce((acc, key) => {
    const value = data[key];
    if (value in scaleMapping) {
      acc[key] = scaleMapping[value];
    }
    return acc;
  }, {} as { [key: string]: number });

  // Calculate scores for each decision style
  const decisionStyles = {
    Intuitive: decisionStyleColumns.Intuitive.map((col) => mappedData[col]).reduce((a, b) => a + b, 0) / decisionStyleColumns.Intuitive.length,
    Dependent: decisionStyleColumns.Dependent.map((col) => mappedData[col]).reduce((a, b) => a + b, 0) / decisionStyleColumns.Dependent.length,
    Rational: decisionStyleColumns.Rational.map((col) => mappedData[col]).reduce((a, b) => a + b, 0) / decisionStyleColumns.Rational.length,
    Avoidant: decisionStyleColumns.Avoidant.map((col) => mappedData[col]).reduce((a, b) => a + b, 0) / decisionStyleColumns.Avoidant.length,
    Spontaneous: decisionStyleColumns.Spontaneous.map((col) => mappedData[col]).reduce((a, b) => a + b, 0) / decisionStyleColumns.Spontaneous.length,
  };

  return decisionStyles;
};

// Fetch data and calculate decision styles
const getDecisionStyles = async () => {
  const initialData = await fetchInitialData();
  return calculateDecisionStyles(initialData);
};

// Export decision styles
export const decisionStyles = getDecisionStyles();