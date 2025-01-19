import { useCollapse } from 'react-collapsed';
import React, { useState } from 'react';
import { CiCircleMinus } from 'react-icons/ci';
import { CiCirclePlus } from 'react-icons/ci';
const Card = ({ head, className }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <div className={className}>
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-new font-medium">{head}</h2>
          <div
            className="mt-0"
            {...getToggleProps({
              onClick: () => setExpanded(prevExpanded => !prevExpanded),
            })}
          >
            {isExpanded ? (
              <CiCircleMinus className="text-4xl font-extrabold text-[#98A2B3]" />
            ) : (
              <CiCirclePlus className="text-4xl font-extrabold text-[#98A2B3]" />
            )}
          </div>
        </div>
        <div
          className="text-md font-new text-[#475467] text-left"
          {...getCollapseProps()}
        >
          Yes, you can try us for free for 30 days. If you want, we’ll provide
          you with a free, personalized 30-minute onboarding call to get you up
          and running as soon as possible.
        </div>
      </div>
    </>
  );
};
export default Card;
