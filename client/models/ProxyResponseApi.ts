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
 * @interface ProxyResponseApi
 */
export interface ProxyResponseApi {
    /**
     * 
     * @type {number}
     * @memberof ProxyResponseApi
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    host?: string;
    /**
     * 
     * @type {number}
     * @memberof ProxyResponseApi
     */
    port?: number;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    login?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    pass?: string;
    /**
     * 
     * @type {Date}
     * @memberof ProxyResponseApi
     */
    endDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof ProxyResponseApi
     */
    note?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProxyResponseApi
     */
    active?: boolean;
}

/**
 * Check if a given object implements the ProxyResponseApi interface.
 */
export function instanceOfProxyResponseApi(value: object): boolean {
    return true;
}

export function ProxyResponseApiFromJSON(json: any): ProxyResponseApi {
    return ProxyResponseApiFromJSONTyped(json, false);
}

export function ProxyResponseApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProxyResponseApi {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'host': json['host'] == null ? undefined : json['host'],
        'port': json['port'] == null ? undefined : json['port'],
        'login': json['login'] == null ? undefined : json['login'],
        'pass': json['pass'] == null ? undefined : json['pass'],
        'endDate': json['endDate'] == null ? undefined : (new Date(json['endDate'])),
        'provider': json['provider'] == null ? undefined : json['provider'],
        'note': json['note'] == null ? undefined : json['note'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}

export function ProxyResponseApiToJSON(value?: ProxyResponseApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'host': value['host'],
        'port': value['port'],
        'login': value['login'],
        'pass': value['pass'],
        'endDate': value['endDate'] == null ? undefined : ((value['endDate'] as any).toISOString()),
        'provider': value['provider'],
        'note': value['note'],
        'active': value['active'],
    };
}

