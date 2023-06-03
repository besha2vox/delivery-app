import { useSelector } from 'react-redux';
import { selectAllShops } from '../../../redux/shops/selectors';

import Title from '../Title/Title';
import { AddsList, AddsItem } from './Advertising.styled';

const Advertising = () => {
  const shops = useSelector(selectAllShops);

  return (
    <>
      <Title title="Реклама" />
      <AddsList>
        {shops.map(shop => (
          <AddsItem key={shop.name}>
            <img src={shop.adds} alt={shop.name} />
          </AddsItem>
        ))}
      </AddsList>
    </>
  );
};

export default Advertising;
