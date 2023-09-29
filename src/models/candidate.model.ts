export interface ICandidate {
    id: string;
    name: {
        fName: string;
        lName: string;
    };
    location: {
        city: string;
        country: string;
    };
    education: {
        degree: string;
        university: string;
        startYear: number;
        endYear: number;
    };
    hashTags: string[];
    tags: string[];
    videoCount?: number;
    programCount?: number;
}
