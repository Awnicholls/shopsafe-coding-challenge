import carData from "../Form/carData";
const Success = () => {
  const customerInfo = localStorage.getItem("form");

  const carInfo = carData.find(({ model }) => model === customerInfo.model);

  return (
    <>
      <div> {customerInfo} </div>
    </>
  );
};

export default Success;
