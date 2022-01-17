import { initSchema } from '@aws-amplify/datastore';

import { schema } from './schema';

const { Metrics } = initSchema(schema);

export {
  Metrics
};