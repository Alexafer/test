import {App} from "vue";
import ComingSoon from '@/components/ComingSoon.vue';
import Content from '@/components/Content.vue';
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
import Layout from '@/components/Layout.vue';

export const regComponents = (app:App) : void => {
  const ap = app.component;
  ap('ComingSoon', ComingSoon);
  ap('Content', Content);
  ap('SideBar', SideBar);
  ap('Header', Header);
  ap('Layout', Layout);
}