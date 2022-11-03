import Header from '../../components/Header';
import Container from '../../components/Container';
import IGStory from './components/IGStory';
import IGUser from '../../components/User';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex lg:justify-center">
          <div className="w-full lg:w-[600px]">
            <IGStory />
          </div>
          <div className="hidden lg:block lg:w-[424px]">
            <IGUser
              size="medium"
              showFollow
              isFollowing
              account="alex liao"
              location="Taipei"
              avatar="/images/avatars/a1.png"
              id={0}
            />
          </div>
        </div>
      </Container>
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Instagram Home page
        </h1>
      </div>
    </>
  );
};

export default Home;
