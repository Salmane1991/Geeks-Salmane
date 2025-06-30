import data from "./data.json";

const ShowData = () => {
  return (
    <div className="text-center mt-5">
      <h1>Hi This is a Title</h1>
      <h2>{data[0].title}</h2>
      <p>{data[0].content}</p>
      <h2>{data[1].title}</h2>
      <p>{data[1].content}</p>
    </div>
  );
};

export default ShowData;
