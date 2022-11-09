import Item from './item';
import { useGetIGStoriesQuery } from '../../../../services/homeService';

const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIGStoriesQuery('all');

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
          return (
            <Item key={item} isLoading={isLoading} name={''} avatar={''} />
          );
        })}
      {!isLoading &&
        data?.map((item) => {
          const { id, name, avatar } = item;
          return (
            <Item key={id} isLoading={isLoading} name={name} avatar={avatar} />
          );
        })}
    </div>
  );
};
export default IGStory;
