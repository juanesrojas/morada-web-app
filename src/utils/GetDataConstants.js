
import {BUSINESS_TYPES, CITIES, PROPERTY_TYPES} from './../constants/data'

export const getPropertyTypeLabel = (id) => {
    return PROPERTY_TYPES[id] || '-';
}

export const getBusinessTypeLabel = (id) => {
    return BUSINESS_TYPES[id] || '-';
}

export const getCityZoneLabel = (cityId, zoneId) => {
    const cityObject = CITIES[cityId] || {city: '', zones: {}};
    const zoneValue = cityObject.zones[zoneId] || '-';
    return `${zoneValue},${cityObject.city}`;
}