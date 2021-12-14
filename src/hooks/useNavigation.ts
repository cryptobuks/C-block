import { routes as appRoutes } from 'appConstants';
import { BreadcrumbsPaths } from 'components/Breadcrumbs';
import { ReactElement, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useNavigation = () => {
  const {
    pathname,
  } = useLocation();
  const baseUrl = appRoutes.root.replace(/\//g, '');

  return useMemo<[BreadcrumbsPaths[], string, ReactElement | null]>(() => {
    const pathParts = pathname.split('/')
      .slice(1)
      .filter((path) => path);
    let title = '';
    let crumbsPaths = [];
    let icon;

    pathParts.reduce((acc, part) => {
      const {
        routes,
      } = acc;
      if (baseUrl === part) {
        title = appRoutes.title;
        icon = appRoutes.icon;
        crumbsPaths = [];
        crumbsPaths.push({
          path: appRoutes.root,
          label: appRoutes.title,
        });
        return {
          path: appRoutes.root,
          routes: appRoutes,
        };
      }
      const newRoutes = routes[part];

      if (newRoutes === undefined) {
        title = '';
        crumbsPaths = [];
        return {
          path: '/',
          routes: {},
        };
      }

      crumbsPaths.push({
        path: newRoutes.root,
        label: newRoutes.title,
      });

      title = newRoutes.title;
      icon = newRoutes.icon;
      return {
        path: newRoutes.root,
        routes: newRoutes,
      };
    }, {
      path: '/',
      routes: appRoutes,
    });

    return [
      crumbsPaths,
      title,
      icon,
    ];
  }, [
    pathname,
    baseUrl,
  ]);
};
