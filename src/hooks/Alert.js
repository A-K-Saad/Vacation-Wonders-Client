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

  const confirmAlert = (allOrders, _id, setAllOrders) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#607d9f",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //Deleting From UI
        const filteredOrders = allOrders?.filter((order) => order?._id !== _id);
        setAllOrders(filteredOrders);
        //Deleting From Server
        fetch("https://fathomless-meadow-55221.herokuapp.com/orders", {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ _id: _id }),
        }).catch((error) => {
          console.log(error);
        });
        Swal.fire("Deleted!", "Your order has been deleted.", "success");
      }
    });
  };
  return { sweetAlert, confirmAlert };
};

export default Alert;
