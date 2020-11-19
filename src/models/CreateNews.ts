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
 * @interface CreateNews
 */
export interface CreateNews {
    /**
     * 
     * @type {string}
     * @memberof CreateNews
     */
    type: string;
    /**
     * 
     * @type {string}
     * @memberof CreateNews
     */
    headline: string;
    /**
     * 
     * @type {string}
     * @memberof CreateNews
     */
    footer: string;
    /**
     * 
     * @type {string}
     * @memberof CreateNews
     */
    content: string;
}

export function CreateNewsFromJSON(json: any): CreateNews {
    return CreateNewsFromJSONTyped(json, false);
}

export function CreateNewsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateNews {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'headline': json['headline'],
        'footer': json['footer'],
        'content': json['content'],
    };
}

export function CreateNewsToJSON(value?: CreateNews | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'headline': value.headline,
        'footer': value.footer,
        'content': value.content,
    };
}


