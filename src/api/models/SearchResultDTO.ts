/* tslint:disable */
/* eslint-disable */
/**
 * drant-community
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SearchResultDTO
 */
export interface SearchResultDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResultDTO
     */
    rants: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchResultDTO
     */
    users: Array<string>;
}

export function SearchResultDTOFromJSON(json: any): SearchResultDTO {
    return SearchResultDTOFromJSONTyped(json, false);
}

export function SearchResultDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchResultDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rants': json['rants'],
        'users': json['users'],
    };
}

export function SearchResultDTOToJSON(value?: SearchResultDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rants': value.rants,
        'users': value.users,
    };
}


