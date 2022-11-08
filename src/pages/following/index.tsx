import Header from '../../components/Header';
import Container from '../../components/Container';
import IGUser from '../../components/User';

const Following: React.FC = () => {
  const mock_friends = [
    {
      id: 1,
      location: 'Singapore',
      account: 'max_999',
      isFollowing: true,
      avatar: '/images/avatars/a1.png',
    },
    {
      id: 2,
      location: 'Singapore',
      account: 'fm_999',
      isFollowing: true,
      avatar: '/images/avatars/a2.png',
    },
    {
      id: 3,
      location: 'Singapore',
      account: 'joanne_999',
      isFollowing: true,
      avatar: '/images/avatars/a3.png',
    },
    {
      id: 4,
      location: 'Singapore',
      account: 'focus_999',
      isFollowing: true,
      avatar: '/images/avatars/a4.png',
    },
    {
      id: 5,
      location: 'Singapore',
      account: 'alvin_999',
      isFollowing: true,
      avatar: '/images/avatars/a5.png',
    },
    {
      id: 6,
      location: 'Singapore',
      account: 'grace_999',
      isFollowing: true,
      avatar: '/images/avatars/a6.png',
    },
    {
      id: 7,
      location: 'Singapore',
      account: 'rance_999',
      isFollowing: true,
      avatar: '/images/avatars/a7.png',
    },
    {
      id: 8,
      location: 'Singapore',
      account: 'louis_999',
      isFollowing: true,
      avatar: '/images/avatars/a8.png',
    },
    {
      id: 9,
      location: 'Singapore',
      account: 'bruce_999',
      isFollowing: true,
      avatar: '/images/avatars/a9.png',
    },
    {
      id: 10,
      location: 'Singapore',
      account: 'gogo_999',
      isFollowing: true,
      avatar: '/images/avatars/a10.png',
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {mock_friends.map((item) => {
            const { id, location, account, isFollowing, avatar } = item;
            return (
              <div className="-mt-3">
                <IGUser
                  id={id}
                  location={location}
                  account={account}
                  isFollowing
                  avatar={avatar}
                  showFollow
                />
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Following;
