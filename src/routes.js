export default [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './static/pages/about.html',
    name: 'about',
  },
  {
    path: '/origin/',
    url: './static/pages/origin.html',
    name: 'origin'
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 1</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 1</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },
  {
    path: '/panel-right-2/',
    content: '\
      <div class="page">\
        <div class="navbar">\
          <div class="navbar-inner sliding">\
            <div class="left">\
              <a href="#" class="link back">\
                <i class="icon icon-back"></i>\
                <span class="ios-only">Back</span>\
              </a>\
            </div>\
            <div class="title">Panel Page 2</div>\
          </div>\
        </div>\
        <div class="page-content">\
          <div class="block">\
            <p>This is a right panel page 2</p>\
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>\
          </div>\
        </div>\
      </div>\
    ',
  },

  // Components
  {
    path: '/accordion/',
    url: './static/pages/accordion.html',
  },
  {
    path: '/action-sheet/',
    componentUrl: './static/pages/action-sheet.html',
  },
  {
    path: '/autocomplete/',
    componentUrl: './static/pages/autocomplete.html',
  },
  {
    path: '/badge/',
    componentUrl: './static/pages/badge.html',
  },
  {
    path: '/buttons/',
    url: './static/pages/buttons.html',
  },
  {
    path: '/calendar/',
    componentUrl: './static/pages/calendar.html',
  },
  {
    path: '/calendar-page/',
    componentUrl: './static/pages/calendar-page.html',
  },
  {
    path: '/cards/',
    url: './static/pages/cards.html',
  },
  {
    path: '/checkbox/',
    url: './static/pages/checkbox.html',
  },
  {
    path: '/chips/',
    componentUrl: './static/pages/chips.html',
  },
  {
    path: '/contacts-list/',
    url: './static/pages/contacts-list.html',
  },
  {
    path: '/content-block/',
    url: './static/pages/content-block.html',
  },
  {
    path: '/data-table/',
    componentUrl: './static/pages/data-table.html',
  },
  {
    path: '/dialog/',
    componentUrl: './static/pages/dialog.html',
  },
  {
    path: '/fab/',
    url: './static/pages/fab.html',
  },
  {
    path: '/fab-morph/',
    url: './static/pages/fab-morph.html',
  },
  {
    path: '/form-storage/',
    url: './static/pages/form-storage.html',
  },
  {
    path: '/grid/',
    url: './static/pages/grid.html',
  },
  {
    path: '/icons/',
    componentUrl: './static/pages/icons.html',
  },
  {
    path: '/infinite-scroll/',
    componentUrl: './static/pages/infinite-scroll.html',
  },
  {
    path: '/inputs/',
    url: './static/pages/inputs.html',
  },
  {
    path: '/lazy-load/',
    url: './static/pages/lazy-load.html',
  },
  {
    path: '/list/',
    url: './static/pages/list.html',
  },
  {
    path: '/list-index/',
    componentUrl: './static/pages/list-index.html',
  },
  {
    path: '/login-screen/',
    componentUrl: './static/pages/login-screen.html',
  },
  {
    path: '/login-screen-page/',
    componentUrl: './static/pages/login-screen-page.html',
  },
  {
    path: '/messages/',
    componentUrl: './static/pages/messages.html',
  },
  {
    path: '/navbar/',
    url: './static/pages/navbar.html',
  },
  {
    path: '/navbar-hide-scroll/',
    url: './static/pages/navbar-hide-scroll.html',
  },
  {
    path: '/notifications/',
    componentUrl: './static/pages/notifications.html',
  },
  {
    path: '/panel/',
    url: './static/pages/panel.html',
  },
  {
    path: '/photo-browser/',
    componentUrl: './static/pages/photo-browser.html',
  },
  {
    path: '/picker/',
    componentUrl: './static/pages/picker.html',
  },
  {
    path: '/popup/',
    componentUrl: './static/pages/popup.html',
  },
  {
    path: '/popover/',
    url: './static/pages/popover.html',
  },
  {
    path: '/preloader/',
    componentUrl: './static/pages/preloader.html',
  },
  {
    path: '/progressbar/',
    componentUrl: './static/pages/progressbar.html',
  },
  {
    path: '/pull-to-refresh/',
    componentUrl: './static/pages/pull-to-refresh.html',
  },
  {
    path: '/radio/',
    url: './static/pages/radio.html',
  },
  {
    path: '/range/',
    componentUrl: './static/pages/range.html',
  },
  {
    path: '/searchbar/',
    url: './static/pages/searchbar.html',
  },
  {
    path: '/searchbar-expandable/',
    url: './static/pages/searchbar-expandable.html',
  },
  {
    path: '/sheet-modal/',
    componentUrl: './static/pages/sheet-modal.html',
  },
  {
    path: '/smart-select/',
    url: './static/pages/smart-select.html',
  },
  {
    path: '/sortable/',
    url: './static/pages/sortable.html',
  },
  {
    path: '/statusbar/',
    componentUrl: './static/pages/statusbar.html',
  },
  {
    path: '/stepper/',
    componentUrl: './static/pages/stepper.html',
  },
  {
    path: '/subnavbar/',
    url: './static/pages/subnavbar.html',
  },
  {
    path: '/subnavbar-title/',
    url: './static/pages/subnavbar-title.html',
  },
  {
    path: '/swiper/',
    url: './static/pages/swiper.html',
    routes: [
      {
        path: 'swiper-horizontal/',
        url: './static/pages/swiper-horizontal.html',
      },
      {
        path: 'swiper-vertical/',
        url: './static/pages/swiper-vertical.html',
      },
      {
        path: 'swiper-space-between/',
        url: './static/pages/swiper-space-between.html',
      },
      {
        path: 'swiper-multiple/',
        url: './static/pages/swiper-multiple.html',
      },
      {
        path: 'swiper-nested/',
        url: './static/pages/swiper-nested.html',
      },
      {
        path: 'swiper-loop/',
        url: './static/pages/swiper-loop.html',
      },
      {
        path: 'swiper-3d-cube/',
        url: './static/pages/swiper-3d-cube.html',
      },
      {
        path: 'swiper-3d-coverflow/',
        url: './static/pages/swiper-3d-coverflow.html',
      },
      {
        path: 'swiper-3d-flip/',
        url: './static/pages/swiper-3d-flip.html',
      },
      {
        path: 'swiper-fade/',
        url: './static/pages/swiper-fade.html',
      },
      {
        path: 'swiper-scrollbar/',
        url: './static/pages/swiper-scrollbar.html',
      },
      {
        path: 'swiper-gallery/',
        componentUrl: './static/pages/swiper-gallery.html',
      },
      {
        path: 'swiper-custom-controls/',
        url: './static/pages/swiper-custom-controls.html',
      },
      {
        path: 'swiper-parallax/',
        url: './static/pages/swiper-parallax.html',
      },
      {
        path: 'swiper-lazy/',
        url: './static/pages/swiper-lazy.html',
      },
      {
        path: 'swiper-pagination-progress/',
        url: './static/pages/swiper-pagination-progress.html',
      },
      {
        path: 'swiper-pagination-fraction/',
        url: './static/pages/swiper-pagination-fraction.html',
      },
      {
        path: 'swiper-zoom/',
        url: './static/pages/swiper-zoom.html',
      },
    ],
  },
  {
    path: '/swipeout/',
    componentUrl: './static/pages/swipeout.html',
  },
  {
    path: '/tabs/',
    url: './static/pages/tabs.html',
  },
  {
    path: '/tabs-static/',
    url: './static/pages/tabs-static.html',
  },
  {
    path: '/tabs-animated/',
    url: './static/pages/tabs-animated.html',
  },
  {
    path: '/tabs-swipeable/',
    url: './static/pages/tabs-swipeable.html',
  },
  {
    path: '/tabs-routable/',
    url: './static/pages/tabs-routable.html',
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: ' \
        <div class="block"> \
          <p>Tab 1 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p> \
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p> \
        </div> \
        ',
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: '\
        <div class="block"> \
          <p>Tab 2 content</p> \
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: '\
        <div class="block"> \
          <p>Tab 3 content</p> \
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p> \
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p> \
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p> \
        </div> \
        ',
      },
    ],
  },
  {
    path: '/toast/',
    componentUrl: './static/pages/toast.html',
  },
  {
    path: '/toggle/',
    url: './static/pages/toggle.html',
  },
  {
    path: '/toolbar-tabbar/',
    componentUrl: './static/pages/toolbar-tabbar.html',
    routes: [
      {
        path: 'tabbar/',
        componentUrl: './static/pages/tabbar.html',
      },
      {
        path: 'tabbar-labels/',
        componentUrl: './static/pages/tabbar-labels.html',
      },
      {
        path: 'tabbar-scrollable/',
        componentUrl: './static/pages/tabbar-scrollable.html',
      },
      {
        path: 'toolbar-hide-scroll/',
        url: './static/pages/toolbar-hide-scroll.html',
      },
    ],
  },
  {
    path: '/timeline/',
    url: './static/pages/timeline.html',
  },
  {
    path: '/timeline-vertical/',
    url: './static/pages/timeline-vertical.html',
  },
  {
    path: '/timeline-horizontal/',
    url: './static/pages/timeline-horizontal.html',
  },
  {
    path: '/timeline-horizontal-calendar/',
    url: './static/pages/timeline-horizontal-calendar.html',
  },
  {
    path: '/virtual-list/',
    componentUrl: './static/pages/virtual-list.html',
  },
  {
    path: '/vi/',
    componentUrl: './static/pages/vi.html',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './static/pages/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './static/pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './static/pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './static/pages/404.html',
  },
];
