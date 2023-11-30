import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      PageNotFound
      <button onClick={() => navigate(-1)} className="block">
        &larr; BACK
      </button>
    </div>
  );
};

export default PageNotFound;
