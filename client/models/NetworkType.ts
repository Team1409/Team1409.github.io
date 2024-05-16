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


/**
 * 
 * @export
 */
export const NetworkType = {
    Tron: 'Tron',
    Bsc: 'BSC',
    Avax: 'Avax',
    Arbitrum: 'Arbitrum',
    Optimism: 'Optimism',
    Solana: 'Solana'
} as const;
export type NetworkType = typeof NetworkType[keyof typeof NetworkType];


export function instanceOfNetworkType(value: any): boolean {
    return Object.values(NetworkType).includes(value);
}

export function NetworkTypeFromJSON(json: any): NetworkType {
    return NetworkTypeFromJSONTyped(json, false);
}

export function NetworkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkType {
    return json as NetworkType;
}

export function NetworkTypeToJSON(value?: NetworkType | null): any {
    return value as any;
}

