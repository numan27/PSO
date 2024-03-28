import ScaleLoader from "react-spinners/ScaleLoader";

export default function FullScreenLoader() {
  return (
    <div className="loaderDiv">
      <div className="spinner">
        <ScaleLoader
          color="white"
          loading="true"
          // cssOverride={override}
          size={150}
        />
      </div>
    </div>
  );
}