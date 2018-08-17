$(function(){
  const MAX_PAGE_BTN = 5;
  function createPagination(container, pagination, loadData) {
    container.append(`<div class="col-sm-12 col-md-5"><div role="status" aria-live="polite">当前 <code>${pagination.page}</code> / <code>${pagination.totalPages}</code> ，共 <code>${pagination.totalCount}</code> 条记录</div></div>`)
    const paginationContainerWrapper = $('<div class="col-sm-12 col-md-7"></div>').appendTo(container);
    const btnContainer = $('<ul class="pagination justify-content-end"></ul>').appendTo(paginationContainerWrapper);
    btnContainer.empty();
    if (pagination.totalPages === 0) {
      return;
    }
    const firstBtn = $('<li class="page-item" tabindex="0"><a class="page-link"><span class="fa fa-step-backward"></span></a></li>').appendTo(btnContainer);
    const prevBtn = $('<li class="page-item" tabindex="0"><a class="page-link"><span class="fa fa-backward"></span></a></li>').appendTo(btnContainer);
    if (pagination.page === 1) {
      firstBtn.addClass('disabled');
      prevBtn.addClass('disabled');
    } else {
      firstBtn.find('a').click(() => loadData(1));
      prevBtn.find('a').click(() => loadData(pagination.page - 1));
    }
    let first;
    if (pagination.totalPages - pagination.page < 3) {
      first = pagination.totalPages - MAX_PAGE_BTN + 1;
    } else {
      first = Math.ceil(pagination.page - MAX_PAGE_BTN / 2);
    }
    first = Math.max(first, 1);
    const btnCount = Math.min(pagination.totalPages, MAX_PAGE_BTN);
    for (let i = 0; i < btnCount; i++) {
      const page = first + i;
      if (page > pagination.totalPages) {
        break;
      }
      const btn = $('<li class="page-item" tabindex="0"><a class="page-link"></a></li>');
      btn.find('a').text(page);
      if (page === pagination.page) {
        btn.addClass('active');
      } else {
        btn.find('a').click(() => {
          loadData(page)
        });
      }
      btnContainer.append(btn);
    }
    const nextBtn = $('<li class="page-item" tabindex="0"><a class="page-link"><span class="fa fa-forward"></span></a></li>').appendTo(btnContainer);
    const lastBtn = $('<li class="page-item" tabindex="0"><a class="page-link"><span class="fa fa-step-forward"></span></a></li>').appendTo(btnContainer);

    const pageSizeInput = $('<li class="page-item" style="margin-left:-1px;"><select class="form-control" style="display:inline-block;width:60px;margin-left:-1px;padding:6px;"></select></li>').appendTo(btnContainer).find('select');
    [10, 20, 50, 100].forEach((i) => pageSizeInput.append(`<option value="${i}">${i}</option>`));
    pageSizeInput.val(pagination.size);
    pageSizeInput.change(() => loadData(pagination.page));
    if (pagination.page === pagination.totalPages) {
      nextBtn.addClass('disabled');
      lastBtn.addClass('disabled');
    } else {
      nextBtn.find('a').click(() => loadData(pagination.page + 1));
      lastBtn.find('a').click(() => loadData(pagination.totalPages));
    }
    const showSizeInput = container.attr('data-show-size') !== '0';
    if (!showSizeInput) {
      pageSizeInput.parent().hide();
    }
  }
  $('tbody[data-pagination]').each(function(){
    const pagination = JSON.parse($(this).attr('data-pagination'));
    console.log(pagination);
    const table = $(this).closest('table');
    const container = $('<div class="row"></div>').insertAfter(table);
    createPagination(container, pagination, window.loadPageData);
  });
});
