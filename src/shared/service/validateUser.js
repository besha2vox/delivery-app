import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім`я є обов'язковим полем")
    .matches(
      /^[\p{L}' -]+$/u,
      'Ім`я може містити лише літери, апостроф, тире та пробіли.'
    ),
  email: Yup.string()
    .email('Введіть коректну електронну пошту')
    .required("Електронна пошта є обов'язковим полем"),
  phone: Yup.string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      'Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +'
    )
    .required("Номер телефону є обов'язковим полем"),
  address: Yup.string().required("Адреса є обов'язковим полем"),
});

export const validateField = async (field, value, setError) => {
  try {
    await validationSchema.validateAt(field, value);
    setError(prevError => ({
      ...prevError,
      [field]: '',
    }));
  } catch (error) {
    console.log({ error });
    setError(prevError => ({
      ...prevError,
      [field]: error.message,
    }));
  }
};
