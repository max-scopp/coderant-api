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
 * @interface VoteDTO
 */
export interface VoteDTO {
    /**
     * 
     * @type {string}
     * @memberof VoteDTO
     */
    by: string;
    /**
     * 
     * @type {number}
     * @memberof VoteDTO
     */
    state: number;
}

export function VoteDTOFromJSON(json: any): VoteDTO {
    return VoteDTOFromJSONTyped(json, false);
}

export function VoteDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): VoteDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'by': json['by'],
        'state': json['state'],
    };
}

export function VoteDTOToJSON(value?: VoteDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'by': value.by,
        'state': value.state,
    };
}


