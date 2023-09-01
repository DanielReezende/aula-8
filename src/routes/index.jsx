import { NavigationContainer } from '@react-navigation/native';

import { PrivateRoutes } from './private.routes';
import { PublicRoutes } from './public.routes';

export function Router() {
  return (
    <NavigationContainer>
      <PrivateRoutes />
    </NavigationContainer>
  )
}