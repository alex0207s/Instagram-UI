import Item from './item';

const IGStory: React.FC = () => {
  const mock_stories = [
    {
      id: 1,
      name: 'bruce_fe',
      avatar: '/images/avatars/a1.png',
    },
    {
      id: 2,
      name: 'max',
      avatar: '/images/avatars/a2.png',
    },
    {
      id: 3,
      name: 'fm',
      avatar: '/images/avatars/a3.png',
    },
    {
      id: 4,
      name: 'joanne',
      avatar: '/images/avatars/a4.png',
    },
    {
      id: 5,
      name: 'focus',
      avatar: '/images/avatars/a5.png',
    },
    {
      id: 6,
      name: 'louis',
      avatar: '/images/avatars/a6.png',
    },
    {
      id: 7,
      name: 'alvin',
      avatar: '/images/avatars/a7.png',
    },
    {
      id: 8,
      name: 'grace',
      avatar: '/images/avatars/a8.png',
    },
    {
      id: 9,
      name: 'rance',
      avatar: '/images/avatars/a9.png',
    },
    {
      id: 10,
      name: 'bruce_fe',
      avatar: '/images/avatars/a10.png',
    },
  ];

  mock_stories.map((item) => console.log(item));

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {mock_stories.map((item) => {
        const { id, name, avatar } = item;
        return <Item key={id} name={name} avatar={avatar} />;
      })}
    </div>
  );
};
export default IGStory;
