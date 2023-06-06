import Swal from 'sweetalert2';

export const showInfoAlert = (title, text) => {
  Swal.fire({
    icon: 'info',
    title: title,
    text: text
  });
};

export const showErrorAlert = (title, text) => {
  Swal.fire({
    icon: 'error',
    title: title,
    text: text
  });
};
