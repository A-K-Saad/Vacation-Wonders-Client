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

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger me-3",
    },
    buttonsStyling: false,
  });
  const confirmAlert = async (allOrders, _id, setAllOrders) => {
    return swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          //Deleting From UI
          const filteredOrders = allOrders?.filter(
            (order) => order?._id !== _id
          );
          setAllOrders(filteredOrders);

          fetch("https://fathomless-meadow-55221.herokuapp.com/orders", {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ _id: _id }),
          }).then((result) => console.log(result));
          sweetAlert(
            "success",
            "Cancelled!",
            "Cancelled The Order Successfully!"
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          sweetAlert("error", "UH OH!", "Couldn't Cancel The Order!");
        }
      });
  };
  return { sweetAlert, confirmAlert };
};

export default Alert;
