$(function () {
  const menuContainer = $('<ul class="sidebar navbar-nav collapse show" id="side-menu"></ul>').prependTo($('#wrapper'));
  function renderMenuChildren(container, menus, current) {
    for (let menu of menus) {
      const item = $(`<li><a href="${menu.link || '#'}" class="${menu.name === current ? 'active' : ''}"><i class="${menu.icon}"></i> ${menu.text}</a></li>`).appendTo(container);
      if (menu.children) {
        renderMenuChildren($(`<ul class="nav nav-second-level"></ul>`).appendTo(item), menu.children, current);
      }
    }
  }

  renderMenuChildren(menuContainer, window.menus, window.currentMenu);
  new MetisMenu(menuContainer[0]);
  var element = $('#side-menu a.active').parent();
  while (true) {
    if (element.is('li')) {
      element = element.addClass('active').parent().addClass('in').parent();
    } else {
      break;
    }
  }
});
