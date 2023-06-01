import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeUserInfo } from 'redux/cart/operations';
import { selectUserInfo } from 'redux/cart/selectors';

import {
  UserInfoWrapper,
  UserInfoLabel,
  UserInfoInput,
} from './OrderedForm.styled';

const OrderedForm = () => {
  const initialValues = useSelector(selectUserInfo);
  const [values, setValues] = useState(initialValues);
  const dispatch = useDispatch();

  const handleChange = e => {
    const [name, value] = [e.target.name, e.target.value];
    setValues(prevState => ({ ...prevState, [name]: value }));
    dispatch(changeUserInfo(values));
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
        />
      </UserInfoLabel>
    </UserInfoWrapper>
  );
};

export default OrderedForm;
