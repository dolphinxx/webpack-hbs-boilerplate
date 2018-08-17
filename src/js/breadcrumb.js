$(function(){
  if (window.breadcrumbs) {
    const breadcrumbContainer = $('<ol class="breadcrumb"></ol>').prependTo($('.container-fluid'));
    window.breadcrumbs.unshift({name: 'Home', link: '/'});
    for (let breadcrumb of breadcrumbs) {
      if (breadcrumb.link) {
        breadcrumbContainer.append(`<li class="breadcrumb-item"><a href="${breadcrumb.link}">${breadcrumb.name}</a></li>`);
      } else {
        breadcrumbContainer.append(`<li class="breadcrumb-item active">${breadcrumb.name}</li>`);
      }
    }
  }
});
