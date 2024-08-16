import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    // Uncomment the following lines to enable additional login options
    // phone: true,
    // username: true
  },
  // Uncomment to customize sign-up fields
  // signUpAttributes: ['email', 'name'],
  // Uncomment to customize password policy
  // passwordPolicyMin: {
  //   length: 8,
  //   requireNumbers: true,
  //   requireSpecialCharacters: true,
  //   requireLowercase: true,
  //   requireUppercase: true,
  // },
});
