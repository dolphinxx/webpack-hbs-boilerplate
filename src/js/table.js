$(function () {
  $('table th[data-sort]').each(function () {
    $(this).addClass('sorting');
    const initialOrder = $(this).attr('data-order');
    if (initialOrder) {
      $(this).addClass('sorting_' + initialOrder);
    }
    $(this).click(() => {
      const currentOrder = $(this).attr('data-order');
      let order;
      if (currentOrder === 'asc') {
        order = 'desc';
      } else if (currentOrder === 'desc') {
        order = '';
      } else {
        order = 'asc';
      }
      $(this).attr('data-order', order);
      if (order !== '') {
        $(this).addClass('sorting_' + order)
      }
      if (currentOrder) {
        $(this).removeClass('sorting_' + currentOrder);
      }
    });
  });
});
