/* tslint:disable */
/* eslint-disable */
/**
 * Exchanger Bot API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { AddressResponseApi } from './AddressResponseApi';
import {
    AddressResponseApiFromJSON,
    AddressResponseApiFromJSONTyped,
    AddressResponseApiToJSON,
} from './AddressResponseApi';
import type { ExchangerType } from './ExchangerType';
import {
    ExchangerTypeFromJSON,
    ExchangerTypeFromJSONTyped,
    ExchangerTypeToJSON,
} from './ExchangerType';
import type { ProxyResponseApi } from './ProxyResponseApi';
import {
    ProxyResponseApiFromJSON,
    ProxyResponseApiFromJSONTyped,
    ProxyResponseApiToJSON,
} from './ProxyResponseApi';

/**
 * 
 * @export
 * @interface AccountResponseApi
 */
export interface AccountResponseApi {
    /**
     * 
     * @type {number}
     * @memberof AccountResponseApi
     */
    id?: number;
    /**
     * 
     * @type {ExchangerType}
     * @memberof AccountResponseApi
     */
    exchangerType?: ExchangerType;
    /**
     * 
     * @type {string}
     * @memberof AccountResponseApi
     */
    name?: string;
    /**
     * 
     * @type {Array<AddressResponseApi>}
     * @memberof AccountResponseApi
     */
    addresses?: Array<AddressResponseApi>;
    /**
     * 
     * @type {ProxyResponseApi}
     * @memberof AccountResponseApi
     */
    proxy?: ProxyResponseApi;
    /**
     * 
     * @type {number}
     * @memberof AccountResponseApi
     */
    apiCredentialId?: number;
}

/**
 * Check if a given object implements the AccountResponseApi interface.
 */
export function instanceOfAccountResponseApi(value: object): boolean {
    return true;
}

export function AccountResponseApiFromJSON(json: any): AccountResponseApi {
    return AccountResponseApiFromJSONTyped(json, false);
}

export function AccountResponseApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountResponseApi {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'exchangerType': json['exchangerType'] == null ? undefined : ExchangerTypeFromJSON(json['exchangerType']),
        'name': json['name'] == null ? undefined : json['name'],
        'addresses': json['addresses'] == null ? undefined : ((json['addresses'] as Array<any>).map(AddressResponseApiFromJSON)),
        'proxy': json['proxy'] == null ? undefined : ProxyResponseApiFromJSON(json['proxy']),
        'apiCredentialId': json['apiCredentialId'] == null ? undefined : json['apiCredentialId'],
    };
}

export function AccountResponseApiToJSON(value?: AccountResponseApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'exchangerType': ExchangerTypeToJSON(value['exchangerType']),
        'name': value['name'],
        'addresses': value['addresses'] == null ? undefined : ((value['addresses'] as Array<any>).map(AddressResponseApiToJSON)),
        'proxy': ProxyResponseApiToJSON(value['proxy']),
        'apiCredentialId': value['apiCredentialId'],
    };
}

