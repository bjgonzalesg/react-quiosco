import { useContext } from "react";
import QuioscoContext from "../context/quiscoProvider";

const useQuiosco = () => {
  return useContext(QuioscoContext);
};

export default useQuiosco;
