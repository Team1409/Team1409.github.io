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
 * @interface UpdateAddressRequestApi
 */
export interface UpdateAddressRequestApi {
    /**
     * 
     * @type {string}
     * @memberof UpdateAddressRequestApi
     */
    address?: string;
}

/**
 * Check if a given object implements the UpdateAddressRequestApi interface.
 */
export function instanceOfUpdateAddressRequestApi(value: object): boolean {
    return true;
}

export function UpdateAddressRequestApiFromJSON(json: any): UpdateAddressRequestApi {
    return UpdateAddressRequestApiFromJSONTyped(json, false);
}

export function UpdateAddressRequestApiFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateAddressRequestApi {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'] == null ? undefined : json['address'],
    };
}

export function UpdateAddressRequestApiToJSON(value?: UpdateAddressRequestApi | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'address': value['address'],
    };
}
