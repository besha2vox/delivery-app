import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserInfo } from 'redux/cart/operations';
import { selectUserInfo } from 'redux/cart/selectors';

import { validateField } from 'shared/service/validateUser';

import {
  UserInfoWrapper,
  UserInfoLabel,
  UserInfoInput,
} from './OrderedForm.styled';

const OrderedForm = ({ setError }) => {
  const initialValues = useSelector(selectUserInfo);
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = e => {
    const [name, value] = [e.target.name, e.target.value];
    setValues(prevState => ({ ...prevState, [name]: value }));
    dispatch(changeUserInfo(values));
  };

  const handleBlur = async field => {
    await validateField(field, values, setError);
  };

  return (
    <UserInfoWrapper>
      <UserInfoLabel>
        Ім'я:
        <UserInfoInput
          name="name"
          type="text"
          value={values.name}
          placeholder="Сергій"
          onChange={handleChange}
          onBlur={() => handleBlur('name')}
        />
      </UserInfoLabel>
      <UserInfoLabel>
        Email:
        <UserInfoInput
          name="email"
          type="email"
          value={values.email}
          placeholder="example@mail.com"
          onChange={handleChange}
          onBlur={() => handleBlur('email')}
        />
      </UserInfoLabel>
      <UserInfoLabel>
        Телефон:
        <UserInfoInput
          name="phone"
          type="phone"
          value={values.phone}
          placeholder="+3800000000000"
          onChange={handleChange}
          onBlur={() => handleBlur('phone')}
        />
      </UserInfoLabel>
      <UserInfoLabel>
        Адреса:
        <UserInfoInput
          name="address"
          type="text"
          value={values.address}
          placeholder="Дніпро, вул. Січеславська Набережна, 31/2"
          onChange={handleChange}
          onBlur={() => handleBlur('address')}
        />
      </UserInfoLabel>
    </UserInfoWrapper>
  );
};

export default OrderedForm;
