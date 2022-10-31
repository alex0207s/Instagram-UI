import Header from '../../components/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Instagram Home page
        </h1>
      </div>
    </>
  );
};

export default Home;
