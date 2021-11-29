/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/require-default-props */
import React, {
  FC, useCallback, useState,
} from 'react';
import clsx from 'clsx';

import classes from './Slider.module.scss';

interface PropsType {
  className?: string;
  wrapperClassName?: string;
  activeSlideIndex: number;
  onChange: { (itemIndex: number): void };
  items: JSX.Element[];
  noControls: boolean
}

const Slider: FC<PropsType> = ({
  className,
  activeSlideIndex,
  onChange,
  items,
  noControls,
  wrapperClassName,
}) => {
  const [waitingDirection, setWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [lastWaitingDirection, setLastWaitingDirection] = useState<'left' | 'right' | null>(null);
  const [touchStart, setTouchStart] = useState<null | number>(null);

  const memoGetAnimationClass = useCallback(getAnimationClass, [lastWaitingDirection]);
  const memoOnSwitch = useCallback(onSwitch, [items.length, onChange]);
  const memoOnClick = useCallback(onClick, [activeSlideIndex, waitingDirection, memoOnSwitch]);
  const memoOnTouchStart = useCallback(onTouchStart, []);
  const memoOnTouchEnd = useCallback(onTouchEnd, [activeSlideIndex, items.length, memoOnClick, touchStart]);

  return (
    <div
      className={clsx(classes.root, wrapperClassName)}
    >
      <div
        className={clsx(classes[`slide_${activeSlideIndex}`], 'animate__animated', memoGetAnimationClass(waitingDirection), className)}
        onTouchStart={memoOnTouchStart}
        onTouchEnd={memoOnTouchEnd}
      >
        {
          items[activeSlideIndex]
        }
      </div>
      {
        items.length > 1 && !noControls && (
          <div className={classes.controls}>
            {
              items.map((item, itemIndex) => (
                <div
                  className={
                    clsx(
                      classes['controls-item'],
                      activeSlideIndex === itemIndex && classes['controls-item__active'],
                    )
                  }
                  key={`slide_item__${itemIndex}`}
                  onClick={memoOnClick(itemIndex)}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setTouchStart(e.touches[0].clientX);
  }
  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStart === null) return;

    if (Math.abs(touchStart - e.changedTouches[0].pageX) <= 80) return;

    if ((touchStart !== null) && (touchStart > e.changedTouches[0].pageX)) {
      memoOnClick((activeSlideIndex + 1) % items.length)();
      setTouchStart(null);
    } else if ((touchStart !== null) && (touchStart < e.changedTouches[0].pageX)) {
      memoOnClick(activeSlideIndex === 0 ? items.length - 1 : (activeSlideIndex - 1) % items.length)();
      setTouchStart(null);
    }
  }

  function onClick(index: number) {
    return () => {
      // eslint-disable-next-line max-len
      if (waitingDirection) return;
      if (index > activeSlideIndex) memoOnSwitch('right', index);
      else memoOnSwitch('left', index);
    };
  }

  function onSwitch(direction: 'left' | 'right', nextItemIndex: number) {
    if (items.length > 1) {
      setWaitingDirection(direction);
      setTimeout(() => {
        onChange(nextItemIndex);
        setLastWaitingDirection(direction);
        setWaitingDirection(null);
      }, 500);
    }
  }

  function getAnimationClass(direction: 'left' | 'right' | null) {
    let className = 'animate__fadeInLeft';
    if (direction) {
      if (direction === 'left') className = 'animate__fadeOutRight';
      else className = 'animate__fadeOutLeft';
    } else if (lastWaitingDirection) {
      if (lastWaitingDirection === 'left') className = 'animate__fadeInLeft';
      else className = 'animate__fadeInRight';
    }
    return className;
  }
};

export default Slider;
