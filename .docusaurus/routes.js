import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kasj-live/blog',
    component: ComponentCreator('/kasj-live/blog', '210'),
    exact: true
  },
  {
    path: '/kasj-live/blog/archive',
    component: ComponentCreator('/kasj-live/blog/archive', 'ca8'),
    exact: true
  },
  {
    path: '/kasj-live/blog/cable-management',
    component: ComponentCreator('/kasj-live/blog/cable-management', 'd34'),
    exact: true
  },
  {
    path: '/kasj-live/blog/cert-manager',
    component: ComponentCreator('/kasj-live/blog/cert-manager', 'a48'),
    exact: true
  },
  {
    path: '/kasj-live/blog/certs',
    component: ComponentCreator('/kasj-live/blog/certs', 'e8e'),
    exact: true
  },
  {
    path: '/kasj-live/blog/dns',
    component: ComponentCreator('/kasj-live/blog/dns', '5b2'),
    exact: true
  },
  {
    path: '/kasj-live/blog/hardware',
    component: ComponentCreator('/kasj-live/blog/hardware', '170'),
    exact: true
  },
  {
    path: '/kasj-live/blog/k3s',
    component: ComponentCreator('/kasj-live/blog/k3s', 'eb3'),
    exact: true
  },
  {
    path: '/kasj-live/blog/metallb',
    component: ComponentCreator('/kasj-live/blog/metallb', '453'),
    exact: true
  },
  {
    path: '/kasj-live/blog/nfs',
    component: ComponentCreator('/kasj-live/blog/nfs', '222'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags',
    component: ComponentCreator('/kasj-live/blog/tags', '752'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/adguard',
    component: ComponentCreator('/kasj-live/blog/tags/adguard', 'e9e'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/cable-management',
    component: ComponentCreator('/kasj-live/blog/tags/cable-management', '185'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/cert-manager',
    component: ComponentCreator('/kasj-live/blog/tags/cert-manager', '011'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/certificates',
    component: ComponentCreator('/kasj-live/blog/tags/certificates', 'dcc'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/desk',
    component: ComponentCreator('/kasj-live/blog/tags/desk', 'ce1'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/dns',
    component: ComponentCreator('/kasj-live/blog/tags/dns', 'd20'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/hardware',
    component: ComponentCreator('/kasj-live/blog/tags/hardware', 'faa'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/homelab',
    component: ComponentCreator('/kasj-live/blog/tags/homelab', 'bae'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/k-3-s',
    component: ComponentCreator('/kasj-live/blog/tags/k-3-s', '38f'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/k-8-s',
    component: ComponentCreator('/kasj-live/blog/tags/k-8-s', 'ed0'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/kubernetes',
    component: ComponentCreator('/kasj-live/blog/tags/kubernetes', '330'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/letsencrypt',
    component: ComponentCreator('/kasj-live/blog/tags/letsencrypt', '4e2'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/loadbalancer',
    component: ComponentCreator('/kasj-live/blog/tags/loadbalancer', '8dc'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/metallb',
    component: ComponentCreator('/kasj-live/blog/tags/metallb', '752'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/nfs',
    component: ComponentCreator('/kasj-live/blog/tags/nfs', '710'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/nuc',
    component: ComponentCreator('/kasj-live/blog/tags/nuc', '93b'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/persistent-volumes',
    component: ComponentCreator('/kasj-live/blog/tags/persistent-volumes', 'ab3'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/pihole',
    component: ComponentCreator('/kasj-live/blog/tags/pihole', 'c2e'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/reverse-proxy',
    component: ComponentCreator('/kasj-live/blog/tags/reverse-proxy', '555'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/self-hosting',
    component: ComponentCreator('/kasj-live/blog/tags/self-hosting', '7fc'),
    exact: true
  },
  {
    path: '/kasj-live/blog/tags/traefik',
    component: ComponentCreator('/kasj-live/blog/tags/traefik', 'df2'),
    exact: true
  },
  {
    path: '/kasj-live/blog/traefik',
    component: ComponentCreator('/kasj-live/blog/traefik', 'ce1'),
    exact: true
  },
  {
    path: '/kasj-live/blog/welcome',
    component: ComponentCreator('/kasj-live/blog/welcome', '017'),
    exact: true
  },
  {
    path: '/kasj-live/markdown-page',
    component: ComponentCreator('/kasj-live/markdown-page', 'fbd'),
    exact: true
  },
  {
    path: '/kasj-live/docs',
    component: ComponentCreator('/kasj-live/docs', '6d1'),
    routes: [
      {
        path: '/kasj-live/docs/backlog',
        component: ComponentCreator('/kasj-live/docs/backlog', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/category/homelab-services',
        component: ComponentCreator('/kasj-live/docs/category/homelab-services', '36c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/adguard',
        component: ComponentCreator('/kasj-live/docs/homelab-services/adguard', '1a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/certmanager',
        component: ComponentCreator('/kasj-live/docs/homelab-services/certmanager', 'd3d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/k3s',
        component: ComponentCreator('/kasj-live/docs/homelab-services/k3s', 'e5e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/letsencrypt',
        component: ComponentCreator('/kasj-live/docs/homelab-services/letsencrypt', '725'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/metallb',
        component: ComponentCreator('/kasj-live/docs/homelab-services/metallb', '169'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/nfs',
        component: ComponentCreator('/kasj-live/docs/homelab-services/nfs', 'bcb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/pihole',
        component: ComponentCreator('/kasj-live/docs/homelab-services/pihole', 'e54'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/traefik',
        component: ComponentCreator('/kasj-live/docs/homelab-services/traefik', 'fc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/homelab-services/traefikdash',
        component: ComponentCreator('/kasj-live/docs/homelab-services/traefikdash', '69b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/intro',
        component: ComponentCreator('/kasj-live/docs/intro', '240'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/kasj-live/docs/kube-commands',
        component: ComponentCreator('/kasj-live/docs/kube-commands', '2c7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/kasj-live/',
    component: ComponentCreator('/kasj-live/', 'b21'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
