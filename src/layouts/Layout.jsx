import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import Sidebar from "../components/Sidebard";
import useQuiosco from "../hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";
import Resumen from "../components/Resumen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

ReactModal.setAppElement("#root");

export default function Layout() {
  const { modal } = useQuiosco();

  return (
    <>
      <div className="md:flex">
        <Sidebar />
        <Outlet />
        <Resumen />
      </div>

      <ReactModal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </ReactModal>

      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
      />
    </>
  );
}
