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
import type { ExchangerType } from './ExchangerType';
import {
    ExchangerTypeFromJSON,
    ExchangerTypeFromJSONTyped,
    ExchangerTypeToJSON,
} from './ExchangerType';

/**
 * 
 * @export
 * @interface UpsertAccountRequestApi
 */
export interface UpsertAccountRequestApi {
    /**
     * 
     * @type {string}
     * @memberof UpsertAccountRequestApi
     */
    name?: string;
    /**
     * 
     * @type {ExchangerType}
     * @memberof UpsertAccountRequestApi
     */
    exchangerType?: ExchangerType;
    /**
     * 
     * @type {number}
     * @memberof UpsertAccountRequestApi
     */
    proxyId?: number;
}

/**
 * Check if a given object implements the UpsertAccountRequestApi interface.
 */
export function instanceOfUpsertAccountRequestApi(value: object): boolean {
    return true;
}

export function UpsertAccountRequestApiFromJSON(json: any): UpsertAccountRequestApi {
    return UpsertAccountRequestApiFromJSONTyped(json, false);
}

export function UpsertAccountRequestApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertAccountRequestApi {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'exchangerType': json['exchangerType'] == null ? undefined : ExchangerTypeFromJSON(json['exchangerType']),
        'proxyId': json['proxyId'] == null ? undefined : json['proxyId'],
    };
}

export function UpsertAccountRequestApiToJSON(value?: UpsertAccountRequestApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'exchangerType': ExchangerTypeToJSON(value['exchangerType']),
        'proxyId': value['proxyId'],
    };
}

