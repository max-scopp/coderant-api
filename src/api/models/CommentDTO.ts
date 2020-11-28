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
 * @interface CommentDTO
 */
export interface CommentDTO {
    /**
     * 
     * @type {Array<string>}
     * @memberof CommentDTO
     */
    votes: Array<string>;
    /**
     * 
     * @type {AssetDTO}
     * @memberof CommentDTO
     */
    asset: AssetDTO;
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    owner: string;
    /**
     * 
     * @type {string}
     * @memberof CommentDTO
     */
    content: string;
    /**
     * 
     * @type {Date}
     * @memberof CommentDTO
     */
    updatedAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof CommentDTO
     */
    createdAt: Date;
    /**
     * 
     * @type {number}
     * @memberof CommentDTO
     */
    score: number;
    /**
     * 
     * @type {number}
     * @memberof CommentDTO
     */
    userVoteState: number;
}

export function CommentDTOFromJSON(json: any): CommentDTO {
    return CommentDTOFromJSONTyped(json, false);
}

export function CommentDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'votes': json['votes'],
        'asset': AssetDTOFromJSON(json['asset']),
        'uuid': json['uuid'],
        'owner': json['owner'],
        'content': json['content'],
        'updatedAt': (new Date(json['updatedAt'])),
        'createdAt': (new Date(json['createdAt'])),
        'score': json['score'],
        'userVoteState': json['userVoteState'],
    };
}

export function CommentDTOToJSON(value?: CommentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'votes': value.votes,
        'asset': AssetDTOToJSON(value.asset),
        'uuid': value.uuid,
        'owner': value.owner,
        'content': value.content,
        'updatedAt': (value.updatedAt.toISOString()),
        'createdAt': (value.createdAt.toISOString()),
        'score': value.score,
        'userVoteState': value.userVoteState,
    };
}


