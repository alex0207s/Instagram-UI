const LoadingPost: React.FC = () => {
  return (
    <div className="shadow-md lg:mb-8">
      <div className="flex h-[70px] items-center box-border px-4">
        <div
          className={
            'w-[40px] h-[40px] bg-gray-200 overflow-hidden rounded-full'
          }
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <div className="ml-4">
          <div className="w-[150px] h-[10px] bg-gray-200 mb-3"> </div>
          <div className="w-[100px] h-[10px] bg-gray-200"> </div>
        </div>
      </div>
      <div className="h-[400px] bg-gray-100"></div>
    </div>
  );
};

export default LoadingPost;
