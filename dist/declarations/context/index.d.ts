import React from 'react';
type Props = {
    serverUrl: string;
    children: React.ReactNode;
};
declare function ServerSubscriptionProvider({ serverUrl, children }: Props): JSX.Element;
export default ServerSubscriptionProvider;
