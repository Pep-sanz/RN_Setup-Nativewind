import React from 'react';
import CustomLayout from '../../lib/layout/CustomLayout';
import CustomText from '../../components/CustomText';
import CustomView from '../../components/CustomView';

const Wishlist = () => {
  return (
    <CustomLayout>
      <CustomView className="flex-1 justify-center items-center">
        <CustomText>Wishlist Screen</CustomText>
      </CustomView>
    </CustomLayout>
  );
};

export default Wishlist;
