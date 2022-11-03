import React from 'react';

interface UserProps {
  size?: 'medium' | 'small';
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
}

const IGUser: React.FC<React.PropsWithChildren<UserProps>> = ({
  size = 'small',
  showFollow = false,
  isFollowing = false,
  account,
  location,
  avatar,
  id,
}) => {
  return (
    <div className="flex h-[70px] items-center box-border px-4">
      <div
        className={`${
          size === 'small' ? 'w-[40px] h-[40px]' : 'w-[60px] h-[60px]'
        } overflow-hidden rounded-full`}
        style={{
          backgroundImage: `url(${avatar})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="ml-4">
        <p className="font-bold text-sm">{account}</p>
        <p className="text-gray-400 text-xs">{location}</p>
      </div>
      {showFollow && (
        <p
          className={`${
            isFollowing ? 'text-gray-700' : 'text-blue-400'
          } ml-auto text-xs font-bold  cursor-pointer`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </p>
      )}
    </div>
  );
};

export default IGUser;