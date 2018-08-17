const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const menus = [
  {name: "dashboard", text: "Dashboard", icon: "fa fa-dashboard fa-fw", link: "index.html"},
  {
    text: "Charts", icon: "fa fa-bar-chart-o fa-fw", children: [
      {name: "flot", text: "Flot Charts", link: "flot.html"},
      {name: "morris", text: "Morris.js Charts", link: "morris.html"}
    ]
  },
  {name: "tables", text: "Tables", icon: "fa fa-table fa-fw", link: "table.html"},
  {name: "forms", text: "Forms", icon: "fa fa-edit fa-fw", link: "forms.html"},
  {
    text: "UI Elements", icon: "fa fa-wrench fa-fw", children: [
      {name: "panels-wells", text: "Panels and Wells", link: "panels-wells.html"},
      {name: "buttons", text: "Buttons", link: "buttons.html"},
      {name: "notifications", text: "Notifications", link: "notifications.html"},
      {name: "typography", text: "Typography", link: "typography.html"},
      {name: "icons", text: "Icons", link: "icons.html"},
      {name: "grid", text: "Grid", link: "grid.html"},
    ]
  },
  {
    text: "Multi-Level Dropdown", icon: "fa fa-sitemap fa-fw", children: [
      {text: "Second Level Item"},
      {text: "Second Level Item"},
      {
        text: "Third Level", children: [
          {text: "Third Level Item"},
          {text: "Third Level Item"},
          {text: "Third Level Item"},
          {text: "Third Level Item"}
        ]
      }
    ]
  },
  {
    text: "Sample Pages", icon: "fa fa-files-o  fa-fw", children: [
      {name: "blank", text: "Blank Page", link: "blank.html"},
      {name: "login", text: "Login Page", link: "login.html"}
    ]
  },
];
module.exports = function (options) {
  const data = {};
  Object.assign(data, this, {layout: options.hash});
  const layout = fs.readFileSync(path.resolve('./src/views/partial/layout.hbs.html'), {encoding: 'utf-8'});
  const template = handlebars.compile(layout);
  const body = options.fn(this);
  data.layout.body = body;
  data.layout.header = (data.layout.header || '') + `<script type="application/javascript">window.menus = ${JSON.stringify(menus)};window.currentMenu = "${options.hash.menu}";</script>`;
  return template(data);
};
