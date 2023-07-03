import { useEffect } from "react";

const LeaseLoading = ({ setStep }) => {
  useEffect(() => {
    setTimeout(() => {
      setStep(2);
    }, 1000);
  }, []);
  return <div className="lease_loading_on_modal"></div>;
};
export default LeaseLoading;
