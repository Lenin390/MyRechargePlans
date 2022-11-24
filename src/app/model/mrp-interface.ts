export interface MRPInterface {
    
}

export interface Index {
    pageProps: PageProps;
    // __N_SSP:   boolean;
}

export interface PageProps {
    operators: Operator[];
}

export interface Operator {
    id:      number;
    name:    string;
    code:    string;
    slug:    string;
    logo:    string;
    service: Service;
}

export enum Service {
    Broadband = "BROADBAND",
    Dth = "DTH",
    Mobile = "MOBILE",
}
export interface catageory {
    name: Operator[];
    label: string;
}

// export interface PageProps {
//     operator:   Circle;
//     circle:     Circle;
//     page:       Page;
//     categories: Category[];
// }

// export interface Category {
//     name:     string;
//     fullName: string;
//     plans:    Plan[];
// }

export interface Plan {
    id:            number;
    amount:        number;
    validity:      string;
    talktime:      number;
    validityDays:  number | null;
    benefit:       string;
    calls:         Calls;
    sms:           string;
    data:          string;
    subscriptions: Operator[];
    remark:        string;
    rechargeable:  boolean;
    dailyCost:     number | null;
    addedAt:       Date;
}

export enum Calls {
    CallsUnlimitedLocalSTDRoaming = "Unlimited local STD & Roaming",
    Empty = "",
    PurpleUnlimitedLocalSTDRoaming = "Unlimited Local, STD & Roaming",
    UnlimitedLocalSTDRoaming = "Unlimited local, STD & Roaming",
    UnlimitedLocalSTDRoamingCalls = "unlimited Local, STD & Roaming calls",
    UnlimitedLocalSTDRoamingCallsOnAnyNetworkInIndia = "Unlimited local, STD & Roaming calls on any network in India",
}

export interface Page {
    lastChecked:          Date;
    postpaidLastChecked:  Date;
    prepaidLastModified:  Date;
    postpaidLastModified: Date;
    operators:            Operator[];
}

