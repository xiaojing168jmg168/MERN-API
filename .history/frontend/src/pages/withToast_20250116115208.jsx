import { useState } from "react";
import { ToastProvider } from "@chakra-ui/core";

const withToast = (WrappedComponent) => {
  return (props) => {
    const [toast, setToast] = useState({
      message: "",
      color: "",
      isOpen: false,
    });

    const showToast = (message, color) => {
      setToast({ message, color, isOpen: true });
    };

    const hideToast = () => {
      setToast({ message: "", color: "", isOpen: false });
    };

    return (
      <ToastProvider>
        <WrappedComponent
          {...props}
          showToast={showToast}
          hideToast={hideToast}
          toast={toast}
        />
      </ToastProvider>
    );
  };
};

export default withToast;
