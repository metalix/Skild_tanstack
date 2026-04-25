import { GetSklillsData, GetSklillsVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useGetSklills(vars?: GetSklillsVariables, options?: useDataConnectQueryOptions<GetSklillsData>): UseDataConnectQueryResult<GetSklillsData, GetSklillsVariables>;
export function useGetSklills(dc: DataConnect, vars?: GetSklillsVariables, options?: useDataConnectQueryOptions<GetSklillsData>): UseDataConnectQueryResult<GetSklillsData, GetSklillsVariables>;
