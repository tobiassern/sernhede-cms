import { buildConfig } from 'payload/config';
import Examples from './collections/Examples';
import Users from './collections/Users';

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    // Examples
  ],
});
