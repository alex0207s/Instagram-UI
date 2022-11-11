import Header from '../../components/Header';
import Container from '../../components/Container';
import IGUser from '../../components/User';
import { useAppSelector } from '../../hooks';

const Following: React.FC = () => {
  const friendReducer = useAppSelector((state) => state.friendReducer);
  const friends = friendReducer.friends;

  return (
    <>
      <Header />
      <Container>
        <p className="my-8 font-bold text-2xl px-4 box-border">Following</p>
        <div className="shadow-md mt-8 mx-2 box-border">
          {friends.map((item) => {
            const { id, location, account, isFollowing, avatar } = item;
            return (
              <div className="-mt-3" key={id}>
                <IGUser
                  id={id}
                  location={location}
                  account={account}
                  isFollowing={isFollowing}
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
