// Define the mapping from string to numeric scale
const scaleMapping: { [key: string]: number } = {
    'strongly disagree': 1,
    'disagree': 2,
    'neither agree nor disagree': 3,
    'agree': 4,
    'strongly agree': 5
  };
  
  // Initial data (replace this with your actual data)
  const initialData = {
    'Q8.2_1': 'agree',
    'Q8.2_2': 'disagree',
    'Q8.2_3': 'neither agree nor disagree',
    'Q8.2_4': 'strongly agree',
    'Q8.2_5': 'agree',
    'Q8.2_6': 'strongly disagree',
    'Q8.2_7': 'agree',
    'Q8.2_8': 'disagree',
    'Q8.2_9': 'agree',
    'Q8.2_10': 'neither agree nor disagree',
    'Q8.2_11': 'strongly agree',
    'Q8.2_12': 'agree',
    'Q8.2_13': 'disagree',
    'Q8.2_14': 'agree',
    'Q8.2_15': 'strongly disagree',
    'Q8.2_16': 'agree',
    'Q8.2_17': 'disagree',
    'Q8.2_18': 'strongly agree',
    'Q8.2_19': 'agree',
    'Q8.2_20': 'disagree',
    'Q8.2_21': 'strongly agree',
    'Q8.2_22': 'agree',
    'Q8.2_23': 'disagree',
    'Q8.2_24': 'neither agree nor disagree',
    'Q8.2_25': 'agree'
  };
  
  // Define the columns for each decision style
  const decisionStyleColumns = {
    Intuitive: ['Q8.2_1', 'Q8.2_3', 'Q8.2_12', 'Q8.2_16', 'Q8.2_17'],
    Dependent: ['Q8.2_2', 'Q8.2_5', 'Q8.2_10', 'Q8.2_18', 'Q8.2_22'],
    Rational: ['Q8.2_4', 'Q8.2_7', 'Q8.2_11', 'Q8.2_13', 'Q8.2_25'],
    Avoidant: ['Q8.2_6', 'Q8.2_14', 'Q8.2_19', 'Q8.2_21', 'Q8.2_23'],
    Spontaneous: ['Q8.2_8', 'Q8.2_9', 'Q8.2_15', 'Q8.2_20', 'Q8.2_24'],
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
  
  // Filtered Data (assuming you have a condition to filter specific entries)
  const filteredData = initialData; // Apply your filtering logic here
  
  // Calculate and export decision styles for the filtered data
  export const decisionStyles = calculateDecisionStyles(filteredData);