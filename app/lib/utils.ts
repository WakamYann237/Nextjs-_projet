import {type ClassValue, clsx } from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}

export const parseStringify = (value:any)  => JSON.parse(JSON.stringify(value));
export const covertFileToUrl = (file:File) => URL.createObjectURL(file)

export const formatDateTime = (dateString : Date | string) => {
    const dateTimeOptions: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,

    }; 
    const dateDayOptions: Intl.DateTimeFormatOptions = {
       weekday: "short", 
       year:"numeric",
       month:"2-digit",
       day:"2-digit",

    };
    const dateOptions: Intl.DateTimeFormatOptions = {
       weekday: "short", 
       year:"numeric",
       day:"numeric",

    };
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,

    }; 
    const formattedDateTime: string = new Date(dateString).toLocaleString(
        "en-US",
        dateTimeOptions
    );
    const formattedDateDay: string = new Date(dateString).toLocaleString(
        "en-US",
        dateDayOptions
    );

    const formattedDate: string = new Date(dateString).toLocaleString(
        "en-US",
        dateOptions
    );
    const formatedTime: string = new Date(dateString).toLocaleString(
        "en-US",
        timeOptions
    );
    return {
        dateTime : formattedDateTime,
        dateDay: formattedDateDay,
        dateOnly: formattedDate,
        timeOnly: formatedTime
    };
};

export function encryptKey(passKey: string){
    return btoa(passKey);
}
export function descryptKey(passKey: string){
    return atob(passKey);
}
