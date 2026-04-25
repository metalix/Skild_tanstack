import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface GetSklillsData {
  skills: ({
    id: UUIDString;
    title: string;
    description: string;
    tags: string[];
    installCommand: string;
    createdAt: TimestampString;
    author: {
      clerkId: string;
      username?: string | null;
      imageUrl?: string | null;
      email: string;
    } & User_Key;
  } & Skill_Key)[];
}

export interface GetSklillsVariables {
  searchTerm?: string | null;
  limit?: number | null;
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface User_Key {
  clerkId: string;
  __typename?: 'User_Key';
}

interface GetSklillsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: GetSklillsVariables): QueryRef<GetSklillsData, GetSklillsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: GetSklillsVariables): QueryRef<GetSklillsData, GetSklillsVariables>;
  operationName: string;
}
export const getSklillsRef: GetSklillsRef;

export function getSklills(vars?: GetSklillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSklillsData, GetSklillsVariables>;
export function getSklills(dc: DataConnect, vars?: GetSklillsVariables, options?: ExecuteQueryOptions): QueryPromise<GetSklillsData, GetSklillsVariables>;

