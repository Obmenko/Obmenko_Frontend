/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import _ from 'lodash';
import FAQ from './FAQ';
import IMAGE_DICT, { ImageItem } from '@/const/assets/image';

const FAQPage: FC = () => {
  return (
    <>
      <Helmet title="Coins Shop">
        dada
      </Helmet>
      <FAQ />
    </>
  );

  function imageListToPreloadComponentList(fieldPath: string) {
    const data: ImageItem[] = _.get(IMAGE_DICT, fieldPath);

    return data.map((item, itemIndex) => (
      <link key={`${fieldPath}__${itemIndex}`} rel="preload" as="image" href={item.src} />
    ));
  }
};

export default FAQPage;
