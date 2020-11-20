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
 * @interface UserWithToken
 */
export interface UserWithToken {
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserWithToken
     */
    social: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    about: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    skills: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    location: string;
    /**
     * 
     * @type {string}
     * @memberof UserWithToken
     */
    createdAt: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserWithToken
     */
    supporter: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UserWithToken
     */
    moderator: boolean;
}

export function UserWithTokenFromJSON(json: any): UserWithToken {
    return UserWithTokenFromJSONTyped(json, false);
}

export function UserWithTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserWithToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'social': json['social'],
        'about': json['about'],
        'skills': json['skills'],
        'location': json['location'],
        'createdAt': json['createdAt'],
        'supporter': json['supporter'],
        'moderator': json['moderator'],
    };
}

export function UserWithTokenToJSON(value?: UserWithToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'social': value.social,
        'about': value.about,
        'skills': value.skills,
        'location': value.location,
        'createdAt': value.createdAt,
        'supporter': value.supporter,
        'moderator': value.moderator,
    };
}


