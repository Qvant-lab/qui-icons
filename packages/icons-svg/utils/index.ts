import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';
import { CapitalizedThemeType } from '../templates/types';
import { pipe } from 'ramda';

export interface IdentifierMeta {
  name: string;
  themeSuffix?: CapitalizedThemeType;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}

export const getIdentifier: GetIdentifierType = pipe(
  ({ name, themeSuffix }: IdentifierMeta) =>
    name + (themeSuffix ? `-${themeSuffix}` : ''),
  camelCase,
  upperFirst
);
