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
/**
 * 
 * @export
 * @interface UpsertProxyRequestApi
 */
export interface UpsertProxyRequestApi {
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    host?: string;
    /**
     * 
     * @type {number}
     * @memberof UpsertProxyRequestApi
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    login?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    pass?: string;
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    note?: string;
    /**
     * 
     * @type {Date}
     * @memberof UpsertProxyRequestApi
     */
    endDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof UpsertProxyRequestApi
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpsertProxyRequestApi
     */
    provider?: string;
}

/**
 * Check if a given object implements the UpsertProxyRequestApi interface.
 */
export function instanceOfUpsertProxyRequestApi(value: object): boolean {
    return true;
}

export function UpsertProxyRequestApiFromJSON(json: any): UpsertProxyRequestApi {
    return UpsertProxyRequestApiFromJSONTyped(json, false);
}

export function UpsertProxyRequestApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpsertProxyRequestApi {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'host': json['host'] == null ? undefined : json['host'],
        'port': json['port'] == null ? undefined : json['port'],
        'login': json['login'] == null ? undefined : json['login'],
        'pass': json['pass'] == null ? undefined : json['pass'],
        'note': json['note'] == null ? undefined : json['note'],
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'active': json['active'] == null ? undefined : json['active'],
        'provider': json['provider'] == null ? undefined : json['provider'],
    };
}

export function UpsertProxyRequestApiToJSON(value?: UpsertProxyRequestApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'host': value['host'],
        'port': value['port'],
        'login': value['login'],
        'pass': value['pass'],
        'note': value['note'],
        'endDate': value['endDate'] == null ? undefined : ((value['endDate'] as any).toISOString()),
        'active': value['active'],
        'provider': value['provider'],
    };
}

