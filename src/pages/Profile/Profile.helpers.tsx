import { UserProfile } from 'types';
import * as Yup from 'yup';

import { latinAndNumbersAndSpecialChars } from 'utils';

Yup.addMethod(Yup.string, 'latinNumbersSpecialChars', function yupLatinNumbersSpecialChars(message: string) {
  return this.test('latinNumbersSpecialChars', message, (str) => latinAndNumbersAndSpecialChars.test(str));
});

export const validationSchema = Yup.object().shape({
  userName: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(128),
  company: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(128),
  telephone: Yup.object().shape({
    countryCode: Yup.string(),
    body: Yup.string().max(31),
  }),
  city: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(128),
  street: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(128),
  office: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(32),
  building: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(128),
  zipcode: Yup.string().latinNumbersSpecialChars('Should contain latin, digits or special characters').max(20),
  avatarUrl: Yup.string(),
});

export type TInitialValues = UserProfile;
