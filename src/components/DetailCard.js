import React from 'react';
import { Typography, Stack} from '@mui/material';

export default function DetailCard({propertyDetail}) {
    const { image, price, address, description} = propertyDetail;

    return(
        <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
        <img src={image} alt={description} loading="lazy" className="detail-image" height="500px" width="500px"/>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <Typography sx={{ fontSize: { lg: '50px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
            {price}
          </Typography>
          <Typography>
            {address}
          </Typography>
          <Typography sx={{ fontSize: { lg: '18px', xs: '10px' } }} color="#4F4C4C">
          {description}
          </Typography>
        </Stack>
      </Stack>
    )
}