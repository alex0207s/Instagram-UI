import Header from '../../components/Header';
import Container from '../../components/Container';
import IGStory from './components/IGStory';
import IGPost from './components/IGPost';
import IGProfile from './components/IGProfile';

const IGPostList: React.FC = () => {
  const mock_post = [
    {
      id: 1,
      location: 'Taipei',
      account: 'alex1',
      avatar: '/images/avatars/a1.png',
      photo: '/images/posts/main1.png',
      likes: 999,
      description: 'Adorable 😍',
      hashTags: '#ootd',
      createTime: '1 HOURS AGO',
    },
    {
      id: 2,
      location: 'Taipei',
      account: 'alex2',
      avatar: '/images/avatars/a2.png',
      photo: '/images/posts/main2.png',
      likes: 333,
      description: 'Chilling',
      hashTags: "#Let's gooooo",
      createTime: '5 HOURS AGO',
    },
    {
      id: 3,
      location: 'Taipei',
      account: 'alex3',
      avatar: '/images/avatars/a3.png',
      photo: '/images/posts/main3.png',
      likes: 777,
      description: 'Meow Meow',
      hashTags: '#Cattitude',
      createTime: '6 HOURS AGO',
    },
    {
      id: 4,
      location: 'Taipei',
      account: 'alex4',
      avatar: '/images/avatars/a4.png',
      photo: '/images/posts/main4.png',
      likes: 824,
      description: 'I am on vacation now.',
      hashTags: "#Let's gooooo",
      createTime: '7 HOURS AGO',
    },
    {
      id: 5,
      location: 'Taipei',
      account: 'alex5',
      avatar: '/images/avatars/a5.png',
      photo: '/images/posts/main5.png',
      likes: 98,
      description: 'CAT',
      hashTags: '#Caturday',
      createTime: '10 HOURS AGO',
    },
  ];

  return (
    <>
      {mock_post.map((item) => {
        const {
          id,
          location,
          account,
          avatar,
          photo,
          likes,
          description,
          hashTags,
          createTime,
        } = item;
        return (
          <IGPost
            key={id}
            location={location}
            account={account}
            avatar={avatar}
            photo={photo}
            likes={likes}
            description={description}
            hashTags={hashTags}
            createTime={createTime}
          />
        );
      })}
    </>
  );
};

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGProfile />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
