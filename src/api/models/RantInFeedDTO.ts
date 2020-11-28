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
import {
    AssetDTO,
    AssetDTOFromJSON,
    AssetDTOFromJSONTyped,
    AssetDTOToJSON,
} from './';

/**
 * 
 * @export
 * @interface RantInFeedDTO
 */
export interface RantInFeedDTO {
    /**
     * 
     * @type {string}
     * @memberof RantInFeedDTO
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof RantInFeedDTO
     */
    content: string;
    /**
     * 
     * @type {AssetDTO}
     * @memberof RantInFeedDTO
     */
    asset: AssetDTO;
    /**
     * 
     * @type {number}
     * @memberof RantInFeedDTO
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof RantInFeedDTO
     */
    comments: number;
    /**
     * 
     * @type {string}
     * @memberof RantInFeedDTO
     */
    owner: string;
    /**
     * 
     * @type {Date}
     * @memberof RantInFeedDTO
     */
    updatedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof RantInFeedDTO
     */
    createdAt: Date;
    /**
     * 
     * @type {Array<string>}
     * @memberof RantInFeedDTO
     */
    tags: Array<string>;
}

export function RantInFeedDTOFromJSON(json: any): RantInFeedDTO {
    return RantInFeedDTOFromJSONTyped(json, false);
}

export function RantInFeedDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): RantInFeedDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'content': json['content'],
        'asset': AssetDTOFromJSON(json['asset']),
        'score': json['score'],
        'comments': json['comments'],
        'owner': json['owner'],
        'updatedAt': (new Date(json['updatedAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'tags': json['tags'],
    };
}

export function RantInFeedDTOToJSON(value?: RantInFeedDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'content': value.content,
        'asset': AssetDTOToJSON(value.asset),
        'score': value.score,
        'comments': value.comments,
        'owner': value.owner,
        'updatedAt': (value.updatedAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'tags': value.tags,
    };
}


