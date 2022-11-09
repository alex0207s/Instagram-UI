import React from 'react';

type ItemProps = {
  name: string;
  avatar: string;
  isLoading: boolean;
};

const Item: React.FC<React.PropsWithChildren<ItemProps>> = ({
  name,
  avatar,
  isLoading,
}) => {
  return isLoading ? (
    <div className="text-center">
      <div
        className="w-[56px] h-[56px] border-2 bg-gray-200 border-gray-300 rounded-full mx-[11px] overflow-hidden"
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <p className="text-xs mt-1"></p>
    </div>
  ) : (
    <div className="text-center">
      <div
        className="w-[56px] h-[56px] ring-2 border-2 border-white ring-red-500 rounded-full mx-[11px] overflow-hidden"
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <p className="text-xs mt-1">{name}</p>
    </div>
  );
};

export default Item;
