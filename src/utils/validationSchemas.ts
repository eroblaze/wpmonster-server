export const settingsSchemas = {};
export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        max: 30
      }
    },
    isString: {
      errorMessage: "'username' must be a string"
    }
  },
  password: {
    notEmpty: {
      errorMessage: "password cannot be empty"
    }
  }
};
