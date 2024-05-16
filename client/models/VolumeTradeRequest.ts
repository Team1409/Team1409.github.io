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
import type { CommonOrderType } from './CommonOrderType';
import {
    CommonOrderTypeFromJSON,
    CommonOrderTypeFromJSONTyped,
    CommonOrderTypeToJSON,
} from './CommonOrderType';
import type { ExchagerType } from './ExchagerType';
import {
    ExchagerTypeFromJSON,
    ExchagerTypeFromJSONTyped,
    ExchagerTypeToJSON,
} from './ExchagerType';

/**
 * 
 * @export
 * @interface VolumeTradeRequest
 */
export interface VolumeTradeRequest {
    /**
     * 
     * @type {ExchagerType}
     * @memberof VolumeTradeRequest
     */
    exchanger?: ExchagerType;
    /**
     * 
     * @type {string}
     * @memberof VolumeTradeRequest
     */
    asset?: string;
    /**
     * 
     * @type {number}
     * @memberof VolumeTradeRequest
     */
    volume?: number;
    /**
     * 
     * @type {CommonOrderType}
     * @memberof VolumeTradeRequest
     */
    orderType?: CommonOrderType;
    /**
     * 
     * @type {boolean}
     * @memberof VolumeTradeRequest
     */
    autoTransfer?: boolean;
}

/**
 * Check if a given object implements the VolumeTradeRequest interface.
 */
export function instanceOfVolumeTradeRequest(value: object): boolean {
    return true;
}

export function VolumeTradeRequestFromJSON(json: any): VolumeTradeRequest {
    return VolumeTradeRequestFromJSONTyped(json, false);
}

export function VolumeTradeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VolumeTradeRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'exchanger': json['exchanger'] == null ? undefined : ExchagerTypeFromJSON(json['exchanger']),
        'asset': json['asset'] == null ? undefined : json['asset'],
        'volume': json['volume'] == null ? undefined : json['volume'],
        'orderType': json['orderType'] == null ? undefined : CommonOrderTypeFromJSON(json['orderType']),
        'autoTransfer': json['autoTransfer'] == null ? undefined : json['autoTransfer'],
    };
}

export function VolumeTradeRequestToJSON(value?: VolumeTradeRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'exchanger': ExchagerTypeToJSON(value['exchanger']),
        'asset': value['asset'],
        'volume': value['volume'],
        'orderType': CommonOrderTypeToJSON(value['orderType']),
        'autoTransfer': value['autoTransfer'],
    };
}

