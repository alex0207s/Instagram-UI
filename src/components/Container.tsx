const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto my-0 lg:max-w-[1024px] border-black">
      {children}
    </div>
  );
};

export default Container;
