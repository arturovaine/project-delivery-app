const EmailPasswordValidation = (email, password) => {
  const SIX = 6;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validEmail = emailRegex.test(email);
  const validPassword = password.length >= SIX;

  if (validEmail === true && validPassword === true) return true;
  return false;
};

export default EmailPasswordValidation;