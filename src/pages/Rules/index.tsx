/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import _ from 'lodash';
import Rules from './Rules';
import IMAGE_DICT, { ImageItem } from '@/const/assets/image';

const RulesPage: FC = () => {
  return (
    <>
      <Helmet title="Coins">
        dada
      </Helmet>
      <Rules />
    </>
  );

  function imageListToPreloadComponentList(fieldPath: string) {
    const data: ImageItem[] = _.get(IMAGE_DICT, fieldPath);

    return data.map((item, itemIndex) => (
      <link key={`${fieldPath}__${itemIndex}`} rel="preload" as="image" href={item.src} />
    ));
  }
};

export default RulesPage;
