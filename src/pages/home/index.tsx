import Header from '../../components/Header';
import Container from '../../components/Container';
import IGStory from './components/IGStory';
import IGPost from './components/IGPost';
import IGProfile from './components/IGProfile';
import LoadingPost from './components/IGPost/LoadingPost';
import { useGetIGPostsQuery } from '../../services/homeService';

const IGPostList: React.FC = () => {
  const { data, isLoading } = useGetIGPostsQuery('all');

  return (
    <>
      {isLoading && <LoadingPost />}
      {!isLoading &&
        data?.map((item) => {
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
