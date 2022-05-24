export const Home = () => {
  return (
    <div>
      header product
      <h1>Home</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, repellendus.</p>
      <div>
        {['product 1', 'product 2', 'product 3'].map((product) => (
          <>{product}</>
        ))}
      </div>
    </div>
  );
};
