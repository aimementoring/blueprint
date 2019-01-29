import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';

const NOTIFY_RELEASE_STAGES = ['production', 'staging'];

export default function createBugsnagClient(env, apiKey, releaseStage) {
  let bugsnagClient = null;
  if (env !== 'test') {
    bugsnagClient = bugsnag({
      apiKey,
      releaseStage,
      notifyReleaseStages: NOTIFY_RELEASE_STAGES,
    });
    bugsnagClient.use(bugsnagReact, React);
  }
  return bugsnagClient;
}
