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
 * @interface UpdateApiCredentialRequestApi
 */
export interface UpdateApiCredentialRequestApi {
    /**
     * 
     * @type {string}
     * @memberof UpdateApiCredentialRequestApi
     */
    apiKey?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiCredentialRequestApi
     */
    apiSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApiCredentialRequestApi
     */
    password?: string;
}

/**
 * Check if a given object implements the UpdateApiCredentialRequestApi interface.
 */
export function instanceOfUpdateApiCredentialRequestApi(value: object): boolean {
    return true;
}

export function UpdateApiCredentialRequestApiFromJSON(json: any): UpdateApiCredentialRequestApi {
    return UpdateApiCredentialRequestApiFromJSONTyped(json, false);
}

export function UpdateApiCredentialRequestApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateApiCredentialRequestApi {
    if (json == null) {
        return json;
    }
    return {
        
        'apiKey': json['apiKey'] == null ? undefined : json['apiKey'],
        'apiSecret': json['apiSecret'] == null ? undefined : json['apiSecret'],
        'password': json['password'] == null ? undefined : json['password'],
    };
}

export function UpdateApiCredentialRequestApiToJSON(value?: UpdateApiCredentialRequestApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'apiKey': value['apiKey'],
        'apiSecret': value['apiSecret'],
        'password': value['password'],
    };
}
