const PROCESS = (data = {}, callback) => {
  const { name, dob, gender } = data;
  const dobArray = dob.split('-');
  const error = [];

  if (!name) 
    error.push('Please provide your name');

  if (!name) 
    error.push('Please provide your Date of Birth');

  if (!gender) 
    error.push('Please select a gender');
    
  if (dobArray.length !== 3) 
    error.push('Please provide a valid date of birth.\r\nFormat of the date of birth should be YYYY-MM-DD e.g 2000-03-02');

  if (new Date().getFullYear() < dobArray[0])
    error.push('You cannot be born in the future');

  const age = new Date().getFullYear() - dobArray[0];
  const result = error.length >= 1 ? null : `Hello ${name}! You are ${age} years old`;

  callback(error.length < 1 ? null : error, result);
};

module.exports = PROCESS;
