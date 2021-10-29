import Swal from "sweetalert2";

const Alert = () => {
  const sweetAlert = (icon, title, text) => {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500,
    });
  };
  return { sweetAlert };
};

export default Alert;
