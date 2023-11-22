import { ToastContainer } from "react-toastify/dist/components";

export default function useToast() {
    const toastContext = useContext(ToastContext);
  
    if (!toastContext) throw new Error('Toast provider를 추가해주세요');
  
    const [toasts, setToasts] = toastContext;
  
    const createToast = (toast) => {
      setToasts([...toasts, toast]);
    };
  
    return createToast;
  }