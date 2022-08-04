import { useEffect } from 'react';
import { Userpilot } from 'userpilot';
import { useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { useShallowSelector } from 'hooks';
import userSelectors from 'store/user/selectors';
/**
 * @see https://docs.userpilot.com/article/22-install-userpilot-on-single-page-application-frameworks
 */
export const useUserPilot = () => {
  const isAuthenticated = useShallowSelector(
    userSelectors.selectIsAuthenticated,
  );
  const { email } = useShallowSelector(
    userSelectors.getUser,
  );

  useEffect(() => {
    if (isAuthenticated) {
      Userpilot.identify(
        uuid(),
        {
          name: email,
          email,
          created_at: new Date().toISOString(), // ISO8601 Date,
        },
      );
    } else {
      Userpilot.anonymous();
    }
  }, [email, isAuthenticated]);

  const location = useLocation();

  useEffect(() => {
    Userpilot.reload();
  }, [location]);
};
